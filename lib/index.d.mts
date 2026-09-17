import z from "@deepseek-ai/schemastery";
import { Context } from "@deepseek-ai/cordis";
//#region src/settings.d.ts
/** Field carrying the selected registered theme id (empty string = no selection). */
declare const THEME_FIELD = "theme";
//#endregion
//#region src/index.d.ts
export declare const name = "minimalist-themes";
/** Durable selection section: one optional registered-theme id. */
export interface Config {
  /** Selected `minimalist-*` theme id, or empty for the built-in preference. */
  [THEME_FIELD]?: string;
}
/** Wire/registry schema for the selection section. */
export declare const ConfigSchema: z<Config>;
/**
 * Mount the settings namespace when the optional settings service exists.
 * @param ctx - host context that may acquire the settings service.
 */
export declare function apply(ctx: Context): void;
//#endregion