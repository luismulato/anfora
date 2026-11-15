# Consistencia de personajes con hojas de referencia en IA generativa

**Fuente:** https://www.youtube.com/watch?v=6x5mOQVWF-s
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Alan Daitch](https://www.youtube.com/@AlanDaitch) — 102 mil suscriptores (💡 Aprende Inteligencia Artificial SIN HUMO. Desde hace más de dos décadas, soy fanático de la tecnología…)

## Resumen

Método técnico en tres fases para fijar consistencia facial y corporal en modelos de difusión visual mediante prompts estructurados, generación de imagen ancla y ensamblado de una hoja de referencia multiángulo para transferir identidad a escenas complejas.

## Recursos clave mencionados

- Video original: [Alan Daitch - YouTube Shorts](https://www.youtube.com/watch?v=6x5mOQVWF-s)
- Plantillas de prompts:
  - **Paso 1 — Retrato base:**
    > Retrato de estudio en primer plano de [QUIÉN: género y edad aparente, ej. "una mujer de unos 25 años"]. Rasgos distintivos: [2 O 3 COSAS ÚNICAS DE LA CARA: forma de nariz, pecas, lunar, cicatriz, cejas]. Pelo: [COLOR, LARGO Y PEINADO]. Ojos: [COLOR]. Lleva puesto [PRENDA PRINCIPAL Y COLOR] y [ACCESORIO CARACTERÍSTICO, ej. "aros de argolla dorados"]. Fondo gris neutro, luz de estudio suave y pareja, mirando a cámara, expresión neutra, fotorrealista, muy nítido.
  - **Paso 2 — Hoja de referencia (adjuntar la imagen del paso 1):**
    > Generá una hoja de referencia de personaje usando exactamente la misma persona de la imagen adjunta, todo en una sola imagen con fondo blanco y luz pareja. Fila superior: la cabeza en cinco ángulos (de frente, tres cuartos, perfil, tres cuartos trasero y de espaldas). Fila del medio: cuatro expresiones faciales (neutra, sonriendo, seria, sorprendida). Fila inferior: cuerpo entero de frente y de espaldas con la misma ropa. Los rasgos de la cara, el peinado, la ropa y el accesorio tienen que ser idénticos en todos los recuadros. Fotorrealista, consistente.
  - **Paso 3 — Usar el personaje en escenas (adjuntar la hoja):**
    > Usá el personaje de la hoja de referencia adjunta, con los rasgos, el peinado y la ropa idénticos, ahora en esta escena: [DESCRIBIR LA ESCENA: lugar, acción, hora del día, tipo de plano].

## Hallazgos

- La fijación de identidad en modelos generativos requiere definir explícitamente atributos invariantes (edad, micro-rasgos, accesorios y peinado) en una primera pasada para evitar la deriva latente.
- El uso de una imagen única ("ancla") sirve de base para componer una hoja de turnarounds o vistas múltiples (frente, tres cuartos, perfil, dorsal) y expresiones.
- Al alimentar el modelo de visión con la hoja compuesta completa como entrada multimodal en las siguientes iteraciones, el sistema conserva proporciones anatómicas y vestimenta en cualquier contexto contextual o cinemático.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Problema de deriva en personajes:** Pérdida de identidad facial recurrente al cambiar tomas o generar secuencias.
- **[00:00:06] Paso 1 - Generación del ancla:** Definición de retrato con rasgos únicos específicos.
- **[00:00:20] Paso 2 - Composición de la hoja de referencia:** Matriz con ángulos de cabeza, expresiones y cuerpo entero bajo luz neutra.
- **[00:00:34] Paso 3 - Generación de escenas derivadas:** Inyección de la hoja de referencia como entrada contextual multimodal para situar al personaje en nuevos fondos y acciones.
