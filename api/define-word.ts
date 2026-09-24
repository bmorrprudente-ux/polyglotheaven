import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || "deepseek/deepseek-v4.1-flash";

  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      error: "OPENROUTER_API_KEY not configured on server."
    });
  }

  try {
    const { word, sourceLangCode, contextSentence, activeTargetLangCodes } = req.body || {};
    if (!word) {
      return res.status(400).json({ ok: false, error: "Missing required 'word' parameter." });
    }

    const cleanWord = String(word).trim().replace(/^[¿¡"«'(\[]+|[.,;:?!»"')\]]+$/g, "");
    const targetLangs = Array.isArray(activeTargetLangCodes) && activeTargetLangCodes.length > 0
      ? activeTargetLangCodes.slice(0, 10).join(", ")
      : "es-ES, en-US, fr-FR, pt-BR, ja-JP";

    const prompt = `You are a world-class polyglot lexicographer for a language learning app called Polyglot Heaven.
Analyze this word in its sentence context:
- Word: "${cleanWord}"
- Source language/dialect code: "${sourceLangCode || 'es-ES'}"
- Sentence context: "${contextSentence || ''}"
- Target languages to provide translations for: ${targetLangs}

Generate a complete linguistic analysis. For each target language code, translate "${cleanWord}" to its accurate contextual equivalent in that specific language (e.g. for ja-JP include kanji/hiragana and romaji, for fr-FR accurate French term, for pt-BR Brazilian Portuguese, etc.).

Return ONLY valid JSON matching this exact structure:
{
  "word": "${cleanWord}",
  "lemma": "base dictionary form in source language",
  "partOfSpeech": "grammar category in Spanish (e.g. Sustantivo femenino singular / Verbo transitivo / Adjetivo calificativo)",
  "definition": "clear concise natural semantic definition in Spanish fitting the context",
  "ipa": "[accurate phonetic IPA transcription]",
  "usageExample": "short natural sentence using the word in its source language",
  "equivalents": {
    "langCode": "translation"
  },
  "notes": "interesting etymological, regional, or colloquial usage note in Spanish"
}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://polyglotheaven.app",
        "X-Title": "Polyglot Heaven"
      },
      body: JSON.stringify({
        model: model.trim(),
        messages: [
          { role: "system", content: "You are a professional linguist and lexicographer. Always output valid JSON." },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.2
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({
        ok: false,
        error: `OpenRouter returned status ${response.status}: ${errText}`
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      return res.status(502).json({ ok: false, error: "Empty completion returned by OpenRouter." });
    }

    let parsed = JSON.parse(content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, ""));
    parsed.isAiGenerated = true;
    parsed.modelUsed = model;

    return res.status(200).json({ ok: true, data: parsed });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: err?.message || String(err) });
  }
}
