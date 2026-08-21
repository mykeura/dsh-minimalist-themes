/**
 * Theme picker card registered into the Plugins settings section under this
 * plugin's namespace. Renders one swatch per Minimalist palette — frame,
 * canvas, and omnibox bands straight from the Chrome manifest colors — plus
 * a reset entry that hands control back to the built-in light/dark/system
 * preference. Selection writes through the injected face; the palette colors
 * ride component-local custom properties (the sanctioned inline-style use).
 */

import clsx from 'clsx'
import type { CSSProperties } from 'react'
import type { PropsLocale, PropsRuntime, PropsStore } from '@deepseek-ai/dsh-client-ui-slots'
import { MINIMALIST_PALETTES } from '../palettes.generated.ts'
import { THEME_ID_PREFIX } from '../themes.ts'
import { palettePreview } from '../palette.ts'
import type { createThemesCardStore } from './card-store.ts'
import type { ThemesCardKey } from './locales.ts'
import css from './ThemesCard.module.css'

/** Component-local custom properties carrying one palette's preview colors. */
interface SwatchVars extends CSSProperties {
  '--mt-frame': string
  '--mt-canvas': string
  '--mt-omnibox': string
}

/** Injected business face: select a theme, or clear back to the built-in preference. */
export interface ThemesCardInjected {
  /** Persist and apply one `minimalist-*` id, or empty string to clear. */
  selectTheme: (id: string) => void
}

/** Full component props: runtime share + store share + locale seat + injected face. */
export type ThemesCardComponentProps =
  PropsRuntime<'settings.plugin.item'> & PropsStore<ReturnType<typeof createThemesCardStore>>
  & PropsLocale<'minimalist-themes.card'> & ThemesCardInjected

/**
 * Render the Minimalist themes picker card.
 * @param props - composed slot props.
 * @returns the card element tree.
 */
export function ThemesCard({ t, useStore, selectTheme }: ThemesCardComponentProps) {
  const selected = useStore(s => s.selected)
  return (
    <div className={css.card}>
      <div className={css.intro}>
        <div className={css.title}>{t('card.title')}</div>
        <div className={css.description}>{t('card.description')}</div>
      </div>
      <button
        type="button"
        className={clsx(css.reset, selected === '' && css.resetSelected)}
        aria-pressed={selected === ''}
        onClick={() => { selectTheme('') }}
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
              onClick={() => { selectTheme(id) }}
            >
              <span className={css.bands} aria-hidden="true">
                <span className={css.bandFrame} />
                <span className={css.bandCanvas} />
                <span className={css.bandOmnibox} />
              </span>
              <span className={css.name}>{palette.title.replace(/^Minimalist\s+/, '')}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
