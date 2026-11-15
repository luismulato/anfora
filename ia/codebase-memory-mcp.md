# Codebase Memory MCP

**Fuente:** https://www.youtube.com/watch?v=3XxDwI_ia7I
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Andrea Eskailet](https://www.youtube.com/@andrea.eskailet) — 12.5 mil suscriptores (Hola, soy Andrea. Construyo contigo.Soy quien está detrás de Eskailet. Llevo más de 10 años montando sistemas…)

## Resumen

Servidor MCP de inteligencia de código local que indexa repositorios en un grafo de relaciones de llamadas y funciones. Permite a agentes de IA como Claude Code o Codex consultar la estructura del proyecto optimizando sustancialmente el consumo de tokens.

## Recursos clave mencionados

- Repositorio oficial en GitHub: `https://github.com/DeusData/codebase-memory-mcp`
- Comando de instalación rápida: `curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash`
- Interfaz gráfica complementaria: CBM Lens (`localhost:9749`)

## Hallazgos

- Convierte el código fuente en un grafo de conocimiento local persistente para mapear dependencias, funciones y jerarquías de llamadas entre archivos.
- Detección e integración automática con clientes de agentes como Claude Code, Codex CLI y Gemini CLI.
- Alta eficiencia de indexación: procesa bases de código masivas (como el repositorio de VS Code con ~21.000 archivos) en menos de 2 minutos.
- Reduce los pasos de navegación del modelo (ejemplo de 17 pasos a 4) al sustituir la lectura secuencial de archivos por consultas puntuales al grafo.
- Soporte para actualización incremental automática del grafo vinculada al flujo de trabajo con commits de Git.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Problema de consumo de tokens:** saturación de contexto al leer archivos secuenciales en proyectos grandes con agentes de código.
- **[00:00:05] Presentación de Codebase Memory:** función del proyecto de código abierto y analogía del mapa de navegación.
- **[00:00:17] Instalación y mapeo de dependencias:** configuración automatizada, detección de agentes y registro de grafos de llamadas.
- **[00:00:27] Rendimiento en proyectos reales:** benchmark de indexación en VS Code y reducción de 17 a 4 pasos de exploración.
- **[00:00:38] Sincronización continua:** actualización automática del grafo tras cada commit.
