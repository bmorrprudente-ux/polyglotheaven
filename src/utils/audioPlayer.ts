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

      // Character-specific pitch tuning (Hugo and Don Ramón must sound unmistakably male)
      const isMale = characterId === "hugo" || characterId === "don_ramon";
      if (characterId === "mateo") {
        utterance.pitch = 1.15; // Youthful boy
      } else if (characterId === "don_ramon") {
        utterance.pitch = 0.75;  // Deep mature male
        utterance.rate = this.playbackRate * 0.95;
      } else if (characterId === "bea") {
        utterance.pitch = 1.1;  // Bright female
      } else if (characterId === "hugo") {
        utterance.pitch = 0.88; // Masculine, dramatic tenor
      } else {
        utterance.pitch = 1.0;  // Clara calm & steady female
      }

      // Try selecting closest voice matching langCode with gender preference
      const voices = window.speechSynthesis.getVoices();
      const langPrefix = langCode.split("-")[0].toLowerCase();
      const matchingLangVoices = voices.filter(
        (v) => v.lang.toLowerCase() === langCode.toLowerCase() || v.lang.toLowerCase().startsWith(langPrefix)
      );

      if (matchingLangVoices.length > 0) {
        const malePatterns = /male|masculino|man\b|jorge|diego|carlos|juan|daniel|arthur|david|guy|henri|thomas|luca|matteo|alvaro|george|oliver|nicolas|paul|fred/i;
        const femalePatterns = /female|femenino|woman\b|monica|samantha|victoria|paulina|elena|luciana|alice|amelie|clara|elvira|karen|zira/i;

        let selectedVoice: SpeechSynthesisVoice | undefined;
        if (isMale) {
          selectedVoice = matchingLangVoices.find(v => malePatterns.test(v.name) && !femalePatterns.test(v.name))
            || matchingLangVoices.find(v => !femalePatterns.test(v.name));
        } else {
          selectedVoice = matchingLangVoices.find(v => femalePatterns.test(v.name) && !malePatterns.test(v.name))
            || matchingLangVoices.find(v => !malePatterns.test(v.name));
        }

        utterance.voice = selectedVoice || matchingLangVoices[0];
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
