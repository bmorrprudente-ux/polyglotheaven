import React from "react";
import { AchievementBadge } from "../utils/achievements";
import { X, Trophy, Sparkles, CheckCircle2, Lock } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";

interface AchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  badges: AchievementBadge[];
  locale?: SupportedLocale;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  isOpen,
  onClose,
  badges,
  locale = "es",
}) => {
  if (!isOpen) return null;

  const t = I18N[locale] || I18N.es;
  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden transition-all">
        
        {/* Header with Trophy Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-orange-500/20 dark:from-amber-950/40 dark:to-orange-950/40 p-5 pb-4 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-500 text-white flex items-center justify-center font-black shadow-md">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">
                    {t.achievementsTitle}
                  </h3>
                  <span className="text-xs bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-extrabold px-2.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-700">
                    {unlockedCount} / {badges.length}
                  </span>
                </div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.achievementsSubtitle}
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
        </div>

        {/* Badges Grid */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {badges.map(b => {
              const pct = Math.min(100, Math.round((b.currentValue / b.targetValue) * 100));
              return (
                <div
                  key={b.id}
                  className={`p-3.5 rounded-2xl border-2 transition-all flex items-start gap-3 ${
                    b.unlocked
                      ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700/60 shadow-xs"
                      : "bg-gray-50/60 dark:bg-slate-800/40 border-gray-200 dark:border-slate-800 opacity-80"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${
                    b.unlocked ? "bg-amber-100 dark:bg-amber-900/60 shadow-xs" : "bg-gray-200 dark:bg-slate-700 grayscale"
                  }`}>
                    {b.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="text-xs font-black text-gray-900 dark:text-white truncate">
                        {b.title}
                      </h4>
                      {b.unlocked ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium line-clamp-1 mb-2">
                      {b.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          b.unlocked ? "bg-amber-500" : "bg-sky-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1 text-[10px] font-bold text-gray-400">
                      <span>{b.currentValue.toLocaleString()} / {b.targetValue.toLocaleString()}</span>
                      <span>{pct}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-extrabold text-xs rounded-xl transition-all"
          >
            {t.understood}
          </button>
        </div>

      </div>
    </div>
  );
};
