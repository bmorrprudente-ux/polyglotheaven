/**
 * Polyglot Heaven Theme Manager
 * Provides reliable, instantaneous, and persistent light/dark mode handling.
 */

const THEME_STORAGE_KEY = "polyglot_heaven_theme";

export const themeManager = {
  /**
   * Reads the current theme preference from localStorage.
   * Defaults strictly to light mode (false) unless explicitly saved as "dark".
   */
  isDarkMode(): boolean {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return false; // Default to clean light mode
    } catch {
      return false;
    }
  },

  /**
   * Applies the theme to the entire DOM and persists it immediately.
   */
  applyTheme(isDark: boolean): void {
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add("dark");
      body.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
      // Keep legacy keys in sync for backward compatibility
      const v4 = localStorage.getItem("telar_user_settings_v4");
      if (v4) {
        const parsed = JSON.parse(v4);
        parsed.darkMode = isDark;
        localStorage.setItem("telar_user_settings_v4", JSON.stringify(parsed));
      }
    } catch (e) {
      console.warn("Could not persist theme:", e);
    }
  },

  /**
   * Initializes theme on app bootstrap.
   */
  init(): boolean {
    const isDark = this.isDarkMode();
    this.applyTheme(isDark);
    return isDark;
  }
};
