import z from "@deepseek-ai/schemastery";
//#region src/settings.ts
/**
* Durable selection contract shared by both halves. The Host registers the
* namespace into the user-settings document; the browser half reads and
* writes the single `theme` field through its settings scope. Key presence
* marks an explicit selection; absence means "follow the built-in
* light/dark/system preference".
*/
/** Settings namespace owned by this plugin (the join key between halves and the card key). */
const MINIMALIST_SETTINGS_NAMESPACE = "minimalist-themes";
/** Field carrying the selected registered theme id (empty string = no selection). */
const THEME_FIELD = "theme";
//#endregion
//#region src/index.ts
const name = "minimalist-themes";
/** Wire/registry schema for the selection section. */
const ConfigSchema = z.object({ [THEME_FIELD]: z.string().default("") });
/**
* Mount the settings namespace when the optional settings service exists.
* @param ctx - host context that may acquire the settings service.
*/
function apply(ctx) {
	ctx.inject(["settings"], (settingsCtx) => {
		settingsCtx.settings.register(MINIMALIST_SETTINGS_NAMESPACE, ConfigSchema);
	});
}
//#endregion
export { ConfigSchema, apply, name };

//# sourceMappingURL=index.mjs.map