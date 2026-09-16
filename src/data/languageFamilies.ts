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
    id: "indoeuropean",
    name: "Macrofamilia indoeuropea",
    icon: "🌍",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-300",
    description: "La macrofamilia lingüística con mayor número de hablantes y dispersión del planeta. Engloba las ramas romance, germánica, eslava, indoirania, griega, celta, báltica, armenia y albanesa.",
    ancestor: "Protoindoeuropeo (estepas pónticas / cultura Yamnaya, c. 4500–2500 a.C.)",
    speakersTotal: "+3.200 millones (45% mundial)",
    keyFeatures: [
      "Vocabulario nuclear compartido para parentesco, números y naturaleza (madre/mother/mat'/mātā, tres/three/tri/trīn).",
      "Herencia del sistema flexivo original con raíces consonantales y apofonía vocálica (Ablaut indoeuropeo).",
      "Evolución tipológica diversa: desde lenguas sintéticas con casos (ruso, alemán, hindi) hasta analíticas (inglés, español).",
      "Constituye la columna vertebral del comercio, la ciencia contemporánea, el derecho y la diplomacia global."
    ],
    members: [
      { code: "es-ES", name: "Español", flag: "🇪🇸" },
      { code: "en-US", name: "Inglés", flag: "🇺🇸" },
      { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
      { code: "pt-BR", name: "Portugués", flag: "🇧🇷" },
      { code: "ru-RU", name: "Ruso", flag: "🇷🇺" },
      { code: "fr-FR", name: "Francés", flag: "🇫🇷" },
      { code: "de-DE", name: "Alemán", flag: "🇩🇪" },
      { code: "bn-IN", name: "Bengalí", flag: "🇧🇩" },
      { code: "it-IT", name: "Italiano", flag: "🇮🇹" },
      { code: "el-GR", name: "Griego", flag: "🇬🇷" },
      { code: "ur-PK", name: "Urdu", flag: "🇵🇰" },
      { code: "pa-IN", name: "Panyabí", flag: "🇮🇳" },
      { code: "gu-IN", name: "Guyaratí", flag: "🇮🇳" },
      { code: "mr-IN", name: "Maratí", flag: "🇮🇳" },
      { code: "uk-UA", name: "Ucraniano", flag: "🇺🇦" },
      { code: "pl-PL", name: "Polaco", flag: "🇵🇱" },
      { code: "cs-CZ", name: "Checo", flag: "🇨🇿" },
      { code: "hr-HR", name: "Croata / Serbio", flag: "🇭🇷" },
      { code: "ro-RO", name: "Rumano", flag: "🇷🇴" },
      { code: "nl-NL", name: "Neerlandés / Holandés", flag: "🇳🇱" },
      { code: "sv-SE", name: "Sueco", flag: "🇸🇪" },
      { code: "nb-NO", name: "Noruego", flag: "🇳🇴" },
      { code: "da-DK", name: "Danés", flag: "🇩🇰" },
      { code: "ca-ES", name: "Catalán", flag: "🟡" },
      { code: "gl-ES", name: "Gallego", flag: "⚪" },
      { code: "oc-FR", name: "Occitano", flag: "🔴" }
    ],
    polyglotAdvantage: "Entender el tronco indoeuropeo te permite conectar las raíces léxicas y gramaticales de 26 idiomas de la aplicación (en sus más de 45 variedades dialectales), reconociendo que el inglés, el ruso, el hindi, el griego y el español comparten un mismo esqueleto ancestral."
  },
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
      { code: "ca-ES", name: "Catalán", flag: "🟡" },
      { code: "gl-ES", name: "Gallego", flag: "⚪" },
      { code: "oc-FR", name: "Occitano", flag: "🔴" }
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
    speakersTotal: "+550M nativos / +1.500M totales",
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
      "Uso histórico compartido de los alfabetos cirílico y latino según tradición cultural."
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
    id: "indo_aryan",
    name: "Lenguas indoarias e indoiranias",
    icon: "🪷",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border-orange-300",
    description: "La rama más poblada de la familia indoeuropea. Floreció en el subcontinente indio y la meseta iraní con una continuidad literaria ininterrumpida de más de 3.500 años.",
    ancestor: "Protoindoiranio / Sánscrito védico (c. 1800–1500 a.C.)",
    speakersTotal: "+1.500 millones",
    keyFeatures: [
      "Distinción fonológica cuádruple en oclusivas: sordas, sordas aspiradas, sonoras y murmuradas (k, kh, g, gh).",
      "Serie completa de consonantes retroflejas articuladas contra el paladar duro (ṭ, ḍ, ṇ).",
      "Ergatividad escindida: marca de caso ergativo en tiempos verbales de pasado/perfecto.",
      "Orden sintáctico estricto SOV con uso sistemático de postposiciones."
    ],
    members: [
      { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
      { code: "ur-PK", name: "Urdu", flag: "🇵🇰" },
      { code: "bn-IN", name: "Bengalí", flag: "🇧🇩" },
      { code: "pa-IN", name: "Panyabí", flag: "🇮🇳" },
      { code: "mr-IN", name: "Maratí", flag: "🇮🇳" },
      { code: "gu-IN", name: "Guyaratí", flag: "🇮🇳" }
    ],
    polyglotAdvantage: "Dominar la estructura del indostaní (hindi/urdu) te otorga comprensión inmediata del 80% de las construcciones gramaticales y vocabulario del norte de la India y Pakistán."
  },
  {
    id: "bantu",
    name: "Lenguas bantúes (Níger-Congo)",
    icon: "🦁",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300",
    description: "La mayor subfamilia de la macrofamilia Níger-Congo, protagonista de la expansión humana más vasta del continente africano, extendiéndose por el centro, oriente y sur de África.",
    ancestor: "Protobantú (frontera Nigeria-Camerún, expansión c. 1000 a.C.)",
    speakersTotal: "+350 millones",
    keyFeatures: [
      "Sistema de clases nominales con hasta 18 prefijos (m-/wa- para personas, ki-/vi- para objetos, u-/ma- para conceptos abstractos).",
      "Concordancia aliterativa total: adjetivos, pronombres, numerales y verbos adoptan obligatoriamente el prefijo de clase del sustantivo.",
      "Aglutinación verbal compleja con ricas extensiones derivativas (causativas, aplicativas, recíprocas, pasivas).",
      "Lenguas mayoritariamente tonales, excepto el suajili, que adoptó un acento regular y predecible en la penúltima sílaba."
    ],
    members: [
      { code: "sw-KE", name: "Suajili (Kiswahili)", flag: "🇰🇪" }
    ],
    polyglotAdvantage: "El suajili es la lengua franca de toda África oriental; su sistema de clases nominales y prefijos verbales es tan regular y melódico que permite deducir el significado de oraciones completas como un rompecabezas lógico."
  },
  {
    id: "afroasiatic",
    name: "Lenguas afroasiáticas (Semíticas)",
    icon: "🐪",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300",
    description: "Macrofamilia con la documentación escrita más antigua de la humanidad (egipcio antiguo, acadio, hebreo y árabe). Su rama semítica domina el suroeste de Asia y el norte de África.",
    ancestor: "Protoafroasiático / Protosemítico (Creciente Fértil y Cuerno de África)",
    speakersTotal: "+500 millones",
    keyFeatures: [
      "Morfología de raíces consonánticas trilíteras (3 consonantes C-C-C como k-t-b que modulan su significado insertando patrones vocálicos).",
      "Consonantes enfáticas faringealizadas (tˤ, dˤ, sˤ, ðˤ) y oclusivas glotales.",
      "Marcación explícita de género gramatical en la 2.ª y 3.ª persona singular y plural.",
      "Sistemas de escritura consonántica (abyad) leídos de derecha a izquierda (RTL)."
    ],
    members: [
      { code: "ar-EG", name: "Árabe egipcio", flag: "🇪🇬" },
      { code: "ar-SA", name: "Árabe peninsular", flag: "🇸🇦" },
      { code: "ar-MA", name: "Árabe marroquí (Dariya)", flag: "🇲🇦" },
      { code: "ar-XA", name: "Árabe estándar moderno", flag: "🌐" },
      { code: "he-IL", name: "Hebreo moderno", flag: "🇮🇱" }
    ],
    polyglotAdvantage: "La raíz trilítera es la herramienta mnemotécnica más poderosa del mundo: una sola raíz de 3 letras genera de forma predecible verbos, sustantivos, profesiones y lugares en todo el mundo semítico."
  },
  {
    id: "sino_tibetan",
    name: "Lenguas sinotibetanas",
    icon: "🐉",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-300",
    description: "La segunda macrofamilia más grande del mundo. Comprende todas las variantes de las lenguas siníticas (mandarín, cantonés, wu, min) y las lenguas tibetano-birmanas del Himalaya.",
    ancestor: "Protosinotibetano (Cuenca del Río Amarillo, c. 4000 a.C.)",
    speakersTotal: "+1.400 millones",
    keyFeatures: [
      "Lenguas tonales de registro y contorno: el tono melódico con que se pronuncia una sílaba cambia por completo su significado.",
      "Morfología aislante/analítica pura: sin conjugaciones verbales, sin género gramatical, sin plurales obligatorios ni casos.",
      "Clasificadores numerales obligatorios al contar o individualizar sustantivos.",
      "Estructura basada en Tema-Comentario y gran productividad de compuestos léxicos monosilábicos."
    ],
    members: [
      { code: "cmn-CN", name: "Chino mandarín (Simplificado)", flag: "🇨🇳" },
      { code: "zh-TW", name: "Chino tradicional (Taiwán)", flag: "🇹🇼" },
      { code: "yue-HK", name: "Cantonés (Hong Kong)", flag: "🇭🇰" }
    ],
    polyglotAdvantage: "Al no existir tiempos verbales ni concordancias de género o número, el 100% del esfuerzo de aprendizaje se canaliza en el dominio del tono y la asociación visual y conceptual de caracteres."
  },
  {
    id: "austronesian",
    name: "Lenguas austronésicas",
    icon: "🌺",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300",
    description: "La familia marítima más extensa de la antigüedad. Abarca más de 1.200 lenguas diseminadas desde Madagascar en el océano Índico hasta Hawái y la Isla de Pascua en el Pacífico.",
    ancestor: "Protoaustronésico (isla de Taiwán, c. 3000 a.C.)",
    speakersTotal: "+380 millones",
    keyFeatures: [
      "Morfología elegante basada en afijos y circunfijos (me-, ber-, -kan, pe-...-an) para matizar voz, foco y transitividad.",
      "Reduplicación completa o parcial como mecanismo gramatical productivo (anak = niño, anak-anak = niños).",
      "Distinción inclusivo/exclusivo en 'nosotros': kita (tú y yo) vs. kami (nosotros sin ti).",
      "Fonología accesible y transparente: sílabas predominantemente abiertas (CV) y cinco vocales puras muy similares al español."
    ],
    members: [
      { code: "id-ID", name: "Indonesio", flag: "🇮🇩" },
      { code: "ms-MY", name: "Malayo", flag: "🇲🇾" }
    ],
    polyglotAdvantage: "El indonesio y el malayo son considerados universalmente entre los idiomas más amigables y rápidos de aprender del mundo para hispanohablantes: fonética idéntica, alfabeto latino y cero flexión irregular."
  },
  {
    id: "dravidian",
    name: "Lenguas dravídicas",
    icon: "🛕",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300",
    description: "Familia autóctona del sur de la India con una tradición literaria clásica ininterrumpida de más de dos milenios (poesía Sangam tamil). Completamente independiente del sánscrito y las lenguas indoeuropeas.",
    ancestor: "Protodravídico (Sur del subcontinente indio, anterior a la llegada aria)",
    speakersTotal: "+250 millones",
    keyFeatures: [
      "Aglutinación de sufijos en cadena perfectamente regular acoplados a la raíz nominal o verbal.",
      "Contraste fonémico triple en oclusivas: dentales, alveolares y retroflejas (producidas con la lengua hacia atrás).",
      "Orden oracional estricto SOV con encadenamiento de participios en vez de oraciones coordinadas.",
      "Distinción de género gramatical entre seres racionales (humanos/dioses) y no racionales (animales y objetos inanimados)."
    ],
    members: [
      { code: "ta-IN", name: "Tamil", flag: "🇮🇳" },
      { code: "te-IN", name: "Telugu", flag: "🇮🇳" },
      { code: "kn-IN", name: "Canarés (Kannada)", flag: "🇮🇳" },
      { code: "ml-IN", name: "Malayalam (Malabar)", flag: "🇮🇳" }
    ],
    polyglotAdvantage: "Comparten una arquitectura sintáctica idéntica: aprender la mecánica de sufijos y retroflejas en una lengua dravídica transfiere automáticamente el 90% de la lógica a las otras tres."
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
  },
  {
    id: "japonic_koreanic",
    name: "Japónico y Coreánico (Área del Noreste Asiático)",
    icon: "⛩️",
    badgeColor: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950 dark:text-fuchsia-300 border-fuchsia-300",
    description: "Aunque el consenso histórico las clasifica como familias separadas, el japonés y el coreano son 'almas gemelas gramaticales': comparten una arquitectura sintáctica y conceptual prácticamente idéntica punto por punto.",
    ancestor: "Protojapónico y Protocoreánico (Área lingüística transeurasiática)",
    speakersTotal: "+200 millones",
    keyFeatures: [
      "Aglutinación estricta con partículas pospuestas que marcan sujeto, tema, objeto directo, dirección y medio.",
      "Orden sintáctico rígido Sujeto-Objeto-Verbo (el verbo siempre corona el final absoluto de la frase).",
      "Sistemas honoríficos altamente gramaticalizados (keigo en japonés, jondaenmal en coreano) que modifican desinencias enteras según cortesía.",
      "Ausencia total de género gramatical, concordancia de número obligatoria o artículos."
    ],
    members: [
      { code: "ja-JP", name: "Japonés", flag: "🇯🇵" },
      { code: "ko-KR", name: "Coreano", flag: "🇰🇷" }
    ],
    polyglotAdvantage: "La correspondencia partícula a partícula entre japonés y coreano es la más exacta de dos idiomas mayores en el mundo; quien aprende uno puede descifrar la gramática del otro en cuestión de semanas."
  },
  {
    id: "amerindian",
    name: "Lenguas indígenas americanas (Tupí, Quechumara, Náhuatl, Na-Dené)",
    icon: "🦅",
    badgeColor: "bg-lime-100 text-lime-800 dark:bg-lime-950 dark:text-lime-300 border-lime-300",
    description: "Las lenguas originarias de las grandes civilizaciones y pueblos americanos. Polyglot Heaven integra cinco grandes tradiciones vivas: guaraní, quechua, aymara, náhuatl y navajo.",
    ancestor: "Familias autóctonas milenarias de Abya Yala / América precolombina",
    speakersTotal: "+30 millones",
    keyFeatures: [
      "Polisíntesis e incorporación nominal: una sola palabra agrupa sujeto, objeto, dirección y matices verbales.",
      "Sistemas gramaticalizados de evidencialidad: es obligatorio marcar si lo que se afirma fue presenciado, escuchado o deducido.",
      "Armonía nasal en guaraní, oclusivas eyectivas en quechua y aymara, y consonantes laterales velares en náhuatl y navajo.",
      "Fuerte vigencia contemporánea: el guaraní es lengua cooficial de mayoría demográfica en Paraguay y el quechua cuenta con millones de hablantes andinos."
    ],
    members: [
      { code: "gn-PY", name: "Guaraní", flag: "🇵🇾" },
      { code: "nah-MX", name: "Náhuatl", flag: "🇲🇽" },
      { code: "qu-PE", name: "Quechua", flag: "🇵🇪" },
      { code: "ay-BO", name: "Aymara", flag: "🇧🇴" },
      { code: "nv-US", name: "Navajo (Diné Bizaad)", flag: "🇺🇸" }
    ],
    polyglotAdvantage: "Rompe por completo las categorías de pensamiento indoeuropeas: entrena la mente en conceptos holísticos de comunidad, reciprocidad (ayni) y relación con el cosmos."
  },
  {
    id: "uralic",
    name: "Lenguas urálicas (Finougrias)",
    icon: "🌲",
    badgeColor: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300",
    description: "Familia ancestral de cazadores y pastores del norte de Eurasia que sobrevivió en el corazón de Europa sin pertenecer al árbol indoeuropeo, dividida entre las ramas báltico-finesa y úgrica.",
    ancestor: "Protourálico (Montes Urales, c. 2000 a.C.)",
    speakersTotal: "+25 millones",
    keyFeatures: [
      "Sistemas de casos extraordinariamente ricos (15 casos en finés, 18 en húngaro) que expresan relaciones espaciales milimétricas.",
      "Armonía vocálica estricta: las vocales de los sufijos mutan para armonizar con el carácter anterior o posterior de la raíz.",
      "Ausencia del verbo 'tener': la posesión se expresa locativamente ('en mí está el libro').",
      "Acentuación fija absoluta e invariable en la primera sílaba de cada palabra."
    ],
    members: [
      { code: "fi-FI", name: "Finés", flag: "🇫🇮" },
      { code: "hu-HU", name: "Húngaro", flag: "🇭🇺" }
    ],
    polyglotAdvantage: "Ofrece la experiencia de una arquitectura morfológica de precisión cristalina, donde los casos sustituyen a las preposiciones con exactitud matemática."
  },
  {
    id: "basque_isolate",
    name: "Lengua aislada paleoeuropea: Euskera",
    icon: "⛰️",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300 border-green-300",
    description: "La lengua viva más antigua de Europa occidental. Un fósil lingüístico viviente anterior a la llegada de las lenguas indoeuropeas a la Península Ibérica y las Galias.",
    ancestor: "Protoibérico / Aquitano preindoeuropeo (Europa de la Edad de Piedra)",
    speakersTotal: "~1 millón",
    keyFeatures: [
      "Alineamiento morfosintáctico ergativo-absolutivo: el sujeto de un verbo transitivo se marca con -k, mientras el intransitivo coincide con el objeto.",
      "Sistema verbal alocutivo polipersonal: la forma del verbo indica al mismo tiempo el sujeto, el objeto directo, el indirecto y el género de quien escucha.",
      "Aglutinación de casos declinados directamente sobre el sintagma nominal.",
      "Inexistencia demostrada de parentesco genético con ninguna otra lengua del planeta."
    ],
    members: [
      { code: "eu-ES", name: "Euskera", flag: "🟢" }
    ],
    polyglotAdvantage: "Es una cápsula del tiempo cultural única: aprender nociones de euskera te transporta directamente a la mentalidad de los pueblos prehistóricos europeos previa a la romanización."
  }
];

