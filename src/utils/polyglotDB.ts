/**
 * Polyglot Heaven — Central IndexedDB Database Service
 * 
 * Provides robust, transactional, offline-first persistence using browser-native IndexedDB.
 * Manages:
 * 1. User settings (learning languages, mastered languages, API keys, theme)
 * 2. Story preferences (active selected languages in cuentos, story ID, speed, phonetics)
 * 3. Vocabulary repository (discovered words, translations, favorite stars, review counters)
 * 4. User progress & achievements
 */

export interface StoredUserSettings {
  id: "user";
  username: string;
  darkMode: boolean;
  interfaceLanguage: "es" | "en" | "fr" | "pt";
  currentlyLearning: string[];
  masteredLanguages: string[];
  geminiApiKey: string;
  updatedAt: string;
}

export interface StoredStoryPreferences {
  id: "current";
  selectedLanguageCodes: string[];
  currentStoryId: string;
  viewMode: "home" | "parallel" | "tour" | "dialogue";
  playbackSpeed: number;
  showPhonetics: boolean;
  activeTagFilter: string | null;
  updatedAt: string;
}

export interface StoredVocabularyWord {
  id: string; // `${word}_${langCode}`
  word: string;
  langCode: string;
  contextPhrase?: string;
  translation?: string;
  timestamp: string;
  isFavorite: boolean;
  timesReviewed: number;
}

export interface StoredProgress {
  id: string;
  completedStories: string[];
  unlockedAchievements: string[];
  updatedAt: string;
}

const DB_NAME = "PolyglotHeaven_DB";
const DB_VERSION = 1;

const STORE_SETTINGS = "settings";
const STORE_STORY_PREFS = "story_preferences";
const STORE_VOCABULARY = "vocabulary";
const STORE_PROGRESS = "progress";

const FAST_CACHE_KEY = "polyglot_heaven_db_fast_cache";

class PolyglotDatabaseService {
  private dbPromise: Promise<IDBDatabase | null> | null = null;
  private fastCache: {
    settings?: StoredUserSettings;
    storyPrefs?: StoredStoryPreferences;
    vocabulary?: Record<string, StoredVocabularyWord>;
    progress?: StoredProgress;
  } = {};

  constructor() {
    this.loadFastCache();
    if (typeof window !== "undefined" && "indexedDB" in window) {
      this.initDB().then(() => {
        this.syncFromIndexedDB();
      });
    }
  }

  // Fast synchronous memory/localStorage cache for instant React state initialization
  private loadFastCache() {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(FAST_CACHE_KEY);
      if (raw) {
        this.fastCache = JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Could not load fast cache:", e);
    }
  }

