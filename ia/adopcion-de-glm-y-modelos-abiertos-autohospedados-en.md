# Adopción de GLM y modelos abiertos autohospedados en ingeniería de software en Revolut

**Fuente:** https://www.youtube.com/watch?v=Wh_qpPvtiJA
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube (Short)
**Canal:** [Alan Daitch](https://www.youtube.com/@AlanDaitch) — 102 mil suscriptores (💡 Aprende Inteligencia Artificial SIN HUMO. Desde hace más de dos décadas, soy fanático de la tecnología…)

## Resumen

Revolut migró a 2000 ingenieros de Claude Code hacia el modelo abierto GLM autohospedado en 56 GPUs locales. Al eliminar el racionamiento de tokens por costo, redujo los tiempos de entrega un 70% y abarató la factura diez veces.

## Recursos clave mencionados

- **Video original:** https://www.youtube.com/watch?v=Wh_qpPvtiJA
- **GLM (General Language Model):** Familia de modelos de lenguaje abiertos desarrollados por Zhipu AI / Tsinghua University.
- **Claude Code:** Herramienta de asistencia en terminal y desarrollo impulsada por Anthropic.

## Hallazgos

- **Efecto taxímetro en APIs de pago:** La asignación de presupuestos limitados de tokens por desarrollador generaba un sesgo de escasez; los ingenieros restringían el uso de modelos avanzados (Claude) solo para tareas críticas o fin de ciclo.
- **Ventaja operativa del despliegue self-hosted:** Al desplegar GLM sobre una infraestructura fija de 56 GPUs, el costo marginal por inferencia pasó a ser cero, habilitando consultas continuas e ilimitadas.
- **Optimización de tareas periféricas:** La reducción del 70% en el tiempo de ciclo no provino únicamente de escribir código más rápido, sino de aplicar IA sin restricciones a la redacción de correos, gestión de tickets y documentación técnica.
- **Riesgos y mitigación:** El acceso irrestricto incrementa el riesgo de código mediocre y sobrecarga computacional en GPU; Revolut impone revisión humana obligatoria (human-in-the-loop) para validar cualquier salida generada.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Caso Revolut y Claude Code:** Limitaciones operativas de usar modelos comerciales bajo presupuestos cerrados por empleado.
- **[00:00:16] Migración a GLM e infraestructura local:** Despliegue de modelos abiertos sobre cluster de 56 GPUs para 2000 ingenieros.
- **[00:00:32] El efecto taxímetro y reducción del 70%:** Impacto psicológico del costo por token frente a la automatización irrestricta de tareas accesorias.
- **[00:01:02] Riesgos operativos y control humano:** Mitigación de código de baja calidad mediante supervisión humana obligatoria.
