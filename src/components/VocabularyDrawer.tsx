import React, { useState, useEffect } from "react";
import { vocabularyTracker, TrackedWord } from "../utils/vocabularyTracker";
import { LANGUAGES } from "../data/languages";
import { X, BookOpen, Trash2, Search, ExternalLink, Sparkles, CheckCircle2, Flame } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface VocabularyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWord: (word: string, contextSentence?: string, langCode?: string) => void;
  locale?: SupportedLocale;
}

export const VocabularyDrawer: React.FC<VocabularyDrawerProps> = ({
  isOpen,
  onClose,
  onSelectWord,
  locale = "es",
}) => {
  const t = I18N[locale] || I18N.es;
  const [selectedLang, setSelectedLang] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"learning" | "mastered">("learning");
  const [words, setWords] = useState<TrackedWord[]>(() => vocabularyTracker.getWords());

  // Reload words every time drawer is opened
  useEffect(() => {
    if (isOpen) {
      setWords(vocabularyTracker.getWords());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClear = () => {
    if (window.confirm(t.confirmClear)) {
      vocabularyTracker.clearAll();
      setWords([]);
    }
  };

  const filteredWords = words.filter(item => {
    const matchesLang = selectedLang === "all" || item.langCode === selectedLang;
    const matchesSearch = item.cleanWord.includes(searchTerm.toLowerCase()) ||
      (item.contextSentence && item.contextSentence.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesLang && matchesSearch;
  });

  const learningWords = filteredWords.filter(w => w.encounterCount < 10);
  const masteredWords = filteredWords.filter(w => w.encounterCount >= 10);

  const displayedWords = activeTab === "learning" ? learningWords : masteredWords;

  const countsByLang = vocabularyTracker.getCountByLang();
  const availableLangs = Object.keys(countsByLang);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col border-l border-gray-200 dark:border-slate-800 transition-all">
        
        {/* Header */}
        <div className="p-5 pb-3 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center font-black">
              📚
            </div>
            <div>
              <h3 className="text-base font-black text-gray-900 dark:text-white">
                {t.discoveredVocabulary}
              </h3>
              <p className="text-[11px] text-gray-400 font-bold">{t.wordsCount(words.length)}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-4 pb-2 space-y-2.5 border-b border-gray-100 dark:border-slate-800">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchWordPlaceholder}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Language filter pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedLang("all")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                selectedLang === "all"
                  ? "bg-amber-500 text-white shadow-xs"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {t.allFilter} ({words.length})
            </button>
            {availableLangs.map(code => {
              const lang = LANGUAGES[code];
              return (
                <button
                  key={code}
                  onClick={() => setSelectedLang(code)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap flex items-center gap-1 transition-all ${
                    selectedLang === code
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <span>{lang?.flag || "🌐"}</span>
                  <span>{lang?.name.split(" ")[0] || code}</span>
                  <span className="opacity-70 text-[9px]">({countsByLang[code]})</span>
                </button>
              );
            })}
          </div>

          {/* Sections Tabs: Vistas 1-9 veces vs Vistas 10+ veces */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => setActiveTab("learning")}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-black transition-all ${
                activeTab === "learning"
                  ? "bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border-2 border-amber-400 shadow-xs"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.section1to10} ({learningWords.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("mastered")}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-black transition-all ${
                activeTab === "mastered"
                  ? "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 border-2 border-emerald-400 shadow-xs"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{t.section10plus} ({masteredWords.length})</span>
            </button>
          </div>
        </div>

        {/* Word List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {displayedWords.length === 0 ? (
            <div className="text-center py-12 text-gray-400 dark:text-gray-500 px-4">
              <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-40" />
              <p className="text-xs font-bold text-gray-600 dark:text-gray-300">{t.noWordsInCategory}</p>
              <p className="text-[11px] mt-1 text-gray-400">{t.noWordsHint}</p>
            </div>
          ) : (
            displayedWords.map((item, idx) => {
              const lang = LANGUAGES[item.langCode];
              return (
                <div
                  key={`${item.langCode}-${item.cleanWord}-${idx}`}
                  className="p-3 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:border-amber-400 dark:hover:border-amber-500/60 transition-all shadow-xs group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <button
                      onClick={() => {
                        onSelectWord(item.cleanWord, item.contextSentence, item.langCode);
                        onClose();
                      }}
                      className="text-left font-black text-sm text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1.5"
                    >
                      <span>{item.word}</span>
                      <Sparkles className="w-3 h-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">{lang?.flag || "🌐"}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        item.encounterCount >= 10
                          ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black"
                          : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300"
                      }`}>
                        x{item.encounterCount}
                      </span>
                    </div>
                  </div>

                  {item.contextSentence && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic line-clamp-2">
                      "{item.contextSentence}"
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer with Clear button */}
        {words.length > 0 && (
          <div className="p-3 px-4 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center text-xs">
            <span className="text-gray-400 font-bold">{words.length} registradas</span>
            <button
              onClick={handleClear}
              className="flex items-center gap-1 text-red-500 hover:text-red-600 font-bold transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{t.clearAllWords}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
