# @miguel/dsh-minimalist-themes

Adapta la colección de temas minimalistas para Chrome (`temas-chrome/`) al
sistema de diseño de DeepSeek Harness (DSH): cada manifiesto `manifest.json`
de Chrome se convierte en un tema registrado en el runtime de temas de DSH
(`ctx.theme`), y una tarjeta bajo **Ajustes → Plugins** permite elegir entre
los 16 temas.

## Qué hace

- **16 temas registrados**: Beetroot Juice, Blackberry Juice, Coffee With
  Milk, Cornmeal Porridge, Diana Yin, Grape Juice, Green Tea, Hibiscus Tea,
  Horchata, Mango, Mint, Nance Juice, Oceans, Orange Juice, Snow Water y
  Turquoise.
- **Adaptación de paleta**: los roles de Chrome se mapean a tokens semánticos
  `--dsw-*`:
  | Chrome | Rol | Token DSH |
  |---|---|---|
  | `toolbar` / `ntp_background` | lienzo de la app | `--dsw-alias-bg-base`, capas 1–3 |
  | `frame` | cromo de ventana | `--dsw-specific-sidebar-fill`, estados de nav |
  | `omnibox_background` | campos de entrada | `--dsw-specific-input-major`, selector, código |
  | `bookmark_text` / `tab_*_text` | tintas | `--dsw-alias-label-*` |
  | `button_background` / `ntp_link` | acento | `--dsw-alias-brand-primary` (sombra profunda legible), estados, burbujas |
- **Selección persistente**: la elección vive en el `localStorage` del
  navegador y reaparece tras recargar.
- **Aplicación por capa de tokens (`overrideTokens`)**: la preferencia activa
  siempre queda en un built-in oficial (`light` al elegir un Minimalista); la
  paleta viaja como capa de overrides. Así la adopción de `ui-theme` nunca
  diverge de su campo persistido y ningún commit del documento de ajustes
  (propio o ajeno) puede pisar el tema. Elegir Claridad/Oscuro/Sistema en la
  fila Apariencia es la salida de emergencia: limpia la selección y quita la
  capa.
- **Por qué no el documento de ajustes**: escribir ahí committea el documento
  completo, invalida todos los scopes, y la adopción de `ui-theme` restaura su
  built-in pisando el tema activo — además ese pisotón es indistinguible de un
  clic legítimo del usuario. El costo es asumido: la selección no viaja entre
  navegadores (sí entre pestañas, vía evento `storage`).
- **Tarjeta propia** en Ajustes → Plugins con muestras de color (bandas
  frame/canvas/omnibox de cada paleta) y un botón «Seguir apariencia».

## Instalación en un perfil DSH

```sh
# desde el checkout de DSH (o con el binario dsh en PATH)
pnpm dsh plugin --profile web add /ruta/a/dsh-minimalist-themes
```

Reinicia `dsh web` (el conjunto de bundles se lee al arrancar) y recarga la
página. Verificación:

```sh
curl -fsS http://127.0.0.1:3080/plugins/@miguel/dsh-minimalist-themes/client.js | head -c 120
```

## Desarrollo iterativo

El servidor ya montado sondea `lib/client.js` (~500 ms) y hot-swappea el
fibro vía SSE; basta con:

```sh
pnpm watch        # tsdown --watch dentro de este paquete
```

Cambios solo-UI se aplican sin recargar; filas nuevas del grafo requieren
recarga de página.

## Regenerar las paletas

```sh
node scripts/generate-palettes.mjs [ruta-a-temas-chrome]
pnpm build && pnpm typecheck
```

## Estructura

```
src/
  index.ts               Mitad Host: registra el namespace de ajustes
  palette.ts             Matemática de color + mapeo Chrome → --dsw-*
  themes.ts              Catálogo ThemeDefinition (uno por paleta)
  settings.ts            Contraste compartido del namespace
  palettes.generated.ts  Generado desde temas-chrome (no editar)
  client/
    index.ts             Registro de temas + sincronización + tarjeta
    ThemesCard.tsx       Tarjeta selectora
    ThemesCard.module.css
    card-store.ts        Store espejo de la selección
    locales.ts           Copias zh/en
```
