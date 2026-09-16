import React, { useState, useMemo } from "react";
import { CloudSunIcon } from "./CloudSunIcon";
import { LANGUAGE_MATRIX, LanguageMatrixItem, calculateReachablePeople, OrthographicScoreLevel } from "../data/languageMatrix";
import { CLASSIC_COMBINATIONS, LANGUAGE_FAMILIES } from "../data/languageFamilies";
import { LANGUAGES } from "../data/languages";
import {
  BookOpen,
  Headphones,
  PenTool,
  MessageSquare,
  Globe2,
  Users,
  TrendingUp,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Flame,
  DollarSign,
  Compass,
  GraduationCap
} from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface HomePageProps {
  onStartReading: () => void;
  onOpenTour: () => void;
  onOpenFlashcards: () => void;
  onOpenFamilies: (tab?: "combinations" | "families") => void;
  onOpenSettings: () => void;
  masteredLanguageCodes: string[];
  learningLanguageCodes: string[];
  onUpdateMastered: (codes: string[]) => void;
  onUpdateLearning: (codes: string[]) => void;
  locale?: SupportedLocale;
}

const getOrthographyBadge = (level: OrthographicScoreLevel) => {
  switch (level) {
    case "Muy fácil":
      return "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700";
    case "Fácil":
      return "bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-700";
    case "Moderada":
      return "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700";
    case "Difícil":
      return "bg-orange-100 dark:bg-orange-950/80 text-orange-800 dark:text-orange-300 border-orange-300 dark:border-orange-700";
    case "Muy difícil":
      return "bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-700";
    default:
      return "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-300";
  }
};

