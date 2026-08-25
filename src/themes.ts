/**
 * The Minimalist theme catalog: every collection palette becomes one light
 * `ThemeDefinition` registered into the DSH theme runtime. Ids are prefixed
 * to stay namespaced against built-ins and other plugins' registrations.
 */

import { MINIMALIST_PALETTES, type MinimalistPalette } from './palettes.ts'
import { palettePreview, paletteToThemeTokens } from './palette.ts'
import type { ThemeDefinition } from './theme-types.ts'

/** Prefix keeping our ids namespaced (`minimalist-<slug>`). */
export const THEME_ID_PREFIX = 'minimalist-'

/** Full registered id for one palette slug. */
export function themeId(palette: MinimalistPalette): string {
  return `${THEME_ID_PREFIX}${palette.id}`
}

/** All catalog themes in collection (alphabetical) order. */
export const MINIMALIST_THEMES: readonly ThemeDefinition[] = MINIMALIST_PALETTES.map((palette) => ({
  id: themeId(palette),
  colorScheme: 'light' as const,
  tokens: paletteToThemeTokens(palette),
}))

/** Look up a palette record by registered theme id. */
export function paletteByThemeId(id: string): MinimalistPalette | undefined {
  if (!id.startsWith(THEME_ID_PREFIX)) return undefined
  return MINIMALIST_PALETTES.find((palette) => themeId(palette) === id)
}

export { palettePreview }
