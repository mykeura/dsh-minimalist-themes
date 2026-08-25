window.__ModuleLoader__.load({
	id: "@mykeura/dsh-minimalist-themes",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-runtime/client");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/palettes.ts
		const MINIMALIST_PALETTES = Object.freeze([
			Object.freeze({
				id: "beetroot-juice",
				title: "Minimalist Beetroot Juice",
				colors: Object.freeze({
					accent: [
						230,
						176,
						170
					],
					canvas: [
						246,
						225,
						223
					],
					field: [
						216,
						198,
						197
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						246,
						225,
						223
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						230,
						176,
						170
					]
				})
			}),
			Object.freeze({
				id: "blackberry-juice",
				title: "Minimalist Blackberry Juice",
				colors: Object.freeze({
					accent: [
						193,
						155,
						238
					],
					canvas: [
						230,
						215,
						248
					],
					field: [
						251,
						249,
						254
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						230,
						215,
						248
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						193,
						155,
						238
					]
				})
			}),
			Object.freeze({
				id: "coffee-with-milk",
				title: "Minimalist Coffee With Milk",
				colors: Object.freeze({
					accent: [
						229,
						199,
						148
					],
					canvas: [
						230,
						215,
						195
					],
					field: [
						249,
						245,
						239
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						230,
						215,
						195
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						229,
						199,
						148
					]
				})
			}),
			Object.freeze({
				id: "cornmeal-porridge",
				title: "Minimalist Cornmeal Porridge",
				colors: Object.freeze({
					accent: [
						255,
						218,
						155
					],
					canvas: [
						255,
						246,
						180
					],
					field: [
						255,
						255,
						255
					],
					ink: [
						0,
						0,
						0
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						255,
						246,
						180
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						255,
						218,
						155
					]
				})
			}),
			Object.freeze({
				id: "diana-yin",
				title: "Minimalist Diana Yin",
				colors: Object.freeze({
					accent: [
						75,
						56,
						123
					],
					canvas: [
						200,
						191,
						231
					],
					field: [
						239,
						237,
						255
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						200,
						191,
						231
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						75,
						56,
						123
					]
				})
			}),
			Object.freeze({
				id: "grape-juice",
				title: "Minimalist Grape Juice",
				colors: Object.freeze({
					accent: [
						171,
						165,
						220
					],
					canvas: [
						219,
						217,
						240
					],
					field: [
						248,
						248,
						252
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						219,
						217,
						240
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						171,
						165,
						220
					]
				})
			}),
			Object.freeze({
				id: "green-tea",
				title: "Minimalist Green Tea",
				colors: Object.freeze({
					accent: [
						169,
						223,
						156
					],
					canvas: [
						227,
						245,
						222
					],
					field: [
						200,
						216,
						196
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						227,
						245,
						222
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						169,
						223,
						156
					]
				})
			}),
			Object.freeze({
				id: "hibiscus-tea",
				title: "Minimalist Hibiscus Tea",
				colors: Object.freeze({
					accent: [
						245,
						183,
						177
					],
					canvas: [
						250,
						223,
						220
					],
					field: [
						219,
						196,
						194
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						250,
						223,
						220
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						245,
						183,
						177
					]
				})
			}),
			Object.freeze({
				id: "horchata",
				title: "Minimalist Horchata",
				colors: Object.freeze({
					accent: [
						239,
						216,
						190
					],
					canvas: [
						250,
						243,
						234
					],
					field: [
						209,
						208,
						203
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						250,
						243,
						234
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						239,
						216,
						190
					]
				})
			}),
			Object.freeze({
				id: "mango",
				title: "Minimalist Mango",
				colors: Object.freeze({
					accent: [
						255,
						226,
						166
					],
					canvas: [
						255,
						245,
						221
					],
					field: [
						224,
						216,
						196
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						255,
						245,
						221
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						255,
						226,
						166
					]
				})
			}),
			Object.freeze({
				id: "mint",
				title: "Minimalist Mint",
				colors: Object.freeze({
					accent: [
						182,
						239,
						207
					],
					canvas: [
						213,
						245,
						227
					],
					field: [
						161,
						210,
						183
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						213,
						245,
						227
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						182,
						239,
						207
					]
				})
			}),
			Object.freeze({
				id: "nance-juice",
				title: "Minimalist Nance Juice",
				colors: Object.freeze({
					accent: [
						247,
						220,
						111
					],
					canvas: [
						254,
						252,
						241
					],
					field: [
						224,
						223,
						214
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						254,
						252,
						241
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						247,
						220,
						111
					]
				})
			}),
			Object.freeze({
				id: "oceans",
				title: "Minimalist Oceans",
				colors: Object.freeze({
					accent: [
						94,
						189,
						246
					],
					canvas: [
						185,
						226,
						251
					],
					field: [
						243,
						250,
						254
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						185,
						226,
						251
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						94,
						189,
						246
					]
				})
			}),
			Object.freeze({
				id: "orange-juice",
				title: "Minimalist Orange Juice",
				colors: Object.freeze({
					accent: [
						245,
						203,
						167
					],
					canvas: [
						252,
						241,
						232
					],
					field: [
						222,
						212,
						205
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						252,
						241,
						232
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						245,
						203,
						167
					]
				})
			}),
			Object.freeze({
				id: "snow-water",
				title: "Minimalist Snow Water",
				colors: Object.freeze({
					accent: [
						174,
						214,
						241
					],
					canvas: [
						232,
						244,
						252
					],
					field: [
						200,
						216,
						196
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						232,
						244,
						252
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						174,
						214,
						241
					]
				})
			}),
			Object.freeze({
				id: "turquoise",
				title: "Minimalist Turquoise",
				colors: Object.freeze({
					accent: [
						162,
						217,
						206
					],
					canvas: [
						221,
						242,
						237
					],
					field: [
						195,
						213,
						209
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						221,
						242,
						237
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						162,
						217,
						206
					]
				})
			}),
			Object.freeze({
				id: "ultramarine",
				title: "Minimalist Ultramarine",
				colors: Object.freeze({
					accent: [
						156,
						172,
						236
					],
					canvas: [
						210,
						217,
						244
					],
					field: [
						242,
						244,
						253
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						210,
						217,
						244
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						156,
						172,
						236
					]
				})
			}),
			Object.freeze({
				id: "yuzu",
				title: "Minimalist Yuzu",
				colors: Object.freeze({
					accent: [
						214,
						237,
						161
					],
					canvas: [
						238,
						246,
						218
					],
					field: [
						218,
						224,
						204
					],
					ink: [
						58,
						62,
						65
					],
					inkAlt: [
						60,
						64,
						67
					],
					inkSoft: [
						102,
						106,
						109
					],
					backdrop: [
						238,
						246,
						218
					],
					paper: [
						255,
						255,
						255
					],
					button: [
						214,
						237,
						161
					]
				})
			})
		]);
		//#endregion
		//#region src/palette.ts
		const WHITE = [
			255,
			255,
			255
		];
		const BLACK = [
			0,
			0,
			0
		];
		/** Mix two colors; `t = 0` returns `a`, `t = 1` returns `b`. */
		function mix(a, b, t) {
			const clamped = Math.min(1, Math.max(0, t));
			return [
				Math.round(a[0] + (b[0] - a[0]) * clamped),
				Math.round(a[1] + (b[1] - a[1]) * clamped),
				Math.round(a[2] + (b[2] - a[2]) * clamped)
			];
		}
		/** `rgb(r, g, b)` serialization. */
		function rgb(c) {
			return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
		}
		/** `rgba(r, g, b, a)` serialization. */
		function rgba(c, alpha) {
			const a = Math.min(1, Math.max(0, alpha));
			return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${Number.isInteger(a) ? a : a.toFixed(3)})`;
		}
		/** Relative luminance (Rec. 709 coefficients), 0–1. */
		function luminance(c) {
			return (.2126 * c[0] + .7152 * c[1] + .0722 * c[2]) / 255;
		}
		/**
		* Deep interactive shade of the pastel accent: dark enough for white text
		* (WCAG AA on the fill) while keeping the theme hue. Falls back to the theme
		* ink for extremely light frames.
		*/
		function accentInk(accent, ink) {
			let shade = mix(accent, BLACK, .62);
			if (luminance(shade) > .28) shade = mix(shade, BLACK, .35);
			return luminance(shade) < luminance(ink) ? shade : ink;
		}
		/**
		* Build the alias-token override dictionary for one Minimalist palette.
		* @param palette - Minimalist collection palette record.
		* @returns token names mapped to concrete CSS values (light scheme).
		*/
		function paletteToThemeTokens(palette) {
			const c = palette.colors;
			const accent = c.accent ?? c.button ?? [
				207,
				211,
				214
			];
			const canvas = c.canvas ?? c.backdrop ?? accent;
			const field = c.field ?? mix(canvas, WHITE, .4);
			const ink = c.ink ?? c.inkAlt ?? [
				58,
				62,
				65
			];
			const inkSoft = c.inkSoft ?? mix(ink, WHITE, .3);
			const paper = c.paper ?? WHITE;
			const deep = accentInk(accent, ink);
			const borderBase = mix(accent, BLACK, .3);
			const hoverBase = mix(accent, BLACK, .5);
			return {
				"--dsw-alias-bg-base": rgb(canvas),
				"--dsw-alias-bg-layer-1": rgb(paper),
				"--dsw-alias-bg-layer-2": rgb(mix(canvas, paper, .55)),
				"--dsw-alias-bg-layer-3": rgb(mix(canvas, paper, .35)),
				"--dsw-alias-bg-module-platform": rgb(mix(canvas, paper, .5)),
				"--dsw-alias-bg-multi-select": rgb(mix(canvas, paper, .5)),
				"--dsw-alias-bg-overlay": rgb(mix(canvas, paper, .2)),
				"--dsw-specific-sidebar-fill": rgb(accent),
				"--dsw-specific-sidebar-nav-item-active-accent": rgb(mix(accent, paper, .45)),
				"--dsw-specific-sidebar-nav-item-active": rgb(mix(accent, paper, .62)),
				"--dsw-specific-sidebar-nav-item-hover": rgb(mix(accent, paper, .78)),
				"--dsw-specific-input-major": rgb(mix(field, paper, .6)),
				"--dsw-specific-login-input": rgb(mix(field, paper, .7)),
				"--dsw-specific-selector": rgb(mix(field, paper, .35)),
				"--dsw-specific-tip": rgb(mix(canvas, paper, .4)),
				"--dsw-alias-label-primary": rgb(ink),
				"--dsw-alias-label-secondary": rgb(inkSoft),
				"--dsw-alias-label-tertiary": rgb(mix(inkSoft, paper, .15)),
				"--dsw-alias-label-caption": rgb(mix(inkSoft, paper, .28)),
				"--dsw-alias-label-dimmed": rgb(mix(inkSoft, paper, .5)),
				"--dsw-alias-brand-primary": rgb(deep),
				"--dsw-alias-button-primary-hover": rgb(mix(deep, BLACK, .18)),
				"--dsw-alias-state-business-primary": rgb(deep),
				"--dsw-alias-state-business-tertiary": rgb(mix(accent, paper, .82)),
				"--dsw-alias-button-info-fill": rgb(deep),
				"--dsw-alias-button-info-hover": rgb(mix(deep, BLACK, .12)),
				"--dsw-alias-markdown-code-block": rgb(mix(canvas, paper, .6)),
				"--dsw-alias-markdown-code-block-banner": rgb(mix(canvas, paper, .72)),
				"--dsw-alias-markdown-inline-code": rgb(mix(accent, paper, .75)),
				"--dsw-alias-markdown-tag": rgb(mix(accent, paper, .82)),
				"--dsw-alias-markdown-citation": rgb(mix(accent, paper, .88)),
				"--dsw-alias-markdown-placeholder": rgb(mix(canvas, paper, .55)),
				"--dsw-alias-markdown-code-segment-unselected": rgb(mix(canvas, paper, .75)),
				"--dsw-alias-markdown-code-segment-selected": rgb(paper),
				"--dsw-specific-bubble": rgb(mix(accent, paper, .78)),
				"--dsw-specific-bubble-highlight": rgb(mix(accent, paper, .62)),
				"--dsw-alias-border-l1": rgba(borderBase, .08),
				"--dsw-alias-border-l2": rgba(borderBase, .14),
				"--dsw-alias-border-l2-darkmode-thin": rgba(borderBase, .1),
				"--dsw-alias-border-l3": rgba(borderBase, .18),
				"--dsw-alias-border-l4": rgba(borderBase, .24),
				"--dsw-alias-interactive-bg-hover": rgba(hoverBase, .07),
				"--dsw-alias-interactive-bg-active": rgba(hoverBase, .12),
				"--dsw-alias-interactive-bg-hover-accent": rgba(hoverBase, .16),
				"--dsw-alias-interactive-bg-hover-solid": rgb(mix(canvas, paper, .6)),
				"--dsw-alias-scrollbar-bg-l1": rgb(mix(inkSoft, paper, .72)),
				"--dsw-alias-scrollbar-bg-l2": rgb(mix(inkSoft, paper, .72)),
				"--dsw-alias-scrollbar-hover-l1": rgb(mix(inkSoft, paper, .55)),
				"--dsw-alias-scrollbar-hover-l2": rgb(mix(inkSoft, paper, .55))
			};
		}
		/**
		* Preview triple for the picker UI: accent, canvas, and field swatches.
		* @param palette - Minimalist collection palette record.
		* @returns the three representative colors as CSS `rgb()` strings.
		*/
		function palettePreview(palette) {
			const c = palette.colors;
			return {
				accent: rgb(c.accent ?? c.button ?? [
					207,
					211,
					214
				]),
				canvas: rgb(c.canvas ?? c.accent ?? [
					255,
					255,
					255
				]),
				field: rgb(c.field ?? [
					249,
					250,
					251
				])
			};
		}
		//#endregion
		//#region src/themes.ts
		/**
		* The Minimalist theme catalog: every collection palette becomes one light
		* `ThemeDefinition` registered into the DSH theme runtime. Ids are prefixed
		* to stay namespaced against built-ins and other plugins' registrations.
		*/
		/** Prefix keeping our ids namespaced (`minimalist-<slug>`). */
		const THEME_ID_PREFIX = "minimalist-";
		/** Full registered id for one palette slug. */
		function themeId(palette) {
			return `${THEME_ID_PREFIX}${palette.id}`;
		}
		/** All catalog themes in collection (alphabetical) order. */
		const MINIMALIST_THEMES = MINIMALIST_PALETTES.map((palette) => ({
			id: themeId(palette),
			colorScheme: "light",
			tokens: paletteToThemeTokens(palette)
		}));
		/** Look up a palette record by registered theme id. */
		function paletteByThemeId(id) {
			if (!id.startsWith("minimalist-")) return void 0;
			return MINIMALIST_PALETTES.find((palette) => themeId(palette) === id);
		}
		//#endregion
		//#region src/client/card-store.ts
		/**
		* Theme picker card store: mirrors the persisted selection and the theme
		* runtime revision. The plugin's apply-world listeners are the only writers;
		* the component reads through props.useStore.
		*/
		/**
		* Declares the card state and write surface.
		* @returns the store handle.
		*/
		function createThemesCardStore() {
			return (0, _deepseek_ai_dsh_client_runtime_client.defineStore)({
				init: () => ({
					selected: "",
					revision: -1
				}),
				actions: { setSelected: (d, selected, revision) => {
					if (revision <= d.revision) return;
					d.selected = selected;
					d.revision = revision;
				} }
			});
		}
		//#endregion
		//#region src/client/locales.ts
		const en = {
			"card.title": "Minimalist themes",
			"card.description": "Pick one of these minimalist palettes for the whole interface.",
			"card.followBuiltIn": "Follow appearance",
			"card.active": "Active"
		};
		const zh = {
			"card.title": "极简主题",
			"card.description": "挑选一款极简配色，应用到整个界面。",
			"card.followBuiltIn": "跟随外观",
			"card.active": "使用中"
		};
		//#endregion
		//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
		function r(e) {
			var t, f, n = "";
			if ("string" == typeof e || "number" == typeof e) n += e;
			else if ("object" == typeof e) if (Array.isArray(e)) {
				var o = e.length;
				for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
			} else for (f in e) e[f] && (n && (n += " "), n += f);
			return n;
		}
		function clsx() {
			for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
			return n;
		}
		//#endregion
		//#region \0mt-css:/home/miguel/Documentos/Desarrollador/DSH/dsh-minimalist-themes/src/client/ThemesCard.module.css.mjs
		const css$1 = ".RxmBPG_card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;list-style:none;transition:border-color .16s,background .16s}.RxmBPG_card:hover{border-color:var(--dsw-alias-label-dimmed)}.RxmBPG_cardOpen{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-label-dimmed)}.RxmBPG_header{appearance:none;width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:12px;align-items:center;gap:12px;padding:14px 16px;display:flex}.RxmBPG_header:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}.RxmBPG_headText{flex-direction:column;flex:1;gap:4px;min-width:0;display:flex}.RxmBPG_name{color:var(--dsw-alias-label-primary);font-size:15px;font-weight:600;line-height:1.4}.RxmBPG_description{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:1.5}.RxmBPG_pending{white-space:nowrap;background:var(--mt-accent);color:var(--dsw-alias-label-primary);border-radius:999px;flex:none;align-items:center;gap:6px;padding:1px 8px;font-size:11px;font-weight:500;line-height:17px;display:inline-flex}.RxmBPG_pendingDot{background:var(--dsw-alias-label-primary);opacity:.55;border-radius:50%;width:6px;height:6px}.RxmBPG_chevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .16s}.RxmBPG_chevronOpen{transform:rotate(180deg)}.RxmBPG_body{border-top:1px solid var(--dsw-alias-border-l2);flex-direction:column;gap:12px;margin:0 16px;padding:12px 0 8px;display:flex}.RxmBPG_reset{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background var(--ds-transition-duration-fast) var(--ds-ease-in-out), border-color var(--ds-transition-duration-fast) var(--ds-ease-in-out), color var(--ds-transition-duration-fast) var(--ds-ease-in-out);background:0 0;border-radius:999px;align-self:flex-start;padding:5px 12px;font-size:12px;line-height:16px}.RxmBPG_reset:hover{background:var(--dsw-alias-interactive-bg-hover)}.RxmBPG_resetSelected{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary);background:var(--dsw-specific-bubble)}.RxmBPG_reset:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}.RxmBPG_grid{grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:10px;display:grid}.RxmBPG_swatch{--mt-accent:#cfd3d6;--mt-canvas:#fff;--mt-field:#f9fafb;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);cursor:pointer;text-align:left;transition:border-color var(--ds-transition-duration-fast) var(--ds-ease-in-out), box-shadow var(--ds-transition-duration-fast) var(--ds-ease-in-out), transform var(--ds-transition-duration-fast) var(--ds-ease-in-out);border-radius:10px;flex-direction:column;gap:8px;padding:8px;display:flex}.RxmBPG_swatch:hover{box-shadow:0 2px 8px var(--dsw-alias-bg-mask-2);transform:translateY(-1px)}.RxmBPG_swatch:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}.RxmBPG_selected{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 1px var(--dsw-alias-brand-primary)}.RxmBPG_bands{border:1px solid var(--dsw-alias-border-l1);border-radius:6px;flex-direction:column;height:56px;display:flex;overflow:hidden}.RxmBPG_bandAccent{background:var(--mt-accent);flex:3}.RxmBPG_bandCanvas{background:var(--mt-canvas);flex:5}.RxmBPG_bandField{background:var(--mt-field);flex:2}.RxmBPG_swatchName{color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;font-size:12px;line-height:16px;overflow:hidden}";
		const tagId$1 = "@mykeura/dsh-minimalist-themes/ThemesCard.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@mykeura/dsh-minimalist-themes";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var ThemesCard_module_css_default = {
			"card": "RxmBPG_card",
			"swatch": "RxmBPG_swatch",
			"swatchName": "RxmBPG_swatchName",
			"chevronOpen": "RxmBPG_chevronOpen",
			"selected": "RxmBPG_selected",
			"cardOpen": "RxmBPG_cardOpen",
			"resetSelected": "RxmBPG_resetSelected",
			"chevron": "RxmBPG_chevron",
			"pending": "RxmBPG_pending",
			"header": "RxmBPG_header",
			"body": "RxmBPG_body",
			"bandAccent": "RxmBPG_bandAccent",
			"pendingDot": "RxmBPG_pendingDot",
			"bandField": "RxmBPG_bandField",
			"headText": "RxmBPG_headText",
			"grid": "RxmBPG_grid",
			"description": "RxmBPG_description",
			"reset": "RxmBPG_reset",
			"bands": "RxmBPG_bands",
			"name": "RxmBPG_name",
			"bandCanvas": "RxmBPG_bandCanvas"
		};
		//#endregion
		//#region src/client/ThemesCard.tsx
		/**
		* Theme picker card registered into the Plugins settings section under this
		* plugin's namespace. The card chrome mirrors the section's other plugin
		* cards (shell, agent loop, web search): a header naming the plugin that
		* discloses its controls in place — replicated here rather than imported
		* because cross-plugin value imports are forbidden by the bundle-purity
		* gate; only the shared primitives icon rides the module table.
		*
		* The body holds a reset entry and one swatch per Minimalist palette —
		* accent/canvas/field bands straight from the collection colors.
		* Selection applies immediately (no staged form), so unlike the form cards
		* there is no footer; the header pill names the active palette even while
		* collapsed. Palette colors ride component-local custom properties (the
		* sanctioned inline-style use). Each pick hands its control's viewport
		* seat to the plugin body, which sweeps the new palette in through a
		* circular reveal (View Transition; instant where unsupported).
		*/
		/** Short display name: the collection title without its "Minimalist" prefix. */
		function shortName(title) {
			return title.replace(/^Minimalist\s+/, "");
		}
		/**
		* Viewport center of one picker control — the seat its pick's reveal grows
		* from. Rect center rather than pointer coordinates so keyboard activation
		* (Enter/Space fire click without pointer data) seats the circle too.
		* @param element - the clicked button.
		* @returns its center in viewport pixels.
		*/
		function clickSeat(element) {
			const rect = element.getBoundingClientRect();
			return {
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2
			};
		}
		/**
		* Render the Minimalist themes picker card.
		* @param props - composed slot props.
		* @returns the card element tree.
		*/
		function ThemesCard({ t, useStore, selectTheme }) {
			const [open, setOpen] = (0, react.useState)(false);
			const selected = useStore((s) => s.selected);
			const active = MINIMALIST_PALETTES.find((palette) => `${THEME_ID_PREFIX}${palette.id}` === selected);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
				className: clsx(ThemesCard_module_css_default.card, open && ThemesCard_module_css_default.cardOpen),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: ThemesCard_module_css_default.header,
					"aria-expanded": open,
					onClick: () => {
						setOpen(!open);
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: ThemesCard_module_css_default.headText,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: ThemesCard_module_css_default.name,
								children: t("card.title")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: ThemesCard_module_css_default.description,
								children: t("card.description")
							})]
						}),
						active !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: ThemesCard_module_css_default.pending,
							style: { "--mt-accent": palettePreview(active).accent },
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: ThemesCard_module_css_default.pendingDot,
								"aria-hidden": "true"
							}), shortName(active.title)]
						}) : null,
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutline14, { className: clsx(ThemesCard_module_css_default.chevron, open && ThemesCard_module_css_default.chevronOpen) })
					]
				}), open ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: ThemesCard_module_css_default.body,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: clsx(ThemesCard_module_css_default.reset, selected === "" && ThemesCard_module_css_default.resetSelected),
						"aria-pressed": selected === "",
						onClick: (event) => {
							selectTheme("", clickSeat(event.currentTarget));
						},
						children: t("card.followBuiltIn")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: ThemesCard_module_css_default.grid,
						role: "listbox",
						"aria-label": t("card.title"),
						children: MINIMALIST_PALETTES.map((palette) => {
							const id = `${THEME_ID_PREFIX}${palette.id}`;
							const preview = palettePreview(palette);
							const isSelected = selected === id;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "option",
								"aria-selected": isSelected,
								className: clsx(ThemesCard_module_css_default.swatch, isSelected && ThemesCard_module_css_default.selected),
								style: {
									"--mt-accent": preview.accent,
									"--mt-canvas": preview.canvas,
									"--mt-field": preview.field
								},
								onClick: (event) => {
									selectTheme(id, clickSeat(event.currentTarget));
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: ThemesCard_module_css_default.bands,
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: ThemesCard_module_css_default.bandAccent }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: ThemesCard_module_css_default.bandCanvas }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: ThemesCard_module_css_default.bandField })
									]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ThemesCard_module_css_default.swatchName,
									children: shortName(palette.title)
								})]
							}, id);
						})
					})]
				}) : null]
			});
		}
		//#endregion
		//#region \0mt-css:/home/miguel/Documentos/Desarrollador/DSH/dsh-minimalist-themes/src/client/Reveal.module.css.mjs
		const css = "::view-transition-old(root),::view-transition-new(root){mix-blend-mode:normal;animation:none}html[data-mt-swap],html[data-mt-swap] *,html[data-mt-swap] :before,html[data-mt-swap] :after{transition:none!important}";
		const tagId = "@mykeura/dsh-minimalist-themes/Reveal.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@mykeura/dsh-minimalist-themes";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region src/client/index.ts
		/** Locale namespace carrying the picker card copy. */
		const CARD_LOCALE_NS = "minimalist-themes.card";
		/** localStorage key holding the selected registered theme id. */
		const STORAGE_KEY = "dsh-minimalist-themes/selection";
		/** Override-layer source identity (one layer per source in the theme runtime). */
		const OVERRIDE_SOURCE = "minimalist-themes";
		/** Whether an id names a catalog theme of this plugin. */
		function isCatalogId(id) {
			return paletteByThemeId(id) !== void 0;
		}
		/**
		* Convert one catalog definition's token dictionary into the override-layer
		* shape: the same value for both palette modes. The layer is only ever live
		* over the light base (selecting a Minimalist palette pins the light
		* preference through the official API), but the runtime requires both modes.
		* @param id - registered catalog theme id.
		* @returns override pairs, or undefined when the id is unknown.
		*/
		function overridePairsFor(id) {
			const definition = MINIMALIST_THEMES.find((definition) => definition.id === id);
			if (definition === void 0) return void 0;
			const pairs = {};
			for (const [name, value] of Object.entries(definition.tokens)) pairs[name] = {
				light: value,
				dark: value
			};
			return pairs;
		}
		/** Read the persisted selection, tolerating missing storage or corrupt data. */
		function readStoredSelection() {
			try {
				const value = globalThis.localStorage?.getItem(STORAGE_KEY) ?? "";
				return isCatalogId(value) ? value : "";
			} catch {
				return "";
			}
		}
		/** Persist or clear the selection, tolerating unavailable storage. */
		function writeStoredSelection(id) {
			try {
				if (id === "") globalThis.localStorage?.removeItem(STORAGE_KEY);
				else globalThis.localStorage?.setItem(STORAGE_KEY, id);
			} catch {}
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
		const SWAP_ATTRIBUTE = "data-mt-swap";
		/** Sweep duration: long enough to read the circle across the window, over within a beat. */
		const REVEAL_DURATION_MS = 500;
		/** Sweep easing — mirrors ui-theme's `--ds-ease-in-out` token value. */
		const REVEAL_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";
		/**
		* Whether the choreography may run: the same-document View Transition API
		* must exist and the user must not have asked for reduced motion.
		* @returns true when a seated pick should animate.
		*/
		function revealSupported() {
			if (typeof document === "undefined" || typeof document.startViewTransition !== "function") return false;
			if (typeof matchMedia === "undefined") return true;
			return !matchMedia("(prefers-reduced-motion: reduce)").matches;
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
		function revealSelection(origin, apply) {
			const root = document.documentElement;
			root.setAttribute(SWAP_ATTRIBUTE, "");
			const transition = document.startViewTransition(apply);
			transition.updateCallbackDone.catch(() => {});
			transition.ready.then(() => {
				const radius = Math.hypot(Math.max(origin.x, window.innerWidth - origin.x), Math.max(origin.y, window.innerHeight - origin.y));
				root.animate({ clipPath: [`circle(0px at ${origin.x}px ${origin.y}px)`, `circle(${radius}px at ${origin.x}px ${origin.y}px)`] }, {
					duration: REVEAL_DURATION_MS,
					easing: REVEAL_EASING,
					pseudoElement: "::view-transition-new(root)"
				});
			}).catch(() => {});
			transition.finished.finally(() => {
				root.removeAttribute(SWAP_ATTRIBUTE);
			}).catch(() => {});
		}
		/**
		* Apply-world sync face pushed into the store and the card. The revision is
		* a local monotonic counter: every sync supersedes the previous one, so the
		* store's stale-guard drops only out-of-order duplicates.
		*/
		let syncSeq = 0;
		/**
		* Recompute the displayed selection and publish it to the card store. The
		* localStorage record is the single source of truth for display: the live
		* preference is always a built-in under the override-layer strategy.
		*/
		function makeSync(boundRef) {
			return () => {
				const bound = boundRef.current;
				if (bound === void 0) return;
				bound.setSelected(readStoredSelection(), syncSeq++);
			};
		}
		/**
		* Required services: slots/locale for the card surface, `theme` for the DSH
		* theme runtime this plugin extends. No settings transport: persistence is
		* browser-local by design (see module docblock).
		*/
		const inject = [
			"slots",
			"locale",
			"theme"
		];
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
		function apply(ctx) {
			const theme = ctx.theme;
			for (const definition of MINIMALIST_THEMES) ctx.effect(() => theme.register(definition), `minimalist-themes: ${definition.id}`);
			let disposeOverride;
			ctx.effect(() => () => {
				disposeOverride?.();
			}, "minimalist-themes: override teardown");
			/**
			* Restack (or clear) the palette layer for one catalog id.
			* @param id - registered theme id, or empty for no layer.
			*/
			const restack = (id) => {
				disposeOverride?.();
				disposeOverride = void 0;
				if (id === "") return;
				const pairs = overridePairsFor(id);
				if (pairs !== void 0) disposeOverride = theme.overrideTokens(OVERRIDE_SOURCE, pairs);
			};
			let applyingOwnPreference = false;
			/**
			* Apply one selection as a single atomic-looking sequence: pin the light
			* base through the official API (empty id restores `system`), restack the
			* palette layer, and record the choice. Every publish happens inside the
			* owned-preference guard so the watcher cannot misread our own steps.
			* @param id - registered catalog theme id, or empty to clear.
			*/
			const applySelection = (id) => {
				const target = id === "" || !isCatalogId(id) ? "" : id;
				applyingOwnPreference = true;
				try {
					const current = theme.getTheme().preference;
					if (target === "") {
						restack("");
						if (current !== "system") theme.setTheme("system");
					} else {
						if (current !== "light") theme.setTheme("light");
						restack(target);
					}
					writeStoredSelection(target);
				} finally {
					applyingOwnPreference = false;
				}
				sync();
			};
			const store = createThemesCardStore();
			const boundRef = { current: void 0 };
			const sync = makeSync(boundRef);
			const stored = readStoredSelection();
			if (stored !== "") applySelection(stored);
			ctx.effect(() => ctx.on("theme/change", () => {
				if (!applyingOwnPreference) {
					const preference = theme.getTheme().preference;
					if (!isCatalogId(preference)) {
						writeStoredSelection("");
						restack("");
					}
				}
				sync();
			}), "minimalist-themes: preference watcher");
			if (typeof window !== "undefined") ctx.effect(() => {
				const onStorage = (event) => {
					if (event.key !== STORAGE_KEY && event.key !== null) return;
					const value = readStoredSelection();
					applySelection(value);
				};
				window.addEventListener("storage", onStorage);
				return () => {
					window.removeEventListener("storage", onStorage);
				};
			}, "minimalist-themes: cross-tab selection");
			ctx.effect(() => ctx.locale.register(CARD_LOCALE_NS, {
				zh,
				en
			}), "minimalist-themes: card dictionaries");
			const injected = (actions) => {
				boundRef.current = actions;
				sync();
				return { selectTheme: (id, origin) => {
					if (origin !== void 0 && revealSupported()) revealSelection(origin, () => {
						applySelection(id);
					});
					else applySelection(id);
				} };
			};
			ctx.slots.inject("settings.plugin.item", function* () {
				yield ctx.slots.register({
					name: "settings.plugin.item",
					key: "minimalist-themes",
					locale: CARD_LOCALE_NS,
					store,
					inject: injected
				}, ThemesCard);
			});
		}
		//#endregion
		exports.CARD_LOCALE_NS = CARD_LOCALE_NS;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map