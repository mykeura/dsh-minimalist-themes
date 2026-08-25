# @mykeura/dsh-minimalist-themes

[English](README.md) | 中文

将 **Minimalist 极简调色板系列**适配到 DeepSeek Harness（DSH）设计系统：
每套精选调色板都会作为一个浅色主题注册到 DSH 主题运行时（`ctx.theme`），
并在 **设置 → 插件** 下提供一张可折叠卡片，供你在全部界面中选择这 18
套主题之一。

![DSH Minimalist Themes — Snow Water 调色板](img/preview.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE) [![Source](https://img.shields.io/badge/Source-GitHub-brightgreen.svg?style=flat-square)](https://github.com/mykeura/dsh-minimalist-themes)

---

## 🎨 功能

- **注册 18 套主题**：Beetroot Juice、Blackberry Juice、Coffee With
  Milk、Cornmeal Porridge、Diana Yin、Grape Juice、Green Tea、Hibiscus
  Tea、Horchata、Mango、Mint、Nance Juice、Oceans、Orange Juice、Snow
  Water、Turquoise、Ultramarine 和 Yuzu。
- **Token 映射**：每套调色板都带有 9 个颜色角色，适配器会把它们映射到
  DSH 语义层的 `--dsw-*` token：

  | 角色      | 用途                                                   | Token 表面                                          |
  |-----------|--------------------------------------------------------|-----------------------------------------------------|
  | `accent`  | 侧边栏填充、导航状态、聊天气泡、Markdown 着色          | `--dsw-specific-sidebar-*`、`--dsw-specific-bubble` |
  | `canvas`  | 应用背景族（基础 + 3 个层 + 遮罩）                     | `--dsw-alias-bg-*`                                   |
  | `field`   | 输入框、选择器、代码区域、提示                         | `--dsw-specific-input-*`、`--dsw-specific-selector` |
  | `paper`   | 凸起表面与代码段选中态                                 | `--dsw-alias-bg-layer-1`、Markdown                   |
  | `ink`     | 主要文字                                               | `--dsw-alias-label-primary`                          |
  | `inkAlt`  | 主要文字的回退值                                       | （`ink` 的别名）                                     |
  | `inkSoft` | 次级 / 三级 / 弱化 / 注解文字                          | `--dsw-alias-label-*`（secondary、tertiary 等）      |
  | `backdrop`| canvas 的回退值                                        | （`canvas` 的别名）                                  |
  | `button`  | accent 的回退值                                        | （`accent` 的别名）                                  |

  交互类强调色 token（`brand-primary`、业务状态、信息按钮）使用该粉彩
  色的深色阴影，以保证主按钮上的白色文字依然清晰可读；未显式设置的
  token 会回落到 DSH 浅色默认值。
- **选择持久化**：你的选择保存在浏览器的 `localStorage` 中，刷新后自动恢复。
- **通过覆盖层应用（`overrideTokens`）**：当前偏好始终保持在官方内建
  选项之一（选择 Minimalist 调色板会通过官方接口把浅色基底固定下来），
  而调色板本身以 `overrideTokens` 覆盖层的形式叠加上去。这样
  ui-theme 的采纳过程永远不会偏离它持久化的字段，任何对设置文档的
  提交（你自己或别的插件）也无法踩坏外观。在「外观」行中选择
  浅色 / 深色 / 跟随系统是官方认可的逃生口：它会清空选择并卸载覆盖层。
- **为什么不用设置文档**：写入设置文档会提交整个文档，使所有已绑定
  的作用域失效；接着 ui-theme 的采纳会恢复它持久化的内建项，把当前
  自定义主题踩回浅色 / 深色 / 跟随系统。更糟的是，这种踩踏在观察上
  与一次合法的「外观」行点击完全相同，客户端协议无法区分两者。代价
  已经说清楚：选择不会跨浏览器漫游（但在同一浏览器的多个标签页之间
  会通过 `storage` 事件漫游）。
- **选中时的圆形揭示**：每次选择都会在同文档 View Transition 内应用
  调色板，并以一个从所点 swatch 位置向外扩展的 GPU 合成圆形揭示新
  外观——无论 harness 窗口持有多少 DOM 都能保持顺滑。没有该 API 时，
  或 `prefers-reduced-motion: reduce` 处于激活状态时，切换是瞬时
  完成的；启动恢复和跨标签页同步也不会触发动画。
- **自包含的卡片**位于「设置 → 插件」下，每套调色板带 `accent` /
  `canvas` / `field` 三条色带样例，并提供一个 *跟随外观* 按钮。

## 📦 安装

### 用户安装

在 DSH 检出目录下（或全局 `dsh` 可执行文件已加入 `PATH` 时）：

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes
# 固定版本：
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.0
```

该命令会把包安装到 `~/.dsh/profiles/web`，把它的 bundle 层挂到 bundle
树，并协调 bundle 列表。然后：

1. 重启 `dsh web`（bundle 集合在启动时读取）。
2. 刷新页面；卡片就会出现在 **设置 → 插件** 下。

验证：

```sh
curl -fsS http://127.0.0.1:3080/plugins/@mykeura/dsh-minimalist-themes/client.js | head -c 120
```

### 更新 / 卸载

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.1   # 更新
pnpm dsh plugin --profile web remove @mykeura/dsh-minimalist-themes              # 卸载
```

### 为什么无需编译就能安装

- 浏览器端只依赖 DSH 页面都会预加载的模块（`react`、`cordis`、slots、
  primitives、client-runtime/client）。
- Host 端只导入声明为 `peerDependencies` 的框架包；DSH 启动器会解析
  并「治愈」到 `~/.dsh/profiles/node_modules`。
- 该包未声明任何生命周期脚本（`prepare` 等），所以 pnpm ≥ 10 从 git
  安装时不会要求 build 权限。

## 🔧 开发

已经运行起来的 DSH 开发服务器会以约 500 ms 的间隔轮询 `lib/client.js`，
并通过 SSE 热替换 fiber；只需：

```sh
pnpm watch          # tsdown --watch 在本包内运行
```

纯 UI 改动不需要刷新页面即可生效；新增的图节点需要刷新页面。

每次代码改动后：

```sh
pnpm build
pnpm typecheck      # tsc --noEmit
```

`lib/` 是有意提交进仓库的：安装者不需要 Node 或工具链，而这些产物
本身就是插件的契约（懒加载 CJS 工厂，带精确的
`window.__ModuleLoader__` 横幅）。任何源码改动之后：执行
`pnpm build`，提交 `lib/`，并打一个新标签。

## 📁 目录结构

```
src/
  index.ts              Host 端：注册设置命名空间
  palette.ts            色彩数学 + 角色到 --dsw-* token 的映射
  themes.ts             ThemeDefinition 目录（每套调色板一个）
  settings.ts           两端共享的命名空间契约
  palettes.ts           真值来源：18 套调色板记录
  theme-types.ts        DSH 主题运行时形状的本地镜像
  client/
    index.ts            主题注册 + 同步 + 卡片挂载
    ThemesCard.tsx      选择器卡片
    ThemesCard.module.css
    Reveal.module.css   View-transition 扫光样式
    card-store.ts       镜像选择的 store
    locales.ts          zh / en 文案
cordis.patch.yml        bundle 补丁行（由 `dsh plugin add` 自动挂接）
tsdown.config.ts        双端构建（Host ESM + client CJS）
img/
  preview.png           卡片截图（Snow Water 调色板）
lib/                    构建产物（已提交；安装契约）
```

## 🛡️ 许可

MIT —— 详见 [LICENSE](LICENSE)。你可以自由使用、修改和分发；
请保留版权声明。
