import React from "react";
import { STORIES } from "../data/stories";
import { CloudSunIcon } from "./CloudSunIcon";
import {
  BookOpen,
  Shuffle,
  Volume2,
  Globe,
  Bookmark,
  Repeat,
  Trophy,
  Compass,
  Star,
  Layers,
  HelpCircle,
  Home
} from "lucide-react";
import { PlaybackRate } from "../utils/audioPlayer";
import { I18N, SupportedLocale } from "../utils/i18n";

export type ViewMode = "home" | "parallel" | "dialogue" | "tour";

interface NavbarProps {
  currentStoryId: string;
  onSelectStory: (id: string) => void;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onOpenLanguageModal: () => void;
  activeLanguageCount: number;
  playbackSpeed: PlaybackRate;
  onChangeSpeed: (speed: PlaybackRate) => void;
  showPhonetics: boolean;
  onTogglePhonetics: () => void;
  autoAdvance: boolean;
  onToggleAutoAdvance: () => void;
  onOpenSettings: () => void;
  onOpenVocabulary: () => void;
  vocabularyCount: number;
  onOpenAchievements: () => void;
  unlockedAchievementsCount: number;
  onOpenFlashcards: () => void;
  onOpenFamilies: () => void;
  onOpenAbout: () => void;
  username?: string;
  locale?: SupportedLocale;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentStoryId,
  onSelectStory,
  viewMode,
  onChangeViewMode,
  onOpenLanguageModal,
  activeLanguageCount,
  playbackSpeed,
  onChangeSpeed,
  showPhonetics,
  onTogglePhonetics,
  autoAdvance,
  onToggleAutoAdvance,
  onOpenSettings,
  onOpenVocabulary,
  vocabularyCount,
  onOpenAchievements,
  unlockedAchievementsCount,
  onOpenFlashcards,
  onOpenFamilies,
  onOpenAbout,
  username = "Políglota",
  locale = "es",
}) => {
  const t = I18N[locale] || I18N.es;

  const initials = username
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase() || "PH";

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b-2 border-gray-200 dark:border-slate-800 shadow-sm transition-colors w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* LINE 1: Brand, Mode Switcher & User Avatar (Mobile & Desktop) */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          
          {/* Brand Logo & Title (Click to return Home) */}
          <div
            onClick={() => onChangeViewMode("home")}
            className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 cursor-pointer group select-none"
            title="Ir al inicio de Polyglot Heaven"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-sky-400 via-sky-500 to-indigo-600 flex items-center justify-center p-1 sm:p-1.5 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <CloudSunIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-xl tracking-tight text-gray-900 dark:text-white truncate">
                  {t.appName}
                </span>
                <span className="bg-amber-400/20 text-amber-800 dark:text-amber-300 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-400/40 hidden sm:inline-block">
                  Cielos Políglotas
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-bold hidden md:block truncate">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Primary View Mode Switcher */}
          <div className="flex items-center bg-gray-100 dark:bg-slate-800 p-0.5 sm:p-1 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-700 flex-shrink-0">
            <button
              onClick={() => onChangeViewMode("home")}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs font-black transition-all ${
                viewMode === "home"
                  ? "bg-white dark:bg-slate-900 text-indigo-700 dark:text-sky-300 shadow-xs"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              }`}
              title="Página principal de Polyglot Heaven"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Inicio</span>
            </button>

            <button
              onClick={() => onChangeViewMode("parallel")}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs font-black transition-all ${
                viewMode === "parallel"
                  ? "bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 shadow-xs"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              }`}
              title="Lectura paralela multilingüe"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Historias</span>
            </button>

            <button
              onClick={() => onChangeViewMode("tour")}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-xs font-black transition-all ${
                viewMode === "tour"
                  ? "bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-300 shadow-xs"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              }`}
              title="Gira mundial interactiva"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Gira</span>
            </button>
          </div>

          {/* User Settings Avatar Button (Always in Line 1) */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Desktop Quick Tools Controls */}
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
              {viewMode !== "home" && (
                <>
                  <button
                    onClick={onTogglePhonetics}
                    className={`px-2.5 py-1.5 rounded-xl border text-xs font-black transition-all flex items-center gap-1 ${
                      showPhonetics
                        ? "bg-amber-100 dark:bg-amber-950/70 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 shadow-xs"
                        : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50"
                    }`}
                    title={t.ipaTooltip}
                  >
                    <span>{t.ipaToggle}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${showPhonetics ? "bg-amber-500" : "bg-gray-300 dark:bg-slate-600"}`} />
                  </button>

                  <button
                    onClick={onOpenLanguageModal}
                    className="btn-duo-green flex items-center gap-1.5 py-1.5 px-3 text-xs flex-shrink-0"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span className="hidden lg:inline">{t.languagesButton}</span>
                    <span className="bg-black/20 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full ml-0.5">
                      {activeLanguageCount}
                    </span>
                  </button>
                </>
              )}

              <button
                onClick={onOpenFlashcards}
                className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 hover:bg-amber-100 transition-all flex items-center gap-1 text-xs font-bold"
                title="Practicar con Tarjetas de Memoria (Flashcards)"
              >
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="hidden xl:inline">Flashcards</span>
              </button>

              <button
                onClick={onOpenFamilies}
                className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60 hover:bg-sky-100 transition-all flex items-center gap-1 text-xs font-bold"
                title="Combinaciones clásicas y familias lingüísticas"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                <span className="hidden xl:inline">Combinaciones</span>
              </button>

              <button
                onClick={onOpenAbout}
                className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 hover:bg-indigo-100 transition-all flex items-center gap-1 text-xs font-bold"
                title="¿Por qué Polyglot Heaven? (Tabla comparativa con Duolingo)"
              >
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span className="hidden xl:inline">Acerca de</span>
              </button>
            </div>

            <button
              onClick={onOpenSettings}
              className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 text-white font-black text-xs flex items-center justify-center shadow-xs border border-white/40 hover:scale-105 transition-transform flex-shrink-0"
              title={`Ajustes del usuario: ${username}`}
            >
              {initials}
            </button>
          </div>

        </div>

        {/* LINE 2 (Mobile only): Clean dedicated secondary toolbar */}
        <div className="sm:hidden flex items-center justify-between gap-1 py-1.5 border-t border-gray-100 dark:border-slate-800/80 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-0">
            {viewMode !== "home" && (
              <>
                <button
                  onClick={onTogglePhonetics}
                  className={`px-2 py-1 rounded-lg border text-[11px] font-black transition-all flex items-center gap-1 flex-shrink-0 ${
                    showPhonetics
                      ? "bg-amber-100 dark:bg-amber-950/70 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 shadow-xs"
                      : "bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300"
                  }`}
                  title={t.ipaTooltip}
                >
                  <span>{t.ipaToggle}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${showPhonetics ? "bg-amber-500" : "bg-gray-300 dark:bg-slate-600"}`} />
                </button>

                <button
                  onClick={onOpenLanguageModal}
                  className="btn-duo-green flex items-center gap-1 py-1 px-2.5 text-[11px] flex-shrink-0"
                >
                  <Globe className="w-3 h-3" />
                  <span>{t.languagesButton}</span>
                  <span className="bg-black/20 text-white text-[9px] font-black px-1 py-0.2 rounded-full">
                    {activeLanguageCount}
                  </span>
                </button>
              </>
            )}

            <button
              onClick={onOpenFlashcards}
              className="p-1.5 px-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 transition-all flex items-center gap-1 text-[11px] font-bold flex-shrink-0"
              title="Tarjetas de Memoria"
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>Flashcards</span>
            </button>

            <button
              onClick={onOpenFamilies}
              className="p-1.5 px-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60 transition-all flex items-center gap-1 text-[11px] font-bold flex-shrink-0"
              title="Familias y Combinaciones"
            >
              <Layers className="w-3 h-3 text-sky-600" />
              <span>Familias</span>
            </button>
          </div>

          <button
            onClick={onOpenAbout}
            className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 transition-all flex items-center gap-1 text-[11px] font-bold flex-shrink-0"
            title="Acerca de Polyglot Heaven"
          >
            <HelpCircle className="w-3 h-3 text-indigo-600" />
          </button>
        </div>

      </div>

      {/* Sub-bar for story selector pills when in story view */}
      {viewMode === "parallel" && (
        <div className="flex overflow-x-auto px-4 py-2 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-200 dark:border-slate-800 gap-2 scrollbar-none">
          {STORIES.map((story, idx) => {
            const active = story.id === currentStoryId;
            return (
              <button
                key={story.id}
                onClick={() => onSelectStory(story.id)}
                className={`px-3 py-1 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  active
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-100"
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-black/15 text-[10px] font-black flex items-center justify-center">
                  {idx + 1}
                </span>
                <span>{story.title}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
