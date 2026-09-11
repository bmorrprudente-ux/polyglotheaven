/**
 * Voice Quality & Mismatch Flagger for Telar
 * Allows users to flag voice models that do not match regional dialects
 * so they can be identified and upgraded with ElevenLabs in future releases.
 */

const FLAGGED_VOICES_KEY = "telar_flagged_voices_v2";

export interface FlaggedVoiceEntry {
  langCode: string;
  flaggedAt: string;
  reason?: string;
}

export const voiceFlagger = {
  getFlaggedVoiceCodes(): string[] {
    try {
      const raw = localStorage.getItem(FLAGGED_VOICES_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  isFlagged(langCode: string): boolean {
    return this.getFlaggedVoiceCodes().includes(langCode);
  },

  toggleFlag(langCode: string): boolean {
    const list = this.getFlaggedVoiceCodes();
    let updated: string[];
    let nowFlagged = false;
    if (list.includes(langCode)) {
      updated = list.filter(c => c !== langCode);
      nowFlagged = false;
    } else {
      updated = [...list, langCode];
      nowFlagged = true;
    }
    localStorage.setItem(FLAGGED_VOICES_KEY, JSON.stringify(updated));
    return nowFlagged;
  },

  clearAll(): void {
    localStorage.removeItem(FLAGGED_VOICES_KEY);
  }
};
