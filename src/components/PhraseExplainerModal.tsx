import React, { useState, useEffect, useRef } from "react";
import {
  explainPhraseWithAi,
  askAiAboutSentence,
  PhraseExplanation,
  SentenceChatMessage
} from "../utils/aiExplainer";
import { LANGUAGES } from "../data/languages";
import { CHARACTERS } from "../data/characters";
import {
  X,
  Sparkles,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  Loader2,
  Send,
  Volume2,
  MessageSquare,
  HelpCircle,
  Bot,
  User,
  ChevronDown,
  ChevronUp,
  Globe,
  ArrowRight
} from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";
import { isRtlLang } from "../utils/rtl";

interface PhraseExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  phrase: string;
  langCode: string;
  characterId: string;
  translations?: Record<string, string>;
  geminiApiKey?: string;
  locale?: SupportedLocale;
}

export const PhraseExplainerModal: React.FC<PhraseExplainerModalProps> = ({
  isOpen,
  onClose,
  phrase,
  langCode,
  characterId,
  translations = {},
  geminiApiKey,
  locale = "es",
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PhraseExplanation | null>(null);
  const [showOverview, setShowOverview] = useState(false);
  const [showVariants, setShowVariants] = useState(false);

  // Interactive Multi-turn Chat State
  const [messages, setMessages] = useState<SentenceChatMessage[]>([]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [asking, setAsking] = useState(false);

  const chatBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = I18N[locale] || I18N.es;
  const lang = LANGUAGES[langCode] || { name: langCode, flag: "🌐" };
  const character = CHARACTERS[characterId];
  const isRtl = isRtlLang(langCode);

  // Filter other dialect translations for comparison
  const otherVariants = Object.entries(translations || {}).filter(
    ([code, text]) => code !== langCode && Boolean(text)
  );

  const hasCanadianFrench = Boolean(translations?.["fr-CA"]);
  const hasFranceFrench = Boolean(translations?.["fr-FR"]);

  useEffect(() => {
    if (!isOpen || !phrase) return;

    let mounted = true;
    setLoading(true);
    setMessages([]);
    setInputQuestion("");
    setShowOverview(false);
    setShowVariants(false);

    explainPhraseWithAi(phrase, lang.name, langCode, character?.name || "Personaje", geminiApiKey)
      .then(res => {
        if (mounted) {
          setData(res);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [isOpen, phrase, langCode, characterId, geminiApiKey]);

  useEffect(() => {
    if (messages.length > 0) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, asking]);

  if (!isOpen) return null;

  const handlePronounce = (textToSpeak: string, code: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(textToSpeak);
      u.lang = code;
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  };

  const handleSendQuestion = async (questionToSend?: string) => {
    const q = (questionToSend || inputQuestion).trim();
    if (!q || asking) return;

    const userMsg: SentenceChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: q,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuestion("");
    setAsking(true);

    try {
      const historyPayload = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await askAiAboutSentence(
        phrase,
        langCode,
        lang.name,
        character?.name || "Personaje",
        q,
        historyPayload,
        translations,
        geminiApiKey
      );

      const aiMsg: SentenceChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: res.answer,
        timestamp: Date.now(),
        modelUsed: res.modelUsed
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      const errorMsg: SentenceChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: "No se pudo obtener respuesta del modelo. Por favor verifica tu conexión o inténtalo de nuevo.",
        timestamp: Date.now(),
        modelUsed: "Error"
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setAsking(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // Build context-aware prompt suggestion chips
  const quickPrompts = [
    ...(hasCanadianFrench && langCode !== "fr-CA"
      ? [{ label: "¿Por qué en francés canadiense se dice así?", icon: "🍁" }]
      : []),
    ...(hasFranceFrench && langCode === "fr-CA"
      ? [{ label: "¿En qué se diferencia del francés de Francia?", icon: "🇫🇷" }]
      : []),
    ...(langCode !== "es-ES"
      ? [{ label: "¿Qué diferencias tiene con el español de España?", icon: "🇪🇸" }]
      : []),
    { label: "¿Cómo se diría esto de forma más coloquial o informal?", icon: "🗣️" },
    { label: "¿Por qué se usa esta estructura gramatical?", icon: "💡" },
    { label: "Desglosa las palabras clave y su vocabulario", icon: "🔍" },
    { label: "¿Qué matiz cultural o regional tiene?", icon: "🌍" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500/15 via-indigo-500/15 to-sky-500/15 dark:from-purple-950/40 dark:to-indigo-950/40 p-4 sm:p-5 pb-4 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-sky-500 text-white flex items-center justify-center shadow-md flex-shrink-0">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
                    {t.askAiAboutSentence}
                  </h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-extrabold px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                    {lang.flag} {lang.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Gemini 3.8 Flash</span>
                  </span>
                </div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.phraseSaidBy(character?.name || "Personaje")}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              title={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Phrase Quote & Listen Bar */}
        <div className="p-3.5 sm:p-4 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <p
            dir={isRtl ? "rtl" : "ltr"}
            className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white italic leading-relaxed flex-1"
          >
            "{phrase}"
          </p>
          <button
            type="button"
            onClick={() => handlePronounce(phrase, langCode)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/60 font-bold text-xs shadow-xs transition-all flex-shrink-0"
            title="Escuchar pronunciación"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Escuchar</span>
          </button>
        </div>

        {/* Main Content Area: Scrollable */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Collapsible: Compare with other story translations */}
          {otherVariants.length > 0 && (
            <div className="rounded-2xl border border-sky-200 dark:border-sky-800/60 bg-sky-50/40 dark:bg-sky-950/20 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => setShowVariants(!showVariants)}
                className="w-full p-3 flex items-center justify-between hover:bg-sky-100/50 dark:hover:bg-sky-900/30 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-sky-900 dark:text-sky-200">
                    Comparar cómo se dice en otras variantes ({otherVariants.length})
                  </span>
                </div>
                {showVariants ? (
                  <ChevronUp className="w-4 h-4 text-sky-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-sky-500" />
                )}
              </button>

              {showVariants && (
                <div className="p-3.5 pt-1 space-y-2 border-t border-sky-100 dark:border-sky-900/50 max-h-48 overflow-y-auto">
                  {otherVariants.map(([code, text]) => {
                    const l = LANGUAGES[code] || { name: code, flag: "🌐" };
                    return (
                      <div
                        key={code}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 font-black text-gray-800 dark:text-gray-200 mb-0.5">
                            <span>{l.flag}</span>
                            <span>{l.name}</span>
                            <span className="text-[10px] text-gray-400 font-mono">({code})</span>
                          </div>
                          <p className="italic text-gray-600 dark:text-gray-300 truncate font-medium">
                            "{text}"
                          </p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <button
                            type="button"
                            onClick={() => handlePronounce(text, code)}
                            className="p-1 text-gray-400 hover:text-sky-600 rounded"
                            title="Escuchar esta variante"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleSendQuestion(
                                `¿Por qué en ${l.name} (${code}) se dice "${text}" en lugar de "${phrase}"?`
                              )
                            }
                            className="px-2 py-1 bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 font-bold text-[11px] rounded-lg border border-sky-200 dark:border-sky-700 flex items-center gap-1 transition-all"
                            title={`Preguntar a la IA sobre la variante ${l.name}`}
                          >
                            <span>Preguntar a IA</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Collapsible Initial Linguistic Overview */}
          {data && (
            <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => setShowOverview(!showOverview)}
                className="w-full p-3 flex items-center justify-between bg-gray-50 dark:bg-slate-800/80 hover:bg-gray-100/80 dark:hover:bg-slate-800 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    Significado idiomático y desglose inicial
                  </span>
                </div>
                {showOverview ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {showOverview && (
                <div className="p-3.5 space-y-3 border-t border-gray-100 dark:border-slate-800">
                  {/* Idiomatic Meaning */}
                  <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40">
                    <div className="flex items-center gap-1.5 text-xs font-black text-sky-800 dark:text-sky-300 uppercase tracking-wider mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                      <span>{t.pragmaticMeaning}</span>
                    </div>
                    <p className="text-xs font-bold text-gray-900 dark:text-slate-100">
                      {data.idiomaticMeaning}
                    </p>
                  </div>

                  {/* Cultural & Dialect Nuances */}
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
                    <div className="flex items-center gap-1.5 text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span>{t.dialectNuance}</span>
                    </div>
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-200 leading-relaxed mb-1">
                      {data.culturalNotes}
                    </p>
                    {data.dialectNuances && (
                      <p className="text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100/60 dark:bg-amber-900/40 p-2 rounded-lg">
                        🎯 {data.dialectNuances}
                      </p>
                    )}
                  </div>

                  {/* Grammar Breakdown */}
                  {data.grammarBreakdown && data.grammarBreakdown.length > 0 && (
                    <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40">
                      <div className="flex items-center gap-1.5 text-xs font-black text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-1">
                        <BookOpen className="w-3.5 h-3.5 text-purple-500" />
                        <span>{t.grammarBreakdown}</span>
                      </div>
                      <ul className="space-y-1">
                        {data.grammarBreakdown.map((item, idx) => (
                          <li key={idx} className="text-xs font-medium text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Quick Preset Question Chips */}
          <div>
            <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1">
              <span>💡 Preguntas frecuentes con un toque:</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {quickPrompts.map((qp, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendQuestion(qp.label)}
                  disabled={asking}
                  className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-800/80 transition-all shadow-2xs hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                >
                  <span>{qp.icon}</span>
                  <span>{qp.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Multi-turn Chat Thread */}
          <div className="space-y-3 pt-1">
            {messages.length === 0 ? (
              <div className="text-center py-7 px-4 rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/30 text-gray-400 dark:text-gray-500">
                <MessageSquare className="w-7 h-7 mx-auto mb-2 text-purple-400 animate-bounce" />
                <p className="text-xs font-extrabold text-gray-700 dark:text-gray-200">
                  ¿Tienes alguna pregunta de seguimiento sobre esta frase?
                </p>
                <p className="text-[11px] mt-1 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  Pregunta con tus propias palabras abajo (ej: <span className="italic font-semibold text-purple-600 dark:text-purple-300">"Why does Canadian French say it this way?"</span> o <span className="italic font-semibold text-purple-600 dark:text-purple-300">"¿Por qué se usa este tiempo verbal?"</span>).
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 items-start ${
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-xs ${
                        msg.role === "user"
                          ? "bg-gradient-to-tr from-sky-500 to-indigo-600"
                          : "bg-gradient-to-tr from-purple-600 to-indigo-600"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User className="w-3.5 h-3.5" />
                      ) : (
                        <Bot className="w-3.5 h-3.5" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-xs ${
                        msg.role === "user"
                          ? "bg-sky-500 text-white font-bold rounded-tr-none"
                          : "bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 rounded-tl-none border border-gray-200/60 dark:border-slate-700/60"
                      }`}
                    >
                      {msg.role === "assistant" && msg.modelUsed && (
                        <div className="flex items-center gap-1 text-[10px] font-black text-purple-600 dark:text-purple-400 mb-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{msg.modelUsed}</span>
                        </div>
                      )}
                      <div className="whitespace-pre-wrap font-sans text-xs">
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Thinking indicator */}
            {asking && (
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-2xl rounded-tl-none p-3 border border-gray-200/60 dark:border-slate-700/60 flex items-center gap-2 text-xs font-bold">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-500" />
                  <span>{t.askingAi}</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>
        </div>

        {/* Dedicated Follow-up Question Input Bar */}
        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-slate-800/90 border-t border-gray-200 dark:border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuestion();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              placeholder="Escribe tu pregunta de seguimiento con tus propias palabras..."
              disabled={asking}
              className="flex-1 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputQuestion.trim() || asking}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95 flex-shrink-0"
              title="Enviar pregunta a la IA"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Preguntar</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
