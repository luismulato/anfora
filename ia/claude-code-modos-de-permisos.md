# Claude Code: modos de permisos (manual vs. automático)

<img src="https://claude-code.mintlify.app/_next/image?url=%2F_mintlify%2Fapi%2Fog%3Fdivision%3DUse%2BClaude%2BCode%26appearance%3Dsystem%26title%3DChoose%2Ba%2Bpermission%2Bmode%26description%3DControl%2Bwhether%2BClaude%2Basks%2Bbefore%2Bediting%2Bfiles%2Bor%2Brunning%2Bcommands.%2BCycle%2Bmodes%2Bwith%2BShift%252BTab%2Bin%2Bthe%2BCLI%2Bor%2Buse%2Bthe%2Bmode%2Bselector%2Bin%2BVS%2BCode%252C%2BDesktop%252C%2Band%2Bcl%26logoLight%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaude-code%252Fc5r9_6tjPMzFdDDT%252Flogo%252Flight.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253Dc5r9_6tjPMzFdDDT%2526q%253D85%2526s%253D78fd01ff4f4340295a4f66e2ea54903c%26logoDark%3Dhttps%253A%252F%252Fmintcdn.com%252Fclaude-code%252Fc5r9_6tjPMzFdDDT%252Flogo%252Fdark.svg%253Ffit%253Dmax%2526auto%253Dformat%2526n%253Dc5r9_6tjPMzFdDDT%2526q%253D85%2526s%253D1298a0c3b3a1da603b190d0de0e31712%26primaryColor%3D%25230E0E0E%26lightColor%3D%2523D4A27F%26backgroundLight%3D%2523FDFDF7%26backgroundDark%3D%252309090B&w=1200&q=100" alt="Portada oficial de la documentación de Claude Code: 'Choose a permission mode'" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://code.claude.com/docs/en/permission-modes
**Fecha archivado:** 2026-08-11
**Tipo:** Documentación oficial

## Resumen

Claude Code controla con **modos de permisos** cuándo pausa a pedir aprobación antes de editar archivos o ejecutar comandos. Se cicla entre modos con **`Shift+Tab`** en la CLI, o con el selector de modo en VS Code, Desktop y claude.ai.

## Recursos clave mencionados

- **Documentación oficial:** [Choose a permission mode](https://code.claude.com/docs/en/permission-modes)
- **Flag de CLI para iniciar en un modo específico:**
  ```bash
  claude --permission-mode acceptEdits
  ```
- **Default persistente en `~/.claude/settings.json`:**
  ```json
  {
    "permissions": {
      "defaultMode": "acceptEdits"
    }
  }
  ```

## Modos disponibles

- **`default`** (Manual) — solo lecturas sin preguntar; pide confirmación para todo lo demás. Ideal para empezar o trabajo sensible.
- **`acceptEdits`** — auto-aprueba lecturas, ediciones de archivo y comandos de filesystem comunes (`mkdir`, `touch`, `mv`, `cp`). Ideal para iterar sobre código que ya estás revisando.
- **`plan`** — modo de solo lectura: Claude investiga el código y arma un plan de acción, pero no toca nada hasta que se aprueba.
- **`auto`** — ejecuta con verificaciones de seguridad automáticas (requiere cumplir ciertos requisitos de cuenta).
- **`dontAsk`** — solo ejecuta herramientas pre-aprobadas explícitamente.
- **`bypassPermissions`** — salta casi todos los prompts (sobreviven algunos circuit breakers, como `rm -rf /`); recomendado solo en contenedores o VMs aisladas, no en el filesystem real.
