# Claude Code: Gestión de contexto en sesiones largas con AutoHandoff y You Should Know

**Fuente:** https://youtube.com/shorts/3_dF-jibwVU?si=bSMV3pY52oyQdMfX
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Andrea Eskailet](https://www.youtube.com/@andrea.eskailet) — 12.5 mil suscriptores (Hola, soy Andrea. Construyo contigo.Soy quien está detrás de Eskailet. Llevo más de 10 años montando sistemas…)

## Resumen

Claude Code sufre degradación de contexto en sesiones extensas al compactar la memoria automáticamente. Se solucionan los olvidos usando el mod abierto AutoHandoff para transferir resúmenes estructurados vía Haiku a una sesión limpia, complementado con el observador You Should Know.

## Recursos clave mencionados

- Enlace analizado: https://youtube.com/shorts/3_dF-jibwVU?si=bSMV3pY52oyQdMfX
- Herramienta base: Claude Code (CLI de desarrollo de Anthropic)
- Modelo de compactación: Claude Haiku
- Mod de código abierto: AutoHandoff
- Extensión / agente de monitoreo: You Should Know

## Hallazgos

- **Degradación por auto-resumen:** Al saturarse la ventana de contexto, Claude Code resume internamente el historial descartando decisiones técnicas tempranas sin control del desarrollador.
- **Mecanismo de traspaso AutoHandoff:** Previene el llenado crítico solicitando a Claude Haiku un reporte estructurado de decisiones y estado de trabajo, reiniciando la sesión limpia con dicho contexto.
- **Supervisión activa con You Should Know:** Actúa como un segundo agente concurrente integrado en la CLI, alertando en tiempo real al desarrollador sobre cambios críticos o desvíos técnicos en la base de código.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Saturación de ventana de contexto:** Pérdida de memoria histórica tras sesiones extensas de programación en Claude Code.
- **[00:00:24] Mod AutoHandoff:** Delegación de síntesis estructurada a Claude Haiku e inicio de sesión relevada.
- **[00:00:47] Extensión You Should Know:** Agente de observación pasiva que notifica cambios técnicos y decisiones clave al desarrollador.
