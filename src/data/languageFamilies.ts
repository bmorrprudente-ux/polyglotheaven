/**
 * Language Families and Classic Combinations Data
 * Deep linguistic insights, mutual intelligibility rates, and strategic polyglot pairs.
 */

export interface LanguageFamily {
  id: string;
  name: string;
  icon: string;
  badgeColor: string;
  description: string;
  ancestor: string;
  speakersTotal: string;
  keyFeatures: string[];
  members: { code: string; name: string; flag: string }[];
  polyglotAdvantage: string;
}

export interface ClassicCombination {
  id: string;
  title: string;
  languages: { name: string; flag: string; script: string; code: string }[];
  intelligibilityRate: number; // Percentage 0 - 100
  icon: string;
  summary: string;
  sharedRoots: string;
  differences: string;
  learningAdvantage: string;
  bonusCoverage: string;
}

export const LANGUAGE_FAMILIES: LanguageFamily[] = [
  {
    id: "romance",
    name: "Lenguas romances",
    icon: "🏛️",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300",
    description: "Rama de la familia indoeuropea evolucionada directamente del latín vulgar hablado por legionarios y comerciantes romanos.",
    ancestor: "Latín vulgar (Imperio Romano)",
    speakersTotal: "+900 millones",
    keyFeatures: [
      "Pérdida de casos nominales clásicos reemplazados por preposiciones.",
      "Concordancia obligatoria de género y número en adjetivos y sustantivos.",
      "Riquísimo paradigma de conjugación verbal (subjuntivo, tiempos compuestos).",
      "Alto grado de inteligibilidad mutua entre las ramas iberorromance e italorromance."
    ],
    members: [
      { code: "es-ES", name: "Español", flag: "🇪🇸" },
      { code: "pt-BR", name: "Portugués", flag: "🇧🇷" },
      { code: "fr-FR", name: "Francés", flag: "🇫🇷" },
      { code: "it-IT", name: "Italiano", flag: "🇮🇹" },
      { code: "ro-RO", name: "Rumano", flag: "🇷🇴" },
      { code: "ca-ES", name: "Catalán", flag: "🇦🇩" },
      { code: "gl-ES", name: "Gallego", flag: "🇪🇸" }
    ],
    polyglotAdvantage: "Si dominas una lengua romance, puedes alcanzar un nivel de lectura B1 en otra en apenas un tercio del tiempo de estudio habitual."
  },
  {
    id: "germanic",
    name: "Lenguas germánicas",
    icon: "🛡️",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300",
    description: "Rama indoeuropea caracterizada por las mutaciones consonánticas de la Ley de Grimm y gran peso en el comercio, ciencia y tecnología global.",
    ancestor: "Protogermánico (Europa del Norte)",
    speakersTotal: "+550 millones nativos / +1.500 millones totales",
    keyFeatures: [
      "Distinción histórica entre verbos débiles (con sufijo dental -ed/-t) y verbos fuertes (apofonía vocálica).",
      "Acento prosódico fijado en la primera sílaba de la raíz.",
      "Rica formación de palabras compuestas aglutinadas (especialmente en alemán y neerlandés).",
      "Vocales largas y cortas distintivas con gran repertorio de diptongos."
    ],
    members: [
      { code: "en-US", name: "Inglés", flag: "🇺🇸" },
      { code: "de-DE", name: "Alemán", flag: "🇩🇪" },
      { code: "nl-NL", name: "Neerlandés", flag: "🇳🇱" },
      { code: "sv-SE", name: "Sueco", flag: "🇸🇪" },
      { code: "da-DK", name: "Danés", flag: "🇩🇰" },
      { code: "nb-NO", name: "Noruego", flag: "🇳🇴" }
    ],
    polyglotAdvantage: "El inglés ofrece el puente léxico hacia el resto; aprender alemán o neerlandés otorga una visión analítica formidable sobre la estructura germánica original."
  },
  {
    id: "slavic",
    name: "Lenguas eslavas",
    icon: "🏰",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300",
    description: "Rama indoeuropea famosa por su alta conservación morfológica, sistema de casos profundos y fonología rica en consonantes suaves y duras.",
    ancestor: "Protoeslavo (Europa Oriental)",
    speakersTotal: "+315 millones",
    keyFeatures: [
      "Sistema de 6 a 7 casos gramaticales casi intacto (nominativo, acusativo, genitivo, dativo, instrumental, locativo, vocativo).",
      "Categoría de aspecto verbal omnipresente (pares perfectivo / imperfectivo para cada acción).",
      "Oposición fonémica entre consonantes palatalizadas (blandas) y no palatalizadas (duras).",
      "Uso histórico compartido de los alfabetos cirílico y latino según tradición religiosa."
    ],
    members: [
      { code: "ru-RU", name: "Ruso", flag: "🇷🇺" },
      { code: "pl-PL", name: "Polaco", flag: "🇵🇱" },
      { code: "uk-UA", name: "Ucraniano", flag: "🇺🇦" },
      { code: "cs-CZ", name: "Checo", flag: "🇨🇿" },
      { code: "hr-HR", name: "Croata / Serbio", flag: "🇭🇷" }
    ],
    polyglotAdvantage: "Dominar la gramática eslava una sola vez desbloquea la capacidad de entender el esqueleto gramatical de toda Europa oriental y los Balcanes."
  },
  {
    id: "turkic",
    name: "Lenguas túrquicas",
    icon: "🏹",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border-teal-300",
    description: "Familia lingüística cohesiva que se extiende desde los Balcanes y Turquía hasta Siberia y el oeste de China.",
    ancestor: "Prototúrquico (Asia Central / Montes Altái)",
    speakersTotal: "+200 millones",
    keyFeatures: [
      "Aglutinación perfecta y regular: las palabras se construyen añadiendo sufijos invariables en cadena sin excepciones.",
      "Armonía vocálica estricta: las vocales de los sufijos cambian según si la raíz es anterior o posterior.",
      "Ausencia total de género gramatical (ni masculino ni femenino).",
      "Orden oracional estricto Sujeto-Objeto-Verbo (SOV)."
    ],
    members: [
      { code: "tr-TR", name: "Turco", flag: "🇹🇷" }
    ],
    polyglotAdvantage: "Por su regularidad matemática casi sin verbos irregulares, es considerada una de las familias más lógicas y placenteras de aprender."
  }
];

