# pr-reviewer: Revisor automatizado de código con IA para GitHub Actions

**Fuente:** https://github.com/jggomez/expert-ai-developer-skills/tree/main/tools/pr-reviewer
**Fecha archivado:** 2026-11-15
**Tipo:** Artículo / Publicación técnica

## Resumen

Herramienta gratuita y open source que automatiza la revisión de código en GitHub Actions usando Gemini o Claude. Analiza pull requests identificando fallos de seguridad, rendimiento y diseño en líneas modificadas, aportando soluciones directas con soporte para tokens personales.

## Recursos clave mencionados

- Repositorio del proyecto: https://github.com/jggomez/expert-ai-developer-skills/tree/main/tools/pr-reviewer
- SDKs utilizados: Claude ADK, Antigravity ADK

## Hallazgos

- **Ejecución serverless en CI/CD:** Opera directamente integrado mediante flujos de trabajo de GitHub Actions.
- **Feedback contextualizado:** Deja comentarios automáticos e inserta propuestas de solución directamente sobre las líneas modificadas de cada pull request.
- **Auditoría multifactorial:** Evalúa vectores críticos de seguridad, optimización de rendimiento y arquitectura de diseño de software.
- **Flexibilidad de modelos y costos:** Compatible con Gemini y Claude; permite la autenticación mediante tokens de planes personales.
- **Baja fricción de despliegue:** Sistema modular, configurable y diseñado para instalarse en tres pasos.
