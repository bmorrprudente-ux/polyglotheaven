import React, { useState } from "react";
import { LANGUAGES } from "../data/languages";
import { X, Moon, Sun, Globe, BookOpen, Key, Check, Info, ExternalLink, Flag, Trash2, User, CheckCircle2 } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";
import { voiceFlagger } from "../utils/voiceFlagger";
import { themeManager } from "../utils/themeManager";

export interface UserSettings {
  username: string;
  darkMode: boolean;
  interfaceLanguage: "es" | "en" | "fr" | "pt";
  currentlyLearning: string[]; // Language codes user is studying
  masteredLanguages?: string[]; // Language codes user already speaks/dominates
  geminiApiKey?: string;
}

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onSaveSettings: (newSettings: UserSettings) => void;
  onLiveThemeChange?: (dark: boolean) => void;
  locale?: SupportedLocale;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
  onLiveThemeChange,
  locale = "es",
}) => {
  const [username, setUsername] = useState(settings.username || "Políglota");
  const [darkMode, setDarkMode] = useState(settings.darkMode);
  const [interfaceLanguage, setInterfaceLanguage] = useState(settings.interfaceLanguage);
  const [currentlyLearning, setCurrentlyLearning] = useState<string[]>(settings.currentlyLearning || []);
  const [masteredLanguages, setMasteredLanguages] = useState<string[]>(settings.masteredLanguages || ["es-ES"]);
  const [geminiApiKey, setGeminiApiKey] = useState(settings.geminiApiKey || "");
  const [searchFilter, setSearchFilter] = useState("");
  const [flaggedVoices, setFlaggedVoices] = useState<string[]>(() => voiceFlagger.getFlaggedVoiceCodes());

  // Keep state in sync when opened
  React.useEffect(() => {
    if (isOpen) {
      setUsername(settings.username || "Políglota");
      setDarkMode(settings.darkMode);
      setInterfaceLanguage(settings.interfaceLanguage);
      setCurrentlyLearning(settings.currentlyLearning || []);
      setMasteredLanguages(settings.masteredLanguages || ["es-ES"]);
      setGeminiApiKey(settings.geminiApiKey || "");
    }
  }, [isOpen, settings]);

  const handleSelectTheme = (dark: boolean) => {
    setDarkMode(dark);
    themeManager.applyTheme(dark);
    if (onLiveThemeChange) {
      onLiveThemeChange(dark);
    }
  };

  if (!isOpen) return null;

  const t = I18N[interfaceLanguage] || I18N.es;

  const toggleLearningLang = (code: string) => {
    setCurrentlyLearning(prev =>
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  const toggleMasteredLang = (code: string) => {
    setMasteredLanguages(prev =>
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  const handleSave = () => {
    onSaveSettings({
      username: username.trim() || "Políglota",
      darkMode,
      interfaceLanguage,
      currentlyLearning,
      masteredLanguages,
      geminiApiKey: geminiApiKey.trim(),
    });
    onClose();
  };

  const handleClearFlagged = () => {
    voiceFlagger.clearAll();
    setFlaggedVoices([]);
  };

  const allLangList = Object.values(LANGUAGES);
  const filteredLangs = allLangList.filter(l =>
    l.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    l.nativeName.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const initials = username
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase() || "PO";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-5 pb-4 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-duo-green/15 text-duo-green flex items-center justify-center font-black">
              ⚙️
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white">
                {t.userSettingsTitle}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {t.userSettingsDesc}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          
          {/* User Profile & Initials Logo */}
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 text-white flex items-center justify-center text-xl font-black shadow-md flex-shrink-0 tracking-wider">
              {initials}
            </div>
            <div className="flex-1">
              <label className="text-xs font-black uppercase tracking-wider text-gray-400 block mb-1">
                {t.usernameLabel}
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder={t.usernamePlaceholder}
                className="w-full px-3.5 py-1.5 text-sm font-bold rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white"
              />
            </div>
          </div>

          {/* Theme Option */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-gray-400 block mb-2">
              {t.visualTheme}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSelectTheme(false)}
                className={`flex items-center justify-center gap-2 p-3 rounded-2xl border-2 font-bold text-xs transition-all ${
                  !darkMode
                    ? "bg-amber-50 border-amber-400 text-amber-900 shadow-sm"
                    : "bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300"
                }`}
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span>{t.lightMode}</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectTheme(true)}
                className={`flex items-center justify-center gap-2 p-3 rounded-2xl border-2 font-bold text-xs transition-all ${
                  darkMode
                    ? "bg-slate-800 border-sky-500 text-white shadow-sm"
                    : "bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300"
                }`}
              >
                <Moon className="w-4 h-4 text-sky-400" />
                <span>{t.darkMode}</span>
              </button>
            </div>
          </div>

          {/* Interface Language */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-gray-400 block mb-2">
              {t.interfaceLanguage}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { code: "es", name: "Español", flag: "🇪🇸" },
                { code: "en", name: "English", flag: "🇬🇧" },
                { code: "fr", name: "Français", flag: "🇫🇷" },
                { code: "pt", name: "Português", flag: "🇧🇷" },
              ].map(item => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setInterfaceLanguage(item.code as any)}
                  className={`p-2.5 rounded-xl border-2 font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    interfaceLanguage === item.code
                      ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-300 shadow-sm"
                      : "bg-gray-50 dark:bg-slate-800/40 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>{item.flag}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mastered Languages (Fluent) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Idiomas que domino ({masteredLanguages.length})</span>
              </label>
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-bold">
                Para el cálculo de alcance humano
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 p-2 rounded-2xl border border-gray-200 dark:border-slate-800 bg-emerald-50/30 dark:bg-emerald-950/20 mb-3 max-h-32 overflow-y-auto">
              {filteredLangs.slice(0, 16).map(lang => {
                const isSelected = masteredLanguages.includes(lang.code);
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => toggleMasteredLang(lang.code)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      isSelected
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name.replace(/^(Español|Inglés|Francés|Portugués|Árabe|Chino)\s*/, "")}</span>
                    {isSelected && <Check className="w-3 h-3 ml-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Currently Learning (Focus Languages) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                <span>{t.currentlyLearningLabel(currentlyLearning.length)}</span>
              </label>
              <span className="text-[11px] text-sky-600 dark:text-sky-400 font-bold">
                {t.currentlyLearningSubtitle}
              </span>
            </div>

            <input
              type="text"
              placeholder={t.searchLanguagePlaceholder}
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 mb-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white font-medium"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-1 border border-gray-200 dark:border-slate-800 rounded-2xl bg-gray-50/50 dark:bg-slate-800/20">
              {filteredLangs.map(lang => {
                const isSelected = currentlyLearning.includes(lang.code);
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => toggleLearningLang(lang.code)}
                    className={`flex items-center justify-between p-2 rounded-xl text-left border transition-all text-xs ${
                      isSelected
                        ? "bg-sky-100 dark:bg-sky-950/60 border-sky-400 dark:border-sky-600 text-sky-950 dark:text-sky-200 font-extrabold"
                        : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span>{lang.flag}</span>
                      <span className="truncate">{lang.name.replace(/^(Español|Inglés|Francés|Portugués|Árabe|Chino)\s*/, "")}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Google Gemini API Key & Instructions */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-sky-500/10 dark:from-purple-950/40 dark:to-sky-950/40 border border-purple-200 dark:border-purple-800/50">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-purple-900 dark:text-purple-200">
                <Key className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>{t.geminiKeyLabel}</span>
              </div>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-black text-purple-600 dark:text-purple-300 hover:underline flex items-center gap-1"
              >
                <span>{t.geminiGetFreeKey}</span>
              </a>
            </div>

            <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed mb-2.5">
              {t.geminiKeyDesc}
            </p>

            <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-purple-200/60 dark:border-slate-700 mb-3 text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="font-bold text-gray-800 dark:text-gray-200 mb-1">Pasos rápidos para tu clave gratuita:</p>
              <ol className="list-decimal list-inside space-y-0.5">
                <li>Abre Google AI Studio con tu cuenta Google.</li>
                <li>Haz clic en «Create API key» (gratuita, sin tarjeta requerida).</li>
                <li>Pégala a continuación y pulsa guardar.</li>
              </ol>
            </div>

            <input
              type="password"
              placeholder="AIzaSy..."
              value={geminiApiKey}
              onChange={e => setGeminiApiKey(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white font-mono"
            />
          </div>

          {/* Flagged Voices for ElevenLabs Upgrade */}
          {flaggedVoices.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 dark:text-amber-200">
                  <Flag className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.flaggedVoicesTitle} ({flaggedVoices.length})</span>
                </div>
                <button
                  type="button"
                  onClick={handleClearFlagged}
                  className="text-[11px] text-red-500 hover:underline flex items-center gap-1 font-bold"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Limpiar</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-600 dark:text-gray-300 mb-2.5">
                {t.flaggedVoicesDesc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {flaggedVoices.map(code => {
                  const lang = LANGUAGES[code];
                  return (
                    <span
                      key={code}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-xs font-bold text-gray-800 dark:text-gray-200"
                    >
                      <span>{lang?.flag || "🌐"}</span>
                      <span>{lang?.name || code}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 font-bold text-xs text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {t.cancel}
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-duo-green hover:bg-duo-green-dark text-white font-extrabold text-xs rounded-xl transition-all shadow-duo"
          >
            {t.saveChanges}
          </button>
        </div>

      </div>
    </div>
  );
};
