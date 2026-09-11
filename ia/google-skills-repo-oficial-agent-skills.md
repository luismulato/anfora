# google/skills: Repositorio oficial de Agent Skills de Google

<img src="https://storage.googleapis.com/gweb-cloudblog-publish/images/Agent_Skills_Blog_-_Hero.max-2500x2500.png" alt="Ilustración del anuncio de Google Cloud: un agente (robot) conectado por una flecha ascendente a github.com/google/skills y al logo de Google Cloud" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://youtube.com/shorts/qDzEONxT2F4?si=Sp85xEq0zVX4EElK
**Fecha archivado:** 2026-09-08
**Tipo:** Video de YouTube
**Canal:** [Lautaro Nievas](https://www.youtube.com/@nievaslautaro) — 1.25 K suscriptores (fundador de Nievas Consulting; canal sobre implementar IA para conseguir más clientes)

## Resumen

Repositorio abierto de Google (`google/skills`) que provee especificaciones operativas (`SKILL.md`) para agentes de código y LLMs como Claude Code. Permite auditar campañas publicitarias, consultar telemetría analítica y automatizar despliegues en Google Cloud de forma determinista.

## Recursos clave mencionados

- Video analizado: https://youtube.com/shorts/qDzEONxT2F4?si=Sp85xEq0zVX4EElK
- Repositorio oficial de skills: https://github.com/google/skills
- Repositorio de herramientas CLI: https://github.com/google/agents-cli
- Comandos de instalación:
  - `npx skills add google/skills`
  - `uvx google-agents-cli setup`

## Hallazgos

- **Estandarización de contexto operativo:** Google adoptó el estándar abierto de *Agent Skills* (basado en paquetes de carpetas con archivos `SKILL.md`), transfiriendo directrices validadas directamente a entornos de ejecución como Claude Code, Cursor o Gemini Enterprise.
- **Arquitectura de divulgación progresiva (Progressive Disclosure):** El agente solo indexa el frontmatter YAML de las skills al inicio; al detectar una intención vinculada, inyecta dinámicamente las instrucciones completas y scripts de soporte en la ventana de contexto.
- **Diagnóstico y marketing digital:** Integra rutinas para analizar presupuestos, anomalías de conversión en Google Ads y extracción automatizada de métricas en Google Analytics sin requerir dashboards manuales.
- **Automatización de infraestructura:** Incorpora flujos predefinidos para la compilación, configuración de contenedores y despliegue continuo en Google Cloud Run y Google Kubernetes Engine (GKE).

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Publicación de repositorio:** Anuncio del repositorio oficial de skills para dotar a agentes de soporte nativo sobre tecnologías de Google.
- **[00:00:09] Diagnóstico en Ads y Analytics:** Aplicación práctica de paquetes de skills para auditoría de pauta publicitaria e interpretación de datos analíticos.
- **[00:00:28] Despliegue en Cloud Run:** Empleo de skills de Google Cloud para empaquetar, configurar y desplegar aplicaciones directo a producción.
- **[00:00:36] Especificaciones oficiales frente a tutoriales:** Relevancia de utilizar conocimiento procedimental mantenido por el proveedor para evitar alucinaciones operativas.
