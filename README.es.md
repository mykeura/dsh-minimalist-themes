# @mykeura/dsh-minimalist-themes

[English](README.md) | [中文](README.zh.md) | Español

La idea fue simple. Crear una colección de paletas de colores de estilo minimalista basado en un proyecto previo. Esto con el objetivo de dar a Deepseek Harness (DSH) un tomo mas colorido y suave, que se ajustará a la perfección con su diseño minimalista. 

Puesto que la filosofía detras de DSH es que todo es un plugin. Entonces he intentado adaptar esta creación de la mejor manera. Por lo que puede acceder a ella desde **Settings ->  Plugins -> Minimalist themes**. Una vez en este sitio encontrarás que tienes a tu disposición 18 temas minimalistas. Entre los que podrias ir cambiando con un simple clic.

![DSH Minimalist Themes — paleta Snow Water](img/preview.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE) [![Source](https://img.shields.io/badge/Source-GitHub-brightgreen.svg?style=flat-square)](https://github.com/mykeura/dsh-minimalist-themes)

---

## Características

- **18 temas registrados**: Beetroot Juice, Blackberry Juice, Coffee With Milk, Cornmeal Porridge, Diana Yin, Grape Juice, Green Tea, Hibiscus Tea, Horchata, Mango, Mint, Nance Juice, Oceans, Orange Juice, Snow Water, Turquoise, Ultramarine y Yuzu.
- **Mapeo de tokens**: cada paleta trae nueve roles de color, y el adaptador mapea cada uno sobre la capa semántica de tokens `--dsw-*` de DSH:

  | Rol       | Se usa como                                           | Superficie de token                                   |
  |-----------|-------------------------------------------------------|--------------------------------------------------------|
  | `accent`  | Relleno de la barra lateral, estados de nav, burbujas de chat, tintes de Markdown | `--dsw-specific-sidebar-*`, `--dsw-specific-bubble` |
  | `canvas`  | Familia de fondo de la app (base + 3 capas + overlays) | `--dsw-alias-bg-*`                                    |
  | `field`   | Entradas, selectores, superficies de código, tips      | `--dsw-specific-input-*`, `--dsw-specific-selector`  |
  | `paper`   | Superficies elevadas y código-segmento seleccionado    | `--dsw-alias-bg-layer-1`, Markdown                  |
  | `ink`     | Texto principal                                        | `--dsw-alias-label-primary`                            |
  | `inkAlt`  | Texto principal de respaldo                            | (alias de `ink`)                                      |
  | `inkSoft` | Texto secundario / terciario / atenuado / de pie de foto | `--dsw-alias-label-*` (secondary, tertiary, …)    |
  | `backdrop`| Respaldo de `canvas`                                   | (alias de `canvas`)                                   |
  | `button`  | Respaldo de `accent`                                   | (alias de `accent`)                                   |

  Los tokens de acento interactivos (`brand-primary`, estados de negocio,
  botón de info) usan una sombra profunda del pastel, para que los botones
  principales conserven su texto blanco legible. Lo que no se defina cae por
  defecto a los valores claros de DSH.
- **Selección persistente**: tu elección vive en el `localStorage` del
  navegador y vuelve tras recargar.
- **Aplicación por capa de anulación (`overrideTokens`)**: la preferencia
  activa siempre se mantiene en uno de los integrados oficiales. Al elegir
  una paleta Minimalist se fija la base `light` por la API oficial, y la
  paleta misma vive sobre una capa `overrideTokens`. Así la adopción de
  ui-theme nunca se desvía de su campo persistido, y ningún commit del
  documento de configuración — tuyo o de otro plugin — puede pisarle el
  look. Elegir **Claro / Oscuro / Sistema** en la fila Apariencia es la
  salida oficial: limpia la selección y descarga la capa.
- **Por qué no el documento de configuración**: escribir ahí es una trampa.
  Commitea el documento entero, invalida todos los ámbitos vinculados, y
  entonces la adopción de ui-theme restaura su integrado persistido y pisa
  el tema personalizado de vuelta a claro/oscuro/sistema. Peor aún, ese
  pisoteo se ve exactamente igual que una elección legítima en la fila
  Apariencia, así que ningún protocolo de lado del cliente puede distinguir
  los dos. Y es que asumo el único costo real: la selección no viaja entre
  navegadores (sí viaja entre pestañas del mismo navegador, por el evento
  `storage`).
- **Revelado circular al elegir**: cada selección aplica la paleta dentro
  de una View Transition del mismo documento y descubre el nuevo look con un
  círculo compuesto por GPU que crece desde el swatch que tocaste — suave no
  importa cuánto DOM tenga la ventana del harness. Sin la API, o con
  `prefers-reduced-motion: reduce` activo, el cambio cae instantáneo; el
  restablecimiento al arrancar y los ecos entre pestañas también quedan
  silenciosos.
- **Tarjeta autocontenida** en Configuración → Complementos, con muestras de
  color (bandas `accent` / `canvas` / `field` por paleta) y un botón
  *Seguir apariencia*.

## Instalación

### Instalar (usuarios)

Desde un checkout de DSH (o con el binario global `dsh` en el `PATH`):

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes
# fijar una versión:
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.0
```

El comando instala el paquete en `~/.dsh/profiles/web`, engancha su capa de
bundle al árbol de bundles y reconcilia la lista. Después:

1. Reinicia `dsh web` (el set de bundles se lee al arrancar).
2. Recarga la página; la tarjeta aparece en **Configuración → Complementos**.

Verificar:

```sh
curl -fsS http://127.0.0.1:3080/plugins/@mykeura/dsh-minimalist-themes/client.js | head -c 120
```

### Actualizar / desinstalar

```sh
pnpm dsh plugin --profile web add github:mykeura/dsh-minimalist-themes#v1.0.1   # actualizar
pnpm dsh plugin --profile web remove @mykeura/dsh-minimalist-themes              # desinstalar
```

### Por qué se instala sin compilar

- La mitad del navegador solo requiere módulos que toda página de DSH
  precarga (`react`, `cordis`, slots, primitives, client-runtime/client).
- La mitad Host solo importa paquetes de framework declarados como
  `peerDependencies`; el bootstrap de DSH los resuelve y los "cura" dentro
  de `~/.dsh/profiles/node_modules`.
- El paquete no declara scripts de ciclo de vida (`prepare`, etc.), así que
  pnpm ≥ 10 no exige permisos de build al instalar desde git.

## Desarrollo

El servidor de desarrollo de DSH ya encendido sondea `lib/client.js` (~500
ms) y hace hot-swap del fiber por SSE — así que basta con:

```sh
pnpm watch          # tsdown --watch dentro de este paquete
```

Los cambios solo de UI se aplican sin recargar la página; las filas nuevas
del grafo piden una recarga.

Tras cualquier cambio de código:

```sh
pnpm build
pnpm typecheck      # tsc --noEmit
```

`lib/` está commiteado a propósito: los que instalan no necesitan Node ni
toolchain, y los artefactos son el contrato del plugin (una fábrica CJS
perezosa con el banner exacto `window.__ModuleLoader__`). Tras cualquier
cambio de fuente: `pnpm build`, commitea `lib/`, y etiqueta una nueva
versión.

## Estructura

```
src/
  index.ts              Mitad Host: registra el namespace de configuración
  palette.ts            Matemática de color + mapeo de rol → --dsw-*
  themes.ts             Catálogo de ThemeDefinition (uno por paleta)
  settings.ts           Contrato de namespace compartido entre mitades
  palettes.ts           Fuente de verdad: los 18 registros de paleta
  theme-types.ts        Espejo local de las formas del runtime de temas DSH
  client/
    index.ts            Registro de tema + sync + montaje de la tarjeta
    ThemesCard.tsx      Tarjeta del selector
    ThemesCard.module.css
    Reveal.module.css   Estilo del barrido de view-transition
    card-store.ts       Store que refleja la selección
    locales.ts          Copia zh / en
cordis.patch.yml        Fila de parche de bundle (auto-enganchada por `dsh plugin add`)
tsdown.config.ts        Build de dos mitades (Host ESM + client CJS)
img/
  preview.png           Captura de la tarjeta (paleta Snow Water)
lib/                    Artefactos compilados (commiteados; el contrato de instalación)
```

## Licencia

MIT — ver [LICENSE](LICENSE). Puedes usarlo, modificarlo y distribuirlo
libremente; solo conserva el aviso de copyright.
