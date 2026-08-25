# CLAUDE.md: guía práctica para llenarlo bien

**Fuente:** síntesis propia a partir de la documentación oficial de Claude Code (Anthropic) y práctica propia armando CLAUDE.md globales y de proyecto.
**Fecha archivado:** 2026-08-12
**Visibilidad:** public
**Tipo:** Guía

## Resumen

CLAUDE.md es el archivo de contexto persistente que Claude Code carga en cada sesión. Sirve para instrucciones durables de comportamiento y convenciones no derivables del código — no para hechos que cambian ni para contexto de una sola conversación. Esta guía cubre los dos niveles (global y de proyecto), qué va y qué no va, y cómo estructurarlo para que aporte sin inflar el contexto.

## Los dos niveles

- **Global (`~/.claude/CLAUDE.md`):** aplica a todas las sesiones, todos los proyectos. Para preferencias de trabajo, estilo de comunicación, comportamientos proactivos recurrentes que no dependen de un repo puntual (ej. "ofrecer X después de un tramo largo de sesión", "invocar la skill Y cada vez que se edite Z").
- **De proyecto (`<repo>/CLAUDE.md`):** aplica solo quien trabaja en ese repo. Para arquitectura, convenciones específicas, estructura de carpetas no obvia, comandos de build/test, gotchas del dominio.
- Se pueden anidar: un CLAUDE.md en la raíz del repo y otros más específicos en subcarpetas (ej. `packages/mi-paquete/CLAUDE.md`) para contexto que solo aplica ahí.

## Qué va

- **Instrucciones durables de comportamiento** — reglas de "cuándo hacer X" o "cómo actuar ante Y", no descripciones pasivas.
- **El "por qué" cuando no es obvio** — una convención no estándar, una restricción oculta, una decisión de arquitectura que sorprendería a alguien nuevo.
- **Lo que el código no puede enseñar por sí solo** — comandos de build/test/deploy, dónde vive cada tipo de contenido, qué carpetas están gitignored y por qué, referencias a documentos externos (Linear, Slack, dashboards).
- **Convenciones de nombres y estructura de archivos** cuando no son evidentes explorando el repo.

## Qué NO va

- **Hechos que cambian** (quién está trabajando en qué, deadlines, estado de un bug) — eso es contexto de conversación o de gestión de proyecto, no una instrucción persistente. Reescribirlo constantemente ensucia el archivo.
- **Lo que ya es obvio leyendo el código** — nombres de archivos, estructura de carpetas evidente, patrones que un `ls` o un `grep` ya revelan.
- **Secretos o credenciales** — nunca, bajo ninguna circunstancia.
- **Contenido de una sola conversación** — si es específico de una tarea puntual, no pertenece a un archivo que se carga siempre.
- **Historia de decisiones pasadas** ("antes hacíamos X, ahora Y") — eso es para un changelog o commit message, no para instrucciones vigentes.

## Estructura recomendada

- **Headers claros** — el archivo debe ser skimmable, no un bloque de texto corrido.
- **Reglas en imperativo, cortas** — "Siempre X antes de Y", no párrafos narrativos.
- **Ejemplos concretos** cuando la regla es abstracta (ej. mostrar el formato exacto de un nombre de archivo).
- **Secciones típicas de un CLAUDE.md de proyecto:** contexto general, estructura de carpetas y su propósito, convenciones de nombres, comandos frecuentes, gotchas conocidos, skills disponibles y cuándo dispararlas.

## Enfoque iterativo

- No trates de anticipar todas las reglas que Claude podría necesitar. Empezá con lo mínimo y **agregá una regla cuando Claude se equivoca o pregunta algo que ya deberías haber dejado claro** — no antes.
- Si una instrucción deja de ser cierta o de aplicar, borrala. Un CLAUDE.md desactualizado es peor que uno corto.
- Revisiones periódicas cortas rinden más que un archivo enorme escrito una sola vez.

## Memoria vs. CLAUDE.md

Muchos asistentes de código (incluido Claude Code con memoria habilitada) distinguen dos mecanismos que conviene no mezclar:

- **CLAUDE.md** — instrucciones fijas que el usuario controla explícitamente, siempre presentes.
- **Memoria** — hechos aprendidos sobre el usuario, el proyecto o feedback dado en conversación, que el asistente decide cuándo recuperar y que evolucionan solos con el tiempo.

Si lo que querés registrar es "quién sos" o "en qué estás trabajando ahora" en lugar de "cómo quiero que actúes siempre", probablemente pertenece a memoria, no a CLAUDE.md.
