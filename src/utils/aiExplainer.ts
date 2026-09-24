/**
 * AI Explainer Client for Telar
 * Provides rich linguistic, grammatical, and cultural explanations for phrases and words.
 * Supports Google Gemini (gemini-2.0-flash, gemini-1.5-flash) with automatic fallback and resilient offline lexicon.
 */

export interface PhraseExplanation {
  literalTranslation: string;
  idiomaticMeaning: string;
  culturalNotes: string;
  grammarBreakdown: string[];
  dialectNuances: string;
  isAiGenerated?: boolean;
  modelUsed?: string;
  apiError?: string;
}

export interface WordExplanation {
  word: string;
  lemma: string;
  partOfSpeech: string;
  definition: string;
  ipa: string;
  usageExample: string;
  equivalents: Record<string, string>; // langCode -> translated equivalent
  notes: string;
  isAiGenerated?: boolean;
  modelUsed?: string;
  apiError?: string;
}

// In-memory / localStorage cache (v3 for DeepSeek v4.1 Flash OpenRouter integration)
const CACHE_KEY_PHRASES = "polyglot_phrases_cache_v3";
const CACHE_KEY_WORDS = "polyglot_words_cache_v3";

function getCache(key: string): Record<string, any> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setCache(key: string, itemKey: string, val: any) {
  try {
    const data = getCache(key);
    data[itemKey] = val;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn("Storage error", e);
  }
}

/**
 * Safely parse JSON from LLM response (handling markdown fences ```json ... ```)
 */
