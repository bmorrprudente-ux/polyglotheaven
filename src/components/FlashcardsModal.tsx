import React, { useState, useEffect } from "react";
import { TrackedWord, vocabularyTracker } from "../utils/vocabularyTracker";
import { LANGUAGES } from "../data/languages";
import { explainWordWithAi, WordExplanation } from "../utils/aiExplainer";
import { X, Volume2, Star, Sparkles, RotateCw, ArrowLeft, ArrowRight, Shuffle, CheckCircle2, BookmarkCheck, BookOpen } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";
import { isRtlLang } from "../utils/rtl";

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeLanguageCodes: string[];
  geminiApiKey?: string;
  locale?: SupportedLocale;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  isOpen,
  onClose,
  activeLanguageCodes,
  geminiApiKey,
  locale = "es",
}) => {
  const [words, setWords] = useState<TrackedWord[]>([]);
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [explanation, setExplanation] = useState<WordExplanation | null>(null);
  const [loadingExpl, setLoadingExpl] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  const t = I18N[locale] || I18N.es;

  // Load words when modal opens
  useEffect(() => {
    if (!isOpen) return;
    const all = vocabularyTracker.getWords();
    const favs = vocabularyTracker.getFavorites();
    const list = filterFavorites ? favs : all;
    setWords(list);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [isOpen, filterFavorites]);

  const currentWord = words[currentIndex];

  // Fetch or load explanation for the current card back
  useEffect(() => {
    if (!currentWord) {
      setExplanation(null);
      return;
    }
    let active = true;
    setLoadingExpl(true);

    explainWordWithAi(
      currentWord.word,
      currentWord.langCode,
      currentWord.contextSentence || "",
      activeLanguageCodes,
      geminiApiKey
    ).then(res => {
      if (active) {
        setExplanation(res);
        setLoadingExpl(false);
      }
    }).catch(() => {
      if (active) setLoadingExpl(false);
    });

    return () => {
      active = false;
    };
  }, [currentWord, activeLanguageCodes, geminiApiKey]);

  if (!isOpen) return null;

  const handlePronounce = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentWord || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(currentWord.word);
    u.lang = currentWord.langCode;
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentWord) return;
    const nowFav = vocabularyTracker.toggleFavorite(currentWord.cleanWord, currentWord.langCode);
    setWords(prev => prev.map((w, idx) => idx === currentIndex ? { ...w, isFavorite: nowFav } : w));
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % Math.max(1, words.length));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + words.length) % Math.max(1, words.length));
  };

  const handleShuffle = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleMarkMastered = () => {
    setMasteredCount(prev => prev + 1);
    handleNext();
  };

  const lang = currentWord ? LANGUAGES[currentWord.langCode] || { name: currentWord.langCode, flag: "🌐" } : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-sky-500/10 via-amber-500/10 to-purple-500/10 dark:from-sky-950/40 dark:to-purple-950/40">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-300 flex items-center justify-center font-black">
              🗂️
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                <span>Tarjetas de Memoria</span>
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300">
                  Flashcards
                </span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {words.length > 0 ? `${currentIndex + 1} de ${words.length} palabras repasadas` : "Sin palabras aún"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Filter favorites toggle */}
            <button
              onClick={() => setFilterFavorites(!filterFavorites)}
              className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
                filterFavorites
                  ? "bg-amber-100 dark:bg-amber-950 border-amber-400 text-amber-800 dark:text-amber-300 shadow-xs"
                  : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100"
              }`}
              title="Filtrar solo palabras favoritas"
            >
              <Star className={`w-3.5 h-3.5 ${filterFavorites ? "fill-amber-500 text-amber-500" : "text-gray-400"}`} />
              <span className="hidden sm:inline">Favoritas</span>
            </button>

            {/* Shuffle */}
            {words.length > 1 && (
              <button
                onClick={handleShuffle}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 transition-all"
                title="Mezclar tarjetas"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto flex flex-col justify-center items-center">
          {words.length === 0 ? (
            <div className="py-12 text-center max-w-sm">
              <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center text-3xl mx-auto mb-4">
                ⭐
              </div>
              <h4 className="text-base font-black text-gray-900 dark:text-white mb-2">
                {filterFavorites ? "No tienes palabras favoritas aún" : "Tu mazo está vacío"}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {filterFavorites
                  ? "Marca con la estrella ⭐ cualquier palabra en las historias o en el vocabulario para crear tu mazo de repaso prioritario."
                  : "Explora los microcuentos y haz clic en las palabras que te llamen la atención para agregarlas automáticamente a tu mazo de tarjetas."}
              </p>
              {filterFavorites && (
                <button
                  onClick={() => setFilterFavorites(false)}
                  className="px-4 py-2 rounded-xl bg-duo-green text-white font-extrabold text-xs shadow-duo"
                >
                  Ver todas las palabras
                </button>
              )}
            </div>
          ) : currentWord ? (
            <div className="w-full flex flex-col items-center">
              
              {/* Flip Flashcard Box */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full min-h-[300px] sm:min-h-[340px] bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl p-6 shadow-xl cursor-pointer select-none transition-all duration-300 hover:shadow-2xl hover:border-amber-300 dark:hover:border-amber-600 flex flex-col justify-between relative group"
              >
                {/* Top Card Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">{lang?.flag || "🌐"}</span>
                    <span className="text-xs font-black text-gray-700 dark:text-gray-300">
                      {lang?.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePronounce}
                      className="p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-amber-600 dark:text-amber-300 hover:scale-105 transition-transform"
                      title="Escuchar pronunciación"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleToggleFav}
                      className="p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-amber-500 hover:scale-105 transition-transform"
                      title="Añadir a favoritas"
                    >
                      <Star className={`w-4 h-4 ${currentWord.isFavorite ? "fill-amber-500 text-amber-500" : "text-gray-400"}`} />
                    </button>
                  </div>
                </div>

                {/* Center Content: Front vs Back */}
                {!isFlipped ? (
                  /* FRONT OF CARD */
                  <div className="my-auto text-center py-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-2">
                      Palabra en contexto
                    </span>
                    <h2
                      dir={isRtlLang(currentWord.langCode) ? "rtl" : "ltr"}
                      className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white capitalize mb-4 tracking-tight"
                    >
                      {currentWord.word}
                    </h2>

                    {currentWord.contextSentence && (
                      <p
                        dir={isRtlLang(currentWord.langCode) ? "rtl" : "ltr"}
                        className="text-xs sm:text-sm italic text-gray-600 dark:text-gray-300 max-w-md mx-auto bg-amber-50/60 dark:bg-slate-800/80 p-3 rounded-2xl border border-amber-200/50 dark:border-slate-700"
                      >
                        "{currentWord.contextSentence}"
                      </p>
                    )}

                    <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400 font-bold">
                      <RotateCw className="w-3.5 h-3.5 animate-spin-slow text-amber-500" />
                      <span>Haz clic para voltear</span>
                    </div>
                  </div>
                ) : (
                  /* BACK OF CARD */
                  <div className="my-auto text-left py-2 space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="text-2xl font-black text-gray-900 dark:text-white capitalize">
                        {currentWord.word}
                      </span>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {explanation?.isAiGenerated && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                            <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                            <span>GPT-6 Luna</span>
                          </span>
                        )}
                        {explanation?.partOfSpeech && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300">
                            {explanation.partOfSpeech}
                          </span>
                        )}
                      </div>
                    </div>

                    {explanation?.ipa && (
                      <p className="font-mono text-xs text-amber-600 dark:text-amber-400 font-bold">
                        {explanation.ipa}
                      </p>
                    )}

                    {/* Definition */}
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                        Significado
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-slate-100 leading-relaxed">
                        {explanation?.definition || currentWord.translation || "Cargando definición..."}
                      </p>
                    </div>

                    {/* Cross-Language Equivalents */}
                    {explanation?.equivalents && Object.keys(explanation.equivalents).length > 0 && (
                      <div className="grid grid-cols-2 gap-1.5">
                        {Object.entries(explanation.equivalents).slice(0, 4).map(([code, eq]) => {
                          const l = LANGUAGES[code];
                          return (
                            <div key={code} className="px-2 py-1.5 rounded-xl bg-gray-100/70 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 text-[11px] flex items-center justify-between gap-1">
                              <span className="font-bold text-gray-500 truncate">{l?.flag} {l?.name.split(" ")[0]}</span>
                              <span className="font-black text-gray-900 dark:text-white truncate">{eq}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Flip Indicator */}
                <div className="pt-2 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-gray-400 font-bold">
                  <span>Cara: {isFlipped ? "Reverso (Traducción)" : "Anverso (Palabra)"}</span>
                  <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    <RotateCw className="w-3 h-3" /> Voltear
                  </span>
                </div>
              </div>

              {/* Action Controls */}
              <div className="w-full mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:bg-gray-100 text-gray-700 dark:text-gray-200 font-bold text-xs flex items-center gap-1 shadow-xs transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleNext}
                    className="px-4 py-2.5 rounded-2xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 text-gray-700 dark:text-gray-300 font-extrabold text-xs transition-all"
                  >
                    Repasar luego
                  </button>
                  <button
                    onClick={handleMarkMastered}
                    className="px-5 py-2.5 rounded-2xl bg-duo-green hover:bg-duo-green-dark text-white font-extrabold text-xs shadow-duo flex items-center gap-1.5 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>¡Me la sé!</span>
                  </button>
                </div>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:bg-gray-100 text-gray-700 dark:text-gray-200 font-bold text-xs flex items-center gap-1 shadow-xs transition-all"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : null}
        </div>

      </div>
    </div>
  );
};
