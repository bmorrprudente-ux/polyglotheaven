import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { STORIES, Story } from "./data/stories";
import { LANGUAGES, Language } from "./data/languages";
import { Navbar, ViewMode } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
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
import { FlashcardsModal } from "./components/FlashcardsModal";
import { LanguageFamiliesModal } from "./components/LanguageFamiliesModal";
import { AboutModal } from "./components/AboutModal";
import { audioPlayer, PlaybackRate } from "./utils/audioPlayer";
import { vocabularyTracker } from "./utils/vocabularyTracker";
import { achievementsManager } from "./utils/achievements";
import { extractVocabularyWords } from "./utils/textSegmenter";
import { themeManager } from "./utils/themeManager";
import { polyglotDB } from "./utils/polyglotDB";
import { I18N } from "./utils/i18n";
import { Sparkles, ArrowRight, X } from "lucide-react";

const SETTINGS_STORAGE_KEY = "telar_user_settings_v4";

const DEFAULT_SETTINGS: UserSettings = {
  username: "Políglota",
  darkMode: false,
  interfaceLanguage: "es",
  currentlyLearning: ["fr-FR", "pt-BR", "nl-NL", "de-DE", "it-IT"],
  masteredLanguages: ["es-ES", "en-US"],
  geminiApiKey: "",
};