export const HomePage: React.FC<HomePageProps> = ({
  onStartReading,
  onOpenTour,
  onOpenFlashcards,
  onOpenFamilies,
  onOpenSettings,
  masteredLanguageCodes,
  learningLanguageCodes,
  onUpdateMastered,
  onUpdateLearning,
  locale = "es",
}) => {
  const t = I18N[locale] || I18N.es;

  // Filter & Search states for the Language Matrix Table
  const [searchQuery, setSearchQuery] = useState("");
  const [matrixFilter, setMatrixFilter] = useState<
    "all" | "growth" | "economy" | "culture" | "untranslated" | "easy" | "digital"
  >("all");
  const [expandedLangId, setExpandedLangId] = useState<string | null>(null);

  // Practice Mode interactive sub-drawer or state
  const [activePracticeTab, setActivePracticeTab] = useState<"reading" | "writing">("reading");
  const [diaryNote, setDiaryNote] = useState("");
  const [diarySaved, setDiarySaved] = useState(false);

  // States for expandable "..." languages in Reach Calculator
  const [showMoreMastered, setShowMoreMastered] = useState(false);
  const [searchMastered, setSearchMastered] = useState("");
  const [showMoreLearning, setShowMoreLearning] = useState(false);
  const [searchLearning, setSearchLearning] = useState("");

  // Calculate Reachable People in real time
  const reachStats = useMemo(() => {
    return calculateReachablePeople(masteredLanguageCodes, learningLanguageCodes);
  }, [masteredLanguageCodes, learningLanguageCodes]);

  // Filtered Matrix List
  const filteredLanguages = useMemo(() => {
    return LANGUAGE_MATRIX.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.family.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (matrixFilter === "growth") return item.demographicTrajectory === "Rápido crecimiento";
      if (matrixFilter === "economy") return item.economicWeightTrillionUSD >= 3.0;
      if (matrixFilter === "culture") return item.culturalSoftPowerScore >= 85;
      if (matrixFilter === "untranslated")
        return item.untranslatedTreasures.toLowerCase().includes("inmens") ||
               item.untranslatedTreasures.toLowerCase().includes("océano") ||
               item.untranslatedTreasures.toLowerCase().includes("cumbre") ||
               item.untranslatedTreasures.toLowerCase().includes("mayor");
      if (matrixFilter === "easy")
        return item.fsiSpanishEquiv === "Muy fácil" || item.fsiSpanishEquiv === "Fácil" || item.fsiSpanishEquiv === "Nativo";
      if (matrixFilter === "digital") return item.digitalFootprintRank <= 6;

      return true;
    });
  }, [searchQuery, matrixFilter]);

  // Helper to check if a code or its dialect is active in a list
  const isCodeActive = (activeCodes: string[], code: string) => {
    return activeCodes.some(
      (c) => c === code || c.startsWith(code + "-") || code.startsWith(c.split("-")[0])
    );
  };

  // Default dialect mapping so selecting a base language (e.g. it, el, ko) maps to its full locale if available
  const defaultDialectMap: Record<string, string> = {
    es: "es-ES", en: "en-US", cmn: "cmn-CN", fr: "fr-FR", pt: "pt-BR",
    ar: "ar-EG", ru: "ru-RU", ja: "ja-JP", de: "de-DE", hi: "hi-IN",
    id: "id-ID", sw: "sw-KE", it: "it-IT", el: "el-GR", ko: "ko-KR",
    tr: "tr-TR", nl: "nl-NL", pl: "pl-PL", uk: "uk-UA", cs: "cs-CZ",
    ro: "ro-RO", sv: "sv-SE", nb: "nb-NO", da: "da-DK", fi: "fi-FI",
    hr: "hr-HR", hu: "hu-HU", he: "he-IL", th: "th-TH", ms: "ms-MY",
    bn: "bn-IN", ur: "ur-PK", pa: "pa-IN", gu: "gu-IN", mr: "mr-IN",
    ta: "ta-IN", te: "te-IN", kn: "kn-IN", ml: "ml-IN", eu: "eu-ES",
    qu: "qu-PE", gn: "gn-PY", ay: "ay-BO", nah: "nah-MX", nv: "nv-US",
    yue: "yue-HK", zh: "zh-TW", ca: "ca-ES", gl: "gl-ES", oc: "oc-FR",
  };

  // Quick toggle language helpers
  const toggleMasteredCode = (code: string) => {
    const isCurrentlySelected = isCodeActive(masteredLanguageCodes, code);
    if (isCurrentlySelected) {
      onUpdateMastered(
        masteredLanguageCodes.filter(
          (c) => c !== code && !c.startsWith(code + "-") && !code.startsWith(c.split("-")[0])
        )
      );
    } else {
      const codeToStore = defaultDialectMap[code] || code;
      onUpdateMastered([...masteredLanguageCodes, codeToStore]);
    }
  };

  const toggleLearningCode = (code: string) => {
    const isCurrentlySelected = isCodeActive(learningLanguageCodes, code);
    if (isCurrentlySelected) {
      onUpdateLearning(
        learningLanguageCodes.filter(
          (c) => c !== code && !c.startsWith(code + "-") && !code.startsWith(c.split("-")[0])
        )
      );
    } else {
      const codeToStore = defaultDialectMap[code] || code;
      onUpdateLearning([...learningLanguageCodes, codeToStore]);
    }
  };

  const POPULAR_OPTIONS = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "Inglés", flag: "🇬🇧" },
    { code: "cmn", label: "Chino", flag: "🇨🇳" },
    { code: "fr", label: "Francés", flag: "🇫🇷" },
    { code: "pt", label: "Portugués", flag: "🇧🇷" },
    { code: "ar", label: "Árabe", flag: "🇸🇦" },
    { code: "ru", label: "Ruso", flag: "🇷🇺" },
    { code: "ja", label: "Japonés", flag: "🇯🇵" },
    { code: "de", label: "Alemán", flag: "🇩🇪" },
    { code: "hi", label: "Hindi", flag: "🇮🇳" },
    { code: "id", label: "Indonesio", flag: "🇮🇩" },
    { code: "sw", label: "Suajili", flag: "🇰🇪" },
  ];

  const popularCodeSet = useMemo(() => new Set(POPULAR_OPTIONS.map((p) => p.code)), []);

  // All other languages from the matrix sorted alphabetically
  const OTHER_OPTIONS = useMemo(() => {
    return LANGUAGE_MATRIX.filter((item) => !popularCodeSet.has(item.id))
      .map((item) => ({
        code: item.id,
        label: item.name,
        flag: item.flag,
      }))
      .sort((a, b) => a.label.localeCompare(b.label, "es"));
  }, [popularCodeSet]);

  // If a language from OTHER_OPTIONS is selected, keep it pinned in the visible primary list
  const visibleMasteredPopular = useMemo(() => {
    const extraSelected = OTHER_OPTIONS.filter((opt) => isCodeActive(masteredLanguageCodes, opt.code));
    return [...POPULAR_OPTIONS, ...extraSelected];
  }, [OTHER_OPTIONS, masteredLanguageCodes]);

  const visibleLearningPopular = useMemo(() => {
    const extraSelected = OTHER_OPTIONS.filter((opt) => isCodeActive(learningLanguageCodes, opt.code));
    return [...POPULAR_OPTIONS, ...extraSelected];
  }, [OTHER_OPTIONS, learningLanguageCodes]);

  const filteredOtherMastered = useMemo(() => {
    if (!searchMastered.trim()) return OTHER_OPTIONS;
    const q = searchMastered.toLowerCase();
    return OTHER_OPTIONS.filter((opt) => opt.label.toLowerCase().includes(q));
  }, [OTHER_OPTIONS, searchMastered]);

  const filteredOtherLearning = useMemo(() => {
    if (!searchLearning.trim()) return OTHER_OPTIONS;
    const q = searchLearning.toLowerCase();
    return OTHER_OPTIONS.filter((opt) => opt.label.toLowerCase().includes(q));
  }, [OTHER_OPTIONS, searchLearning]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-12 animate-fade-in">
      
      {/* HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-700 text-white p-6 sm:p-10 shadow-xl border border-white/20">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black tracking-wider uppercase border border-white/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>El santuario del aprendizaje políglota</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/15 backdrop-blur-md p-2 flex items-center justify-center border border-white/30 shadow-inner flex-shrink-0">
              <CloudSunIcon className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight drop-shadow-sm">
                Polyglot Heaven
              </h1>
              <p className="text-sm sm:text-base text-sky-100 font-bold mt-1">
                Conecta con el mundo a través de microcuentos situacionales, lectura paralela, dialectos y fonética real.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onStartReading}
              className="px-6 py-3 bg-white hover:bg-amber-50 text-indigo-900 font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Comenzar a practicar</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </button>

            <button
              onClick={onOpenTour}
              className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-bold text-sm rounded-2xl backdrop-blur-md border border-white/30 transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Gira mundial</span>
            </button>

            <button
              onClick={onOpenFlashcards}
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-amber-950" />
              <span>Flashcards</span>
            </button>
          </div>
        </div>

        {/* Decorative background celestial glow */}
        <div className="absolute -right-12 -bottom-12 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 -top-12 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* SECTION 1: ¿QUÉ HABILIDAD QUIERES PRACTICAR? */}
      <section className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
              ¿Qué habilidad quieres practicar hoy?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Elige el formato de inmersión según tu objetivo de estudio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* OPTION A: READING & LISTENING */}
          <div
            onClick={() => setActivePracticeTab("reading")}
            className={`cursor-pointer rounded-3xl p-6 border-2 transition-all shadow-duo-card relative overflow-hidden flex flex-col justify-between ${
              activePracticeTab === "reading"
                ? "bg-gradient-to-br from-white via-sky-50/50 to-indigo-50/50 dark:from-slate-900 dark:to-slate-800 border-sky-400 dark:border-sky-500 ring-4 ring-sky-400/20"
                : "bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:border-gray-300"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-300">
                  Comprensión receptiva
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-2">
                Lectura y Escucha
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Absorbe la lengua mediante microcuentos situacionales dramáticos, noticias mundiales alineadas y contenido educativo en decenas de dialectos simultáneos.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Microcuentos con audio natural de actores nativos y dialectales</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Noticias y prensa internacional alineadas oración por oración</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Fonética IPA y análisis etimológico con Google Gemini</span>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onStartReading();
              }}
              className="w-full mt-2 py-3 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-duo-blue flex items-center justify-center gap-2 transition-all"
            >
              <span>Abrir lector de microcuentos y noticias</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* OPTION B: WRITING & SPEAKING */}
          <div
            onClick={() => setActivePracticeTab("writing")}
            className={`cursor-pointer rounded-3xl p-6 border-2 transition-all shadow-duo-card relative overflow-hidden flex flex-col justify-between ${
              activePracticeTab === "writing"
                ? "bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 dark:from-slate-900 dark:to-slate-800 border-purple-400 dark:border-purple-500 ring-4 ring-purple-400/20"
                : "bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:border-gray-300"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black">
                  <PenTool className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300">
                  Expresión activa
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-2">
                Escritura y Conversación
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Pasa de entender a producir: entabla juego de rol (role play) conversando con los personajes de la historia o redacta tu diario de aprendizaje políglota.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Role Play con Hugo, Clara, Don Ramón, Mateo y Bea</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Diario de aprendizaje multilingüe (Language Diary)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Práctica de pronunciación por micrófono con retroalimentación</span>
                </div>
              </div>
            </div>

            {/* Quick interactive mini diary snippet */}
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={diaryNote}
                  onChange={(e) => setDiaryNote(e.target.value)}
                  placeholder="Escribe una frase hoy en tu lengua objetivo..."
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  onClick={() => {
                    if (diaryNote.trim()) {
                      setDiarySaved(true);
                      setTimeout(() => setDiarySaved(false), 2000);
                      setDiaryNote("");
                    }
                  }}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs rounded-xl shadow-duo-purple transition-all flex-shrink-0"
                >
                  {diarySaved ? "¡Anotado!" : "Guardar nota"}
                </button>
              </div>
              <button
                onClick={onStartReading}
                className="w-full text-center text-xs text-purple-600 dark:text-purple-400 font-extrabold hover:underline pt-1"
              >
                Abrir modo diálogo y alternancia de personajes →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ¿CON CUÁNTAS PERSONAS PUEDES COMUNICARTE? */}
      <section className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 border-2 border-gray-200 dark:border-slate-800 shadow-duo-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Globe2 className="w-5 h-5 text-duo-green" />
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                ¿Con cuántas personas puedes comunicarte?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Calcula en tiempo real tu alcance humano global según los idiomas que dominas y los que estás aprendiendo.
            </p>
          </div>

          <button
            onClick={onOpenSettings}
            className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 text-gray-700 dark:text-gray-200 font-extrabold text-xs transition-all flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Configurar en Ajustes</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Reach Metric Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Población alcanzable hoy (Dominados)
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-900 dark:text-emerald-200">
              {reachStats.masteredPopulationM.toLocaleString()} M
            </div>
            <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
              Personas con las que puedes conversar fluidamente de inmediato.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/40 space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
              Potencial con los que aprendes
            </span>
            <div className="text-3xl sm:text-4xl font-black text-indigo-900 dark:text-indigo-200">
              +{reachStats.learningPotentialM.toLocaleString()} M
            </div>
            <p className="text-[11px] text-indigo-700 dark:text-indigo-400 font-medium">
              Nuevas mentes y culturas desbloqueadas por tus estudios activos.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Cobertura de la Humanidad
            </span>
            <div className="text-3xl sm:text-4xl font-black text-amber-900 dark:text-amber-200">
              {reachStats.worldPercentage}%
            </div>
            <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
              Aproximadamente {reachStats.totalUniqueReachM.toLocaleString()} millones de 8.100 millones de habitantes.
            </p>
          </div>

        </div>

        {/* Animated Progress Meter */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400">
            <span>Alcance mundial neto</span>
            <span className="text-gray-900 dark:text-white font-black">{reachStats.worldPercentage}% del planeta</span>
          </div>
          <div className="w-full h-4 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden p-0.5 border border-gray-200 dark:border-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-duo-green via-sky-500 to-indigo-600 transition-all duration-700 shadow-xs"
              style={{ width: `${Math.max(5, reachStats.worldPercentage)}%` }}
            />
          </div>
        </div>

        {/* Interactive Selector Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Mastered Section */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Domino estos idiomas y dialectos:</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-bold">
                  {masteredLanguageCodes.length} seleccionados
                </span>
                {masteredLanguageCodes.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onUpdateMastered([])}
                    className="text-[10px] text-red-500 hover:text-red-700 dark:hover:text-red-400 font-bold underline"
                    title="Deseleccionar todos los idiomas dominados"
                  >
                    Limpiar
                  </button>
                )}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 min-h-[58px] space-y-2.5">
              <div className="flex flex-wrap gap-1.5">
                {visibleMasteredPopular.map((opt) => {
                  const isSelected = isCodeActive(masteredLanguageCodes, opt.code);
                  return (
                    <button
                      key={`mastered-${opt.code}`}
                      type="button"
                      onClick={() => toggleMasteredCode(opt.code)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-emerald-600 text-white shadow-xs scale-102"
                          : "bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-600 hover:bg-gray-100"
                      }`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}

                {/* Clickable "..." button */}
                <button
                  type="button"
                  onClick={() => setShowMoreMastered(!showMoreMastered)}
                  className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                    showMoreMastered
                      ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 shadow-xs"
                      : "bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 border border-dashed border-gray-300 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600"
                  }`}
                  title={showMoreMastered ? "Ocultar lista extendida" : `Ver todos los demás idiomas (${OTHER_OPTIONS.length} disponibles)`}
                >
                  <span className="font-black tracking-widest leading-none">...</span>
                  <span className="text-[10px] font-bold">
                    {showMoreMastered ? "Menos" : `+${OTHER_OPTIONS.length}`}
                  </span>
                </button>
              </div>

              {/* Collapsible Drawer with Search and Scrollable Grid */}
              {showMoreMastered && (
                <div className="pt-2 border-t border-gray-200/80 dark:border-slate-700 space-y-2 animate-fade-in">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchMastered}
                      onChange={(e) => setSearchMastered(e.target.value)}
                      placeholder="Buscar entre los demás 40 idiomas (ej. Griego, Italiano, Coreano)..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                    {filteredOtherMastered.map((opt) => {
                      const isSelected = isCodeActive(masteredLanguageCodes, opt.code);
                      return (
                        <button
                          key={`other-mastered-${opt.code}`}
                          type="button"
                          onClick={() => toggleMasteredCode(opt.code)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "bg-white dark:bg-slate-700/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-600 hover:bg-gray-100"
                          }`}
                        >
                          <span>{opt.flag}</span>
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Currently Learning Section */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span>Aprendo estos otros idiomas y dialectos:</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-bold">
                  {learningLanguageCodes.length} seleccionados
                </span>
                {learningLanguageCodes.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onUpdateLearning([])}
                    className="text-[10px] text-red-500 hover:text-red-700 dark:hover:text-red-400 font-bold underline"
                    title="Deseleccionar todos los idiomas en estudio"
                  >
                    Limpiar
                  </button>
                )}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 min-h-[58px] space-y-2.5">
              <div className="flex flex-wrap gap-1.5">
                {visibleLearningPopular.map((opt) => {
                  const isSelected = isCodeActive(learningLanguageCodes, opt.code);
                  return (
                    <button
                      key={`learning-${opt.code}`}
                      type="button"
                      onClick={() => toggleLearningCode(opt.code)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-indigo-600 text-white shadow-xs scale-102"
                          : "bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-600 hover:bg-gray-100"
                      }`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}

                {/* Clickable "..." button */}
                <button
                  type="button"
                  onClick={() => setShowMoreLearning(!showMoreLearning)}
                  className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                    showMoreLearning
                      ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700 shadow-xs"
                      : "bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 border border-dashed border-gray-300 dark:border-slate-600 hover:border-indigo-500 hover:text-indigo-600"
                  }`}
                  title={showMoreLearning ? "Ocultar lista extendida" : `Ver todos los demás idiomas (${OTHER_OPTIONS.length} disponibles)`}
                >
                  <span className="font-black tracking-widest leading-none">...</span>
                  <span className="text-[10px] font-bold">
                    {showMoreLearning ? "Menos" : `+${OTHER_OPTIONS.length}`}
                  </span>
                </button>
              </div>

              {/* Collapsible Drawer with Search and Scrollable Grid */}
              {showMoreLearning && (
                <div className="pt-2 border-t border-gray-200/80 dark:border-slate-700 space-y-2 animate-fade-in">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchLearning}
                      onChange={(e) => setSearchLearning(e.target.value)}
                      placeholder="Buscar entre los demás 40 idiomas (ej. Griego, Italiano, Coreano)..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                    {filteredOtherLearning.map((opt) => {
                      const isSelected = isCodeActive(learningLanguageCodes, opt.code);
                      return (
                        <button
                          key={`other-learning-${opt.code}`}
                          type="button"
                          onClick={() => toggleLearningCode(opt.code)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-indigo-600 text-white shadow-xs"
                              : "bg-white dark:bg-slate-700/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-600 hover:bg-gray-100"
                          }`}
                        >
                          <span>{opt.flag}</span>
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: TABLA FILTRABLE: ¿QUÉ IDIOMA DEBERÍA APRENDER? */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                Matriz Políglota: ¿Qué idioma debería aprender?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Filtra y analiza los idiomas del mundo por crecimiento demográfico, literatura no traducida, peso económico, dificultad FSI y huella digital.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenFamilies("combinations")}
              className="px-3.5 py-2 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-extrabold text-xs border border-amber-300 hover:bg-amber-200 transition-all flex items-center gap-1.5"
            >
              <span>Combinaciones clásicas</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            </button>
            <button
              onClick={() => onOpenFamilies("families")}
              className="px-3.5 py-2 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-900 dark:text-sky-300 font-extrabold text-xs border border-sky-300 hover:bg-sky-200 transition-all flex items-center gap-1.5"
            >
              <span>Familias lingüísticas</span>
              <Layers className="w-3.5 h-3.5 text-sky-600" />
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xs">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar idioma, familia o término..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setMatrixFilter("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                matrixFilter === "all"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
              }`}
            >
              Todos ({LANGUAGE_MATRIX.length})
            </button>

            <button
              onClick={() => setMatrixFilter("growth")}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1 ${
                matrixFilter === "growth"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              <TrendingUp className="w-3 h-3" />
              <span>Rápido crecimiento</span>
            </button>

            <button
              onClick={() => setMatrixFilter("untranslated")}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1 ${
                matrixFilter === "untranslated"
                  ? "bg-purple-600 text-white"
                  : "bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 hover:bg-purple-100"
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>Joyas no traducidas</span>
            </button>

            <button
              onClick={() => setMatrixFilter("economy")}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1 ${
                matrixFilter === "economy"
                  ? "bg-amber-600 text-white"
                  : "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 hover:bg-amber-100"
              }`}
            >
              <DollarSign className="w-3 h-3" />
              <span>Peso económico ($3T+)</span>
            </button>

            <button
              onClick={() => setMatrixFilter("culture")}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1 ${
                matrixFilter === "culture"
                  ? "bg-rose-600 text-white"
                  : "bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 hover:bg-rose-100"
              }`}
            >
              <Flame className="w-3 h-3" />
              <span>Poder cultural (85+)</span>
            </button>

            <button
              onClick={() => setMatrixFilter("easy")}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1 ${
                matrixFilter === "easy"
                  ? "bg-sky-600 text-white"
                  : "bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200 hover:bg-sky-100"
              }`}
            >
              <span>Fáciles (FSI 1)</span>
            </button>
          </div>
        </div>

        {/* Matrix Table Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-gray-200 dark:border-slate-800 overflow-hidden shadow-duo-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-800/80 border-b border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 font-black uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">Idioma y Familia</th>
                  <th className="py-3 px-3 text-right">Hablantes</th>
                  <th className="py-3 px-3">Crecimiento</th>
                  <th className="py-3 px-3 text-center">Poder Cultural</th>
                  <th className="py-3 px-3 text-right">PIB ($Trillones)</th>
                  <th className="py-3 px-3">Dificultad FSI</th>
                  <th className="py-3 px-3">
                    <span className="block text-[11px] font-black tracking-normal normal-case text-gray-700 dark:text-gray-200">
                      Pronunciar al leer
                    </span>
                    <span className="block text-[9px] font-semibold text-gray-400 dark:text-gray-500 normal-case">
                      Texto → Voz
                    </span>
                  </th>
                  <th className="py-3 px-3">
                    <span className="block text-[11px] font-black tracking-normal normal-case text-gray-700 dark:text-gray-200">
                      Escribir al oír
                    </span>
                    <span className="block text-[9px] font-semibold text-gray-400 dark:text-gray-500 normal-case">
                      Voz → Texto
                    </span>
                  </th>
                  <th className="py-3 px-4 text-center">Detalles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                {filteredLanguages.map((item) => {
                  const isExpanded = expandedLangId === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <tr
                        onClick={() => setExpandedLangId(isExpanded ? null : item.id)}
                        className={`hover:bg-amber-50/40 dark:hover:bg-slate-800/50 cursor-pointer transition-colors ${
                          isExpanded ? "bg-amber-50/30 dark:bg-slate-800/40" : ""
                        }`}
                      >
                        {/* Name & Flag */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{item.flag}</span>
                            <div>
                              <span className="font-extrabold text-xs text-gray-900 dark:text-white block">
                                {item.name}
                              </span>
                              <span className="text-[10px] text-gray-400 font-bold">
                                {item.nativeName} • {item.family}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Speakers */}
                        <td className="py-3 px-3 text-right font-black text-gray-900 dark:text-white whitespace-nowrap">
                          {item.totalSpeakersM} M
                          <span className="block text-[10px] font-bold text-gray-400">
                            {item.nativeSpeakersM} M nativos
                          </span>
                        </td>

                        {/* Trajectory */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                              item.demographicTrajectory === "Rápido crecimiento"
                                ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300"
                                : item.demographicTrajectory === "Crecimiento constante"
                                ? "bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border-sky-300"
                                : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-300"
                            }`}
                          >
                            {item.demographicTrajectory}
                          </span>
                        </td>

                        {/* Cultural Score */}
                        <td className="py-3 px-3 text-center whitespace-nowrap">
                          <div className="inline-flex items-center gap-1 font-black text-xs text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-lg">
                            <Flame className="w-3 h-3 text-rose-500" />
                            <span>{item.culturalSoftPowerScore} / 100</span>
                          </div>
                        </td>

                        {/* Economic Weight */}
                        <td className="py-3 px-3 text-right font-extrabold text-gray-900 dark:text-white whitespace-nowrap">
                          ${item.economicWeightTrillionUSD} T
                        </td>

                        {/* FSI Tier */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className="text-xs font-bold text-gray-800 dark:text-gray-200 block">
                            {item.fsiDifficultyTier.split(" ")[0]}
                          </span>
                          <span className="text-[10px] text-gray-400 font-bold">
                            Para hispanos: {item.fsiSpanishEquiv}
                          </span>
                        </td>

                        {/* Reading Transparency (Pronunciar al leer) */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${getOrthographyBadge(
                              item.readingTransparencyLevel
                            )}`}
                          >
                            {item.readingTransparencyLevel}
                          </span>
                          <span
                            className="block text-[10px] text-gray-500 dark:text-gray-400 font-medium truncate max-w-[140px] mt-0.5"
                            title={item.readingTransparencyNote}
                          >
                            {item.readingTransparencyNote}
                          </span>
                        </td>

                        {/* Listening-Spelling Consistency (Escribir al oír) */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${getOrthographyBadge(
                              item.listeningSpellingLevel
                            )}`}
                          >
                            {item.listeningSpellingLevel}
                          </span>
                          <span
                            className="block text-[10px] text-gray-500 dark:text-gray-400 font-medium truncate max-w-[140px] mt-0.5"
                            title={item.listeningSpellingNote}
                          >
                            {item.listeningSpellingNote}
                          </span>
                        </td>

                        {/* Expand Button */}
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedLangId(isExpanded ? null : item.id);
                            }}
                            className="p-1 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </td>
                      </tr>

                      {/* EXPANDED ROW DETAILS */}
                      {isExpanded && (
                        <tr className="bg-amber-50/20 dark:bg-slate-800/60 border-b border-gray-200 dark:border-slate-700">
                          <td colSpan={9} className="p-4 sm:p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                              
                              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 space-y-1">
                                <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 dark:text-purple-300 block">
                                  📚 Literatura y Filosofía no traducida
                                </span>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {item.untranslatedTreasures}
                                </p>
                              </div>

                              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 space-y-1">
                                <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-300 block">
                                  🗣️ Dialectos y Fragmentación ({item.dialectalFragmentation})
                                </span>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {item.dialectalNote}
                                </p>
                              </div>

                              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300 block">
                                  ✍️ Curva ortográfica y fonética
                                </span>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {item.orthographicPhoneticCurve}
                                </p>
                                <div className="pt-2 border-t border-gray-100 dark:border-slate-700/60 space-y-2 text-[11px]">
                                  <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                      <span className="font-extrabold text-gray-900 dark:text-white">📖 Pronunciar al leer:</span>
                                      <span className={`px-2 py-0.2 rounded-full text-[10px] font-extrabold border ${getOrthographyBadge(item.readingTransparencyLevel)}`}>
                                        {item.readingTransparencyLevel}
                                      </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-normal">{item.readingTransparencyNote}</p>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                      <span className="font-extrabold text-gray-900 dark:text-white">👂 Escribir al oír:</span>
                                      <span className={`px-2 py-0.2 rounded-full text-[10px] font-extrabold border ${getOrthographyBadge(item.listeningSpellingLevel)}`}>
                                        {item.listeningSpellingLevel}
                                      </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-normal">{item.listeningSpellingNote}</p>
                                  </div>
                                </div>
                              </div>

                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-200/60 dark:border-slate-700 text-xs">
                              <span className="text-gray-500 font-bold">
                                Huella Digital: Rango #{item.digitalFootprintRank} • {item.digitalFootprintNote}
                              </span>
                              <button
                                onClick={onStartReading}
                                className="px-4 py-1.5 rounded-xl bg-duo-green text-white font-extrabold text-xs shadow-duo flex items-center gap-1.5"
                              >
                                <span>Ver historias en {item.name}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};
