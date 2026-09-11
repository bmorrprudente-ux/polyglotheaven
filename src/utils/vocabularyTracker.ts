/**
 * Vocabulary Tracker for Polyglot Heaven
 * Keeps track of words seen, inspected, or learned across microcuentos in localStorage.
 * Supports favoriting words for SRS flashcards practice.
 */

export interface TrackedWord {
  word: string;
  cleanWord: string;
  langCode: string;
  contextSentence?: string;
  translation?: string;
  firstSeenAt: string;
  lastSeenAt: string;
  encounterCount: number;
  isFavorite?: boolean;
}

const STORAGE_KEY = "polyglot_heaven_vocabulary_v2";

export const vocabularyTracker = {
  getWords(): TrackedWord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("telar_seen_vocabulary_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  recordWord(rawWord: string, langCode: string, contextSentence?: string, translation?: string): TrackedWord {
    const cleanWord = rawWord.replace(/^[¿¡"«'(\[]+|[.,;:?!»"')\]]+$/g, "").trim().toLowerCase();
    if (!cleanWord) {
      return {
        word: rawWord,
        cleanWord: rawWord,
        langCode,
        firstSeenAt: new Date().toISOString(),
        lastSeenAt: new Date().toISOString(),
        encounterCount: 1,
        isFavorite: false,
      };
    }

    const words = this.getWords();
    const existingIndex = words.findIndex(
      w => w.cleanWord === cleanWord && w.langCode === langCode
    );

    const now = new Date().toISOString();

    if (existingIndex >= 0) {
      words[existingIndex].encounterCount += 1;
      words[existingIndex].lastSeenAt = now;
      if (contextSentence) words[existingIndex].contextSentence = contextSentence;
      if (translation) words[existingIndex].translation = translation;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      return words[existingIndex];
    } else {
      const newEntry: TrackedWord = {
        word: rawWord.trim(),
        cleanWord,
        langCode,
        contextSentence,
        translation,
        firstSeenAt: now,
        lastSeenAt: now,
        encounterCount: 1,
        isFavorite: false,
      };
      words.unshift(newEntry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      return newEntry;
    }
  },

  toggleFavorite(cleanWordOrRaw: string, langCode: string): boolean {
    const clean = cleanWordOrRaw.replace(/^[¿¡"«'(\[]+|[.,;:?!»"')\]]+$/g, "").trim().toLowerCase();
    const words = this.getWords();
    const idx = words.findIndex(w => (w.cleanWord === clean || w.word.toLowerCase() === clean) && w.langCode === langCode);

    if (idx >= 0) {
      words[idx].isFavorite = !words[idx].isFavorite;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      return Boolean(words[idx].isFavorite);
    } else {
      // Record and favorite immediately
      const newWord: TrackedWord = {
        word: cleanWordOrRaw,
        cleanWord: clean,
        langCode,
        firstSeenAt: new Date().toISOString(),
        lastSeenAt: new Date().toISOString(),
        encounterCount: 1,
        isFavorite: true,
      };
      words.unshift(newWord);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      return true;
    }
  },

  isFavorite(cleanWordOrRaw: string, langCode: string): boolean {
    const clean = cleanWordOrRaw.replace(/^[¿¡"«'(\[]+|[.,;:?!»"')\]]+$/g, "").trim().toLowerCase();
    const words = this.getWords();
    const found = words.find(w => (w.cleanWord === clean || w.word.toLowerCase() === clean) && w.langCode === langCode);
    return Boolean(found?.isFavorite);
  },

  getFavorites(): TrackedWord[] {
    return this.getWords().filter(w => w.isFavorite);
  },

  getTotalCount(): number {
    return this.getWords().length;
  },

  getFavoritesCount(): number {
    return this.getFavorites().length;
  },

  getCountByLang(): Record<string, number> {
    const words = this.getWords();
    const counts: Record<string, number> = {};
    words.forEach(w => {
      counts[w.langCode] = (counts[w.langCode] || 0) + 1;
    });
    return counts;
  },

  clearAll(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
