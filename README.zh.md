# @mykeura/dsh-minimalist-themes

[English](README.md) | 中文

把 **Minimalist 极简调色板系列** 适配到 DeepSeek Harness（DSH）设计系统。每套精选调色板都作为一个浅色主题注册到 DSH 主题运行时（`ctx.theme`）。在 **设置 → 插件** 下点一张可折叠卡片，整个界面就跟着换——18 套，一次点击。

![DSH Minimalist Themes — Snow Water 调色板](img/preview.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE) [![Source](https://img.shields.io/badge/Source-GitHub-brightgreen.svg?style=flat-square)](https://github.com/mykeura/dsh-minimalist-themes)

---

## 安装

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes
# 固定版本：
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.0
```

然后：

1. 重启 `dsh web`。
2. 刷新页面；卡片就会出现在 **设置 → 插件** 下。

## 更新 / 卸载

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.1   # 更新
pnpm dsh plugin --profile web remove @mykeura/dsh-minimalist-themes              # 卸载
```

## 调色板

Beetroot Juice、Blackberry Juice、Coffee With Milk、Cornmeal Porridge、
Diana Yin、Grape Juice、Green Tea、Hibiscus Tea、Horchata、Mango、Mint、
Nance Juice、Oceans、Orange Juice、Snow Water、Turquoise、Ultramarine、Yuzu。

## 许可

MIT —— 详见 [LICENSE](LICENSE)。
