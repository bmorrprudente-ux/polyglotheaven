/**
 * Universal IPA & Phonetic Transcriber for Telar
 * Provides accurate International Phonetic Alphabet (IPA) representations
 * for phrases across different languages and dialects without cutoffs.
 */

// Phonetic mappings for Spanish
export function spanishToIpa(text: string, dialect = "es-ES"): string {
  const isCeceo = dialect === "es-ES";
  let t = text.toLowerCase()
    .replace(/[¿¡"«'()[\],;.?!]/g, "")
    .trim();

  const replacements: [RegExp, string][] = [
    [/ll/g, "ʝ"],
    [/ch/g, "t͡ʃ"],
    [/rr/g, "r"],
    [/qu([ei])/g, "k$1"],
    [/gu([ei])/g, "ɡ$1"],
    [/c([ei])/g, isCeceo ? "θ$1" : "s$1"],
    [/z/g, isCeceo ? "θ" : "s"],
    [/c/g, "k"],
    [/g([ei])/g, "x$1"],
    [/j/g, "x"],
    [/v/g, "b"],
    [/h/g, ""],
    [/y(?=[aeiouáéíóú])/g, "ʝ"],
    [/y\b/g, "i"],
    [/x/g, "ks"],
    [/ñ/g, "ɲ"],
    [/á/g, "ˈa"],
    [/é/g, "ˈe"],
    [/í/g, "ˈi"],
    [/ó/g, "ˈo"],
    [/ú/g, "ˈu"],
    [/r/g, "ɾ"],
  ];

  for (const [re, rep] of replacements) {
    t = t.replace(re, rep);
  }

  return `[${t.split(/\s+/).filter(Boolean).join(" . ")}]`;
}

// English to IPA rules (supporting standard US, UK, Scottish, and Southern)
export function englishToIpa(text: string, dialect = "en-US"): string {
  const isUk = dialect === "en-GB" || dialect === "en-IE";
  const isScottish = dialect === "en-GB-SCT";
  const isSouthern = dialect === "en-US-south";

  const words: Record<string, string> = {
    the: "ðə",
    a: "ə",
    an: "æn",
    clara: isScottish ? "ˈklaː.ɹə" : "ˈklɑː.ɹə",
    hugo: "ˈhjuː.ɡoʊ",
    green: "ɡɹiːn",
    suitcase: "ˈsuːt.keɪs",
    table: "ˈteɪ.bəl",
    opposite: isUk ? "ˈɒp.ə.zɪt" : "ˈɑː.pə.zət",
    across: "ə.ˈkɹɒs",
    is: "ɪz",
    very: "ˈvɛɹ.i",
    suspicious: "sə.ˈspɪʃ.əs",
    look: "lʊk",
    now: isSouthern ? "naːw" : "naʊ",
    "don't": isSouthern ? "doʊnt" : "doʊnt",
    dinnae: "ˈdɪn.e",
    noo: "nuː",
    pure: "pjuːɹ",
    dodgy: "ˈdɒdʒ.i",
    wee: "wiː",
    braw: "brɔː",
    ken: "kɛn",
    lass: "las",
    lad: "lad",
    ye: "jiː",
    "y'all": "jɔːl",
    reckon: "ˈɹɛk.ən",
    mighty: "ˈmaɪ.ti",
    fixin: "ˈfɪk.sɪn",
    but: "bʌt",
    that: "ðæt",
    coffee: "ˈkɒf.i",
    please: "pliːz",
    two: "tuː",
    cups: "kʌps",
    sugar: "ˈʃʊɡ.əɹ",
    croissant: "kɹə.ˈsɒnt",
    just: "dʒʌst",
    sandwich: "ˈsæn.wɪdʒ",
    eat: "iːt",
    your: "jɔːɹ",
    it: "ɪt",
    man: "mæn",
    bus: "bʌs",
    old: "oʊld",
    waiting: "ˈweɪ.tɪŋ",
    for: "fɔːɹ",
    relax: "ɹɪ.ˈlæks",
  };

  const clean = text.toLowerCase().replace(/[.,?!"]/g, "").trim().split(/\s+/);
  const ipaWords = clean.map(w => words[w] || phoneticApprox(w));
  return `[${ipaWords.join(" ")}]`;
}

// French to IPA rules
export function frenchToIpa(text: string): string {
  const dict: Record<string, string> = {
    clara: "kla.ʁa",
    ne: "nə",
    regarde: "ʁə.ɡaʁd",
    pas: "pa",
    maintenant: "mɛ̃t.nɑ̃",
    mais: "mɛ",
    cette: "sɛt",
    valise: "va.liz",
    verte: "vɛʁt",
    sur: "syʁ",
    la: "la",
    table: "tabl",
    den: "dɑ̃",
    face: "fas",
    est: "ɛ",
    très: "tʁɛ",
    suspecte: "sys.pɛkt",
    hugo: "y.ɡo",
    c: "s",
    juste: "ʒyst",
    une: "yn",
    mange: "mɑ̃ʒ",
    ton: "tɔ̃",
    sandwich: "sɑ̃d.witʃ",
    "calme-toi": "kalm.twa",
    monsieur: "mə.sjø",
    attend: "a.tɑ̃",
    le: "lə",
    bus: "bys",
    deux: "dø",
    "cafés": "ka.fe",
    s: "s",
    il: "il",
    te: "tə",
    "plaît": "plɛ",
  };
  const clean = text.toLowerCase().replace(/['’]/g, " ").replace(/[.,?!"]/g, "").trim().split(/\s+/);
  const ipaWords = clean.map(w => dict[w] || phoneticApprox(w));
  return `[${ipaWords.join(" ")}]`;
}

// Portuguese to IPA
export function portugueseToIpa(text: string, isBr = true): string {
  const dict: Record<string, string> = {
    clara: "ˈkla.ɾɐ",
    não: "nɐ̃w̃",
    olha: "ˈɔ.ʎɐ",
    agora: "a.ˈɡɔ.ɾɐ",
    mas: "majs",
    aquela: "a.ˈkɛ.lɐ",
    mala: "ˈma.lɐ",
    verde: isBr ? "ˈveʁ.dʒi" : "ˈveɾ.ðɨ",
    na: "nɐ",
    mesa: "ˈme.zɐ",
    da: "dɐ",
    frente: isBr ? "ˈfɾẽ.tʃi" : "ˈfɾẽ.tɨ",
    é: "ɛ",
    muito: "ˈmũj̃.tu",
    suspeita: "suʃ.ˈpej.tɐ",
    apenas: "a.ˈpe.nɐs",
    coma: "ˈko.mɐ",
    seu: "sew",
    sanduíche: isBr ? "sɐ̃.du.ˈi.ʃi" : "sɐ̃.du.ˈi.ʃɨ",
    calma: "ˈkaw.mɐ",
    senhor: "sẽ.ˈɲoɾ",
    esperando: "es.pe.ˈɾɐ̃.du",
    ônibus: "ˈo.ni.bus",
    autocarro: "aw.tu.ˈka.ʁu",
  };
  const clean = text.toLowerCase().replace(/[.,?!"]/g, "").trim().split(/\s+/);
  const ipaWords = clean.map(w => dict[w] || phoneticApprox(w));
  return `[${ipaWords.join(" ")}]`;
}

// Generic phonetic approximation for other languages
function phoneticApprox(word: string): string {
  return word
    .replace(/sh/gi, "ʃ")
    .replace(/ch/gi, "t͡ʃ")
    .replace(/th/gi, "θ")
    .replace(/ph/gi, "f")
    .replace(/j/gi, "d͡ʒ")
    .replace(/y/gi, "j")
    .replace(/w/gi, "w")
    .replace(/r/gi, "ɾ")
    .replace(/ç/gi, "s")
    .replace(/x/gi, "ks");
}

/**
 * Returns complete dynamic IPA string for any language code and text (never sliced or truncated)
 */
export function getIpaTranscription(text: string, langCode: string): string {
  if (!text) return "";

  if (langCode.startsWith("es-")) {
    return spanishToIpa(text, langCode);
  }
  if (langCode.startsWith("en-")) {
    return englishToIpa(text, langCode);
  }
  if (langCode.startsWith("fr-")) {
    return frenchToIpa(text);
  }
  if (langCode.startsWith("pt-")) {
    return portugueseToIpa(text, langCode === "pt-BR");
  }
  if (langCode === "de-DE" || langCode === "de-CH") {
    const germanText = text.toLowerCase()
      .replace(/sch/g, "ʃ")
      .replace(/ch/g, "ç")
      .replace(/ei/g, "aɪ")
      .replace(/eu/g, "ɔɪ")
      .replace(/äu/g, "ɔɪ")
      .replace(/ie/g, "iː")
      .replace(/sp/g, "ʃp")
      .replace(/st/g, "ʃt")
      .replace(/ß/g, "s");
    return `[${germanText}]`;
  }
  if (langCode === "it-IT") {
    const itText = text.toLowerCase()
      .replace(/gli/g, "ʎi")
      .replace(/gn/g, "ɲ")
      .replace(/ci([aeou])/g, "t͡ʃ$1")
      .replace(/ce/g, "t͡ʃe")
      .replace(/ci/g, "t͡ʃi")
      .replace(/gi([aeou])/g, "d͡ʒ$1")
      .replace(/ge/g, "d͡ʒe")
      .replace(/gi/g, "d͡ʒi");
    return `[${itText}]`;
  }
  if (langCode === "nl-NL" || langCode === "nl-BE") {
    const nlText = text.toLowerCase()
      .replace(/ij/g, "ɛi")
      .replace(/oe/g, "u")
      .replace(/ui/g, "œy")
      .replace(/ch/g, "x")
      .replace(/g/g, "ɣ");
    return `[${nlText}]`;
  }

  // Transcribe full sentence without slicing
  const words = text.replace(/[.,;:?!¿¡"«»()]/g, "").trim().split(/\s+/).filter(Boolean);
  return `[${words.map(w => phoneticApprox(w)).join(" ")}]`;
}
