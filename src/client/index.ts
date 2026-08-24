/**
 * Minimalist Themes — browser half.
 *
 * Registers every Minimalist Chrome palette into the DSH theme runtime as a
 * light `ThemeDefinition`, persists the user's pick in this browser's
 * localStorage, and renders the picker card into the Plugins settings
 * section.
 *
 * WHY LOCALSTORAGE AND NOT THE SETTINGS DOCUMENT: the settings document is
 * shared state with one preference slot owned by the built-in appearance
 * feature (`ui-theme`). Any write here commits the whole document, which
 * invalidates every bound scope; ui-theme's adoption then restores its own
 * persisted built-in preference and stomps the active custom theme back to
 * light/dark/system. Worse, that stomp is observationally identical to a
 * legitimate Appearance-row pick, so no client-side protocol can separate
 * them. Persisting browser-locally keeps the two features fully decoupled:
 * picking a Minimalist theme never touches the document, so ui-theme never
 * refetches and never fights. The tradeoff — the selection does not roam
 * across browsers — is inherent to that decoupling. The Host half still
 * registers the `minimalist-themes` namespace because the Plugins tab pairs
 * cards against served namespaces.
 *
 * PICK CHOREOGRAPHY — circular reveal: a card pick runs the synchronous
 * application inside a same-document View Transition and uncovers the new
 * palette with a GPU-composited clip-path circle growing from the clicked
 * control. Only the interactive path animates (boot restore and cross-tab
 * echoes apply silently), and environments without the API — or users with
 * reduced motion — get the plain instant swap (see the choreography
 * section below).
 */

import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type { BoundActions } from '@deepseek-ai/dsh-client-ui-slots'
// Type-only: the keyed `settings.plugin.item` slot declaration.
import type {} from '@deepseek-ai/dsh-client-ui-settings-plugins/client'
// Type-only: pulls the locale plugin's Context merge (ctx.locale).
import type {} from '@deepseek-ai/dsh-client-locale/client'
// Type-only: the ctx.theme service merge and the `theme/change` event.
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'
import { MINIMALIST_THEMES, paletteByThemeId } from '../themes.ts'
import type { ThemeRuntimeFace, ThemeTokenOverrides } from '../theme-types.ts'
import { createThemesCardStore } from './card-store.ts'
import { en, zh, type ThemesCardKey } from './locales.ts'
import { ThemesCard, type RevealOrigin, type ThemesCardInjected } from './ThemesCard.tsx'
// Side-effect import: the build's CSS-Modules pipeline installs this sheet
// (view-transition pseudo rules + the capture-bracket freeze) as a
// plugin-owned <style> at factory time.
import './Reveal.module.css'

/** Locale namespace carrying the picker card copy. */
export const CARD_LOCALE_NS = 'minimalist-themes.card'

/** localStorage key holding the selected registered theme id. */
const STORAGE_KEY = 'dsh-minimalist-themes/selection'

/** Override-layer source identity (one layer per source in the theme runtime). */
const OVERRIDE_SOURCE = 'minimalist-themes'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** The Minimalist themes picker card copy. */
    'minimalist-themes.card': ThemesCardKey
  }
}

/** Whether an id names a catalog theme of this plugin. */
function isCatalogId(id: string): boolean {
  return paletteByThemeId(id) !== undefined
}

/**
 * Convert one catalog definition's token dictionary into the override-layer
 * shape: the same value for both palette modes. The layer is only ever live
 * over the light base (selecting a Minimalist palette pins the light
 * preference through the official API), but the runtime requires both modes.
 * @param id - registered catalog theme id.
 * @returns override pairs, or undefined when the id is unknown.
 */
function overridePairsFor(id: string): ThemeTokenOverrides | undefined {
  const definition = MINIMALIST_THEMES.find(definition => definition.id === id)
  if (definition === undefined) return undefined
  const pairs: ThemeTokenOverrides = {}
  for (const [name, value] of Object.entries(definition.tokens)) {
    pairs[name] = { light: value, dark: value }
  }
  return pairs
}

/** Read the persisted selection, tolerating missing storage or corrupt data. */
function readStoredSelection(): string {
  try {
    const value = globalThis.localStorage?.getItem(STORAGE_KEY) ?? ''
    return isCatalogId(value) ? value : ''
  } catch {
    return ''
  }
}

/** Persist or clear the selection, tolerating unavailable storage. */
function writeStoredSelection(id: string): void {
  try {
    if (id === '') globalThis.localStorage?.removeItem(STORAGE_KEY)
    else globalThis.localStorage?.setItem(STORAGE_KEY, id)
  } catch {
    // Storage unavailable (quota, privacy mode): selection stays session-local.
  }
}

