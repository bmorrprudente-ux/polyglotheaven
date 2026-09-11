import React from "react";
import { X, Check, AlertCircle, Sparkles, Heart, ShieldAlert, CheckCircle2 } from "lucide-react";
import { CloudSunIcon } from "./CloudSunIcon";
import { I18N, SupportedLocale } from "../utils/i18n";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: SupportedLocale;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, locale = "es" }) => {
  if (!isOpen) return null;

  const t = I18N[locale] || I18N.es;

  const COMPARISONS = [
    {
      problem: "Niveles muy dispares entre cursos",
      duolingo: "Cursos como español o francés tienen cientos de lecciones, mientras que otros idiomas tienen árboles mínimos y abandonados de nivel básico A1.",
      polyglotHeaven: "Todos los niveles en todos los cursos al mismo tiempo: todas las historias y ejercicios están completamente traducidos y alineados en todas las lenguas y dialectos.",
    },
    {
      problem: "Selección de idiomas muy limitada",
      duolingo: "Catálogo reducido a unas 40 lenguas, ignorando lenguas con cientos de millones de hablantes o variedades ricas.",
      polyglotHeaven: "Dozens more languages and varieties: más de 50 lenguas completas incluyendo lenguas originarias de América, familias indoeuropeas, dravídicas, bantúes y túrquicas.",
    },
    {
      problem: "Un solo curso estándar para lenguas pluricéntricas",
      duolingo: "Ofrece un solo curso para árabe, español, portugués, francés, inglés y chino, ignorando que el mundo real habla dialectos.",
      polyglotHeaven: "Variantes y dialectos regionales auténticos: 12 dialectos del español (México, R. Dominicana, Argentina, etc.), inglés regional (escocés, sureño, nigeriano), francés africano (Costa de Marfil, RD del Congo) y árabe dialectal (egipcio, marroquí, etc.).",
    },
    {
      problem: "Contenido poco práctico y repetitivo",
      duolingo: "Frases surrealistas desconectadas de la vida real ('el oso bebe cerveza', 'mi manzana no habla inglés') sin noticias ni contenido formativo.",
      polyglotHeaven: "Microcuentos situacionales dramáticos y entretenidos, diálogos callejeros, noticias y contenido cultural y educativo aplicable.",
    },
    {
      problem: "Sin transición al mundo real",
      duolingo: "Mantiene al usuario dentro de un jardín amurallado sin tender puentes hacia cómo se consume el idioma de verdad.",
      polyglotHeaven: "Puentes hacia la literatura sin traducir, podcasters, creadores de contenido, análisis sociolingüísticos y cultura viva de cada región.",
    },
    {
      problem: "Personajes monoculturales y homogéneos",
      duolingo: "Usa los mismos personajes arquetípicos diseñados en Estados Unidos para todos los países del mundo.",
      polyglotHeaven: "Gira mundial (World Tour) con personajes locales auténticos: Hugo en México, Clara en Chile, Don Ramón en Santo Domingo, Aarav en India, Amina en Nairobi.",
    },
    {
      problem: "Pronunciación a ciegas (sin fonética)",
      duolingo: "No ofrece el Alfabeto Fonético Internacional (AFI/IPA) para entender cómo pronunciar los sonidos que no existen en tu lengua nativa.",
      polyglotHeaven: "Transcripción fonética AFI / IPA integrada y conmutable con un clic en cada oración y vocablo para desmitificar los sonidos exactos.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 pb-4 border-b border-gray-200 dark:border-slate-800 bg-gradient-to-r from-amber-500/15 via-sky-500/10 to-indigo-500/15 dark:from-amber-950/40 dark:to-indigo-950/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 via-sky-500 to-indigo-500 p-2 shadow-md flex items-center justify-center">
              <CloudSunIcon className="w-full h-full text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                <span>¿Por qué Polyglot Heaven?</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Diseñado por y para entusiastas de las lenguas cansados de los métodos tradicionales
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

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Mission statement card */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-sky-50 dark:from-amber-950/30 dark:to-sky-950/30 border border-amber-200 dark:border-amber-800/40 text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            <p>
              La mayoría de las aplicaciones de idiomas reducen el lenguaje a ejercicios mecánicos con un búho verde. En <strong>Polyglot Heaven</strong> creemos que aprender idiomas debe ser una experiencia <strong>comparativa, humana, multidialectal y literaria</strong>: escuchar cómo la misma emoción suena en el Caribe, en los Andes, en África occidental o en Japón.
            </p>
          </div>

          {/* Comparison Table */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Tabla comparativa: Apps convencionales vs. Polyglot Heaven
              </h4>
            </div>

            <div className="space-y-3">
              {COMPARISONS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-gray-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-800/60 shadow-xs"
                >
                  <div className="px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700/80 flex items-center justify-between">
                    <span className="font-extrabold text-xs text-gray-900 dark:text-white">
                      {idx + 1}. {item.problem}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-slate-800 p-3 sm:p-4 gap-3">
                    
                    {/* Duolingo Column */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-red-500">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Apps tradicionales (Duolingo)</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.duolingo}
                      </p>
                    </div>

                    {/* Polyglot Heaven Column */}
                    <div className="space-y-1 md:pl-2">
                      <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Polyglot Heaven</span>
                      </div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white leading-relaxed">
                        {item.polyglotHeaven}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-200 dark:border-slate-800 flex justify-between items-center text-xs">
          <span className="text-gray-400 font-bold flex items-center gap-1">
            <span>Hecho para políglotas con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </span>
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
