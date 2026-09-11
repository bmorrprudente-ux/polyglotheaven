import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { STORIES, Story } from "./data/stories";
import { LANGUAGES, Language } from "./data/languages";
import { Navbar, ViewMode } from "./components/Navbar";
import { CharacterStage } from "./components/CharacterStage";
import { ParallelSentenceRow } from "./components/ParallelSentenceRow";
import { CodeSwitchingView } from "./components/CodeSwitchingView";
import { WorldTourView } from "./components/WorldTourView";
import { WordInspectorModal } from "./components/WordInspectorModal";
import { LanguageSelectorModal } from "./components/LanguageSelectorModal";
import { LanguageFactModal } from "./components/LanguageFactModal";
import { PhraseExplainerModal } from "./components/PhraseExplainerModal";
import { SettingsModal, UserSettings } from "./components/SettingsModal";
import { VocabularyDrawer } from "./components/VocabularyDrawer";
import { AchievementsModal } from "./components/AchievementsModal";
import { audioPlayer, PlaybackRate } from "./utils/audioPlayer";
import { vocabularyTracker } from "./utils/vocabularyTracker";
import { achievementsManager } from "./utils/achievements";
import { extractVocabularyWords } from "./utils/textSegmenter";
import { I18N } from "./utils/i18n";
import { Sparkles, ArrowRight, X } from "lucide-react";

const SETTINGS_STORAGE_KEY = "telar_user_settings_v4";

const DEFAULT_SETTINGS: UserSettings = {
  username: "Políglota",
  darkMode: false,
  interfaceLanguage: "es",
  currentlyLearning: ["es-MX", "ja-JP", "fr-FR", "pt-BR", "ar-SA"],
  geminiApiKey: "",
};

