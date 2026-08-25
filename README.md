# @mykeura/dsh-minimalist-themes

English | [中文](README.zh.md)

The idea is simple: this plugin takes the **Minimalist palette collection** and adapts it to the DeepSeek Harness (DSH) design system. Each curated palette becomes a light theme registered into the DSH theme runtime (`ctx.theme`). Pick one from a collapsible card under **Settings → Plugins** and the whole interface changes with it — 18 themes, one click each.

![DSH Minimalist Themes — Snow Water palette](img/preview.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE) [![Source](https://img.shields.io/badge/Source-GitHub-brightgreen.svg?style=flat-square)](https://github.com/mykeura/dsh-minimalist-themes)

---

## Install

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes
# pin a version:
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.0
```

Then:

1. Restart `dsh web`.
2. Reload the page; the card appears under **Settings → Plugins**.

## Update / remove

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.1   # update
pnpm dsh plugin --profile web remove @mykeura/dsh-minimalist-themes              # remove
```

## Palettes

Beetroot Juice, Blackberry Juice, Coffee With Milk, Cornmeal Porridge,
Diana Yin, Grape Juice, Green Tea, Hibiscus Tea, Horchata, Mango, Mint,
Nance Juice, Oceans, Orange Juice, Snow Water, Turquoise, Ultramarine, Yuzu.

## License

MIT — see [LICENSE](LICENSE).