function cleanAndParseJson<T>(rawText: string): T {
  let cleaned = rawText.trim();
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, "");
    cleaned = cleaned.replace(/\s*```$/i, "");
  }
  return JSON.parse(cleaned.trim());
}

/**
 * Executes a Gemini request trying current models in order: gemini-2.0-flash, gemini-1.5-flash
 */
async function callGeminiApi(prompt: string, apiKey: string): Promise<{ text: string; model: string }> {
  const models = ["gemini-2.0-flash", "gemini-1.5-flash"];
  let lastError = "";

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.1,
          },
        }),
      });

      if (res.ok) {
        const json = await res.json();
        const textOut = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (textOut) {
          return { text: textOut, model };
        }
      } else {
        const errorJson = await res.json().catch(() => null);
        const msg = errorJson?.error?.message || `HTTP ${res.status}: ${res.statusText}`;
        lastError = msg;
        console.warn(`Gemini API call to ${model} returned error:`, msg);
      }
    } catch (err: any) {
      lastError = err?.message || String(err);
      console.warn(`Gemini network call to ${model} failed:`, err);
    }
  }

  throw new Error(lastError || "No se pudo comunicar con Google Gemini.");
}

/**
 * Explains a whole dialogue line or phrase using OpenRouter DeepSeek v4.1 Flash via server proxy
 */
export async function explainPhraseWithAi(
  phrase: string,
  langName: string,
  langCode: string,
  characterName: string,
  apiKey?: string,
  forceRefresh: boolean = false
): Promise<PhraseExplanation> {
  const cacheKey = `${langCode}:${phrase}`;
  const cached = getCache(CACHE_KEY_PHRASES)[cacheKey];

  if (!forceRefresh && cached && cached.isAiGenerated) {
    return cached;
  }

  // 1. Try secure OpenRouter proxy endpoint first
  try {
    const res = await fetch("/api/explain-phrase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phrase, langName, langCode, characterName })
    });
    if (res.ok) {
      const json = await res.json();
      if (json.ok && json.data) {
        setCache(CACHE_KEY_PHRASES, cacheKey, json.data);
        return json.data;
      }
    }
  } catch (err) {
    console.warn("OpenRouter server proxy unavailable, testing fallbacks:", err);
  }

  let apiError: string | undefined;

  // 2. Try Gemini if user provided custom API key
  const hasKey = Boolean(apiKey && apiKey.trim());
  if (hasKey) {
    try {
      const prompt = `You are an expert polyglot linguist in an app called Polyglot Heaven.
Explain this phrase spoken by ${characterName} in ${langName} (${langCode}):
"${phrase}"

Return ONLY valid JSON with this schema:
{
  "literalTranslation": "literal translation into Spanish",
  "idiomaticMeaning": "natural conversational meaning in Spanish",
  "culturalNotes": "cultural / pragmatic context or tone explanation in Spanish",
  "grammarBreakdown": ["bullet point 1 in Spanish", "bullet point 2 in Spanish"],
  "dialectNuances": "regional vocabulary, phonetic, or colloquial traits in Spanish"
}`;

      const { text, model } = await callGeminiApi(prompt, apiKey!.trim());
      const parsed = cleanAndParseJson<PhraseExplanation>(text);
      parsed.isAiGenerated = true;
      parsed.modelUsed = model;
      setCache(CACHE_KEY_PHRASES, cacheKey, parsed);
      return parsed;
    } catch (e: any) {
      apiError = e?.message || "Error al invocar Gemini API";
    }
  }

  // 3. High-quality contextual fallback
  const fallback = generateHeuristicPhraseExplanation(phrase, langName, langCode, characterName);
  fallback.isAiGenerated = false;
  fallback.apiError = apiError;
  if (!apiError) {
    setCache(CACHE_KEY_PHRASES, cacheKey, fallback);
  }
  return fallback;
}

/**
 * Explains a single word with definitions and cross-lingual equivalents using DeepSeek v4.1 Flash
 */
export async function explainWordWithAi(
  word: string,
  sourceLangCode: string,
  contextSentence: string,
  activeTargetLangCodes: string[] = ["es-ES", "en-US", "fr-FR", "pt-BR", "ja-JP"],
  apiKey?: string,
  forceRefresh: boolean = false
): Promise<WordExplanation> {
  const cleanWord = word.trim().replace(/^[¿¡"«'(\[]+|[.,;:?!»"')\]]+$/g, "");
  const cacheKey = `${sourceLangCode}:${cleanWord.toLowerCase()}`;
  const cached = getCache(CACHE_KEY_WORDS)[cacheKey];

  if (!forceRefresh && cached && cached.isAiGenerated) {
    return cached;
  }

  // 1. Try secure OpenRouter server proxy endpoint (DeepSeek v4.1 Flash)
  try {
    const res = await fetch("/api/define-word", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        word: cleanWord,
        sourceLangCode,
        contextSentence,
        activeTargetLangCodes
      })
    });
    if (res.ok) {
      const json = await res.json();
      if (json.ok && json.data) {
        setCache(CACHE_KEY_WORDS, cacheKey, json.data);
        return json.data;
      }
    }
  } catch (err) {
    console.warn("OpenRouter server proxy unavailable, evaluating fallbacks:", err);
  }

  let apiError: string | undefined;

  // 2. Try Gemini if user provided an API key in settings
  const hasKey = Boolean(apiKey && apiKey.trim());
  if (hasKey) {
    try {
      const prompt = `You are a world-class polyglot lexicographer for a language learning app called Polyglot Heaven.
Analyze this word in its sentence context:
- Word: "${cleanWord}"
- Source language/dialect code: "${sourceLangCode}"
- Sentence context: "${contextSentence}"
- Target languages to provide translations for: ${activeTargetLangCodes.join(", ")}

Generate a complete linguistic analysis. For each target language code, translate "${cleanWord}" to its accurate contextual equivalent in that specific language (e.g. for ja-JP include kanji/hiragana and romaji, for fr-FR accurate French term, for pt-BR Brazilian Portuguese, etc.).

Return ONLY valid JSON matching this exact structure:
{
  "word": "${cleanWord}",
  "lemma": "base dictionary form in source language",
  "partOfSpeech": "grammar category in Spanish (e.g. Adjetivo calificativo, masculino singular / Sustantivo femenino / Verbo transitivo)",
  "definition": "clear concise natural semantic definition in Spanish fitting the context",
  "ipa": "[accurate phonetic IPA transcription]",
  "usageExample": "short natural sentence using the word in its source language",
  "equivalents": {
${activeTargetLangCodes.map(c => `    "${c}": "accurate translation in ${c}"`).join(",\n")}
  },
  "notes": "interesting etymological, regional, or colloquial usage note in Spanish"
}`;

      const { text, model } = await callGeminiApi(prompt, apiKey!.trim());
      const parsed = cleanAndParseJson<WordExplanation>(text);
      parsed.isAiGenerated = true;
      parsed.modelUsed = model;
      setCache(CACHE_KEY_WORDS, cacheKey, parsed);
      return parsed;
    } catch (e: any) {
      apiError = e?.message || "Error al invocar Gemini API";
    }
  }

  // 3. Heuristic lexical database fallback
  const fallback = generateHeuristicWordExplanation(cleanWord, sourceLangCode, contextSentence, activeTargetLangCodes);
  fallback.isAiGenerated = false;
  fallback.apiError = apiError;
  if (!apiError) {
    setCache(CACHE_KEY_WORDS, cacheKey, fallback);
  }
  return fallback;
}

// Built-in heuristic phrase explainer
function generateHeuristicPhraseExplanation(
  phrase: string,
  langName: string,
  langCode: string,
  characterName: string
): PhraseExplanation {
  const lower = phrase.toLowerCase();
  
  let idiomatic = "Frase conversacional con tono natural y directo.";
  let literal = phrase;
  let cultural = `Registro cotidiano propio de ${langName}. Refleja la personalidad expresiva del personaje.`;
  let dialect = "Uso de entonación y vocabulario estándar con modismos de la región seleccionada.";
  const grammar: string[] = [];

  if (lower.includes("maleta") || lower.includes("valise") || lower.includes("koffer") || lower.includes("suitcase") || lower.includes("bulto") || lower.includes("valija") || lower.includes("スーツケース")) {
    literal = "Mención al equipaje o bulto verde y su sospecha.";
    idiomatic = "Alerta intrigada sobre un objeto abandonado o llamativo en el lugar público.";
    cultural = "Típico recurso narrativo cómico: el personaje suspicaz buscando misterios en situaciones mundanas de cafetería.";
    dialect = langCode === "es-DO" ? "Uso caribeño de 'bulto' en vez de maleta y 'ta' por está." :
              langCode === "es-AR" ? "Uso de 'valija' y el intensificador 're' (re sospechosa)." :
              langCode === "es-MX" ? "Uso de 'ahorita' y 'está bien sospechosa'." :
              "Términos adaptados a la norma culta y coloquial del dialecto.";
    grammar.push("Construcción con imperativo negativo ('no mires / don't look').");
    grammar.push("Oración adversativa introducida por conjunción coordinante ('pero / but / mais').");
    grammar.push("Atributo adjetival con intensificador ('muy sospechosa / echt verdächtig').");
  } else if (lower.includes("café") || lower.includes("coffee") || lower.includes("croissant") || lower.includes("pedido") || lower.includes("trámite")) {
    literal = "Petición o interacción en el mostrador del establecimiento.";
    idiomatic = "Interacción cotidiana para pedir consumo o resolver un trámite ordinario.";
    cultural = "Cruce de expectativas: mientras uno busca complots, el otro intenta simplemente desayunar o trabajar.";
    grammar.push("Fórmula de cortesía ('por favor / please / s'il vous plaît').");
    grammar.push("Uso de numerales y sintagmas nominales de cantidad.");
  } else {
    grammar.push("Estructura oracional simple sujeto-verbo-objeto.");
    grammar.push("Adecuación morfosintáctica según el rol dramático de " + characterName + ".");
  }

  return {
    literalTranslation: literal,
    idiomaticMeaning: idiomatic,
    culturalNotes: cultural,
    grammarBreakdown: grammar,
    dialectNuances: dialect,
  };
}

// Built-in comprehensive lexical dictionary for microcuentos
interface LexiconEntry {
  lemma: string;
  pos: string;
  def: string;
  ipa?: string;
  eq: Record<string, string>;
  notes?: string;
}

const MINI_LEXICON: Record<string, LexiconEntry> = {
  sospechoso: {
    lemma: "sospechoso",
    pos: "Adjetivo calificativo, masculino singular",
    def: "Que infunde recelo, duda o desconfianza por su apariencia o comportamiento.",
    ipa: "[sos.pe.ˈt͡ʃo.so]",
    eq: {
      "es-ES": "sospechoso",
      "es-MX": "sospechoso",
      "es-DO": "sospechoso",
      "es-AR": "sospechoso",
      "en-US": "suspicious / fishy",
      "en-GB": "suspicious",
      "fr-FR": "suspect / douteux",
      "pt-BR": "suspeito",
      "pt-PT": "suspeito",
      "de-DE": "verdächtig",
      "it-IT": "sospetto",
      "ja-JP": "怪しい (ayashii)",
      "cmn-CN": "可疑的 (kěyí de)",
      "ar-SA": "مريب (murīb)",
      "hi-IN": "संदिग्ध (sandigdha)",
      "ru-RU": "подозрительный",
      "ko-KR": "의심스러운",
      "nl-NL": "verdacht",
    },
    notes: "Proviene del latín 'suspectus' (mirar por debajo con recelo). En el dialecto dominicano y caribeño suele vincularse a objetos o actitudes raras."
  },
  sospechosa: {
    lemma: "sospechoso",
    pos: "Adjetivo calificativo, femenino singular",
    def: "Que infunde recelo, duda o desconfianza (forma femenina concordante).",
    ipa: "[sos.pe.ˈt͡ʃo.sa]",
    eq: {
      "es-ES": "sospechosa",
      "es-MX": "sospechosa",
      "es-DO": "sospechosa",
      "es-AR": "sospechosa",
      "en-US": "suspicious",
      "fr-FR": "suspecte",
      "pt-BR": "suspeita",
      "de-DE": "verdächtig",
      "it-IT": "sospetta",
      "ja-JP": "怪しい (ayashii)",
      "cmn-CN": "可疑的 (kěyí de)",
      "ar-SA": "مريبة (murībah)",
      "hi-IN": "संदिग्ध (sandigdha)",
      "ru-RU": "подозрительная",
      "ko-KR": "의심스러운",
    },
    notes: "Concordancia de género en sintagmas como 'la maleta verde es sospechosa'."
  },
  maleta: {
    lemma: "maleta",
    pos: "Sustantivo femenino singular",
    def: "Bulto o caja de cuero, tela o plástico usado para transportar ropa y pertenencias de viaje.",
    ipa: "[ma.ˈle.ta]",
    eq: {
      "es-ES": "maleta",
      "es-MX": "maleta",
      "es-AR": "valija",
      "es-DO": "bulto / maleta",
      "en-US": "suitcase / bag",
      "en-GB": "suitcase",
      "fr-FR": "valise",
      "pt-BR": "mala",
      "pt-PT": "mala",
      "de-DE": "Koffer",
      "it-IT": "valigia",
      "ja-JP": "スーツケース (sūtsukēsu)",
      "cmn-CN": "手提箱 (shǒutíxiāng)",
      "ar-SA": "حقيبة (ḥaqībah)",
      "hi-IN": "सूटकेस (sūṭkēs)",
      "ru-RU": "чемодан",
      "ko-KR": "여행가방",
    },
    notes: "En Argentina y Uruguay predomina 'valija', mientras que en República Dominicana suele llamarse 'bulto' a mochilas y bolsos de mano."
  },
  valija: {
    lemma: "valija",
    pos: "Sustantivo femenino singular",
    def: "Equipaje de viaje o maleta (forma estándar en el español rioplatense y chileno).",
    ipa: "[ba.ˈli.xa]",
    eq: {
      "es-ES": "maleta",
      "es-AR": "valija",
      "es-DO": "bulto",
      "en-US": "suitcase",
      "fr-FR": "valise",
      "pt-BR": "mala",
      "de-DE": "Koffer",
      "it-IT": "valigia",
      "ja-JP": "スーツケース (sūtsukēsu)",
      "cmn-CN": "手提箱 (shǒutíxiāng)",
      "ar-SA": "حقيبة",
    },
    notes: "Término de raíz italiana (valigia) afianzado profundamente en el Cono Sur."
  },
  bulto: {
    lemma: "bulto",
    pos: "Sustantivo masculino singular",
    def: "Mochila, bolso o pieza de equipaje (uso muy frecuente en República Dominicana y el Caribe).",
    ipa: "[ˈbul.to]",
    eq: {
      "es-ES": "maleta / bulto",
      "es-DO": "bulto",
      "es-AR": "valija / bolso",
      "en-US": "bag / luggage",
      "fr-FR": "sac / bagage",
      "pt-BR": "mala / volume",
      "de-DE": "Gepäckstück",
      "ja-JP": "荷物 / バッグ",
      "cmn-CN": "行李包 (xínglibāo)",
      "ar-SA": "أمتعة",
    },
    notes: "En República Dominicana 'el bulto' es el término por excelencia para la mochila escolar o de viaje."
  },
  verde: {
    lemma: "verde",
    pos: "Adjetivo invariable",
    def: "Color intermedio entre el azul y el amarillo en el espectro visible, característico de la vegetación viva.",
    ipa: "[ˈbeɾ.ðe]",
    eq: {
      "es-ES": "verde",
      "es-MX": "verde",
      "en-US": "green",
      "fr-FR": "vert",
      "pt-BR": "verde",
      "de-DE": "grün",
      "it-IT": "verde",
      "ja-JP": "緑 (midori)",
      "cmn-CN": "绿色 (lǜsè)",
      "ar-SA": "أخضر (ʾakhḍar)",
      "hi-IN": "हरा (harā)",
      "ru-RU": "зелёный",
      "ko-KR": "초록색",
    },
  },
  café: {
    lemma: "café",
    pos: "Sustantivo masculino singular",
    def: "Bebida aromática obtenida por infusión de semillas tostadas y molidas del cafeto; también el establecimiento.",
    ipa: "[ka.ˈfe]",
    eq: {
      "es-ES": "café",
      "en-US": "coffee",
      "fr-FR": "café",
      "pt-BR": "café",
      "de-DE": "Kaffee",
      "it-IT": "caffè",
      "ja-JP": "コーヒー (kōhī)",
      "cmn-CN": "咖啡 (kāfēi)",
      "ar-SA": "قهوة (qahwah)",
      "hi-IN": "कॉफ़ी (kŏfī)",
      "ru-RU": "кофе",
    },
    notes: "Proviene del árabe 'qahwah' a través del turco 'kahve'."
  },
  sándwich: {
    lemma: "sándwich",
    pos: "Sustantivo masculino singular",
    def: "Emparedado compuesto de dos rebanadas de pan con alimentos entre ellas.",
    ipa: "[ˈsan.dwit͡ʃ]",
    eq: {
      "es-ES": "sándwich / bocadillo",
      "es-MX": "torta / sándwich",
      "es-AR": "sándwich / lomito",
      "en-US": "sandwich",
      "fr-FR": "sandwich",
      "pt-BR": "sanduíche",
      "de-DE": "Sandwich / Belegtes Brot",
      "it-IT": "tramezzino / panino",
      "ja-JP": "サンドイッチ (sandoitchi)",
      "cmn-CN": "三明治 (sānmíngzhì)",
      "ar-SA": "شطيرة (shaṭīrah)",
      "hi-IN": "सैंडविच",
    },
    notes: "En México se distingue entre un sándwich (pan de molde) y una torta (telera o bolillo caliente)."
  },
  despertador: {
    lemma: "despertador",
    pos: "Sustantivo masculino singular",
    def: "Reloj provisto de mecanismo sonoro programable para despertar a quien duerme.",
    ipa: "[des.peɾ.ta.ˈðoɾ]",
    eq: {
      "es-ES": "despertador",
      "en-US": "alarm clock",
      "fr-FR": "réveil",
      "pt-BR": "despertador",
      "de-DE": "Wecker",
      "it-IT": "sveglia",
      "ja-JP": "目覚まし時計 (mezamashitokei)",
      "cmn-CN": "闹钟 (nàozhōng)",
      "ar-SA": "منبه (munabbih)",
      "hi-IN": "अलार्म घड़ी",
    },
  },
  brillantina: {
    lemma: "brillantina",
    pos: "Sustantivo femenino singular",
    def: "Diminutos fragmentos reflectantes de plástico o metal usados para dar brillo cosmético o decorativo.",
    ipa: "[bɾi.ʝan.ˈti.na]",
    eq: {
      "es-ES": "purpurina / brillantina",
      "es-MX": "diamantina",
      "es-AR": "giblé / brillantina",
      "en-US": "glitter",
      "fr-FR": "paillettes",
      "pt-BR": "glitter / purpurina",
      "de-DE": "Glitzer",
      "it-IT": "glitter / brillantini",
      "ja-JP": "グリッター / ラメ (glitter)",
      "cmn-CN": "亮粉 (liàngfěn)",
      "ar-SA": "بريق (barīq)",
    },
    notes: "En España se denomina 'purpurina', en México 'diamantina', y en el Cono Sur 'brillantina' o 'giblé'."
  },
  diamantes: {
    lemma: "diamante",
    pos: "Sustantivo masculino plural",
    def: "Piedras preciosas transparentes de carbono cristalizado de extraordinaria dureza y brillo.",
    ipa: "[dja.ˈman.tes]",
    eq: {
      "es-ES": "diamantes",
      "en-US": "diamonds",
      "fr-FR": "diamants",
      "pt-BR": "diamantes",
      "de-DE": "Diamanten",
      "it-IT": "diamanti",
      "ja-JP": "ダイヤモンド (daiyamondo)",
      "cmn-CN": "钻石 (zuànshí)",
      "ar-SA": "ألماس (almās)",
      "hi-IN": "हीरे (hīrē)",
    },
  },
  peligro: {
    lemma: "peligro",
    pos: "Sustantivo masculino singular",
    def: "Riesgo o contingencia inminente de que suceda algún mal o daño.",
    ipa: "[pe.ˈli.ɣɾo]",
    eq: {
      "es-ES": "peligro",
      "en-US": "danger / peril",
      "fr-FR": "danger",
      "pt-BR": "perigo",
      "de-DE": "Gefahr",
      "it-IT": "pericolo",
      "ja-JP": "危険 (kiken)",
      "cmn-CN": "危险 (wēixiǎn)",
      "ar-SA": "خطر (khaṭar)",
      "hi-IN": "खतरा (khatrā)",
    },
  },
  cromo: {
    lemma: "cromo",
    pos: "Sustantivo masculino singular",
    def: "Estampa de papel litografiada o tarjeta coleccionable que se pega en un álbum.",
    ipa: "[ˈkɾo.mo]",
    eq: {
      "es-ES": "cromo",
      "es-MX": "estampa / estampita",
      "es-AR": "figurita",
      "en-US": "trading card / sticker",
      "fr-FR": "carte à collectionner / vignette",
      "pt-BR": "figurinha / cromo",
      "de-DE": "Sammelbild / Sticker",
      "it-IT": "figurina",
      "ja-JP": "トレーディングカード (torēdingukādo)",
      "cmn-CN": "集换卡 / 贴纸 (tiēzhǐ)",
    },
    notes: "En España se llama 'cromo', en México 'estampa', y en Argentina y Chile 'figurita'."
  },
  holográfico: {
    lemma: "holográfico",
    pos: "Adjetivo masculino singular",
    def: "Que reproduce una imagen tridimensional o con efectos de brillo irisado mediante holografía.",
    ipa: "[o.lo.ˈɣɾa.fi.ko]",
    eq: {
      "es-ES": "holográfico",
      "en-US": "holographic / foil",
      "fr-FR": "holographique",
      "pt-BR": "holográfico",
      "de-DE": "holographisch",
      "it-IT": "olografico",
      "ja-JP": "ホログラフィック (horoguraffikku)",
      "cmn-CN": "全息的 (quánxī de)",
    },
  },
  lácteo: {
    lemma: "lácteo",
    pos: "Adjetivo / Sustantivo masculino singular",
    def: "Perteneciente o relativo a la leche; derivado alimenticio como queso, yogur o nata.",
    ipa: "[ˈlak.te.o]",
    eq: {
      "es-ES": "lácteo",
      "en-US": "dairy",
      "fr-FR": "laitier / produit laitier",
      "pt-BR": "laticínio",
      "de-DE": "Milchprodukt",
      "it-IT": "latticino",
      "ja-JP": "乳製品 (nyūseihin)",
      "cmn-CN": "乳制品 (rǔzhìpǐn)",
    },
  },
  patinar: {
    lemma: "patinar",
    pos: "Verbo intransitivo",
    def: "Deslizarse sobre el hielo o suelo liso mediante patines.",
    ipa: "[pa.ti.ˈnaɾ]",
    eq: {
      "es-ES": "patinar",
      "en-US": "to skate",
      "fr-FR": "patiner",
      "pt-BR": "patinar",
      "de-DE": "Schlittschuh laufen",
      "it-IT": "pattinare",
      "ja-JP": "スケートする (sukēto suru)",
      "cmn-CN": "滑冰 (huábīng)",
    },
  },
  servilletas: {
    lemma: "servilleta",
    pos: "Sustantivo femenino plural",
    def: "Piezas de papel o tela empleadas durante las comidas para limpiarse la boca y manos.",
    ipa: "[seɾ.bi.ˈʝe.tas]",
    eq: {
      "es-ES": "servilletas",
      "en-US": "napkins",
      "fr-FR": "serviettes",
      "pt-BR": "guardanapos",
      "de-DE": "Servietten",
      "it-IT": "tovaglioli",
      "ja-JP": "ナプキン (napukin)",
      "cmn-CN": "餐巾纸 (cānjīnzhǐ)",
    },
  },
  cláusula: {
    lemma: "cláusula",
    pos: "Sustantivo femenino singular",
    def: "Cada una de las disposiciones o condiciones fijadas en un contrato o acuerdo.",
    ipa: "[ˈklaw.su.la]",
    eq: {
      "es-ES": "cláusula",
      "en-US": "clause",
      "fr-FR": "clause",
      "pt-BR": "cláusula",
      "de-DE": "Klausel",
      "it-IT": "clausola",
      "ja-JP": "条項 (jōkō)",
      "cmn-CN": "条款 (tiáokuǎn)",
    },
  },
  mesa: {
    lemma: "mesa",
    pos: "Sustantivo femenino singular",
    def: "Mueble formado por una superficie horizontal sostenida por patas para apoyarse o comer.",
    ipa: "[ˈme.sa]",
    eq: {
      "es-ES": "mesa",
      "en-US": "table",
      "fr-FR": "table",
      "pt-BR": "mesa",
      "de-DE": "Tisch",
      "it-IT": "tavolo",
      "ja-JP": "テーブル (tēburu)",
      "cmn-CN": "桌子 (zhuōzi)",
    },
  },
  hombre: {
    lemma: "hombre",
    pos: "Sustantivo masculino singular",
    def: "Persona de sexo masculino o ser humano en general.",
    ipa: "[ˈom.bɾe]",
    eq: {
      "es-ES": "hombre",
      "en-US": "man",
      "fr-FR": "homme",
      "pt-BR": "homem",
      "de-DE": "Mann",
      "it-IT": "uomo",
      "ja-JP": "男 (otoko)",
      "cmn-CN": "男人 (nánrén)",
    },
  },
  mujer: {
    lemma: "mujer",
    pos: "Sustantivo femenino singular",
    def: "Persona de sexo femenino adulta.",
    ipa: "[mu.ˈxeɾ]",
    eq: {
      "es-ES": "mujer",
      "en-US": "woman",
      "fr-FR": "femme",
      "pt-BR": "mulher",
      "de-DE": "Frau",
      "it-IT": "donna",
      "ja-JP": "女 (onna)",
      "cmn-CN": "女人 (nǚrén)",
    },
  }
};

// Built-in heuristic word explainer with language awareness
function generateHeuristicWordExplanation(
  word: string,
  sourceLangCode: string,
  contextSentence: string,
  activeTargetLangCodes: string[]
): WordExplanation {
  const w = word.toLowerCase().trim();

  // Try direct lookup or singular form
  const singular = w.endsWith("s") && !w.endsWith("is") ? w.slice(0, -1) : w;
  const masculine = w.endsWith("a") ? w.slice(0, -1) + "o" : w;

  const found = MINI_LEXICON[w] || MINI_LEXICON[singular] || MINI_LEXICON[masculine];

  if (found) {
    const eq: Record<string, string> = {};
    activeTargetLangCodes.forEach(code => {
      eq[code] = found.eq[code] || found.eq["es-ES"] || found.eq["en-US"] || word;
    });
    return {
      word,
      lemma: found.lemma,
      partOfSpeech: found.pos,
      definition: found.def,
      ipa: found.ipa || `[${word.toLowerCase()}]`,
      usageExample: contextSentence || `Ejemplo con "${word}".`,
      equivalents: eq,
      notes: found.notes || "Término del léxico situacional del cuento.",
    };
  }

  // Morphological fallback for unknown terms
  const eqFallback: Record<string, string> = {};
  activeTargetLangCodes.forEach(code => {
    // If target language is Spanish variety, use the word
    if (code.startsWith("es-")) {
      eqFallback[code] = word;
    } else {
      // In heuristic mode, clearly label that AI will provide full multi-language translations
      eqFallback[code] = `${word} (${code.split("-")[0].toUpperCase()})`;
    }
  });

  return {
    word,
    lemma: word.toLowerCase(),
    partOfSpeech: "Vocablo en contexto",
    definition: `Término presente en la frase: "${contextSentence}". Añade tu clave de Gemini en Ajustes para generar análisis y traducciones completas en vivo.`,
    ipa: `[${word.toLowerCase()}]`,
    usageExample: contextSentence,
    equivalents: eqFallback,
    notes: "Puedes activar una clave gratuita de Google Gemini en Ajustes para desbloquear la traducción en vivo a todas las lenguas seleccionadas."
  };
}
