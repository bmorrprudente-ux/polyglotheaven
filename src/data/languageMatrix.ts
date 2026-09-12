/**
 * Language Discovery Matrix & Reach Calculator Dataset for Polyglot Heaven
 * Multi-dimensional analysis across demographics, economics, culture, literature, and linguistic difficulty.
 */

export interface LanguageMatrixItem {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  family: string;
  totalSpeakersM: number; // in Millions
  nativeSpeakersM: number;
  demographicTrajectory: "Rápido crecimiento" | "Crecimiento constante" | "Estable" | "Declive ligero";
  demographicGrowthNote: string;
  culturalSoftPowerScore: number; // 1 - 100
  culturalNotes: string;
  digitalFootprintRank: number; // 1 is highest
  digitalFootprintNote: string;
  mostStudiedRank: number;
  economicWeightTrillionUSD: number;
  economicNote: string;
  fsiDifficultyTier: "Tier 1 (24 sem)" | "Tier 2 (30 sem)" | "Tier 3 (36 sem)" | "Tier 4 (44 sem)" | "Tier 4+ (88 sem)";
  fsiSpanishEquiv: "Nativo" | "Muy fácil" | "Fácil" | "Moderado" | "Desafiante" | "Muy exigente";
  geographicDispersion: "Global pluricéntrico" | "Regional concentrado" | "Continental disperso";
  dialectalFragmentation: "Alta fragmentación" | "Moderada" | "Baja / Estandarizada";
  dialectalNote: string;
  untranslatedTreasures: string; // Philosophy, literature, niche commentary that rarely gets translated
  orthographicPhoneticCurve: string; // Writing system, phonemes, tones
  regions: ("América" | "Europa" | "Asia" | "África" | "Oceanía" | "Oriente Medio")[];
}

