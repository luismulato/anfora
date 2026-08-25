# Claude Skills vs. Gemini Gems

**Fecha archivado:** 2026-08-18
**Visibilidad:** public
**Tipo:** Información general (sin fuente externa — explicación generada en conversación)

## Resumen

Comparación entre Gemini Gems (Google) y Claude Skills (Anthropic): dos formas de personalizar el comportamiento de un asistente de IA, con arquitecturas distintas.

**Gemini Gems (Google)**
Un Gem es un asistente personalizado que vive dentro del ecosistema de Google. Se le dan instrucciones estándar (persona, tarea, contexto, formato) que quedan "ancladas" al Gem. Permite adjuntar hasta 10 archivos de referencia, y si esos archivos viven en Google Drive, el Gem los lee siempre actualizados. Un Gem creado en la web aparece automáticamente en la app móvil y en el panel de Workspace. Su límite: las instrucciones no superan aproximadamente 4.000 caracteres, suficiente para personalización básica pero no para flujos complejos.

**Claude Skills (Anthropic)**
Un Skill es literalmente un archivo (SKILL.md + archivos de soporte opcionales: templates, scripts, ejemplos) que le explica a Claude cómo hacer una tarea específica. No es un asistente separado con nombre propio — es una capacidad que Claude "carga" cuando la tarea la amerita. Dos diferencias clave con los Gems:

- **Sin límite de caracteres**: se pueden escribir instrucciones de cientos de líneas, con árboles de decisión, ejemplos de código, guías de estilo, etc.
- **Portabilidad**: un Skill le dice al agente cómo hacer X, mientras que un Gem es un asistente personalizado específico de un proveedor. Desde diciembre 2025 existe el estándar abierto SKILL.md, y para marzo de 2026 ya lo leían 32 herramientas de agentes distintas (Codex CLI, Gemini CLI, Cursor, JetBrains Junie, AWS Kiro, Block Goose). Un Gem, en cambio, solo funciona dentro del ecosistema Google.

**En una frase:** un Gem es un asistente que se arma una vez y vive atado a Google; un Skill es una instrucción reutilizable que le "enseña" a Claude (o a cualquier herramienta compatible con SKILL.md) a hacer algo, y que se puede llevar a cualquier lado.
