import React from "react";
import { Language } from "../data/languages";
import { X, Users, MapPin, Globe, TrendingUp, Lightbulb } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface LanguageFactModalProps {
  language: Language | null;
  onClose: () => void;
  locale?: SupportedLocale;
}

export const LanguageFactModal: React.FC<LanguageFactModalProps> = ({
  language,
  onClose,
  locale = "es",
}) => {
  if (!language) return null;

  const t = I18N[locale] || I18N.es;
  const { demographics } = language;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all">
        
        {/* Header with Flag & Gradient Banner */}
        <div className="bg-gradient-to-r from-sky-500/20 via-emerald-500/20 to-amber-500/20 dark:from-sky-950/40 dark:to-emerald-950/40 p-6 pb-4 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl filter drop-shadow-md">{language.flag}</span>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight">
                  {language.name}
                </h3>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  {language.nativeName} • <span className="text-sky-600 dark:text-sky-400">{language.family}</span>
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demographic Facts Content */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Fact 1: Dialect Speakers */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-200/70 dark:border-sky-800/40">
            <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-sky-700 dark:text-sky-300 uppercase tracking-wider block">
                {t.dialectSpeakers}
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-slate-100 mt-0.5">
                {demographics?.dialectSpeakers || "Datos en consolidación"}
              </p>
            </div>
          </div>

          {/* Fact 2: Geographic Concentration */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/40">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">
                {t.geoConcentration}
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-slate-100 mt-0.5">
                {demographics?.whereConcentrated || language.region}
              </p>
            </div>
          </div>

          {/* Fact 3: Total Language Speakers */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/70 dark:border-purple-800/40">
            <div className="w-9 h-9 rounded-xl bg-purple-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-purple-700 dark:text-purple-300 uppercase tracking-wider block">
                {t.totalSpeakers}
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-slate-100 mt-0.5">
                {demographics?.totalLanguageSpeakers || "Cientos de millones en el mundo"}
              </p>
            </div>
          </div>

          {/* Fact 4: 2050 Demographic Projection */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/40">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">
                {t.projection2050}
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-slate-100 mt-0.5">
                {demographics?.speakers2050 || "Consolidación de hablantes en curso"}
              </p>
            </div>
          </div>

          {/* Fact 5: Linguistic Curiosity */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-slate-100 dark:from-slate-800/70 dark:to-slate-800/40 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-1.5 text-xs font-black text-gray-700 dark:text-gray-300 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{t.sociolinguisticCuriosity}</span>
            </div>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              "{demographics?.curiosity || "Una variante fascinante con historia y particularidades fonéticas propias."}"
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-extrabold text-xs rounded-xl transition-all shadow-sm"
          >
            {t.understood}
          </button>
        </div>

      </div>
    </div>
  );
};