export const CLASSIC_COMBINATIONS: ClassicCombination[] = [
  {
    id: "catalan_occitan",
    title: "Catalán y Occitano",
    languages: [
      { name: "Catalán", flag: "🟡", script: "Latino", code: "ca-ES" },
      { name: "Occitano", flag: "🔴", script: "Latino", code: "oc-FR" }
    ],
    intelligibilityRate: 94,
    icon: "🏰",
    summary: "El continuo occitanorromance por excelencia. Durante siglos compartieron la misma lengua poética trovadoresca (lemozin/proensal); la inteligibilidad en lectura escrita roza el 95%.",
    sharedRoots: "Tratamiento idéntico de vocales átonas, diptongos, conservación de consonantes finales y léxico medieval compartido.",
    differences: "El catalán desarrolló la 'l' geminada (l·l) y una norma ortográfica unificada moderna (Fabra); el occitano posee diversas normas (clásica y mistraliana) y ligera influencia fonética del francés en el norte.",
    learningAdvantage: "Aprender uno te abre automáticamente la comprensión del otro y de la literatura medieval trovadoresca más influyente de la historia europea.",
    bonusCoverage: "+12 millones en el arco mediterráneo (Cataluña, Valencia, Baleares, Andorra y el sur de Francia)"
  },
  {
    id: "galician_portuguese",
    title: "Gallego y Portugués",
    languages: [
      { name: "Gallego", flag: "⚪", script: "Latino", code: "gl-ES" },
      { name: "Portugués", flag: "🇵🇹", script: "Latino", code: "pt-PT" }
    ],
    intelligibilityRate: 95,
    icon: "🌊",
    summary: "Ramas gemelas del galaicoportugués histórico. Hasta el siglo XIV fueron la misma lengua de las célebres Cantigas. La comprensión mutua es espontánea e inmediata.",
    sharedRoots: "Conservación del infinitivo conjugado, misma sintaxis de pronombres clíticos y un sustrato léxico prácticamente intercambiable.",
    differences: "El gallego adoptó convenciones ortográficas próximas al castellano (ñ en lugar de nh, ll en lugar de lh) y perdió las sibilantes sonoras que el portugués peninsular conserva.",
    learningAdvantage: "Dominar gallego te otorga acceso natural e inmediato a la lusofonía mundial (más de 260 millones de personas).",
    bonusCoverage: "+265 millones en la Península Ibérica, Brasil, Angola y Mozambique"
  },
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
