import React, { useState, useEffect } from "react";
import { explainWordWithAi, WordExplanation } from "../utils/aiExplainer";
import { vocabularyTracker } from "../utils/vocabularyTracker";
import { LANGUAGES } from "../data/languages";
import { X, Volume2, Bookmark, Check, Sparkles, Loader2, RefreshCw, AlertTriangle, Star } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";
import { isRtlLang } from "../utils/rtl";

interface WordInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: string | null;
  langCode?: string;
  contextSentence?: string;
  activeLanguageCodes: string[];
  geminiApiKey?: string;
  locale?: SupportedLocale;
  onOpenFlashcards?: () => void;
}

export const WordInspectorModal: React.FC<WordInspectorModalProps> = ({
  isOpen,
  onClose,
  word,
  langCode,
  contextSentence = "",
  activeLanguageCodes,
  geminiApiKey,
  locale = "es",
  onOpenFlashcards,
}) => {
  const [loading, setLoading] = useState(true);
  const [explanation, setExplanation] = useState<WordExplanation | null>(null);
  const [saved, setSaved] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [flashcardCreated, setFlashcardCreated] = useState(false);

  const t = I18N[locale] || I18N.es;
  const actualLangCode = langCode || "es-ES";
  const lang = LANGUAGES[actualLangCode] || { name: actualLangCode, flag: "🌐" };

  const loadExplanation = (force: boolean = false) => {
    if (!word) return;
    setLoading(true);
    explainWordWithAi(word, actualLangCode, contextSentence, activeLanguageCodes, geminiApiKey, force)
      .then(res => {
        setExplanation(res);
        setLoading(false);
        // Automatically save with full definition into vocabulary tracker / flashcards
        if (res && res.definition) {
          vocabularyTracker.recordWord(word, actualLangCode, contextSentence, res.definition);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!isOpen || !word) return;
    setSaved(false);
    setFlashcardCreated(false);
    setIsFav(vocabularyTracker.isFavorite(word, actualLangCode));

    // Automatically record word encounter in Vocabulary Tracker
    vocabularyTracker.recordWord(word, actualLangCode, contextSentence);

    loadExplanation(false);
  }, [isOpen, word, actualLangCode, contextSentence, activeLanguageCodes, geminiApiKey]);

  if (!isOpen) return null;

  const handlePronounce = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(word || "");
      u.lang = actualLangCode;
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  const handleCreateFlashcard = () => {
    if (!word) return;
    vocabularyTracker.recordWord(word, actualLangCode, contextSentence, explanation?.definition);
    vocabularyTracker.toggleFavorite(word, actualLangCode);
    setIsFav(true);
    setSaved(true);
    setFlashcardCreated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-5 pb-4 border-b border-gray-200 dark:border-slate-800 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 dark:from-amber-950/40 dark:to-orange-950/40">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xl">{lang.flag}</span>
                <span className="text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                  {lang.name}
                </span>
                {explanation?.partOfSpeech && (
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300">
                    {explanation.partOfSpeech}
                  </span>
                )}
                {explanation?.isAiGenerated && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{explanation.modelUsed?.includes("Luna") || explanation.modelUsed?.includes("GPT-6") ? "GPT-6 Luna" : (explanation.modelUsed || "AI")}</span>
                  </span>
                )}
              </div>
              <h3
                dir={isRtlLang(actualLangCode) ? "rtl" : "ltr"}
                className={`text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight ${
                  isRtlLang(actualLangCode) ? "text-right" : "text-left"
                }`}
              >
                {word}
              </h3>
              {explanation?.ipa && (
                <p className="font-mono text-xs text-gray-500 dark:text-gray-400 font-bold mt-0.5">
                  {explanation.ipa}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePronounce}
                title={t.pronounceWord}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-xs transition-all"
              >
                <Volume2 className="w-4 h-4 text-amber-600" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin text-amber-500 mb-3" />
              <p className="text-xs font-bold">{t.loadingDictionary}</p>
            </div>
          ) : explanation ? (
            <>
              {/* API Error Alert if any */}
              {explanation.apiError && (
                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs">
                  <p className="font-bold flex items-center gap-1.5 mb-0.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>Aviso de Google Gemini API</span>
                  </p>
                  <p className="text-[11px] leading-tight font-medium opacity-90">
                    {explanation.apiError}. Revisa tu clave en Ajustes. Mostrando datos léxicos alternativos.
                  </p>
                </div>
              )}

              {/* Definition */}
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-400 block mb-1">
                  {t.contextDefinition}
                </span>
                <p className="text-sm font-bold text-gray-900 dark:text-slate-100 leading-relaxed">
                  {explanation.definition}
                </p>
              </div>

              {/* Context / Example */}
              {contextSentence && (
                <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 block mb-1">
                    {t.storySentence}
                  </span>
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200 italic">
                    "{contextSentence}"
                  </p>
                </div>
              )}

              {/* Cross-Language Equivalents */}
              {explanation.equivalents && Object.keys(explanation.equivalents).length > 0 && (
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                      <span className="text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        {t.crossEquivalents}
                      </span>
                    </div>

                    {/* Button to query or re-query Gemini AI */}
                    <button
                      onClick={() => loadExplanation(true)}
                      disabled={loading}
                      className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors"
                      title="Volver a consultar con Gemini AI"
                    >
                      <RefreshCw className="w-3 h-3 text-purple-500" />
                      <span>{explanation.isAiGenerated ? "Actualizar IA" : "Consultar IA"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(explanation.equivalents).map(([code, eq]) => {
                      const l = LANGUAGES[code];
                      return (
                        <div
                          key={code}
                          className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 flex items-center justify-between gap-2 shadow-xs"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 dark:text-gray-400 truncate">
                              <span>{l?.flag || "🌐"}</span>
                              <span className="truncate">{l?.name.split(" ")[0] || code}</span>
                            </div>
                            <span
                              dir={isRtlLang(code) ? "rtl" : "ltr"}
                              className={`text-xs font-extrabold text-gray-900 dark:text-white truncate block ${
                                isRtlLang(code) ? "text-right font-sans" : "text-left"
                              }`}
                            >
                              {eq}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Notes */}
              {explanation.notes && (
                <p className="text-[11px] text-gray-600 dark:text-gray-400 italic">
                  💡 {explanation.notes}
                </p>
              )}
            </>
          ) : (
            <p className="text-center py-6 text-xs text-gray-500">No se pudo cargar la información.</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {/* Create Flashcard Button */}
            <button
              onClick={handleCreateFlashcard}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                flashcardCreated || isFav
                  ? "bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border border-amber-400 font-black"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black hover:opacity-95"
              }`}
              title="Crear tarjeta de memoria con esta definición generada por GPT-6 Luna"
            >
              <span>🗂️</span>
              <span>{flashcardCreated || isFav ? "¡Tarjeta creada! ⭐" : "Crear Flashcard"}</span>
            </button>

            {/* Quick link to practice flashcards if callback exists */}
            {onOpenFlashcards && (flashcardCreated || isFav) && (
              <button
                onClick={() => {
                  onClose();
                  onOpenFlashcards();
                }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 text-xs font-extrabold hover:bg-purple-200 transition-colors"
                title="Abrir el mazo de tarjetas para practicar"
              >
                <span>Practicar</span>
                <span>→</span>
              </button>
            )}

            <button
              onClick={() => {
                setSaved(true);
                if (word) {
                  vocabularyTracker.recordWord(word, actualLangCode, contextSentence, explanation?.definition);
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                saved
                  ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700"
              }`}
            >
              {saved ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Bookmark className="w-3.5 h-3.5" />}
              <span>{saved ? t.savedInVocabulary : t.saveToVocabulary}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-extrabold text-xs rounded-xl transition-all"
          >
            {t.readyButton(1).split(" ")[0]}
          </button>
        </div>

      </div>
    </div>
  );
};
