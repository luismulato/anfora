# Guía: dónde van los permisos de Claude Code y qué jerarquía tienen

**Fuente:** https://code.claude.com/docs/en/settings.md · https://code.claude.com/docs/en/permissions.md
**Fecha archivado:** 2026-09-28
**Visibilidad:** public
**Tipo:** Guía / Tutorial

Claude Code (CLI, extensión de VS Code/JetBrains, app de escritorio) lee su configuración de varios archivos JSON a la vez. Cuando la misma clave aparece en más de uno, gana el de mayor jerarquía. Esta guía explica los cinco niveles, cómo se resuelve un conflicto, cómo funciona el modo de permisos y qué tan lejos llega el acceso a carpetas — con ejemplos concretos para no tener que adivinar dónde tocar cada cosa.

---

## 1. Los cinco niveles, de mayor a menor precedencia

| # | Nivel | Archivo | A quién afecta |
|---|---|---|---|
| 1 | **Managed** (organización) | `managed-settings.json`, MDM, o la consola de claude.ai | Todos los que tu organización alcanza — nada de lo que vos pongas lo pisa |
| 2 | **Línea de comandos** | `claude --settings '{...}'` | Solo esa sesión; no queda guardado en ningún archivo |
| 3 | **Proyecto local** | `.claude/settings.local.json` | Vos, solo en ese proyecto — Claude Code lo excluye de git automáticamente |
| 4 | **Proyecto compartido** | `.claude/settings.json` | Todo el equipo que clona ese repo (si lo commiteás) |
| 5 | **Usuario** | `~/.claude/settings.json` | Vos, en todos tus proyectos |

Un valor puesto en un nivel más alto siempre gana sobre el mismo valor en un nivel más bajo. Ejemplo real: si el archivo de equipo (`.claude/settings.json`) prende algo que no querés, podés apagarlo solo para vos agregando la clave contraria en tu `.claude/settings.local.json` de ese mismo proyecto — no hace falta tocar el archivo compartido.

**Las variables de entorno no son un nivel de esta pila.** Cada una tiene su propia regla: por ejemplo `ANTHROPIC_MODEL` exportada en tu shell pisa la clave `model` de cualquier archivo, mientras que `ANTHROPIC_DEFAULT_MODEL` solo aplica si ningún archivo define `model`.

**Ojo con las listas** (como `permissions.allow` o `permissions.deny`): a diferencia de un valor simple, si la misma lista aparece en varios archivos, Claude Code **las combina**, no elige una. Cada archivo suma reglas, no las reemplaza.

---

## 2. El modo de permisos (`permissions.defaultMode`)

Controla qué tan seguido te pregunta antes de actuar:

| Valor | Qué hace |
|---|---|
| `default` (alias `manual`) | Pregunta la primera vez que usa cada herramienta en la sesión |
| `acceptEdits` | Acepta solo automáticamente ediciones de archivos y comandos de filesystem comunes (`mkdir`, `mv`, `cp`...) dentro del directorio de trabajo |
| `plan` | Solo lee y explora, no edita nada |
| `auto` | Un clasificador aprueba llamadas automáticamente con chequeos de seguridad de fondo |
| `dontAsk` | Deniega automáticamente todo lo que pediría confirmación |
| `bypassPermissions` | Salta casi todas las confirmaciones — **solo usar en contenedores/VMs aislados**, nunca en tu máquina real |

**Dato clave que no es intuitivo:** desde la versión 2.1.257 de Claude Code, los valores `auto` y `bypassPermissions` **no tienen efecto si los ponés en `.claude/settings.json` o `.claude/settings.local.json` de un proyecto** — solo valen si están en tus settings de usuario (`~/.claude/settings.json`), en settings managed, o pasados por `--permission-mode` para una sesión puntual. Si escribís `"defaultMode": "auto"` en el archivo local de un proyecto y tenés una versión reciente, ese archivo simplemente no hace nada — no da error, pero tampoco cambia el comportamiento.

`plan`, `acceptEdits` y `default` sí se pueden fijar a nivel proyecto sin problema.

---

## 3. Hasta dónde llega el acceso a carpetas

Por defecto, Claude Code solo puede leer/editar sin fricción la carpeta donde lo arrancaste — en VS Code, eso suele ser la carpeta que abriste como workspace. Eso ya es un límite razonable "gratis": si abrís un proyecto puntual en vez de una carpeta enorme, el acceso por defecto ya queda más acotado.

Para ampliarlo:
- `--add-dir <ruta>` al arrancar, o `/add-dir` durante la sesión (temporal, esa sesión)
- `permissions.additionalDirectories` en cualquier archivo de settings (persistente)

**Pero esto NO es una caja fuerte.** Es un límite "blando": rutas absolutas o un `cd` dentro de un comando de Bash pueden seguir llegando a cualquier lado del disco al que tu usuario del sistema operativo tenga acceso, salvo que actives algo más estricto:

- `permissions.blockReadsOutsideWorkingDirectories: true` — hace que las herramientas de lectura/edición rechacen cualquier ruta fuera del directorio de trabajo + `additionalDirectories`, en cualquier modo de permisos.
- **Sandboxing** (una capa aparte de los permisos) — aplica un límite real a nivel de sistema operativo, pero solo a los comandos de Bash/PowerShell y sus procesos hijos, no a las otras herramientas.

Reglas más finas por ruta (`Read`, `Edit`, `Bash`) usan sintaxis tipo gitignore:

| Patrón | Significado |
|---|---|
| `//ruta/absoluta` | Ancla en la raíz del filesystem |
| `~/ruta` | Ancla en tu home |
| `/ruta` | Ancla en la carpeta del archivo de settings que define la regla (no en la raíz del disco) |
| `ruta` o `./ruta` | Relativa a la carpeta actual |

Ejemplo para bloquear que lea tu `.env`, agregado a cualquier `settings.json`:

```json
{
  "permissions": {
    "deny": ["Read(./.env)", "Read(./.env.*)"]
  }
}
```

---

## 4. Cómo confirmar qué está activo ahora mismo

- **`/status`** dentro de una sesión: muestra qué archivos de settings cargó y, si tu organización te impone algo, de dónde viene.
- **`/permissions`**: lista cada regla activa y de qué archivo salió.
- **`claude doctor`**: muestra qué entradas se descartaron por estar mal escritas.

---

## Resumen accionable

1. Configuración personal para todos tus proyectos → `~/.claude/settings.json`.
2. Algo que todo el equipo de un proyecto debería tener → `.claude/settings.json` del proyecto (y commitealo).
3. Una excepción tuya, solo en ese proyecto → `.claude/settings.local.json` (Claude Code lo mantiene fuera de git solo).
4. Si querés `auto` o `bypassPermissions` como modo por defecto, no sirve ponerlo a nivel proyecto — va en tus settings de usuario, o pasalo por `--permission-mode` sesión a sesión.
5. El acceso a carpetas ya se acota solo, según qué carpeta abrís — para que sea un límite duro de verdad, sumá `blockReadsOutsideWorkingDirectories: true`, y si necesitás que ni un subproceso se escape, la respuesta es sandboxing, no permisos.

---

*Fuente: documentación oficial de Claude Code — [Settings files and precedence](https://code.claude.com/docs/en/settings.md) y [Configure permissions](https://code.claude.com/docs/en/permissions.md), verificado contra la versión 2.1.280.*
