export interface Character {
  id: string;
  name: string;
  subtitle: string;
  age: string;
  archetype: string;
  comicTrait: string;
  catchphrase: string;
  avatar: string;
  color: string;
  themeBorder: string;
  bgBadge: string;
}

export const CHARACTERS: Record<string, Character> = {
  hugo: {
    id: "hugo",
    name: "Hugo",
    subtitle: "El Dramático Optimista",
    age: "~30 años",
    archetype: "Cree que cualquier evento cotidiano es el inicio de una película de espías o una conspiración.",
    comicTrait: "Lee intenciones ocultas donde no las hay. Si alguien le dice «buenos días», asume que es una contraseña secreta.",
    catchphrase: "«No digas nada... sé exactamente lo que esto significa.»",
    avatar: "/characters/hugo.jpg",
    color: "#1cb0f6",
    themeBorder: "border-sky-500",
    bgBadge: "bg-sky-100 text-sky-800"
  },
  clara: {
    id: "clara",
    name: "Clara",
    subtitle: "La Pragmática Cansada",
    age: "~28 años",
    archetype: "La voz de la razón que solo quiere terminar su café en paz.",
    comicTrait: "Completamente inmune a las locuras ajenas; responde con lógica implacable y seco sarcasmo.",
    catchphrase: "«Hugo, solo es un menú de pizzas, no un mapa del tesoro.»",
    avatar: "/characters/clara.jpg",
    color: "#a855f7",
    themeBorder: "border-purple-500",
    bgBadge: "bg-purple-100 text-purple-800"
  },
  don_ramon: {
    id: "don_ramon",
    name: "Don Ramón",
    subtitle: "El Jubilado Rebelde",
    age: "72 años",
    archetype: "Tiene todo el tiempo del mundo y cero paciencia para los protocolos modernos.",
    comicTrait: "Adopta pasatiempos extremos de la nada (aprender a andar en patineta, ser DJ, invertir en criptomonedas ficticias).",
    catchphrase: "«A mi edad no pido permiso, pido descuentos.»",
    avatar: "/characters/don_ramon.jpg",
    color: "#58cc02",
    themeBorder: "border-emerald-500",
    bgBadge: "bg-emerald-100 text-emerald-800"
  },
  mateo: {
    id: "mateo",
    name: "Mateo",
    subtitle: "El Niño Sabelotodo",
    age: "8 años",
    archetype: "Habla como si fuera un abogado corporativo o un profesor universitario.",
    comicTrait: "Usa un vocabulario innecesariamente avanzado para resolver dilemas infantiles (como negociar la hora de dormir o intercambiar cromos).",
    catchphrase: "«Desde una perspectiva puramente nutricional, el helado califica como lácteo.»",
    avatar: "/characters/mateo.jpg",
    color: "#ff9600",
    themeBorder: "border-amber-500",
    bgBadge: "bg-amber-100 text-amber-800"
  },
  bea: {
    id: "bea",
    name: "Bea",
    subtitle: "La Asistente de Tienda Distraída",
    age: "Variable (mesera, cajera)",
    archetype: "Siempre está presente cuando ocurren los enredos y toma todo de manera excesivamente literal.",
    comicTrait: "Cumple las peticiones de los clientes al pie de la letra con una sonrisa inocente, causando caos sin darse cuenta.",
    catchphrase: "«¡Entendido! Una orden de café con peligro y servilletas numeradas, enseguida.»",
    avatar: "/characters/bea.jpg",
    color: "#ec4899",
    themeBorder: "border-pink-500",
    bgBadge: "bg-pink-100 text-pink-800"
  },
  narrator: {
    id: "narrator",
    name: "Narradora",
    subtitle: "Voz de la Historia",
    age: "Atemporal",
    archetype: "Observadora perspicaz que guía el relato y acentúa la ironía de las situaciones.",
    comicTrait: "Comenta con elegancia cómica y calidez los enredos de los protagonistas.",
    catchphrase: "«Y así comenzó otro día perfectamente caótico...»",
    avatar: "/characters/narrator_female.jpg",
    color: "#8b5cf6",
    themeBorder: "border-violet-500",
    bgBadge: "bg-violet-100 text-violet-800"
  },
  narrator_male: {
    id: "narrator_male",
    name: "Narrador",
    subtitle: "Voz de la Historia",
    age: "Atemporal",
    archetype: "Relator elocuente que narra cada peripecia con emoción y sutileza.",
    comicTrait: "Aporta tono documental y cinematográfico a las peripecias cotidianas.",
    catchphrase: "«Todo parecía estar bajo control... hasta este instante.»",
    avatar: "/characters/narrator_male.jpg",
    color: "#6366f1",
    themeBorder: "border-indigo-500",
    bgBadge: "bg-indigo-100 text-indigo-800"
  }
};

