import React, { useState } from "react";
import { Story } from "../data/stories";
import { CHARACTERS } from "../data/characters";
import { LANGUAGES, Language } from "../data/languages";
import { Volume2, VolumeX, Mic, Shuffle, Sparkles, Info, ChevronDown, Flag } from "lucide-react";
import { audioPlayer } from "../utils/audioPlayer";
import { getIpaTranscription } from "../utils/ipaConverter";
import { voiceFlagger } from "../utils/voiceFlagger";
import { segmentSentence } from "../utils/textSegmenter";
import { I18N, SupportedLocale } from "../utils/i18n";
import { isRtlLang } from "../utils/rtl";

interface CodeSwitchingViewProps {
  story: Story;
  activeAudioId: string | null;
  showPhonetics: boolean;
  onSelectWord: (word: string, contextTranslation?: string, targetLangCode?: string) => void;
  onSpeakerActive: (characterId: string) => void;
  onOpenFactCard: (lang: Language) => void;
  onExplainPhrase: (phrase: string, langCode: string, characterId: string, allTranslations?: Record<string, string>) => void;
  locale?: SupportedLocale;
}

export const CodeSwitchingView: React.FC<CodeSwitchingViewProps> = ({
  story,
  activeAudioId,
  showPhonetics,
  onSelectWord,
  onSpeakerActive,
  onOpenFactCard,
  onExplainPhrase,
  locale = "es",
}) => {
  const t = I18N[locale] || I18N.es;
  const [, setRerender] = useState(0);

  const [characterLanguages, setCharacterLanguages] = useState<Record<string, string>>({
    hugo: "es-MX",
    clara: "fr-FR",
    don_ramon: "es-DO",
    mateo: "de-DE",
    bea: "pt-BR",
    narrator: "es-ES",
    narrator_male: "es-ES",
  });

  const handleLanguageChange = (charId: string, langCode: string) => {
    setCharacterLanguages((prev) => ({
      ...prev,
      [charId]: langCode,
    }));
  };

  const handleRandomize = () => {
    const keys = Object.keys(LANGUAGES);
    const updated: Record<string, string> = {};
    story.characters.forEach((charId, idx) => {
      updated[charId] = keys[(idx * 7 + 3) % keys.length];
    });
    setCharacterLanguages((prev) => ({ ...prev, ...updated }));
  };

  const handleScrollToNext = (targetIndex: number) => {
    const nextElem = document.getElementById(`dialogue-line-${targetIndex}`);
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth", block: "center" });
      nextElem.classList.add("ring-4", "ring-purple-400", "animate-pulse");
      setTimeout(() => {
        nextElem.classList.remove("ring-4", "ring-purple-400", "animate-pulse");
      }, 1500);
    }
  };

  const handleToggleFlagVoice = (langCode: string) => {
    voiceFlagger.toggleFlag(langCode);
    setRerender(prev => prev + 1);
  };

  return (
    <div className="space-y-6">
      
      {/* Control Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-gray-200/90 dark:border-slate-800 shadow-duo-card">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔀</span>
              <h3 className="font-extrabold text-base sm:text-lg text-gray-900 dark:text-white">
                {t.dialogueModeTitle}
              </h3>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mt-0.5">
              {t.dialogueModeDesc}
            </p>
          </div>
          <button
            onClick={handleRandomize}
            className="btn-duo-white text-xs py-1.5 px-3 flex items-center gap-1.5"
          >
            <Shuffle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>{t.shuffleLanguages}</span>
          </button>
        </div>

        {/* Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {story.characters.map((charId) => {
            const char = CHARACTERS[charId];
            const currentLangCode = characterLanguages[charId] || "es-ES";

            return (
              <div
                key={charId}
                className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <img
                    src={char.avatar}
                    alt={char.name}
                    className="w-8 h-8 rounded-xl object-cover border border-gray-300 dark:border-slate-600 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-black text-gray-900 dark:text-white truncate">{char.name}</div>
                    <div className="text-[10px] text-gray-400 font-bold">{t.speaksIn}</div>
                  </div>
                </div>

                <select
                  value={currentLangCode}
                  onChange={(e) => handleLanguageChange(charId, e.target.value)}
                  className="bg-white dark:bg-slate-800 text-xs font-bold text-gray-800 dark:text-white rounded-xl px-2.5 py-1.5 border border-gray-300 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-duo-blue max-w-[140px]"
                >
                  {Object.values(LANGUAGES).map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialogue Stream */}
      <div className="space-y-4">
        {story.lines.map((line, idx) => {
          const char = CHARACTERS[line.characterId];
          const langCode = characterLanguages[line.characterId] || "es-ES";
          const lang = LANGUAGES[langCode] || LANGUAGES["es-ES"];
          const translation = line.translations[langCode] || line.translations["es-ES"];
          const voiceModel = (lang?.characterVoices as any)?.[line.characterId] || 
            (line.characterId === "narrator" ? lang?.characterVoices?.clara : lang?.characterVoices?.hugo);
          const hasVoice = lang.hasVoiceModel !== false && voiceModel && !voiceModel.label.includes("Sin modelo");
          const isFlagged = voiceFlagger.isFlagged(langCode);
          const audioId = `switch_${line.id}_${langCode}`;
          const isPlaying = activeAudioId === audioId;
          const ipaString = translation.phonetic || getIpaTranscription(translation.text, langCode);

          return (
            <div
              id={`dialogue-line-${idx + 1}`}
              key={line.id}
              className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-3xl border-2 transition-all scroll-mt-24 ${
                isPlaying
                  ? "bg-purple-50/80 dark:bg-purple-950/40 border-purple-500 ring-2 ring-purple-400/20 shadow-md"
                  : "bg-white dark:bg-slate-900 border-gray-200/90 dark:border-slate-800 shadow-duo-card hover:border-gray-300 dark:hover:border-slate-700"
              }`}
            >
              {/* Speaker Avatar */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-sm flex-shrink-0 bg-gray-100 dark:bg-slate-800">
                <img src={char.avatar} alt={char.name} className="w-full h-full object-cover" />
              </div>

              {/* Bubble Content */}
              <div className="flex-1 min-w-0">
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-sm text-gray-900 dark:text-white">{char.name}</span>
                    <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-gray-200 dark:border-slate-700">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {!line.translations[langCode] && langCode !== "es-ES" && (
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
                      className="p-1 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 rounded hover:bg-black/5 dark:hover:bg-white/10"
                      title={t.factCardTooltip(lang.name)}
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                    {line.defaultStageDirection && (
                      <span className="text-xs text-gray-400 italic hidden sm:inline">
                        ({line.defaultStageDirection})
                      </span>
                    )}
                  </div>

                  {/* Actions Right: Flag, Explainer, Next, Audio */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {/* Flag Mismatch Button */}
                    <button
                      type="button"
                      onClick={() => handleToggleFlagVoice(langCode)}
                      className={`p-1.5 rounded-xl border transition-all ${
                        isFlagged
                          ? "bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700 shadow-xs"
                          : "bg-white dark:bg-slate-800 text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 border border-gray-200 dark:border-slate-700"
                      }`}
                      title={isFlagged ? t.flaggedVoiceActive : t.flagVoiceMismatch}
                    >
                      <Flag className={`w-3.5 h-3.5 ${isFlagged ? "fill-amber-500 text-amber-600" : ""}`} />
                    </button>

                    {/* AI Explainer / Ask AI Button */}
                    <button
                      type="button"
                      onClick={() => {
                        const allTranslations: Record<string, string> = {};
                        if (line.translations) {
                          Object.entries(line.translations).forEach(([c, trans]) => {
                            if (trans?.text) allTranslations[c] = trans.text;
                          });
                        }
                        onExplainPhrase(translation.text, langCode, line.characterId, allTranslations);
                      }}
                      className="p-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-all shadow-xs"
                      title={t.askAiAboutSentence}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>

                    {/* Siguiente Button */}
                    {idx + 1 < story.lines.length && (
                      <button
                        onClick={() => handleScrollToNext(idx + 2)}
                        className="flex items-center gap-1 text-xs font-black text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 px-2.5 py-1 rounded-xl border border-purple-200 dark:border-purple-800 transition-all shadow-xs"
                        title="Saltar a la siguiente frase"
                      >
                        <span>{t.nextPhrase}</span>
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    )}

                    {/* Play Button */}
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
                        className={`flex items-center gap-1.5 py-1 px-3 rounded-xl font-bold text-xs transition-all ${
                          isPlaying
                            ? "bg-purple-600 text-white shadow-md translate-y-0.5"
                            : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isPlaying ? t.listening : t.listen}</span>
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

                {/* Specific Voice Engine Model Tag */}
                {voiceModel && (
                  <div className="mb-2 flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      <Mic className="w-2.5 h-2.5 text-sky-500" />
                      <span className="font-mono text-[9px] text-sky-600 dark:text-sky-400">[{voiceModel.type}]</span>
                      <span>{voiceModel.modelId}</span>
                    </span>
                    {isFlagged && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                        Voz discordante
                      </span>
                    )}
                  </div>
                )}

                {/* Spoken Text - FULL COMPLETE SENTENCE with Individual Clickable Words */}
                {(() => {
                  const isRtl = isRtlLang(langCode);
                  return (
                    <div
                      dir={isRtl ? "rtl" : "ltr"}
                      className={`text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-relaxed ${
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

                {/* Phonetics Bar (Full Sentence, No Cutoff) */}
                {showPhonetics && ipaString && (
                  <div
                    dir="ltr"
                    className="mt-2 text-xs font-mono text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-800/60 p-2 rounded-xl border border-gray-200 dark:border-slate-700 break-words leading-normal text-left"
                  >
                    <span className="text-[10px] font-bold text-gray-400 uppercase mr-1.5 select-none">IPA:</span>
                    {ipaString}
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
