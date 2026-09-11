export interface VoiceModelInfo {
  modelId: string;
  gender: "Masculino" | "Femenina";
  region: string;
  type: "Chirp" | "Neural2" | "WaveNet" | "Standard";
  label: string;
}

export interface LanguageDemographics {
  dialectSpeakers: string;
  whereConcentrated: string;
  totalLanguageSpeakers: string;
  speakers2050: string;
  curiosity: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  family: string;
  region: string;
  scriptType?: string;
  hasVoiceModel?: boolean;
  demographics: LanguageDemographics;
  characterVoices: {
    hugo: VoiceModelInfo;
    clara: VoiceModelInfo;
    don_ramon: VoiceModelInfo;
    mateo: VoiceModelInfo;
    bea: VoiceModelInfo;
  };
}

export interface LanguageGroup {
  id: string;
  name: string;
  description: string;
  icon: string;
  codes: string[];
}

export const LANGUAGES: Record<string, Language> = {
  // ==========================================
  // ESPAÑOL Y SUS VARIANTES
  // ==========================================
  "es-ES": {
    code: "es-ES",
    name: "Español (España)",
    nativeName: "Español peninsular",
    flag: "🇪🇸",
    family: "Romance",
    region: "España (Europa)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "47 millones",
      whereConcentrated: "Península Ibérica, Islas Baleares y Canarias",
      totalLanguageSpeakers: "599 millones en todo el mundo",
      speakers2050: "720 millones (crecimiento demográfico hispanohablante)",
      curiosity: "Mantiene la distinción fonética entre la 'c/z' (/θ/) y la 's' (/s/), además del uso de 'vosotros'."
    },
    characterVoices: {
      hugo: { modelId: "es-ES-AlvaroNeural", gender: "Masculino", region: "España", type: "Neural2", label: "Álvaro (Castellano)" },
      clara: { modelId: "es-ES-ElviraNeural", gender: "Femenina", region: "España", type: "Neural2", label: "Elvira (Castellana)" },
      don_ramon: { modelId: "es-ES-AlvaroNeural", gender: "Masculino", region: "España", type: "WaveNet", label: "Álvaro (Maduro)" },
      mateo: { modelId: "es-ES-AlvaroNeural", gender: "Masculino", region: "España", type: "Neural2", label: "Álvaro (Joven)" },
      bea: { modelId: "es-ES-ElviraNeural", gender: "Femenina", region: "España", type: "Neural2", label: "Elvira (Alegre)" }
    }
  },
  "es-MX": {
    code: "es-MX",
    name: "Español (México)",
    nativeName: "Español mexicano",
    flag: "🇲🇽",
    family: "Romance",
    region: "México (Norteamérica)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "130 millones",
      whereConcentrated: "México y gran diáspora en Estados Unidos",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "155 millones en México",
      curiosity: "La variante con más hablantes nativos del mundo; enriquecida con léxico náhuatl (chocolate, aguacate, papalote)."
    },
    characterVoices: {
      hugo: { modelId: "es-MX-JorgeNeural", gender: "Masculino", region: "México", type: "Neural2", label: "Jorge (Mexicano)" },
      clara: { modelId: "es-MX-DaliaNeural", gender: "Femenina", region: "México", type: "Neural2", label: "Dalia (Mexicana)" },
      don_ramon: { modelId: "es-MX-JorgeNeural", gender: "Masculino", region: "México", type: "WaveNet", label: "Jorge (Maduro)" },
      mateo: { modelId: "es-MX-JorgeNeural", gender: "Masculino", region: "México", type: "Neural2", label: "Jorge (Joven)" },
      bea: { modelId: "es-MX-DaliaNeural", gender: "Femenina", region: "México", type: "Neural2", label: "Dalia (Alegre)" }
    }
  },
  "es-AR": {
    code: "es-AR",
    name: "Español (Argentina)",
    nativeName: "Español rioplatense",
    flag: "🇦🇷",
    family: "Romance",
    region: "Argentina y Uruguay",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "46 millones",
      whereConcentrated: "Buenos Aires, Córdoba, Rosario, cuenca del Plata",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "55 millones",
      curiosity: "Famoso por el voseo generalizado ('vos tenés'), el yeísmo rehilado (pronunciar 'll' e 'y' como /ʃ/) y la cadencia melódica italiana."
    },
    characterVoices: {
      hugo: { modelId: "es-AR-TomasNeural", gender: "Masculino", region: "Argentina", type: "Neural2", label: "Tomás (Rioplatense)" },
      clara: { modelId: "es-AR-ElenaNeural", gender: "Femenina", region: "Argentina", type: "Neural2", label: "Elena (Rioplatense)" },
      don_ramon: { modelId: "es-AR-TomasNeural", gender: "Masculino", region: "Argentina", type: "WaveNet", label: "Tomás (Maduro)" },
      mateo: { modelId: "es-AR-TomasNeural", gender: "Masculino", region: "Argentina", type: "Neural2", label: "Tomás (Joven)" },
      bea: { modelId: "es-AR-ElenaNeural", gender: "Femenina", region: "Argentina", type: "Neural2", label: "Elena (Alegre)" }
    }
  },
  "es-CO": {
    code: "es-CO",
    name: "Español (Colombia)",
    nativeName: "Español colombiano",
    flag: "🇨🇴",
    family: "Romance",
    region: "Colombia (Andina y Caribe)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "52 millones",
      whereConcentrated: "Bogotá, Medellín, Cali, Barranquilla",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "65 millones",
      curiosity: "El español andino/bogotano se caracteriza por su articulación nítida y el uso deferente del 'usted'."
    },
    characterVoices: {
      hugo: { modelId: "es-CO-GonzaloNeural", gender: "Masculino", region: "Colombia", type: "Neural2", label: "Gonzalo (Colombiano)" },
      clara: { modelId: "es-CO-SalomeNeural", gender: "Femenina", region: "Colombia", type: "Neural2", label: "Salomé (Colombiana)" },
      don_ramon: { modelId: "es-CO-GonzaloNeural", gender: "Masculino", region: "Colombia", type: "WaveNet", label: "Gonzalo (Maduro)" },
      mateo: { modelId: "es-CO-GonzaloNeural", gender: "Masculino", region: "Colombia", type: "Neural2", label: "Gonzalo (Joven)" },
      bea: { modelId: "es-CO-SalomeNeural", gender: "Femenina", region: "Colombia", type: "Neural2", label: "Salomé (Alegre)" }
    }
  },
  "es-VE": {
    code: "es-VE",
    name: "Español (Venezuela)",
    nativeName: "Español venezolano",
    flag: "🇻🇪",
    family: "Romance",
    region: "Venezuela y diáspora",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "29 millones",
      whereConcentrated: "Caracas, Zulia, región andina y llanos",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "38 millones",
      curiosity: "Aspiración suave de la 's', uso festivo de diminutivos ('ahorita', 'chamo') y en el Zulia voseo maracucho singular."
    },
    characterVoices: {
      hugo: { modelId: "es-VE-SebastianNeural", gender: "Masculino", region: "Venezuela", type: "Neural2", label: "Sebastián (Venezolano)" },
      clara: { modelId: "es-VE-PaolaNeural", gender: "Femenina", region: "Venezuela", type: "Neural2", label: "Paola (Venezolana)" },
      don_ramon: { modelId: "es-VE-SebastianNeural", gender: "Masculino", region: "Venezuela", type: "WaveNet", label: "Sebastián (Maduro)" },
      mateo: { modelId: "es-VE-SebastianNeural", gender: "Masculino", region: "Venezuela", type: "Neural2", label: "Sebastián (Joven)" },
      bea: { modelId: "es-VE-PaolaNeural", gender: "Femenina", region: "Venezuela", type: "Neural2", label: "Paola (Alegre)" }
    }
  },
  "es-CL": {
    code: "es-CL",
    name: "Español (Chile)",
    nativeName: "Español chileno",
    flag: "🇨🇱",
    family: "Romance",
    region: "Chile",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "19 millones",
      whereConcentrated: "Santiago, Valparaíso, Concepción y valles centrales",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "23 millones",
      curiosity: "Posee una de las entonaciones más melódicas del continente, voseo verbal propio ('¿cómo estái? cachái') y caída de consonantes finales."
    },
    characterVoices: {
      hugo: { modelId: "es-CL-LorenzoNeural", gender: "Masculino", region: "Chile", type: "Neural2", label: "Lorenzo (Chileno)" },
      clara: { modelId: "es-CL-CatalinaNeural", gender: "Femenina", region: "Chile", type: "Neural2", label: "Catalina (Chilena)" },
      don_ramon: { modelId: "es-CL-LorenzoNeural", gender: "Masculino", region: "Chile", type: "WaveNet", label: "Lorenzo (Maduro)" },
      mateo: { modelId: "es-CL-LorenzoNeural", gender: "Masculino", region: "Chile", type: "Neural2", label: "Lorenzo (Joven)" },
      bea: { modelId: "es-CL-CatalinaNeural", gender: "Femenina", region: "Chile", type: "Neural2", label: "Catalina (Alegre)" }
    }
  },
  "es-PE": {
    code: "es-PE",
    name: "Español (Perú)",
    nativeName: "Español peruano",
    flag: "🇵🇪",
    family: "Romance",
    region: "Perú (Costeño y Andino)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "33 millones",
      whereConcentrated: "Lima, Arequipa, Trujillo, Cusco",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "42 millones",
      curiosity: "El español limeño ribereño es célebre por su ritmo mesurado y clara pronunciación de las consonantes, con préstamos quechuas cotidianos."
    },
    characterVoices: {
      hugo: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Perú", type: "Neural2", label: "Alex (Peruano)" },
      clara: { modelId: "es-PE-CamilaNeural", gender: "Femenina", region: "Perú", type: "Neural2", label: "Camila (Peruana)" },
      don_ramon: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Perú", type: "WaveNet", label: "Alex (Maduro)" },
      mateo: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Perú", type: "Neural2", label: "Alex (Joven)" },
      bea: { modelId: "es-PE-CamilaNeural", gender: "Femenina", region: "Perú", type: "Neural2", label: "Camila (Alegre)" }
    }
  },
  "es-CU": {
    code: "es-CU",
    name: "Español (Cuba)",
    nativeName: "Español cubano",
    flag: "🇨🇺",
    family: "Romance",
    region: "Cuba (Antillas)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "11 millones",
      whereConcentrated: "La Habana, Santiago de Cuba, Camagüey y Miami",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "12 millones",
      curiosity: "Español caribeño de ritmo rápido, asimilación consonántica ('cobbata' por corbata) y elisión frecuente de consonantes intervocálicas."
    },
    characterVoices: {
      hugo: { modelId: "es-CU-ManuelNeural", gender: "Masculino", region: "Cuba", type: "Neural2", label: "Manuel (Cubano)" },
      clara: { modelId: "es-CU-BelkysNeural", gender: "Femenina", region: "Cuba", type: "Neural2", label: "Belkys (Cubana)" },
      don_ramon: { modelId: "es-CU-ManuelNeural", gender: "Masculino", region: "Cuba", type: "WaveNet", label: "Manuel (Maduro)" },
      mateo: { modelId: "es-CU-ManuelNeural", gender: "Masculino", region: "Cuba", type: "Neural2", label: "Manuel (Joven)" },
      bea: { modelId: "es-CU-BelkysNeural", gender: "Femenina", region: "Cuba", type: "Neural2", label: "Belkys (Alegre)" }
    }
  },

  "es-GQ": {
    code: "es-GQ",
    name: "Español (Guinea Ecuatorial)",
    nativeName: "Español ecuatoguineano",
    flag: "🇬🇶",
    family: "Romance",
    region: "África Central",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "1.6 millones",
      whereConcentrated: "Malabo (Isla de Bioko) y Bata (Río Muni)",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "3 millones",
      curiosity: "El único país africano donde el español es lengua oficial y vehicular; no distingue entre 'tú' y 'usted' y conserva un timbre sonoro único."
    },
    characterVoices: {
      hugo: { modelId: "es-GQ-JavierNeural", gender: "Masculino", region: "Guinea Ecuatorial", type: "Neural2", label: "Javier (Ecuatoguineano)" },
      clara: { modelId: "es-GQ-TeresaNeural", gender: "Femenina", region: "Guinea Ecuatorial", type: "Neural2", label: "Teresa (Ecuatoguineana)" },
      don_ramon: { modelId: "es-GQ-JavierNeural", gender: "Masculino", region: "Guinea Ecuatorial", type: "WaveNet", label: "Javier (Maduro)" },
      mateo: { modelId: "es-GQ-JavierNeural", gender: "Masculino", region: "Guinea Ecuatorial", type: "Neural2", label: "Javier (Joven)" },
      bea: { modelId: "es-GQ-TeresaNeural", gender: "Femenina", region: "Guinea Ecuatorial", type: "Neural2", label: "Teresa (Alegre)" }
    }
  },
  "es-DO": {
    code: "es-DO",
    name: "Español (República Dominicana)",
    nativeName: "Español dominicano",
    flag: "🇩🇴",
    family: "Romance",
    region: "República Dominicana (Caribe)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "11.5 millones",
      whereConcentrated: "Santo Domingo, Santiago de los Caballeros, Cibao",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "14 millones",
      curiosity: "Ritmo silábico veloz, elisión de consonantes finales y vocalización cibaeña característica."
    },
    characterVoices: {
      hugo: { modelId: "es-DO-EmilioNeural", gender: "Masculino", region: "República Dominicana", type: "Neural2", label: "Emilio (Dominicano)" },
      clara: { modelId: "es-DO-RamonaNeural", gender: "Femenina", region: "República Dominicana", type: "Neural2", label: "Ramona (Dominicana)" },
      don_ramon: { modelId: "es-DO-EmilioNeural", gender: "Masculino", region: "República Dominicana", type: "WaveNet", label: "Emilio (Maduro)" },
      mateo: { modelId: "es-DO-EmilioNeural", gender: "Masculino", region: "República Dominicana", type: "Neural2", label: "Emilio (Joven)" },
      bea: { modelId: "es-DO-RamonaNeural", gender: "Femenina", region: "República Dominicana", type: "Neural2", label: "Ramona (Alegre)" }
    }
  },
  "es-PR": {
    code: "es-PR",
    name: "Español (Puerto Rico)",
    nativeName: "Español boricua",
    flag: "🇵🇷",
    family: "Romance",
    region: "Puerto Rico (Caribe)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "8.5 millones (Isla y diáspora en EE.UU.)",
      whereConcentrated: "San Juan, Ponce, Mayagüez, Nueva York y Florida",
      totalLanguageSpeakers: "599 millones",
      speakers2050: "10 millones",
      curiosity: "Conocido por el lambdacismo (conversión de la 'r' en 'l': 'puelta', 'velde') y una entonación caribeña distintiva."
    },
    characterVoices: {
      hugo: { modelId: "es-PR-VictorNeural", gender: "Masculino", region: "Puerto Rico", type: "Neural2", label: "Víctor (Boricua)" },
      clara: { modelId: "es-PR-KarinaNeural", gender: "Femenina", region: "Puerto Rico", type: "Neural2", label: "Karina (Boricua)" },
      don_ramon: { modelId: "es-PR-VictorNeural", gender: "Masculino", region: "Puerto Rico", type: "WaveNet", label: "Víctor (Maduro)" },
      mateo: { modelId: "es-PR-VictorNeural", gender: "Masculino", region: "Puerto Rico", type: "Neural2", label: "Víctor (Joven)" },
      bea: { modelId: "es-PR-KarinaNeural", gender: "Femenina", region: "Puerto Rico", type: "Neural2", label: "Karina (Alegre)" }
    }
  },

  // ==========================================
  // INGLÉS Y SUS VARIANTES
  // ==========================================
  "en-US": {
    code: "en-US",
    name: "Inglés (Estados Unidos)",
    nativeName: "American English",
    flag: "🇺🇸",
    family: "Germánica",
    region: "Estados Unidos",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "310 millones",
      whereConcentrated: "Norteamérica",
      totalLanguageSpeakers: "1.450 millones (nativos + L2)",
      speakers2050: "1.600 millones estimados",
      curiosity: "Dialecto rótico general (pronuncia claramente la /r/ postvocálica) y neutralización de /t/ intervocálica como flap [ɾ]."
    },
    characterVoices: {
      hugo: { modelId: "en-US-ChristopherNeural", gender: "Masculino", region: "EE.UU.", type: "Neural2", label: "Christopher (US)" },
      clara: { modelId: "en-US-JennyNeural", gender: "Femenina", region: "EE.UU.", type: "Neural2", label: "Jenny (US)" },
      don_ramon: { modelId: "en-US-RogerNeural", gender: "Masculino", region: "EE.UU.", type: "WaveNet", label: "Roger (US Maduro)" },
      mateo: { modelId: "en-US-GuyNeural", gender: "Masculino", region: "EE.UU.", type: "Neural2", label: "Guy (US Joven)" },
      bea: { modelId: "en-US-AvaNeural", gender: "Femenina", region: "EE.UU.", type: "Neural2", label: "Ava (US Alegre)" }
    }
  },
  "en-US-south": {
    code: "en-US-south",
    name: "Inglés (Sur de EE. UU.)",
    nativeName: "Southern American English",
    flag: "🤠",
    family: "Germánica",
    region: "Sur de Estados Unidos (Texas, Georgia, Tennessee, Alabama)",
    scriptType: "latin",
    hasVoiceModel: true,
    demographics: {
      dialectSpeakers: "80 millones de hablantes",
      whereConcentrated: "Deep South, Texas, Appalachia",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "95 millones",
      curiosity: "Célebre por el 'Southern drawl' (vocal glide), el pronombre inclusivo 'y'all' y la fusión pin-pen."
    },
    characterVoices: {
      hugo: { modelId: "en-US-ChristopherNeural", gender: "Masculino", region: "Sur de EE.UU.", type: "Neural2", label: "Christopher (Southern)" },
      clara: { modelId: "en-US-JennyNeural", gender: "Femenina", region: "Sur de EE.UU.", type: "Neural2", label: "Jenny (Southern)" },
      don_ramon: { modelId: "en-US-RogerNeural", gender: "Masculino", region: "Sur de EE.UU.", type: "WaveNet", label: "Roger (Southern Maduro)" },
      mateo: { modelId: "en-US-GuyNeural", gender: "Masculino", region: "Sur de EE.UU.", type: "Neural2", label: "Guy (Southern Joven)" },
      bea: { modelId: "en-US-AvaNeural", gender: "Femenina", region: "Sur de EE.UU.", type: "Neural2", label: "Ava (Southern Alegre)" }
    }
  },
  "en-GB": {
    code: "en-GB",
    name: "Inglés (Reino Unido)",
    nativeName: "British English (RP / Modern)",
    flag: "🇬🇧",
    family: "Germánica",
    region: "Gran Bretaña e Irlanda del Norte",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "67 millones",
      whereConcentrated: "Inglaterra, Gales, Escocia e Irlanda del Norte",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "75 millones",
      curiosity: "No-rótico en la norma estándar (la 'r' tras vocal no se articula a menos que le siga otra vocal: 'car' /kɑː/). Pronunciación Received Pronunciation y dialectos urbanos."
    },
    characterVoices: {
      hugo: { modelId: "en-GB-RyanNeural", gender: "Masculino", region: "Reino Unido", type: "Neural2", label: "Ryan (UK)" },
      clara: { modelId: "en-GB-SoniaNeural", gender: "Femenina", region: "Reino Unido", type: "Neural2", label: "Sonia (UK)" },
      don_ramon: { modelId: "en-GB-ThomasNeural", gender: "Masculino", region: "Reino Unido", type: "WaveNet", label: "Thomas (UK Maduro)" },
      mateo: { modelId: "en-GB-RyanNeural", gender: "Masculino", region: "Reino Unido", type: "Neural2", label: "Ryan (UK Joven)" },
      bea: { modelId: "en-GB-LibbyNeural", gender: "Femenina", region: "Reino Unido", type: "Neural2", label: "Libby (UK)" }
    }
  },
  "en-IE": {
    code: "en-IE",
    name: "Inglés (Irlanda)",
    nativeName: "Hiberno-English",
    flag: "🇮🇪",
    family: "Germánica",
    region: "Irlanda",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "5 millones",
      whereConcentrated: "Dublín, Cork, Galway y condados irlandeses",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "6.5 millones",
      curiosity: "Influenciado profundamente por la sintaxis gaélica irlandesa (Gaeilge), con fuerte entonación musical y fonología rótica."
    },
    characterVoices: {
      hugo: { modelId: "en-IE-ConnorNeural", gender: "Masculino", region: "Irlanda", type: "Neural2", label: "Connor (Irlandés)" },
      clara: { modelId: "en-IE-EmilyNeural", gender: "Femenina", region: "Irlanda", type: "Neural2", label: "Emily (Irlandesa)" },
      don_ramon: { modelId: "en-IE-ConnorNeural", gender: "Masculino", region: "Irlanda", type: "WaveNet", label: "Connor (Maduro)" },
      mateo: { modelId: "en-IE-ConnorNeural", gender: "Masculino", region: "Irlanda", type: "Neural2", label: "Connor (Joven)" },
      bea: { modelId: "en-IE-EmilyNeural", gender: "Femenina", region: "Irlanda", type: "Neural2", label: "Emily (Alegre)" }
    }
  },
  "en-GB-SCT": {
    code: "en-GB-SCT",
    name: "Inglés (Escocia)",
    nativeName: "Scottish English",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    family: "Germánica",
    region: "Escocia",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "5.4 millones",
      whereConcentrated: "Edimburgo, Glasgow, Highlands y Lowlands",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "6 millones",
      curiosity: "Rótico con vibrante alveolar pura [ɾ] o [r], vocales monoptongadas y fonema velar fricativo [x] (como en 'loch')."
    },
    characterVoices: {
      hugo: { modelId: "en-GB-RyanNeural", gender: "Masculino", region: "Escocia", type: "Neural2", label: "Ryan (Escocés)" },
      clara: { modelId: "en-GB-SoniaNeural", gender: "Femenina", region: "Escocia", type: "Neural2", label: "Sonia (Escocesa)" },
      don_ramon: { modelId: "en-GB-ThomasNeural", gender: "Masculino", region: "Escocia", type: "WaveNet", label: "Thomas (Maduro)" },
      mateo: { modelId: "en-GB-RyanNeural", gender: "Masculino", region: "Escocia", type: "Neural2", label: "Ryan (Joven)" },
      bea: { modelId: "en-GB-LibbyNeural", gender: "Femenina", region: "Escocia", type: "Neural2", label: "Libby (Alegre)" }
    }
  },
  "en-AU": {
    code: "en-AU",
    name: "Inglés (Australia)",
    nativeName: "Australian English",
    flag: "🇦🇺",
    family: "Germánica",
    region: "Australia",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "26 millones",
      whereConcentrated: "Sydney, Melbourne, Brisbane, Perth",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "33 millones",
      curiosity: "No rótico, con pronunciadas vocales amplias, entonación ascendente al final de afirmaciones (HRT) y sufijos abreviados ('arvo', 'brekkie')."
    },
    characterVoices: {
      hugo: { modelId: "en-AU-WilliamMultilingualNeural", gender: "Masculino", region: "Australia", type: "Neural2", label: "William (Australiano)" },
      clara: { modelId: "en-AU-NatashaNeural", gender: "Femenina", region: "Australia", type: "Neural2", label: "Natasha (Australiana)" },
      don_ramon: { modelId: "en-AU-WilliamMultilingualNeural", gender: "Masculino", region: "Australia", type: "WaveNet", label: "William (Maduro)" },
      mateo: { modelId: "en-AU-WilliamMultilingualNeural", gender: "Masculino", region: "Australia", type: "Neural2", label: "William (Joven)" },
      bea: { modelId: "en-AU-NatashaNeural", gender: "Femenina", region: "Australia", type: "Neural2", label: "Natasha (Alegre)" }
    }
  },
  "en-NZ": {
    code: "en-NZ",
    name: "Inglés (Nueva Zelanda)",
    nativeName: "New Zealand English",
    flag: "🇳🇿",
    family: "Germánica",
    region: "Nueva Zelanda",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "5.1 millones",
      whereConcentrated: "Auckland, Wellington, Christchurch",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "6.2 millones",
      curiosity: "Desplazamiento vocálico de la /ɪ/ corta hacia /ə/ (famoso 'fish and chips' que suena como 'fush and chups') e integración con términos maoríes."
    },
    characterVoices: {
      hugo: { modelId: "en-NZ-MitchellNeural", gender: "Masculino", region: "Nueva Zelanda", type: "Neural2", label: "Mitchell (Kiwi)" },
      clara: { modelId: "en-NZ-MollyNeural", gender: "Femenina", region: "Nueva Zelanda", type: "Neural2", label: "Molly (Kiwi)" },
      don_ramon: { modelId: "en-NZ-MitchellNeural", gender: "Masculino", region: "Nueva Zelanda", type: "WaveNet", label: "Mitchell (Maduro)" },
      mateo: { modelId: "en-NZ-MitchellNeural", gender: "Masculino", region: "Nueva Zelanda", type: "Neural2", label: "Mitchell (Joven)" },
      bea: { modelId: "en-NZ-MollyNeural", gender: "Femenina", region: "Nueva Zelanda", type: "Neural2", label: "Molly (Alegre)" }
    }
  },
  "en-ZA": {
    code: "en-ZA",
    name: "Inglés (Sudáfrica)",
    nativeName: "South African English",
    flag: "🇿🇦",
    family: "Germánica",
    region: "Sudáfrica",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "17 millones (nativos y L2)",
      whereConcentrated: "Johannesburgo, Ciudad del Cabo, Durban, Pretoria",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "25 millones",
      curiosity: "Enriquecido con préstamos del afrikáans, zulú y xhosa ('braai', 'lekker', 'howzit'), con una pronunciación nítida y consonantes no aspiradas."
    },
    characterVoices: {
      hugo: { modelId: "en-ZA-LukeNeural", gender: "Masculino", region: "Sudáfrica", type: "Neural2", label: "Luke (Sudafricano)" },
      clara: { modelId: "en-ZA-LeahNeural", gender: "Femenina", region: "Sudáfrica", type: "Neural2", label: "Leah (Sudafricana)" },
      don_ramon: { modelId: "en-ZA-LukeNeural", gender: "Masculino", region: "Sudáfrica", type: "WaveNet", label: "Luke (Maduro)" },
      mateo: { modelId: "en-ZA-LukeNeural", gender: "Masculino", region: "Sudáfrica", type: "Neural2", label: "Luke (Joven)" },
      bea: { modelId: "en-ZA-LeahNeural", gender: "Femenina", region: "Sudáfrica", type: "Neural2", label: "Leah (Alegre)" }
    }
  },
  "en-NG": {
    code: "en-NG",
    name: "Inglés (Nigeria)",
    nativeName: "Nigerian English",
    flag: "🇳🇬",
    family: "Germánica",
    region: "Nigeria (África Occidental)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "120 millones (L2 y pidgin)",
      whereConcentrated: "Lagos, Abuya, Kano, Ibadan",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "220 millones (Nigeria será el 3er país más poblado del mundo)",
      curiosity: "Uso rítmico con entonación silábica (syllable-timed) influida por las lenguas yoruba, igbo y hausa, con gran expresividad tonal."
    },
    characterVoices: {
      hugo: { modelId: "en-NG-AbeoNeural", gender: "Masculino", region: "Nigeria", type: "Neural2", label: "Abeo (Nigeriano)" },
      clara: { modelId: "en-NG-EzinneNeural", gender: "Femenina", region: "Nigeria", type: "Neural2", label: "Ezinne (Nigeriana)" },
      don_ramon: { modelId: "en-NG-AbeoNeural", gender: "Masculino", region: "Nigeria", type: "WaveNet", label: "Abeo (Maduro)" },
      mateo: { modelId: "en-NG-AbeoNeural", gender: "Masculino", region: "Nigeria", type: "Neural2", label: "Abeo (Joven)" },
      bea: { modelId: "en-NG-EzinneNeural", gender: "Femenina", region: "Nigeria", type: "Neural2", label: "Ezinne (Alegre)" }
    }
  },
  "en-IN": {
    code: "en-IN",
    name: "Inglés (India)",
    nativeName: "Indian English",
    flag: "🇮🇳",
    family: "Germánica",
    region: "India (Asia Meridional)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "135 millones de hablantes L2",
      whereConcentrated: "Delhi, Bombay, Bangalore, Chennai, Calcuta",
      totalLanguageSpeakers: "1.450 millones",
      speakers2050: "250 millones",
      curiosity: "Consonantes oclusivas retroflejas ([ʈ], [ɖ] en lugar de alveolares), entonación melódica y vocabulario característico del subcontinente."
    },
    characterVoices: {
      hugo: { modelId: "en-IN-PrabhatNeural", gender: "Masculino", region: "India", type: "Neural2", label: "Prabhat (Indio)" },
      clara: { modelId: "en-IN-NeerjaNeural", gender: "Femenina", region: "India", type: "Neural2", label: "Neerja (India)" },
      don_ramon: { modelId: "en-IN-PrabhatNeural", gender: "Masculino", region: "India", type: "WaveNet", label: "Prabhat (Maduro)" },
      mateo: { modelId: "en-IN-PrabhatNeural", gender: "Masculino", region: "India", type: "Neural2", label: "Prabhat (Joven)" },
      bea: { modelId: "en-IN-NeerjaNeural", gender: "Femenina", region: "India", type: "Neural2", label: "Neerja (Alegre)" }
    }
  },

  // ==========================================
  // FRANCÉS Y SUS VARIANTES
  // ==========================================
  "fr-FR": {
    code: "fr-FR",
    name: "Français (France)",
    nativeName: "Français métropolitain",
    flag: "🇫🇷",
    family: "Romance",
    region: "France (Europe)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "68 millions",
      whereConcentrated: "France, Belgique, Suisse",
      totalLanguageSpeakers: "321 millions dans le monde",
      speakers2050: "750 millions (forte croissance en Afrique francophone)",
      curiosity: "Langue internationale de la diplomatie et de la gastronomie, avec ses voyelles nasales (/ɑ̃/, /ɛ̃/, /ɔ̃/) et la liaison phonétique."
    },
    characterVoices: {
      hugo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "France", type: "Neural2", label: "Henri (France)" },
      clara: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "France", type: "Neural2", label: "Denise (France)" },
      don_ramon: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "France", type: "WaveNet", label: "Henri (Âgé)" },
      mateo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "France", type: "Neural2", label: "Henri (Jeune)" },
      bea: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "France", type: "Neural2", label: "Denise (Joyeuse)" }
    }
  },
  "fr-CA": {
    code: "fr-CA",
    name: "Français (Canada / Québec)",
    nativeName: "Français québécois",
    flag: "🇨🇦",
    family: "Romance",
    region: "Canada (Québec, Ontario, Nouveau-Brunswick)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "8.5 millions",
      whereConcentrated: "Montréal, Ville de Québec, Saguenay",
      totalLanguageSpeakers: "321 millions",
      speakers2050: "12 millions",
      curiosity: "Conserve des voyelles archaïques du Grand Siècle français, diphtongue les voyelles longues et affrique les consonnes t/d devant i/u."
    },
    characterVoices: {
      hugo: { modelId: "fr-CA-AntoineNeural", gender: "Masculino", region: "Canada", type: "Neural2", label: "Antoine (Québec)" },
      clara: { modelId: "fr-CA-SylvieNeural", gender: "Femenina", region: "Canada", type: "Neural2", label: "Sylvie (Québec)" },
      don_ramon: { modelId: "fr-CA-AntoineNeural", gender: "Masculino", region: "Canada", type: "WaveNet", label: "Antoine (Maduro)" },
      mateo: { modelId: "fr-CA-AntoineNeural", gender: "Masculino", region: "Canada", type: "Neural2", label: "Antoine (Jeune)" },
      bea: { modelId: "fr-CA-SylvieNeural", gender: "Femenina", region: "Canada", type: "Neural2", label: "Sylvie (Alegre)" }
    }
  },
  "fr-BE": {
    code: "fr-BE",
    name: "Français (Belgique)",
    nativeName: "Français de Belgique",
    flag: "🇧🇪",
    family: "Romance",
    region: "Belgique (Wallonie, Bruxelles)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "4.5 millions",
      whereConcentrated: "Bruxelles, Liège, Namur, Charleroi, Mons",
      totalLanguageSpeakers: "321 millions",
      speakers2050: "5 millions",
      curiosity: "Utilise septante (70) et nonante (90), des tournures comme 's'il vous plaît' pour tendre un objet, et de savoureux belgicismes."
    },
    characterVoices: {
      hugo: { modelId: "fr-BE-GerardNeural", gender: "Masculino", region: "Belgique", type: "Neural2", label: "Gerard (Belgique)" },
      clara: { modelId: "fr-BE-CharlineNeural", gender: "Femenina", region: "Belgique", type: "Neural2", label: "Charline (Belgique)" },
      don_ramon: { modelId: "fr-BE-GerardNeural", gender: "Masculino", region: "Belgique", type: "WaveNet", label: "Gerard (Maduro)" },
      mateo: { modelId: "fr-BE-GerardNeural", gender: "Masculino", region: "Belgique", type: "Neural2", label: "Gerard (Jeune)" },
      bea: { modelId: "fr-BE-CharlineNeural", gender: "Femenina", region: "Belgique", type: "Neural2", label: "Charline (Alegre)" }
    }
  },
  "fr-CH": {
    code: "fr-CH",
    name: "Français (Suisse)",
    nativeName: "Français de Suisse (Romand)",
    flag: "🇨🇭",
    family: "Romance",
    region: "Suisse romande",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "2 millions",
      whereConcentrated: "Genève, Lausanne, Neuchâtel, Fribourg, Sion",
      totalLanguageSpeakers: "321 millions",
      speakers2050: "2.6 millions",
      curiosity: "Célèbre pour septante (70), huitante (80) et nonante (90), son intonation chantante et ses helvétismes distinctifs."
    },
    characterVoices: {
      hugo: { modelId: "fr-CH-FabriceNeural", gender: "Masculino", region: "Suisse", type: "Neural2", label: "Fabrice (Suisse)" },
      clara: { modelId: "fr-CH-ArianeNeural", gender: "Femenina", region: "Suisse", type: "Neural2", label: "Ariane (Suisse)" },
      don_ramon: { modelId: "fr-CH-FabriceNeural", gender: "Masculino", region: "Suisse", type: "WaveNet", label: "Fabrice (Maduro)" },
      mateo: { modelId: "fr-CH-FabriceNeural", gender: "Masculino", region: "Suisse", type: "Neural2", label: "Fabrice (Jeune)" },
      bea: { modelId: "fr-CH-ArianeNeural", gender: "Femenina", region: "Suisse", type: "Neural2", label: "Ariane (Alegre)" }
    }
  },
  "fr-CI": {
    code: "fr-CI",
    name: "Français (Costa de Marfil)",
    nativeName: "Français ivoirien",
    flag: "🇨🇮",
    family: "Romance",
    region: "Côte d'Ivoire (Afrique de l'Ouest)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "18 millions de locuteurs",
      whereConcentrated: "Abidjan, Yamoussoukro, Bouaké",
      totalLanguageSpeakers: "321 millions",
      speakers2050: "38 millions",
      curiosity: "Berceau du Nouchi (argot ivoirien très créatif) et plus grande métropole francophone d'Afrique de l'Ouest."
    },
    characterVoices: {
      hugo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "Côte d'Ivoire", type: "Neural2", label: "Henri (Abidjan)" },
      clara: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "Côte d'Ivoire", type: "Neural2", label: "Denise (Abidjan)" },
      don_ramon: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "Côte d'Ivoire", type: "WaveNet", label: "Henri (Maduro)" },
      mateo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "Côte d'Ivoire", type: "Neural2", label: "Henri (Jeune)" },
      bea: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "Côte d'Ivoire", type: "Neural2", label: "Denise (Alegre)" }
    }
  },
  "fr-CD": {
    code: "fr-CD",
    name: "Français (RD del Congo)",
    nativeName: "Français congolais (Kinshasa)",
    flag: "🇨🇩",
    family: "Romance",
    region: "République Démocratique du Congo",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "52 millions de locuteurs",
      whereConcentrated: "Kinshasa (la plus grande ville francophone du monde devant Paris)",
      totalLanguageSpeakers: "321 millions",
      speakers2050: "140 millions",
      curiosity: "Kinshasa est aujourd'hui la capitale mondiale de la francophonie, avec une symbiose linguistique dynamique avec le lingala."
    },
    characterVoices: {
      hugo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "RD Congo", type: "Neural2", label: "Henri (Kinshasa)" },
      clara: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "RD Congo", type: "Neural2", label: "Denise (Kinshasa)" },
      don_ramon: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "RD Congo", type: "WaveNet", label: "Henri (Maduro)" },
      mateo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "RD Congo", type: "Neural2", label: "Henri (Jeune)" },
      bea: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "RD Congo", type: "Neural2", label: "Denise (Alegre)" }
    }
  },
  "fr-GA": {
    code: "fr-GA",
    name: "Français (Gabón)",
    nativeName: "Français gabonais",
    flag: "🇬🇦",
    family: "Romance",
    region: "Gabon (Afrique Centrale)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "2.1 millions (plus de 85% de la population parle français)",
      whereConcentrated: "Libreville, Port-Gentil, Franceville",
      totalLanguageSpeakers: "321 millions",
      speakers2050: "4 millions",
      curiosity: "Le Gabon est l'un des pays d'Afrique où le français est la langue maternelle de la majorité des jeunes urbains de Libreville."
    },
    characterVoices: {
      hugo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "Gabon", type: "Neural2", label: "Henri (Libreville)" },
      clara: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "Gabon", type: "Neural2", label: "Denise (Libreville)" },
      don_ramon: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "Gabon", type: "WaveNet", label: "Henri (Maduro)" },
      mateo: { modelId: "fr-FR-HenriNeural", gender: "Masculino", region: "Gabon", type: "Neural2", label: "Henri (Jeune)" },
      bea: { modelId: "fr-FR-DeniseNeural", gender: "Femenina", region: "Gabon", type: "Neural2", label: "Denise (Alegre)" }
    }
  },

  // ==========================================
  // PORTUGUÉS Y SUS VARIANTES
  // ==========================================
  "pt-BR": {
    code: "pt-BR",
    name: "Português (Brasil)",
    nativeName: "Português brasileiro",
    flag: "🇧🇷",
    family: "Romance",
    region: "Brasil (América do Sul)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "215 milhões",
      whereConcentrated: "São Paulo, Rio de Janeiro, Salvador, Brasília",
      totalLanguageSpeakers: "270 milhões",
      speakers2050: "245 milhões",
      curiosity: "Vogais abertas e ritmo silábico cantado, palatalização de /t/ e /d/ diante de /i/ ('cidade' soa como [siˈdadʒi])."
    },
    characterVoices: {
      hugo: { modelId: "pt-BR-AntonioNeural", gender: "Masculino", region: "Brasil", type: "Neural2", label: "Antônio (Brasileiro)" },
      clara: { modelId: "pt-BR-FranciscaNeural", gender: "Femenina", region: "Brasil", type: "Neural2", label: "Francisca (Brasileira)" },
      don_ramon: { modelId: "pt-BR-AntonioNeural", gender: "Masculino", region: "Brasil", type: "WaveNet", label: "Antônio (Maduro)" },
      mateo: { modelId: "pt-BR-AntonioNeural", gender: "Masculino", region: "Brasil", type: "Neural2", label: "Antônio (Jovem)" },
      bea: { modelId: "pt-BR-FranciscaNeural", gender: "Femenina", region: "Brasil", type: "Neural2", label: "Francisca (Alegre)" }
    }
  },
  "pt-PT": {
    code: "pt-PT",
    name: "Português (Portugal)",
    nativeName: "Português europeu",
    flag: "🇵🇹",
    family: "Romance",
    region: "Portugal (Europa)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "10.5 milhões",
      whereConcentrated: "Lisboa, Porto, Coimbra, ilhas dos Açores e Madeira",
      totalLanguageSpeakers: "270 milhões",
      speakers2050: "11 milhões",
      curiosity: "Redução acentuada de vogais átonas que lhe confere um ritmo compassado e sonoridade quase eslava para quem o ouve de fora."
    },
    characterVoices: {
      hugo: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Portugal", type: "Neural2", label: "Duarte (Europeu)" },
      clara: { modelId: "pt-PT-RaquelNeural", gender: "Femenina", region: "Portugal", type: "Neural2", label: "Raquel (Europeia)" },
      don_ramon: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Portugal", type: "WaveNet", label: "Duarte (Maduro)" },
      mateo: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Portugal", type: "Neural2", label: "Duarte (Jovem)" },
      bea: { modelId: "pt-PT-RaquelNeural", gender: "Femenina", region: "Portugal", type: "Neural2", label: "Raquel (Alegre)" }
    }
  },
  "pt-AO": {
    code: "pt-AO",
    name: "Português (Angola)",
    nativeName: "Português angolano",
    flag: "🇦🇴",
    family: "Romance",
    region: "Angola (África Austral)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "25 milhões de falantes",
      whereConcentrated: "Luanda, Huambo, Benguela, Lubango",
      totalLanguageSpeakers: "270 milhões",
      speakers2050: "60 milhões (explosão demográfica africana)",
      curiosity: "Língua franca unificadora da nação, influenciada pelas línguas bantas como o kimbundu e umbundu (origem de palavras como 'cota' e 'bue')."
    },
    characterVoices: {
      hugo: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Angola", type: "Neural2", label: "Duarte (Luanda)" },
      clara: { modelId: "pt-PT-RaquelNeural", gender: "Femenina", region: "Angola", type: "Neural2", label: "Raquel (Luanda)" },
      don_ramon: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Angola", type: "WaveNet", label: "Duarte (Maduro)" },
      mateo: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Angola", type: "Neural2", label: "Duarte (Jovem)" },
      bea: { modelId: "pt-PT-RaquelNeural", gender: "Femenina", region: "Angola", type: "Neural2", label: "Raquel (Alegre)" }
    }
  },
  "pt-MZ": {
    code: "pt-MZ",
    name: "Português (Moçambique)",
    nativeName: "Português moçambicano",
    flag: "🇲🇿",
    family: "Romance",
    region: "Moçambique (África Oriental)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "16 milhões de falantes",
      whereConcentrated: "Maputo, Beira, Nampula, Quelimane",
      totalLanguageSpeakers: "270 milhões",
      speakers2050: "50 milhões",
      curiosity: "Enriquecido pela prosa poética de Mia Couto e as línguas changana e makhuwa; ritmo suave com vogais bem abertas."
    },
    characterVoices: {
      hugo: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Moçambique", type: "Neural2", label: "Duarte (Maputo)" },
      clara: { modelId: "pt-PT-RaquelNeural", gender: "Femenina", region: "Moçambique", type: "Neural2", label: "Raquel (Maputo)" },
      don_ramon: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Moçambique", type: "WaveNet", label: "Duarte (Maduro)" },
      mateo: { modelId: "pt-PT-DuarteNeural", gender: "Masculino", region: "Moçambique", type: "Neural2", label: "Duarte (Joven)" },
      bea: { modelId: "pt-PT-RaquelNeural", gender: "Femenina", region: "Moçambique", type: "Neural2", label: "Raquel (Alegre)" }
    }
  },

  // ==========================================
  // HOLANDÉS Y SUS VARIANTES
  // ==========================================
  "nl-NL": {
    code: "nl-NL",
    name: "Holandés (Países Bajos)",
    nativeName: "Nederlands (Noord)",
    flag: "🇳🇱",
    family: "Germánica",
    region: "Países Bajos (Europa)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "18 millones",
      whereConcentrated: "Ámsterdam, Róterdam, Utrecht, La Haya",
      totalLanguageSpeakers: "25 millones",
      speakers2050: "22 millones",
      curiosity: "Famoso por su sonido gutural [x]/[ɣ] ('harde g') y construcciones compuestas precisas."
    },
    characterVoices: {
      hugo: { modelId: "nl-NL-MaartenNeural", gender: "Masculino", region: "Países Bajos", type: "Neural2", label: "Maarten (Nederland)" },
      clara: { modelId: "nl-NL-FennaNeural", gender: "Femenina", region: "Países Bajos", type: "Neural2", label: "Fenna (Nederland)" },
      don_ramon: { modelId: "nl-NL-MaartenNeural", gender: "Masculino", region: "Países Bajos", type: "WaveNet", label: "Maarten (Maduro)" },
      mateo: { modelId: "nl-NL-MaartenNeural", gender: "Masculino", region: "Países Bajos", type: "Neural2", label: "Maarten (Joven)" },
      bea: { modelId: "nl-NL-FennaNeural", gender: "Femenina", region: "Países Bajos", type: "Neural2", label: "Fenna (Alegre)" }
    }
  },
  "nl-BE": {
    code: "nl-BE",
    name: "Holandés (Bélgica / Flamenco)",
    nativeName: "Vlaams (België)",
    flag: "🇧🇪",
    family: "Germánica",
    region: "Flandes (Bélgica)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "6.7 millones",
      whereConcentrated: "Amberes, Gante, Brujas, Lovaina y Bruselas",
      totalLanguageSpeakers: "25 millones",
      speakers2050: "7.5 millones",
      curiosity: "Usa la 'zachte g' (g suave y palatal), giros de cortesía más franceses ('alstublieft') y vocabulario flamenco único."
    },
    characterVoices: {
      hugo: { modelId: "nl-BE-ArnaudNeural", gender: "Masculino", region: "Bélgica", type: "Neural2", label: "Arnaud (Flamenco)" },
      clara: { modelId: "nl-BE-DenaNeural", gender: "Femenina", region: "Bélgica", type: "Neural2", label: "Dena (Flamenca)" },
      don_ramon: { modelId: "nl-BE-ArnaudNeural", gender: "Masculino", region: "Bélgica", type: "WaveNet", label: "Arnaud (Maduro)" },
      mateo: { modelId: "nl-BE-ArnaudNeural", gender: "Masculino", region: "Bélgica", type: "Neural2", label: "Arnaud (Joven)" },
      bea: { modelId: "nl-BE-DenaNeural", gender: "Femenina", region: "Bélgica", type: "Neural2", label: "Dena (Alegre)" }
    }
  },

  // ==========================================
  // ÁRABE Y SUS VARIANTES
  // ==========================================
  "ar-SA": {
    code: "ar-SA",
    name: "Árabe (Arabia Saudí / Estándar)",
    nativeName: "العربية الفصحى (السعودية)",
    flag: "🇸🇦",
    family: "Semítica",
    region: "Península Arábiga",
    scriptType: "arabic",
    demographics: {
      dialectSpeakers: "36 millones",
      whereConcentrated: "Riad, Yeda, La Meca, Medina",
      totalLanguageSpeakers: "450 millones en el mundo árabe",
      speakers2050: "600 millones",
      curiosity: "Base del Árabe Estándar Moderno (Fus'ha) utilizado en medios, literatura formal y la liturgia islámica."
    },
    characterVoices: {
      hugo: { modelId: "ar-SA-HamedNeural", gender: "Masculino", region: "Arabia Saudí", type: "Neural2", label: "Hamed (Riad)" },
      clara: { modelId: "ar-SA-ZariyahNeural", gender: "Femenina", region: "Arabia Saudí", type: "Neural2", label: "Zariyah (Riad)" },
      don_ramon: { modelId: "ar-SA-HamedNeural", gender: "Masculino", region: "Arabia Saudí", type: "WaveNet", label: "Hamed (Maduro)" },
      mateo: { modelId: "ar-SA-HamedNeural", gender: "Masculino", region: "Arabia Saudí", type: "Neural2", label: "Hamed (Joven)" },
      bea: { modelId: "ar-SA-ZariyahNeural", gender: "Femenina", region: "Arabia Saudí", type: "Neural2", label: "Zariyah (Alegre)" }
    }
  },
  "ar-EG": {
    code: "ar-EG",
    name: "Árabe (Egipto)",
    nativeName: "العامية المصرية",
    flag: "🇪🇬",
    family: "Semítica",
    region: "Egipto (Norte de África)",
    scriptType: "arabic",
    demographics: {
      dialectSpeakers: "105 millones",
      whereConcentrated: "El Cairo, Alejandría, delta del Nilo",
      totalLanguageSpeakers: "450 millones",
      speakers2050: "160 millones (Egipto será el país más poblado del mundo árabe)",
      curiosity: "El dialecto más comprendido de todo el mundo árabe gracias a su legendaria industria cinematográfica y musical; pronuncia la 'jim' como 'g' dura (/g/)."
    },
    characterVoices: {
      hugo: { modelId: "ar-EG-ShakirNeural", gender: "Masculino", region: "Egipto", type: "Neural2", label: "Shakir (El Cairo)" },
      clara: { modelId: "ar-EG-SalmaNeural", gender: "Femenina", region: "Egipto", type: "Neural2", label: "Salma (El Cairo)" },
      don_ramon: { modelId: "ar-EG-ShakirNeural", gender: "Masculino", region: "Egipto", type: "WaveNet", label: "Shakir (Maduro)" },
      mateo: { modelId: "ar-EG-ShakirNeural", gender: "Masculino", region: "Egipto", type: "Neural2", label: "Shakir (Joven)" },
      bea: { modelId: "ar-EG-SalmaNeural", gender: "Femenina", region: "Egipto", type: "Neural2", label: "Salma (Alegre)" }
    }
  },
  "ar-MA": {
    code: "ar-MA",
    name: "Árabe (Marruecos / Dariya)",
    nativeName: "الدارجة المغربية",
    flag: "🇲🇦",
    family: "Semítica",
    region: "Marruecos (Magreb)",
    scriptType: "arabic",
    demographics: {
      dialectSpeakers: "37 millones",
      whereConcentrated: "Casablanca, Rabat, Marrakech, Tánger",
      totalLanguageSpeakers: "450 millones",
      speakers2050: "45 millones",
      curiosity: "Fascinante substrato amazigh (bereber) con préstamos franceses y españoles, eliminación drástica de vocales cortas."
    },
    characterVoices: {
      hugo: { modelId: "ar-MA-JamalNeural", gender: "Masculino", region: "Marruecos", type: "Neural2", label: "Jamal (Dariya)" },
      clara: { modelId: "ar-MA-MounaNeural", gender: "Femenina", region: "Marruecos", type: "Neural2", label: "Mouna (Dariya)" },
      don_ramon: { modelId: "ar-MA-JamalNeural", gender: "Masculino", region: "Marruecos", type: "WaveNet", label: "Jamal (Maduro)" },
      mateo: { modelId: "ar-MA-JamalNeural", gender: "Masculino", region: "Marruecos", type: "Neural2", label: "Jamal (Joven)" },
      bea: { modelId: "ar-MA-MounaNeural", gender: "Femenina", region: "Marruecos", type: "Neural2", label: "Mouna (Alegre)" }
    }
  },
  "ar-JO": {
    code: "ar-JO",
    name: "Árabe (Jordania / Levantino)",
    nativeName: "اللهجة الأردنية",
    flag: "🇯🇴",
    family: "Semítica",
    region: "Jordania y Levante",
    scriptType: "arabic",
    demographics: {
      dialectSpeakers: "11 millones",
      whereConcentrated: "Amán, Zarqa, Irbid",
      totalLanguageSpeakers: "450 millones",
      speakers2050: "15 millones",
      curiosity: "Pertenece al continuo levantino, caracterizado por su entonación suave y la preservación de la 'qaf' en zonas beduinas."
    },
    characterVoices: {
      hugo: { modelId: "ar-JO-TaimNeural", gender: "Masculino", region: "Jordania", type: "Neural2", label: "Taim (Amán)" },
      clara: { modelId: "ar-JO-SanaNeural", gender: "Femenina", region: "Jordania", type: "Neural2", label: "Sana (Amán)" },
      don_ramon: { modelId: "ar-JO-TaimNeural", gender: "Masculino", region: "Jordania", type: "WaveNet", label: "Taim (Maduro)" },
      mateo: { modelId: "ar-JO-TaimNeural", gender: "Masculino", region: "Jordania", type: "Neural2", label: "Taim (Joven)" },
      bea: { modelId: "ar-JO-SanaNeural", gender: "Femenina", region: "Jordania", type: "Neural2", label: "Sana (Alegre)" }
    }
  },
  "ar-IQ": {
    code: "ar-IQ",
    name: "Árabe (Iraq / Mesopotámico)",
    nativeName: "اللهجة العراقية",
    flag: "🇮🇶",
    family: "Semítica",
    region: "Iraq (Mesopotamia)",
    scriptType: "arabic",
    demographics: {
      dialectSpeakers: "42 millones",
      whereConcentrated: "Bagdad, Basora, Mosul, Erbil",
      totalLanguageSpeakers: "450 millones",
      speakers2050: "65 millones",
      curiosity: "Conserva vestigios gramaticales y léxicos del antiguo acadio y arameo mesopotámico, pronunciando la 'k' como 'ch' (/tʃ/)."
    },
    characterVoices: {
      hugo: { modelId: "ar-IQ-BasselNeural", gender: "Masculino", region: "Iraq", type: "Neural2", label: "Bassel (Bagdad)" },
      clara: { modelId: "ar-IQ-RanaNeural", gender: "Femenina", region: "Iraq", type: "Neural2", label: "Rana (Bagdad)" },
      don_ramon: { modelId: "ar-IQ-BasselNeural", gender: "Masculino", region: "Iraq", type: "WaveNet", label: "Bassel (Maduro)" },
      mateo: { modelId: "ar-IQ-BasselNeural", gender: "Masculino", region: "Iraq", type: "Neural2", label: "Bassel (Joven)" },
      bea: { modelId: "ar-IQ-RanaNeural", gender: "Femenina", region: "Iraq", type: "Neural2", label: "Rana (Alegre)" }
    }
  },

  // ==========================================
  // CHINO Y SUS VARIANTES
  // ==========================================
  "cmn-CN": {
    code: "cmn-CN",
    name: "Chino (Mandarín continental)",
    nativeName: "普通话 (简体字)",
    flag: "🇨🇳",
    family: "Sino-Tibetana",
    region: "China continental",
    scriptType: "cjk",
    demographics: {
      dialectSpeakers: "940 millones de hablantes nativos",
      whereConcentrated: "Beijing, Shanghai, Guangzhou, Chengdu",
      totalLanguageSpeakers: "1.120 millones",
      speakers2050: "1.050 millones",
      curiosity: "Basado en el dialecto de Beijing, cuenta con 4 tonos principales + 1 neutro y sistema de caracteres simplificados."
    },
    characterVoices: {
      hugo: { modelId: "zh-CN-YunxiNeural", gender: "Masculino", region: "China", type: "Neural2", label: "Yunxi (Mandarín)" },
      clara: { modelId: "zh-CN-XiaoxiaoNeural", gender: "Femenina", region: "China", type: "Neural2", label: "Xiaoxiao (Mandarín)" },
      don_ramon: { modelId: "zh-CN-YunxiNeural", gender: "Masculino", region: "China", type: "WaveNet", label: "Yunxi (Maduro)" },
      mateo: { modelId: "zh-CN-YunxiNeural", gender: "Masculino", region: "China", type: "Neural2", label: "Yunxi (Joven)" },
      bea: { modelId: "zh-CN-XiaoxiaoNeural", gender: "Femenina", region: "China", type: "Neural2", label: "Xiaoxiao (Alegre)" }
    }
  },
  "zh-TW": {
    code: "zh-TW",
    name: "Chino (Taiwán / Guoyu)",
    nativeName: "國語 (繁體字)",
    flag: "🇹🇼",
    family: "Sino-Tibetana",
    region: "Taiwán",
    scriptType: "cjk",
    demographics: {
      dialectSpeakers: "24 millones",
      whereConcentrated: "Taipéi, Kaohsiung, Taichung",
      totalLanguageSpeakers: "1.120 millones",
      speakers2050: "22 millones",
      curiosity: "Preserva los caracteres tradicionales (繁體字), con entonación más suave sin la fuerte retroflexión de Beijing y uso del sistema bopomofo."
    },
    characterVoices: {
      hugo: { modelId: "zh-TW-YunJheNeural", gender: "Masculino", region: "Taiwán", type: "Neural2", label: "YunJhe (Taiwán)" },
      clara: { modelId: "zh-TW-HsiaoChenNeural", gender: "Femenina", region: "Taiwán", type: "Neural2", label: "HsiaoChen (Taiwán)" },
      don_ramon: { modelId: "zh-TW-YunJheNeural", gender: "Masculino", region: "Taiwán", type: "WaveNet", label: "YunJhe (Maduro)" },
      mateo: { modelId: "zh-TW-YunJheNeural", gender: "Masculino", region: "Taiwán", type: "Neural2", label: "YunJhe (Joven)" },
      bea: { modelId: "zh-TW-HsiaoChenNeural", gender: "Femenina", region: "Taiwán", type: "Neural2", label: "HsiaoChen (Alegre)" }
    }
  },
  "yue-HK": {
    code: "yue-HK",
    name: "Chino (Hong Kong / Cantonés)",
    nativeName: "廣東話 (香港)",
    flag: "🇭🇰",
    family: "Sino-Tibetana",
    region: "Hong Kong, Macao y Guangdong",
    scriptType: "cjk",
    demographics: {
      dialectSpeakers: "85 millones",
      whereConcentrated: "Hong Kong, Guangzhou, diásporas en San Francisco, Vancouver y Londres",
      totalLanguageSpeakers: "85 millones",
      speakers2050: "90 millones",
      curiosity: "Conserva hasta 9 tonos fonológicos y oclusivas finales (-p, -t, -k) del chino medieval que el mandarín perdió."
    },
    characterVoices: {
      hugo: { modelId: "zh-HK-WanLungNeural", gender: "Masculino", region: "Hong Kong", type: "Standard", label: "WanLung (Cantonés)" },
      clara: { modelId: "zh-HK-HiuMaanNeural", gender: "Femenina", region: "Hong Kong", type: "Standard", label: "HiuMaan (Cantonés)" },
      don_ramon: { modelId: "zh-HK-WanLungNeural", gender: "Masculino", region: "Hong Kong", type: "Standard", label: "WanLung (Maduro)" },
      mateo: { modelId: "zh-HK-WanLungNeural", gender: "Masculino", region: "Hong Kong", type: "Standard", label: "WanLung (Joven)" },
      bea: { modelId: "zh-HK-HiuMaanNeural", gender: "Femenina", region: "Hong Kong", type: "Standard", label: "HiuMaan (Alegre)" }
    }
  },

  // ==========================================
  // LENGUAS DE LA INDIA
  // ==========================================
  "hi-IN": {
    code: "hi-IN",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    family: "Indoeuropea (Indoaria)",
    region: "Norte y Centro de la India",
    scriptType: "devanagari",
    demographics: {
      dialectSpeakers: "602 millones (L1 y L2)",
      whereConcentrated: "Cinturón del Hindi (Uttar Pradesh, Bihar, Madhya Pradesh, Delhi)",
      totalLanguageSpeakers: "602 millones (3ª lengua más hablada del planeta)",
      speakers2050: "780 millones",
      curiosity: "Escrita en la milenaria escritura devanagari; inteligible de forma oral con el urdu en el registro coloquial (hindustaní)."
    },
    characterVoices: {
      hugo: { modelId: "hi-IN-MadhurNeural", gender: "Masculino", region: "India", type: "Neural2", label: "Madhur (Hindi)" },
      clara: { modelId: "hi-IN-SwaraNeural", gender: "Femenina", region: "India", type: "Neural2", label: "Swara (Hindi)" },
      don_ramon: { modelId: "hi-IN-MadhurNeural", gender: "Masculino", region: "India", type: "WaveNet", label: "Madhur (Maduro)" },
      mateo: { modelId: "hi-IN-MadhurNeural", gender: "Masculino", region: "India", type: "Neural2", label: "Madhur (Joven)" },
      bea: { modelId: "hi-IN-SwaraNeural", gender: "Femenina", region: "India", type: "Neural2", label: "Swara (Alegre)" }
    }
  },
  "ur-PK": {
    code: "ur-PK",
    name: "Urdu",
    nativeName: "اردو",
    flag: "🇵🇰",
    family: "Indoeuropea (Indoaria)",
    region: "Pakistán y Norte de la India",
    scriptType: "arabic",
    demographics: {
      dialectSpeakers: "230 millones",
      whereConcentrated: "Pakistán (Lahore, Karachi, Islamabad) e India",
      totalLanguageSpeakers: "230 millones",
      speakers2050: "340 millones",
      curiosity: "Lengua de exquisita tradición poética ghazal; escrita en caligrafía Nastaliq derivada del alfabeto persa-árabe."
    },
    characterVoices: {
      hugo: { modelId: "ur-PK-AsadNeural", gender: "Masculino", region: "Pakistán", type: "Neural2", label: "Asad (Urdu)" },
      clara: { modelId: "ur-PK-UzmaNeural", gender: "Femenina", region: "Pakistán", type: "Neural2", label: "Uzma (Urdu)" },
      don_ramon: { modelId: "ur-PK-AsadNeural", gender: "Masculino", region: "Pakistán", type: "WaveNet", label: "Asad (Maduro)" },
      mateo: { modelId: "ur-PK-AsadNeural", gender: "Masculino", region: "Pakistán", type: "Neural2", label: "Asad (Joven)" },
      bea: { modelId: "ur-PK-UzmaNeural", gender: "Femenina", region: "Pakistán", type: "Neural2", label: "Uzma (Alegre)" }
    }
  },
  "bn-IN": {
    code: "bn-IN",
    name: "Bengalí",
    nativeName: "বাংলা",
    flag: "🇧🇩",
    family: "Indoeuropea (Indoaria)",
    region: "Bengala Occidental (India) y Bangladés",
    scriptType: "bengali",
    demographics: {
      dialectSpeakers: "272 millones",
      whereConcentrated: "Bangladés y estado de Bengala Occidental (Kolkata)",
      totalLanguageSpeakers: "272 millones (6ª o 7ª lengua más hablada del mundo)",
      speakers2050: "320 millones",
      curiosity: "Lengua del premio Nobel Rabindranath Tagore; el Día Internacional de la Lengua Materna conmemora el Movimiento de la Lengua Bengalí de 1952."
    },
    characterVoices: {
      hugo: { modelId: "bn-IN-BashkarNeural", gender: "Masculino", region: "Bengala", type: "Neural2", label: "Bashkar (Bengalí)" },
      clara: { modelId: "bn-IN-TanishaaNeural", gender: "Femenina", region: "Bengala", type: "Neural2", label: "Tanishaa (Bengalí)" },
      don_ramon: { modelId: "bn-IN-BashkarNeural", gender: "Masculino", region: "Bengala", type: "WaveNet", label: "Bashkar (Maduro)" },
      mateo: { modelId: "bn-IN-BashkarNeural", gender: "Masculino", region: "Bengala", type: "Neural2", label: "Bashkar (Joven)" },
      bea: { modelId: "bn-IN-TanishaaNeural", gender: "Femenina", region: "Bengala", type: "Neural2", label: "Tanishaa (Alegre)" }
    }
  },
  "pa-IN": {
    code: "pa-IN",
    name: "Punyabí",
    nativeName: "ਪੰਜਾਬੀ",
    flag: "🇮🇳",
    family: "Indoeuropea (Indoaria)",
    region: "Punyab (India y Pakistán)",
    scriptType: "gurmukhi",
    demographics: {
      dialectSpeakers: "150 millones",
      whereConcentrated: "Punyab indio (escrito en Gurmukhi) y Punyab pakistaní (Shahmukhi)",
      totalLanguageSpeakers: "150 millones",
      speakers2050: "190 millones",
      curiosity: "Una de las pocas lenguas indoeuropeas modernas que desarrolló un sistema tonal distintivo."
    },
    characterVoices: {
      hugo: { modelId: "hi-IN-MadhurNeural", gender: "Masculino", region: "Punyab", type: "Neural2", label: "Madhur (Punyabí)" },
      clara: { modelId: "hi-IN-SwaraNeural", gender: "Femenina", region: "Punyab", type: "Neural2", label: "Swara (Punyabí)" },
      don_ramon: { modelId: "hi-IN-MadhurNeural", gender: "Masculino", region: "Punyab", type: "WaveNet", label: "Madhur (Maduro)" },
      mateo: { modelId: "hi-IN-MadhurNeural", gender: "Masculino", region: "Punyab", type: "Neural2", label: "Madhur (Joven)" },
      bea: { modelId: "hi-IN-SwaraNeural", gender: "Femenina", region: "Punyab", type: "Neural2", label: "Swara (Alegre)" }
    }
  },
  "gu-IN": {
    code: "gu-IN",
    name: "Guyaratí",
    nativeName: "ગુજરાતી",
    flag: "🇮🇳",
    family: "Indoeuropea (Indoaria)",
    region: "Guyarat (India)",
    scriptType: "gujarati",
    demographics: {
      dialectSpeakers: "62 millones",
      whereConcentrated: "Ahmedabad, Surat, diáspora en Reino Unido y EE.UU.",
      totalLanguageSpeakers: "62 millones",
      speakers2050: "75 millones",
      curiosity: "Lengua materna de Mahatma Gandhi y del primer ministro Narendra Modi; su alfabeto no tiene la barra horizontal superior del devanagari."
    },
    characterVoices: {
      hugo: { modelId: "gu-IN-NiranjanNeural", gender: "Masculino", region: "Guyarat", type: "Neural2", label: "Niranjan (Guyaratí)" },
      clara: { modelId: "gu-IN-DhwaniNeural", gender: "Femenina", region: "Guyarat", type: "Neural2", label: "Dhwani (Guyaratí)" },
      don_ramon: { modelId: "gu-IN-NiranjanNeural", gender: "Masculino", region: "Guyarat", type: "WaveNet", label: "Niranjan (Maduro)" },
      mateo: { modelId: "gu-IN-NiranjanNeural", gender: "Masculino", region: "Guyarat", type: "Neural2", label: "Niranjan (Joven)" },
      bea: { modelId: "gu-IN-DhwaniNeural", gender: "Femenina", region: "Guyarat", type: "Neural2", label: "Dhwani (Alegre)" }
    }
  },
  "mr-IN": {
    code: "mr-IN",
    name: "Maratí",
    nativeName: "मराठी",
    flag: "🇮🇳",
    family: "Indoeuropea (Indoaria)",
    region: "Maharashtra (India)",
    scriptType: "devanagari",
    demographics: {
      dialectSpeakers: "99 millones",
      whereConcentrated: "Bombay (Mumbai), Pune, Nagpur",
      totalLanguageSpeakers: "99 millones",
      speakers2050: "120 millones",
      curiosity: "Lengua oficial del estado de Maharashtra, con literatura milenaria y una de las poblaciones más dinámicas del sur de Asia."
    },
    characterVoices: {
      hugo: { modelId: "mr-IN-ManoharNeural", gender: "Masculino", region: "Maharashtra", type: "Neural2", label: "Manohar (Maratí)" },
      clara: { modelId: "mr-IN-AarohiNeural", gender: "Femenina", region: "Maharashtra", type: "Neural2", label: "Aarohi (Maratí)" },
      don_ramon: { modelId: "mr-IN-ManoharNeural", gender: "Masculino", region: "Maharashtra", type: "WaveNet", label: "Manohar (Maduro)" },
      mateo: { modelId: "mr-IN-ManoharNeural", gender: "Masculino", region: "Maharashtra", type: "Neural2", label: "Manohar (Joven)" },
      bea: { modelId: "mr-IN-AarohiNeural", gender: "Femenina", region: "Maharashtra", type: "Neural2", label: "Aarohi (Alegre)" }
    }
  },
  "ta-IN": {
    code: "ta-IN",
    name: "Tamil",
    nativeName: "தமிழ்",
    flag: "🇮🇳",
    family: "Dravídica",
    region: "Tamil Nadu (India), Sri Lanka, Singapur",
    scriptType: "tamil",
    demographics: {
      dialectSpeakers: "88 millones",
      whereConcentrated: "Chennai, Madurai, Jaffna (Sri Lanka), Singapur",
      totalLanguageSpeakers: "88 millones",
      speakers2050: "105 millones",
      curiosity: "Una de las lenguas clásicas más antiguas del mundo que aún se habla de forma ininterrumpida desde hace más de 2.000 años."
    },
    characterVoices: {
      hugo: { modelId: "ta-IN-ValluvarNeural", gender: "Masculino", region: "Tamil Nadu", type: "Neural2", label: "Valluvar (Tamil)" },
      clara: { modelId: "ta-IN-PallaviNeural", gender: "Femenina", region: "Tamil Nadu", type: "Neural2", label: "Pallavi (Tamil)" },
      don_ramon: { modelId: "ta-IN-ValluvarNeural", gender: "Masculino", region: "Tamil Nadu", type: "WaveNet", label: "Valluvar (Maduro)" },
      mateo: { modelId: "ta-IN-ValluvarNeural", gender: "Masculino", region: "Tamil Nadu", type: "Neural2", label: "Valluvar (Joven)" },
      bea: { modelId: "ta-IN-PallaviNeural", gender: "Femenina", region: "Tamil Nadu", type: "Neural2", label: "Pallavi (Alegre)" }
    }
  },
  "te-IN": {
    code: "te-IN",
    name: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳",
    family: "Dravídica",
    region: "Andhra Pradesh y Telangana (India)",
    scriptType: "telugu",
    demographics: {
      dialectSpeakers: "96 millones",
      whereConcentrated: "Hyderabad, Visakhapatnam, Vijayawada",
      totalLanguageSpeakers: "96 millones",
      speakers2050: "115 millones",
      curiosity: "Llamada históricamente 'el italiano de Oriente' porque casi todas sus palabras terminan en sonido vocálico."
    },
    characterVoices: {
      hugo: { modelId: "te-IN-MohanNeural", gender: "Masculino", region: "Telangana", type: "Neural2", label: "Mohan (Telugu)" },
      clara: { modelId: "te-IN-ShrutiNeural", gender: "Femenina", region: "Telangana", type: "Neural2", label: "Shruti (Telugu)" },
      don_ramon: { modelId: "te-IN-MohanNeural", gender: "Masculino", region: "Telangana", type: "WaveNet", label: "Mohan (Maduro)" },
      mateo: { modelId: "te-IN-MohanNeural", gender: "Masculino", region: "Telangana", type: "Neural2", label: "Mohan (Joven)" },
      bea: { modelId: "te-IN-ShrutiNeural", gender: "Femenina", region: "Telangana", type: "Neural2", label: "Shruti (Alegre)" }
    }
  },
  "kn-IN": {
    code: "kn-IN",
    name: "Canarés (Kannada)",
    nativeName: "ಕನ್ನಡ",
    flag: "🇮🇳",
    family: "Dravídica",
    region: "Karnataka (India)",
    scriptType: "kannada",
    demographics: {
      dialectSpeakers: "59 millones",
      whereConcentrated: "Bangalore (Silicon Valley de la India), Mysore",
      totalLanguageSpeakers: "59 millones",
      speakers2050: "72 millones",
      curiosity: "Reconocida oficialmente como lengua clásica de la India; su literatura posee el segundo mayor número de premios Jnanpith del país."
    },
    characterVoices: {
      hugo: { modelId: "kn-IN-GaganNeural", gender: "Masculino", region: "Karnataka", type: "Neural2", label: "Gagan (Kannada)" },
      clara: { modelId: "kn-IN-SapnaNeural", gender: "Femenina", region: "Karnataka", type: "Neural2", label: "Sapna (Kannada)" },
      don_ramon: { modelId: "kn-IN-GaganNeural", gender: "Masculino", region: "Karnataka", type: "WaveNet", label: "Gagan (Maduro)" },
      mateo: { modelId: "kn-IN-GaganNeural", gender: "Masculino", region: "Karnataka", type: "Neural2", label: "Gagan (Joven)" },
      bea: { modelId: "kn-IN-SapnaNeural", gender: "Femenina", region: "Karnataka", type: "Neural2", label: "Sapna (Alegre)" }
    }
  },
  "ml-IN": {
    code: "ml-IN",
    name: "Malabar (Malayalam)",
    nativeName: "മലയാളം",
    flag: "🇮🇳",
    family: "Dravídica",
    region: "Kerala (India)",
    scriptType: "malayalam",
    demographics: {
      dialectSpeakers: "38 millones",
      whereConcentrated: "Kerala, Lakshadweep y diáspora en el Golfo Pérsico",
      totalLanguageSpeakers: "38 millones",
      speakers2050: "45 millones",
      curiosity: "La palabra 'malayalam' es un palíndromo perfecto tanto en inglés como en su significado original ('tierra entre colinas y mar')."
    },
    characterVoices: {
      hugo: { modelId: "ml-IN-MidhunNeural", gender: "Masculino", region: "Kerala", type: "Neural2", label: "Midhun (Malayalam)" },
      clara: { modelId: "ml-IN-SobhanaNeural", gender: "Femenina", region: "Kerala", type: "Neural2", label: "Sobhana (Malayalam)" },
      don_ramon: { modelId: "ml-IN-MidhunNeural", gender: "Masculino", region: "Kerala", type: "WaveNet", label: "Midhun (Maduro)" },
      mateo: { modelId: "ml-IN-MidhunNeural", gender: "Masculino", region: "Kerala", type: "Neural2", label: "Midhun (Joven)" },
      bea: { modelId: "ml-IN-SobhanaNeural", gender: "Femenina", region: "Kerala", type: "Neural2", label: "Sobhana (Alegre)" }
    }
  },

  // ==========================================
  // SUDESTE ASIÁTICO Y ASIA ORIENTAL
  // ==========================================
  "ja-JP": {
    code: "ja-JP",
    name: "Japonés",
    nativeName: "日本語",
    flag: "🇯🇵",
    family: "Japónica",
    region: "Japón (Asia Oriental)",
    scriptType: "cjk",
    demographics: {
      dialectSpeakers: "125 millones",
      whereConcentrated: "Tokio, Osaka, Kioto, Nagoya",
      totalLanguageSpeakers: "125 millones",
      speakers2050: "105 millones (declive demográfico en Japón)",
      curiosity: "Estructura aglutinante SOV con tres sistemas de escritura simultáneos: Kanji, Hiragana y Katakana, con complejo sistema de cortesía (Keigo)."
    },
    characterVoices: {
      hugo: { modelId: "ja-JP-KeitaNeural", gender: "Masculino", region: "Tokio", type: "Neural2", label: "Keita (Japón)" },
      clara: { modelId: "ja-JP-NanamiNeural", gender: "Femenina", region: "Tokio", type: "Neural2", label: "Nanami (Japón)" },
      don_ramon: { modelId: "ja-JP-KeitaNeural", gender: "Masculino", region: "Tokio", type: "WaveNet", label: "Keita (Maduro)" },
      mateo: { modelId: "ja-JP-KeitaNeural", gender: "Masculino", region: "Tokio", type: "Neural2", label: "Keita (Joven)" },
      bea: { modelId: "ja-JP-NanamiNeural", gender: "Femenina", region: "Tokio", type: "Neural2", label: "Nanami (Alegre)" }
    }
  },
  "ko-KR": {
    code: "ko-KR",
    name: "Coreano",
    nativeName: "한국어",
    flag: "🇰🇷",
    family: "Coreánica / Aislada",
    region: "Corea del Sur y del Norte",
    scriptType: "hangul",
    demographics: {
      dialectSpeakers: "82 millones",
      whereConcentrated: "Seúl, Busan, Incheon, Pyongyang",
      totalLanguageSpeakers: "82 millones",
      speakers2050: "72 millones",
      curiosity: "Escrita en Hangul, creado en 1443 por el rey Sejong el Grande; considerado uno de los sistemas alfabéticos más científicos del mundo."
    },
    characterVoices: {
      hugo: { modelId: "ko-KR-InJoonNeural", gender: "Masculino", region: "Corea", type: "Neural2", label: "InJoon (Coreano)" },
      clara: { modelId: "ko-KR-SunHiNeural", gender: "Femenina", region: "Corea", type: "Neural2", label: "SunHi (Coreana)" },
      don_ramon: { modelId: "ko-KR-InJoonNeural", gender: "Masculino", region: "Corea", type: "WaveNet", label: "InJoon (Maduro)" },
      mateo: { modelId: "ko-KR-InJoonNeural", gender: "Masculino", region: "Corea", type: "Neural2", label: "InJoon (Joven)" },
      bea: { modelId: "ko-KR-SunHiNeural", gender: "Femenina", region: "Corea", type: "Neural2", label: "SunHi (Alegre)" }
    }
  },
  "vi-VN": {
    code: "vi-VN",
    name: "Vietnamita",
    nativeName: "Tiếng Việt",
    flag: "🇻🇳",
    family: "Austroasiática",
    region: "Vietnam",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "98 millones",
      whereConcentrated: "Hanói, Ciudad Ho Chi Minh, Da Nang",
      totalLanguageSpeakers: "98 millones",
      speakers2050: "115 millones",
      curiosity: "Lengua tonal con 6 tonos fonológicos distintivos; escrita con el alfabeto Quốc ngữ basado en el latín introducido en el siglo XVII."
    },
    characterVoices: {
      hugo: { modelId: "vi-VN-NamMinhNeural", gender: "Masculino", region: "Vietnam", type: "Neural2", label: "NamMinh (Vietnamita)" },
      clara: { modelId: "vi-VN-HoaiMyNeural", gender: "Femenina", region: "Vietnam", type: "Neural2", label: "HoaiMy (Vietnamita)" },
      don_ramon: { modelId: "vi-VN-NamMinhNeural", gender: "Masculino", region: "Vietnam", type: "WaveNet", label: "NamMinh (Maduro)" },
      mateo: { modelId: "vi-VN-NamMinhNeural", gender: "Masculino", region: "Vietnam", type: "Neural2", label: "NamMinh (Joven)" },
      bea: { modelId: "vi-VN-HoaiMyNeural", gender: "Femenina", region: "Vietnam", type: "Neural2", label: "HoaiMy (Alegre)" }
    }
  },
  "th-TH": {
    code: "th-TH",
    name: "Tailandés",
    nativeName: "ภาษาไทย",
    flag: "🇹🇭",
    family: "Kra-Dai",
    region: "Tailandia",
    scriptType: "thai",
    demographics: {
      dialectSpeakers: "71 millones",
      whereConcentrated: "Bangkok, Chiang Mai, Isan",
      totalLanguageSpeakers: "71 millones",
      speakers2050: "75 millones",
      curiosity: "Posee 5 tonos (bajo, medio, alto, descendente y ascendente); se escribe sin espacios entre palabras ordinarias."
    },
    characterVoices: {
      hugo: { modelId: "th-TH-NiwatNeural", gender: "Masculino", region: "Tailandia", type: "Neural2", label: "Niwat (Tailandés)" },
      clara: { modelId: "th-TH-PremwadeeNeural", gender: "Femenina", region: "Tailandia", type: "Neural2", label: "Premwadee (Tailandesa)" },
      don_ramon: { modelId: "th-TH-NiwatNeural", gender: "Masculino", region: "Tailandia", type: "WaveNet", label: "Niwat (Maduro)" },
      mateo: { modelId: "th-TH-NiwatNeural", gender: "Masculino", region: "Tailandia", type: "Neural2", label: "Niwat (Joven)" },
      bea: { modelId: "th-TH-PremwadeeNeural", gender: "Femenina", region: "Tailandia", type: "Neural2", label: "Premwadee (Alegre)" }
    }
  },
  "id-ID": {
    code: "id-ID",
    name: "Indonesio",
    nativeName: "Bahasa Indonesia",
    flag: "🇮🇩",
    family: "Austronesia",
    region: "Indonesia (Sudeste Asiático)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "200 millones (L1 y L2)",
      whereConcentrated: "Yakarta, Java, Sumatra, Bali",
      totalLanguageSpeakers: "200 millones",
      speakers2050: "260 millones",
      curiosity: "Forma estandarizada del malayo adoptada en 1928 como símbolo de unidad nacional en un archipiélago de más de 700 lenguas autóctonas."
    },
    characterVoices: {
      hugo: { modelId: "id-ID-ArdiNeural", gender: "Masculino", region: "Indonesia", type: "Neural2", label: "Ardi (Indonesio)" },
      clara: { modelId: "id-ID-GadisNeural", gender: "Femenina", region: "Indonesia", type: "Neural2", label: "Gadis (Indonesia)" },
      don_ramon: { modelId: "id-ID-ArdiNeural", gender: "Masculino", region: "Indonesia", type: "WaveNet", label: "Ardi (Maduro)" },
      mateo: { modelId: "id-ID-ArdiNeural", gender: "Masculino", region: "Indonesia", type: "Neural2", label: "Ardi (Joven)" },
      bea: { modelId: "id-ID-GadisNeural", gender: "Femenina", region: "Indonesia", type: "Neural2", label: "Gadis (Alegre)" }
    }
  },
  "ms-MY": {
    code: "ms-MY",
    name: "Malayo",
    nativeName: "Bahasa Melayu",
    flag: "🇲🇾",
    family: "Austronesia",
    region: "Malasia, Brunei y Singapur",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "33 millones",
      whereConcentrated: "Kuala Lumpur, Penang, Johor Bahru",
      totalLanguageSpeakers: "33 millones",
      speakers2050: "42 millones",
      curiosity: "Históricamente la gran lengua franca marítima del estrecho de Malaca; carece de flexión verbal por tiempo o número."
    },
    characterVoices: {
      hugo: { modelId: "ms-MY-OsmanNeural", gender: "Masculino", region: "Malasia", type: "Neural2", label: "Osman (Malayo)" },
      clara: { modelId: "ms-MY-YasminNeural", gender: "Femenina", region: "Malasia", type: "Neural2", label: "Yasmin (Malaya)" },
      don_ramon: { modelId: "ms-MY-OsmanNeural", gender: "Masculino", region: "Malasia", type: "WaveNet", label: "Osman (Maduro)" },
      mateo: { modelId: "ms-MY-OsmanNeural", gender: "Masculino", region: "Malasia", type: "Neural2", label: "Osman (Joven)" },
      bea: { modelId: "ms-MY-YasminNeural", gender: "Femenina", region: "Malasia", type: "Neural2", label: "Yasmin (Alegre)" }
    }
  },

  // ==========================================
  // ÁFRICA ORIENTAL
  // ==========================================
  "sw-KE": {
    code: "sw-KE",
    name: "Suajili (Swahili)",
    nativeName: "Kiswahili",
    flag: "🇰🇪",
    family: "Níger-Congo (Bantú)",
    region: "África Oriental (Kenia, Tanzania, Uganda, Ruanda)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "100 millones de hablantes",
      whereConcentrated: "Nairobi, Mombasa, Dar es Salaam, Zanzíbar",
      totalLanguageSpeakers: "100 millones (la lengua africana autóctona más hablada)",
      speakers2050: "180 millones (rápida expansión regional en la EAC)",
      curiosity: "Nacida de la síntesis entre lenguas bantúes de la costa oriental y comerciantes árabes y persas ('swahili' viene del árabe 'sawāḥil', costas)."
    },
    characterVoices: {
      hugo: { modelId: "sw-KE-RafikiNeural", gender: "Masculino", region: "Kenia", type: "Neural2", label: "Rafiki (Suajili)" },
      clara: { modelId: "sw-KE-ZuriNeural", gender: "Femenina", region: "Kenia", type: "Neural2", label: "Zuri (Suajili)" },
      don_ramon: { modelId: "sw-KE-RafikiNeural", gender: "Masculino", region: "Kenia", type: "WaveNet", label: "Rafiki (Maduro)" },
      mateo: { modelId: "sw-KE-RafikiNeural", gender: "Masculino", region: "Kenia", type: "Neural2", label: "Rafiki (Joven)" },
      bea: { modelId: "sw-KE-ZuriNeural", gender: "Femenina", region: "Kenia", type: "Neural2", label: "Zuri (Alegre)" }
    }
  },

  // ==========================================
  // LENGUAS ORIGINARIAS DE AMÉRICA
  // ==========================================
  "gn-PY": {
    code: "gn-PY",
    name: "Guaraní",
    nativeName: "Avañe'ẽ",
    flag: "🇵🇾",
    family: "Tupí-Guaraní",
    region: "Paraguay, Corrientes (Argentina) y este de Bolivia",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "6.5 millones",
      whereConcentrated: "Paraguay (lengua hablada por más del 85% de la población)",
      totalLanguageSpeakers: "6.5 millones",
      speakers2050: "8 millones",
      curiosity: "Única lengua originaria americana hablada por la inmensa mayoría de una población no puramente indígena; lengua oficial de Paraguay junto al castellano."
    },
    characterVoices: {
      hugo: { modelId: "es-AR-TomasNeural", gender: "Masculino", region: "Paraguay", type: "Neural2", label: "Tomás (Guaraní)" },
      clara: { modelId: "es-AR-ElenaNeural", gender: "Femenina", region: "Paraguay", type: "Neural2", label: "Elena (Guaraní)" },
      don_ramon: { modelId: "es-AR-TomasNeural", gender: "Masculino", region: "Paraguay", type: "WaveNet", label: "Tomás (Maduro)" },
      mateo: { modelId: "es-AR-TomasNeural", gender: "Masculino", region: "Paraguay", type: "Neural2", label: "Tomás (Joven)" },
      bea: { modelId: "es-AR-ElenaNeural", gender: "Femenina", region: "Paraguay", type: "Neural2", label: "Elena (Alegre)" }
    }
  },
  "qu-PE": {
    code: "qu-PE",
    name: "Quechua",
    nativeName: "Runasimi (Qusqu-Qullaw)",
    flag: "🇵🇪",
    family: "Quechua",
    region: "Andes (Perú, Bolivia, Ecuador, norte argentino)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "10 millones",
      whereConcentrated: "Cusco, Puno, Ayacucho, La Paz, Cochabamba",
      totalLanguageSpeakers: "10 millones (la familia originaria más hablada de América)",
      speakers2050: "11 millones",
      curiosity: "La lengua imperial de los Incas (Tawantinsuyu); polisintética y aglutinante, distingue entre 'nosotros inclusivo' y 'nosotros exclusivo'."
    },
    characterVoices: {
      hugo: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Andes", type: "Neural2", label: "Alex (Quechua)" },
      clara: { modelId: "es-PE-CamilaNeural", gender: "Femenina", region: "Andes", type: "Neural2", label: "Camila (Quechua)" },
      don_ramon: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Andes", type: "WaveNet", label: "Alex (Maduro)" },
      mateo: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Andes", type: "Neural2", label: "Alex (Joven)" },
      bea: { modelId: "es-PE-CamilaNeural", gender: "Femenina", region: "Andes", type: "Neural2", label: "Camila (Alegre)" }
    }
  },
  "ay-BO": {
    code: "ay-BO",
    name: "Aymara",
    nativeName: "Aymar aru",
    flag: "🇧🇴",
    family: "Aimaraica",
    region: "Altiplano andino (Bolivia, Perú y Chile)",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "2.8 millones",
      whereConcentrated: "Cuenca del Lago Titicaca, El Alto, La Paz",
      totalLanguageSpeakers: "2.8 millones",
      speakers2050: "3.2 millones",
      curiosity: "Famosa por su lógica trivalente (verdadero, falso, indeterminado) y por concebir el pasado delante (lo visible) y el futuro detrás."
    },
    characterVoices: {
      hugo: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Altiplano", type: "Neural2", label: "Alex (Aymara)" },
      clara: { modelId: "es-PE-CamilaNeural", gender: "Femenina", region: "Altiplano", type: "Neural2", label: "Camila (Aymara)" },
      don_ramon: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Altiplano", type: "WaveNet", label: "Alex (Maduro)" },
      mateo: { modelId: "es-PE-AlexNeural", gender: "Masculino", region: "Altiplano", type: "Neural2", label: "Alex (Joven)" },
      bea: { modelId: "es-PE-CamilaNeural", gender: "Femenina", region: "Altiplano", type: "Neural2", label: "Camila (Alegre)" }
    }
  },
  "nah-MX": {
    code: "nah-MX",
    name: "Náhuatl",
    nativeName: "Nāhuatlahtōlli",
    flag: "🇲🇽",
    family: "Uto-azteca",
    region: "Centro y sur de México",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "1.7 millones",
      whereConcentrated: "Puebla, Veracruz, Hidalgo, San Luis Potosí, Guerrero",
      totalLanguageSpeakers: "1.7 millones",
      speakers2050: "2 millones",
      curiosity: "La lengua de la civilización mexica (azteca); aportó al vocabulario universal palabras como tomate, aguacate, coyote y chocolate."
    },
    characterVoices: {
      hugo: { modelId: "es-MX-JorgeNeural", gender: "Masculino", region: "México", type: "Neural2", label: "Jorge (Náhuatl)" },
      clara: { modelId: "es-MX-DaliaNeural", gender: "Femenina", region: "México", type: "Neural2", label: "Dalia (Náhuatl)" },
      don_ramon: { modelId: "es-MX-JorgeNeural", gender: "Masculino", region: "México", type: "WaveNet", label: "Jorge (Maduro)" },
      mateo: { modelId: "es-MX-JorgeNeural", gender: "Masculino", region: "México", type: "Neural2", label: "Jorge (Joven)" },
      bea: { modelId: "es-MX-DaliaNeural", gender: "Femenina", region: "México", type: "Neural2", label: "Dalia (Alegre)" }
    }
  },
  "nv-US": {
    code: "nv-US",
    name: "Navajo",
    nativeName: "Diné bizaad",
    flag: "🪶",
    family: "Na-dené (Atabascana)",
    region: "Nación Navajo (Arizona, Nuevo México, Utah)",
    scriptType: "latin",
    hasVoiceModel: false,
    demographics: {
      dialectSpeakers: "170.000 hablantes nativos",
      whereConcentrated: "Reserva de la Nación Navajo (EE.UU.)",
      totalLanguageSpeakers: "170.000",
      speakers2050: "180.000",
      curiosity: "Célebre por los 'Code Talkers' navajos durante la 2ª Guerra Mundial, cuyo código lingüístico jamás pudo ser descifrado por las potencias del Eje."
    },
    characterVoices: {
      hugo: { modelId: "none", gender: "Masculino", region: "Nación Navajo", type: "Standard", label: "Sin modelo disponible" },
      clara: { modelId: "none", gender: "Femenina", region: "Nación Navajo", type: "Standard", label: "Sin modelo disponible" },
      don_ramon: { modelId: "none", gender: "Masculino", region: "Nación Navajo", type: "Standard", label: "Sin modelo disponible" },
      mateo: { modelId: "none", gender: "Masculino", region: "Nación Navajo", type: "Standard", label: "Sin modelo disponible" },
      bea: { modelId: "none", gender: "Femenina", region: "Nación Navajo", type: "Standard", label: "Sin modelo disponible" }
    }
  },

  // ==========================================
  // OTRAS LENGUAS EUROPEAS
  // ==========================================
  "de-DE": {
    code: "de-DE",
    name: "Alemán (Alemania)",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    family: "Germánica",
    region: "Alemania",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "84 millones",
      whereConcentrated: "Berlín, Múnich, Frankfurt, Hamburgo",
      totalLanguageSpeakers: "135 millones",
      speakers2050: "130 millones",
      curiosity: "Famoso por su precisión morfológica, sistema de cuatro casos gramaticales y capacidad para formar sustantivos compuestos extensos."
    },
    characterVoices: {
      hugo: { modelId: "de-DE-ConradNeural", gender: "Masculino", region: "Alemania", type: "Neural2", label: "Conrad (Alemán)" },
      clara: { modelId: "de-DE-KatjaNeural", gender: "Femenina", region: "Alemania", type: "Neural2", label: "Katja (Alemana)" },
      don_ramon: { modelId: "de-DE-ConradNeural", gender: "Masculino", region: "Alemania", type: "WaveNet", label: "Conrad (Maduro)" },
      mateo: { modelId: "de-DE-ConradNeural", gender: "Masculino", region: "Alemania", type: "Neural2", label: "Conrad (Joven)" },
      bea: { modelId: "de-DE-KatjaNeural", gender: "Femenina", region: "Alemania", type: "Neural2", label: "Katja (Alegre)" }
    }
  },
  "it-IT": {
    code: "it-IT",
    name: "Italiano",
    nativeName: "Italiano",
    flag: "🇮🇹",
    family: "Romance",
    region: "Italia",
    scriptType: "latin",
    demographics: {
      dialectSpeakers: "60 millones",
      whereConcentrated: "Roma, Milán, Florencia, Nápoles",
      totalLanguageSpeakers: "68 millones",
      speakers2050: "60 millones",
      curiosity: "Evolucionó directamente del dialecto toscano de Dante Alighieri; destaca por sus consonantes geminadas (dobles) y expresividad musical."
    },
    characterVoices: {
      hugo: { modelId: "it-IT-DiegoNeural", gender: "Masculino", region: "Italia", type: "Neural2", label: "Diego (Italiano)" },
      clara: { modelId: "it-IT-ElsaNeural", gender: "Femenina", region: "Italia", type: "Neural2", label: "Elsa (Italiana)" },
      don_ramon: { modelId: "it-IT-DiegoNeural", gender: "Masculino", region: "Italia", type: "WaveNet", label: "Diego (Maduro)" },
      mateo: { modelId: "it-IT-DiegoNeural", gender: "Masculino", region: "Italia", type: "Neural2", label: "Diego (Joven)" },
      bea: { modelId: "it-IT-ElsaNeural", gender: "Femenina", region: "Italia", type: "Neural2", label: "Elsa (Alegre)" }
    }
  },
  "ru-RU": {
    code: "ru-RU",
    name: "Ruso",
    nativeName: "Русский язык",
    flag: "🇷🇺",
    family: "Eslava",
    region: "Rusia y Europa del Este",
    scriptType: "cyrillic",
    demographics: {
      dialectSpeakers: "145 millones",
      whereConcentrated: "Moscú, San Petersburgo, Siberia",
      totalLanguageSpeakers: "258 millones",
      speakers2050: "235 millones",
      curiosity: "La lengua eslava más extendida; distingue entre consonantes palatalizadas (blandas) y no palatalizadas (duras) con 6 casos gramaticales."
    },
    characterVoices: {
      hugo: { modelId: "ru-RU-DmitryNeural", gender: "Masculino", region: "Rusia", type: "Neural2", label: "Dmitry (Ruso)" },
      clara: { modelId: "ru-RU-SvetlanaNeural", gender: "Femenina", region: "Rusia", type: "Neural2", label: "Svetlana (Rusa)" },
      don_ramon: { modelId: "ru-RU-DmitryNeural", gender: "Masculino", region: "Rusia", type: "WaveNet", label: "Dmitry (Maduro)" },
      mateo: { modelId: "ru-RU-DmitryNeural", gender: "Masculino", region: "Rusia", type: "Neural2", label: "Dmitry (Joven)" },
      bea: { modelId: "ru-RU-SvetlanaNeural", gender: "Femenina", region: "Rusia", type: "Neural2", label: "Svetlana (Alegre)" }
    }
  }
};

