import React, { useState } from "react";
import { LANGUAGES, Language } from "../data/languages";
import { ChevronLeft, ChevronRight, GripVertical, Sparkles, ArrowDownAZ, Settings2 } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface LanguageOrderBarProps {
  selectedLanguageCodes: string[];
  onReorder: (newOrder: string[]) => void;
  onOpenCatalog: () => void;
  currentlyLearningCodes?: string[];
  onSelectLanguagePreset?: (codes: string[]) => void;
  onToggleLanguage?: (code: string) => void;
  locale?: SupportedLocale;
}

export const LanguageOrderBar: React.FC<LanguageOrderBarProps> = ({
  selectedLanguageCodes,
  onReorder,
  onOpenCatalog,
  currentlyLearningCodes = [],
  onSelectLanguagePreset,
  onToggleLanguage,
  locale = "es",
}) => {
  const t = I18N[locale] || I18N.es;
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const moveLanguage = (index: number, direction: "left" | "right") => {
    const targetIndex = direction === "left" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= selectedLanguageCodes.length) return;

    const updated = [...selectedLanguageCodes];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, moved);
    onReorder(updated);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const updated = [...selectedLanguageCodes];
    const [moved] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, moved);
    onReorder(updated);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // Groups similar dialects together (e.g., all French together, all Portuguese together, etc.)
  const handleGroupSimilar = () => {
    if (selectedLanguageCodes.length <= 1) return;

    // Preserve the first language (reference base)
    const firstCode = selectedLanguageCodes[0];
    const rest = selectedLanguageCodes.slice(1);

    // Group by language root (e.g., "fr" from "fr-FR", "pt" from "pt-BR")
    const getRoot = (code: string) => code.split("-")[0];

    const sortedRest = [...rest].sort((a, b) => {
      const rootA = getRoot(a);
      const rootB = getRoot(b);
      if (rootA === rootB) {
        return a.localeCompare(b);
      }
      return rootA.localeCompare(rootB);
    });

    onReorder([firstCode, ...sortedRest]);
  };

  // Sort alphabetically by language name
  const handleSortAlphabetical = () => {
    if (selectedLanguageCodes.length <= 1) return;
    const firstCode = selectedLanguageCodes[0];
    const rest = selectedLanguageCodes.slice(1);

    const sortedRest = [...rest].sort((a, b) => {
      const nameA = LANGUAGES[a]?.name || a;
      const nameB = LANGUAGES[b]?.name || b;
      return nameA.localeCompare(nameB);
    });

    onReorder([firstCode, ...sortedRest]);
  };

  return (
    <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border-2 border-gray-200 dark:border-slate-800 shadow-xs mb-5 transition-all">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 pb-2 border-b border-gray-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-gray-800 dark:text-gray-200 uppercase tracking-wider flex items-center gap-1.5">
            <span>{t.columnOrderTitle(selectedLanguageCodes.length)}</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] text-gray-400 dark:text-gray-500 font-medium">
            {t.dragOrArrowsHint}
          </span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {currentlyLearningCodes.length > 0 && onSelectLanguagePreset && (
            <button
              type="button"
              onClick={() => onSelectLanguagePreset(currentlyLearningCodes)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all shadow-xs active:scale-95"
              title={t.loadLearningTooltip}
            >
              <span>🎓</span>
              <span>{t.loadLearningLanguages(currentlyLearningCodes.length)}</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleGroupSimilar}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80 hover:bg-sky-100 transition-all"
            title="Agrupar variantes similares juntas (ej. Francés de Francia junto a Francés Canadiense)"
          >
            <Sparkles className="w-3 h-3 text-sky-600" />
            <span>{t.groupSimilarVariants}</span>
          </button>

          <button
            type="button"
            onClick={handleSortAlphabetical}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-200 transition-all"
            title="Ordenar alfabéticamente"
          >
            <ArrowDownAZ className="w-3 h-3 text-gray-500" />
            <span className="hidden md:inline">{t.sortAlphabetical}</span>
          </button>

          <button
            type="button"
            onClick={onOpenCatalog}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-200 transition-all"
            title="Añadir o quitar idiomas del catálogo"
          >
            <Settings2 className="w-3 h-3 text-gray-500" />
            <span>{t.editList}</span>
          </button>
        </div>
      </div>

      {/* Quick-Pick Learning Languages Strip */}
      {currentlyLearningCodes.length > 0 && (
        <div className="flex items-center gap-1.5 overflow-x-auto py-1.5 mb-2.5 border-b border-gray-100 dark:border-slate-800/80 scrollbar-thin">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1 flex-shrink-0">
            <span>🎓</span>
            <span>{t.currentlyLearningSection}:</span>
          </span>
          {currentlyLearningCodes.map(code => {
            const lang = LANGUAGES[code];
            if (!lang) return null;
            const isActive = selectedLanguageCodes.includes(code);
            return (
              <button
                key={`quick-learn-${code}`}
                type="button"
                onClick={() => onToggleLanguage?.(code)}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all flex-shrink-0 border ${
                  isActive
                    ? "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700 shadow-xs"
                    : "bg-gray-50 dark:bg-slate-800/80 text-gray-600 dark:text-gray-400 border-dashed border-gray-300 dark:border-slate-700 hover:border-emerald-400 hover:text-emerald-600"
                }`}
                title={isActive ? `Quitar ${lang.name} de las columnas activas` : `Añadir ${lang.name} a las columnas activas`}
              >
                <span>{lang.flag}</span>
                <span className="truncate max-w-[110px]">{lang.name.replace(/^(Español|Inglés|Francés|Portugués|Árabe|Chino)\s*/, "")}</span>
                <span className="text-[9px] font-black">{isActive ? "✓" : "+"}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Draggable & Click-Reorderable Pill Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-thin">
        {selectedLanguageCodes.map((code, idx) => {
          const lang = LANGUAGES[code];
          if (!lang) return null;

          const isFirst = idx === 0;
          const isLast = idx === selectedLanguageCodes.length - 1;
          const isBeingDragged = draggedIndex === idx;
          const isDragOver = dragOverIndex === idx;

          return (
            <div
              key={code}
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDrop={() => handleDrop(idx)}
              onDragEnd={() => {
                setDraggedIndex(null);
                setDragOverIndex(null);
              }}
              className={`flex items-center gap-1.5 pl-2 pr-1.5 py-1 rounded-xl border text-xs font-bold transition-all select-none cursor-grab active:cursor-grabbing flex-shrink-0 ${
                isBeingDragged
                  ? "opacity-30 border-dashed border-sky-500 bg-sky-50 dark:bg-slate-800"
                  : isDragOver
                  ? "border-sky-500 scale-105 bg-sky-100 dark:bg-sky-950/70"
                  : isFirst
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700"
                  : "bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:border-gray-300"
              }`}
            >
              <GripVertical className="w-3 h-3 text-gray-400 -mr-0.5 cursor-grab" />
              <span className="text-sm">{lang.flag}</span>
              <span className="truncate max-w-[130px]">{lang.name.replace(/^(Español|Inglés|Francés|Portugués|Árabe|Chino)\s*/, "")}</span>
              {isFirst && (
                <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-200/80 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-200 uppercase font-black">
                  {t.baseBadge}
                </span>
              )}

              {/* Step Reorder Arrows */}
              <div className="flex items-center ml-0.5 border-l border-gray-200 dark:border-slate-700 pl-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveLanguage(idx, "left");
                  }}
                  disabled={isFirst}
                  className="p-0.5 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 disabled:opacity-20 disabled:hover:text-gray-400 rounded transition-colors"
                  title="Mover a la izquierda"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveLanguage(idx, "right");
                  }}
                  disabled={isLast}
                  className="p-0.5 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 disabled:opacity-20 disabled:hover:text-gray-400 rounded transition-colors"
                  title="Mover a la derecha"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
