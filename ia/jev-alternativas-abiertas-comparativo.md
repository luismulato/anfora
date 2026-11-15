# Alternativas abiertas a Jev: comparativo de modelos de decisión

<img src="https://framerusercontent.com/images/pvRPymJ0yRv5SHXNA3yDzieCZJk.webp?width=1230&height=1008" alt="Imagen de portada del anuncio oficial de Jev en el blog de TypeSafe AI" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://llmconfigurator.com/en/blog/jev-decision-models-explained
**Fecha archivado:** 2026-11-15
**Tipo:** Artículo (comparativo armado a partir de varias fuentes)

## Resumen

Comparativo de los modelos de decisión abiertos que reemplazan a Jev (Nimble, Tev1, Kev, Strands Decider, AutoJev, Laya y otros), con tamaño, licencia, cómo correrlos y puntaje frente a Jev. Ninguno lo iguala en las decisiones difíciles. Qué es Jev: [Jev: el modelo de decisión System One](jev-system-one-modelo-de-decision-typesafe.md).

## Advertencias sobre los datos

- Las cifras salen de blogs y comparativas, no de las fichas originales de cada modelo. Las fuentes **se contradicen** en licencias y en puntajes.
- El **Decision Index** es un benchmark comunitario sin afiliación con TypeSafe. Cambió de edición (0.2.1, 0.3, 0.4.1) y los puntajes de ediciones distintas no se pueden comparar.
- Las pruebas de latencia no son comparables: Jev se midió por API y los abiertos en una GPU propia.
- Los modelos abiertos pueden usar el mismo contrato `/v1/systemone` que Jev, así que el cambio de uno a otro es, en principio, cambiar la URL base.

## Tabla comparativa

| Modelo | Quién | Tamaño | Cómo correrlo | Licencia | Rendimiento reportado |
|---|---|---|---|---|---|
| **Jev 1.13 / 1.14** (referencia) | TypeSafe AI | Cerrado | Solo API hosteada | Cerrada | Decision Index 0.2.1: 57,9. Suite de Bespoke: 76,0 %. Calibración (ECE): 0,074 |
| **Nimble 9B** | Bespoke Labs | 9,5 GB en Ollama (adaptador LoRA de 165 MiB sobre Qwen3.5-9B) | `ollama pull nimble` | Apache-2.0 según una fuente. Otras dicen "no declarada"; un repo no tenía archivo de licencia al 19-sep | Suite de Bespoke: 75,7 %. Decision Index 0.2.1: 39,6. Calibración v2: 0,024 |
| **Tev1 4B** | Together AI | 4,5 GB (LoRA sobre Qwen3.5-4B) | `ollama pull tev1` | Pesos: **sin cerrar** (la ficha dice que se está definiendo). Código MIT | Suite de Bespoke: 73,3 %. Decision Index 0.2.1: 29,2 |
| **Tev1 0.8B** | Together AI | 812 MB | `ollama pull tev1:0.8b` | Igual que Tev1 4B | Suite de Bespoke: 63,5 %. Decision Index 0.2.1: 12,9 |
| **Kev** | Jared Palmer | 0.8B, 4B, 9B y 27B (sobre Qwen3.5 y Qwen3.8) | `llama-server -hf ggml-org/Kev-4B-GGUF:Q8_0` | Apache-2.0 en los pesos. Una fuente aclara que el modelo base Qwen conserva su propia licencia | Sin cifras en las fuentes revisadas. Usa el mismo contrato `/v1/systemone` que Jev |
| **Strands Decider 2B** | AWS | 2B | `strands-decider serve` | Apache-2.0 en pesos, código y datos de entrenamiento | No reportado |
| **Winnow 12B** | EldanRing | 12,7 GB (Q8_0) | Servidor propio basado en llama.cpp | No declarada | Decision Index 0.2.1: 50,0 |
| **AutoJev 27B** | No indica | Unos 49 GiB (BF16) | `autojev-serve` | No declarada | Decision Index 0.2.1: 56,4, el mejor descargable en esa edición |
| **Rune 26B-A4B** | No indica | No indica | No indica | No declarada | Decision Index 0.2.1: 57,4 |
| **mammoth-1-27B** | Base Labs | 27B (por el nombre) | No indica | MIT | Tercero en el Decision Index 0.4.1, sin puntaje |
| **Fastino GLiDE 1.2** | Fastino | No indica | No indica | No declarada | El mejor descargable del Decision Index 0.4.1, sin puntaje |
| **Laya** | Convai Innovations | 421M | Pesos en Hugging Face | Ver abajo | Muy por debajo de Jev sin ajustar (ver abajo) |

Con nombre pero sin datos en las fuentes: Decider 2B (Mapika), Intern-Decision (InternLM) y JevK5.

### Cuidado con "OpenJev"

El nombre no apunta a un solo proyecto: hay al menos siete sin relación entre sí. Conviene siempre fijarse en el autor.

- **razorback16**, sobre DiffusionGemma 26B-A4B, Apache-2.0 (una fuente aclara que solo el código).
- **Zefan Cai (Open-Jev)**, sobre Qwen3.5 en 2B, 9B y 27B; licencia MIT o Apache-2.0 según la fuente.
- **Kotoba Labs (open-jev-deberta-v3-large)**, 434M de parámetros, Apache-2.0.
- **TheoLeeCJ**, antes OpenJev, ahora se llama SemIf.

## Laya frente a Jev

Laya, de Convai Innovations, tiene 421M de parámetros y es de pesos abiertos. En los comparativos queda muy por debajo de Jev:

