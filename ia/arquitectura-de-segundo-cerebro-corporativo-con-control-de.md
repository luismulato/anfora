# Arquitectura de segundo cerebro corporativo con control de acceso y subagentes en Claude Code

**Fuente:** https://www.youtube.com/watch?v=djZMlD0JDUM
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Lautaro Nievas](https://www.youtube.com/@nievaslautaro) — 2.16 mil suscriptores (Soy Lautaro Nievas, fundador de Nievas Consulting.Estás en el canal donde te muestr cómo implementar…)

## Resumen

Desarrollo a medida de una base de conocimiento empresarial con Claude Code. A diferencia de bóvedas personales en Obsidian, implementa particionamiento por roles, contexto organizacional de empleados y orquestación dinámica de subagentes especializados según permisos corporativos.

## Recursos clave mencionados

- **Video analizado:** https://www.youtube.com/watch?v=djZMlD0JDUM
- **Claude Code:** Entorno de ejecución e integración base para el desarrollo del sistema empresarial.
- **Obsidian:** Referenciado como herramienta óptima para gestión de conocimiento monousuario pero insuficiente para entornos colaborativos con restricciones de acceso.

## Hallazgos

- **Limitaciones de bóvedas locales en equipos:** Las soluciones monousuario (como Obsidian) carecen de control granular de acceso por capas de seguridad departamentales (ej. ventas vs. recursos humanos).
- **Inyección de contexto estructural:** El sistema parametriza el rol, jerarquía, proyectos asignados, software autorizado y directrices estratégicas de cada colaborador para personalizar la respuesta del modelo.
- **Orquestación de subagentes especializados:** Disposición de interfaces multiagente donde el modelo principal enruta dinámicamente las consultas al subagente correspondiente según permisos y dominio técnico.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Diferencias estructurales:** Comparativa entre sistemas de conocimiento personales en Obsidian y arquitecturas corporativas a medida.
- **[00:00:11] Control de acceso y privacidad:** Necesidad de segregación de datos sensibles entre departamentos dentro de una misma organización.
- **[00:00:26] Modelado del contexto del colaborador:** Integración de jerarquía, proyectos, experiencia y accesos en el prompt de sistema.
- **[00:00:42] Interfaz y ruteo de subagentes:** Estructura del panel de agentes y orquestación automática según tarea y perfil de usuario.
