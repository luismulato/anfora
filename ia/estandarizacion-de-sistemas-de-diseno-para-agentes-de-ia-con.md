# Estandarización de sistemas de diseño para agentes de IA con el formato DESIGN.md

**Fuente:** https://youtube.com/shorts/AXsFW7OlNSM
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Marc Aparisi Rull](https://www.youtube.com/@maparisi_dev) — 566 suscriptores (👨‍💻 Videos sobre IA, Tecnología y Programación)

## Resumen

Método para mitigar la inconsistencia en interfaces generadas por IA mediante `DESIGN.md`, especificación introducida por Google Labs. Permite parametrizar tokens (colores, tipografía, espaciados) y reglas semánticas referenciadas en archivos de configuración de agentes como `CLAUDE.md`.

## Recursos clave mencionados

- [Video analizado: Tu IA no tiene reglas de diseño](https://youtube.com/shorts/AXsFW7OlNSM)
- Especificación de sistema de diseño: Formato `DESIGN.md` (Google Labs / Stitch).
- Archivo de directivas de proyecto: `CLAUDE.md` / `.cursorrules`.

## Hallazgos

- **Inconsistencia de interfaz en generación automática:** Sin especificaciones explícitas, los agentes de desarrollo (LLMs) generan componentes con variaciones arbitrarias de paleta, espaciado y jerarquía en cada iteración.
- **Estructura en dos niveles de `DESIGN.md`:** 
  1. *Bloque de tokens:* Especificación unívoca de valores hex, fuentes, radios de borde y escalas de espaciado en la cabecera.
  2. *Cuerpo en lenguaje natural:* Reglas semánticas sobre cuándo y cómo aplicar cada token (ej. reservas de color para botones de llamada a la acción primarios).
- **Extracción automatizada:** No requiere redacción manual desde cero; puede derivarse mediante prompts a la IA a partir de hojas de estilo existentes (CSS, temas de framework) o repositorios base.
- **Enlace de contexto de ejecución:** Requiere vincular la lectura obligatoria del archivo dentro del archivo rector del asistente (ej. `CLAUDE.md`) previo al inicio de cualquier tarea de maquetación o interfaz.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Problema de la inconsistencia en UI:** Variaciones arbitrarias en botones, colores y tipografía producidas por agentes de código.
- **[00:00:10] Estructura del archivo DESIGN.md:** Declaración técnica de tokens de diseño y reglas semánticas de aplicación.
- **[00:00:30] Generación y adaptación de reglas:** Extracción a partir de archivos CSS existentes o plantillas de diseño.
- **[00:00:44] Configuración del agente:** Vinculación de `DESIGN.md` en el archivo de contexto del proyecto (`CLAUDE.md`) para forzar su cumplimiento.
