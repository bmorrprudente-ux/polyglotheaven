import React from "react";
import { STORIES } from "../data/stories";
import { LoomIcon } from "./LoomIcon";
import {
  BookOpen,
  Shuffle,
  Volume2,
  Globe,
  Settings,
  Bookmark,
  Repeat,
  Trophy,
  Compass,
  Sun,
  Moon
} from "lucide-react";
import { PlaybackRate } from "../utils/audioPlayer";
import { I18N, SupportedLocale } from "../utils/i18n";

export type ViewMode = "parallel" | "dialogue" | "tour";

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
  username?: string;
  locale?: SupportedLocale;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
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
  username = "Políglota",
  locale = "es",
  darkMode = false,
  onToggleDarkMode,
}) => {
  const t = I18N[locale] || I18N.es;

  const initials = username
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase() || "PO";

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b-2 border-gray-200 dark:border-slate-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-3">
          
          {/* Brand & Loom Icon */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md p-2">
              <LoomIcon className="w-full h-full text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-gray-900 dark:text-white">
                  {t.appName}
                </span>
                <span className="bg-sky-500/15 text-sky-700 dark:text-sky-300 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-sky-400/30">
                  {t.badgeMultidialect}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-bold hidden sm:block">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Story Selector Pills */}
          <div className="hidden lg:flex items-center bg-gray-100 dark:bg-slate-800/80 p-1 rounded-2xl border border-gray-200 dark:border-slate-700">
            {STORIES.map((story, idx) => {
              const active = story.id === currentStoryId && viewMode !== "tour";
              return (
                <button
                  key={story.id}
                  onClick={() => {
                    onSelectStory(story.id);
                    if (viewMode === "tour") onChangeViewMode("parallel");
                  }}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 ${
                    active
                      ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-xs border border-gray-200/80 dark:border-slate-700"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400 text-[10px] font-black flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span>{story.title}</span>
                </button>
              );
            })}
          </div>

          {/* Controls & Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* View Mode Toggle: Parallel vs Dialogue vs World Tour */}
            <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-xl border border-gray-200 dark:border-slate-700">
              <button
                onClick={() => onChangeViewMode("parallel")}
                title="Lector paralelo de frases"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "parallel"
                    ? "bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 shadow-xs"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.parallelView}</span>
              </button>
              <button
                onClick={() => onChangeViewMode("dialogue")}
                title="Cruce dialógico de lenguas"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "dialogue"
                    ? "bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-xs"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.dialogueView}</span>
              </button>
              <button
                onClick={() => onChangeViewMode("tour")}
                title="Gira mundial interactiva con mapa"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "tour"
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-xs font-extrabold"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.worldTourView}</span>
              </button>
            </div>

            {/* Auto-Advance Toggle Switch */}
            <button
              onClick={onToggleAutoAdvance}
              title={autoAdvance ? t.autoAdvanceActive : t.autoAdvanceInactive}
              className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                autoAdvance
                  ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 shadow-xs"
                  : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50"
              }`}
            >
              <Repeat className={`w-3.5 h-3.5 ${autoAdvance ? "text-emerald-600 dark:text-emerald-400 animate-spin" : ""}`} />
              <span className="hidden lg:inline">{t.autoAdvance}</span>
            </button>

            {/* Phonetics IPA Toggle */}
            <button
              onClick={onTogglePhonetics}
              className={`px-2.5 py-1.5 rounded-xl border text-xs font-black transition-all flex items-center gap-1 ${
                showPhonetics
                  ? "bg-amber-100 dark:bg-amber-950/70 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 shadow-xs"
                  : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              }`}
              title={t.ipaTooltip}
            >
              <span>{t.ipaToggle}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${showPhonetics ? "bg-amber-500" : "bg-gray-300 dark:bg-slate-600"}`} />
            </button>

            {/* Speed Control */}
            <div className="hidden xl:flex items-center bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-600 dark:text-gray-300">
              <Volume2 className="w-3.5 h-3.5 mr-1 text-gray-400" />
              <button
                onClick={() => {
                  const nextSpeed: PlaybackRate = playbackSpeed === 0.75 ? 1.0 : playbackSpeed === 1.0 ? 1.25 : 0.75;
                  onChangeSpeed(nextSpeed);
                }}
                className="hover:text-sky-600 font-extrabold"
              >
                {playbackSpeed}x
              </button>
            </div>

            {/* Language Selection Modal Button */}
            <button
              onClick={onOpenLanguageModal}
              className="btn-duo-green flex items-center gap-1.5 py-1.5 px-3 text-xs flex-shrink-0"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t.languagesButton}</span>
              <span className="bg-black/20 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full ml-0.5">
                {activeLanguageCount}
              </span>
            </button>

            {/* Vocabulary Button */}
            <button
              onClick={onOpenVocabulary}
              className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 hover:bg-amber-100 transition-all flex items-center gap-1 text-xs font-bold"
              title="Ver vocabulario descubierto"
            >
              <Bookmark className="w-4 h-4 text-amber-600 fill-amber-500/20" />
              <span className="text-[11px] font-black">{vocabularyCount}</span>
            </button>

            {/* Achievements Button */}
            <button
              onClick={onOpenAchievements}
              className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 hover:bg-purple-100 transition-all flex items-center gap-1 text-xs font-bold"
              title="Ver logros y metas políglotas"
            >
              <Trophy className="w-4 h-4 text-purple-600" />
              <span className="text-[11px] font-black">{unlockedAchievementsCount}</span>
            </button>

            {/* User Profile Avatar with Initials */}
            <button
              onClick={onOpenSettings}
              className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 text-white font-black text-xs flex items-center justify-center shadow-xs border border-white/40 hover:scale-105 transition-transform"
              title={`Perfil: ${username}`}
            >
              {initials}
            </button>

            {/* Light / Dark Mode Quick Toggle Button */}
            {onToggleDarkMode && (
              <button
                type="button"
                onClick={onToggleDarkMode}
                className="px-2.5 py-1.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-amber-600 dark:text-amber-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors shadow-xs flex items-center gap-1.5"
                title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {darkMode ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span className="hidden xl:inline text-xs font-bold text-gray-700 dark:text-gray-200">Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-slate-700" />
                    <span className="hidden xl:inline text-xs font-bold text-gray-700">Oscuro</span>
                  </>
                )}
              </button>
            )}

            {/* Settings Button */}
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              title={t.settingsButton}
            >
              <Settings className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Story Pills */}
      <div className="flex lg:hidden overflow-x-auto px-4 py-2 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-200 dark:border-slate-800 gap-2 scrollbar-none">
        {STORIES.map((story, idx) => {
          const active = story.id === currentStoryId && viewMode !== "tour";
          return (
            <button
              key={story.id}
              onClick={() => {
                onSelectStory(story.id);
                if (viewMode === "tour") onChangeViewMode("parallel");
              }}
              className={`px-3 py-1 rounded-xl font-bold text-xs whitespace-nowrap ${
                active
                  ? "bg-sky-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700"
              }`}
            >
              #{idx + 1} {story.title}
            </button>
          );
        })}
      </div>
    </header>
  );
};
