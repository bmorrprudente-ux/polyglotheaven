/**
 * Vocabulary Tracker for Telar
 * Keeps track of words seen, inspected, or learned across microcuentos in localStorage.
 */

export interface TrackedWord {
  word: string;
  cleanWord: string;
  langCode: string;
  contextSentence?: string;
  firstSeenAt: string;
  lastSeenAt: string;
  encounterCount: number;
}

const STORAGE_KEY = "telar_seen_vocabulary_v1";

export const vocabularyTracker = {
  getWords(): TrackedWord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  recordWord(rawWord: string, langCode: string, contextSentence?: string): TrackedWord {
    const cleanWord = rawWord.replace(/^[¿¡"«'(\[]+|[.,;:?!»"')\]]+$/g, "").trim().toLowerCase();
    if (!cleanWord) {
      return {
        word: rawWord,
        cleanWord: rawWord,
        langCode,
        firstSeenAt: new Date().toISOString(),
        lastSeenAt: new Date().toISOString(),
        encounterCount: 1,
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      return words[existingIndex];
    } else {
      const newEntry: TrackedWord = {
        word: rawWord.trim(),
        cleanWord,
        langCode,
        contextSentence,
        firstSeenAt: now,
        lastSeenAt: now,
        encounterCount: 1,
      };
      words.unshift(newEntry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      return newEntry;
    }
  },

  getTotalCount(): number {
    return this.getWords().length;
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
