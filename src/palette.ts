/**
 * Chrome Minimalist palette → DSH `--dsw-*` alias-token adapter.
 *
 * The Chrome themes express a palette through browser chrome roles: `frame`
 * (the saturated pastel), `toolbar`/`ntp_background` (the light canvas tint),
 * `omnibox_background` (the mid input tint) and a fixed pair of dark neutral
 * inks. Every Minimalist theme is a light scheme, so each registers as a
 * light `ThemeDefinition`; selecting it switches the base palette to light
 * and layers these overrides over it.
 *
 * Mapping rules:
 * - Chrome's canvas (`toolbar`) becomes the application background family;
 *   raised layers interpolate toward `ntp_section` (white).
 * - Chrome's frame becomes the sidebar fill, the strongest pastel surface,
 *   mirroring where the color lives in the browser.
 * - The omnibox tint feeds inputs, selectors, and code surfaces, always
 *   pulled toward white so text keeps its contrast.
 * - Interactive accent tokens (`brand-primary`, business states) use a deep
 *   shade of the pastel: primary buttons fill with it under white text, so a
 *   pastel there would go illegible while a deep shade keeps the hue.
 * - Unset tokens fall through to the DSH light defaults, which stay neutral
 *   and consistent with the static scale.
 */

import type { ThemeTokens } from './theme-types.ts'
import type { MinimalistPalette } from './palettes.generated.ts'

/** Linear-RGB triple. */
type Rgb = readonly [number, number, number]

const WHITE: Rgb = [255, 255, 255]
const BLACK: Rgb = [0, 0, 0]

/** Mix two colors; `t = 0` returns `a`, `t = 1` returns `b`. */
function mix(a: Rgb, b: Rgb, t: number): Rgb {
  const clamped = Math.min(1, Math.max(0, t))
  return [
    Math.round(a[0] + (b[0] - a[0]) * clamped),
    Math.round(a[1] + (b[1] - a[1]) * clamped),
    Math.round(a[2] + (b[2] - a[2]) * clamped),
  ] as Rgb
}

/** `rgb(r, g, b)` serialization. */
function rgb(c: Rgb): string {
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`
}

/** `rgba(r, g, b, a)` serialization. */
function rgba(c: Rgb, alpha: number): string {
  const a = Math.min(1, Math.max(0, alpha))
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${Number.isInteger(a) ? a : a.toFixed(3)})`
}

