import React, { useState } from "react";
import { LANGUAGE_FAMILIES, CLASSIC_COMBINATIONS, ClassicCombination, LanguageFamily } from "../data/languageFamilies";
import { X, Sparkles, Layers, Award, ArrowRight, BookOpen, Check, Globe } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface LanguageFamiliesModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "combinations" | "families";
  locale?: SupportedLocale;
  onSelectCombination?: (comb: ClassicCombination) => void;
}

export const LanguageFamiliesModal: React.FC<LanguageFamiliesModalProps> = ({
  isOpen,
  onClose,
  defaultTab = "combinations",
  locale = "es",
  onSelectCombination,
}) => {
  const [activeTab, setActiveTab] = useState<"combinations" | "families">(defaultTab);
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>("romance");
  const [selectedCombId, setSelectedCombId] = useState<string>("malay_indonesian");

  if (!isOpen) return null;

  const t = I18N[locale] || I18N.es;
  const currentFamily = LANGUAGE_FAMILIES.find(f => f.id === selectedFamilyId) || LANGUAGE_FAMILIES[0];
  const currentComb = CLASSIC_COMBINATIONS.find(c => c.id === selectedCombId) || CLASSIC_COMBINATIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 pb-4 border-b border-gray-200 dark:border-slate-800 bg-gradient-to-r from-sky-500/10 via-amber-500/10 to-purple-500/10 dark:from-sky-950/40 dark:to-purple-950/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center text-xl shadow-md">
              🏛️
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                <span>Familias Lingüísticas y Combinaciones Clásicas</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Aprende más rápido aprovechando la inteligibilidad mutua y las raíces compartidas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 dark:border-slate-800 px-5 pt-3 bg-gray-50/50 dark:bg-slate-800/30 gap-2">
          <button
            onClick={() => setActiveTab("combinations")}
            className={`pb-3 px-3 font-extrabold text-xs transition-all border-b-2 flex items-center gap-2 ${
              activeTab === "combinations"
                ? "border-amber-500 text-amber-700 dark:text-amber-400"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <span>✨ Combinaciones clásicas ("2 por 1")</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-black">
              8
            </span>
          </button>

          <button
            onClick={() => setActiveTab("families")}
            className={`pb-3 px-3 font-extrabold text-xs transition-all border-b-2 flex items-center gap-2 ${
              activeTab === "families"
                ? "border-sky-500 text-sky-700 dark:text-sky-400"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <span>🌐 Familias lingüísticas mayores</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-black">
              4
            </span>
          </button>
        </div>

        {/* Body Container */}
        <div className="p-5 overflow-y-auto flex-1">
          
          {/* TAB 1: COMBINACIONES CLÁSICAS */}
          {activeTab === "combinations" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Selector List */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                  Pares estratégicos con inteligibilidad mutua
                </span>
                <div className="space-y-2">
                  {CLASSIC_COMBINATIONS.map(c => {
                    const isSelected = c.id === selectedCombId;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCombId(c.id)}
                        className={`w-full p-3 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-amber-50/80 dark:bg-amber-950/40 border-amber-400 dark:border-amber-600 shadow-sm"
                            : "bg-white dark:bg-slate-800/60 border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-xl flex-shrink-0">{c.icon}</span>
                          <div className="min-w-0">
                            <h4 className="font-extrabold text-xs text-gray-900 dark:text-white truncate">
                              {c.title}
                            </h4>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 mt-0.5">
                              {c.languages.map(l => (
                                <span key={l.name}>{l.flag} {l.name}</span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex-shrink-0">
                          ~{c.intelligibilityRate}%
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Details Panel */}
              <div className="lg:col-span-7 bg-gray-50/80 dark:bg-slate-800/40 rounded-3xl p-5 border border-gray-200 dark:border-slate-700 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{currentComb.icon}</span>
                      <h3 className="text-lg font-black text-gray-900 dark:text-white">
                        {currentComb.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-black border border-emerald-300">
                      <span>Inteligibilidad:</span>
                      <span>{currentComb.intelligibilityRate}%</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                    {currentComb.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {currentComb.languages.map(l => (
                      <div key={l.name} className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{l.flag}</span>
                          <span className="font-extrabold text-xs text-gray-900 dark:text-white">{l.name}</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold block">Escritura: {l.script}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 block mb-1">
                        🤝 Raíces y gramática compartida
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {currentComb.sharedRoots}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                      <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-300 block mb-1">
                        🔍 Diferencias clave
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {currentComb.differences}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-1">
                        🎯 Ventaja políglota ("2 por 1")
                      </span>
                      <p className="text-emerald-900 dark:text-emerald-200 font-medium leading-relaxed">
                        {currentComb.learningAdvantage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-500 dark:text-gray-400">
                    Alcance conjunto: <strong className="text-gray-900 dark:text-white">{currentComb.bonusCoverage}</strong>
                  </span>
                  <button
                    onClick={() => {
                      if (onSelectCombination) onSelectCombination(currentComb);
                      onClose();
                    }}
                    className="px-4 py-2 rounded-xl bg-duo-green text-white font-extrabold text-xs shadow-duo flex items-center gap-1.5"
                  >
                    <span>Practicar en historias</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: FAMILIAS LINGÜÍSTICAS */}
          {activeTab === "families" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Selector List */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                  Ramas lingüísticas principales
                </span>
                <div className="space-y-2">
                  {LANGUAGE_FAMILIES.map(f => {
                    const isSelected = f.id === selectedFamilyId;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setSelectedFamilyId(f.id)}
                        className={`w-full p-3.5 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-sky-50/80 dark:bg-sky-950/40 border-sky-400 dark:border-sky-600 shadow-sm"
                            : "bg-white dark:bg-slate-800/60 border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{f.icon}</span>
                          <div>
                            <h4 className="font-extrabold text-xs text-gray-900 dark:text-white">
                              {f.name}
                            </h4>
                            <span className="text-[10px] text-gray-400 font-bold">
                              {f.ancestor}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
                          {f.speakersTotal}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Details Panel */}
              <div className="lg:col-span-7 bg-gray-50/80 dark:bg-slate-800/40 rounded-3xl p-5 border border-gray-200 dark:border-slate-700 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{currentFamily.icon}</span>
                    <div>
                      <h3 className="text-lg font-black text-gray-900 dark:text-white">
                        {currentFamily.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-bold">
                        Ancestro: {currentFamily.ancestor}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-black px-3 py-1 rounded-full border ${currentFamily.badgeColor}`}>
                    {currentFamily.speakersTotal}
                  </span>
                </div>

                <p className="text-xs text-gray-700 dark:text-gray-200 leading-relaxed">
                  {currentFamily.description}
                </p>

                {/* Member Badges */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">
                    Idiomas representados en Polyglot Heaven
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentFamily.members.map(m => (
                      <span
                        key={m.code}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-800 dark:text-gray-200 shadow-xs"
                      >
                        <span>{m.flag}</span>
                        <span>{m.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2">
                    Rasgos morfológicos y sintácticos compartidos
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {currentFamily.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Polyglot Advantage */}
                <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/40 text-xs">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-800 dark:text-sky-300 block mb-1">
                    💡 Ventaja en el aprendizaje
                  </span>
                  <p className="text-sky-900 dark:text-sky-200 font-medium leading-relaxed">
                    {currentFamily.polyglotAdvantage}
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-extrabold text-xs rounded-xl transition-all"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
