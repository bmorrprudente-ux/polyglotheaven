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
    const { sentence, langCode, langName, characterName, question, history } = req.body || {};

    if (!sentence || !question) {
      return res.status(400).json({ ok: false, error: "Missing required 'sentence' or 'question' parameter." });
    }

    const systemPrompt = `You are a friendly, world-class polyglot language tutor in Polyglot Heaven.
The user is learning languages and has a question about a specific sentence in a story.
Target sentence: "${sentence}"
Language/Dialect: ${langName || langCode} (${langCode})
${characterName ? `Speaker: ${characterName}` : ""}

Instructions:
- Answer the user's question directly, clearly, warmly, and concisely in Spanish.
- Use formatting (bullet points, bold font for keywords/morphemes) to make linguistic insights easy to digest.
- If they ask about grammar, explain the rules and contrast with Spanish.
- If they ask about vocabulary, break down the etymology or nuances.
- If they ask how to say something colloquially, give authentic alternatives with pronunciation notes.
- Keep the response structured, pedagogical, and inspiring.`;

    const messages: Array<{ role: string; content: string }> = [
      { role: "system", content: systemPrompt }
    ];

    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item && item.content && (item.role === "user" || item.role === "assistant")) {
          messages.push({ role: item.role, content: item.content });
        }
      }
    }

    messages.push({
      role: "user",
      content: `Pregunta sobre la frase "${sentence}":\n${question}`
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
