import React, { useState } from "react";
import { Compass, MapPin, Sparkles, BookOpen, Users, ArrowRight, Globe2, Volume2, CheckCircle2 } from "lucide-react";
import { I18N, SupportedLocale } from "../utils/i18n";
import { CHARACTERS } from "../data/characters";

interface WorldTourViewProps {
  locale?: SupportedLocale;
  onSelectStoryRoute: (storyId: string) => void;
}

interface TourStop {
  id: string;
  name: string;
  region: string;
  coordinates: { x: number; y: number }; // percentage on map
  status: "active" | "upcoming";
  summary: string;
  storyTitle: string;
  storySnippet: string;
  storyId?: string;
  characters: {
    name: string;
    role: string;
    avatar: string;
    city: string;
  }[];
  languages: string[];
}

export const WorldTourView: React.FC<WorldTourViewProps> = ({
  locale = "es",
  onSelectStoryRoute,
}) => {
  const t = I18N[locale] || I18N.es;
  const [selectedStopId, setSelectedStopId] = useState<string>("latin_america");

  const STOPS: TourStop[] = [
    {
      id: "latin_america",
      name: "América Latina",
      region: "Bogotá • Buenos Aires • Ciudad de México • San Juan",
      coordinates: { x: 28, y: 64 },
      status: "active",
      summary: "La primera escala de nuestra gira mundial: una travesía llena de intrigas urbanas, cafeterías misteriosas y dialectos ricos en giros cotidianos.",
      storyTitle: "La maleta misteriosa",
      storySnippet: "Hugo ve conspiraciones en cada esquina de la plaza mientras Clara solo intenta disfrutar de su sándwich.",
      storyId: "story_1",
      characters: [
        { name: "Hugo", role: "Periodista conspiranoico", avatar: CHARACTERS.hugo.avatar, city: "Ciudad de México" },
        { name: "Clara", role: "Diplomática pragmática", avatar: CHARACTERS.clara.avatar, city: "Santiago de Chile" },
        { name: "Don Ramón", role: "Mecánico filósofo", avatar: CHARACTERS.don_ramon.avatar, city: "Santo Domingo" },
        { name: "Mateo", role: "Niño prodigio", avatar: CHARACTERS.mateo.avatar, city: "Buenos Aires" },
        { name: "Bea", role: "Fotógrafa entusiasta", avatar: CHARACTERS.bea.avatar, city: "Salvador de Bahía" },
      ],
      languages: ["Español (12 variantes)", "Guaraní", "Quechua", "Náhuatl", "Aymara", "Portugués (Brasil)"],
    },
    {
      id: "europe_mediterranean",
      name: "Europa y el Mediterráneo",
      region: "París • Roma • Madrid • Berlín • Viena",
      coordinates: { x: 50, y: 32 },
      status: "upcoming",
      summary: "Callejones adoquinados, librerías con solera y andenes de tranvía donde conviven las grandes lenguas romances, germánicas y eslavas.",
      storyTitle: "El secreto del tranvía 47",
      storySnippet: "Un mapa manuscrito cae entre los asientos de madera mientras el revisor anuncia la última parada.",
      characters: [
        { name: "Antoine", role: "Sumiller y crítico", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces", city: "París" },
        { name: "Elena", role: "Restauradora de arte", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces", city: "Florencia" },
        { name: "Lukas", role: "Cartógrafo berlinés", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces", city: "Berlín" },
      ],
      languages: ["Francés", "Alemán", "Italiano", "Neerlandés", "Catalán", "Gallego", "Ruso"],
    },
    {
      id: "east_asia",
      name: "Asia Oriental",
      region: "Tokio • Taipéi • Seúl • Hong Kong",
      coordinates: { x: 82, y: 38 },
      status: "upcoming",
      summary: "Neones nocturnos, mercados humeantes de ramen y trenes bala que cruzan entre templos ancestrales y centros de tecnología punta.",
      storyTitle: "El último tren a Shinjuku",
      storySnippet: "En el vagón silencioso de las 23:45, dos desconocidos descubren que llevan el mismo paraguas marcado con ideogramas idénticos.",
      characters: [
        { name: "Kenji", role: "Relojero de precisión", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces", city: "Kioto" },
        { name: "Mei-Ling", role: "Barista y diseñadora", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces", city: "Taipéi" },
        { name: "Ji-Hoon", role: "Locutor de podcast", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=faces", city: "Seúl" },
      ],
      languages: ["Japonés", "Chino Mandarín", "Cantonés", "Coreano"],
    },
    {
      id: "arab_world",
      name: "Mundo Árabe y Semítico",
      region: "El Cairo • Marrakech • Ammán • Riad",
      coordinates: { x: 57, y: 44 },
      status: "upcoming",
      summary: "Desde los patios frescos del Magreb hasta las cúpulas del Golfo y los zocos de especias cargados de poesía y caligrafía milenaria.",
      storyTitle: "El papiro del callejón de las especias",
      storySnippet: "Una fórmula astronómica del siglo X aparece envuelta en papel de azafrán en el corazón de Jan el-Jalili.",
      characters: [
        { name: "Tariq", role: "Librero de manuscritos", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces", city: "El Cairo" },
        { name: "Layla", role: "Astrofísica de campo", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces", city: "Ammán" },
      ],
      languages: ["Árabe egipcio", "Árabe saudí", "Árabe marroquí", "Árabe jordano", "Hebreo"],
    },
    {
      id: "india",
      name: "El Subcontinente Indio",
      region: "Mumbai • Benarés • Kolkata • Delhi",
      coordinates: { x: 70, y: 48 },
      status: "upcoming",
      summary: "El mosaico sonoro más denso del planeta: un cruce incesante de lenguas indoarias, dravídicas y acentos del inglés indio.",
      storyTitle: "El sonido del primer monzón",
      storySnippet: "En la terraza de una estación en Bengala, el silbato de un tren a vapor se sincroniza con el ritmo de una tabla.",
      characters: [
        { name: "Aarav", role: "Guía ferroviario", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces", city: "Mumbai" },
        { name: "Priya", role: "Música de sitar", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces", city: "Benarés" },
      ],
      languages: ["Hindi", "Urdu", "Bengalí", "Tamil", "Telugu", "Guyaratí", "Punyabí", "Inglés indio"],
    },
    {
      id: "africa",
      name: "África Subsahariana",
      region: "Nairobi • Abiyán • Dakar • Luanda",
      coordinates: { x: 53, y: 62 },
      status: "upcoming",
      summary: "El epicentro del renacimiento demográfico lingüístico del siglo XXI, donde la oralidad ancestral se fusiona con la vida moderna.",
      storyTitle: "El susurro del baobab milenario",
      storySnippet: "Una científica y un tejedor de telas kente descubren que sus notas coinciden con un viejo proverbio swahili.",
      characters: [
        { name: "Kofi", role: "Maestro tejedor", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces", city: "Abiyán" },
        { name: "Amina", role: "Bióloga de la sabana", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces", city: "Nairobi" },
      ],
      languages: ["Suajili", "Francés de Costa de Marfil", "Portugués angoleño", "Inglés nigeriano"],
    }
  ];

  const activeStop = STOPS.find(s => s.id === selectedStopId) || STOPS[0];

  return (
    <div className="space-y-6">
      
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-duo-card relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-xl bg-white/20 backdrop-blur text-sm">🌍</span>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              {t.worldTourTitle}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-2">
            Viaja por el mundo a través de sus acentos
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 font-medium leading-relaxed">
            {t.worldTourSubtitle}
          </p>
        </div>

        {/* Decorative background circles */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      </div>

      {/* Stylized World Map Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-gray-200/90 dark:border-slate-800 shadow-duo-card">
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-500 animate-spin" style={{ animationDuration: "12s" }} />
            <h3 className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white">
              Mapa de escalas y personajes del mundo
            </h3>
          </div>
          <span className="text-xs font-bold text-gray-400">
            6 continentes • 1 activa
          </span>
        </div>

        {/* Interactive SVG World Map Canvas */}
        <div className="relative w-full aspect-[2/1] min-h-[260px] max-h-[380px] bg-sky-50/60 dark:bg-slate-950/80 rounded-2xl border border-sky-200/60 dark:border-slate-800 overflow-hidden flex items-center justify-center p-4">
          
          {/* Subtle World Map SVG Silhouette */}
          <svg
            className="w-full h-full opacity-25 dark:opacity-20 text-slate-400 dark:text-slate-500 pointer-events-none"
            viewBox="0 0 1000 500"
            fill="currentColor"
          >
            {/* Americas */}
            <path d="M150,80 Q200,60 250,90 Q290,140 260,180 Q220,190 200,220 Q190,260 230,300 Q270,360 240,420 Q200,450 180,410 Q160,330 180,260 Q150,220 130,170 Z" />
            {/* Europe */}
            <path d="M450,80 Q520,70 540,110 Q560,150 500,160 Q460,180 430,140 Q420,110 450,80 Z" />
            {/* Africa */}
            <path d="M470,180 Q560,190 570,250 Q560,340 510,390 Q470,370 450,300 Q430,240 470,180 Z" />
            {/* Asia */}
            <path d="M570,80 Q750,60 850,110 Q920,180 880,260 Q800,270 750,230 Q680,220 630,170 Q580,140 570,80 Z" />
            {/* Australia */}
            <path d="M780,330 Q860,320 880,370 Q860,420 800,410 Q760,380 780,330 Z" />
          </svg>

          {/* Interactive Stop Pins on Map */}
          {STOPS.map(stop => {
            const isSelected = selectedStopId === stop.id;
            const isActive = stop.status === "active";

            return (
              <button
                key={stop.id}
                type="button"
                onClick={() => setSelectedStopId(stop.id)}
                style={{ left: `${stop.coordinates.x}%`, top: `${stop.coordinates.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center transition-all ${
                  isSelected ? "scale-110 z-20" : "hover:scale-105 z-10"
                }`}
              >
                <div className="relative">
                  {isActive && (
                    <span className="absolute -inset-1 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  )}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white shadow-md border-2 transition-all ${
                      isSelected
                        ? "bg-sky-500 border-white ring-4 ring-sky-400/40"
                        : isActive
                        ? "bg-emerald-500 border-white"
                        : "bg-purple-600 border-white opacity-85"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  </div>
                </div>

                <span
                  className={`mt-1 text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-sky-600 text-white"
                      : "bg-white/90 dark:bg-slate-800/90 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-slate-700"
                  }`}
                >
                  {stop.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stop Details Card */}
        <div className="mt-5 p-5 rounded-3xl bg-gray-50/80 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/80 transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-200/80 dark:border-slate-700/80">
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  activeStop.status === "active"
                    ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                    : "bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-700"
                }`}>
                  {activeStop.status === "active" ? t.currentStop : t.upcomingStop}
                </span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  {activeStop.region}
                </span>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white">
                {activeStop.name}
              </h3>
              <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mt-1 max-w-2xl leading-relaxed">
                {activeStop.summary}
              </p>
            </div>

            {/* Action button */}
            {activeStop.storyId && (
              <button
                type="button"
                onClick={() => onSelectStoryRoute(activeStop.storyId!)}
                className="btn-duo-green flex items-center justify-center gap-2 text-xs py-2.5 px-5 flex-shrink-0"
              >
                <span>{t.startJourneyHere}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Characters in this stop */}
          <div className="mt-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-400 mb-3 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-sky-500" />
              <span>Personajes de esta región ({activeStop.characters.length})</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {activeStop.characters.map((char, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-900/80 border border-gray-200 dark:border-slate-700/80 flex items-center gap-2.5 shadow-xs"
                >
                  <img
                    src={char.avatar}
                    alt={char.name}
                    className="w-10 h-10 rounded-xl object-cover border border-gray-200 dark:border-slate-700 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h5 className="text-xs font-black text-gray-900 dark:text-white truncate">
                      {char.name}
                    </h5>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                      {char.role}
                    </p>
                    <span className="text-[9px] font-bold text-sky-600 dark:text-sky-400 block truncate">
                      📍 {char.city}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages spoken & Sample Story Snippet */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/80 border border-gray-200 dark:border-slate-700/80">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                {t.languagesSpokenHere}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeStop.languages.map((l, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-bold bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded-lg border border-sky-200 dark:border-sky-800"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/80 border border-gray-200 dark:border-slate-700/80">
              <div className="flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                  {t.previewStory} <span className="text-gray-800 dark:text-gray-200">"{activeStop.storyTitle}"</span>
                </span>
              </div>
              <p className="text-xs font-medium text-gray-600 dark:text-gray-300 italic line-clamp-2">
                "{activeStop.storySnippet}"
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
