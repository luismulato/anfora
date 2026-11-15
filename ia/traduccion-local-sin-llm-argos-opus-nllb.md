# Traducir texto localmente sin LLM: Argos Translate vs opus-mt vs NLLB-200

<img src="https://opengraph.githubassets.com/6aba8d52fe36845a2a4bb430cebb0c0b7c94793e9b609d54b69503d9f4cb9178/argosopentech/argos-translate" alt="Argos Translate: librería open source de traducción offline en Python" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://github.com/argosopentech/argos-translate
**Fecha archivado:** 2026-11-04
**Tipo:** Comparativa de herramientas open source

## Resumen

Para traducir documentos largos (transcripts, notas, subtítulos) sin enviarlos a un servicio externo ni gastar tokens de un LLM, hay tres opciones open source que corren 100 % offline: **Argos Translate**, los modelos **opus-mt** (MarianMT) y **NLLB-200**. Son traductores neuronales dedicados: más livianos, rápidos y predecibles que un LLM, pero traducen frase por frase y de forma más literal.

**Recomendación:** empezar con **Argos Translate**. Es una librería de Python con una API de tres líneas, baja sola el paquete de cada par de idiomas (~100 MB) y rinde bien en pares frecuentes como inglés↔español. Pasar a **opus-mt** si se necesita más control o integrarlo en un pipeline de `transformers`, y a **NLLB-200** solo cuando haga falta un idioma poco común (y la licencia no sea un problema).

## Comparativa

| | Argos Translate | opus-mt (MarianMT) | NLLB-200 |
|---|---|---|---|
| Origen | Proyecto comunitario (motor OpenNMT / CTranslate2) | Universidad de Helsinki (Helsinki-NLP) | Meta AI |
| Alcance | Decenas de idiomas, un paquete por par | Un modelo por par de idiomas | ~200 idiomas en un solo modelo |
| Peso aproximado | ~100 MB por par | ~300 MB por par | 1,2 a 3 GB según variante (600M, 1.3B, 3.3B) |
| Facilidad | Muy alta: `pip install argostranslate` y listo | Media: `transformers` o CTranslate2 | Media/baja: hay que indicar códigos de idioma y optimizar la inferencia |
| Calidad | Buena en pares comunes | Buena, similar | La mejor en idiomas poco frecuentes |
| Licencia | MIT | Apache-2.0 (según su ficha en Hugging Face) | **CC-BY-NC 4.0: no apta para uso comercial** |

## Consejos prácticos

- **Limpiar antes de traducir.** En texto hablado (transcripts), quitar muletillas ("uh", "um") y repeticiones tartamudeadas ("I, I, I") evita que el traductor las copie.
- **Traducir por oraciones.** Partir el texto en frases (por `.?!`) da mejores resultados que enviar párrafos enteros a un modelo pequeño.
- **Nombres propios y siglas.** Los traductores neuronales dedicados no entienden contexto: pueden traducir o deformar nombres y acrónimos. Revisar el resultado antes de citarlo.
- **Whisper solo traduce a inglés.** Su modo `translate` no sirve para pasar a español; hay que transcribir y luego traducir con una de estas herramientas.
- **Cuándo sí usar un LLM.** Si importa el tono, el registro o el contexto (marketing, documentos legales), un LLM sigue traduciendo mejor; estas opciones ganan en privacidad, costo cero y velocidad.

## Ejemplo mínimo (Argos Translate)

```python
import argostranslate.package as pkg, argostranslate.translate as tr

pkg.update_package_index()
p = next(x for x in pkg.get_available_packages() if x.from_code == "en" and x.to_code == "es")
pkg.install_from_path(p.download())          # una sola vez

print(tr.translate("Fluency is not the same as judgment.", "en", "es"))
```

## Recursos clave mencionados

- Argos Translate (repo, licencia MIT): https://github.com/argosopentech/argos-translate
- opus-mt-en-es (Helsinki-NLP, Hugging Face): https://huggingface.co/Helsinki-NLP/opus-mt-en-es
- NLLB-200 (Meta, variante distilada de 600M): https://huggingface.co/facebook/nllb-200-distilled-600M
- Instalación rápida: `pip install argostranslate`
