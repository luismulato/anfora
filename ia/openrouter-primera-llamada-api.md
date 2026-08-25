# OpenRouter: primera llamada a la API (chat completions)

<img src="https://openrouter.ai/dynamic-og?pathname=default&amp;title=OpenRouter&amp;description=The+unified+interface+for+LLMs.+Find+the+best+models+%26+prices+for+your+prompts&amp;v=2" alt="OpenRouter — The unified interface for LLMs" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://openrouter.ai/docs
**Fecha archivado:** 2026-08-11
**Visibilidad:** public
**Tipo:** Docs

## Resumen

Ejemplo mínimo de la primera llamada al endpoint `chat/completions` de OpenRouter (interfaz unificada para LLMs de múltiples proveedores), en TypeScript (`fetch`) y como REST API cruda (`curl`), usando el modelo `openai/gpt-4o`.

## Recursos clave mencionados

- [Documentación de OpenRouter](https://openrouter.ai/docs)
- Endpoint: `https://openrouter.ai/api/v1/chat/completions`

## Código

**TypeScript:**

```typescript
fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <TU_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>',
    'X-Title': '<YOUR_SITE_NAME>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-4o',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  }),
});
```

**REST API (curl):**

```bash
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TU_API_KEY>" \
  -d '{
  "model": "openai/gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "What is the meaning of life?"
    }
  ]
}'
```

## Notas

- `<TU_API_KEY>` reemplaza la key real que vino en el snippet original — nunca commitear ni pegar keys reales en texto plano.
- `HTTP-Referer` y `X-Title` son opcionales, usados por OpenRouter para atribuir el uso en su leaderboard/rankings.
