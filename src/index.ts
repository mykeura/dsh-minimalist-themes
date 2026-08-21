/**
 * Minimalist Themes — Host half.
 *
 * Registers the durable `minimalist-themes` settings namespace so the
 * user-settings document persists the selection and the web Settings page
 * serves the namespace the browser card keys on. No other host behavior:
 * palette application lives entirely in the browser half through the theme
 * runtime (`ctx.theme`).
 */

import type { Context } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'
import { settingsNamespace } from '@deepseek-ai/dsh-settings'
import { MINIMALIST_SETTINGS_NAMESPACE, NO_SELECTION, THEME_FIELD } from './settings.ts'

export const name = 'minimalist-themes'

const NAMESPACE = settingsNamespace(MINIMALIST_SETTINGS_NAMESPACE)

/** Durable selection section: one optional registered-theme id. */
export interface Config {
  /** Selected `minimalist-*` theme id, or empty for the built-in preference. */
  [THEME_FIELD]?: string
}

/** Wire/registry schema for the selection section. */
export const ConfigSchema: z<Config> = z.object({
  [THEME_FIELD]: z.string().default(NO_SELECTION),
})

/**
 * Mount the settings namespace when the optional settings service exists.
 * @param ctx - host context that may acquire the settings service.
 */
export function apply(ctx: Context): void {
  ctx.inject(['settings'], (settingsCtx) => {
    settingsCtx.settings.register(NAMESPACE, ConfigSchema)
  })
}