| Comparativo | Jev | Laya |
|---|---|---|
| Decision Index (discusión en Hugging Face) | 59,5 | 16,4 |
| Decision Index (eesel.ai) | 57,9 | 6,0 |
| Decision Index 0.4.1, sin ajustar | n/d | 9,2 completo / 6,2 público |
| JevBench v1.3.0 (534 decisiones tipadas) | 74,4, puesto 1 | 54,4, puesto 33 |
| JevBench v1.7.46 | 63,6 | 1,8, puesto 174 de 182 abiertos |
| Banking77 (77 etiquetas) | 0,870 | 0,425 |

Matices:
- Esos puntajes son de Laya **sin ajustar**. En un benchmark de 2.000 decisiones, su checkpoint afinado sacó 0,766 contra 0,727 de Jev, pero los checkpoints base sacaron 0,362.
- Con muchas etiquetas lo limita el presupuesto de tokens por etiqueta.
- Es mucho más rápido: su ficha dice que va de 6 a 8 veces más rápido que los 236–276 ms medidos para Jev.

## Calibración: el dato que más se pasa por alto

La calibración dice si "80 % de confianza" acierta de verdad el 80 % de las veces. Entre los abiertos varía muchísimo: el error esperado de calibración va de 0,014 a más de 0,5. Jev tiene 0,074 y Nimble v2 0,024. Si el código decide con un umbral de confianza (actuar solo si pasa de 0,8, por ejemplo), un modelo mal calibrado rompe esa regla aunque acierte seguido.

## Prueba propia (2026-11-14)

Aún no se probó ningún modelo de decisión en local. Sí se midió un LLM chico común, qwen3:8b con Ollama en una Mac con Apple Silicon y 24 GB, sobre tareas de gestión:
- **Bien:** extraer una tarea de un texto a JSON con esquema, y llamar herramientas con los argumentos correctos.
- **Mal:** calculó mal "el martes que viene" (puso un lunes) y ordenó mal tareas por vencimiento.

Son justo las dos debilidades que TypeSafe documenta para Jev (fechas y decisiones por comparación). Con cualquiera de estos modelos, las fechas y los cálculos van en código.

## Conclusiones

1. **Jev sigue adelante.** Los abiertos se acercan en tareas simples (Nimble casi empata en la suite de Bespoke: 75,7 % contra 76,0 %), pero quedan lejos en las decisiones difíciles (Decision Index: 39,6 contra 57,9). Los dos benchmarks no son comparables entre sí.
2. **Para correr en local en una Mac con 24 GB:**
   - **Nimble** es la primera opción: es la que mejor puntúa entre las que caben cómodas y se baja directo con Ollama.
   - **Kev 4B** si importa la licencia: Apache-2.0 y mismo contrato que Jev, pero exige llama.cpp.
   - **Tev1 0.8B** solo para una prueba rápida: pesa 812 MB y su puntaje es bajo.
   - **AutoJev 27B** necesita unos 49 GiB: no entra en esa Mac.
3. **Para un producto, la licencia decide.** Con licencia clara: Kev (Apache-2.0, salvo la del modelo base), Strands Decider (Apache-2.0), mammoth (MIT) y Nimble (Apache-2.0 según una fuente). Tev1 está sin cerrar: hay que revisarla antes de ponerla en un producto. Para uso personal, no pesa.
4. **Laya sin ajustar no sirve para decidir.** Solo tendría sentido para clasificar muchos textos muy rápido, y después de afinarlo.
5. **Antes de confiar en un umbral de confianza,** medir la calibración del modelo elegido con datos propios.
6. **Fechas, cuentas y conteos van en código,** sea cual sea el modelo.
7. **Pendiente:** bajar Nimble y Tev1 0.8B y medirlos contra las mismas pruebas de prioridad donde falló qwen3:8b.

## Recursos clave mencionados

- [Qué es Jev (nota hermana en esta ánfora)](jev-system-one-modelo-de-decision-typesafe.md)
- [Decision models explicados: Jev, Nimble y Ollama /v1/systemone (LLM Configurator)](https://llmconfigurator.com/en/blog/jev-decision-models-explained)
- [Guía de modelos de decisión (LLM Configurator)](https://llmconfigurator.com/en/guides/decision-models)
- [Ollama 0.35: modelos de decisión estilo Jev (i10X News)](https://i10x.ai/news/ollama-035-jev-decision-models)
- [Jev Alternatives: Decision APIs and Open Models (Dataroot Labs)](https://datarootlabs.com/blog/jev-alternatives)
- [Best Open Source Jev Alternatives (Pinggy)](https://pinggy.io/blog/best_open_source_jev_alternatives_self_hosted_decision_models/)
- [10 Best Jev Alternatives (Respan)](https://www.respan.ai/articles/jev-alternatives)
- [20 Jev Alternatives (MarkTechPost)](https://www.marktechpost.com/2026/10/17/20-jev-alternatives-the-decision-models-taking-on-typesafe-in-2026/)
- [Open-source Jev alternatives: every one compared](https://systemonemodels.tech/jev-alternatives)
- [Laya vs Jev vs Parallel](https://parallel.ai/articles/laya-vs-jev-vs-parallel)
- [Laya: discusión de benchmarks en Hugging Face](https://huggingface.co/convaiinnovations/laya/discussions/10)
- [Jev vs Laya: guía de Hugging Face](https://huggingface.co/blog/sora-2/jev-vs-laya-hosted-api-or-open-weights-2026-guide)
- [Laya: specs y límites (systemonemodels.org)](https://systemonemodels.org/models/laya/)
- [Decision models: Jev vs Clef vs Strands Decider (eesel.ai)](https://www.eesel.ai/blog/decision-models)