export const App: React.FC = () => {
  // User Settings state with localStorage persistence (defaults strictly to clean light mode)
  const [settings, setSettings] = useState<UserSettings>(() => {
    try {
      const v4 = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (v4) return JSON.parse(v4);

      // Migrate previous versions if available, preserving user API key and profile, but defaulting to light mode
      const prev = localStorage.getItem("telar_user_settings_v3") || 
                   localStorage.getItem("telar_user_settings_v2") || 
                   localStorage.getItem("telar_user_settings_v1");
      if (prev) {
        const parsed = JSON.parse(prev);
        const migrated: UserSettings = {
          ...DEFAULT_SETTINGS,
          ...parsed,
          darkMode: false, // Ensure light mode is active by default as requested
        };
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(migrated));
        return migrated;
      }
      return DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  const locale = settings.interfaceLanguage || "es";
  const t = I18N[locale] || I18N.es;

  // Navigation & Story state
  const [currentStoryId, setCurrentStoryId] = useState<string>("story_1");
  const [viewMode, setViewMode] = useState<ViewMode>("parallel");
  const [activeTagFilter, setActiveTagFilter] = useState<string | null>(null);

  // Language customization: Start with diverse polyglot selection
  const [selectedLanguageCodes, setSelectedLanguageCodes] = useState<string[]>([
    "es-ES",
    "es-MX",
    "es-DO",
    "fr-FR",
    "pt-BR",
    "ja-JP",
  ]);

  // Audio, Speed & Phonetics state
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<PlaybackRate>(1.0);
  const [showPhonetics, setShowPhonetics] = useState<boolean>(true);
  const [activeSpeakerId, setActiveSpeakerId] = useState<string>("hugo");
  const [autoAdvance, setAutoAdvance] = useState<boolean>(false);

  // Vocabulary Count state
  const [vocabCount, setVocabCount] = useState<number>(() => vocabularyTracker.getTotalCount());

  // Modals state
  const [isLangModalOpen, setIsLangModalOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isVocabOpen, setIsVocabOpen] = useState<boolean>(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState<boolean>(false);
  const [selectedFactLang, setSelectedFactLang] = useState<Language | null>(null);
  const [explainingPhrase, setExplainingPhrase] = useState<{
    phrase: string;
    langCode: string;
    characterId: string;
  } | null>(null);
  const [inspectedWord, setInspectedWord] = useState<{
    word: string;
    translation?: string;
    langCode?: string;
  } | null>(null);

  // Synchronize dark mode class with <html> and <body> elements
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [settings.darkMode]);

  const handleToggleDarkMode = () => {
    const nextMode = !settings.darkMode;
    const updated = { ...settings, darkMode: nextMode };
    setSettings(updated);
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Record active varieties for monthly stats
  useEffect(() => {
    achievementsManager.recordActiveVarieties(selectedLanguageCodes);
  }, [selectedLanguageCodes]);

  // Subscribe to audio player state
  useEffect(() => {
    const unsubscribe = audioPlayer.subscribe((activeId) => {
      setActiveAudioId(activeId);
    });
    return () => unsubscribe();
  }, []);

  const currentStory = STORIES.find((s) => s.id === currentStoryId) || STORIES[0];

  // Stories filtered/sorted by tag if active
  const displayedStories = activeTagFilter
    ? [...STORIES].sort((a, b) => {
        const aMatches = a.vocabularyTheme.toLowerCase().includes(activeTagFilter.toLowerCase()) ? -1 : 1;
        const bMatches = b.vocabularyTheme.toLowerCase().includes(activeTagFilter.toLowerCase()) ? -1 : 1;
        return aMatches - bMatches;
      })
    : STORIES;

  // Auto-advance audio handler
  useEffect(() => {
    const unsubscribe = audioPlayer.onEnded((endedId) => {
      if (!autoAdvance) return;

      const isDialogue = endedId.startsWith("switch_");
      const cleanId = isDialogue ? endedId.replace("switch_", "") : endedId;
      const parts = cleanId.split("_");
      if (parts.length < 3) return;

      const lineId = `${parts[0]}_${parts[1]}`;
      const currentLang = parts.slice(2).join("-");

      const lineIndex = currentStory.lines.findIndex((l) => l.id === lineId);
      if (lineIndex >= 0 && lineIndex + 1 < currentStory.lines.length) {
        const nextLine = currentStory.lines[lineIndex + 1];
        const nextElemId = isDialogue ? `dialogue-line-${lineIndex + 2}` : `line-${lineIndex + 2}`;

        setTimeout(() => {
          const nextElem = document.getElementById(nextElemId);
          if (nextElem) {
            nextElem.scrollIntoView({ behavior: "smooth", block: "center" });
            nextElem.classList.add("ring-4", "ring-sky-400", "animate-pulse");
            setTimeout(() => {
              nextElem.classList.remove("ring-4", "ring-sky-400", "animate-pulse");
            }, 1200);
          }

          const nextAudioId = isDialogue ? `switch_${nextLine.id}_${currentLang}` : `${nextLine.id}_${currentLang}`;
          const nextTrans = nextLine.translations[currentLang] || nextLine.translations["es-ES"];
          setActiveSpeakerId(nextLine.characterId);
          audioPlayer.playLine({
            id: nextAudioId,
            audioUrl: nextTrans.audioUrl,
            spokenText: nextTrans.text,
            langCode: currentLang,
            characterId: nextLine.characterId,
          });
        }, 500);
      }
    });

    return () => unsubscribe();
  }, [autoAdvance, currentStory]);

  // Language selection handlers
  const handleToggleLanguage = (code: string) => {
    setSelectedLanguageCodes((prev) => {
      if (prev.includes(code)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter((c) => c !== code);
      } else {
        return [...prev, code];
      }
    });
  };

  const handleApplyPreset = (codes: string[]) => {
    // If empty array passed (e.g. Deselect all), keep 1 default or empty
    if (codes.length === 0) {
      setSelectedLanguageCodes(["es-ES"]);
    } else {
      setSelectedLanguageCodes(codes);
    }
  };

  const handleSelectWord = (word: string, contextTranslation?: string, targetLangCode?: string) => {
    setInspectedWord({
      word,
      translation: contextTranslation,
      langCode: targetLangCode,
    });
    setVocabCount(vocabularyTracker.getTotalCount() + 1);
  };

  const handleSaveSettings = (newSettings: UserSettings) => {
    setSettings(newSettings);
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(newSettings));
    } catch (e) {
      console.error(e);
    }
  };

  const handleCompleteStory = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // Automatically record words seen from current story when advancing to next story
  const handleNextStory = () => {
    // Collect all words from the completed story in user's active languages (CJK segmented properly)
    currentStory.lines.forEach((line) => {
      selectedLanguageCodes.forEach((code) => {
        const trans = line.translations[code];
        if (trans && trans.text) {
          const words = extractVocabularyWords(trans.text, code);
          words.forEach((clean) => {
            if (clean.length > 0) {
              vocabularyTracker.recordWord(clean, code, trans.text);
            }
          });
        }
      });
    });
    setVocabCount(vocabularyTracker.getTotalCount());

    const currentIndex = STORIES.findIndex((s) => s.id === currentStoryId);
    const nextIndex = (currentIndex + 1) % STORIES.length;
    setCurrentStoryId(STORIES[nextIndex].id);
    handleCompleteStory();
  };

  const badges = achievementsManager.getBadges(vocabCount, settings.currentlyLearning.length);
  const unlockedBadgesCount = badges.filter((b) => b.unlocked).length;

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-slate-950 text-gray-900 dark:text-white flex flex-col font-sans pb-16 transition-colors duration-200">
      
      {/* Top Navigation */}
      <Navbar
        currentStoryId={currentStoryId}
        onSelectStory={(id) => {
          setCurrentStoryId(id);
          if (viewMode === "tour") setViewMode("parallel");
        }}
        viewMode={viewMode}
        onChangeViewMode={(mode) => setViewMode(mode)}
        onOpenLanguageModal={() => setIsLangModalOpen(true)}
        activeLanguageCount={selectedLanguageCodes.length}
        playbackSpeed={playbackSpeed}
        onChangeSpeed={(speed) => {
          setPlaybackSpeed(speed);
          audioPlayer.setSpeed(speed);
        }}
        showPhonetics={showPhonetics}
        onTogglePhonetics={() => setShowPhonetics(!showPhonetics)}
        autoAdvance={autoAdvance}
        onToggleAutoAdvance={() => setAutoAdvance(!autoAdvance)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenVocabulary={() => {
          setVocabCount(vocabularyTracker.getTotalCount());
          setIsVocabOpen(true);
        }}
        vocabularyCount={vocabCount}
        onOpenAchievements={() => setIsAchievementsOpen(true)}
        unlockedAchievementsCount={unlockedBadgesCount}
        username={settings.username}
        locale={locale}
        darkMode={settings.darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
        
        {/* World Tour View */}
        {viewMode === "tour" && (
          <WorldTourView
            locale={locale}
            onSelectStoryRoute={(storyId) => {
              setCurrentStoryId(storyId);
              setViewMode("parallel");
            }}
          />
        )}

        {/* Story Views (Parallel & Dialogue) */}
        {viewMode !== "tour" && (
          <>
            {/* Tag Filter Notification Pill if active */}
            {activeTagFilter && (
              <div className="mb-4 flex items-center justify-between p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 font-bold animate-fade-in">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>
                    {t.filteredByTag} <span className="font-black underline">"{activeTagFilter}"</span>
                  </span>
                </div>
                <button
                  onClick={() => setActiveTagFilter(null)}
                  className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 border border-gray-200 dark:border-slate-700 flex items-center gap-1 font-bold shadow-xs"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{t.clearFilter}</span>
                </button>
              </div>
            )}

            {/* Character Visual Stage */}
            <CharacterStage
              characterIds={currentStory.characters}
              activeCharacterId={activeSpeakerId}
              storyTitle={currentStory.title}
              conflictType={currentStory.conflictType}
              vocabularyTheme={currentStory.vocabularyTheme}
              activeTagFilter={activeTagFilter}
              onSelectTagFilter={(tag) => {
                setActiveTagFilter(tag);
                // Find story with matching theme if current one doesn't have it
                const matchingStory = STORIES.find(s => s.vocabularyTheme.toLowerCase().includes(tag.toLowerCase()));
                if (matchingStory) {
                  setCurrentStoryId(matchingStory.id);
                }
              }}
              onClearTagFilter={() => setActiveTagFilter(null)}
              locale={locale}
            />

            {/* View Mode 1: Parallel Polyglot Reader */}
            {viewMode === "parallel" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📖</span>
                    <h3 className="font-extrabold text-base text-gray-800 dark:text-gray-200">
                      {t.parallelReaderTitle(selectedLanguageCodes.length)}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsLangModalOpen(true)}
                    className="text-xs font-black text-duo-blue dark:text-sky-400 hover:underline"
                  >
                    {t.addMoreDialects}
                  </button>
                </div>

                {currentStory.lines.map((line, idx) => (
                  <ParallelSentenceRow
                    key={line.id}
                    line={line}
                    lineNumber={idx + 1}
                    totalLines={currentStory.lines.length}
                    activeLanguageCodes={selectedLanguageCodes}
                    activeAudioId={activeAudioId}
                    showPhonetics={showPhonetics}
                    onSelectWord={handleSelectWord}
                    onSpeakerActive={(charId) => setActiveSpeakerId(charId)}
                    onOpenFactCard={(lang) => setSelectedFactLang(lang)}
                    onExplainPhrase={(phrase, langCode, charId) =>
                      setExplainingPhrase({ phrase, langCode, characterId: charId })
                    }
                    locale={locale}
                  />
                ))}
              </div>
            )}

            {/* View Mode 2: Conversational Back-and-Forth Mode */}
            {viewMode === "dialogue" && (
              <CodeSwitchingView
                story={currentStory}
                activeAudioId={activeAudioId}
                showPhonetics={showPhonetics}
                onSelectWord={handleSelectWord}
                onSpeakerActive={(charId) => setActiveSpeakerId(charId)}
                onOpenFactCard={(lang) => setSelectedFactLang(lang)}
                onExplainPhrase={(phrase, langCode, charId) =>
                  setExplainingPhrase({ phrase, langCode, characterId: charId })
                }
                locale={locale}
              />
            )}

            {/* Story Completion Banner */}
            <div className="mt-10 bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-gray-200 dark:border-slate-800 shadow-duo-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
                  🏆
                </div>
                <div>
                  <h4 className="font-black text-base text-gray-900 dark:text-white">
                    {t.storyCompletedTitle}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">
                    {t.storyCompletedDesc(selectedLanguageCodes.length)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCompleteStory}
                  className="btn-duo-white text-xs py-2.5 px-4 flex-1 sm:flex-none flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{t.celebrate}</span>
                </button>
                <button
                  onClick={handleNextStory}
                  className="btn-duo-green text-xs py-2.5 px-5 flex-1 sm:flex-none flex items-center justify-center gap-1.5"
                >
                  <span>{t.nextStory}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}

      </main>

      {/* Word & Phrase Inspector Modal */}
      <WordInspectorModal
        isOpen={Boolean(inspectedWord)}
        word={inspectedWord?.word || null}
        contextSentence={inspectedWord?.translation}
        langCode={inspectedWord?.langCode}
        activeLanguageCodes={selectedLanguageCodes}
        geminiApiKey={settings.geminiApiKey}
        onClose={() => setInspectedWord(null)}
        locale={locale}
      />

      {/* Language / Dialect Selection Modal */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
        selectedLanguageCodes={selectedLanguageCodes}
        onToggleLanguage={handleToggleLanguage}
        onSelectLanguagePreset={handleApplyPreset}
        currentlyLearningCodes={settings.currentlyLearning}
        onOpenFactCard={(lang) => setSelectedFactLang(lang)}
        locale={locale}
      />

      {/* Language Fact Card Modal */}
      <LanguageFactModal
        language={selectedFactLang}
        onClose={() => setSelectedFactLang(null)}
        locale={locale}
      />

      {/* AI Phrase Explainer Modal */}
      <PhraseExplainerModal
        isOpen={Boolean(explainingPhrase)}
        onClose={() => setExplainingPhrase(null)}
        phrase={explainingPhrase?.phrase || ""}
        langCode={explainingPhrase?.langCode || "es-ES"}
        characterId={explainingPhrase?.characterId || "hugo"}
        geminiApiKey={settings.geminiApiKey}
        locale={locale}
      />

      {/* User Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSaveSettings={handleSaveSettings}
        onLiveThemeChange={(dark) => {
          setSettings(prev => ({ ...prev, darkMode: dark }));
        }}
        locale={locale}
      />

      {/* Vocabulary Drawer */}
      <VocabularyDrawer
        isOpen={isVocabOpen}
        onClose={() => setIsVocabOpen(false)}
        onSelectWord={(word, context, langCode) => {
          setInspectedWord({ word, translation: context, langCode });
        }}
        locale={locale}
      />

      {/* Achievements Modal */}
      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
        badges={badges}
        locale={locale}
      />

    </div>
  );
};

export default App;
