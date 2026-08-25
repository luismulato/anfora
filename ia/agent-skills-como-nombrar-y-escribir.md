# Agent Skills (Claude Code) — cómo nombrar y escribir una skill

**Fuente:** síntesis propia a partir de la guía oficial de Anthropic para Agent Skills + convenciones generales de naming de CLI/software (no es copia textual del doc oficial — para el original, ver la documentación de Claude Code / Agent Skills de Anthropic).
**Fecha archivado:** 2026-08-11
**Visibilidad:** public
**Tipo:** Guía

## Qué es

Una Skill es un paquete de instrucciones reutilizable para Claude Code:
una carpeta con un `SKILL.md` (frontmatter `name` + `description`,
opcionalmente `allowed-tools`) más el contenido que haga falta
(scripts, referencias). Puede ser **global** (`~/.claude/skills/`) o
**de proyecto** (`<proyecto>/.claude/skills/`).

## El nombre

- **kebab-case**, todo minúscula, sin abreviar de más.
- El nombre de la skill = el nombre de la carpeta que la contiene.
- Corto y memorable — no necesita cargar con todo el significado.
- Patrón habitual (viene de convenciones de CLI, no es específico de
  Anthropic): **verbo + objeto** o **objeto + verbo**
  (`update-skills-catalog`, `translate-markdown-to-spanish`,
  `argos-sync`, `wp-plugin-release`). Es la misma lógica detrás de
  subcomandos tipo `git commit` o `npm run build`.
- Skills de **sistema de diseño** de un proyecto: `<proyecto>-design`.
- Skills de **sync/mantenimiento** de un catálogo propio: `<sujeto>-sync`
  o `update-<sujeto>`.
- Las skills **de proyecto** no repiten el nombre del proyecto en el
  nombre — la carpeta ya da ese contexto (`opi-openside/document-to-markdown`,
  no `opi-openside-document-to-markdown`).

## Lo que realmente importa: el `description`

El nombre es secundario. Lo que Claude usa para decidir **cuándo**
disparar una skill es el campo `description` del frontmatter — por
eso debe:

- Escribirse en **tercera persona**.
- Decir **qué hace** la skill.
- Decir **cuándo usarla** (condiciones de disparo, frases o contextos
  que deberían activarla).

Una `description` vaga o solo descriptiva del "qué" (sin el "cuándo")
hace que la skill nunca se dispare sola, aunque el nombre sea perfecto.

## Principio de responsabilidad única

Una skill = una responsabilidad. Si describirla necesita un "y"
(`convert-and-upload-and-notify`), probablemente son dos o tres skills
separadas, no una.

## Evitar nombres genéricos

Nombres demasiado genéricos pueden pisarse entre proyectos distintos o
resultar ambiguos para el modelo al momento de elegir cuál disparar.
Preferir nombres específicos al dominio/objeto sobre el que operan.

## Aplicación práctica (ejemplos propios)

| Skill | Patrón |
|---|---|
| `argos-sync` | sujeto + sync |
| `update-skills-catalog` | verbo + objeto |
| `cop-ai-mas-equipo-design` | proyecto + design |
| `opi-openside/document-to-markdown` | objeto + verbo (sin prefijo de proyecto) |
| `centauro-changelog` | nombre propio + objeto (caso especial: es un producto personal con nombre, no una acción genérica) |
