import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || "openai/gpt-6-luna";

  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      error: "OPENROUTER_API_KEY not configured on server."
    });
  }

  try {
    const { sentence, langCode, langName, characterName, question, history, translations } = req.body || {};

    if (!sentence || !question) {
      return res.status(400).json({ ok: false, error: "Missing required 'sentence' or 'question' parameter." });
    }

    let variantsContext = "";
    if (translations && typeof translations === "object" && Object.keys(translations).length > 0) {
      const lines = Object.entries(translations)
        .filter(([code, txt]) => Boolean(txt))
        .slice(0, 20)
        .map(([code, txt]) => `- [${code}]: "${txt}"`)
        .join("\n");
      variantsContext = `\nAll parallel translations/dialects of this sentence across the story:\n${lines}\n`;
    }

    const systemPrompt = `You are a world-class polyglot language tutor in Polyglot Heaven.
The user is learning languages and has a question about a specific sentence in a story.
Target sentence: "${sentence}"
Language/Dialect: ${langName || langCode} (${langCode})
${characterName ? `Speaker: ${characterName}` : ""}
${variantsContext}
Instructions:
- The user can ask ANY question in their own words about this sentence, grammar, vocabulary, regional differences, or follow-up questions comparing other dialects (e.g., Canadian French / Québec French, European French, Mexican Spanish, Spain Spanish, etc.).
- When the user asks about a specific dialect or variety (such as "Why does Canadian French say it this way?"), refer directly to the parallel translations provided above and explain the exact lexical choices, phonetic nuances, syntax, colloquialisms, and why that dialect expresses it that way.
- Answer clearly, warmly, and pedagogically in Spanish (or the language of their question).
- Use rich formatting: bold keywords, concise bullet points, and pronunciation tips if applicable.
- Answer directly without repeating boilerplate greetings.`;

    const messages: Array<{ role: string; content: string }> = [
      { role: "system", content: systemPrompt }
    ];

    if (Array.isArray(history)) {
      for (const item of history.slice(-8)) {
        if (item && item.content && (item.role === "user" || item.role === "assistant")) {
          messages.push({ role: item.role, content: item.content });
        }
      }
    }

    messages.push({
      role: "user",
      content: `Pregunta sobre la frase "${sentence}" (${langCode}):\n${question}`
    });

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
        messages,
        temperature: 0.3
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
    const answer = data.choices?.[0]?.message?.content || "";
    const modelUsed = model.includes("gpt-6-luna") ? "GPT-6 Luna (OpenRouter)" : model;

    return res.status(200).json({ ok: true, answer, modelUsed });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: err?.message || String(err) });
  }
}
