# Claude Code: agentes vs sesiones (y cómo se instancian)

**Fuente:** Conversación propia con Claude Code (sin recurso externo)
**Fecha archivado:** 2026-10-02
**Tipo:** Nota propia

## Resumen

Un **agente** es una definición reutilizable (un `.md` con prompt, herramientas y modelo); una **sesión** es una conversación viva con historial y contexto. Un agente solo existe en ejecución cuando alguien lo instancia: como sesión completa (`claude --agent X`) o como subagente invocado desde otra sesión. Ninguno queda corriendo "siempre".

## Qué es cada cosa

- **Agente:** archivo `.md` en `.claude/agents/` (proyecto) o `~/.claude/agents/` (global), con prompt de sistema, herramientas permitidas, modelo opcional y descripción. No corre por sí solo.
- **Sesión:** conversación viva con historial, contexto, permisos y directorio de trabajo. Se puede retomar con `--resume`. Es lo que se ve en un tab.

## Las dos formas de instanciar un agente

| Forma | Qué es | Vive hasta que… |
|---|---|---|
| Sesión con `claude --agent X` | Sesión completa que adopta el rol del agente (el `main()` de un programa) | se cierra el tab o se sale; retomable con `--resume` |
| Subagente desde una sesión (herramienta Agent) | Instancia nueva con contexto limpio; devuelve solo el mensaje final | termina su tarea, o muere la sesión que lo lanzó |

- Cada invocación crea una **instancia independiente** dentro de la sesión que la llama. Dos sesiones que invocan el mismo agente = dos instancias que no comparten nada.
- `SendMessage` permite **continuar** una instancia con su contexto previo.
- Los subagentes son *in-process*: si la sesión muere, mueren con ella (no quedan huérfanos). *Inferido de cómo está construido, no verificado en la documentación.*
- Lo que sobrevive es lo que el subagente ya escribió a disco (archivos, commits).

## Analogía: agente ≈ llamada a función

- Definición del agente = función declarada (prompt = cuerpo, herramientas = lo que puede tocar).
- Invocación = llamada, con un *stack frame* nuevo (contexto limpio).
- Prompt que se le pasa = argumento; el agente no ve la conversación, es una función sin variables globales.
- Mensaje final = valor de retorno; todo el razonamiento intermedio se descarta, lo que protege el contexto de la sesión principal.

Dónde se rompe: puede correr en segundo plano (async), es no determinista (el cuerpo es un LLM), tiene efectos secundarios (archivos, comandos) y se puede reanudar con `SendMessage`.

## Recursos clave mencionados

- **Un tab de VS Code por agente (lo más seguro):** terminales con `claude --agent X`, ya sea con una tarea en `.vscode/tasks.json` (`presentation.panel: "new"`) o con perfiles en `terminal.integrated.profiles.osx`.
- **Extensión nativa de Claude Code:** tiene comando de tab nuevo y URI handler `vscode://anthropic.claude-code/open?...`; **no confirmado** que alguno acepte un agente como parámetro.
- **Trabajo que debe sobrevivir al cierre de sesión:** un proceso del sistema (cron/launchd) o una sesión remota en la nube; no un subagente.
- Nota relacionada: [claude-code-mensajeria-entre-sesiones.md](claude-code-mensajeria-entre-sesiones.md)
