# Cloudflare Code Mode y Programmatic Tool Calling en MCP

<img src="https://blog.cloudflare.com/_emdash/api/media/file/01KW44Z7T6MYHBNJ6JE5YV3MH9.png" alt="Imagen de portada del blog de Cloudflare: Code Mode, dar a los agentes una API entera en 1,000 tokens" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=vQjF6GmBrwo
**Fecha archivado:** 2026-11-16
**Tipo:** Video de YouTube
**Canal:** [XCB](https://www.youtube.com/@xcb-dev) — 668 suscriptores (Ingeniero de software. Te explico el negocio detrás del código: cómo ganan (y pierden) dinero las empresas…)

## Resumen

Cloudflare Code Mode y Programmatic Tool Calling de Anthropic optimizan el uso de MCP transformando herramientas en una API de TypeScript. El modelo genera código ejecutado en un sandbox, reduciendo el consumo de contexto y llamadas secuenciales.

## Recursos clave mencionados

- [Video de YouTube: ¿Cloudflare ha matado MCP? Qué es Code Mode y por qué ahorra tokens](https://www.youtube.com/watch?v=vQjF6GmBrwo)
- [Code Mode: give agents an entire API in 1,000 tokens (blog de Cloudflare)](https://blog.cloudflare.com/code-mode-mcp/)
- [Code Mode: the better way to use MCP (blog de Cloudflare)](https://blog.cloudflare.com/code-mode/)
- [Code execution with MCP for efficient agents (Anthropic)](https://www.anthropic.com/engineering/code-execution-with-mcp)
- Cloudflare Code Mode (API de TypeScript y sandbox de ejecución)
- Anthropic Programmatic Tool Calling
- Model Context Protocol (MCP)

## Hallazgos

- **Cuello de botella en MCP tradicional:** el descubrimiento y la invocación secuencial de herramientas (ida y vuelta al modelo por cada llamada) consumen tiempo y tokens; cargar definiciones masivas como los más de 2,500 endpoints de la API de Cloudflare supera el millón de tokens de contexto.
- **Funcionamiento de Code Mode:** convierte las herramientas disponibles en una API de TypeScript; el modelo escribe código que se ejecuta de forma aislada en un sandbox, encadenando consultas y devolviendo únicamente el resultado final en una sola petición.
- **Reducción drástica de tokens:** con Code Mode se pasa de exponer miles de herramientas individuales a solo dos herramientas base (`buscar` y `ejecutar`), reduciendo la carga inicial a aproximadamente 1,000 tokens.
- **Alineación con el entrenamiento de los LLMs:** los modelos de lenguaje poseen mayor capacidad generando código real que realizando llamadas secuenciales a herramientas aisladas, enfoque también adoptado por Anthropic bajo el nombre de *Programmatic Tool Calling*.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Problema del llamado secuencial en MCP:** explicación del consumo de tokens y latencia por cada ida y vuelta al modelo al encadenar herramientas o cargar listas extensas.
- **[00:00:25] Funcionamiento de Cloudflare Code Mode:** conversión de herramientas en una API de TypeScript ejecutada dentro de un sandbox para resolver flujos complejos en una sola petición.
- **[00:00:44] Ventaja técnica y Programmatic Tool Calling:** mayor rendimiento de los modelos al escribir código frente a *tool calling* tradicional y comparación con la implementación de Anthropic.
- **[00:00:58] Impacto en consumo de contexto:** reducción de más de 1 millón de tokens (2,500+ endpoints de Cloudflare) a unos 1,000 tokens usando únicamente dos herramientas (`buscar` y `ejecutar`).
