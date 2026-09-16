/**
 * Utility to identify Right-to-Left (RTL) scripts and languages
 * (Arabic, Hebrew, Persian/Farsi, Urdu, Pashto, Yiddish).
 */
export function isRtlLang(langCode?: string): boolean {
  if (!langCode) return false;
  const lower = langCode.toLowerCase().trim();
  return (
    lower.startsWith("ar") ||
    lower.startsWith("he") ||
    lower.startsWith("fa") ||
    lower.startsWith("ur") ||
    lower.startsWith("ps") ||
    lower.startsWith("yi")
  );
}
