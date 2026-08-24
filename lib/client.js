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
		//#region src/palettes.generated.ts
		const MINIMALIST_PALETTES = Object.freeze([
			Object.freeze({
				id: "beetroot-juice",
				title: "Minimalist Beetroot Juice",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						230,
						176,
						170
					],
					toolbar: [
						246,
						225,
						223
					],
					omnibox_background: [
						216,
						198,
						197
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						246,
						225,
						223
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						230,
						176,
						170
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						230,
						176,
						170
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "blackberry-juice",
				title: "Minimalist Blackberry Juice",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						193,
						155,
						238
					],
					toolbar: [
						230,
						215,
						248
					],
					omnibox_background: [
						251,
						249,
						254
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						230,
						215,
						248
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						193,
						155,
						238
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						193,
						155,
						238
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "coffee-with-milk",
				title: "Minimalist Coffee With Milk",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						229,
						199,
						148
					],
					toolbar: [
						230,
						215,
						195
					],
					omnibox_background: [
						249,
						245,
						239
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						230,
						215,
						195
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						229,
						199,
						148
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						229,
						199,
						148
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "cornmeal-porridge",
				title: "Minimalist Cornmeal Porridge",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						255,
						218,
						155
					],
					toolbar: [
						255,
						246,
						180
					],
					omnibox_background: [
						255,
						255,
						255
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						0,
						0,
						0
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						255,
						246,
						180
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						255,
						218,
						155
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						255,
						218,
						155
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "diana-yin",
				title: "Minimalist Diana Yin",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						75,
						56,
						123
					],
					toolbar: [
						200,
						191,
						231
					],
					omnibox_background: [
						239,
						237,
						255
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						255,
						255,
						255
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						200,
						191,
						231
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						75,
						56,
						123
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						75,
						56,
						123
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "grape-juice",
				title: "Minimalist Grape Juice",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						171,
						165,
						220
					],
					toolbar: [
						219,
						217,
						240
					],
					omnibox_background: [
						248,
						248,
						252
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						219,
						217,
						240
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						171,
						165,
						220
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						171,
						165,
						220
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "green-tea",
				title: "Minimalist Green Tea",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						169,
						223,
						156
					],
					toolbar: [
						227,
						245,
						222
					],
					omnibox_background: [
						200,
						216,
						196
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						227,
						245,
						222
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						169,
						223,
						156
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						169,
						223,
						156
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "hibiscus-tea",
				title: "Minimalist Hibiscus Tea",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						245,
						183,
						177
					],
					toolbar: [
						250,
						223,
						220
					],
					omnibox_background: [
						219,
						196,
						194
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						250,
						223,
						220
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						245,
						183,
						177
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						245,
						183,
						177
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "horchata",
				title: "Minimalist Horchata",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						239,
						216,
						190
					],
					toolbar: [
						250,
						243,
						234
					],
					omnibox_background: [
						209,
						208,
						203
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						250,
						243,
						234
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						239,
						216,
						190
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						239,
						216,
						190
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "mango",
				title: "Minimalist Mango",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						255,
						226,
						166
					],
					toolbar: [
						255,
						245,
						221
					],
					omnibox_background: [
						224,
						216,
						196
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						255,
						245,
						221
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						255,
						226,
						166
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						255,
						226,
						166
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "mint",
				title: "Minimalist Mint",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						182,
						239,
						207
					],
					toolbar: [
						213,
						245,
						227
					],
					omnibox_background: [
						161,
						210,
						183
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						213,
						245,
						227
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						182,
						239,
						207
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						182,
						239,
						207
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "nance-juice",
				title: "Minimalist Nance Juice",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						247,
						220,
						111
					],
					toolbar: [
						254,
						252,
						241
					],
					omnibox_background: [
						224,
						223,
						214
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						254,
						252,
						241
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						247,
						220,
						111
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						247,
						220,
						111
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "oceans",
				title: "Minimalist Oceans",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						94,
						189,
						246
					],
					toolbar: [
						185,
						226,
						251
					],
					omnibox_background: [
						243,
						250,
						254
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						185,
						226,
						251
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						94,
						189,
						246
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						94,
						189,
						246
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "orange-juice",
				title: "Minimalist Orange Juice",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						245,
						203,
						167
					],
					toolbar: [
						252,
						241,
						232
					],
					omnibox_background: [
						222,
						212,
						205
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						252,
						241,
						232
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						245,
						203,
						167
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						245,
						203,
						167
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "snow-water",
				title: "Minimalist Snow Water",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						174,
						214,
						241
					],
					toolbar: [
						232,
						244,
						252
					],
					omnibox_background: [
						200,
						216,
						196
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						232,
						244,
						252
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						174,
						214,
						241
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						174,
						214,
						241
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "turquoise",
				title: "Minimalist Turquoise",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						162,
						217,
						206
					],
					toolbar: [
						221,
						242,
						237
					],
					omnibox_background: [
						195,
						213,
						209
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						221,
						242,
						237
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						162,
						217,
						206
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						162,
						217,
						206
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "ultramarine",
				title: "Minimalist Ultramarine",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						156,
						172,
						236
					],
					toolbar: [
						210,
						217,
						244
					],
					omnibox_background: [
						242,
						244,
						253
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						210,
						217,
						244
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						156,
						172,
						236
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						156,
						172,
						236
					],
					toolbar_button_icon: [
						0,
						0,
						0
					]
				})
			}),
			Object.freeze({
				id: "yuzu",
				title: "Minimalist Yuzu",
				version: "2.5.2",
				colors: Object.freeze({
					frame: [
						214,
						237,
						161
					],
					toolbar: [
						238,
						246,
						218
					],
					omnibox_background: [
						218,
						224,
						204
					],
					omnibox_text: [
						32,
						33,
						36
					],
					bookmark_text: [
						58,
						62,
						65
					],
					tab_text: [
						60,
						64,
						67
					],
					tab_background_text: [
						60,
						64,
						67
					],
					tab_background_text_inactive: [
						102,
						106,
						109
					],
					ntp_background: [
						238,
						246,
						218
					],
					ntp_text: [
						60,
						64,
						67
					],
					ntp_link: [
						214,
						237,
						161
					],
					ntp_section: [
						255,
						255,
						255
					],
					button_background: [
						214,
						237,
						161
					],
					toolbar_button_icon: [
						0,
						0,
						0
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
		* @param palette - generated palette record from the Chrome collection.
		* @returns token names mapped to concrete CSS values (light scheme).
		*/
		function paletteToThemeTokens(palette) {
			const c = palette.colors;
			const accent = c.frame ?? c.button_background ?? [
				207,
				211,
				214
			];
			const canvas = c.toolbar ?? c.ntp_background ?? accent;
			const omnibox = c.omnibox_background ?? mix(canvas, WHITE, .4);
			const ink = c.bookmark_text ?? c.tab_text ?? [
				58,
				62,
				65
			];
			const inkSoft = c.tab_background_text_inactive ?? mix(ink, WHITE, .3);
			const paper = c.ntp_section ?? WHITE;
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
				"--dsw-specific-input-major": rgb(mix(omnibox, paper, .6)),
				"--dsw-specific-login-input": rgb(mix(omnibox, paper, .7)),
				"--dsw-specific-selector": rgb(mix(omnibox, paper, .35)),
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
		* Preview triple for the picker UI: frame, canvas, and omnibox swatches.
		* @param palette - generated palette record.
		* @returns the three representative colors as CSS `rgb()` strings.
		*/
		function palettePreview(palette) {
			const c = palette.colors;
			return {
				frame: rgb(c.frame ?? [
					207,
					211,
					214
				]),
				canvas: rgb(c.toolbar ?? c.frame ?? [
					255,
					255,
					255
				]),
				omnibox: rgb(c.omnibox_background ?? [
					255,
					255,
					255
				])
			};
		}
		//#endregion
		//#region src/themes.ts
		/**
		* The Minimalist theme catalog: every Chrome palette becomes one light
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
		//#region ../../deepseek-harness/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
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
		//#region \0mt-css:/home/miguel/opt/dsh-dev/dsh-minimalist-themes/src/client/ThemesCard.module.css.mjs
		const css$1 = "._1in7XG_card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;list-style:none;transition:border-color .16s,background .16s}._1in7XG_card:hover{border-color:var(--dsw-alias-label-dimmed)}._1in7XG_cardOpen{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-label-dimmed)}._1in7XG_header{appearance:none;width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:12px;align-items:center;gap:12px;padding:14px 16px;display:flex}._1in7XG_header:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}._1in7XG_headText{flex-direction:column;flex:1;gap:4px;min-width:0;display:flex}._1in7XG_name{color:var(--dsw-alias-label-primary);font-size:15px;font-weight:600;line-height:1.4}._1in7XG_description{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:1.5}._1in7XG_pending{white-space:nowrap;background:var(--mt-frame);color:var(--dsw-alias-label-primary);border-radius:999px;flex:none;align-items:center;gap:6px;padding:1px 8px;font-size:11px;font-weight:500;line-height:17px;display:inline-flex}._1in7XG_pendingDot{background:var(--dsw-alias-label-primary);opacity:.55;border-radius:50%;width:6px;height:6px}._1in7XG_chevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .16s}._1in7XG_chevronOpen{transform:rotate(180deg)}._1in7XG_body{border-top:1px solid var(--dsw-alias-border-l2);flex-direction:column;gap:12px;margin:0 16px;padding:12px 0 8px;display:flex}._1in7XG_reset{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);cursor:pointer;transition:background var(--ds-transition-duration-fast) var(--ds-ease-in-out), border-color var(--ds-transition-duration-fast) var(--ds-ease-in-out), color var(--ds-transition-duration-fast) var(--ds-ease-in-out);background:0 0;border-radius:999px;align-self:flex-start;padding:5px 12px;font-size:12px;line-height:16px}._1in7XG_reset:hover{background:var(--dsw-alias-interactive-bg-hover)}._1in7XG_resetSelected{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary);background:var(--dsw-specific-bubble)}._1in7XG_reset:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}._1in7XG_grid{grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:10px;display:grid}._1in7XG_swatch{--mt-frame:#cfd3d6;--mt-canvas:#fff;--mt-omnibox:#f9fafb;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);cursor:pointer;text-align:left;transition:border-color var(--ds-transition-duration-fast) var(--ds-ease-in-out), box-shadow var(--ds-transition-duration-fast) var(--ds-ease-in-out), transform var(--ds-transition-duration-fast) var(--ds-ease-in-out);border-radius:10px;flex-direction:column;gap:8px;padding:8px;display:flex}._1in7XG_swatch:hover{box-shadow:0 2px 8px var(--dsw-alias-bg-mask-2);transform:translateY(-1px)}._1in7XG_swatch:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}._1in7XG_selected{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 1px var(--dsw-alias-brand-primary)}._1in7XG_bands{border:1px solid var(--dsw-alias-border-l1);border-radius:6px;flex-direction:column;height:56px;display:flex;overflow:hidden}._1in7XG_bandFrame{background:var(--mt-frame);flex:3}._1in7XG_bandCanvas{background:var(--mt-canvas);flex:5}._1in7XG_bandOmnibox{background:var(--mt-omnibox);flex:2}._1in7XG_swatchName{color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;font-size:12px;line-height:16px;overflow:hidden}";
		const tagId$1 = "@mykeura/dsh-minimalist-themes/ThemesCard.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@mykeura/dsh-minimalist-themes";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var ThemesCard_module_css_default = {
			"body": "_1in7XG_body",
			"bandFrame": "_1in7XG_bandFrame",
			"bandCanvas": "_1in7XG_bandCanvas",
			"pending": "_1in7XG_pending",
			"swatch": "_1in7XG_swatch",
			"cardOpen": "_1in7XG_cardOpen",
			"chevronOpen": "_1in7XG_chevronOpen",
			"swatchName": "_1in7XG_swatchName",
			"selected": "_1in7XG_selected",
			"bandOmnibox": "_1in7XG_bandOmnibox",
			"header": "_1in7XG_header",
			"card": "_1in7XG_card",
			"resetSelected": "_1in7XG_resetSelected",
			"grid": "_1in7XG_grid",
			"bands": "_1in7XG_bands",
			"reset": "_1in7XG_reset",
			"chevron": "_1in7XG_chevron",
			"headText": "_1in7XG_headText",
			"pendingDot": "_1in7XG_pendingDot",
			"description": "_1in7XG_description",
			"name": "_1in7XG_name"
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
		* frame/canvas/omnibox bands straight from the Chrome manifest colors.
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
							style: { "--mt-frame": palettePreview(active).frame },
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
									"--mt-frame": preview.frame,
									"--mt-canvas": preview.canvas,
									"--mt-omnibox": preview.omnibox
								},
								onClick: (event) => {
									selectTheme(id, clickSeat(event.currentTarget));
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: ThemesCard_module_css_default.bands,
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: ThemesCard_module_css_default.bandFrame }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: ThemesCard_module_css_default.bandCanvas }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: ThemesCard_module_css_default.bandOmnibox })
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
		//#region \0mt-css:/home/miguel/opt/dsh-dev/dsh-minimalist-themes/src/client/Reveal.module.css.mjs
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
					applySelection(readStoredSelection());
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