  private saveFastCache() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(FAST_CACHE_KEY, JSON.stringify(this.fastCache));
    } catch (e) {
      console.warn("Could not persist fast cache:", e);
    }
  }

  public initDB(): Promise<IDBDatabase | null> {
    if (this.dbPromise) return this.dbPromise;
    if (typeof window === "undefined" || !("indexedDB" in window)) {
      return Promise.resolve(null);
    }

    this.dbPromise = new Promise((resolve) => {
      try {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;

          if (!db.objectStoreNames.contains(STORE_SETTINGS)) {
            db.createObjectStore(STORE_SETTINGS, { keyPath: "id" });
          }
          if (!db.objectStoreNames.contains(STORE_STORY_PREFS)) {
            db.createObjectStore(STORE_STORY_PREFS, { keyPath: "id" });
          }
          if (!db.objectStoreNames.contains(STORE_VOCABULARY)) {
            const vocabStore = db.createObjectStore(STORE_VOCABULARY, { keyPath: "id" });
            vocabStore.createIndex("by_lang", "langCode", { unique: false });
            vocabStore.createIndex("by_favorite", "isFavorite", { unique: false });
          }
          if (!db.objectStoreNames.contains(STORE_PROGRESS)) {
            db.createObjectStore(STORE_PROGRESS, { keyPath: "id" });
          }
        };

        request.onsuccess = () => {
          resolve(request.result);
        };

        request.onerror = (err) => {
          console.warn("IndexedDB open error:", err);
          resolve(null);
        };
      } catch (err) {
        console.warn("IndexedDB initialization exception:", err);
        resolve(null);
      }
    });

    return this.dbPromise;
  }

  private async getDB(): Promise<IDBDatabase | null> {
    return this.initDB();
  }

  // Sync from IndexedDB into fastCache on startup
  private async syncFromIndexedDB() {
    const db = await this.getDB();
    if (!db) return;

    try {
      const tx = db.transaction([STORE_SETTINGS, STORE_STORY_PREFS, STORE_VOCABULARY], "readonly");
      
      const settingsReq = tx.objectStore(STORE_SETTINGS).get("user");
      const prefsReq = tx.objectStore(STORE_STORY_PREFS).get("current");
      const vocabReq = tx.objectStore(STORE_VOCABULARY).getAll();

      settingsReq.onsuccess = () => {
        if (settingsReq.result) {
          this.fastCache.settings = settingsReq.result;
          this.saveFastCache();
        }
      };

      prefsReq.onsuccess = () => {
        if (prefsReq.result) {
          this.fastCache.storyPrefs = prefsReq.result;
          this.saveFastCache();
        }
      };

      vocabReq.onsuccess = () => {
        if (Array.isArray(vocabReq.result) && vocabReq.result.length > 0) {
          const dict: Record<string, StoredVocabularyWord> = {};
          vocabReq.result.forEach((w: StoredVocabularyWord) => {
            dict[w.id] = w;
          });
          this.fastCache.vocabulary = dict;
          this.saveFastCache();
        }
      };
    } catch (e) {
      console.warn("Failed background sync from IndexedDB:", e);
    }
  }

  // ==========================================
  // SETTINGS API
  // ==========================================

  public getSettingsSync(): StoredUserSettings | null {
    return this.fastCache.settings || null;
  }

  public async getSettings(): Promise<StoredUserSettings | null> {
    if (this.fastCache.settings) return this.fastCache.settings;

    const db = await this.getDB();
    if (!db) return this.fastCache.settings || null;

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(STORE_SETTINGS, "readonly");
        const req = tx.objectStore(STORE_SETTINGS).get("user");
        req.onsuccess = () => {
          if (req.result) {
            this.fastCache.settings = req.result;
            this.saveFastCache();
            resolve(req.result);
          } else {
            resolve(null);
          }
        };
        req.onerror = () => resolve(this.fastCache.settings || null);
      } catch {
        resolve(this.fastCache.settings || null);
      }
    });
  }

  public async saveSettings(settings: Omit<StoredUserSettings, "id" | "updatedAt">): Promise<void> {
    const record: StoredUserSettings = {
      ...settings,
      id: "user",
      updatedAt: new Date().toISOString(),
    };

    this.fastCache.settings = record;
    this.saveFastCache();

    const db = await this.getDB();
    if (!db) return;

    try {
      const tx = db.transaction(STORE_SETTINGS, "readwrite");
      tx.objectStore(STORE_SETTINGS).put(record);
    } catch (e) {
      console.warn("Failed to write settings to IndexedDB:", e);
    }
  }

  // ==========================================
  // STORY PREFERENCES API (Languages in Cuentos)
  // ==========================================

  public getStoryPreferencesSync(): StoredStoryPreferences | null {
    return this.fastCache.storyPrefs || null;
  }

  public async getStoryPreferences(): Promise<StoredStoryPreferences | null> {
    if (this.fastCache.storyPrefs) return this.fastCache.storyPrefs;

    const db = await this.getDB();
    if (!db) return this.fastCache.storyPrefs || null;

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(STORE_STORY_PREFS, "readonly");
        const req = tx.objectStore(STORE_STORY_PREFS).get("current");
        req.onsuccess = () => {
          if (req.result) {
            this.fastCache.storyPrefs = req.result;
            this.saveFastCache();
            resolve(req.result);
          } else {
            resolve(null);
          }
        };
        req.onerror = () => resolve(this.fastCache.storyPrefs || null);
      } catch {
        resolve(this.fastCache.storyPrefs || null);
      }
    });
  }

  public async saveStoryPreferences(
    prefs: Partial<Omit<StoredStoryPreferences, "id" | "updatedAt">>
  ): Promise<void> {
    const existing = this.fastCache.storyPrefs || {
      id: "current",
      selectedLanguageCodes: ["es-ES", "es-MX", "es-DO", "fr-FR", "pt-BR", "ja-JP"],
      currentStoryId: "story_1",
      viewMode: "home",
      playbackSpeed: 1.0,
      showPhonetics: true,
      activeTagFilter: null,
      updatedAt: new Date().toISOString(),
    };

    const record: StoredStoryPreferences = {
      ...existing,
      ...prefs,
      id: "current",
      updatedAt: new Date().toISOString(),
    };

    this.fastCache.storyPrefs = record;
    this.saveFastCache();

    const db = await this.getDB();
    if (!db) return;

    try {
      const tx = db.transaction(STORE_STORY_PREFS, "readwrite");
      tx.objectStore(STORE_STORY_PREFS).put(record);
    } catch (e) {
      console.warn("Failed to write story preferences to IndexedDB:", e);
    }
  }

  // ==========================================
  // VOCABULARY & FAVORITES API
  // ==========================================

  public getVocabularySync(): StoredVocabularyWord[] {
    return Object.values(this.fastCache.vocabulary || {});
  }

  public async saveVocabularyWord(wordItem: StoredVocabularyWord): Promise<void> {
    if (!this.fastCache.vocabulary) {
      this.fastCache.vocabulary = {};
    }
    this.fastCache.vocabulary[wordItem.id] = wordItem;
    this.saveFastCache();

    const db = await this.getDB();
    if (!db) return;

    try {
      const tx = db.transaction(STORE_VOCABULARY, "readwrite");
      tx.objectStore(STORE_VOCABULARY).put(wordItem);
    } catch (e) {
      console.warn("Failed to save word to IndexedDB:", e);
    }
  }

  public async batchSaveVocabulary(words: StoredVocabularyWord[]): Promise<void> {
    if (!this.fastCache.vocabulary) {
      this.fastCache.vocabulary = {};
    }
    words.forEach(w => {
      this.fastCache.vocabulary![w.id] = w;
    });
    this.saveFastCache();

    const db = await this.getDB();
    if (!db) return;

    try {
      const tx = db.transaction(STORE_VOCABULARY, "readwrite");
      const store = tx.objectStore(STORE_VOCABULARY);
      words.forEach(w => store.put(w));
    } catch (e) {
      console.warn("Failed batch save vocabulary to IndexedDB:", e);
    }
  }

  // ==========================================
  // BACKUP & RESTORE (Export / Import JSON)
  // ==========================================

  public async exportDatabaseJSON(): Promise<string> {
    const db = await this.getDB();
    const data: Record<string, any> = {
      version: 1,
      appName: "Polyglot Heaven",
      exportedAt: new Date().toISOString(),
      stores: {
        settings: this.fastCache.settings || null,
        story_preferences: this.fastCache.storyPrefs || null,
        vocabulary: Object.values(this.fastCache.vocabulary || {}),
        progress: this.fastCache.progress || null,
      },
    };

    if (db) {
      try {
        const tx = db.transaction([STORE_SETTINGS, STORE_STORY_PREFS, STORE_VOCABULARY, STORE_PROGRESS], "readonly");
        const getStoreData = (storeName: string): Promise<any> => {
          return new Promise((resolve) => {
            const req = tx.objectStore(storeName).getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => resolve([]);
          });
        };

        const [dbSettings, dbPrefs, dbVocab, dbProg] = await Promise.all([
          getStoreData(STORE_SETTINGS),
          getStoreData(STORE_STORY_PREFS),
          getStoreData(STORE_VOCABULARY),
          getStoreData(STORE_PROGRESS),
        ]);

        if (dbSettings.length > 0) data.stores.settings = dbSettings[0];
        if (dbPrefs.length > 0) data.stores.story_preferences = dbPrefs[0];
        if (dbVocab.length > 0) data.stores.vocabulary = dbVocab;
        if (dbProg.length > 0) data.stores.progress = dbProg[0];
      } catch (e) {
        console.warn("Export reading error:", e);
      }
    }

    return JSON.stringify(data, null, 2);
  }

  public async importDatabaseJSON(jsonString: string): Promise<boolean> {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.stores) return false;

      const { settings, story_preferences, vocabulary, progress } = parsed.stores;

      if (settings) {
        this.fastCache.settings = settings;
      }
      if (story_preferences) {
        this.fastCache.storyPrefs = story_preferences;
      }
      if (Array.isArray(vocabulary)) {
        const dict: Record<string, StoredVocabularyWord> = {};
        vocabulary.forEach((w: StoredVocabularyWord) => {
          dict[w.id] = w;
        });
        this.fastCache.vocabulary = dict;
      }
      if (progress) {
        this.fastCache.progress = progress;
      }

      this.saveFastCache();

      const db = await this.getDB();
      if (db) {
        const tx = db.transaction([STORE_SETTINGS, STORE_STORY_PREFS, STORE_VOCABULARY, STORE_PROGRESS], "readwrite");
        if (settings) tx.objectStore(STORE_SETTINGS).put(settings);
        if (story_preferences) tx.objectStore(STORE_STORY_PREFS).put(story_preferences);
        if (Array.isArray(vocabulary)) {
          const vStore = tx.objectStore(STORE_VOCABULARY);
          vocabulary.forEach(w => vStore.put(w));
        }
        if (progress) tx.objectStore(STORE_PROGRESS).put(progress);
      }

      return true;
    } catch (e) {
      console.error("Failed to import database:", e);
      return false;
    }
  }

  public getDatabaseStats(): {
    isIndexedDBSupported: boolean;
    activeStoryLanguagesCount: number;
    learningLanguagesCount: number;
    masteredLanguagesCount: number;
    vocabularyCount: number;
    favoritesCount: number;
  } {
    const isSupported = typeof window !== "undefined" && "indexedDB" in window;
    const storyLangs = this.fastCache.storyPrefs?.selectedLanguageCodes || [];
    const learning = this.fastCache.settings?.currentlyLearning || [];
    const mastered = this.fastCache.settings?.masteredLanguages || [];
    const vocab = Object.values(this.fastCache.vocabulary || {});
    const favCount = vocab.filter(v => v.isFavorite).length;

    return {
      isIndexedDBSupported: isSupported,
      activeStoryLanguagesCount: storyLangs.length,
      learningLanguagesCount: learning.length,
      masteredLanguagesCount: mastered.length,
      vocabularyCount: vocab.length,
      favoritesCount: favCount,
    };
  }
}

export const polyglotDB = new PolyglotDatabaseService();
