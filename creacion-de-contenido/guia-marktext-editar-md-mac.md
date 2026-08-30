# Guía rápida: ver y editar archivos Markdown en Mac con MarkText (KB OPi v4.0)

**Fuente:** [MarkText](https://marktext.app)
**Fecha archivado:** 2026-08-30
**Visibilidad:** public
**Tipo:** Guía / How-to

## Resumen

Guía para usuarios no técnicos: cómo instalar MarkText en Mac y usarlo para leer
y editar los archivos `.md` de la knowledge-base de OPi (versión **v4.0**), que
viven en Google Drive. MarkText es gratis y open source, y muestra el Markdown
renderizado mientras se escribe — se usa como un procesador de texto, sin ver
símbolos raros.

## Qué vas a instalar (una sola vez)

1. **Google Drive para escritorio** — <https://www.google.com/drive/download/>
   Iniciá sesión con la cuenta que tiene acceso a la carpeta `Knowlegde-base`.
   Esto crea una carpeta *Google Drive* dentro de tu Mac con todos los archivos
   sincronizados.
2. **MarkText** — <https://marktext.app> → botón *Download* → archivo `.dmg`.
   Abrí el `.dmg` y arrastrá **MarkText** a la carpeta *Aplicaciones*.
3. **Primera apertura (importante en Mac):** buscá MarkText en *Aplicaciones*,
   hacé **clic derecho → Abrir**, y en el aviso de seguridad tocá *Abrir* de
   nuevo. Solo hace falta la primera vez; después se abre normal.

## Abrir los archivos

- En MarkText: menú **File → Open Folder…** y elegí, dentro de tu carpeta de
  Google Drive, la carpeta de la knowledge-base (`… / Knowlegde-base / v4.0`).
- La lista de archivos aparece en la barra lateral izquierda. Si no se ve:
  menú **View → Toggle Side Bar** (o `Cmd + J`).
- Hacé clic en un archivo para abrirlo. Vas a ver el texto ya formateado
  (títulos grandes, tablas dibujadas, negritas), no el código.

## Editar (se usa como Word)

| Querés… | Hacé esto |
|---|---|
| Negrita | Seleccionar el texto y `Cmd + B` |
| Cursiva | Seleccionar y `Cmd + I` |
| Título | Escribí `#` + espacio al inicio del renglón (`##` = subtítulo, `###` = más chico) |
| Lista con viñetas | Escribí `-` + espacio |
| Lista numerada | Escribí `1.` + espacio |
| Tabla | Menú **Paragraph → Table**, elegí filas y columnas. Para agregar filas: `Tab` en la última celda |
| Link | Seleccionar el texto y `Cmd + K`, pegar la dirección |
| Deshacer | `Cmd + Z` |

Si en algún momento querés ver el Markdown "crudo" (el código): menú
**View → Source Code Mode**. Para volver a la vista normal, destildalo.

## Guardar

- `Cmd + S` guarda el archivo. Un punto en la pestaña = hay cambios sin guardar.
- Al guardar, Google Drive para escritorio sube el cambio solo (unos segundos).
  No hay que "exportar" ni "subir" nada a mano.

## Reglas para no romper nada

- **No cambies el nombre ni la extensión de los archivos.** Tienen que seguir
  siendo `.md` con el mismo nombre — así se cargan en el bot.
- **Una persona por archivo a la vez.** Si dos personas editan el mismo archivo
  desde computadoras distintas, Google Drive crea una "copia en conflicto" y se
  pierde trabajo. Coordiná quién toca qué.
- **No conviertas el archivo a Google Docs.** Si Drive te ofrece "abrir con
  Google Docs", no lo hagas: rompe el formato.
- El archivo `opi-system-prompt-v4.0.md` es la configuración del bot. Se puede
  leer para entender cómo trabaja, pero cambiarlo afecta el comportamiento en
  todos los módulos — avisá antes de tocarlo.
- Después de editar, avisá al responsable técnico para que suba la versión
  actualizada al bot (Botpress no se actualiza solo).

## Alternativa: Obsidian

Si preferís algo más mantenido y con más opciones,
[Obsidian](https://obsidian.md) también es gratis e instalable en Mac. En
*Settings → Editor* poné **Default editing mode: Reading view** para solo
lectura, o **Live Preview** para editar casi sin ver sintaxis. Se abre igual
sobre la carpeta de la knowledge-base ("Open folder as vault").

## Recursos clave mencionados

- [MarkText](https://marktext.app) — editor Markdown gratis y open source (Mac, Windows, Linux)
- [Google Drive para escritorio](https://www.google.com/drive/download/) — sincroniza la carpeta de la KB con la Mac
- [Obsidian](https://obsidian.md) — alternativa gratuita, más activa en desarrollo
