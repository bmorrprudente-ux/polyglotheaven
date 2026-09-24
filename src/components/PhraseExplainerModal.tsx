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
  ChevronUp
} from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";
import { isRtlLang } from "../utils/rtl";

interface PhraseExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  phrase: string;
  langCode: string;
  characterId: string;
  geminiApiKey?: string;
  locale?: SupportedLocale;
}

export const PhraseExplainerModal: React.FC<PhraseExplainerModalProps> = ({
  isOpen,
  onClose,
  phrase,
  langCode,
  characterId,
  geminiApiKey,
  locale = "es",
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PhraseExplanation | null>(null);
  const [showOverview, setShowOverview] = useState(true);

  // Interactive Chat State
  const [messages, setMessages] = useState<SentenceChatMessage[]>([]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [asking, setAsking] = useState(false);

  const chatBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = I18N[locale] || I18N.es;
  const lang = LANGUAGES[langCode] || { name: langCode, flag: "🌐" };
  const character = CHARACTERS[characterId];
  const isRtl = isRtlLang(langCode);

  useEffect(() => {
    if (!isOpen || !phrase) return;

    let mounted = true;
    setLoading(true);
    setMessages([]);
    setInputQuestion("");
    setShowOverview(true);

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

  const handlePronounce = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(phrase);
      u.lang = langCode;
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
        content: "No se pudo obtener respuesta en este momento. Por favor inténtalo de nuevo.",
        timestamp: Date.now(),
        modelUsed: "Error"
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setAsking(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const quickPrompts = [
    { label: t.quickPromptGrammar, icon: "💡" },
    { label: t.quickPromptColloquial, icon: "🗣️" },
    { label: t.quickPromptVocab, icon: "🔍" },
    { label: t.quickPromptNuance, icon: "🌍" },
    { label: t.quickPromptLiteral, icon: "🔤" },
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
                    <span>GPT-6 Luna</span>
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
            onClick={handlePronounce}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/60 font-bold text-xs shadow-xs transition-all flex-shrink-0"
            title="Escuchar pronunciación"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Escuchar</span>
          </button>
        </div>

        {/* Content Body: Scrollable area with Overview and Interactive Q&A */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin text-purple-500 mb-3" />
              <p className="text-xs font-bold">{t.loadingAnalysis}</p>
            </div>
          ) : data ? (
            <>
              {/* Collapsible Linguistic Overview */}
              <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setShowOverview(!showOverview)}
                  className="w-full p-3.5 flex items-center justify-between bg-gray-50 dark:bg-slate-800/80 hover:bg-gray-100/80 dark:hover:bg-slate-800 transition-colors text-left"
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300">
                      Resumen lingüístico inicial
                    </span>
                  </div>
                  {showOverview ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {showOverview && (
                  <div className="p-4 space-y-3 border-t border-gray-100 dark:border-slate-800">
                    {/* Idiomatic Meaning */}
                    <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40">
                      <div className="flex items-center gap-1.5 text-xs font-black text-sky-800 dark:text-sky-300 uppercase tracking-wider mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                        <span>{t.pragmaticMeaning}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-slate-100">
                        {data.idiomaticMeaning}
                      </p>
                    </div>

                    {/* Cultural & Dialect Nuances */}
                    <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        <span>{t.dialectNuance}</span>
                      </div>
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-200 leading-relaxed mb-1.5">
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
                      <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40">
                        <div className="flex items-center gap-1.5 text-xs font-black text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-1.5">
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

              {/* Interactive Q&A Section */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <h4 className="text-xs sm:text-sm font-black text-gray-900 dark:text-white">
                      {t.conversationWithAi}
                    </h4>
                  </div>
                  {messages.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setMessages([])}
                      className="text-[11px] text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Limpiar chat
                    </button>
                  )}
                </div>

                {/* Quick Suggestion Chips */}
                <div>
                  <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-1.5">
                    Preguntas sugeridas con un toque:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickPrompts.map((qp, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendQuestion(qp.label)}
                        disabled={asking}
                        className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-800/80 transition-all shadow-2xs hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                      >
                        <span>{qp.icon}</span>
                        <span>{qp.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Conversation Thread */}
                <div className="space-y-3 pt-2">
                  {messages.length === 0 && (
                    <div className="text-center py-6 px-4 rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/30 text-gray-400 dark:text-gray-500">
                      <Sparkles className="w-6 h-6 mx-auto mb-2 text-purple-400 animate-bounce" />
                      <p className="text-xs font-bold">
                        ¿Tienes dudas sobre una palabra, la estructura gramatical, o cómo se diría en la calle?
                      </p>
                      <p className="text-[11px] mt-1 text-gray-400">
                        Pregunta lo que quieras sobre esta frase y el modelo <span className="font-bold text-purple-600 dark:text-purple-400">GPT-6 Luna</span> te responderá al instante.
                      </p>
                    </div>
                  )}

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

                  {/* Thinking Bubble */}
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
            </>
          ) : (
            <p className="text-center py-6 text-xs text-gray-500">No se pudo cargar la explicación.</p>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-slate-800/80 border-t border-gray-200 dark:border-slate-800">
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
              placeholder={t.askAiPlaceholder}
              disabled={asking}
              className="flex-1 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputQuestion.trim() || asking}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95 flex-shrink-0"
              title={t.askAiButton}
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.askAiButton}</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
