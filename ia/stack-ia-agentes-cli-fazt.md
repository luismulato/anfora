# Stack de desarrollo con agentes de IA y herramientas CLI

*(Imagen de portada omitida: no existe imagen oficial de prensa o blog disponible para este recurso específico).*

**Fuente:** https://youtu.be/tR632IiOxaY?si=j9TY4X3Ta3HkhTor
**Fecha archivado:** 2026-10-26
**Tipo:** Video de YouTube
**Canal:** [Fazt](https://www.youtube.com/@FaztTech) — 691 mil suscriptores (videos de programación, desarrollo web y temas relacionados con la informática)

## Resumen

Arquitectura de trabajo integral basada en orquestadores de terminal, agentes CLI (Claude Code, Codex, OpenCode, Plandex/Pen), servidores MCP (Model Context Protocol) y herramientas de línea de comandos para automatizar desarrollo, pruebas de navegador, diagramación e infraestructura cloud.

## Recursos clave mencionados

- [Video analizado: Mi stack real de IA para programar](https://youtu.be/tR632IiOxaY?si=j9TY4X3Ta3HkhTor)
- Herder (Orquestador de agentes y sesiones CLI persistentes con soporte detached)
- Claude Code, Codex CLI, OpenCode, Plandex / `p.def`
- CodeRabbit (Revisión de pull requests, triage y seguridad de código generado)
- Hermes Agent + Himalaya CLI (gestión de correo y ejecución por consola)
- Playwright CLI + repositorio de prompts en `skills.sh`
- Servidores MCP: Notion MCP, Linear, Excalidraw MCP
- Hickfield / Fal CLI (generación y rediseño de UI con imágenes)
- CLIs de nube y control: GitHub CLI (`gh`), Railway CLI, AWS CLI, Azure CLI (`az`)
- Emulador de terminal: WezTerm (compilación *nightly*)

## Hallazgos

- **Gestión del cambio agéntico (*Agentic Change Management*):** El cuello de botella técnico ya no reside en la generación de código sintético sino en la revisión, priorización contextual y mitigación de vulnerabilidades de diffs masivos mediante herramientas especializadas como CodeRabbit.
- **Orquestación de sesiones desacopladas:** Uso de interfaces como Herder para mantener múltiples agentes CLI corriendo en espacios de trabajo independientes, con persistencia en segundo plano (modo *detach*) y comunicación inter-agente por consola.
- **Ecosistema modular mediante MCP y Skills:** Desacoplamiento de capacidades complejas delegando acciones específicas del agente a servidores MCP (gestión de tickets en Notion/Linear, diagramas en Excalidraw) o ejecutables de consola (Playwright CLI para validación E2E en navegadores).
- **Consumo intensivo de recursos locales:** La ejecución en paralelo de múltiples sesiones de agentes, navegadores automatizados e inspectores de código incrementa significativamente la demanda de memoria RAM y CPU en el entorno local.
- **Sincronización multiplataforma del entorno:** Adopción de emuladores de terminal altamente configurables como WezTerm para mantener una configuración unificada y portable entre sistemas operativos.

## Temas abordados en el video (orden cronológico)

- **[00:00:39] Agentic Change Management y CodeRabbit:** Desafíos de auditar PRs masivos generados por IA y automatización del análisis de diffs.
- **[00:02:44] Orquestación con Herder:** Gestión de múltiples agentes CLI, persistencia de sesiones detached y navegación por pestañas/espacios.
- **[00:06:14] Comparativa de harnesses y agentes:** Flujos de trabajo con Claude Code, Codex, OpenCode (para modelos locales/open weights) y agentes mínimos.
- **[00:10:25] Asistente Hermes y herramientas de consola:** Integración de agentes para operaciones de sistema y lectura de correos con Himalaya CLI.
- **[00:12:04] Automatización E2E con Playwright CLI:** Uso de skills de Markdown y pruebas de interfaz de usuario sin intervención manual.
- **[00:13:29] Planificación y seguimiento con MCP (Notion y Linear):** Creación y mantenimiento de tableros y especificaciones técnicas desde el agente.
- **[00:17:43] Generación de assets visuales:** Integración de Hickfield y skills de diseño web para prototipado rápido de interfaces.
- **[00:19:42] Diagramación asistida con Excalidraw MCP:** Generación iterativa de diagramas de secuencia y flujos de arquitectura desde prompts.
- **[00:21:34] Despliegue y control de infraestructura:** Control de repositorios con GitHub CLI y despliegue automatizado con Railway, AWS y Azure CLI.
- **[00:24:29] Configuración del entorno de terminal con WezTerm:** Rendimiento, portabilidad multiplataforma y uso de versiones *nightly*.
