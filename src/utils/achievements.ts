/**
 * Achievements and Milestones System for Telar
 * Tracks progress across words seen, languages practiced, dialects tried,
 * and monthly activity with celebratory milestones.
 */

export interface AchievementBadge {
  id: string;
  category: "words" | "learning" | "tried_languages" | "tried_dialects" | "monthly";
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unlocked: boolean;
  unlockedAt?: string;
  icon: string;
}

const STATS_KEY = "telar_user_stats_v2";

interface UserStats {
  triedLanguages: string[]; // unique language roots e.g. 'es', 'en', 'fr', 'pt', 'ja'
  triedDialects: string[];  // unique dialect codes e.g. 'es-MX', 'es-AR'
  monthlyLangs: Record<string, string[]>; // key: "YYYY-MM", value: array of codes
  monthlyDialects: Record<string, string[]>; // key: "YYYY-MM"
}

export const achievementsManager = {
  getStats(): UserStats {
    try {
      const raw = localStorage.getItem(STATS_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return {
      triedLanguages: ["es", "fr", "pt", "ja"],
      triedDialects: ["es-ES", "es-MX", "es-DO", "fr-FR", "pt-BR", "ja-JP"],
      monthlyLangs: {},
      monthlyDialects: {},
    };
  },

  recordActiveVarieties(codes: string[]): void {
    const stats = this.getStats();
    const currentMonthKey = new Date().toISOString().slice(0, 7); // e.g. "2026-09"

    codes.forEach(code => {
      if (!stats.triedDialects.includes(code)) {
        stats.triedDialects.push(code);
      }
      const rootLang = code.split("-")[0];
      if (!stats.triedLanguages.includes(rootLang)) {
        stats.triedLanguages.push(rootLang);
      }

      if (!stats.monthlyDialects[currentMonthKey]) {
        stats.monthlyDialects[currentMonthKey] = [];
      }
      if (!stats.monthlyDialects[currentMonthKey].includes(code)) {
        stats.monthlyDialects[currentMonthKey].push(code);
      }

      if (!stats.monthlyLangs[currentMonthKey]) {
        stats.monthlyLangs[currentMonthKey] = [];
      }
      if (!stats.monthlyLangs[currentMonthKey].includes(rootLang)) {
        stats.monthlyLangs[currentMonthKey].push(rootLang);
      }
    });

    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  },

  getBadges(totalWords: number, learningCount: number): AchievementBadge[] {
    const stats = this.getStats();
    const currentMonthKey = new Date().toISOString().slice(0, 7);
    const monthLangsCount = stats.monthlyLangs[currentMonthKey]?.length || stats.triedLanguages.length;
    const monthDialectsCount = stats.monthlyDialects[currentMonthKey]?.length || stats.triedDialects.length;

    const wordMilestones = [
      { target: 100, title: "Primeras 100 palabras", desc: "100 palabras descubiertas en historias", icon: "🌱" },
      { target: 1000, title: "1.000 palabras políglotas", desc: "1.000 palabras exploradas en contexto", icon: "📖" },
      { target: 10000, title: "10.000 palabras dominadas", desc: "10.000 palabras leídas en microcuentos", icon: "💎" },
      { target: 100000, title: "100.000 palabras tejidas", desc: "100.000 palabras en múltiples variedades", icon: "🏆" },
      { target: 1000000, title: "1.000.000 de palabras: Maestro Políglota", desc: "1 millón de palabras exploradas en Telar", icon: "👑" },
    ];

    const badges: AchievementBadge[] = [];

    // Word milestones
    wordMilestones.forEach((m, idx) => {
      badges.push({
        id: `word_${m.target}`,
        category: "words",
        title: m.title,
        description: m.desc,
        targetValue: m.target,
        currentValue: totalWords,
        unlocked: totalWords >= m.target,
        icon: m.icon,
      });
    });

    // Learning languages milestones
    const learningMilestones = [
      { target: 1, title: "Primer paso de aprendizaje", desc: "1 lengua seleccionada en estudio", icon: "🎯" },
      { target: 3, title: "Trilingüe en progreso", desc: "3 lenguas configuradas en estudio", icon: "⚡" },
      { target: 5, title: "Políglota enfocado", desc: "5 lenguas simultáneas en estudio", icon: "🌟" },
      { target: 10, title: "Hiperpolíglota apasionado", desc: "10 lenguas configuradas en estudio", icon: "🔥" },
    ];
    learningMilestones.forEach(m => {
      badges.push({
        id: `learn_${m.target}`,
        category: "learning",
        title: m.title,
        description: m.desc,
        targetValue: m.target,
        currentValue: learningCount,
        unlocked: learningCount >= m.target,
        icon: m.icon,
      });
    });

    // Tried dialects milestones
    const dialectMilestones = [
      { target: 5, title: "Oído curioso", desc: "5 dialectos diferentes probados", icon: "🎧" },
      { target: 15, title: "Viajero dialectal", desc: "15 dialectos diferentes probados", icon: "🗺️" },
      { target: 30, title: "Cartógrafo lingüístico", desc: "30 dialectos diferentes probados", icon: "🧭" },
      { target: 60, title: "Mundialista dialectal", desc: "60 dialectos diferentes probados", icon: "🌍" },
    ];
    dialectMilestones.forEach(m => {
      badges.push({
        id: `dialect_${m.target}`,
        category: "tried_dialects",
        title: m.title,
        description: m.desc,
        targetValue: m.target,
        currentValue: stats.triedDialects.length,
        unlocked: stats.triedDialects.length >= m.target,
        icon: m.icon,
      });
    });

    // Monthly activity
    badges.push({
      id: "monthly_langs_active",
      category: "monthly",
      title: "Constancia políglota mensual",
      description: `Usando ${monthLangsCount} lenguas activas este mes`,
      targetValue: 3,
      currentValue: monthLangsCount,
      unlocked: monthLangsCount >= 3,
      icon: "📅",
    });

    badges.push({
      id: "monthly_dialects_active",
      category: "monthly",
      title: "Riqueza dialectal mensual",
      description: `Usando ${monthDialectsCount} dialectos activos este mes`,
      targetValue: 6,
      currentValue: monthDialectsCount,
      unlocked: monthDialectsCount >= 6,
      icon: "✨",
    });

    return badges;
  }
};
