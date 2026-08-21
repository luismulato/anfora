# Guía de Configuración de Behat y BDD para Plugins de WordPress en VS Code

**Fuente:** Documentación y notas técnicas de integración Behat/WordPress
**Fecha archivado:** 2026-08-21
**Tipo:** Guía Técnica / Artículo

## Resumen

Guía de integración de desarrollo guiado por comportamiento (BDD) en plugins de WordPress mediante Behat, Mink y Gherkin. Detalla configuración de extensiones en VS Code, instalación con Composer, parametrización de entornos en `behat.yml` y definición de contextos personalizados en PHP.

## Recursos clave mencionados

- **Documentación oficial de Behat:** https://docs.behat.org/
- **Integración de pruebas BDD con Behat en WordPress (WP-CLI):** https://make.wordpress.org/cli/handbook/references/behat-steps/
- **Guía de implementación y conceptos BDD en español:** https://sperea.es/blog/bdd-behavior-driven-development-guia-implementacion
- **Comando de instalación (Composer):**
  ```bash
  composer require --dev behat/behat behat/mink-extension behat/mink-goutte-driver
  ```
