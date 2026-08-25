# @mykeura/dsh-minimalist-themes

Adapts the **Minimalist palette collection** to the DeepSeek Harness (DSH)
design system: each curated palette becomes a light theme registered into the
DSH theme runtime (`ctx.theme`), and a collapsible card under
**Settings → Plugins** lets you pick one of the 18 themes for the whole
interface.

![DSH Minimalist Themes — Snow Water palette](img/preview.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE) [![Source](https://img.shields.io/badge/Source-GitHub-brightgreen.svg?style=flat-square)](https://github.com/mykeura/dsh-minimalist-themes)

---

## 🎨 Features

- **18 themes registered**: Beetroot Juice, Blackberry Juice, Coffee With
  Milk, Cornmeal Porridge, Diana Yin, Grape Juice, Green Tea, Hibiscus Tea,
  Horchata, Mango, Mint, Nance Juice, Oceans, Orange Juice, Snow Water,
  Turquoise, Ultramarine and Yuzu.
- **Token mapping**: every palette carries nine color roles that the
  adapter maps onto the DSH semantic `--dsw-*` token layer:

  | Role    | Used as                                                 | Token surface                                       |
  |---------|---------------------------------------------------------|-----------------------------------------------------|
  | `accent`  | Sidebar fill, nav states, chat bubbles, markdown tints | `--dsw-specific-sidebar-*`, `--dsw-specific-bubble` |
  | `canvas`  | App background family (base + 3 layers + overlays)     | `--dsw-alias-bg-*`                                   |
  | `field`   | Inputs, selectors, code surfaces, tips                 | `--dsw-specific-input-*`, `--dsw-specific-selector` |
  | `paper`   | Raised surfaces and code-segment selected              | `--dsw-alias-bg-layer-1`, markdown                  |
  | `ink`     | Primary text                                            | `--dsw-alias-label-primary`                          |
  | `inkAlt`  | Fallback primary text                                   | (alias of `ink`)                                     |
  | `inkSoft` | Secondary / tertiary / dimmed / caption text           | `--dsw-alias-label-*` (secondary, tertiary, …)       |
  | `backdrop`| Canvas fallback                                         | (alias of `canvas`)                                  |
  | `button`  | Accent fallback                                         | (alias of `accent`)                                  |

  Interactive accent tokens (`brand-primary`, business states, info
  button) use a deep shade of the pastel so primary buttons keep white
  text legible; unset tokens fall through to the DSH light defaults.
- **Persistent selection**: your pick lives in the browser's `localStorage`
  and comes back after a reload.
- **Override-layer application (`overrideTokens`)**: the active preference
  always stays one of the official built-ins (picking a Minimalist palette
  pins the `light` base through the official API), and the palette itself
  rides an `overrideTokens` layer. So ui-theme's adoption never diverges
  from its persisted field, and no settings document commit (yours or
  another plugin's) can stomp the look. Choosing Light/Dark/System in the
  Appearance row is the sanctioned escape hatch: it clears the selection
  and drops the layer.
- **Why not the settings document**: writing there commits the whole
  document, invalidates every bound scope, and ui-theme's adoption then
  restores its persisted built-in and stomps the active custom theme back
  to light/dark/system. Worse, that stomp is observationally identical to
  a legitimate Appearance-row pick, so no client-side protocol can separate
  the two. The cost is acknowledged: the selection does not roam across
  browsers (it does roam across tabs of the same browser, via the
  `storage` event).
- **Circular reveal on pick**: each pick applies the palette under a
  same-document View Transition and uncovers the new look with a
  GPU-composited circle growing from the swatch you clicked — smooth
  regardless of how much DOM the harness window holds. Without the API,
  or with `prefers-reduced-motion: reduce` active, the change lands
  instant; boot restore and cross-tab echoes are silent too.
- **Self-contained card** under Settings → Plugins with color samples
  (`accent` / `canvas` / `field` bands per palette) and a
  *Follow appearance* button.

## 📦 Installation

### Install (users)

From a DSH checkout (or with the global `dsh` binary on `PATH`):

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes
# pin a version:
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.0
```

The command installs the package into `~/.dsh/profiles/web`, attaches its
bundle layer to the bundle tree, and reconciles the bundle list. Then:

1. Restart `dsh web` (the bundle set is read on boot).
2. Reload the page; the card appears under **Settings → Plugins**.

Verify:

```sh
curl -fsS http://127.0.0.1:3080/plugins/@mykeura/dsh-minimalist-themes/client.js | head -c 120
```

### Update / uninstall

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.1   # update
pnpm dsh plugin --profile web remove @mykeura/dsh-minimalist-themes              # remove
```

### Why it installs without a build

- The browser half only requires modules every DSH page preloads
  (`react`, `cordis`, slots, primitives, client-runtime/client).
- The Host half only imports framework packages declared as
  `peerDependencies`; the DSH bootstrap resolves and "heals" them into
  `~/.dsh/profiles/node_modules`.
- The package declares no lifecycle scripts (`prepare` etc.), so pnpm ≥ 10
  does not demand build permissions when installing from git.

## 🔧 Development

The already-running DSH dev server polls `lib/client.js` (~500 ms) and
hot-swaps the fiber via SSE; just:

```sh
pnpm watch          # tsdown --watch inside this package
```

UI-only changes apply without a page reload; new graph rows require a
reload.

After any code change:

```sh
pnpm build
pnpm typecheck      # tsc --noEmit
```

`lib/` is committed on purpose: installers don't need Node or a
toolchain, and the artifacts are the plugin's contract (lazy-CJS
factory with the exact `window.__ModuleLoader__` banner). After any
source change: `pnpm build`, commit `lib/`, and tag a new release.

## 📁 Structure

```
src/
  index.ts              Host half: registers the settings namespace
  palette.ts            Color math + role → --dsw-* token mapping
  themes.ts             ThemeDefinition catalog (one per palette)
  settings.ts           Shared namespace contract between halves
  palettes.ts           Source of truth: the 18 palette records
  theme-types.ts        Local mirror of the DSH theme runtime shapes
  client/
    index.ts            Theme registration + sync + card mount
    ThemesCard.tsx      Picker card
    ThemesCard.module.css
    Reveal.module.css   View-transition sweep styling
    card-store.ts       Store mirroring the selection
    locales.ts          zh / en copy
cordis.patch.yml        Bundle-patch row (auto-attached by `dsh plugin add`)
tsdown.config.ts        Dual-half build (host ESM + client CJS)
img/
  preview.png           Card screenshot (Snow Water palette)
lib/                    Built artifacts (committed; the install contract)
```

## 🛡️ License

MIT — see [LICENSE](LICENSE). You are free to use, modify, and
distribute; please preserve the copyright notice.
