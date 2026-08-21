/**
 * Theme picker card store: mirrors the persisted selection and the theme
 * runtime revision. The plugin's apply-world listeners are the only writers;
 * the component reads through props.useStore.
 */

import { defineStore, type EngineStoreHandle } from '@deepseek-ai/dsh-client-runtime/client'
import { NO_SELECTION } from '../settings.ts'

/** Card state mirrored from the settings scope and the theme snapshot. */
export interface ThemesCardState {
  /** Persisted selection (`minimalist-*` id) or empty when following the built-in preference. */
  selected: string
  /** Monotonic guard; -1 until the first sync so revision 0 lands as a change. */
  revision: number
}

/** Declared action shape giving the exported factory a stable return type. */
type ThemesCardActions = {
  setSelected: (draft: ThemesCardState, selected: string, revision: number) => void
}

/**
 * Declares the card state and write surface.
 * @returns the store handle.
 */
export function createThemesCardStore(): EngineStoreHandle<ThemesCardState, ThemesCardActions> {
  return defineStore({
    init: (): ThemesCardState => ({ selected: NO_SELECTION, revision: -1 }),
    actions: {
      setSelected: (d, selected: string, revision: number) => {
        if (revision <= d.revision) return
        d.selected = selected
        d.revision = revision
      },
    },
  })
}
