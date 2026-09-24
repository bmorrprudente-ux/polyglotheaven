process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import { defineConfig, loadEnv, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

function openRouterServerPlugin(): Plugin {
  return {
    name: "openrouter-server-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url) return next();

        // 1. Health / Status check for OpenRouter config (without exposing API key)
        if (req.url === "/api/openrouter-status" && req.method === "GET") {
          const env = loadEnv("development", process.cwd(), "");
          const apiKey = env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY || "";
          const model = env.OPENROUTER_MODEL || process.env.OPENROUTER_MODEL || "deepseek/deepseek-v4.1-flash";

          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({
            configured: Boolean(apiKey && apiKey.trim().length > 10),
            model: model.trim(),
            provider: "OpenRouter (DeepSeek v4.1 Flash)"
          }));
          return;
        }

        // 2. Define Word endpoint
        if (req.url === "/api/define-word" && req.method === "POST") {
          let bodyStr = "";
          req.on("data", chunk => {
            bodyStr += chunk;
          });

          req.on("end", async () => {
            try {
              const env = loadEnv("development", process.cwd(), "");
              const apiKey = env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY || "";
              const model = env.OPENROUTER_MODEL || process.env.OPENROUTER_MODEL || "deepseek/deepseek-v4.1-flash";

              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: false, error: "OPENROUTER_API_KEY no encontrada en .env" }));
                return;
              }

              const body = JSON.parse(bodyStr || "{}");
              const { word, sourceLangCode, contextSentence, activeTargetLangCodes } = body;
              const cleanWord = String(word || "").trim().replace(/^[¿¡"«'(\[]+|[.,;:?!»"')\]]+$/g, "");

              const targetLangs = Array.isArray(activeTargetLangCodes) && activeTargetLangCodes.length > 0
                ? activeTargetLangCodes.slice(0, 8).join(", ")
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

              // Ensure TLS verification doesn't fail on corporate networks
              process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

              const apiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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

              if (!apiRes.ok) {
                const errText = await apiRes.text();
                res.statusCode = apiRes.status;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: false, error: `OpenRouter HTTP ${apiRes.status}: ${errText}` }));
                return;
              }

              const data = await apiRes.json();
              const content = data.choices?.[0]?.message?.content;
              if (!content) {
                res.statusCode = 502;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: false, error: "OpenRouter returned empty content." }));
                return;
              }

              let parsed = JSON.parse(content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, ""));
              parsed.isAiGenerated = true;
              parsed.modelUsed = "DeepSeek v4.1 Flash (OpenRouter)";

              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: true, data: parsed }));
            } catch (err: any) {
              console.error("OpenRouter API Proxy Error:", err, err?.cause);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, error: err?.message || String(err), cause: err?.cause ? String(err.cause) : undefined }));
            }
          });
          return;
        }

        // 3. Explain Phrase endpoint
        if (req.url === "/api/explain-phrase" && req.method === "POST") {
          let bodyStr = "";
          req.on("data", chunk => {
            bodyStr += chunk;
          });

          req.on("end", async () => {
            try {
              const env = loadEnv("development", process.cwd(), "");
              const apiKey = env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY || "";
              const model = env.OPENROUTER_MODEL || process.env.OPENROUTER_MODEL || "deepseek/deepseek-v4.1-flash";

              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: false, error: "OPENROUTER_API_KEY no configurada en .env" }));
                return;
              }

              const body = JSON.parse(bodyStr || "{}");
              const { phrase, langName, langCode, characterName } = body;

              const prompt = `You are an expert polyglot linguist in an app called Polyglot Heaven.
Explain this phrase spoken by ${characterName || 'the speaker'} in ${langName || 'the target language'} (${langCode || 'es-ES'}):
"${phrase}"

Return ONLY valid JSON with this schema:
{
  "literalTranslation": "literal translation into Spanish",
  "idiomaticMeaning": "natural conversational meaning in Spanish",
  "culturalNotes": "cultural / pragmatic context or tone explanation in Spanish",
  "grammarBreakdown": ["bullet point 1 in Spanish", "bullet point 2 in Spanish"],
  "dialectNuances": "regional vocabulary, phonetic, or colloquial traits in Spanish"
}`;

              const apiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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
                    { role: "system", content: "You are a professional linguist. Always output valid JSON." },
                    { role: "user", content: prompt }
                  ],
                  response_format: { type: "json_object" },
                  temperature: 0.2
                })
              });

              if (!apiRes.ok) {
                const errText = await apiRes.text();
                res.statusCode = apiRes.status;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: false, error: `OpenRouter HTTP ${apiRes.status}: ${errText}` }));
                return;
              }

              const data = await apiRes.json();
              const content = data.choices?.[0]?.message?.content;
              let parsed = JSON.parse(content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, ""));
              parsed.isAiGenerated = true;
              parsed.modelUsed = "DeepSeek v4.1 Flash (OpenRouter)";

              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: true, data: parsed }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, error: err?.message || String(err) }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), openRouterServerPlugin()],
  server: {
    port: 3000,
    open: false
  }
});