// ==========================================
// GRUPOS LINGÜÍSTICOS VISUALES
// ==========================================
export const LANGUAGE_GROUPS: LanguageGroup[] = [
  {
    id: "spanish",
    name: "Español y sus variantes",
    description: "El mosaico multidialectal de la hispanosfera mundial.",
    icon: "🇪🇸",
    codes: ["es-AR", "es-CL", "es-CO", "es-CU", "es-DO", "es-ES", "es-GQ", "es-MX", "es-PE", "es-PR", "es-VE"]
  },
  {
    id: "english",
    name: "Inglés y sus variantes",
    description: "La lengua global a través de sus acentos en los cinco continentes.",
    icon: "🇬🇧",
    codes: ["en-AU", "en-GB", "en-GB-SCT", "en-IE", "en-IN", "en-NG", "en-NZ", "en-US", "en-US-south", "en-ZA"]
  },
  {
    id: "french",
    name: "Francés y sus variantes",
    description: "La francofonía en Europa, Norteamérica y África continental.",
    icon: "🇫🇷",
    codes: ["fr-BE", "fr-CA", "fr-CD", "fr-CH", "fr-CI", "fr-FR", "fr-GA"]
  },
  {
    id: "arabic",
    name: "Árabe y sus variantes",
    description: "Desde el Magreb y Egipto hasta el Levante, Iraq y la Península Arábiga.",
    icon: "🕌",
    codes: ["ar-EG", "ar-IQ", "ar-JO", "ar-MA", "ar-SA", "ar-XA"]
  },
  {
    id: "chinese",
    name: "Chino y sus variantes",
    description: "Mandarín estándar, cantonés de Hong Kong y variantes tradicionales de Taiwán.",
    icon: "🇨🇳",
    codes: ["cmn-CN", "yue-HK", "zh-TW"]
  },
  {
    id: "india",
    name: "Lenguas de la India",
    description: "La fascinante riqueza del subcontinente indio (indoarias, dravídicas e inglés indio).",
    icon: "🇮🇳",
    codes: ["bn-IN", "en-IN", "gu-IN", "hi-IN", "kn-IN", "ml-IN", "mr-IN", "pa-IN", "ta-IN", "te-IN", "ur-PK"]
  },
  {
    id: "africa",
    name: "Lenguas y variantes de África",
    description: "El continente con mayor dinamismo demográfico y diversidad lingüística.",
    icon: "🌍",
    codes: ["ar-EG", "ar-MA", "en-NG", "en-ZA", "es-GQ", "fr-CD", "fr-CI", "fr-GA", "pt-AO", "pt-MZ", "sw-KE"]
  },
  {
    id: "americas_indigenous",
    name: "Lenguas originarias de América",
    description: "Milenarias joyas lingüísticas autóctonas de los pueblos originarios.",
    icon: "🌿",
    codes: ["ay-BO", "gn-PY", "nah-MX", "nv-US", "qu-PE"]
  },
  {
    id: "east_asia",
    name: "Asia oriental y sudeste asiático",
    description: "Grandes familias sino-tibetanas, austronésicas, japónica y coreánica.",
    icon: "🌏",
    codes: ["cmn-CN", "id-ID", "ja-JP", "ko-KR", "ms-MY", "th-TH", "vi-VN", "yue-HK", "zh-TW"]
  },
  {
    id: "europe",
    name: "Lenguas de Europa",
    description: "Romances, germánicas, eslavas y celtas del continente europeo.",
    icon: "🇪🇺",
    codes: [
      "ca-ES", "de-CH", "de-DE", "en-GB", "en-GB-SCT", "en-IE", "es-ES",
      "fr-BE", "fr-CH", "fr-FR", "gl-ES", "it-IT", "nl-BE", "nl-NL", "pt-PT", "ru-RU"
    ]
  },
  {
    id: "indoeuropean",
    name: "Macrofamilia indoeuropea",
    description: "La gran familia genealógica que abarca desde Europa hasta el subcontinente indio.",
    icon: "🌎",
    codes: [
      "bn-IN", "ca-ES", "de-CH", "de-DE", "en-AU", "en-GB", "en-GB-SCT", "en-IE", "en-IN",
      "en-NG", "en-NZ", "en-US", "en-US-south", "en-ZA", "es-AR", "es-CL", "es-CO", "es-CU",
      "es-DO", "es-ES", "es-GQ", "es-MX", "es-PE", "es-PR", "es-VE", "fr-BE", "fr-CA", "fr-CD",
      "fr-CH", "fr-CI", "fr-FR", "fr-GA", "gl-ES", "gu-IN", "hi-IN", "it-IT", "mr-IN", "nl-BE",
      "nl-NL", "pa-IN", "pt-AO", "pt-BR", "pt-MZ", "pt-PT", "ru-RU", "ur-PK"
    ]
  }
];

