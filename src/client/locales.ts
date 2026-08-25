// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Miguel Euraque
// @version 1.0.0
// @author Miguel Euraque (mykeura)

/**
 * Card copy dictionaries. Keys are stable identifiers; `zh` and `en` ship as
 * the product's locale pair.
 */

/** Copy keys used by the theme picker card. */
export type ThemesCardKey =
  | 'card.title'
  | 'card.description'
  | 'card.followBuiltIn'
  | 'card.active'

export const en = {
  'card.title': 'Minimalist themes',
  'card.description': 'Pick one of these minimalist palettes for the whole interface.',
  'card.followBuiltIn': 'Follow appearance',
  'card.active': 'Active',
} as const

export const zh = {
  'card.title': '极简主题',
  'card.description': '挑选一款极简配色，应用到整个界面。',
  'card.followBuiltIn': '跟随外观',
  'card.active': '使用中',
} as const
