import React, { useState } from "react";
import { DialogueLine } from "../data/stories";
import { CHARACTERS } from "../data/characters";
import { LANGUAGES, Language } from "../data/languages";
import { Volume2, VolumeX, Mic, ChevronDown, Sparkles, Info, Flag, ChevronLeft, ChevronRight } from "lucide-react";
import { audioPlayer } from "../utils/audioPlayer";
import { getIpaTranscription } from "../utils/ipaConverter";
import { voiceFlagger } from "../utils/voiceFlagger";
import { segmentSentence } from "../utils/textSegmenter";
import { I18N, SupportedLocale } from "../utils/i18n";
import { isRtlLang } from "../utils/rtl";

interface ParallelSentenceRowProps {
  line: DialogueLine;
  lineNumber: number;
  totalLines?: number;
  activeLanguageCodes: string[];
  activeAudioId: string | null;
  showPhonetics: boolean;
  onSelectWord: (word: string, contextTranslation?: string, targetLangCode?: string) => void;
  onSpeakerActive: (characterId: string) => void;
  onOpenFactCard: (lang: Language) => void;
  onExplainPhrase: (phrase: string, langCode: string, characterId: string) => void;
  onMoveLanguage?: (langCode: string, direction: "left" | "right") => void;
  locale?: SupportedLocale;
}

