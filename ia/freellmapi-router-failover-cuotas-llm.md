# FreeLLMAPI: Router de failover para cuotas gratuitas de LLMs

<img src="https://freellmapi.co/assets/og/home.png" alt="FreeLLMAPI — Every free model. Live. 343 models, 27 providers, 4 billion free tokens per month" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=td9EYn9J_go
**Fecha archivado:** 2026-10-22
**Tipo:** Video de YouTube
**Canal:** [Sebastian Hardy | AI Marketing](https://www.youtube.com/@SebastianHardyAI) — 17 mil suscriptores (emprendedor y educador en IA, cofundador de MYA)

## Resumen

Repositorio open source diseñado como proxy y enrutador unificado de APIs para modelos de lenguaje. Agrega las capas gratuitas de múltiples proveedores (Gemini, Groq, Mistral, Llama, OpenAI, Anthropic), balanceando peticiones y ejecutando failover automático al alcanzar límites de tasa.

## Recursos clave mencionados

- **Video analizado:** [YouTube Short de Sebastian Hardy](https://www.youtube.com/watch?v=td9EYn9J_go)
- **Proyecto base referenciado:** [FreeLLMAPI en GitHub](https://freellmapi.co)
- **Instalación estándar (Docker):**

curl -fsSL https://freellmapi.co/install.sh | bash

## Hallazgos

- **Agregación de cuotas gratuitas:** Consolida los límites sin costo que ofrecen diversas plataformas (Google AI Studio, Mistral, Groq, Meta Llama, entre otros), acumulando un volumen combinado estimado de hasta 800M de tokens mensuales.
- **Enrutamiento inteligente y failover dinámico:** Redirige cada solicitud al proveedor que disponga de capacidad activa. Ante un código de error de rate limit (429 Too Many Requests), transfiere automáticamente el flujo de trabajo al siguiente modelo configurado en la cadena de fallback sin interrumpir la ejecución.
- **Punto de acceso compatible:** Expone una interfaz unificada compatible con el formato OpenAI API, permitiendo integrarlo directamente en clientes existentes, agentes de código y entornos de desarrollo.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de capacidad agregada:** Introducción al concepto de unificar los límites gratuitos que otorgan múltiples plataformas de IA en una única cuota global.
- **[00:00:13] Mecánica de enrutamiento:** Explicación del sistema de balanceo que asigna la solicitud entrante al servicio que posea margen disponible.
- **[00:00:20] Gestión de rate limits (Failover):** Demostración del traspaso automático de carga entre modelos (Gemini, Mistral, Llama, Claude, GPT) cuando un endpoint reporta saturación.
- **[00:00:34] Integración e impacto de uso:** Configuración única tipo proxy para abstraer límites individuales de API en proyectos continuos.
