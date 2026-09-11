/**
 * Universal Word Segmenter for Polyglot Text
 * ===========================================
 * Handles non-space-delimited scripts (Japanese, Chinese, Thai)
 * as well as European and Indic languages accurately using Intl.Segmenter.
 */

export interface TextToken {
  text: string;
  isWord: boolean;
  cleanWord: string;
}

// Map regional dialect codes to appropriate BCP-47 language tag for Intl.Segmenter
export function normalizeLocaleForSegmentation(langCode: string): string {
  if (!langCode) return "es";
  if (langCode.startsWith("cmn") || langCode.startsWith("zh")) return "zh-CN";
  if (langCode.startsWith("yue")) return "zh-HK";
  if (langCode.startsWith("ja")) return "ja-JP";
  if (langCode.startsWith("th")) return "th-TH";
  if (langCode.startsWith("ko")) return "ko-KR";
  return langCode.split("-")[0];
}

/**
 * Segments a full sentence into words and non-word tokens (punctuation, spaces, symbols).
 */
export function segmentSentence(text: string, langCode: string): TextToken[] {
  if (!text) return [];

  const locale = normalizeLocaleForSegmentation(langCode);

  // Modern browsers and Node 16+ support Intl.Segmenter natively
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    try {
      // @ts-ignore - TS may require newer lib setting
      const segmenter = new (Intl as any).Segmenter(locale, { granularity: "word" });
      const segments = Array.from(segmenter.segment(text)) as { segment: string; isWordLike?: boolean }[];

      return segments.map(s => {
        const segText = s.segment;
        // Check if segment is word-like
        // Covers Latin, CJK ideographs (\u4e00-\u9fa5), Hiragana/Katakana (\u3040-\u30ff),
        // Hangul (\uac00-\ud7af), Devanagari (\u0900-\u097f), Arabic (\u0600-\u06ff), etc.
        const hasWordChars = /[\p{L}\p{N}]/u.test(segText);
        const isWord = Boolean(s.isWordLike && hasWordChars);
        const cleanWord = segText.replace(/^[¿¡"«'(\[#$@*•\-]+|[.,;:?!»"')\]—#$@*•\-]+$/gu, "");

        return {
          text: segText,
          isWord: isWord && cleanWord.length > 0,
          cleanWord: cleanWord || segText,
        };
      });
    } catch (e) {
      // Fallback if segmenter throws for an unsupported locale
    }
  }

  // Fallback for space-delimited scripts
  const parts = text.split(/(\s+|[.,;:?!¿¡"«»()—]+)/).filter(Boolean);
  return parts.map(p => {
    const isPunctOrSpace = /^(\s+|[.,;:?!¿¡"«»()—]+)$/.test(p);
    const cleanWord = p.replace(/^[¿¡"«'(\[#$@*•\-]+|[.,;:?!»"')\]—#$@*•\-]+$/g, "");
    return {
      text: p,
      isWord: !isPunctOrSpace && cleanWord.length > 0,
      cleanWord: cleanWord || p,
    };
  });
}

/**
 * Extracts all unique clean words from a sentence for vocabulary tracking.
 */
export function extractVocabularyWords(text: string, langCode: string): string[] {
  const tokens = segmentSentence(text, langCode);
  const words = tokens
    .filter(t => t.isWord && t.cleanWord.length > 0)
    .map(t => t.cleanWord);
  
  return Array.from(new Set(words));
}