export const PRESET_BUNDLES = [
  {
    id: "big_five",
    name: "Las Grandes Cinco",
    description: "Español, Francés, Alemán, Italiano y Portugués.",
    codes: ["es-ES", "fr-FR", "de-DE", "it-IT", "pt-BR"],
    icon: "🌍"
  },
  {
    id: "americas_dialects",
    name: "Dialectos de América",
    description: "México, Colombia, Argentina, Venezuela, Chile y Perú.",
    codes: ["es-MX", "es-CO", "es-AR", "es-VE", "es-CL", "es-PE"],
    icon: "🌎"
  },
  {
    id: "india_voices",
    name: "Mosaico de la India",
    description: "Hindi, Bengalí, Tamil, Telugu y Guyaratí.",
    codes: ["hi-IN", "bn-IN", "ta-IN", "te-IN", "gu-IN"],
    icon: "🇮🇳"
  },
  {
    id: "asia_quad",
    name: "Asia Oriental",
    description: "Japonés, Mandarín, Cantonés y Coreano.",
    codes: ["ja-JP", "cmn-CN", "yue-HK", "ko-KR"],
    icon: "🏯"
  },
  {
    id: "indigenous_america",
    name: "América Originaria",
    description: "Guaraní, Quechua, Aymara y Náhuatl.",
    codes: ["gn-PY", "qu-PE", "ay-BO", "nah-MX"],
    icon: "🌿"
  }
];
