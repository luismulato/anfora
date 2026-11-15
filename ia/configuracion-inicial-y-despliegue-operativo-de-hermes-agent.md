# Configuración inicial y despliegue operativo de Hermes Agent

**Fuente:** https://youtube.com/shorts/18HGcYmZr7c
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Fazt](https://www.youtube.com/@FaztTech) — 693 mil suscriptores (Fazt es un canal en donde podrás encontrar una variedad de videos de programación, desarrollo Web y muchos otr)

## Resumen

Guía de inicialización técnica para Hermes Agent centrada en la vinculación de proveedores LLM, pasarelas para apps de mensajería, especialización mediante perfiles independientes, programación de tareas con cron y conexión remota vía app de escritorio.

## Recursos clave mencionados

- **Comandos de configuración CLI:**
  - `hermes model`: Asignación del proveedor de modelo LLM (ej. OpenAI / ChatGPT).
  - `hermes gateway setup`, `hermes gateway install`, `hermes gateway start`: Inicialización y persistencia del servicio gateway para plataformas de mensajería (Telegram, Slack, Discord, WhatsApp).
  - `hermes profile`: Creación de agentes especializados con memoria, comportamiento y skills independientes.
  - `hermes cron`: Configuración de tareas programadas y ejecución por intervalos o eventos temporales.
- **Herramienta cliente:** Aplicación de escritorio multiplataforma (Linux, Windows, macOS) para gestión y conexión remota a instancias desplegadas en VPS.

## Hallazgos

- **Orquestación multicanal desacoplada:** El uso de un demonio o gateway (`hermes gateway`) permite vincular tokens de bots externos (como BotFather en Telegram) para controlar al agente desde dispositivos móviles sin exponer la terminal directa.
- **Aislamiento por perfiles (`profiles`):** Cada perfil actúa como un sub-agente independiente, posibilitando la segregación de memoria contextual, herramientas habilitadas y directivas de comportamiento según el rol (investigación, soporte a desarrollo, etc.).
- **Automatización temporal recursiva:** El agente traduce peticiones en lenguaje natural directamente a trabajos de cron nativos (`hermes cron`) para emitir reportes o recordatorios periódicos.
- **Arquitectura cliente-servidor:** La interfaz de escritorio permite interactuar con agentes alojados en servidores remotos (VPS), centralizando el historial de interacciones y la administración de perfiles.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Configuración del proveedor de modelo:** Selección y enlace de proveedores LLM con `hermes model`.
- **[00:00:10] Vinculación de pasarela de mensajería (Telegram):** Configuración de tokens y arranque de servicio daemon con `hermes gateway`.
- **[00:00:31] Creación de perfiles especializados:** Segmentación de roles, memoria y habilidades mediante `hermes profile`.
- **[00:00:50] Programación de tareas temporales:** Automatización de recordatorios y reportes mediante `hermes cron`.
- **[00:01:16] Conexión remota y cliente de escritorio:** Gestión multiplataforma e integración con instancias remotas en VPS.
