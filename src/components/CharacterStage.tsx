import React from "react";
import { CHARACTERS } from "../data/characters";
import { Sparkles, MessageCircle, Tag, X } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface CharacterStageProps {
  characterIds: string[];
  activeCharacterId?: string;
  storyTitle: string;
  conflictType: string;
  vocabularyTheme: string;
  activeTagFilter?: string | null;
  onSelectTagFilter?: (tag: string) => void;
  onClearTagFilter?: () => void;
  locale?: SupportedLocale;
}

export const CharacterStage: React.FC<CharacterStageProps> = ({
  characterIds,
  activeCharacterId,
  storyTitle,
  conflictType,
  vocabularyTheme,
  activeTagFilter,
  onSelectTagFilter,
  onClearTagFilter,
  locale = "es",
}) => {
  const characters = characterIds.map((id) => CHARACTERS[id]).filter(Boolean);
  const t = I18N[locale] || I18N.es;

  const tags = vocabularyTheme
    .split(",")
    .map((tag) => tag.replace(/\.$/, "").trim())
    .filter(Boolean);

  return (
    <section className="bg-gradient-to-b from-sky-50/60 via-white to-gray-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 rounded-3xl p-5 border-2 border-gray-200/80 dark:border-slate-800 shadow-duo-card relative overflow-hidden mb-6 transition-all">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-200/20 dark:bg-emerald-900/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Story Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              {storyTitle}
            </h2>
            <span className="bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-700">
              Microcuento
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-0.5">
            <strong className="text-gray-700 dark:text-gray-300">Conflicto:</strong> {conflictType}
          </p>
        </div>

        {/* Clickable Vocabulary Tags */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Vocabulario:</span>
          </span>

          {tags.map((tag) => {
            const isSelected = activeTagFilter?.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectTagFilter?.(tag)}
                className={`px-2.5 py-1 rounded-xl text-xs font-black transition-all shadow-xs flex items-center gap-1 ${
                  isSelected
                    ? "bg-emerald-600 text-white shadow-emerald-500/30 scale-105"
                    : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 active:scale-95"
                }`}
                title={`Filtrar cuentos relacionados con "${tag}"`}
              >
                <Tag className="w-3 h-3 text-emerald-500" />
                <span>{tag}</span>
              </button>
            );
          })}

          {activeTagFilter && (
            <button
              type="button"
              onClick={onClearTagFilter}
              className="p-1 text-red-500 hover:text-red-700 dark:hover:text-red-400 text-xs font-bold rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              title="Quitar filtro de tema"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Character Portraits Cast */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {characters.map((char) => {
          const isActive = activeCharacterId === char.id;
          return (
            <div
              key={char.id}
              className={`group relative flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-white dark:bg-slate-800 ring-4 ring-duo-blue/30 border-2 border-duo-blue shadow-lg -translate-y-1 scale-102"
                  : "bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/80 border-2 border-gray-200/70 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              {/* Active Speaker Badge */}
              {isActive && (
                <div className="absolute -top-2.5 bg-duo-blue text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm animate-pulse flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>Hablando</span>
                </div>
              )}

              {/* Avatar Portrait */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-inner mb-2.5 bg-gray-100 dark:bg-slate-800">
                <img
                  src={char.avatar}
                  alt={char.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isActive ? "scale-108" : "group-hover:scale-105"
                  }`}
                />
              </div>

              {/* Character Info */}
              <div className="text-center w-full">
                <div className="flex items-center justify-center gap-1">
                  <h3 className="font-extrabold text-sm text-gray-900 dark:text-white">{char.name}</h3>
                  <span className="text-[10px] text-gray-400 font-bold">({char.age})</span>
                </div>
                <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 ${char.bgBadge}`}>
                  {char.subtitle}
                </div>
                
                {/* Catchphrase */}
                <p className="text-[11px] text-gray-500 dark:text-gray-400 italic mt-1.5 line-clamp-2 px-1 leading-snug">
                  {char.catchphrase}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
