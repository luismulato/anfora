# Claude Code: conectar herramientas externas — connector de claude.ai vs. MCP local

<img src="https://claude-code.mintlify.app/_next/image?url=%2F_mintlify%2Fapi%2Fog%3Fdivision%3DMCP%26appearance%3Dsystem%26title%3DConnect%2BClaude%2BCode%2Bto%2Btools%2Bvia%2BMCP%26description%3DLearn%2Bhow%2Bto%2Bconnect%2BClaude%2BCode%2Bto%2Byour%2Btools%2Bwith%2Bthe%2BModel%2BContext%2BProtocol.%26logoLight%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaude-code%252Fc5r9_6tjPMzFdDDT%252Flogo%252Flight.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253Dc5r9_6tjPMzFdDDT%2526q%253D85%2526s%253D78fd01ff4f4340295a4f66e2ea54903c%26logoDark%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaude-code%252Fc5r9_6tjPMzFdDDT%252Flogo%252Fdark.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253Dc5r9_6tjPMzFdDDT%2526q%253D85%2526s%253D1298a0c3b3a1da603b190d0de0e31712%26primaryColor%3D%25230E0E0E%26lightColor%3D%2523D4A27F%26backgroundLight%3D%2523FDFDF7%26backgroundDark%3D%252309090B&w=1200&q=100" alt="Portada oficial de la documentación de Claude Code: 'Connect Claude Code to tools via MCP'" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://code.claude.com/docs/en/mcp
**Fecha archivado:** 2026-08-18
**Visibilidad:** public
**Tipo:** Docs

## Resumen

Hay dos caminos para darle a Claude Code acceso a una herramienta externa (Notion, Drive, Sentry, etc.): activarla como connector en la cuenta de claude.ai, o registrar su servidor MCP a mano con `claude mcp add`. Los dos hablan el mismo protocolo y pueden apuntar a la misma URL; lo que cambia es dónde vive la configuración y en qué clientes aparece.

## Recursos clave mencionados

- [Docs oficiales: Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)
- `claude mcp list` — lista todo lo conectado, sea connector o MCP local
- `claude mcp get <nombre>` — muestra scope, tipo, URL y estado de autenticación de uno

## Opción A — Connector de claude.ai

Vive en la cuenta, no en la máquina. Es el catálogo de integraciones oficiales.

- **Subir:** claude.ai → Settings → Connectors → activar el que quieras → OAuth en el navegador, eligiendo a qué recursos le das acceso.
- **Bajar:** mismo lugar, desconectar. No hay comando de CLI para esto.
- **Cómo se ve:** en `claude mcp list` aparece prefijado, ej. `claude.ai Notion: https://mcp.notion.com/mcp - ✔ Connected`.

## Opción B — Servidor MCP local

Vive en el config de Claude Code (`~/.claude.json` para scope `user`).

- **Subir:**
  ```bash
  claude mcp add --scope user --transport http <nombre> <url>
  ```
  Después, dentro de la sesión: `/mcp` → elegir el servidor → **Authenticate**. Los scopes disponibles son `local` (default, solo el proyecto actual), `user` (todos los proyectos) y `project` (compartido por repo).
- **Bajar:**
  ```bash
  claude mcp remove <nombre> -s user
  ```
  El `-s` tiene que coincidir con el scope con el que se agregó.

## Hallazgos

- **Para un SaaS personal que usás en todos lados, conviene el connector (A).** Se gestiona en un solo lugar y sirve en web, app de escritorio y Claude Code a la vez, sin repetir el OAuth por máquina.
- **El MCP local (B) gana cuando el connector no existe:** servidores self-hosted, servidores `stdio` que corren como subproceso, o cualquier cosa fuera del catálogo oficial. También es la única opción si querés el acceso acotado a un proyecto (`--scope local` o `project`) en vez de a toda la cuenta.
- **Nunca dejar las dos apuntando al mismo servicio.** Quedan dos juegos idénticos de herramientas cargados en contexto: gasta tokens y agrega ambigüedad sobre cuál llamar. Si ya tenés el connector, borrá el MCP local.
- **El estado de autenticación es visible.** `claude mcp list` distingue `✔ Connected` de `! Needs authentication`, que es la forma rápida de detectar un duplicado a medio configurar.
- **Los permisos incluyen escritura.** En el paso de OAuth conviene compartir solo las páginas o recursos que hacen falta, no el workspace entero.
- **Un servidor agregado en caliente puede necesitar reiniciar Claude Code** para que sus herramientas aparezcan del todo en una sesión que ya venía corriendo.
