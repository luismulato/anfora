# Vulnerabilidades críticas en PHP, GitLab, paquetes de IA y autoridades de certificación

**Fuente:** https://youtube.com/shorts/IdTD8zBwVl4?si=KrmZZ0pnPHhJ1Dl8
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Fazt](https://www.youtube.com/@FaztTech) — 693 mil suscriptores (Fazt es un canal en donde podrás encontrar una variedad de videos de programación, desarrollo Web y muchos…)

## Resumen

Análisis de una ola simultánea de incidentes de seguridad que comprometió API keys de IA, introdujo malware en dependencias de Python, expuso servidores mediante fallos críticos en PHP y GitLab, y revocó certificados SSL por fallas criptográficas.

## Recursos clave mencionados

- **Video analizado:** [Esta semana casi revienta internet - Fazt](https://youtube.com/shorts/IdTD8zBwVl4?si=KrmZZ0pnPHhJ1Dl8)
- **Servicios y plataformas afectadas:** OpenCode, Railway, GitLab.
- **Librería comprometida:** LiteLLM (PyPI).
- **Entidad emisora de certificados revocada:** eMudhra.
- **Runtimes con parches urgentes:** PHP, Node.js, Java.

## Hallazgos

- **Exfiltración de credenciales para destilación:** Ataque contra OpenCode expuso API keys de Google, OpenAI y Anthropic, utilizadas por actores maliciosos para consumo masivo de inferencia y extracción de conocimiento (destilación de modelos).
- **Envenenamiento de cadena de suministro en Python:** Inyección de malware en versiones no oficiales/comprometidas de la biblioteca LiteLLM para sustraer credenciales y variables de entorno durante la instalación.
- **Ejecución remota de código en PHP:** Parches para mitigar vulnerabilidades heredadas que permitían RCE no autenticado, provocando desconexiones preventivas en servidores gubernamentales y alertas directas de agencias de seguridad.
- **Fallo de máxima severidad en GitLab (CVSS 10.0):** Vulnerabilidad crítica de autenticación que habilitaba el control total de instancias de GitLab sin necesidad de contar con credenciales válidas.
- **Intrusión en Railway y rotación obligatoria:** Brecha en la infraestructura de Railway forzó la pausa de despliegues y exigió la rotación inmediata de secretos y variables de entorno expuestas.
- **Revocación de certificados TLS de eMudhra:** Detección de claves criptográficas triviales en certificados raíz e intermedios (incluyendo claves débiles predecibles), forzando a navegadores y sistemas operativos a desconfiar y bloquear a la entidad emisora.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Filtración de API keys en OpenCode:** Exposición de claves de OpenAI, Google y Anthropic para destilación no autorizada de modelos.
- **[00:00:26] Parches críticos de RCE en PHP:** Vulnerabilidades históricas que permiten ejecución de código remoto y parches de emergencia en Node.js y Java.
- **[00:00:49] Ataque a la cadena de suministro en LiteLLM:** Distribución de paquete malicioso en el ecosistema Python diseñado para robar credenciales.
- **[00:01:04] Vulnerabilidad 10/10 en GitLab:** Fallo crítico que permite toma de control completa del servidor sin cuenta previa.
- **[00:01:19] Compromiso de secretos en Railway:** Acceso indebido a variables de entorno cifradas y suspensión temporal de despliegues.
- **[00:01:30] Revocación masiva de certificados eMudhra:** Detección de claves criptográficas vulnerables y bloqueo en navegadores web.
