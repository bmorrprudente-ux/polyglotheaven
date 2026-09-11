import React, { useState } from "react";
import { LANGUAGES, LANGUAGE_GROUPS, Language } from "../data/languages";
import { X, Search, Check, Sparkles, Shuffle, Info, Trash2 } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguageCodes: string[];
  onToggleLanguage: (code: string) => void;
  onSelectLanguagePreset: (codes: string[]) => void;
  currentlyLearningCodes?: string[];
  onOpenFactCard: (lang: Language) => void;
  locale?: SupportedLocale;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedLanguageCodes,
  onToggleLanguage,
  onSelectLanguagePreset,
  currentlyLearningCodes = [],
  onOpenFactCard,
  locale = "es",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedGroupIds, setExpandedGroupIds] = useState<Record<string, boolean>>({});
  const t = I18N[locale] || I18N.es;

  const toggleGroupExpand = (groupId: string) => {
    setExpandedGroupIds(prev => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  if (!isOpen) return null;

  // Global polyglot 5 random languages picker
  const handlePickRandomFive = () => {
    const allCodes = Object.keys(LANGUAGES);
    const shuffled = [...allCodes].sort(() => 0.5 - Math.random());
    const randomFive = shuffled.slice(0, 5);
    onSelectLanguagePreset(randomFive);
  };

  // Deselect all languages (keeps first language or empties to 1 default)
  const handleDeselectAll = () => {
    onSelectLanguagePreset([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all">
        
        {/* Header */}
        <div className="p-5 pb-3 border-b border-gray-200/80 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white flex items-center justify-center font-black shadow-md">
                🌐
              </div>
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white">
                  {t.catalogTitle}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">
                  {t.activeVariantsSelected(selectedLanguageCodes.length)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Deselect All Button */}
              <button
                type="button"
                onClick={handleDeselectAll}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 font-extrabold text-xs border border-gray-200 dark:border-slate-700 active:scale-95 transition-all"
                title="Deseleccionar todas las variantes activas"
              >
                <Trash2 className="w-3.5 h-3.5 text-gray-400" />
                <span>{t.deselectAll}</span>
              </button>

              {/* Random 5 Polyglot Picker */}
              <button
                type="button"
                onClick={handlePickRandomFive}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold text-xs shadow-sm active:scale-95 transition-all"
                title="Elegir 5 idiomas aleatorios de todo el mundo"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{t.globalPolyglot}</span>
                <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded-full">{t.fiveRandom}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl bg-gray-100/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
            />
          </div>
        </div>

        {/* Content: Grouped Transparent Boxes */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          
          {/* SECTION: Currently Learning (Pinned Top) */}
          {currentlyLearningCodes.length > 0 && !searchTerm && (
            <div className="p-4 rounded-3xl bg-sky-50/70 dark:bg-sky-950/30 border-2 border-sky-300/70 dark:border-sky-800/50 backdrop-blur shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌟</span>
                  <div>
                    <h3 className="text-sm font-black text-sky-950 dark:text-sky-200">
                      {t.currentlyLearningSection}
                    </h3>
                    <p className="text-[11px] text-sky-700 dark:text-sky-400 font-medium">
                      {t.currentlyLearningDesc}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onSelectLanguagePreset(currentlyLearningCodes)}
                  className="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-[11px] transition-all shadow-xs"
                >
                  {t.activateAll}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {currentlyLearningCodes.map(code => {
                  const lang = LANGUAGES[code];
                  if (!lang) return null;
                  const isSelected = selectedLanguageCodes.includes(code);
                  return (
                    <LanguageCard
                      key={code}
                      lang={lang}
                      isSelected={isSelected}
                      onToggle={() => onToggleLanguage(code)}
                      onOpenFactCard={() => onOpenFactCard(lang)}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* GROUPS LIST */}
          {LANGUAGE_GROUPS.map(group => {
            // Get languages in this group, filter by search, sort alphabetically
            const groupLangs = group.codes
              .map(c => LANGUAGES[c])
              .filter((l): l is Language => Boolean(l))
              .filter(l =>
                !searchTerm ||
                l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                l.nativeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                l.region.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .sort((a, b) => a.name.localeCompare(b.name, locale));

            if (groupLangs.length === 0) return null;

            return (
              <div
                key={group.id}
                className="p-4 sm:p-5 rounded-3xl bg-white/60 dark:bg-slate-800/40 border border-gray-200/90 dark:border-slate-700/80 backdrop-blur-md shadow-xs transition-all hover:border-gray-300 dark:hover:border-slate-600"
              >
                {/* Group Header */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{group.icon}</span>
                    <div>
                      <h3 className="text-sm font-black text-gray-900 dark:text-white">
                        {group.name}
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
                    {t.varietiesCount(groupLangs.length)}
                  </span>
                </div>

                {/* Dialects Grid sorted alphabetically with expandable Show More */}
                {(() => {
                  const isExpanded = Boolean(expandedGroupIds[group.id]);
                  const shouldTruncate = !searchTerm && groupLangs.length > 12 && !isExpanded;
                  const visibleLangs = shouldTruncate ? groupLangs.slice(0, 11) : groupLangs;

                  return (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {visibleLangs.map(lang => {
                        const isSelected = selectedLanguageCodes.includes(lang.code);
                        return (
                          <LanguageCard
                            key={lang.code}
                            lang={lang}
                            isSelected={isSelected}
                            onToggle={() => onToggleLanguage(lang.code)}
                            onOpenFactCard={() => onOpenFactCard(lang)}
                          />
                        );
                      })}

                      {/* Expand "+ Ver más" tile */}
                      {shouldTruncate && (
                        <button
                          type="button"
                          onClick={() => toggleGroupExpand(group.id)}
                          className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-dashed border-sky-400/70 dark:border-sky-700/80 bg-sky-50/60 dark:bg-sky-950/30 hover:bg-sky-100 dark:hover:bg-sky-900/40 text-sky-800 dark:text-sky-200 transition-all text-center min-h-[4.5rem] group shadow-xs cursor-pointer active:scale-95"
                          title="Mostrar todas las variantes de este grupo"
                        >
                          <span className="text-base group-hover:scale-110 transition-transform">✨</span>
                          <span className="text-xs font-black mt-1">
                            + Ver más ({groupLangs.length - 11} más)
                          </span>
                          <span className="text-[10px] text-sky-600 dark:text-sky-400 font-bold">
                            Mostrar todas
                          </span>
                        </button>
                      )}

                      {/* Collapse "Mostrar menos" tile */}
                      {isExpanded && !searchTerm && groupLangs.length > 12 && (
                        <button
                          type="button"
                          onClick={() => toggleGroupExpand(group.id)}
                          className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-700 bg-gray-50/60 dark:bg-slate-800/40 hover:bg-gray-100 dark:hover:bg-slate-700/60 text-gray-700 dark:text-gray-300 transition-all text-center min-h-[4.5rem] group shadow-xs cursor-pointer active:scale-95"
                          title="Colapsar lista de variantes"
                        >
                          <span className="text-base group-hover:scale-90 transition-transform">🔼</span>
                          <span className="text-xs font-black mt-1">
                            Mostrar menos
                          </span>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold">
                            Reducir vista
                          </span>
                        </button>
                      )}
                    </div>
                  );
                })()}
              </div>
            );
          })}

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50/90 dark:bg-slate-800/80 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs font-bold text-gray-500 dark:text-gray-400">
            {t.factCardFooterHint}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-duo-green hover:bg-duo-green-dark text-white font-extrabold text-xs rounded-xl transition-all shadow-duo"
          >
            {t.readyButton(selectedLanguageCodes.length)}
          </button>
        </div>

      </div>
    </div>
  );
};

// Subcomponent for each language button card with fixed dark mode hover
interface LanguageCardProps {
  lang: Language;
  isSelected: boolean;
  onToggle: () => void;
  onOpenFactCard: () => void;
}

const LanguageCard: React.FC<LanguageCardProps> = ({
  lang,
  isSelected,
  onToggle,
  onOpenFactCard,
}) => {
  return (
    <div
      className={`group relative flex items-center justify-between p-2.5 rounded-2xl border-2 transition-all text-xs ${
        isSelected
          ? "bg-sky-50 dark:bg-sky-950/60 border-sky-400 dark:border-sky-500 shadow-sm"
          : "bg-white/80 dark:bg-slate-900/80 border-gray-200/80 dark:border-slate-700/70 hover:border-gray-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800"
      }`}
    >
      {/* Click area to select/toggle language */}
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 min-w-0 flex-1 text-left mr-1"
      >
        <span className="text-lg filter drop-shadow-xs flex-shrink-0">{lang.flag}</span>
        <div className="min-w-0">
          <span className="font-extrabold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 truncate block text-[11px] sm:text-xs">
            {lang.name}
          </span>
          <span className="text-[10px] text-gray-400 dark:text-gray-400 truncate block font-medium">
            {lang.nativeName}
          </span>
        </div>
      </button>

      {/* Action buttons: Fact "i" and Checkmark */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenFactCard();
          }}
          className="p-1 rounded-lg text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-100/50 dark:hover:bg-sky-900/40 transition-colors"
          title={`Ver ficha demográfica de ${lang.name}`}
        >
          <Info className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={onToggle}
          className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${
            isSelected
              ? "bg-sky-500 border-sky-500 text-white"
              : "border-gray-300 dark:border-slate-600 text-transparent hover:border-gray-400"
          }`}
        >
          <Check className="w-3 h-3 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