export const LANGUAGE_MATRIX: LanguageMatrixItem[] = [
  {
    id: "es",
    name: "Español",
    nativeName: "Español",
    flag: "🇪🇸",
    family: "Romance",
    totalSpeakersM: 595,
    nativeSpeakersM: 485,
    demographicTrajectory: "Crecimiento constante",
    demographicGrowthNote: "Segundo idioma nativo global; expansión demográfica sostenida en las Américas.",
    culturalSoftPowerScore: 89,
    culturalNotes: "Gigante cultural en música global, literatura (Cervantes, García Márquez, Borges), cine iberoamericano y fútbol.",
    digitalFootprintRank: 3,
    digitalFootprintNote: "Tercer idioma más usado en Internet (8% del tráfico global) y segundo en redes sociales.",
    mostStudiedRank: 2,
    economicWeightTrillionUSD: 7.5,
    economicNote: "Bloque hispanohablante de 21 países con creciente peso comercial en el hemisferio occidental.",
    fsiDifficultyTier: "Tier 1 (24 sem)",
    fsiSpanishEquiv: "Nativo",
    geographicDispersion: "Global pluricéntrico",
    dialectalFragmentation: "Moderada",
    dialectalNote: "Alta inteligibilidad mutua general combinada con una rica gama de jergas locales e inflexiones fonéticas caribeñas, andinas y rioplatenses.",
    untranslatedTreasures: "Inmensa tradición de crónica periodística latinoamericana, poesía lírica contemporánea, filosofía de la liberación y ensayos políticos regionales que no circulan en inglés.",
    orthographicPhoneticCurve: "Ortografía fonética casi 1:1, 5 vocales puras muy claras, sin tonos.",
    regions: ["América", "Europa"]
  },
  {
    id: "en",
    name: "Inglés",
    nativeName: "English",
    flag: "🇬🇧",
    family: "Germánica",
    totalSpeakersM: 1500,
    nativeSpeakersM: 380,
    demographicTrajectory: "Crecimiento constante",
    demographicGrowthNote: "La lingua franca indiscutible del siglo XXI, impulsada por hablantes L2 en todo el mundo.",
    culturalSoftPowerScore: 98,
    culturalNotes: "Hegemonía en entretenimiento (Hollywood), academia, música pop y ciencia.",
    digitalFootprintRank: 1,
    digitalFootprintNote: "55% del contenido de la web y primer idioma en modelos de lenguaje e inteligencia artificial.",
    mostStudiedRank: 1,
    economicWeightTrillionUSD: 33.0,
    economicNote: "EE. UU., Reino Unido, Canadá, Australia y comercio internacional.",
    fsiDifficultyTier: "Tier 1 (24 sem)",
    fsiSpanishEquiv: "Fácil",
    geographicDispersion: "Global pluricéntrico",
    dialectalFragmentation: "Moderada",
    dialectalNote: "Estándar formal muy unificado; enorme diversidad en acentos regionales (escocés, cockney, sudasiático, nigeriano, sureño).",
    untranslatedTreasures: "La inmensa mayoría de obras globales se traducen hacia el inglés, pero alberga infinitos nichos de subculturas técnicas, foros de vanguardia y revistas literarias independientes.",
    orthographicPhoneticCurve: "Ortografía caótica no fonética con 12–14 sonidos vocálicos; gramática morfológica muy simple sin género ni casos.",
    regions: ["América", "Europa", "Asia", "África", "Oceanía"]
  },
  {
    id: "cmn",
    name: "Chino Mandarín",
    nativeName: "中文 (普通话)",
    flag: "🇨🇳",
    family: "Sino-tibetana",
    totalSpeakersM: 1120,
    nativeSpeakersM: 920,
    demographicTrajectory: "Estable",
    demographicGrowthNote: "Mayor población nativa del planeta; transición demográfica hacia la madurez.",
    culturalSoftPowerScore: 92,
    culturalNotes: "Cultura milenaria continua, filosofía clásica (confucianismo, taoísmo), cine wuxia, literatura épica y floreciente ciencia ficción contemporánea.",
    digitalFootprintRank: 2,
    digitalFootprintNote: "Ecosistema digital propio colosal (WeChat, Bilibili, Weibo) casi del tamaño del internet occidental entero.",
    mostStudiedRank: 4,
    economicWeightTrillionUSD: 18.5,
    economicNote: "Segunda mayor economía del mundo y motor manufacturero e industrial de Asia.",
    fsiDifficultyTier: "Tier 4+ (88 sem)",
    fsiSpanishEquiv: "Muy exigente",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Alta fragmentación",
    dialectalNote: "El mandarín estándar (Putonghua) actúa como lingua franca unificadora sobre un mosaico de variedades orales (cantonés, wu, min, hakka) no inteligibles oralmente pero unidas por la escritura.",
    untranslatedTreasures: "El mayor océano de literatura histórica, novelas web colosales de millones de palabras, tratados de medicina tradicional, estrategia militar y debates filosóficos y geopolíticos chinos que jamás se vierten a lenguas occidentales.",
    orthographicPhoneticCurve: "Gramática sin conjugaciones ni géneros, pero requiere memorizar miles de caracteres hanzi y dominar 4 tonos orales.",
    regions: ["Asia"]
  },
  {
    id: "ar",
    name: "Árabe",
    nativeName: "العربية",
    flag: "🇸🇦",
    family: "Semítica",
    totalSpeakersM: 380,
    nativeSpeakersM: 320,
    demographicTrajectory: "Rápido crecimiento",
    demographicGrowthNote: "Una de las tasas de natalidad más dinámicas del mundo en el mundo árabe y norte de África.",
    culturalSoftPowerScore: 84,
    culturalNotes: "Lengua litúrgica de 1.900 millones de musulmanes, rica poesía clásica, caligrafía artística y música tarab.",
    digitalFootprintRank: 8,
    digitalFootprintNote: "Enorme crecimiento en plataformas de vídeo y medios de noticias panárabes (Al Jazeera).",
    mostStudiedRank: 6,
    economicWeightTrillionUSD: 3.8,
    economicNote: "Poder financiero del Golfo Pérsico, energía, logística marítima y fondos soberanos globales.",
    fsiDifficultyTier: "Tier 4+ (88 sem)",
    fsiSpanishEquiv: "Muy exigente",
    geographicDispersion: "Continental disperso",
    dialectalFragmentation: "Alta fragmentación",
    dialectalNote: "Situación clásica de diglosia: el Árabe Estándar Moderno (Fusha) se lee y escucha en noticias y literatura en 22 países, mientras en la calle se habla árabe egipcio, levantino, magrebí o del golfo.",
    untranslatedTreasures: "Siglos de filosofía islámica medieval, tratados sufíes de mística, poesía beduina, debates jurídicos y crítica política árabe contemporánea que no existe en traducciones europeas.",
    orthographicPhoneticCurve: "Alfabeto abyad consonántico cursivo de derecha a izquierda; fonética rica en consonantes faríngeas y uvulares; raíz triconsonántica matemáticamente predecible.",
    regions: ["Oriente Medio", "África"]
  },
  {
    id: "fr",
    name: "Francés",
    nativeName: "Français",
    flag: "🇫🇷",
    family: "Romance",
    totalSpeakersM: 320,
    nativeSpeakersM: 80,
    demographicTrajectory: "Rápido crecimiento",
    demographicGrowthNote: "La demografía subsahariana (Kinshasa, Abiyán, Dakar) convertirá al francés en uno de los idiomas más hablados del siglo XXI.",
    culturalSoftPowerScore: 94,
    culturalNotes: "Lengua histórica de la diplomacia, literatura ilustrada, alta cocina, filosofía existencialista y cómic (BD franco-belga).",
    digitalFootprintRank: 6,
    digitalFootprintNote: "Séptimo idioma en la web; presencia muy fuerte en organizaciones internacionales e investigación.",
    mostStudiedRank: 3,
    economicWeightTrillionUSD: 4.6,
    economicNote: "Francia, Canadá, Bélgica, Suiza y los mercados emergentes francófonos de África Occidental.",
    fsiDifficultyTier: "Tier 1 (24 sem)",
    fsiSpanishEquiv: "Fácil",
    geographicDispersion: "Global pluricéntrico",
    dialectalFragmentation: "Moderada",
    dialectalNote: "Francés metropolitano, quebequense y variedades africanas con vocabulario colorido y entonaciones rítmicas.",
    untranslatedTreasures: "Inmensa bibliografía de filosofía posestructuralista, novelas africanas de descolonización, revistas literarias del siglo XIX y cómics conceptuales.",
    orthographicPhoneticCurve: "Ortografía histórica con muchas letras mudas; vocales nasales características; liaison entre palabras.",
    regions: ["Europa", "África", "América"]
  },
  {
    id: "pt",
    name: "Portugués",
    nativeName: "Português",
    flag: "🇧🇷",
    family: "Romance",
    totalSpeakersM: 290,
    nativeSpeakersM: 260,
    demographicTrajectory: "Crecimiento constante",
    demographicGrowthNote: "Potencia demográfica en Sudamérica (Brasil) y fuerte crecimiento en África (Angola y Mozambique).",
    culturalSoftPowerScore: 82,
    culturalNotes: "Música bossa nova, samba, literatura lusófona (Pessoa, Machado de Assis, Saramago) y telenovelas globales.",
    digitalFootprintRank: 5,
    digitalFootprintNote: "Comunidad de creadores de contenido gigante en Brasil, muy activa en YouTube y gaming.",
    mostStudiedRank: 7,
    economicWeightTrillionUSD: 2.8,
    economicNote: "Brasil como gigante agropecuario y de recursos, Portugal como hub europeo, Angola en energía.",
    fsiDifficultyTier: "Tier 1 (24 sem)",
    fsiSpanishEquiv: "Muy fácil",
    geographicDispersion: "Continental disperso",
    dialectalFragmentation: "Moderada",
    dialectalNote: "Diferencia acústica marcada entre el portugués europeo (más cerrado y consonántico) y el brasileño (abierto, musical y vocalizado).",
    untranslatedTreasures: "Tesoros de la literatura colonial luso-asiática (Goa, Macao), cronistas de la Amazonía, poesía modernista brasileña y literatura poscolonial angoleña.",
    orthographicPhoneticCurve: "Ortografía muy accesible para hispanohablantes; fonología con vocales nasales (ã, õ) y reducción de vocales átonas.",
    regions: ["América", "Europa", "África"]
  },
  {
    id: "ru",
    name: "Ruso",
    nativeName: "Русский",
    flag: "🇷🇺",
    family: "Eslava",
    totalSpeakersM: 255,
    nativeSpeakersM: 150,
    demographicTrajectory: "Declive ligero",
    demographicGrowthNote: "Lingua franca euroasiática que abarca desde el Báltico hasta el Pacífico.",
    culturalSoftPowerScore: 86,
    culturalNotes: "Monumental tradición literaria (Tolstói, Dostoievski, Chéjov, Bulgákov), ballet clásico, cine de autor (Tarkovski) y ciencia espacial.",
    digitalFootprintRank: 4,
    digitalFootprintNote: "Segundo idioma más usado en páginas web de infraestructura técnica e investigación abierta.",
    mostStudiedRank: 8,
    economicWeightTrillionUSD: 2.3,
    economicNote: "Comercio de materias primas, energía, minerales y software en Eurasia.",
    fsiDifficultyTier: "Tier 3 (36 sem)",
    fsiSpanishEquiv: "Desafiante",
    geographicDispersion: "Continental disperso",
    dialectalFragmentation: "Baja / Estandarizada",
    dialectalNote: "Sorprendentemente homogéneo a lo largo de 11 husos horarios debido a la estandarización educativa soviética.",
    untranslatedTreasures: "Archivos inagotables de teoría literaria formalista, tratados matemáticos y de ajedrez, cartas y memorias de la era soviética, literatura de ciencia ficción filosófica (hermanos Strugatski).",
    orthographicPhoneticCurve: "Alfabeto cirílico fácil de aprender en una semana; declinación de 6 casos; acento tónico libre impredecible que modifica las vocales (ikanie / akanie).",
    regions: ["Europa", "Asia"]
  },
  {
    id: "ja",
    name: "Japonés",
    nativeName: "日本語",
    flag: "🇯🇵",
    family: "Japónica",
    totalSpeakersM: 125,
    nativeSpeakersM: 124,
    demographicTrajectory: "Declive ligero",
    demographicGrowthNote: "Comunidad lingüística altamente concentrada y alfabetizada con una población que envejece.",
    culturalSoftPowerScore: 95,
    culturalNotes: "Superpotencia de poder blando: anime, manga, videojuegos (Nintendo, Sony), gastronomía, cine, literatura moderna y arquitectura.",
    digitalFootprintRank: 7,
    digitalFootprintNote: "Comunidad de foros, blogs especializados y debates de nicho sumamente activos.",
    mostStudiedRank: 5,
    economicWeightTrillionUSD: 4.3,
    economicNote: "Cuarta economía del mundo, pionera en robótica, automoción e ingeniería de precisión.",
    fsiDifficultyTier: "Tier 4+ (88 sem)",
    fsiSpanishEquiv: "Muy exigente",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Moderada",
    dialectalNote: "Estándar de Tokio unificado en televisión; dialectos regionales muy queridos como el dialecto de Kansai (Osaka/Kioto).",
    untranslatedTreasures: "Montañas de novelas visuales, ensayos filosóficos de la Escuela de Kioto, crítica estética, mangas de autor no licenciados, novelas ligeras y tratados de artesanía tradicional.",
    orthographicPhoneticCurve: "Fonética muy fácil para hispanohablantes (5 vocales idénticas); pero sistema de escritura triple muy complejo (Hiragana, Katakana, 2.136 Kanji) y lenguaje honorífico (Keigo).",
    regions: ["Asia"]
  },
  {
    id: "de",
    name: "Alemán",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    family: "Germánica",
    totalSpeakersM: 135,
    nativeSpeakersM: 95,
    demographicTrajectory: "Estable",
    demographicGrowthNote: "El idioma materno más hablado dentro de las fronteras de la Unión Europea.",
    culturalSoftPowerScore: 88,
    culturalNotes: "Cuna de la filosofía moderna (Kant, Hegel, Nietzsche), música clásica (Bach, Beethoven), sociología y literatura romántica.",
    digitalFootprintRank: 9,
    digitalFootprintNote: "Dominio de internet .de es uno de los más extendidos del mundo; gigantesca cantidad de artículos en Wikipedia.",
    mostStudiedRank: 5,
    economicWeightTrillionUSD: 5.8,
    economicNote: "Alemania, Austria y Suiza representan el núcleo industrial y financiero de Europa.",
    fsiDifficultyTier: "Tier 2 (30 sem)",
    fsiSpanishEquiv: "Moderado",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Alta fragmentación",
    dialectalNote: "Alemán estándar (Hochdeutsch) estricto en medios escritos, pero gran lealtad a los dialectos orales (bávaro, suizo-alemán, austríaco).",
    untranslatedTreasures: "Enormes fondos de filosofía idealista, tratados de psicología, teología, musicología y crítica arquitectónica que pierden su precisión al traducirse.",
    orthographicPhoneticCurve: "Ortografía bastante lógica y fonética; 4 casos gramaticales (nominativo, acusativo, dativo, genitivo) y 3 géneros gramaticales.",
    regions: ["Europa"]
  },
  {
    id: "id",
    name: "Indonesio / Malayo",
    nativeName: "Bahasa Indonesia",
    flag: "🇮🇩",
    family: "Austronesia",
    totalSpeakersM: 310,
    nativeSpeakersM: 45,
    demographicTrajectory: "Rápido crecimiento",
    demographicGrowthNote: "Indonesia es el cuarto país más poblado del planeta con una media de edad muy joven.",
    culturalSoftPowerScore: 68,
    culturalNotes: "Cultura diversa de 17.000 islas, cine de acción contemporáneo (The Raid), literatura épica de Pramoedya Ananta Toer.",
    digitalFootprintRank: 12,
    digitalFootprintNote: "Una de las poblaciones más hiperconectadas del mundo en redes sociales y comercio electrónico móvil.",
    mostStudiedRank: 14,
    economicWeightTrillionUSD: 1.5,
    economicNote: "Economía líder de la ASEAN y miembro del G20 con acelerado desarrollo industrial.",
    fsiDifficultyTier: "Tier 3 (36 sem)",
    fsiSpanishEquiv: "Fácil",
    geographicDispersion: "Continental disperso",
    dialectalFragmentation: "Baja / Estandarizada",
    dialectalNote: "El indonesio y el malayo estándar son mutuamente inteligibles al 95%.",
    untranslatedTreasures: "La literatura de la independencia indonesia, crónicas orales malayas de navegantes, y foros de desarrollo y tecnología comunitaria del sudeste asiático.",
    orthographicPhoneticCurve: "Alfabeto latino 100% fonético; SIN conjugaciones de tiempo, SIN género, SIN plurales irregulares; sistema de afijos lógico.",
    regions: ["Asia"]
  },
  {
    id: "hi",
    name: "Hindi / Urdu",
    nativeName: "हिन्दी / اُردُو",
    flag: "🇮🇳",
    family: "Indoaria",
    totalSpeakersM: 850,
    nativeSpeakersM: 610,
    demographicTrajectory: "Rápido crecimiento",
    demographicGrowthNote: "El país más poblado del mundo (India) junto a la joven demografía de Pakistán.",
    culturalSoftPowerScore: 85,
    culturalNotes: "Cine de Bollywood, poesía ghazal de Urdu, literatura devocional y filosofía védica.",
    digitalFootprintRank: 10,
    digitalFootprintNote: "Crecimiento explosivo de internet móvil impulsado por cientos de millones de nuevos usuarios digitales.",
    mostStudiedRank: 11,
    economicWeightTrillionUSD: 4.1,
    economicNote: "Quinta economía mundial (India) con un crecimiento del PIB superior al 6% anual.",
    fsiDifficultyTier: "Tier 4 (44 sem)",
    fsiSpanishEquiv: "Desafiante",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Alta fragmentación",
    dialectalNote: "Hindustani en la conversación diaria; bifurcación en registros formales literarios.",
    untranslatedTreasures: "Océanos de literatura épica sagrada, poesía sufí, comentarios espirituales y sátiras sociales del siglo XX que nunca salieron de la India.",
    orthographicPhoneticCurve: "Escritura Devanagari para Hindi y Perso-árabe para Urdu; fonología con consonantes aspiradas y retroflejas.",
    regions: ["Asia"]
  },
  {
    id: "tr",
    name: "Turco",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    family: "Túrquica",
    totalSpeakersM: 90,
    nativeSpeakersM: 85,
    demographicTrajectory: "Crecimiento constante",
    demographicGrowthNote: "Puente geopolítico vital entre Europa, Oriente Medio y Asia Central.",
    culturalSoftPowerScore: 78,
    culturalNotes: "Segundo exportador mundial de series de televisión (Dizi), rica historia otomana y literatura de Nobel (Orhan Pamuk).",
    digitalFootprintRank: 11,
    digitalFootprintNote: "Población altamente activa en Twitter, YouTube y plataformas de streaming.",
    mostStudiedRank: 12,
    economicWeightTrillionUSD: 1.1,
    economicNote: "Economía emergente industrializada con fuerte influencia en el Cáucaso y Asia Central.",
    fsiDifficultyTier: "Tier 4 (44 sem)",
    fsiSpanishEquiv: "Moderado",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Baja / Estandarizada",
    dialectalNote: "El dialecto de Estambul es el estándar indiscutible; abre las puertas a entender uzbeko y azerí.",
    untranslatedTreasures: "Poesía mística derviche, literatura modernista de la República de Atatürk, y crónicas históricas bizantino-otomanas.",
    orthographicPhoneticCurve: "Alfabeto latino fonético casi perfecto; aglutinación matemáticamente regular; armonía vocálica estricta; sin género.",
    regions: ["Europa", "Oriente Medio"]
  },
  {
    id: "sw",
    name: "Suajili (Swahili)",
    nativeName: "Kiswahili",
    flag: "🇰🇪",
    family: "Bantú (Níger-Congo)",
    totalSpeakersM: 200,
    nativeSpeakersM: 20,
    demographicTrajectory: "Rápido crecimiento",
    demographicGrowthNote: "La lingua franca de más rápida adopción en África Oriental (Kenia, Tanzania, Uganda, RD del Congo).",
    culturalSoftPowerScore: 72,
    culturalNotes: "Lengua oficial de la Unión Africana; filosofía comunitaria 'Utu'; rica poesía oral y música Taarab.",
    digitalFootprintRank: 15,
    digitalFootprintNote: "Crecimiento rápido en centros tecnológicos de Nairobi ('Silicon Savannah').",
    mostStudiedRank: 13,
    economicWeightTrillionUSD: 0.6,
    economicNote: "Motor de la Comunidad de África Oriental, uno de los bloques comerciales más dinámicos del continente.",
    fsiDifficultyTier: "Tier 3 (36 sem)",
    fsiSpanishEquiv: "Moderado",
    geographicDispersion: "Continental disperso",
    dialectalFragmentation: "Moderada",
    dialectalNote: "El dialecto de Zanzíbar (Kiunguja) es el estándar formal respetado en todos los países.",
    untranslatedTreasures: "Cuentos populares bantúes, proverbios metafóricos orales y reflexiones sobre la identidad panafricana poscolonial.",
    orthographicPhoneticCurve: "Alfabeto latino 100% fonético; 5 vocales idénticas al español; sin tonos; sistema fascinante de clases de sustantivos con prefijos concordantes.",
    regions: ["África"]
  },
  {
    id: "fa",
    name: "Persa (Farsi / Dari / Tayiko)",
    nativeName: "فارسی",
    flag: "🇮🇷",
    family: "Indoirania",
    totalSpeakersM: 120,
    nativeSpeakersM: 75,
    demographicTrajectory: "Crecimiento constante",
    demographicGrowthNote: "Gran población joven en Irán, Afganistán y Tayikistán.",
    culturalSoftPowerScore: 83,
    culturalNotes: "Una de las tradiciones poéticas más excelsas de la humanidad (Rumi, Hafez, Ferdowsi, Omar Jayam) y cine contemporáneo laureado con Oscars.",
    digitalFootprintRank: 13,
    digitalFootprintNote: "Comunidad de blogueros, artistas y foros culturales extremadamente activa a pesar de restricciones.",
    mostStudiedRank: 15,
    economicWeightTrillionUSD: 0.5,
    economicNote: "Grandes reservas de gas natural y petróleo; posición estratégica en la Ruta de la Seda.",
    fsiDifficultyTier: "Tier 3 (36 sem)",
    fsiSpanishEquiv: "Moderado",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Moderada",
    dialectalNote: "El persa de Teherán, el darí afgano y el tayiko (escrito en cirílico) son inteligibles al 85%+.",
    untranslatedTreasures: "La cumbre de las joyas no traducidas: bibliotecas enteras de poesía mística, metáforas sufíes, crónicas de cortes persas y reflexiones existenciales que los orientalistas consideran intraducibles sin perder su musicalidad.",
    orthographicPhoneticCurve: "Gramática indoeuropea muy sencilla (sin género, sin casos); orden SOV; alfabeto perso-árabe cursivo.",
    regions: ["Oriente Medio", "Asia"]
  },
  {
    id: "ca",
    name: "Catalán",
    nativeName: "Català",
    flag: "🟡",
    family: "Romance",
    totalSpeakersM: 10,
    nativeSpeakersM: 4.5,
    demographicTrajectory: "Estable",
    demographicGrowthNote: "Fuerte inmersión escolar y vitalidad editorial e institucional en Cataluña, Baleares y Andorra.",
    culturalSoftPowerScore: 78,
    culturalNotes: "Arquitectura modernista de Gaudí, gastronomía de vanguardia (Ferran Adrià, Roca), literatura medieval (Tirant lo Blanc) y música contemporánea.",
    digitalFootprintRank: 19,
    digitalFootprintNote: "Dominio .cat pionero en el mundo; una de las wikipedias más completas y activas por número de hablantes.",
    mostStudiedRank: 18,
    economicWeightTrillionUSD: 0.35,
    economicNote: "Cataluña, Comunidad Valenciana y Baleares representan más del 30% del PIB y exportaciones españolas.",
    fsiDifficultyTier: "Tier 1 (24 sem)",
    fsiSpanishEquiv: "Muy fácil",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Baja / Estandarizada",
    dialectalNote: "División entre bloques oriental (central, balear) y occidental (valenciano, leridano) con total inteligibilidad mutua.",
    untranslatedTreasures: "Enorme fondo de narrativa mediterránea contemporánea (Mercè Rodoreda, Joan Sales, Quim Monzó) y ensayos de humanidades.",
    orthographicPhoneticCurve: "8 vocales tónicas (distinción e/o abierta y cerrada), vocal neutra en el bloque oriental y dígrafo l·l.",
    regions: ["Europa"]
  },
  {
    id: "gl",
    name: "Gallego",
    nativeName: "Galego",
    flag: "⚪",
    family: "Romance",
    totalSpeakersM: 3,
    nativeSpeakersM: 2.2,
    demographicTrajectory: "Estable",
    demographicGrowthNote: "Población estable en Galicia con gran apego identitario y proyección lusófona.",
    culturalSoftPowerScore: 71,
    culturalNotes: "El Camino de Santiago, música celta (Carlos Núñez), mitología atlántica y la era dorada de las Cantigas de Santa María de Alfonso X.",
    digitalFootprintRank: 32,
    digitalFootprintNote: "Medios públicos y comunidad digital de creadores y divulgadores (Galipedia) muy consolidada.",
    mostStudiedRank: 26,
    economicWeightTrillionUSD: 0.08,
    economicNote: "Industria pesquera líder europea, textil global (Inditex/Zara en A Coruña) y energía renovable.",
    fsiDifficultyTier: "Tier 1 (24 sem)",
    fsiSpanishEquiv: "Muy fácil",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Baja / Estandarizada",
    dialectalNote: "Tres bloques (occidental, central, oriental) con inteligibilidad del 95%+ y puente directo a la fonología portuguesa.",
    untranslatedTreasures: "Poesía lírica del Rexurdimento (Rosalía de Castro, Castelao), literatura de realismo mágico atlántico y crónica rural profunda.",
    orthographicPhoneticCurve: "7 vocales tónicas (con distinción abierta/cerrada), 5 átonas, sin sibilantes sonoras y ortografía muy cercana al castellano.",
    regions: ["Europa"]
  },
  {
    id: "oc",
    name: "Occitano",
    nativeName: "Lenga d'òc / Occitan",
    flag: "🔴",
    family: "Romance",
    totalSpeakersM: 1.8,
    nativeSpeakersM: 0.8,
    demographicTrajectory: "Declive ligero",
    demographicGrowthNote: "Movimiento de recuperación cultural a través de escuelas 'Calandretas' y cooficialidad en el Valle de Arán.",
    culturalSoftPowerScore: 84,
    culturalNotes: "Cuna de los trovadores y del concepto occidental del amor cortés (Bernart de Ventadorn); Premio Nobel de Literatura (Frédéric Mistral en 1904).",
    digitalFootprintRank: 45,
    digitalFootprintNote: "Diccionarios patrimoniales en línea, proyectos colaborativos (Lo Congrès) y música folk contemporánea.",
    mostStudiedRank: 30,
    economicWeightTrillionUSD: 0.04,
    economicNote: "Regiones de Occitania y Provenza en el sur de Francia, hubs aeroespaciales (Toulouse) y turismo mediterráneo.",
    fsiDifficultyTier: "Tier 1 (24 sem)",
    fsiSpanishEquiv: "Fácil",
    geographicDispersion: "Regional concentrado",
    dialectalFragmentation: "Moderada",
    dialectalNote: "Dialectos lengadocien (base estándar), provenzal, gascón (aranés), auvernés y limosín.",
    untranslatedTreasures: "La lírica trovadoresca original en su musicalidad genuina, epopeyas de la Cruzada Albigense, la obra maestra 'Mirèio' de Mistral y crónicas rurales provenzales.",
    orthographicPhoneticCurve: "Grafía clásica unificada cercana al catalán, vocales nasales sutiles, diptongos ricos y conservación de consonantes oclusivas.",
    regions: ["Europa"]
  }
];

