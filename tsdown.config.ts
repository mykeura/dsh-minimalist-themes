// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Miguel Euraque (mykeura)
// @version 1.0.0

/**
 * Dual-half build for @mykeura/dsh-minimalist-themes.
 *
 * - Host half: ordinary ESM `lib/index.js`; `@deepseek-ai/*` peers stay
 *   imports (the profile resolves them from its hoisted node_modules).
 * - Browser half: the loader's lazy-CJS factory artifact `lib/client.js`.
 *   Baseline browser externals (react, cordis, ui-slots, ui-primitives,
 *   client-runtime/client) stay as require() calls — the page preloads them;
 *   everything else inlines. The banner/intro/footer wrap the bundle in the
 *   `window.__ModuleLoader__.load` factory contract.
 *
 * CSS Modules follow the DSH preset's approach: a virtual-id plugin compiles
 * the sheet with lightningcss and emits a factory-time `<style data-plugin>`
 * injector plus the hashed class map, keeping the sheet out of tsdown's own
 * CSS pipeline (which would require @tsdown/css).
 *
 * Plain config objects (no tsdown import) so this file resolves outside the
 * DSH workspace.
 */

import { readFile } from 'node:fs/promises'
import { isAbsolute, basename, dirname, resolve as resolvePath } from 'node:path'
import { transform } from 'lightningcss'

const PLUGIN_ID = '@mykeura/dsh-minimalist-themes'

/** Module-table specifiers the web page guarantees for every dynamic bundle. */
const BROWSER_EXTERNALS = new Set([
  'react',
  'react/jsx-runtime',
  'react-dom',
  'react-dom/client',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-ui-primitives',
  '@deepseek-ai/dsh-client-store',
])

const CSS_VIRTUAL_PREFIX = '\0mt-css:'
const CSS_VIRTUAL_SUFFIX = '.mjs'

/** Emit one plugin-owned style injector and the CSS Modules class map. */
function styleInjectionModule(fileId, css, classMap) {
  const source = [
    `const css = ${JSON.stringify(css)};`,
    `const tagId = ${JSON.stringify(`${PLUGIN_ID}/${basename(fileId)}`)};`,
    'if (typeof document !== \'undefined\' && document.querySelector(\'style[data-plugin-css=\' + JSON.stringify(tagId) + \']\') === null) {',
    '  const tag = document.createElement(\'style\');',
    `  tag.dataset.plugin = ${JSON.stringify(PLUGIN_ID)};`,
    '  tag.dataset.pluginCss = tagId;',
    '  tag.textContent = css;',
    '  document.head.appendChild(tag);',
    '}',
  ]
  source.push(classMap === undefined ? 'export {};' : `export default ${JSON.stringify(classMap)};`)
  return source.join('\n')
}

/** Resolve a relative stylesheet import against its importer on disk. */
function sourceAssetPath(source, importer) {
  if (isAbsolute(source)) return source
  return resolvePath(dirname(importer), source)
}

export default [
  {
    name: `${PLUGIN_ID}/host`,
    entry: { index: 'src/index.ts' },
    outDir: 'lib',
    format: 'esm',
    platform: 'node',
    target: 'es2024',
    sourcemap: true,
    dts: true,
    clean: false,
    deps: {
      neverBundle: [/^@deepseek-ai\//],
    },
  },
  {
    name: `${PLUGIN_ID}/client`,
    entry: { client: 'src/client/index.ts' },
    outDir: 'lib',
    format: 'cjs',
    platform: 'browser',
    target: 'es2024',
    sourcemap: true,
    clean: false,
    deps: {
      neverBundle: specifier => BROWSER_EXTERNALS.has(specifier),
      alwaysBundle: specifier => !BROWSER_EXTERNALS.has(specifier),
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'production'),
      'import.meta.env.MODE': JSON.stringify(process.env.NODE_ENV ?? 'production'),
      'import.meta.env': JSON.stringify({ MODE: process.env.NODE_ENV ?? 'production' }),
    },
    plugins: [{
      name: 'mt-css-modules-inline',
      resolveId(source, importer) {
        if (!source.endsWith('.module.css')) return null
        const abs = importer !== undefined ? sourceAssetPath(source, importer) : source
        return CSS_VIRTUAL_PREFIX + abs + CSS_VIRTUAL_SUFFIX
      },
      async load(virtualId) {
        if (!virtualId.startsWith(CSS_VIRTUAL_PREFIX)) return null
        const fileId = virtualId.slice(CSS_VIRTUAL_PREFIX.length, -CSS_VIRTUAL_SUFFIX.length)
        this.addWatchFile(fileId)
        const source = await readFile(fileId)
        const { code, exports: cssExports } = transform({
          filename: fileId,
          code: source,
          cssModules: { pattern: '[hash]_[local]' },
          minify: true,
        })
        const classMap = {}
        for (const [local, exp] of Object.entries(cssExports ?? {})) classMap[local] = exp.name
        return styleInjectionModule(fileId, code.toString(), classMap)
      },
    }],
    outputOptions: {
      entryFileNames: 'client.js',
      banner: `window.__ModuleLoader__.load({ id: ${JSON.stringify(PLUGIN_ID)}, factory: (require) => {`,
      intro: 'var module = { exports: {} }; var exports = module.exports;',
      footer: 'return module.exports; } });',
    },
  },
]
