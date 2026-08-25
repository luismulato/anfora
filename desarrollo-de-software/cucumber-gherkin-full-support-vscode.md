# Cucumber (Gherkin) Full Support en Visual Studio Code

**Fuente:** https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete
**Fecha archivado:** 2026-08-21
**Visibilidad:** public
**Tipo:** Guía Técnica / Artículo

## Resumen

Guía de integración y configuración de la extensión Cucumber (Gherkin) Full Support en Visual Studio Code. Permite vincular especificaciones en lenguaje natural con definiciones de pasos ejecutables, habilitando autocompletado estricto, formateo automático y navegación directa al código.

## Recursos clave mencionados

- **Visual Studio Marketplace:** [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
- **Repositorio oficial (GitHub):** [alexkrechik/vscode-cucumber-autocomplete](https://github.com/alexkrechik/vscode-cucumber-autocomplete)
- **Documentación oficial de Gherkin / Cucumber:** [Cucumber Reference Documentation](https://cucumber.io/docs/gherkin/reference/)
- **Video de referencia recomendado:** [Setting up Cucumber & Gherkin in VS Code](https://www.youtube.com/results?search_query=cucumber+gherkin+full+support+vscode+setup)

## Hallazgos

- **Configuración de rutas:** Requiere definir en `settings.json` los globs exactos de `cucumberautocomplete.steps` y `cucumberautocomplete.syncfeatures` para el escaneo de Step Definitions.
- **Navegación bidireccional:** Habilita el salto directo al código fuente (`Ctrl + Clic` / `Cmd + Clic`) desde sentencias Gherkin (`Dado`, `Cuando`, `Entonces`).
- **Soporte multi-idioma:** Requiere declarar explícitamente `# language: es` en el encabezado del archivo `.feature` para habilitar el parser en español.
- **Manejo de caché e indexación:** Si las definiciones no se vinculan (pasos resaltados en amarillo), reabrir el archivo `.feature` fuerza el reescaneo del árbol de dependencias.
