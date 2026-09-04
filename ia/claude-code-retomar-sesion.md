# Claude Code: retomar una sesión (`--continue` vs `--resume`)

<img src="https://claude-code.mintlify.app/_next/image?url=%2F_mintlify%2Fapi%2Fog%3Fdivision%3DReference%26title%3DInteractive%2Bmode%26description%3DComplete%2Breference%2Bfor%2Bkeyboard%2Bshortcuts%252C%2Binput%2Bmodes%252C%2Band%2Binteractive%2Bfeatures%2Bin%2BClaude%2BCode%2Bsessions.%26theme%3D03628e99c753a03aec319053&w=1200&q=100" alt="Portada oficial de la documentación de Claude Code: 'Interactive mode'" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://code.claude.com/docs/en/interactive-mode
**Fecha archivado:** 2026-09-03
**Tipo:** Docs

## Resumen

Claude Code permite reabrir una conversación previa sin perder el
contexto. `claude --continue` (o `claude -c`) retoma directo la última
sesión de ese directorio; `claude --resume` (o `claude -r`) abre un
selector con el historial para elegir cuál. Se recupera todo el hilo de
mensajes; no se recuperan los procesos que estaban vivos.

## Recursos clave mencionados

- **Documentación oficial:** [Interactive mode](https://code.claude.com/docs/en/interactive-mode) · [CLI reference](https://code.claude.com/docs/en/cli-reference)
- **Transcripts en disco:** `~/.claude/projects/<ruta-del-proyecto>/*.jsonl`

## `claude --continue` (o `claude -c`)

Reabre automáticamente la conversación más reciente de ese directorio,
sin preguntar. Es el atajo para "seguí con lo último que estábamos
haciendo".

```bash
claude --continue
claude --continue "seguí con la siguiente tarjeta del kanban"   # retoma y le pasás un prompt nuevo
claude -c -p "resumime dónde quedamos"                          # modo no-interactivo (print)
```

## `claude --resume` (o `claude -r`)

Abre un selector con la lista de sesiones anteriores (fecha, primer
mensaje, cantidad de mensajes) para que elijas cuál. Sirve cuando
querés volver a una sesión que no es la última.

```bash
claude --resume                    # muestra el picker
claude --resume <session-id>       # salta directo a esa sesión si sabés el id
claude -r <session-id> "..."       # retomar esa sesión con un prompt
```

**Diferencia clave:** `--continue` = la última, directo; `--resume` =
elegís de una lista.

## En la extensión de VSCode

La extensión mantiene su propio historial de sesiones. Al reabrir el
panel de Claude Code después del reload, normalmente aparece la opción
de continuar la conversación anterior o ver el historial (History) — es
el mismo mecanismo por debajo, leyendo los transcripts de
`~/.claude/projects/<ruta-del-proyecto>/*.jsonl`.

## Lo que se recupera y lo que no

**Se recupera:** todo el hilo de mensajes (lo que pediste, lo que
respondió Claude, las tool calls y sus resultados) — el contexto de la
conversación queda intacto.

**No se recupera:** procesos que estaban vivos dentro de esa sesión
(subagentes en background, comandos Bash en background, `/loop`,
watches). Esos hay que relanzarlos con un pedido nuevo una vez que
retomaste.