export const App: React.FC = () => {
  // User Settings state with Polyglot Database persistence
  const [settings, setSettings] = useState<UserSettings>(() => {
    try {
      const dbSettings = polyglotDB.getSettingsSync();
      if (dbSettings) {
        return {
          ...DEFAULT_SETTINGS,
          ...dbSettings,
          darkMode: themeManager.isDarkMode(),
        };
      }

      const v4 = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (v4) {
        const parsed = JSON.parse(v4);
        return {
          ...DEFAULT_SETTINGS,
          ...parsed,
          darkMode: themeManager.isDarkMode(),
        };
      }

      // Migrate previous versions if available, preserving user API key and profile
      const prev = localStorage.getItem("telar_user_settings_v3") || 
                   localStorage.getItem("telar_user_settings_v2") || 
                   localStorage.getItem("telar_user_settings_v1");
      if (prev) {
        const parsed = JSON.parse(prev);
        const migrated: UserSettings = {
          ...DEFAULT_SETTINGS,
          ...parsed,
          darkMode: false,
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

  // Navigation & Story state (starts on new Home Page)
  const [currentStoryId, setCurrentStoryId] = useState<string>(() => {
    return polyglotDB.getStoryPreferencesSync()?.currentStoryId || "story_1";
  });
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    return polyglotDB.getStoryPreferencesSync()?.viewMode || "home";
  });
  const [activeTagFilter, setActiveTagFilter] = useState<string | null>(null);

  // Story languages customization: loaded from database or synced from user's learning languages
  const [selectedLanguageCodes, setSelectedLanguageCodes] = useState<string[]>(() => {
    const dbPrefs = polyglotDB.getStoryPreferencesSync();
    if (dbPrefs?.selectedLanguageCodes && dbPrefs.selectedLanguageCodes.length > 0) {
      return dbPrefs.selectedLanguageCodes;
    }

    // If user has learning languages defined, show anchor + learning languages in cuentos
    const dbSettings = polyglotDB.getSettingsSync();
    const learning = dbSettings?.currentlyLearning || settings.currentlyLearning;
    const mastered = dbSettings?.masteredLanguages || settings.masteredLanguages || ["es-ES"];
    if (learning && learning.length > 0) {
      const anchor = mastered.length > 0 ? mastered[0] : "es-ES";
      return [anchor, ...learning.filter(c => c !== anchor)];
    }

    return ["es-ES", "es-MX", "es-DO", "fr-FR", "pt-BR", "ja-JP"];
  });

  // Background sync from IndexedDB on startup
  useEffect(() => {
    polyglotDB.initDB().then(async () => {
      const [dbSettings, dbPrefs] = await Promise.all([
        polyglotDB.getSettings(),
        polyglotDB.getStoryPreferences(),
      ]);

      if (dbSettings) {
        setSettings(prev => ({ ...prev, ...dbSettings }));
      }
      if (dbPrefs?.selectedLanguageCodes && dbPrefs.selectedLanguageCodes.length > 0) {
        setSelectedLanguageCodes(dbPrefs.selectedLanguageCodes);
      }
      if (dbPrefs?.currentStoryId) {
        setCurrentStoryId(dbPrefs.currentStoryId);
      }
      if (dbPrefs?.viewMode) {
        setViewMode(dbPrefs.viewMode);
      }
    });
  }, []);

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
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState<boolean>(false);
  const [isFamiliesOpen, setIsFamiliesOpen] = useState<boolean>(false);
  const [familiesTab, setFamiliesTab] = useState<"combinations" | "families">("combinations");
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
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

  // Initialize theme on mount
  useEffect(() => {
    themeManager.init();
  }, []);

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
        const nextAudioId = isDialogue
          ? `switch_${nextLine.id}_${nextLine.characterId}`
          : `${nextLine.id}_${currentLang}`;

        const nextTrans = nextLine.translations[currentLang];
        const nextAudioUrl = nextTrans?.audioUrl;

        if (nextAudioUrl) {
          setTimeout(() => {
            audioPlayer.playLine({
              id: nextAudioId,
              audioUrl: nextAudioUrl,
              spokenText: nextTrans.text,
              langCode: currentLang,
              characterId: nextLine.characterId as any
            });
            setActiveSpeakerId(nextLine.characterId);
          }, 400);
        }
      }
    });

    return () => unsubscribe();
  }, [autoAdvance, currentStory]);

  const handleToggleLanguage = (code: string) => {
    setSelectedLanguageCodes((prev) => {
      const next = prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code];
      polyglotDB.saveStoryPreferences({ selectedLanguageCodes: next });
      return next;
    });
  };

  const handleApplyPreset = (codes: string[]) => {
    setSelectedLanguageCodes(codes);
    polyglotDB.saveStoryPreferences({ selectedLanguageCodes: codes });
  };

  const handleWordClick = (word: string, contextTranslation?: string, targetLangCode?: string) => {
    setInspectedWord({
      word,
      translation: contextTranslation,
      langCode: targetLangCode,
    });
    setVocabCount(vocabularyTracker.getTotalCount() + 1);
  };

  const handleSaveSettings = (newSettings: UserSettings) => {
    setSettings(newSettings);
    themeManager.applyTheme(newSettings.darkMode);

    // Sincronizar inmediatamente los idiomas de los cuentos con los que el usuario está aprendiendo
    if (newSettings.currentlyLearning && newSettings.currentlyLearning.length > 0) {
      const anchor = (newSettings.masteredLanguages && newSettings.masteredLanguages.length > 0)
        ? newSettings.masteredLanguages[0]
        : "es-ES";
      const updatedStoryLangs = [
        anchor,
        ...newSettings.currentlyLearning.filter((code) => code !== anchor),
      ];
      setSelectedLanguageCodes(updatedStoryLangs);
      polyglotDB.saveStoryPreferences({ selectedLanguageCodes: updatedStoryLangs });
    }

    // Persistir de forma robusta en la base de datos IndexedDB
    polyglotDB.saveSettings({
      username: newSettings.username,
      darkMode: newSettings.darkMode,
      interfaceLanguage: newSettings.interfaceLanguage,
      currentlyLearning: newSettings.currentlyLearning || [],
      masteredLanguages: newSettings.masteredLanguages || ["es-ES"],
      geminiApiKey: newSettings.geminiApiKey || "",
    });

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
    currentStory.lines.forEach((line) => {
      selectedLanguageCodes.forEach((code) => {
        const trans = line.translations[code];
        if (trans && trans.text) {
          const words = extractVocabularyWords(trans.text, code);
          words.forEach((w) => vocabularyTracker.recordWord(w, code, trans.text));
        }
      });
    });

    setVocabCount(vocabularyTracker.getTotalCount());

    const currentIndex = STORIES.findIndex((s) => s.id === currentStoryId);
    const nextIndex = (currentIndex + 1) % STORIES.length;
    const nextId = STORIES[nextIndex].id;
    setCurrentStoryId(nextId);
    polyglotDB.saveStoryPreferences({ currentStoryId: nextId });
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
          polyglotDB.saveStoryPreferences({ currentStoryId: id });
          if (viewMode === "tour" || viewMode === "home") {
            setViewMode("parallel");
            polyglotDB.saveStoryPreferences({ viewMode: "parallel" });
          }
        }}
        viewMode={viewMode}
        onChangeViewMode={(mode) => {
          setViewMode(mode);
          polyglotDB.saveStoryPreferences({ viewMode: mode });
        }}
        onOpenLanguageModal={() => setIsLangModalOpen(true)}
        activeLanguageCount={selectedLanguageCodes.length}
        playbackSpeed={playbackSpeed}
        onChangeSpeed={(speed) => {
          setPlaybackSpeed(speed);
          audioPlayer.setSpeed(speed);
          polyglotDB.saveStoryPreferences({ playbackSpeed: speed });
        }}
        showPhonetics={showPhonetics}
        onTogglePhonetics={() => {
          const next = !showPhonetics;
          setShowPhonetics(next);
          polyglotDB.saveStoryPreferences({ showPhonetics: next });
        }}
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
        onOpenFlashcards={() => setIsFlashcardsOpen(true)}
        onOpenFamilies={() => {
          setFamiliesTab("combinations");
          setIsFamiliesOpen(true);
        }}
        onOpenAbout={() => setIsAboutOpen(true)}
        username={settings.username}
        locale={locale}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-6 w-full">
        
        {/* NEW HOME PAGE VIEW */}
        {viewMode === "home" && (
          <HomePage
            onStartReading={() => {
              setViewMode("parallel");
              polyglotDB.saveStoryPreferences({ viewMode: "parallel" });
            }}
            onOpenTour={() => {
              setViewMode("tour");
              polyglotDB.saveStoryPreferences({ viewMode: "tour" });
            }}
            onOpenFlashcards={() => setIsFlashcardsOpen(true)}
            onOpenFamilies={(tab) => {
              if (tab) setFamiliesTab(tab);
              setIsFamiliesOpen(true);
            }}
            onOpenSettings={() => setIsSettingsOpen(true)}
            masteredLanguageCodes={settings.masteredLanguages || ["es-ES", "en-US"]}
            learningLanguageCodes={settings.currentlyLearning || ["fr-FR", "pt-BR", "nl-NL"]}
            onUpdateMastered={(codes) => {
              const updated = { ...settings, masteredLanguages: codes };
              setSettings(updated);
              polyglotDB.saveSettings({
                username: updated.username,
                darkMode: updated.darkMode,
                interfaceLanguage: updated.interfaceLanguage,
                currentlyLearning: updated.currentlyLearning || [],
                masteredLanguages: codes,
                geminiApiKey: updated.geminiApiKey || "",
              });
              try {
                localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updated));
              } catch (e) {
                console.error(e);
              }
            }}
            onUpdateLearning={(codes) => {
              const updated = { ...settings, currentlyLearning: codes };
              setSettings(updated);
              if (codes && codes.length > 0) {
                const anchor = (settings.masteredLanguages && settings.masteredLanguages.length > 0)
                  ? settings.masteredLanguages[0]
                  : "es-ES";
                const storyLangs = [anchor, ...codes.filter((c) => c !== anchor)];
                setSelectedLanguageCodes(storyLangs);
                polyglotDB.saveStoryPreferences({ selectedLanguageCodes: storyLangs });
              }
              polyglotDB.saveSettings({
                username: updated.username,
                darkMode: updated.darkMode,
                interfaceLanguage: updated.interfaceLanguage,
                currentlyLearning: codes,
                masteredLanguages: updated.masteredLanguages || ["es-ES"],
                geminiApiKey: updated.geminiApiKey || "",
              });
              try {
                localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updated));
              } catch (e) {
                console.error(e);
              }
            }}
            locale={locale}
          />
        )}

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
        {(viewMode === "parallel" || viewMode === "dialogue") && (
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
              onSelectTagFilter={(tag) => setActiveTagFilter(tag)}
              onClearTagFilter={() => setActiveTagFilter(null)}
              locale={locale}
            />

            {/* Story Dialogue View (Code Switching) */}
            {viewMode === "dialogue" && (
              <div className="mt-8">
                <CodeSwitchingView
                  story={currentStory}
                  activeAudioId={activeAudioId}
                  showPhonetics={showPhonetics}
                  onSelectWord={handleWordClick}
                  onSpeakerActive={(speakerId) => setActiveSpeakerId(speakerId)}
                  onOpenFactCard={(lang) => setSelectedFactLang(lang)}
                  onExplainPhrase={(phrase, langCode, charId) => {
                    setExplainingPhrase({ phrase, langCode, characterId: charId });
                  }}
                  locale={locale}
                />
              </div>
            )}

            {/* Parallel Sentence Reader */}
            {viewMode === "parallel" && (
              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {t.parallelReaderTitle(selectedLanguageCodes.length)}
                  </h3>
                  <button
                    onClick={() => setIsLangModalOpen(true)}
                    className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    {t.addMoreDialects}
                  </button>
                </div>

                <div className="space-y-4">
                  {currentStory.lines.map((line, index) => (
                    <ParallelSentenceRow
                      key={line.id}
                      line={line}
                      lineNumber={index + 1}
                      totalLines={currentStory.lines.length}
                      activeLanguageCodes={selectedLanguageCodes}
                      activeAudioId={activeAudioId}
                      showPhonetics={showPhonetics}
                      onSelectWord={handleWordClick}
                      onSpeakerActive={(speakerId) => setActiveSpeakerId(speakerId)}
                      onOpenFactCard={(lang) => setSelectedFactLang(lang)}
                      onExplainPhrase={(phrase, langCode, charId) => {
                        setExplainingPhrase({ phrase, langCode, characterId: charId });
                      }}
                      locale={locale}
                    />
                  ))}
                </div>

                {/* Bottom Story Completion Bar */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-800 shadow-duo-card flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div>
                    <h4 className="font-black text-base text-gray-900 dark:text-white">
                      {t.storyCompletedTitle}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {t.storyCompletedDesc(selectedLanguageCodes.length)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCompleteStory}
                      className="px-4 py-2.5 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 dark:bg-amber-950 dark:text-amber-200 font-bold text-xs transition-all shadow-xs"
                    >
                      🎉 {t.celebrate}
                    </button>
                    <button
                      onClick={handleNextStory}
                      className="btn-duo-green flex items-center gap-2 py-2.5 px-5 text-xs"
                    >
                      <span>{t.nextStory}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
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
          themeManager.applyTheme(dark);
          setSettings((prev) => ({ ...prev, darkMode: dark }));
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

      {/* Flashcards Modal */}
      <FlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
        activeLanguageCodes={selectedLanguageCodes}
        geminiApiKey={settings.geminiApiKey}
        locale={locale}
      />

      {/* Language Families & Classic Combinations Modal */}
      <LanguageFamiliesModal
        isOpen={isFamiliesOpen}
        onClose={() => setIsFamiliesOpen(false)}
        defaultTab={familiesTab}
        locale={locale}
        onSelectCombination={(comb) => {
          // Switch to reading mode with the languages of the combination
          const codes = comb.languages.map((l) => l.code);
          setSelectedLanguageCodes(codes);
          setViewMode("parallel");
        }}
      />

      {/* About Modal (Duolingo Comparison) */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        locale={locale}
      />

    </div>
  );
};

export default App;
