# OpenCode CLI con Modelos Gratuitos y DeepSeek

**Fuente:** https://youtube.com/shorts/zl8T7ut6gqw?si=b8woEFZaQexihIon
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [IA Mayúscula](https://www.youtube.com/@iamayuscula) — 3.57 mil suscriptores (La mejor comunidad de IA en español.)

## Resumen

Configuración del entorno open-source OpenCode CLI desde aplicaciones de escritorio de IA para orquestar subagentes autónomos mediante modelos gratuitos como DeepSeek, delegando tareas pesadas de investigación y recopilación multimedia local.

## Recursos clave mencionados

- **Video analizado:** [ChatGPT GRATIS ASÍ! (YouTube Shorts)](https://youtube.com/shorts/zl8T7ut6gqw?si=b8woEFZaQexihIon)
- **Repositorio oficial de OpenCode:** [anomalyco/opencode (GitHub)](https://github.com/anomalyco/opencode)
- **Documentación oficial:** [opencode.ai](https://opencode.ai/)
- **Comando de inicialización e inspección de modelos:**
  ```bash
  opencode
  /models

```

## Hallazgos

- **Integración con clientes de escritorio:** Permite invocar la CLI de OpenCode directamente desde entornos de workspace en clientes de escritorio (ChatGPT Desktop, Claude Desktop) o la terminal de Windows PowerShell.

- **Acceso a catálogo de modelos gratuitos:** Mediante el comando interno /models, la herramienta expone proveedores y modelos de inferencia gratuita o tiers de bajo coste, destacando implementaciones como DeepSeek V4.1.

- **Patrón de orquestación Supervisor-Agente:** El LLM principal (Claude o ChatGPT) actúa como nodo central de supervisión, delegando la ejecución técnica paralela (redacción, crawling o scraping de recursos multimedia a disco local) a subagentes de OpenCode.

- **Persistencia en sistema de archivos local:** Los subagentes configurados operan con acceso al almacenamiento local del sistema para descargar y organizar assets y clips en directorios específicos de trabajo.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Configuración de entornos de trabajo:** Selección del modo Workspace en aplicaciones de escritorio de ChatGPT y Claude.

- **[00:00:23] Ejecución de OpenCode:** Instalación e inicio de la terminal CLI a través de PowerShell.

- **[00:00:36] Selección de modelos gratuitos:** Uso de /models y asignación de DeepSeek para ejecución de tareas.

- **[00:00:50] Delegación y paralelización de agentes:** Creación de dos agentes coordinados (redactor de guiones y recolector de material multimedia en carpetas locales).
