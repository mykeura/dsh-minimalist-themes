/**
 * Theme picker card registered into the Plugins settings section under this
 * plugin's namespace. The card chrome mirrors the section's other plugin
 * cards (shell, agent loop, web search): a header naming the plugin that
 * discloses its controls in place — replicated here rather than imported
 * because cross-plugin value imports are forbidden by the bundle-purity
 * gate; only the shared primitives icon rides the module table.
 *
 * The body holds a reset entry and one swatch per Minimalist palette —
 * frame/canvas/omnibox bands straight from the Chrome manifest colors.
 * Selection applies immediately (no staged form), so unlike the form cards
 * there is no footer; the header pill names the active palette even while
 * collapsed. Palette colors ride component-local custom properties (the
 * sanctioned inline-style use). Each pick hands its control's viewport
 * seat to the plugin body, which sweeps the new palette in through a
 * circular reveal (View Transition; instant where unsupported).
 */

import { useState, type CSSProperties } from 'react'
import clsx from 'clsx'
import { IconChevronDownOutline14 } from '@deepseek-ai/dsh-client-ui-primitives'
import type { PropsLocale, PropsRuntime, PropsStore } from '@deepseek-ai/dsh-client-ui-slots'
import { MINIMALIST_PALETTES } from '../palettes.generated.ts'
import { THEME_ID_PREFIX } from '../themes.ts'
import { palettePreview } from '../palette.ts'
import type { createThemesCardStore } from './card-store.ts'
import type { ThemesCardKey } from './locales.ts'
import css from './ThemesCard.module.css'

/** Viewport seat one pick's reveal grows from: the clicked control's center, in px. */
export interface RevealOrigin {
  x: number
  y: number
}

/** Injected business face: select a theme, or clear back to the built-in preference. */
export interface ThemesCardInjected {
  /**
   * Persist and apply one `minimalist-*` id, or empty string to clear.
   * With a seat, the palette lands through the circular reveal; without
   * one (or where the choreography cannot run) the swap is instant.
   */
  selectTheme: (id: string, origin?: RevealOrigin) => void
}

/** Full component props: runtime share + store share + locale seat + injected face. */
export type ThemesCardComponentProps =
  PropsRuntime<'settings.plugin.item'> & PropsStore<ReturnType<typeof createThemesCardStore>>
  & PropsLocale<'minimalist-themes.card'> & ThemesCardInjected

/** Short display name: the collection title without its "Minimalist" prefix. */
function shortName(title: string): string {
  return title.replace(/^Minimalist\s+/, '')
}

/**
 * Viewport center of one picker control — the seat its pick's reveal grows
 * from. Rect center rather than pointer coordinates so keyboard activation
 * (Enter/Space fire click without pointer data) seats the circle too.
 * @param element - the clicked button.
 * @returns its center in viewport pixels.
 */
function clickSeat(element: Element): RevealOrigin {
  const rect = element.getBoundingClientRect()
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
}

/**
 * Render the Minimalist themes picker card.
 * @param props - composed slot props.
 * @returns the card element tree.
 */
export function ThemesCard({ t, useStore, selectTheme }: ThemesCardComponentProps) {
  const [open, setOpen] = useState(false)
  const selected = useStore(s => s.selected)
  const active = MINIMALIST_PALETTES.find(palette => `${THEME_ID_PREFIX}${palette.id}` === selected)
  return (
    <li className={clsx(css.card, open && css.cardOpen)}>
      <button
        type="button"
        className={css.header}
        aria-expanded={open}
        onClick={() => { setOpen(!open) }}
      >
        <span className={css.headText}>
          <span className={css.name}>{t('card.title')}</span>
          <span className={css.description}>{t('card.description')}</span>
        </span>
        {active !== undefined ? (
          <span
            className={css.pending}
            style={{ '--mt-frame': palettePreview(active).frame } as SwatchVars}
          >
            <span className={css.pendingDot} aria-hidden="true" />
            {shortName(active.title)}
          </span>
        ) : null}
        <IconChevronDownOutline14 className={clsx(css.chevron, open && css.chevronOpen)} />
      </button>
      {open
        ? (
          <div className={css.body}>
            <button
              type="button"
              className={clsx(css.reset, selected === '' && css.resetSelected)}
              aria-pressed={selected === ''}
              onClick={(event) => { selectTheme('', clickSeat(event.currentTarget)) }}
            >
              {t('card.followBuiltIn')}
            </button>
            <div className={css.grid} role="listbox" aria-label={t('card.title')}>
              {MINIMALIST_PALETTES.map((palette) => {
                const id = `${THEME_ID_PREFIX}${palette.id}`
                const preview = palettePreview(palette)
                const isSelected = selected === id
                return (
                  <button
                    key={id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={clsx(css.swatch, isSelected && css.selected)}
                    style={{
                      '--mt-frame': preview.frame,
                      '--mt-canvas': preview.canvas,
                      '--mt-omnibox': preview.omnibox,
                    } as SwatchVars}
                    onClick={(event) => { selectTheme(id, clickSeat(event.currentTarget)) }}
                  >
                    <span className={css.bands} aria-hidden="true">
                      <span className={css.bandFrame} />
                      <span className={css.bandCanvas} />
                      <span className={css.bandOmnibox} />
                    </span>
                    <span className={css.swatchName}>{shortName(palette.title)}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )
        : null}
    </li>
  )
}

/** Component-local custom properties carrying one palette's preview colors. */
interface SwatchVars extends CSSProperties {
  '--mt-frame': string
  '--mt-canvas': string
  '--mt-omnibox': string
}
