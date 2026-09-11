// Smart Audio Manager: Plays pre-downloaded offline MP3s with Web Speech Synthesis fallback

export type PlaybackRate = 0.75 | 1.0 | 1.25;

class AudioPlayerService {
  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private playbackRate: PlaybackRate = 1.0;
  private activeId: string | null = null;
  private onStateChangeCallbacks: Set<(activeId: string | null) => void> = new Set();
  private onEndCallbacks: Set<(endedId: string) => void> = new Set();

  public subscribe(callback: (activeId: string | null) => void): () => void {
    this.onStateChangeCallbacks.add(callback);
    return () => this.onStateChangeCallbacks.delete(callback);
  }

  public onEnded(callback: (endedId: string) => void): () => void {
    this.onEndCallbacks.add(callback);
    return () => this.onEndCallbacks.delete(callback);
  }

  private notify(activeId: string | null) {
    this.activeId = activeId;
    this.onStateChangeCallbacks.forEach((cb) => cb(activeId));
  }

  private notifyEnded(endedId: string) {
    this.onEndCallbacks.forEach((cb) => cb(endedId));
  }

  public setSpeed(rate: PlaybackRate) {
    this.playbackRate = rate;
    if (this.currentAudio) {
      this.currentAudio.playbackRate = rate;
    }
  }

  public getSpeed(): PlaybackRate {
    return this.playbackRate;
  }

  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
    this.notify(null);
  }

  public playLine({
    id,
    audioUrl,
    spokenText,
    langCode,
    characterId
  }: {
    id: string;
    audioUrl?: string;
    spokenText: string;
    langCode: string;
    characterId: "hugo" | "clara" | "don_ramon" | "mateo" | "bea";
  }) {
    // If clicking same active playing line, pause/stop
    if (this.activeId === id) {
      this.stop();
      return;
    }

    this.stop();

    // Prefer native SpeechSynthesis if available for high accuracy in all languages,
    // or try local MP3 first, falling back to Web Speech smoothly.
    const trySpeechSynthesis = () => {
      if (!("speechSynthesis" in window)) {
        this.notify(null);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(spokenText);
      utterance.lang = langCode;
      utterance.rate = this.playbackRate;

      // Character-specific pitch tuning
      if (characterId === "mateo") {
        utterance.pitch = 1.35; // Youthful / child prodigy
      } else if (characterId === "don_ramon") {
        utterance.pitch = 0.8;  // Deeper / mature rebel
        utterance.rate = this.playbackRate * 0.95;
      } else if (characterId === "bea") {
        utterance.pitch = 1.2;  // Bright / cheerful
      } else if (characterId === "hugo") {
        utterance.pitch = 1.05; // Dramatic
      } else {
        utterance.pitch = 1.0;  // Clara calm & steady
      }

      // Try selecting closest voice matching langCode
      const voices = window.speechSynthesis.getVoices();
      const matchedVoice = voices.find(
        (v) => v.lang.toLowerCase() === langCode.toLowerCase() || v.lang.startsWith(langCode.split("-")[0])
      );
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = () => this.notify(id);
      utterance.onend = () => {
        this.notify(null);
        this.notifyEnded(id);
      };
      utterance.onerror = () => this.notify(null);

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    };

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.playbackRate = this.playbackRate;
      this.currentAudio = audio;

      audio.onplay = () => this.notify(id);
      audio.onended = () => {
        this.notify(null);
        this.notifyEnded(id);
      };
      audio.onerror = () => {
        // Fallback to speech synthesis if audio file not reachable
        trySpeechSynthesis();
      };

      audio.play().catch(() => {
        trySpeechSynthesis();
      });
    } else {
      trySpeechSynthesis();
    }
  }
}

export const audioPlayer = new AudioPlayerService();
