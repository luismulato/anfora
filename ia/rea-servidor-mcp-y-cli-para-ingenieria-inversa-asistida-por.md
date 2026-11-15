# REA: Servidor MCP y CLI para ingeniería inversa asistida por agentes

**Fuente:** https://youtube.com/shorts/C9R3CZk8uhE
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Javi Niguez](https://www.youtube.com/@JaviNiguez) — 10.000 suscriptores (Soy Javi Niguez, Fundador de FirstAI.Nuestra misión:Ayudarte a crear, lanzar y monetizar tu primer mini SaaS…)

## Resumen

REA (*Reverse Engineer Anything*) es una herramienta CLI y servidor MCP de código abierto que conecta agentes como Claude Code, Cursor y Codex con motores de análisis técnico, permitiendo inspeccionar lógica de aplicaciones, binarios y arquitecturas para reconstruir funcionalidades.

## Recursos clave mencionados

- **Video original:** https://youtube.com/shorts/C9R3CZk8uhE
- **Repositorio oficial (morluto/rea):** https://github.com/morluto/rea
- **Sitio web oficial:** https://rea.tools/
- **Comandos de instalación y configuración:**
  ```bash
  # Asistente de configuración para agentes compatibles (Claude Code, Cursor, Codex)
  npx rea-agents setup

  # Instalación global de la CLI
  npm install --global rea-agents

```

## Hallazgos

- **Integración vía Model Context Protocol (MCP):** Permite a los entornos de codificación asistida invocar herramientas de descompilación y análisis estático de forma estructurada.

- **Soporte multientorno:** Habilita la inspección de artefactos en aplicaciones de escritorio nativas, empaquetados Electron, código JavaScript, ensamblados .NET y binarios.

- **Flujo de trabajo de tres etapas:** Estructura el proceso en descompilar/inspeccionar (decompile), comprender la lógica interna con trazabilidad de evidencia (understand) y asistir en la reconstrucción del código en el stack deseado (recreate).

- **Compatibilidad con motores de bajo nivel:** Diseñado para interoperar localmente con proveedores de análisis como Hopper, Ghidra o IDA Pro para inspección profunda.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Planteamiento sobre software y alternativas a suscripciones:** Introducción sobre el impacto de herramientas de análisis en la dependencia de suscripciones privativas.

- **[00:00:05] Presentación de REA y su conexión con editores IA:** Descripción del puente entre agentes (Claude Code, Cursor, Codex) y utilidades de ingeniería inversa.

- **[00:00:13] Proceso de inspección y reconstrucción de funciones:** Explicación del ciclo de análisis de lógica interna para recrear características en código propio.

- **[00:00:23] Tipos de aplicaciones y entornos compatibles:** Mención de soporte para binarios, aplicaciones web, ejecutables Electron y apps de escritorio.
