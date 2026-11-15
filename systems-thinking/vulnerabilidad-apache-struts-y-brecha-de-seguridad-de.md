# Vulnerabilidad Apache Struts y Brecha de Seguridad de Equifax (2017)

**Fuente:** https://youtube.com/shorts/A1JT23Pd6rQ
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis de la brecha de Equifax (2017), donde una vulnerabilidad RCE en Jakarta Multipart de Apache Struts 2 y fallas organizacionales de gestión de parches expusieron datos de 147 millones de personas.

## Recursos clave mencionados

- Video original: https://youtube.com/shorts/A1JT23Pd6rQ
- Canal oficial: Expediente Dev
- Vulnerabilidad de referencia: CVE-2017-5638 (Apache Struts 2 RCE)
- Herramientas de remediación y escaneo: OWASP Dependency-Check, Dependabot, ModSecurity (WAF), HashiCorp Vault

## Hallazgos

- **Insight clave:** «Un parche sin dueño no es un pendiente, es una puerta abierta.»
- **Mecánica del exploit (CVE-2017-5638):** El parser `Jakarta Multipart` de Apache Struts 2 colocaba el header `Content-Type` malformado dentro de un mensaje de error, el cual era evaluado por el motor OGNL, permitiendo instanciar un `ProcessBuilder` de Java y lograr ejecución remota de código (RCE) sin autenticación.
- **Punto ciego organizacional y de escaneo:** Pese a la alerta de seguridad y disponibilidad del parche (Struts 2.3.32), el responsable de sistemas del portal de disputas no estaba en la lista de distribución interna y los escáneres automáticos no identificaron la instancia vulnerable.
- **Persistencia y movimiento lateral:** Los atacantes instalaron webshells, descubrieron credenciales de base de datos en texto plano y ejecutaron cerca de 9.000 consultas entre múltiples bases sin segmentación de red.
- **Falla en inspección de tráfico por certificados vencidos:** La exfiltración gradual vía HTTPS no se detectó durante 76 días debido a que los dispositivos de inspección tenían certificados SSL expirados.
- **Estrategia de defensa en cuatro capas:**
  1. *Dependencias:* SBOM detallado, escaneo continuo y SLAs estrictos (máx. 48 h para criticidad 10).
  2. *Borde:* Parches virtuales en WAF (ej. NGINX + ModSecurity) para bloquear payloads OGNL inmediatamente.
  3. *Código:* Nunca evaluar inputs de usuario (headers incluidos) en motores de expresiones (OGNL, SpEL, eval).
  4. *Red y secretos:* Segmentación estricta entre portales públicos y bases de datos, almacenamiento de secretos en bóvedas (ej. Vault) y monitoreo automatizado del ciclo de vida de certificados.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Inyección en Content-Type:** Manipulación del encabezado HTTP y ejecución en el servidor de disputas de Equifax.
- **[00:00:22] Causa raíz técnica en Apache Struts 2:** Manejo de excepciones en Jakarta Multipart y evaluación indebida en OGNL.
- **[00:00:47] Descoordinación de parches y escaneo:** Publicación del parche, omisión del responsable en la lista y persistencia del fallo.
- **[00:01:01] Intrusión, escalada y exfiltración:** Instalación de webshells, credenciales en texto plano y certificado SSL vencido por meses.
- **[00:01:34] Estrategia de defensa en profundidad:** Mitigación en dependencias (SBOM), borde (WAF), código seguro y segmentación de red.