export const ParallelSentenceRow: React.FC<ParallelSentenceRowProps> = ({
  line,
  lineNumber,
  totalLines = 15,
  activeLanguageCodes,
  activeAudioId,
  showPhonetics,
  onSelectWord,
  onSpeakerActive,
  onOpenFactCard,
  onExplainPhrase,
  onMoveLanguage,
  locale = "es",
}) => {
  const character = CHARACTERS[line.characterId];
  const t = I18N[locale] || I18N.es;
  const [, setRerender] = useState(0);

  const handleScrollToNext = () => {
    const nextElem = document.getElementById(`line-${lineNumber + 1}`);
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth", block: "center" });
      nextElem.classList.add("ring-4", "ring-sky-400", "animate-pulse");
      setTimeout(() => {
        nextElem.classList.remove("ring-4", "ring-sky-400", "animate-pulse");
      }, 1500);
    }
  };

  const handleToggleFlagVoice = (langCode: string) => {
    voiceFlagger.toggleFlag(langCode);
    setRerender(prev => prev + 1);
  };

  return (
    <div
      id={`line-${lineNumber}`}
      className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-gray-200/90 dark:border-slate-800 shadow-duo-card transition-all hover:border-gray-300 dark:hover:border-slate-700 scroll-mt-24"
    >
      {/* Speaker Header */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-sm bg-gray-50 dark:bg-slate-800 flex-shrink-0">
            <img src={character?.avatar} alt={character?.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                {t.phraseNumber(lineNumber)}
              </span>
              <h4 className="font-extrabold text-base text-gray-900 dark:text-white">{character?.name}</h4>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${character?.bgBadge}`}>
                {character?.subtitle}
              </span>
            </div>
            {line.defaultStageDirection && (
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-0.5">
                ({line.defaultStageDirection})
              </p>
            )}
          </div>
        </div>

        {/* Top-Right Next Phrase Button */}
        {lineNumber < totalLines && (
          <button
            onClick={handleScrollToNext}
            className="flex items-center gap-1.5 text-xs font-black text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 px-3 py-1.5 rounded-xl border border-sky-200 dark:border-sky-800 transition-all shadow-xs active:scale-95"
            title="Saltar a la siguiente frase"
          >
            <span>{t.nextPhrase}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Grid of Active Languages */}
      <div
        className={`grid gap-4 ${
          activeLanguageCodes.length === 1
            ? "grid-cols-1"
            : activeLanguageCodes.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {activeLanguageCodes.map((langCode) => {
          const lang = LANGUAGES[langCode];
          if (!lang) return null;

          const translation = line.translations[langCode] || line.translations["es-ES"];
          if (!translation) return null;

          const isDraftFallback = !line.translations[langCode] && langCode !== "es-ES";
          const audioId = `${line.id}_${langCode}`;
          const isPlaying = activeAudioId === audioId;
          const voiceModel = (lang.characterVoices as any)[line.characterId] || 
            (line.characterId === "narrator" ? lang.characterVoices.clara : lang.characterVoices.hugo);
          const hasVoice = lang.hasVoiceModel !== false && voiceModel && !voiceModel.label.includes("Sin modelo");
          const isFlagged = voiceFlagger.isFlagged(langCode);
          const ipaString = translation.phonetic || getIpaTranscription(translation.text, line.translations[langCode] ? langCode : "es-ES");

          return (
            <div
              key={langCode}
              className={`flex flex-col justify-between p-4 rounded-2xl border-2 transition-all duration-200 ${
                isPlaying
                  ? "bg-sky-50/90 dark:bg-sky-950/40 border-duo-blue ring-2 ring-duo-blue/20 shadow-md"
                  : "bg-gray-50/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800/80 border-gray-200/80 dark:border-slate-700/80 hover:border-gray-300 dark:hover:border-slate-600 shadow-sm"
              }`}
            >
              <div>
                {/* Language Header: Flag, Name, (i) Fact Card, Flag Mismatch, AI Explainer, Audio Button */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-lg filter drop-shadow-xs flex-shrink-0">{lang.flag}</span>
                    <span className="font-bold text-xs text-gray-800 dark:text-slate-100 truncate">
                      {lang.name}
                    </span>
                    {langCode === "es-ES" && (
                      <span
                        className="text-[9px] font-black uppercase text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.5 rounded flex-shrink-0"
                        title="Versión original de referencia en Español de España"
                      >
                        Original
                      </span>
                    )}
                    {isDraftFallback && (
                      <span
                        className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 px-1.5 py-0.5 rounded flex-shrink-0"
                        title="Este cuento aún no tiene traducción a este idioma. Mostrando versión original en español de España."
                      >
                        Borrador ES
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => onOpenFactCard(lang)}
                      className="p-1 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex-shrink-0"
                      title={t.factCardTooltip(lang.name)}
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>

                    {/* Reorder tile column left/right */}
                    {onMoveLanguage && activeLanguageCodes.length > 1 && (
                      <div className="flex items-center -space-x-0.5 opacity-60 hover:opacity-100 transition-opacity ml-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveLanguage(langCode, "left");
                          }}
                          disabled={activeLanguageCodes.indexOf(langCode) === 0}
                          className="p-1 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 disabled:opacity-20 disabled:hover:text-gray-400 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                          title="Mover esta columna a la izquierda"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveLanguage(langCode, "right");
                          }}
                          disabled={activeLanguageCodes.indexOf(langCode) === activeLanguageCodes.length - 1}
                          className="p-1 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 disabled:opacity-20 disabled:hover:text-gray-400 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                          title="Mover esta columna a la derecha"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {/* Flag Mismatched Voice Button */}
                    <button
                      type="button"
                      onClick={() => handleToggleFlagVoice(langCode)}
                      className={`p-1.5 rounded-xl border transition-all ${
                        isFlagged
                          ? "bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700 shadow-xs"
                          : "bg-white dark:bg-slate-800 text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 border-gray-200 dark:border-slate-700"
                      }`}
                      title={isFlagged ? t.flaggedVoiceActive : t.flagVoiceMismatch}
                    >
                      <Flag className={`w-3.5 h-3.5 ${isFlagged ? "fill-amber-500 text-amber-600" : ""}`} />
                    </button>

                    {/* AI Phrase Explainer / Ask AI Button */}
                    <button
                      type="button"
                      onClick={() => onExplainPhrase(translation.text, langCode, line.characterId)}
                      className="p-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-all shadow-xs"
                      title={t.askAiAboutSentence}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>

                    {/* Audio Play Button */}
                    {hasVoice ? (
                      <button
                        onClick={() => {
                          onSpeakerActive(line.characterId);
                          audioPlayer.playLine({
                            id: audioId,
                            audioUrl: translation.audioUrl,
                            spokenText: translation.text,
                            langCode: line.translations[langCode] ? lang.code : "es-ES",
                            characterId: line.characterId,
                          });
                        }}
                        className={`flex items-center gap-1.5 py-1 px-3 rounded-xl font-bold text-xs transition-all duration-100 ${
                          isPlaying
                            ? "bg-duo-blue text-white shadow-duo-blue translate-y-0.5"
                            : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-sm active:translate-y-0.5"
                        }`}
                        title={`Escuchar frase en ${lang.name}`}
                      >
                        {isPlaying ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>{t.listening}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-duo-blue" />
                            <span>{t.listen}</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex items-center gap-1.5 py-1 px-2.5 rounded-xl font-bold text-[11px] bg-gray-100 dark:bg-slate-800/80 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-slate-700 cursor-not-allowed opacity-75"
                        title={t.noModelTooltip}
                      >
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>{t.noModelAvailable}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Specific Voice Engine Model Badge */}
                {voiceModel && (
                  <div className="mb-2.5 flex items-center gap-1.5 flex-wrap">
                    <span
                      className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 shadow-xs"
                      title={`Motor y modelo: ${voiceModel.modelId}`}
                    >
                      <Mic className="w-2.5 h-2.5 text-sky-500" />
                      <span className="font-mono text-[9px] text-sky-600 dark:text-sky-400">[{voiceModel.type}]</span>
                      <span className="truncate max-w-[200px]">{voiceModel.modelId}</span>
                    </span>
                    {isFlagged && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                        Voz discordante
                      </span>
                    )}
                  </div>
                )}

                {/* Spoken Text - FULL COMPLETE SENTENCE with Individual Clickable Words (CJK & Polyglot) */}
                {(() => {
                  const isRtl = isRtlLang(langCode);
                  return (
                    <div
                      dir={isRtl ? "rtl" : "ltr"}
                      className={`text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-relaxed mb-2 ${
                        isRtl ? "text-right font-sans" : "text-left"
                      }`}
                    >
                      {segmentSentence(translation.text, langCode).map((token, pIdx) => {
                        if (!token.isWord) {
                          return (
                            <span key={pIdx} className="text-gray-900 dark:text-white">
                              {token.text}
                            </span>
                          );
                        }
                        return (
                          <button
                            key={pIdx}
                            type="button"
                            onClick={() => onSelectWord(token.cleanWord, translation.text, langCode)}
                            className={`inline hover:bg-amber-100 dark:hover:bg-amber-950/60 hover:text-amber-900 dark:hover:text-amber-200 px-0.5 py-0.5 rounded transition-colors cursor-pointer border-b border-dotted border-transparent hover:border-amber-400 font-bold ${
                              isRtl ? "text-right" : "text-left"
                            }`}
                            title={t.clickToTranslate(token.cleanWord)}
                          >
                            {token.text}
                          </button>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* Phonetics Bar (IPA - Full Sentence, No Cutoff) */}
                {showPhonetics && ipaString && (
                  <div
                    dir="ltr"
                    className="mt-2 pt-2 border-t border-gray-200/60 dark:border-slate-700/60 font-mono text-[11px] text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-slate-800/60 p-2 rounded-xl break-words leading-normal text-left"
                  >
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mr-1.5 select-none">
                      IPA:
                    </span>
                    <span>{ipaString}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