/**
 * Pick choreography — constants and helpers. The reveal is the canonical
 * theme-toggle View Transition pattern: the browser photographs the page
 * around the synchronous token write, the injected sheet freezes the
 * default cross-fade, and a WAAPI clip-path circle on
 * ::view-transition-new(root) uncovers the new palette from the pick's
 * seat. All rendering happens on the snapshot pair (GPU-composited), so
 * the sweep stays smooth regardless of how much DOM the harness window
 * holds.
 */

/** <html> attribute freezing component transitions for the capture bracket. */
const SWAP_ATTRIBUTE = 'data-mt-swap'

/** Sweep duration: long enough to read the circle across the window, over within a beat. */
const REVEAL_DURATION_MS = 500

/** Sweep easing — mirrors ui-theme's `--ds-ease-in-out` token value. */
const REVEAL_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'

/**
 * Whether the choreography may run: the same-document View Transition API
 * must exist and the user must not have asked for reduced motion.
 * @returns true when a seated pick should animate.
 */
function revealSupported(): boolean {
  if (typeof document === 'undefined' || typeof document.startViewTransition !== 'function') return false
  if (typeof matchMedia === 'undefined') return true
  return !matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Apply one selection under a same-document View Transition, uncovering the
 * new palette with a circle growing from the pick's seat.
 *
 * The capture bracket attribute freezes component CSS transitions while
 * the transition runs: several DSH surfaces fade background-color over
 * ~100ms, and a mid-fade "new" photograph would show blended colors
 * through the whole sweep. Values changed under the freeze, so lifting it
 * re-triggers nothing. All three promise tails settle silently — a
 * superseded (rapid re-pick) or failed reveal must not surface as an
 * unhandled rejection, and the DOM swap itself has already landed by then.
 * @param origin - viewport seat (the clicked control's center).
 * @param apply - the synchronous selection application.
 */
function revealSelection(origin: RevealOrigin, apply: () => void): void {
  const root = document.documentElement
  root.setAttribute(SWAP_ATTRIBUTE, '')
  const transition = document.startViewTransition(apply)
  transition.updateCallbackDone.catch(() => {})
  transition.ready.then(() => {
    // Cover the farthest viewport corner: the circle fully replaces the old
    // look exactly when the sweep ends.
    const radius = Math.hypot(
      Math.max(origin.x, window.innerWidth - origin.x),
      Math.max(origin.y, window.innerHeight - origin.y),
    )
    root.animate(
      { clipPath: [`circle(0px at ${origin.x}px ${origin.y}px)`, `circle(${radius}px at ${origin.x}px ${origin.y}px)`] },
      { duration: REVEAL_DURATION_MS, easing: REVEAL_EASING, pseudoElement: '::view-transition-new(root)' },
    )
  }).catch(() => {})
  transition.finished.finally(() => { root.removeAttribute(SWAP_ATTRIBUTE) }).catch(() => {})
}

/**
 * Apply-world sync face pushed into the store and the card. The revision is
 * a local monotonic counter: every sync supersedes the previous one, so the
 * store's stale-guard drops only out-of-order duplicates.
 */
let syncSeq = 0

/**
 * Recompute the displayed selection and publish it to the card store. The
 * localStorage record is the single source of truth for display: the live
 * preference is always a built-in under the override-layer strategy.
 */
function makeSync(
  boundRef: { current: BoundActions<ReturnType<typeof createThemesCardStore>> | undefined },
): () => void {
  return () => {
    const bound = boundRef.current
    if (bound === undefined) return
    bound.setSelected(readStoredSelection(), syncSeq++)
  }
}

/**
 * Required services: slots/locale for the card surface, `theme` for the DSH
 * theme runtime this plugin extends. No settings transport: persistence is
 * browser-local by design (see module docblock).
 */
export const inject = ['slots', 'locale', 'theme']

/**
 * Client plugin body: register the catalog, keep the localStorage pick in
 * step with the live preference, and expose the picker card.
 *
 * APPLICATION STRATEGY — override layer, never a custom preference: the
 * active preference stays one of the official built-ins (selecting a
 * Minimalist palette pins `light` through the official `setTheme`), and the
 * palette itself rides an `overrideTokens` layer. ui-theme's adoption then
 * always agrees with its persisted field, so no document commit, refetch, or
 * reconnect can stomp the look. An Appearance-row pick to another built-in is
 * the single sanctioned escape hatch: it clears the stored selection and
 * drops the layer.
 * @param ctx - client cordis context.
 */
export function apply(ctx: ClientContext): void {
  const theme = ctx.theme as unknown as ThemeRuntimeFace

  // Register every palette (the picker previews read the catalog; the live
  // application goes through the override layer below). Disposal unregisters.
  for (const definition of MINIMALIST_THEMES) {
    ctx.effect(() => theme.register(definition), `minimalist-themes: ${definition.id}`)
  }

  // The override layer's disposer, restacked on every selection change and
  // torn down with the fiber.
  let disposeOverride: (() => void) | undefined
  ctx.effect(() => () => { disposeOverride?.() }, 'minimalist-themes: override teardown')

  /**
   * Restack (or clear) the palette layer for one catalog id.
   * @param id - registered theme id, or empty for no layer.
   */
  const restack = (id: string): void => {
    disposeOverride?.()
    disposeOverride = undefined
    if (id === '') return
    const pairs = overridePairsFor(id)
    if (pairs !== undefined) disposeOverride = theme.overrideTokens(OVERRIDE_SOURCE, pairs)
  }

  // While true, theme/change emissions belong to this plugin's own
  // application sequence (a base-preference pin and/or an overlay restack,
  // both of which publish) — never to a user pick in the Appearance row.
  let applyingOwnPreference = false

  /**
   * Apply one selection as a single atomic-looking sequence: pin the light
   * base through the official API (empty id restores `system`), restack the
   * palette layer, and record the choice. Every publish happens inside the
   * owned-preference guard so the watcher cannot misread our own steps.
   * @param id - registered catalog theme id, or empty to clear.
   */
  const applySelection = (id: string): void => {
    const target = id === '' || !isCatalogId(id) ? '' : id
    applyingOwnPreference = true
    try {
      const current = theme.getTheme().preference
      if (target === '') {
        restack('')
        if (current !== 'system') theme.setTheme('system')
      } else {
        if (current !== 'light') theme.setTheme('light')
        restack(target)
      }
      writeStoredSelection(target)
    } finally {
      applyingOwnPreference = false
    }
    sync()
  }

  const store = createThemesCardStore()
  const boundRef: { current: BoundActions<ReturnType<typeof createThemesCardStore>> | undefined } = { current: undefined }
  const sync = makeSync(boundRef)

  // Restore the persisted selection synchronously: localStorage reads are
  // immediate, so the custom palette applies on the first snapshot after
  // registration without waiting for any wire round trip.
  const stored = readStoredSelection()
  if (stored !== '') applySelection(stored)

  // Ownership rule over the local record: a change to a built-in preference
  // that THIS plugin did not cause is a user pick in the Appearance row (or a
  // cross-tab echo of one) — clear the stored selection and drop the layer.
  // Changes while `applyingOwnPreference` is set are our own light-base pins.
  ctx.effect(
    () => ctx.on('theme/change', () => {
      if (!applyingOwnPreference) {
        const preference = theme.getTheme().preference
        if (!isCatalogId(preference)) {
          writeStoredSelection('')
          restack('')
        }
      }
      sync()
    }),
    'minimalist-themes: preference watcher',
  )

  // Follow selections made in another tab of the same browser.
  if (typeof window !== 'undefined') {
    ctx.effect(() => {
      const onStorage = (event: StorageEvent): void => {
        if (event.key !== STORAGE_KEY && event.key !== null) return
        const value = readStoredSelection()
        applySelection(value)
      }
      window.addEventListener('storage', onStorage)
      return () => { window.removeEventListener('storage', onStorage) }
    }, 'minimalist-themes: cross-tab selection')
  }

  ctx.effect(
    () => ctx.locale.register(CARD_LOCALE_NS, { zh, en }),
    'minimalist-themes: card dictionaries',
  )

  const injected = (actions: BoundActions<ReturnType<typeof createThemesCardStore>>): ThemesCardInjected => {
    boundRef.current = actions
    sync()
    return {
      selectTheme: (id: string, origin?: RevealOrigin) => {
        // Only the interactive path choreographs: boot restore and cross-tab
        // echoes apply silently (no seat), and unsupported environments
        // degrade to the plain synchronous swap.
        if (origin !== undefined && revealSupported()) revealSelection(origin, () => { applySelection(id) })
        else applySelection(id)
      },
    }
  }

  ctx.slots.inject('settings.plugin.item', function* () {
    yield ctx.slots.register({
      name: 'settings.plugin.item',
      key: 'minimalist-themes',
      locale: CARD_LOCALE_NS,
      store,
      inject: injected,
    }, ThemesCard)
  })
}
