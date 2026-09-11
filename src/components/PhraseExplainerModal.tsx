import React, { useState, useEffect } from "react";
import { explainPhraseWithAi, PhraseExplanation } from "../utils/aiExplainer";
import { LANGUAGES } from "../data/languages";
import { CHARACTERS } from "../data/characters";
import { X, Sparkles, BookOpen, Lightbulb, CheckCircle2, Loader2 } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface PhraseExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  phrase: string;
  langCode: string;
  characterId: string;
  geminiApiKey?: string;
  locale?: SupportedLocale;
}

export const PhraseExplainerModal: React.FC<PhraseExplainerModalProps> = ({
  isOpen,
  onClose,
  phrase,
  langCode,
  characterId,
  geminiApiKey,
  locale = "es",
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PhraseExplanation | null>(null);

  const t = I18N[locale] || I18N.es;
  const lang = LANGUAGES[langCode] || { name: langCode, flag: "🌐" };
  const character = CHARACTERS[characterId];

  useEffect(() => {
    if (!isOpen || !phrase) return;

    let mounted = true;
    setLoading(true);

    explainPhraseWithAi(phrase, lang.name, langCode, character?.name || "Personaje", geminiApiKey)
      .then(res => {
        if (mounted) {
          setData(res);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [isOpen, phrase, langCode, characterId, geminiApiKey]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500/15 via-sky-500/15 to-emerald-500/15 dark:from-purple-950/40 dark:to-sky-950/40 p-5 pb-4 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-gray-900 dark:text-white">
                    {t.aiExplainerTitle}
                  </h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-extrabold px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                    {lang.flag} {lang.name}
                  </span>
                </div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.phraseSaidBy(character?.name || "Personaje")}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Phrase Quote Box */}
        <div className="p-4 bg-gray-50 dark:bg-slate-800/40 border-b border-gray-100 dark:border-slate-800">
          <p className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white italic">
            "{phrase}"
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin text-purple-500 mb-3" />
              <p className="text-xs font-bold">{t.loadingAnalysis}</p>
            </div>
          ) : data ? (
            <>
              {/* Idiomatic Meaning */}
              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40">
                <div className="flex items-center gap-1.5 text-xs font-black text-sky-800 dark:text-sky-300 uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  <span>{t.pragmaticMeaning}</span>
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-slate-100">
                  {data.idiomaticMeaning}
                </p>
              </div>

              {/* Cultural & Dialect Nuances */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>{t.dialectNuance}</span>
                </div>
                <p className="text-xs font-medium text-gray-700 dark:text-gray-200 leading-relaxed mb-2">
                  {data.culturalNotes}
                </p>
                {data.dialectNuances && (
                  <p className="text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100/60 dark:bg-amber-900/40 p-2 rounded-xl">
                    🎯 {data.dialectNuances}
                  </p>
                )}
              </div>

              {/* Grammar Breakdown */}
              {data.grammarBreakdown && data.grammarBreakdown.length > 0 && (
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40">
                  <div className="flex items-center gap-1.5 text-xs font-black text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-2">
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    <span>{t.grammarBreakdown}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {data.grammarBreakdown.map((item, idx) => (
                      <li key={idx} className="text-xs font-medium text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p className="text-center py-6 text-xs text-gray-500">No se pudo cargar la explicación.</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-extrabold text-xs rounded-xl transition-all"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
