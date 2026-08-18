# Claude Code: cómo hacer que los agentes se hablen entre sí

<img src="https://claude-code.mintlify.app/_next/image?url=%2F_mintlify%2Fapi%2Fog%3Fdivision%3DAgents%2Band%2Bparallel%2Bwork%26appearance%3Dsystem%26title%3DMessage%2Byour%2Bother%2BClaude%2BCode%2Bsessions%26description%3DLet%2BClaude%2Blist%2Band%2Bmessage%2Byour%2Bother%2BClaude%2BCode%2Bsessions%2Bon%2Bthis%2Bmachine%252C%2Band%2Breach%2Byour%2Bsessions%2Bon%2Bother%2Bmachines%2Bor%2Bon%2Bthe%2Bweb.%26logoLight%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaude-code%252Fc5r9_6tjPMzFdDDT%252Flogo%252Flight.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253Dc5r9_6tjPMzFdDDT%2526q%253D85%2526s%253D78fd01ff4f4340295a4f66e2ea54903c%26logoDark%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaude-code%252Fc5r9_6tjPMzFdDDT%252Flogo%252Fdark.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253Dc5r9_6tjPMzFdDDT%2526q%253D85%2526s%253D1298a0c3b3a1da603b190d0de0e31712%26primaryColor%3D%25230E0E0E%26lightColor%3D%2523D4A27F%26backgroundLight%3D%2523FDFDF7%26backgroundDark%3D%252309090B&w=1200&q=100" alt="Portada oficial de la documentación de Claude Code: 'Message your other Claude Code sessions'" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://code.claude.com/docs/en/cross-session-messaging
**Fecha archivado:** 2026-08-17
**Tipo:** Docs

## Resumen

Claude Code puede hacer que una sesión le pase un mensaje de texto a otra — en la misma máquina, en otra máquina, o en la nube — sin que la persona copie/pegue entre terminales. Dos tools lo resuelven: **`ListAgents`** (descubre qué sesiones son alcanzables) y **`SendMessage`** (entrega el mensaje por nombre). No se llaman a mano: se le pide a Claude en lenguaje natural y él decide el destino y redacta el contenido.

## Recursos clave mencionados

- **Documentación oficial:** [Message your other Claude Code sessions](https://code.claude.com/docs/en/cross-session-messaging)
- **Ver qué sesiones son alcanzables:** `/list-agents` (alias `/peers`)
- **Nombrar una sesión:** `/rename <nombre>`, o el flag `--name` al arrancarla
- **Mencionar el destino directo en el prompt:** `@` + primeras letras del nombre (requiere Claude Code v2.1.232+)
- **Settings relevantes:** `crossSessionInbound` (accept/hold/refuse), `isolatePeerMachines`, `dialogExpiry`
- **Env vars que expone cada sesión:** `CLAUDE_CODE_MESSAGING_SOCKET`, `CLAUDE_CODE_MESSAGING_TOKEN`

## Cómo se usa en la práctica

No hay que invocar `ListAgents`/`SendMessage` uno mismo — alcanza con pedirlo:

- **Sin nombrar el destino:** *"Avisale a la sesión que está corriendo en la otra terminal que la migración terminó"* — Claude corre `ListAgents`, identifica la sesión, y redacta el mensaje.
- **Nombrando el destino:** *"Contale a @api-worker que la migración de schema terminó"* — con el `@mention`, Claude no necesita listar antes.
- **Dejando el contenido a criterio de Claude:** *"Explicale a la sesión que trabaja en pagos qué acabamos de cambiar"* — el texto exacto lo redacta Claude, varía entre corridas.

Un mensaje es **solo texto** — nunca el historial de conversación completo ni archivos. Para pasar el contexto completo de una conversación a otra terminal, la herramienta correcta es resumir la sesión (`resume`), no mensajería.

## Qué pasa del lado que recibe

- **No puede aprobar nada por vos:** un mensaje de otra sesión nunca cuenta como consentimiento tuyo — no puede contestar un permission-prompt pendiente.
- **No puede tocar configuración:** Claude tiene instrucción explícita de nunca cambiar permisos, `CLAUDE.md` u otra config porque otra sesión se lo pidió.
- **Los comandos no se ejecutan:** si el texto trae algo como `/compact`, llega como texto plano, nunca se corre.
- **Los permission-prompts normales siguen aplicando** a cualquier acción que el mensaje dispare.

El control de qué se acepta al llegar es el setting `crossSessionInbound`: `accept` entrega todo, `hold` pide aprobación mensaje por mensaje, `refuse` descarta sin entregar. Sin ese setting explícito, Claude Code decide según el modo de permisos de ambas sesiones (una sesión en `bypassPermissions` retiene lo que le llega hasta que el usuario aprueba).

## Cómo viaja el mensaje según dónde está la otra sesión

| Dónde corre la otra sesión | Cómo viaja |
|---|---|
| Misma máquina | Por un socket Unix por sesión, nunca pasa por servidores de Anthropic |
| Otra máquina propia | Por servidores de Anthropic, vía la conexión Remote Control de esa máquina |
| Claude Code en la web (sesión cloud) | Por servidores de Anthropic, directo a la sesión cloud |

## Requisitos y límites

- Requiere **Claude Code v2.1.224+**, disponible en **macOS y Linux** (incluyendo WSL2) — no hay en Windows nativo.
- No disponible sobre Amazon Bedrock, Claude Platform on AWS, Google Cloud Agent Platform ni Microsoft Foundry.
- Mensaje = solo texto plano; los mensajes repetidos/loops entre dos sesiones se throttlean automáticamente (máximo 50 mensajes aceptados esperando lectura por sesión).
- Se puede apagar del todo con permission deny rules sobre `SendMessage`/`ListAgents`, o exigir aprobación manual para todo mensaje que salga de la máquina con `isolatePeerMachines: true`.