/**
 * Calculates reachable speakers based on mastered and learning language codes.
 * Estimates unique population reach (accounting for overlap between lingua francas).
 */
export function calculateReachablePeople(
  masteredIds: string[],
  learningIds: string[]
): {
  masteredPopulationM: number;
  learningPotentialM: number;
  totalUniqueReachM: number;
  worldPercentage: number;
  regionalBreakdown: Record<string, number>;
} {
  const worldPopulationM = 8100; // ~8.1 Billion

  // Clean IDs (strip dialect suffix like es-ES -> es, pt-BR -> pt)
  const normMastered = new Set(masteredIds.map(id => id.split("-")[0].toLowerCase()));
  const normLearning = new Set(learningIds.map(id => id.split("-")[0].toLowerCase()));

  let masteredSum = 0;
  let learningSum = 0;
  const regionalCount: Record<string, number> = {
    "América": 0,
    "Europa": 0,
    "Asia": 0,
    "África": 0,
    "Oriente Medio": 0,
  };

  const processedMastered = new Set<string>();
  const processedLearning = new Set<string>();

  LANGUAGE_MATRIX.forEach(item => {
    const isMastered = normMastered.has(item.id);
    const isLearning = normLearning.has(item.id);

    if (isMastered && !processedMastered.has(item.id)) {
      masteredSum += item.totalSpeakersM;
      processedMastered.add(item.id);
      item.regions.forEach(reg => {
        if (regionalCount[reg] !== undefined) regionalCount[reg] += item.totalSpeakersM;
      });
    } else if (isLearning && !isMastered && !processedLearning.has(item.id)) {
      learningSum += item.totalSpeakersM;
      processedLearning.add(item.id);
      item.regions.forEach(reg => {
        if (regionalCount[reg] !== undefined) regionalCount[reg] += item.totalSpeakersM * 0.7; // weighting
      });
    }
  });

  // Apply overlap reduction factor for bilingual populations (e.g. English + other languages)
  const totalCombined = masteredSum + (learningSum * 0.85);
  const cappedReach = Math.min(worldPopulationM, Math.round(totalCombined * 0.88)); // overlap factor
  const pct = Math.min(100, Math.round((cappedReach / worldPopulationM) * 100));

  return {
    masteredPopulationM: Math.round(masteredSum * 0.9),
    learningPotentialM: Math.round(learningSum * 0.85),
    totalUniqueReachM: cappedReach,
    worldPercentage: pct,
    regionalBreakdown: regionalCount,
  };
}
