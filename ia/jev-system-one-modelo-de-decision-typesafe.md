# Jev: el modelo de decisión "System One" de TypeSafe AI

<img src="https://framerusercontent.com/images/pvRPymJ0yRv5SHXNA3yDzieCZJk.webp?width=1230&height=1008" alt="Imagen de portada del anuncio oficial de Jev en el blog de TypeSafe AI" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://typesafe.ai/blog/introducing-system-one-models-and-jev
**Fecha archivado:** 2026-11-15
**Tipo:** Artículo

## Resumen

Jev es un modelo de TypeSafe AI que no genera texto: recibe un estado (texto o JSON) y preguntas tipadas, y devuelve decisiones con probabilidades en una sola pasada. Es de pesos cerrados, se usa por API y está en acceso anticipado. En menos de un mes OpenAI, Microsoft, Cloudflare y otros lanzaron modelos rivales, y TypeSafe levantó una Serie A de USD 870 millones.

## Qué es

- **Quién lo hace:** TypeSafe AI, con Diogo Almeida como CEO. Lo anunció el 15 de septiembre de 2026, tras dos años en sigilo, y se reportó una ronda semilla de USD 40 millones liderada por DCVC. El 9 de octubre, 24 días después del lanzamiento, anunció una Serie A de USD 870 millones liderada por a16z (con Sequoia y DCVC) a una valuación de USD 7.500 millones.
- **Qué clase de modelo es:** el primero de lo que la empresa llama modelos "System One": modelos pensados para tomar decisiones rápidas y estructuradas que el software pueda usar directo, en vez de conversar. TypeSafe lo describe como una llamada a función de inteligencia de frontera: estado sin estructura adentro, decisiones tipadas y probabilísticas afuera.
- **Cómo se entrena:** con un método propio, Reinforcement Learning for Calibrated Decisions (RLCD). La arquitectura no se publicó. Observadores externos sospechan que parte de un LLM de pesos abiertos, pero no está confirmado.
- **Versiones:** los benchmarks usan Jev 1.13. Jev 1.14 salió el 14 de octubre y sumó soporte de imágenes.
- **Disponibilidad:** solo acceso anticipado, con lista de espera. Los pesos son cerrados: no se puede bajar ni correr en local.

## Cómo se usa

Se envía un **estado** (un texto o un objeto JSON, por ejemplo un ticket o un mail) y un conjunto de **preguntas con nombre y tipo**. Hay tres tipos:

| Tipo | Qué pregunta | Qué devuelve |
|---|---|---|
| `Choice` | Elegir entre opciones con descripción | La opción más probable y la probabilidad de cada una |
| `Noul` | Una afirmación de sí/no | Una probabilidad (un número, no un booleano) de que sea cierta |
| `Score` | Una escala ordenada, de menor a mayor | Una posición ponderada por probabilidad en la escala |

Todas las preguntas se responden en paralelo, en una sola pasada. Cada respuesta trae su distribución de probabilidad y un valor de **confianza**, para que el código actúe si supera un umbral y escale a una persona si no.

La confianza mide qué tan "puntiaguda" es la distribución (en la API de Ollama es 1 menos la entropía normalizada). No es una garantía de que la respuesta sea correcta.

## Números declarados por la empresa

- **Precio:** USD 0,042 por millón de tokens de entrada; la salida es gratis. Los LLM de frontera cuestan entre USD 0,20 y 10 por millón de entrada, y la salida unas 5 veces más.
- **Contexto:** 32.000 tokens.
- **Latencia:** entre 70 y 500 ms de punta a punta. TypeSafe dice que es de 40 a 200 veces más rápido que los LLM de frontera en consultas de este tipo, y las cifras de su portada (193,6 veces más rápido y 444,6 más barato) las presenta como el extremo alto.
- **Muchas opciones:** hasta 255 por pregunta; más allá usa dos etapas, que puede demorar.
- **Sin errores de tipo:** lo garantiza el esquema, no una medición.

## Para qué sirve y para qué no

- **Casos de uso:** clasificar tickets y mails, filtros de entrada y salida de LLM (guardrails), elegir qué herramienta llama un agente, enrutar a un modelo, etiquetar grandes volúmenes de texto y aplicaciones en tiempo real.
- **No sirve** para generar prosa, código ni chat.
- **Debilidades documentadas** por TypeSafe: contar, aritmética, comparar fechas, negación, resistencia a inyección de prompts, y pérdida de precisión con estados grandes y ruidosos. La guía es dejar las cuentas al código.
- **"No alucina" tiene letra chica:** como solo elige entre respuestas permitidas, no puede devolver un valor de tipo inválido, pero sí uno válido y equivocado. Lo señalaron un comentarista de Hacker News y Armin Ronacher, que dijo que el diseño delega un poco el problema de la alucinación en quien lo usa.

## Evidencia independiente

Es poca y anecdótica. Ninguna de estas cifras se verificó por separado.

- Vercel reportó buena adopción temprana, y un ingeniero dijo que un clasificador de seguridad corrió de 5 a 18 veces más rápido que el LLM que reemplazó.
- El CTO de Bryo AI midió que Gemini era algo más preciso clasificando mails, pero de 10 a 20 veces más caro.
- Un análisis de OpenChamber sobre tweets del lanzamiento halló una aceleración mediana reportada de 7 veces, muy lejos de las 193,6 del titular.
- La propia comparación de TypeSafe usa como referencia respuestas de otros modelos, y los autores admiten que eso puede favorecer a OpenAI y Anthropic.

