# IA en el navegador: cero backend, cero API key expuesta

<img src="https://www.tensorflow.org/static/site-assets/images/project-logos/tensorflow-js-logo-social.png" alt="Logo de TensorFlow.js" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://youtube.com/shorts/Hh9KqdZkNe8?si=yzeaoDkOTm7OavkR
**Fecha archivado:** 2026-08-11
**Tipo:** Video de YouTube

## Resumen

Técnica para ejecutar modelos de IA cliente directamente en el navegador mediante JavaScript, Web Workers y modelos cuantizados. Elimina la necesidad de infraestructura backend, protege credenciales API y permite inferencia local y offline con costo cero.

## Recursos clave mencionados

- [Video analizado: IA en el navegador (LATAM4DEV)](https://youtube.com/shorts/Hh9KqdZkNe8?si=yzeaoDkOTm7OavkR)
- [Documentación oficial de TensorFlow.js](https://www.tensorflow.org/js)
- [ONNX Runtime Web](https://onnxruntime.ai/docs/get-started/with-javascript.html)
- [Hugging Face Transformers.js](https://huggingface.co/docs/transformers.js/index)
- Comando de instalación rápida (Transformers.js): `npm install @xenova/transformers`

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Inferencia local en cliente:** Ventajas de prescindir de APIs externas y backend proxies.
- **[00:00:16] Privacidad, offline y costo cero:** Procesamiento de datos en el dispositivo sin exponer credenciales.
- **[00:00:26] Uso de Web Workers:** Delegación de tareas intensivas de JS fuera del hilo principal para no congelar la UI.
- **[00:00:36] Ejemplo práctico:** Carga e inferencia local con modelos livianos en memoria RAM.
- **[00:00:45] Limitaciones y trade-offs:** Tamaño de bundle, cuantización, precisión y soporte actual de WebGPU.
