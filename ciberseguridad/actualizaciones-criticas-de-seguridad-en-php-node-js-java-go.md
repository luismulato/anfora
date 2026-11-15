# Actualizaciones críticas de seguridad en PHP, Node.js, Java, Go y Python

**Fuente:** https://youtube.com/shorts/f_K7k9oE6ww?si=twGl_4s01Zcg097h
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Andrea Eskailet](https://www.youtube.com/@andrea.eskailet) — 12.5 mil suscriptores (Hola, soy Andrea. Construyo contigo.Soy quien está detrás de Eskailet. Llevo más de 10 años montando sistemas…)

## Resumen

Publicación de parches de seguridad críticos para PHP, Node.js, Java, Go y Python. Las actualizaciones mitigan fallos de ejecución remota de código sin autenticación (RCE) y la revocación de confianza ante claves criptográficas de una autoridad certificadora comprometida.

## Recursos clave mencionados

- **Video analizado:** [Esta semana han salido parches urgentes en cinco de las tecnologías con las que se hacen muchísimas… - Andrea Eskailet](https://youtube.com/shorts/f_K7k9oE6ww?si=twGl_4s01Zcg097h)
- **Organismo de referencia:** Cybersecurity and Infrastructure Security Agency (CISA)
- **Tecnologías afectadas:** PHP, Node.js (líneas 22, 24, 26), Oracle Java, Go, Python

## Hallazgos

- **Vulnerabilidades críticas en PHP (CVSS 9.2):** Dos fallos de ejecución remota de código sin necesidad de credenciales ni autenticación previa, con exploits activos en circulación. La recomendación oficial incluye aislar o desconectar servidores si la actualización inmediata no es viable.
- **Parches en runtime Node.js:** Corrección de diez vulnerabilidades (cuatro de severidad alta/crítica) que permitían ejecución remota de código; requiere migrar a las últimas subversiones corregidas de las ramas v22, v24 y v26.
- **Oracle Critical Patch Update para Java:** Liberación de 55 parches, de los cuales 49 corresponden a vectores de ataque explotables remotamente sin privilegios.
- **Revocación de autoridad de certificación (CVSS 9.1):** Compromiso de claves raíz de una entidad emisora de certificados TLS/SSL (riesgo de ataques Man-in-the-Middle). Los entornos de ejecución de Java, Node.js, Go y Python retiraron los certificados de confianza asociados, exigiendo la actualización inmediata de runtimes.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Alerta de seguridad web:** Introducción sobre parches simultáneos en tecnologías de infraestructura backend.
- **[00:00:06] Vulnerabilidades en PHP:** Análisis del fallo de RCE sin autenticación con calificación 9.2 y advertencia de CISA.
- **[00:00:34] Parches en Node.js:** Corrección de fallos de ejecución de código externo en versiones 22, 24 y 26.
- **[00:00:40] Actualizaciones en Java:** CPU de Oracle con 55 parches y alerta crítica de 9.1.
- **[00:00:56] Claves TLS comprometidas:** Retiro de confianza a nivel de certificados raíz en Java, Go, Python y Node.js.