## El mercado después del lanzamiento

Según el video [Los killers de Jev AI](http://www.youtube.com/watch?v=Q_No4P4hXwU), del canal midudev, Jev (que la transcripción automática escribe "Jeff") es un clasificador y tomador de decisiones preentrenado que devuelve respuestas estructuradas con niveles de confianza entre 0 y 1 por una API rápida y tipada ([00:35](https://www.youtube.com/watch?v=Q_No4P4hXwU&t=35)). Los grandes replicaron el concepto en menos de un mes ([04:14](https://www.youtube.com/watch?v=Q_No4P4hXwU&t=254)). Los datos del video se contrastaron con fuentes escritas, y los matices van aparte.

| Rival | Qué es | Datos clave |
|---|---|---|
| **OpenAI, Decisions API** | Endpoint `POST /v1/decisions` que corre solo `gpt-6-luna`. Acepta texto e imágenes | Beta pública el 6 de octubre. USD 0,10 por millón de entrada, salida gratis. El video dice que es hasta 10 veces más rápido que GPT-6 Luna y que usa funciones llamadas *predicates*, *choices* y *scores* ([01:26](https://www.youtube.com/watch?v=Q_No4P4hXwU&t=86)). OpenAI no publicó cifras de precisión ni de calibración |
| **Microsoft, Decision-1** | Qwen3.5-9B con post-entrenamiento. Cerrado y solo texto, contexto de 32K | Cuesta lo mismo que Jev (USD 0,042). Disponible en Azure/Foundry y OpenRouter ([03:10](https://www.youtube.com/watch?v=Q_No4P4hXwU&t=190)). En su propia tabla de 36 benchmarks saca 83,5 % de precisión media contra 82,3 % de Jev |
| **Cloudflare, familia Clef** | Clef, Clef-flash y Clef-omni, derivados de Qwen y con licencia Apache-2.0 según una fuente | Clef-flash USD 0,038, Clef-omni USD 0,15 y Clef USD 0,24 por millón. Dicen ser compatibles con la API de Jev. El video destaca soporte de imágenes, audio y video ([05:30](https://www.youtube.com/watch?v=Q_No4P4hXwU&t=330)) |
| **Otros** | Gemini Decision 1 (Google), pplx-decider (Perplexity), Strands Decider 2B (AWS), d1-ultra y d1-3B (Liquid AI) | Sin detalle en las fuentes revisadas |

**Cómo le va a Jev**
- **Dinero:** la Serie A de USD 870 millones es la del 9 de octubre ya mencionada. Confirmada por varias notas de prensa.
- **Clientes:** el video dice que Jev atrajo al 30 % de las Fortune 500. Las fuentes escritas no coinciden: TypeSafe dice un tercio y a16z escribe que el 25 % lo integró. Son cifras de la propia empresa, sin verificar.
- **Volumen:** TypeSafe declaró cerca de un billón (10¹²) de tokens por día a la semana del lanzamiento, también sin verificar.
- **Benchmarks:** en Artificial Analysis v2.1, Jev 1.14 saca 66, igual que Gemini Decision 1. Microsoft Decision-1 saca 62, y Clef y OpenAI Decisions, 60. Otro índice da 58 a Jev 1.13 y 54 a Decision-1. Cada fuente usa un benchmark distinto, así que no se pueden mezclar.

**Matices:**
- **Estado de OpenAI:** una fuente dice que la API de Decisions de OpenAI llegó a disponibilidad general el 22 de octubre, otras la siguen llamando beta. No quedó claro.
- **Precios y tablas de los rivales:** los de Microsoft y Cloudflare son los que declaran ellos mismos.
- **Origen:** el resumen del video es de una transcripción automática, y los datos que no figuran en fuentes escritas (como los "10 veces más rápido") quedan como "dicho en el video".

## Jev en local: no se puede, pero hay alternativas abiertas

Ollama 0.35 (29 de septiembre de 2026) agregó el endpoint `/v1/systemone`, que habla el mismo contrato que Jev y sirve modelos de decisión abiertos como Nimble y Tev1. El código escrito para Jev corre en local cambiando la URL base. Comparativo completo: [Alternativas abiertas a Jev](jev-alternativas-abiertas-comparativo.md).

## Recursos clave mencionados

- [Anuncio oficial: Introducing System One Models & Jev (TypeSafe AI)](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [Video: Los killers de Jev AI (midudev)](http://www.youtube.com/watch?v=Q_No4P4hXwU)
- [Serie A de USD 870 millones (Implicator)](https://www.implicator.ai/typesafe-ai-raises-870-million-for-jev-as-openai-amazon-and-cloudflare-ship-rivals/)
- [OpenAI Decisions API frente a Jev y Clef (Nicolás Torres)](https://ntorres.dev/blog/openai-decisions-api-vs-jev)
- [Los 7 mejores modelos de decisión en benchmarks independientes (Pinggy)](https://pinggy.io/blog/best_ai_decision_models/)
- [InfoQ: TypeSafe AI Releases Jev](https://www.infoq.com/news/2026/10/typesafe-ai-jev-released/)
- [TechCrunch: A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)
- [Ollama 0.35: modelos de decisión estilo Jev (i10X News)](https://i10x.ai/news/ollama-035-jev-decision-models)
- [Decision models explicados (LLM Configurator)](https://llmconfigurator.com/en/blog/jev-decision-models-explained)
- Documentación de la API: docs.typesafe.ai (según el anuncio; no se revisó)
