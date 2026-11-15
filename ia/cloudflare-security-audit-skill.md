# Cloudflare Security Audit Skill: Detección automatizada de vulnerabilidades

<img src="https://opengraph.githubassets.com/2d25d6c73f76c05ae984ebddb8139f652075de52b5c18ef0b9964b2c34ba3229/cloudflare/security-audit-skill" alt="Repositorio cloudflare/security-audit-skill: skill para agentes de codificación con auditorías de seguridad multifase" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=eYMDqdTsuNs
**Fecha archivado:** 2026-11-10
**Tipo:** Video de YouTube
**Canal:** [midudev](https://www.youtube.com/@midudev)

## Resumen

Herramienta de código abierto desarrollada por Cloudflare estructurada como skill para agentes de codificación. Analiza repositorios de código, detecta vulnerabilidades, ejecuta verificación automatizada de hallazgos y genera reportes técnicos estructurados mediante modelos de lenguaje.

## Recursos clave mencionados

- Enlace analizado: [YouTube Video](https://www.youtube.com/watch?v=eYMDqdTsuNs)
- Repositorio oficial: [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)
- Comando de instalación: `npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit-skill`

## Hallazgos

- Arquitectura de auditoría en múltiples fases que conecta agentes de codificación (como Claude Code u otros LLMs) para inspección estática y dinámica de código.
- Automatización del pipeline de seguridad: escaneo del repositorio, envío de hallazgos a un agente secundario, verificación cruzada de falsos positivos y redacción de reporte estructurado.
- Invocación directa mediante prompts en lenguaje natural (Audita la seguridad de este proyecto) sobre el entorno de desarrollo asistido.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de la herramienta:** Utilidad open source de Cloudflare para análisis y detección de fallos de seguridad en código.
- **[00:00:10] Pipeline de verificación:** Transferencia de hallazgos a un agente de IA, validación de datos y redacción del informe técnico final.
- **[00:00:16] Instalación e invocación:** Adición de la skill vía terminal e instrucción de ejecución en agentes de código.
