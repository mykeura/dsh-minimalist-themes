// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Miguel Euraque (mykeura)
// @version 1.0.0

/**
 * Durable selection contract shared by both halves. The Host registers the
 * namespace into the user-settings document; the browser half reads and
 * writes the single `theme` field through its settings scope. Key presence
 * marks an explicit selection; absence means "follow the built-in
 * light/dark/system preference".
 */

/** Settings namespace owned by this plugin (the join key between halves and the card key). */
export const MINIMALIST_SETTINGS_NAMESPACE = 'minimalist-themes'

/** Field carrying the selected registered theme id (empty string = no selection). */
export const THEME_FIELD = 'theme'

/** Sentinel stored value meaning "no Minimalist theme selected". */
export const NO_SELECTION = ''