/** Relative luminance (Rec. 709 coefficients), 0–1. */
function luminance(c: Rgb): number {
  return (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255
}

/**
 * Deep interactive shade of the pastel accent: dark enough for white text
 * (WCAG AA on the fill) while keeping the theme hue. Falls back to the theme
 * ink for extremely light frames.
 */
function accentInk(accent: Rgb, ink: Rgb): Rgb {
  let shade = mix(accent, BLACK, 0.62)
  if (luminance(shade) > 0.28) shade = mix(shade, BLACK, 0.35)
  return luminance(shade) < luminance(ink) ? shade : ink
}

/**
 * Build the alias-token override dictionary for one Minimalist palette.
 * @param palette - generated palette record from the Chrome collection.
 * @returns token names mapped to concrete CSS values (light scheme).
 */
export function paletteToThemeTokens(palette: MinimalistPalette): ThemeTokens {
  const c = palette.colors
  const accent = c.frame ?? c.button_background ?? [207, 211, 214]
  const canvas = c.toolbar ?? c.ntp_background ?? accent
  const omnibox = c.omnibox_background ?? mix(canvas, WHITE, 0.4)
  const ink = c.bookmark_text ?? c.tab_text ?? [58, 62, 65]
  const inkSoft = c.tab_background_text_inactive ?? mix(ink, WHITE, 0.3)
  const paper = c.ntp_section ?? WHITE
  const deep = accentInk(accent, ink)
  const borderBase = mix(accent, BLACK, 0.3)
  const hoverBase = mix(accent, BLACK, 0.5)

  const tokens: ThemeTokens = {
    // Canvas: Chrome's toolbar/ntp tint becomes the app background family.
    '--dsw-alias-bg-base': rgb(canvas),
    '--dsw-alias-bg-layer-1': rgb(paper),
    '--dsw-alias-bg-layer-2': rgb(mix(canvas, paper, 0.55)),
    '--dsw-alias-bg-layer-3': rgb(mix(canvas, paper, 0.35)),
    '--dsw-alias-bg-module-platform': rgb(mix(canvas, paper, 0.5)),
    '--dsw-alias-bg-multi-select': rgb(mix(canvas, paper, 0.5)),
    '--dsw-alias-bg-overlay': rgb(mix(canvas, paper, 0.2)),
    // Sidebar carries the frame pastel, like Chrome's window chrome.
    '--dsw-specific-sidebar-fill': rgb(accent),
    '--dsw-specific-sidebar-nav-item-active-accent': rgb(mix(accent, paper, 0.45)),
    '--dsw-specific-sidebar-nav-item-active': rgb(mix(accent, paper, 0.62)),
    '--dsw-specific-sidebar-nav-item-hover': rgb(mix(accent, paper, 0.78)),
    // Inputs and selectors stay near-white for legibility.
    '--dsw-specific-input-major': rgb(mix(omnibox, paper, 0.6)),
    '--dsw-specific-login-input': rgb(mix(omnibox, paper, 0.7)),
    '--dsw-specific-selector': rgb(mix(omnibox, paper, 0.35)),
    '--dsw-specific-tip': rgb(mix(canvas, paper, 0.4)),
    // Ink: the themes' fixed dark neutrals.
    '--dsw-alias-label-primary': rgb(ink),
    '--dsw-alias-label-secondary': rgb(inkSoft),
    '--dsw-alias-label-tertiary': rgb(mix(inkSoft, paper, 0.15)),
    '--dsw-alias-label-caption': rgb(mix(inkSoft, paper, 0.28)),
    '--dsw-alias-label-dimmed': rgb(mix(inkSoft, paper, 0.5)),
    // Interactive accent: deep shade of the pastel (white text stays legible).
    '--dsw-alias-brand-primary': rgb(deep),
    '--dsw-alias-button-primary-hover': rgb(mix(deep, BLACK, 0.18)),
    '--dsw-alias-state-business-primary': rgb(deep),
    '--dsw-alias-state-business-tertiary': rgb(mix(accent, paper, 0.82)),
    '--dsw-alias-button-info-fill': rgb(deep),
    '--dsw-alias-button-info-hover': rgb(mix(deep, BLACK, 0.12)),
    // Markdown / code surfaces tinted by canvas and accent.
    '--dsw-alias-markdown-code-block': rgb(mix(canvas, paper, 0.6)),
    '--dsw-alias-markdown-code-block-banner': rgb(mix(canvas, paper, 0.72)),
    '--dsw-alias-markdown-inline-code': rgb(mix(accent, paper, 0.75)),
    '--dsw-alias-markdown-tag': rgb(mix(accent, paper, 0.82)),
    '--dsw-alias-markdown-citation': rgb(mix(accent, paper, 0.88)),
    '--dsw-alias-markdown-placeholder': rgb(mix(canvas, paper, 0.55)),
    '--dsw-alias-markdown-code-segment-unselected': rgb(mix(canvas, paper, 0.75)),
    '--dsw-alias-markdown-code-segment-selected': rgb(paper),
    // Chat bubbles take the accent tint.
    '--dsw-specific-bubble': rgb(mix(accent, paper, 0.78)),
    '--dsw-specific-bubble-highlight': rgb(mix(accent, paper, 0.62)),
    // Borders: accent-tinted, slightly stronger than the neutral defaults.
    '--dsw-alias-border-l1': rgba(borderBase, 0.08),
    '--dsw-alias-border-l2': rgba(borderBase, 0.14),
    '--dsw-alias-border-l2-darkmode-thin': rgba(borderBase, 0.1),
    '--dsw-alias-border-l3': rgba(borderBase, 0.18),
    '--dsw-alias-border-l4': rgba(borderBase, 0.24),
    // Hover states ride the accent.
    '--dsw-alias-interactive-bg-hover': rgba(hoverBase, 0.07),
    '--dsw-alias-interactive-bg-active': rgba(hoverBase, 0.12),
    '--dsw-alias-interactive-bg-hover-accent': rgba(hoverBase, 0.16),
    '--dsw-alias-interactive-bg-hover-solid': rgb(mix(canvas, paper, 0.6)),
    // Scrollbars: neutral grays derived from the soft ink.
    '--dsw-alias-scrollbar-bg-l1': rgb(mix(inkSoft, paper, 0.72)),
    '--dsw-alias-scrollbar-bg-l2': rgb(mix(inkSoft, paper, 0.72)),
    '--dsw-alias-scrollbar-hover-l1': rgb(mix(inkSoft, paper, 0.55)),
    '--dsw-alias-scrollbar-hover-l2': rgb(mix(inkSoft, paper, 0.55)),
  }
  return tokens
}

/**
 * Preview triple for the picker UI: frame, canvas, and omnibox swatches.
 * @param palette - generated palette record.
 * @returns the three representative colors as CSS `rgb()` strings.
 */
export function palettePreview(palette: MinimalistPalette): { frame: string; canvas: string; omnibox: string } {
  const c = palette.colors
  return {
    frame: rgb(c.frame ?? [207, 211, 214]),
    canvas: rgb(c.toolbar ?? c.frame ?? [255, 255, 255]),
    omnibox: rgb(c.omnibox_background ?? [255, 255, 255]),
  }
}
