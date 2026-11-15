# Claude Code con MCP Figma, Playwright y skills de diseño frontend

<img src="https://repository-images.githubusercontent.com/1162099055/0a968964-fdca-4781-853b-84afc2bc2d31" alt="Imagen de portada: Claude Code con MCP Figma, Playwright y skills de diseño frontend" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://youtube.com/shorts/evm74bPFCXk?si=-TAt5Y0AMcf0_bPR
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Víctor Crespo Vaillo](https://www.youtube.com/@victorcrespovaillo) — 199 mil suscriptores (🎁 COMUNIDAD AQUÍ ⬇️💡 Trucos diarios de IA🤖 IA que automatiza negocios)

## Resumen

Flujo de trabajo para Claude Code enfocado en eliminar interfaces genéricas mediante skills de diseño frontend (Impeccable, Emil Kowalski, Taste Skill) e integración bidireccional vía MCP con Figma y Playwright para maquetación, previsualización e iteración autónoma.

## Recursos clave mencionados

- **Video original:** https://youtube.com/shorts/evm74bPFCXk?si=-TAt5Y0AMcf0_bPR
- **Impeccable:** Sistema de vocabulario de diseño, espaciado y tipografía para asistentes de código.
- **Emil Kowalski Design Skills:** Reglas y heurísticas de microinteracciones, animaciones y fluidez de interfaz.
- **Taste Skill:** Framework anti-slop para frontend (`https://tasteskill.dev`).
- **Instalación de Taste Skill:**
  ```bash
  npx skills add [https://github.com/Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) --skill "design-taste-frontend"

Model Context Protocol (MCP): Servidores de integración con Figma (Figma MCP) y Playwright (Playwright MCP).

```

## Hallazgos

- **Inyección de criterios de diseño:** La incorporación de skills especializadas (Impeccable, Emil Kowalski y Taste Skill) previene la generación de layouts estereotipados por IA, forzando un mejor tratamiento tipográfico, espaciados consistentes y microinteracciones de alta gama.

- **Extracción de diseño con Figma MCP:** Permite al agente inspeccionar directamente los archivos de diseño, tokens visuales y estructuras de componentes en Figma para traducirlos a código sin intermediación manual.

- **Bucle de validación visual con Playwright MCP:** Claude Code levanta un navegador automatizado, renderiza la web localmente, evalúa fallos de maquetación o consola y ejecuta correcciones autónomas sobre el código antes de finalizar la tarea.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Skills de diseño:** Instalación de Impeccable y las heurísticas de animación de Emil Kowalski para mejorar jerarquía visual.

- **[00:00:13] Referenciación estética con Taste Skill:** Adición de Taste Skill para anclar el criterio visual en referencias de webs en producción y evitar el aspecto genérico de plantilla.

- **[00:00:25] Conexión MCP con Figma y Playwright:** Integración de servidores MCP para lectura de mockups de Figma y automatización de pruebas visuales y debugging con Playwright.