export const CLASSIC_COMBINATIONS: ClassicCombination[] = [
  {
    id: "malay_indonesian",
    title: "Malayo e Indonesio",
    languages: [
      { name: "Indonesio", flag: "🇮🇩", script: "Latino", code: "id-ID" },
      { name: "Malayo", flag: "🇲🇾", script: "Latino", code: "ms-MY" }
    ],
    intelligibilityRate: 95,
    icon: "🌺",
    summary: "Son en esencia dos registros estandarizados de la misma lengua austronesia. La comprensión oral mutua supera el 90%.",
    sharedRoots: "Comparten la misma gramática sin conjugaciones verbales, sin género ni tiempos gramaticales rígidos, y con afijos idénticos (me-, ber-, -kan).",
    differences: "Vocabulario administrativo y técnico: el indonesio adoptó préstamos del holandés (kantor, gratis), mientras que el malayo adoptó préstamos del inglés.",
    learningAdvantage: "Aprender uno te da automáticamente la llave para comunicarte con más de 300 millones de personas en Indonesia, Malasia, Singapur y Brunéi.",
    bonusCoverage: "+300 millones de personas en el sudeste asiático"
  },
  {
    id: "hindi_urdu",
    title: "Hindi y Urdu",
    languages: [
      { name: "Hindi", flag: "🇮🇳", script: "Devanagari", code: "hi-IN" },
      { name: "Urdu", flag: "🇵🇰", script: "Perso-árabe Nasta'liq", code: "ur-PK" }
    ],
    intelligibilityRate: 98,
    icon: "🦚",
    summary: "Coloquialmente son la misma lengua: el indostaní. Hablados en la calle o en películas de Bollywood, cualquier hablante de hindi y urdu se entiende a la perfección.",
    sharedRoots: "Misma morfología, pronombres, preposiciones pospuestas (postposiciones) y conjugaciones verbales.",
    differences: "Sistemas de escritura opuestos (Devanagari de izquierda a derecha vs. Nasta'liq de derecha a izquierda) y vocabulario formal (sánscrito en hindi vs. persa/árabe en urdu).",
    learningAdvantage: "Al aprender la gramática hablada adquieres la lengua franca de todo el subcontinente indio (más de 800 millones de personas).",
    bonusCoverage: "+850 millones de hablantes en India, Pakistán y la diáspora"
  },
  {
    id: "serbo_croatian",
    title: "Serbio y Croata (Bosnio y Montenegrino)",
    languages: [
      { name: "Serbio", flag: "🇷🇸", script: "Cirílico / Latino", code: "sr-RS" },
      { name: "Croata", flag: "🇭🇷", script: "Latino", code: "hr-HR" }
    ],
    intelligibilityRate: 98,
    icon: "🦅",
    summary: "Pluricéntrico por excelencia: comparten el mismo dialecto base (štokaviano) con ligeras variaciones léxicas locales.",
    sharedRoots: "Estructura idéntica de 7 casos, mismos verbos, fonología y cadencia.",
    differences: "Los serbios usan oficialmente tanto cirílico como latino; los croatas usan exclusivamente el latino y prefieren neologismos nativos para términos técnicos.",
    learningAdvantage: "Te permite viajar por Serbia, Croacia, Bosnia-Herzegovina y Montenegro comunicándote con total fluidez.",
    bonusCoverage: "+20 millones en los Balcanes occidentales"
  },
  {
    id: "romanian_moldovan",
    title: "Rumano y Moldavo",
    languages: [
      { name: "Rumano", flag: "🇷🇴", script: "Latino", code: "ro-RO" },
      { name: "Moldavo", flag: "🇲🇩", script: "Latino", code: "ro-RO" }
    ],
    intelligibilityRate: 99,
    icon: "🍇",
    summary: "Constitucionalmente son la misma lengua. El 'moldavo' es la denominación histórica del rumano estándar hablado en la República de Moldavia.",
    sharedRoots: "Misma lengua romance oriental con artículo enclítico y casos latinos arcaicos.",
    differences: "Acento regional norteño en el habla cotidiana de Moldavia y ligeros préstamos coloquiales rusos de la época soviética.",
    learningAdvantage: "Aprender rumano cubre sin fisuras a los 26 millones de habitantes combinados de Rumanía y Moldavia.",
    bonusCoverage: "+26 millones en el este de Europa"
  },
  {
    id: "macedonian_bulgarian",
    title: "Macedonio y Búlgaro",
    languages: [
      { name: "Búlgaro", flag: "🇧🇬", script: "Cirílico", code: "bg-BG" },
      { name: "Macedonio", flag: "🇲🇰", script: "Cirílico", code: "mk-MK" }
    ],
    intelligibilityRate: 90,
    icon: "🏔️",
    summary: "El continuo eslavo meridional oriental. Ambas son las dos únicas lenguas eslavas que abandonaron los casos y adoptaron el artículo definido pospuesto.",
    sharedRoots: "Ambas usan cirílico, carecen de casos sustantivos y comparten estructuras gramaticales de la 'liga lingüística balcánica'.",
    differences: "Acento tónico fijo en la antepenúltima sílaba en macedonio frente a acento libre en búlgaro.",
    learningAdvantage: "Comprender una te permite leer y seguir la televisión de la otra casi de inmediato.",
    bonusCoverage: "+10 millones en los Balcanes"
  },
  {
    id: "dutch_afrikaans",
    title: "Neerlandés y Afrikaans",
    languages: [
      { name: "Neerlandés", flag: "🇳🇱", script: "Latino", code: "nl-NL" },
      { name: "Afrikaans", flag: "🇿🇦", script: "Latino", code: "af-ZA" }
    ],
    intelligibilityRate: 85,
    icon: "🦁",
    summary: "El afrikaans es una hija del neerlandés del siglo XVII trasplantada al Cono Sur africano, con una gramática radicalmente simplificada y regularizada.",
    sharedRoots: "El 90–95% del léxico afrikaans procede del neerlandés.",
    differences: "El afrikaans eliminó el género gramatical, las conjugaciones de persona y adoptó la doble negación (nie ... nie).",
    learningAdvantage: "Para un estudiante de neerlandés, el afrikaans se lee como un dialecto amigable y sumamente rápido de descifrar.",
    bonusCoverage: "+45 millones en Europa y el sur de África"
  },
  {
    id: "czech_slovak",
    title: "Checo y Eslovaco",
    languages: [
      { name: "Checo", flag: "🇨🇿", script: "Latino", code: "cs-CZ" },
      { name: "Eslovaco", flag: "🇸🇰", script: "Latino", code: "sk-SK" }
    ],
    intelligibilityRate: 95,
    icon: "🏰",
    summary: "El famoso bilingüismo pasivo de Europa Central. Checos y eslovacos conversan habitualmente cada uno en su lengua materna sin necesidad de traductor.",
    sharedRoots: "Gramática eslava occidental prácticamente idéntica con sistemas de declinación paralelos.",
    differences: "El checo tiene la consonante 'ř' (r fricativa vibrante) única en el mundo; el eslovaco tiene vocales rítmicas más regulares.",
    learningAdvantage: "Estudiar checo o eslovaco te concede el pasaporte comunicativo completo a Praga y Bratislava.",
    bonusCoverage: "+16 millones en el corazón de Europa"
  },
  {
    id: "scandinavian_trio",
    title: "Noruego, Danés y Sueco",
    languages: [
      { name: "Noruego (Bokmål)", flag: "🇳🇴", script: "Latino", code: "nb-NO" },
      { name: "Danés", flag: "🇩🇰", script: "Latino", code: "da-DK" },
      { name: "Sueco", flag: "🇸🇪", script: "Latino", code: "sv-SE" }
    ],
    intelligibilityRate: 88,
    icon: "⛵",
    summary: "El 'continuo escandinavo continental'. El noruego actúa como el puente dorado: comparte la ortografía del danés y la melodía y fonética del sueco.",
    sharedRoots: "Evolución compartida del nórdico antiguo con orden V2, artículos enclíticos y género común.",
    differences: "El danés tiene la pronunciación glotal 'stød'; el sueco tiene más vocabulario propio del este nórdico.",
    learningAdvantage: "Aprender noruego es el verdadero 'truco políglota': te permite leer danés y entender sueco hablado con mínima fricción.",
    bonusCoverage: "+21 millones en toda Escandinavia"
  }
];
