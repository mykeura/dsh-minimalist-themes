// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Miguel Euraque
// @version 1.0.0
// @author Miguel Euraque (mykeura)

/**
 * Structural mirror of the theme contracts this plugin consumes from
 * `@deepseek-ai/dsh-client-ui-theme`. Declared locally so the package stays
 * self-contained: values cross the boundary as plain objects and the shapes
 * stay compatible without a value import (the client bundle-purity gate
 * forbids those anyway).
 */

/** Theme token dictionary: `--dsw-alias-*`/`--dsw-specific-*` overrides keyed by variable name. */
export type ThemeTokens = Record<string, string>

/**
 * One selectable theme: id, base color scheme, and alias-token overrides.
 * Structurally identical to the definition accepted by `ctx.theme.register`.
 */
export interface ThemeDefinition {
  /** Theme id (the `setTheme` argument). */
  id: string
  /** Which base palette the overrides layer on top of; every Minimalist palette is light. */
  colorScheme: 'light' | 'dark'
  /** Alias-layer overrides applied as inline CSS variables over the base palette. */
  tokens: ThemeTokens
}

/** One override-layer token value: both palette modes are mandatory. */
export interface ThemeTokenModes {
  /** Value applied while the light base palette is active. */
  light: string
  /** Value applied while the dark base palette is active. */
  dark: string
}

/** Override-layer dictionary: token names to per-mode value pairs. */
export type ThemeTokenOverrides = Record<string, ThemeTokenModes>

/** Minimal read face of the DSH theme runtime used by this plugin. */
export interface ThemeRuntimeFace {
  /** Register a theme; returns its disposer. */
  register(definition: ThemeDefinition): () => void
  /** Switch the active preference to a registered theme id or a built-in. */
  setTheme(id: string): void
  /**
   * Stack a token override layer over the ACTIVE theme without touching the
   * preference; returns its disposer. One layer per source identity.
   */
  overrideTokens(source: string, tokens: ThemeTokenOverrides): () => void
  /** Current immutable snapshot. */
  getTheme(): {
    preference: string
    revision: number
    themes: readonly { id: string }[]
  }
}
