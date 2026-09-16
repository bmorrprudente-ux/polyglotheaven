export interface WordToken {
  word: string;
  trans: string;
}

export interface DialogueLineTranslation {
  text: string;
  stageDirection?: string;
  phonetic?: string;
  tokens?: WordToken[];
  audioUrl: string;
}

export interface DialogueLine {
  id: string;
  characterId: "hugo" | "clara" | "don_ramon" | "mateo" | "bea";
  defaultStageDirection?: string;
  expression: string;
  translations: Record<string, DialogueLineTranslation>;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  characters: ("hugo" | "clara" | "don_ramon" | "mateo" | "bea")[];
  conflictType: string;
  vocabularyTheme: string;
  lines: DialogueLine[];
}

export const STORIES: Story[] = [
  {
    id: "story_1",
    title: "La Maleta Misteriosa",
    subtitle: "Hugo + Clara + Don Ramón",
    characters: ["hugo", "clara", "don_ramon"],
    conflictType: "Él inventa una conspiración; ella intenta hacer un trámite normal.",
    vocabularyTheme: "Compras, transporte, misterio cotidiano, cafetería.",
    lines: [
      {
        id: "s1_l1",
        characterId: "hugo",
        defaultStageDirection: "Susurrando",
        expression: "conspiracy",
        translations: {
          "fr-CH": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est vraiment suspecte.",
            stageDirection: "En chuchotant",
            audioUrl: "/audio/s1/s1_l1_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Clara, ne regarde pas tout de suite... mais cette valise verte sur la table d'en face est franchement suspecte.",
            stageDirection: "En chuchotant",
            audioUrl: "/audio/s1/s1_l1_fr-BE.mp3"
          },
          "es-ES": {
            text: "Clara, no mires ahora... pero esa maleta verde en la mesa de enfrente es muy sospechosa.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_es-ES.mp3"
          },
          "el-GR": {
            text: "Κλάρα, μην κοιτάς τώρα... αλλά εκείνη η πράσινη βαλίτσα στο απέναντι τραπέζι είναι πολύ ύποπτη.",
            stageDirection: "Ψιθυρίζοντας",
            audioUrl: "/audio/s1/s1_l1_el-GR.mp3"
          },
          "es-MX": {
            text: "Clara, no voltees ahorita... pero esa maleta verde en la mesa de enfrente está bien sospechosa.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_es-MX.mp3"
          },
          "es-AR": {
            text: "Clara, no mires ahora... pero esa valija verde en la mesa de enfrente es re sospechosa.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_es-AR.mp3"
          },
          "es-DO": {
            text: "Clara, no te me vires ahora... pero ese bulto verde en la mesa de al frente ta bien sospechoso.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_es-DO.mp3"
          },
          "es-PR": {
            text: "Clara, no mires ahora... pero esa maleta verde en la mesa de al frente se ve bien sospechosa.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_es-PR.mp3"
          },
          "es-CO": {
            text: "Clara, no mire ahora... pero esa maleta verde en la mesa de al frente está bien sospechosa.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_es-CO.mp3"
          },
          "fr-FR": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Clara, regarde pas tout de suite... mais cette valise verte là-bas sur la table d'en face est pas mal louche.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Clara, ne regarde pas dêh... mais la valise verte sur la table de devant là, c'est trop bizarre.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Clara, não olha agora... mas aquela mala verde na mesa da frente é muito suspeita.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Clara, não olhes agora... mas aquela mala verde na mesa da frente é muito suspeita.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_pt-PT.mp3"
          },
          "it-IT": {
            text: "Clara, non guardare adesso... ma quella valigia verde sul tavolo di fronte è molto sospetta.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_it-IT.mp3"
          },
          "ca-ES": {
            text: "Clara, no miris ara... però aquella maleta verda a la taula del davant és molt sospitosa.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Clara, nu te uita acum... dar valiza aia verde de pe masa din față e foarte suspectă.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Clara, non mires agora... pero esa maleta verde na mesa de fronte é moi sospeitosa.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Clara, agaches pas ara... mas aquela valisa verda sus la taula d'en fàcia es plan suspècta.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_gl-ES.mp3"
          },
          "de-DE": {
            text: "Clara, schau jetzt nicht hin... aber dieser grüne Koffer auf dem Tisch da drüben ist extrem verdächtig.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_de-DE.mp3"
          },
          "de-CH": {
            text: "Clara, lueg jetzt nöd ane... aber dä grüeni Choffer uf em Tisch det vorne isch mega verdächtig.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_de-CH.mp3"
          },
          "nl-NL": {
            text: "Clara, kijk nu niet... maar die groene koffer op de tafel aan de overkant is heel verdacht.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Clara, ikke se nå... men den grønne kofferten på bordet overfor er veldig mistenkelig.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Clara, titta inte nu... men den där gröna resväskan på bordet mittemot är väldigt misstänkt.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_sv-SE.mp3"
          },
          "da-DK": {
            text: "Clara, kig ikke nu... men den grønne kuffert på bordet overfor er meget mistænkelig.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_da-DK.mp3"
          },
          "ru-RU": {
            text: "Клара, не смотри сейчас... но тот зелёный чемодан на столике напротив очень подозрительный.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Кларо, не дивися зараз... але та зелена валіза на столику навпроти дуже підозріла.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Clara, nie patrz teraz... ale ta zielona walizka na stole naprzeciwko jest bardzo podejrzana.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Kláro, nedívej se teď... ale ten zelený kufr na stole naproti je hodně podezřelý.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Clara, nemoj sad gledati... ali onaj zeleni kofer na stolu preko puta jako je sumnjiv.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Clara, älä katso nyt... mutta tuo vihreä matkalaukku vastapäisessä pöydässä on tosi epäilyttävä.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Clara, most ne nézz oda... de az a zöld bőrönd a szemközti asztalon nagyon gyanús.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Clara, ez begiratu orain... baina aurreko mahaiko maleta berde hori oso susmagarria da.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Clara, şimdi bakma... ama karşı masadaki o yeşil bavul son derece şüpheli.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_tr-TR.mp3"
          },
          "ja-JP": {
            text: "クララ、今見ちゃダメだ…でも向かいのテーブルにあるあの緑のスーツケース、めちゃくちゃ怪しいぞ。",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "克拉拉，现在别看……但对面桌上那个绿色手提箱超级可疑。",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "Clara，而家千祈唔好望……不過對面張枱個綠色行李箱好鬼可疑。",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_yue-HK.mp3"
          },
          "ko-KR": {
            text: "클라라, 지금 쳐다보지 마... 하지만 맞은편 테이블에 있는 저 초록색 여행 가방, 너무 수상해.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_ko-KR.mp3"
          },
          "ar-XA": {
            text: "كلارا، لا تنظري الآن... لكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_ar-XA.mp3"
          },
          "he-IL": {
            text: "קלרה, אל תסתכלי עכשיו... אבל המזוודה הירוקה הזאת על השולחן ממול חשודה מאוד.",
            stageDirection: "Susurrando",
            audioUrl: "/audio/s1/s1_l1_he-IL.mp3"
          },
          "es-VE": {
            text: "Clara, no mires ahorita... pero ese maletín verde en la mesa de enfrente está bien sospechoso, chamo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_es-VE.mp3"
          },
          "es-CL": {
            text: "Clara, no mirí ahora po... pero esa maleta verde en la mesa del frente está súper sospechosa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_es-CL.mp3"
          },
          "es-PE": {
            text: "Clara, no voltees ahorita... pero esa maleta verde en la mesa de al frente está bien sospechosa, causa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_es-PE.mp3"
          },
          "es-CU": {
            text: "Clara, no mires pa' allá ahora... pero ese maletín verde en la mesa del frente se ve sospechosísimo, asere.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_es-CU.mp3"
          },
          "es-GQ": {
            text: "Clara, no mires ahora... pero esa maleta verde en la mesa de enfrente es muy sospechosa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_es-GQ.mp3"
          },
          "en-US": {
            text: "Clara, don't look right now... but that green suitcase on the table across from us is super suspicious.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-US.mp3"
          },
          "en-GB": {
            text: "Clara, don't look right now... but that green suitcase on the table opposite is jolly suspicious.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Clara, dinna look noo... but that green suitcase on the table ower there is right suspicious.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Clara, don't you look right now... but that green suitcase on the table over yonder is mighty suspicious.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-US-south.mp3"
          },
          "en-IE": {
            text: "Clara, don't look now... but that green suitcase on the table opposite is proper suspicious so it is.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-IE.mp3"
          },
          "en-AU": {
            text: "Clara, don't look now, mate... but that green suitcase on the table opposite is bloody dodgy.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-AU.mp3"
          },
          "en-NZ": {
            text: "Clara, don't look right now... but that green suitcase on the table across from us is heaps sketchy.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Clara, don't look now, hey... but that green suitcase on the table across is lekker suspicious.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-ZA.mp3"
          },
          "en-NG": {
            text: "Clara, no look now o... but that green suitcase for that table opposite dey look suspicious die.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-NG.mp3"
          },
          "en-IN": {
            text: "Clara, don't look right now na... but that green suitcase on the opposite table is sounding very suspicious only.",
            stageDirection: "Whispering",
            audioUrl: "/audio/s1/s1_l1_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Clara, kijk nu eens niet... maar die groene koffer op de tafel daar tegenover is wreed verdacht.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "克拉拉，現在先別看……但對面桌上那個綠色手提箱超級可疑。",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_zh-TW.mp3"
          },
          "hi-IN": {
            text: "क्लारा, अभी मत देखना... लेकिन सामने वाली मेज़ पर वो हरा सूटकेस बहुत संदिग्ध लग रहा है।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_hi-IN.mp3"
          },
          "ur-PK": {
            text: "کلارا، ابھی مت دیکھنا... لیکن سامنے والی میز پر وہ سبز سوٹ کیس بہت مشکوک لگ رہا ہے۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ur-PK.mp3"
          },
          "bn-IN": {
            text: "ক্লারা, এখন তাকিয়ো না... কিন্তু সামনের টেবিলে ওই সবুজ স্যুটকেসটা বড্ড সন্দেহজনক।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਕਲਾਰਾ, ਹੁਣੇ ਨਾ ਦੇਖੋ... ਪਰ ਸਾਹਮਣੇ ਵਾਲੇ ਮੇਜ਼ 'ਤੇ ਉਹ ਹਰਾ ਸੂਟਕੇਸ ਬਹੁਤ ਸ਼ੱਕੀ ਲੱਗ ਰਿਹਾ ਹੈ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_pa-IN.mp3"
          },
          "gu-IN": {
            text: "ક્લેરા, અત્યારે ન જોતી... પણ સામેના ટેબલ પરનો પેલો લીલો સૂટકેસ ખૂબ શંકાસ્પદ લાગે છે.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_gu-IN.mp3"
          },
          "mr-IN": {
            text: "क्लारा, आत्ता तिकडे बघू नकोस... पण समोरच्या टेबलावरची ती हिरवी बॅग खूप संशयास्पद वाटतेय.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_mr-IN.mp3"
          },
          "ta-IN": {
            text: "கிளாரா, இப்போது பார்க்காதே... ஆனால் எதிரே உள்ள மேஜையில் இருக்கும் அந்த பச்சை சூட்கேஸ் மிகவும் சந்தேகத்திற்குரியது.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ta-IN.mp3"
          },
          "te-IN": {
            text: "క్లారా, ఇప్పుడు చూడకు... కానీ ఎదురుగా ఉన్న బల్లపై ఉన్న ఆ ఆకుపచ్చ సూట్‌కేస్ చాలా అనుమానాస్పదంగా ఉంది.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಕ್ಲಾರಾ, ಈಗ ನೋಡಬೇಡ... ಆದರೆ ಎದುರಿನ ಮೇಜಿನ ಮೇಲಿರುವ ಆ ಹಸಿರು ಸೂಟ್‌ಕೇಸ್ ತುಂಬಾ ಅನುಮಾನಾಸ್ಪದವಾಗಿದೆ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ക്ലാര, ഇപ്പോൾ നോക്കരുത്... എന്നാൽ മുന്നിലെ മേശപ്പുറത്തുള്ള ആ പച്ച സ്യൂട്ട്കേസ് വളരെ സംശയാസ്പദമാണ്.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Clara, đừng nhìn lúc này... nhưng chiếc vali màu xanh lá trên bàn đối diện trông cực kỳ đáng ngờ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_vi-VN.mp3"
          },
          "th-TH": {
            text: "คลาร่า อย่าเพิ่งมองตอนนี้นะ... แต่กระเป๋าเดินทางสีเขียวบนโต๊ะฝั่งตรงข้ามมันน่าสงสัยสุดๆ เลย",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_th-TH.mp3"
          },
          "id-ID": {
            text: "Clara, jangan lihat sekarang... tapi koper hijau di meja seberang itu mencurigakan sekali.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_id-ID.mp3"
          },
          "ms-MY": {
            text: "Clara, jangan pandang sekarang... tapi beg pakaian hijau di meja seberang itu nampak sangat mencurigakan.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Clara, usitazame sasa hivi... lakini mkoba ule wa kijani kwenye meza ya mbele unatilia shaka sana.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Clara, ani emaña ko'ág̃a... péro pe vosa hovy mesa renondépeguáva ikatúko ivaiete.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Clara, amaraq qhawaychu... ichaqa chimpa mesapi q'omer wayaqa ancha mancharikuypaqmi rikch'akun.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Clara, janiwa jichhaxa uñt'amti... ukampisa nayraqata mesana ch'uxña qullqiru wayaqaxa wali muspharkañawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Clara, amo xitlachixto axcan... yeceh in xoxouhqui petlacalli ipan tlamaniliztli cenca tlachiyalti.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_nah-MX.mp3"
          },
          "nv-US": {
            text: "Clara, kʼad doo dééłʼį́į́ da... ndi tʼóó tsxį́įłgo bą́ą́h dadiltsʼid bilasáana yitʼéego chahaʼoh biyiʼdi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l1_nv-US.mp3"
          }
        }
      },
      {
        id: "s1_l2",
        characterId: "clara",
        defaultStageDirection: "Suspirando",
        expression: "tired",
        translations: {
          "fr-CH": {
            text: "C'est juste une valise, Hugo. Mange ton sandwich et reste tranquille.",
            stageDirection: "En soupirant",
            audioUrl: "/audio/s1/s1_l2_fr-CH.mp3"
          },
          "fr-BE": {
            text: "C'est juste une valise, Hugo. Mange ton sandwich, s'il te plaît.",
            stageDirection: "En soupirant",
            audioUrl: "/audio/s1/s1_l2_fr-BE.mp3"
          },
          "es-ES": {
            text: "Es solo una maleta, Hugo. Come tu sándwich.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_es-ES.mp3"
          },
          "el-GR": {
            text: "Είναι απλώς μια βαλίτσα, Ούγκο. Φάε το σάντουιτς σου.",
            stageDirection: "Αναστενάζοντας",
            audioUrl: "/audio/s1/s1_l2_el-GR.mp3"
          },
          "es-MX": {
            text: "Es solo una maleta, Hugo. Ya cómete tu torta en paz.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_es-MX.mp3"
          },
          "es-AR": {
            text: "Es solo una valija, Hugo. Comete el tostado y dejate de joder.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_es-AR.mp3"
          },
          "es-DO": {
            text: "Es un bulto cualquiera, Hugo. Cómete tu sándwich y deja el show.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_es-DO.mp3"
          },
          "es-PR": {
            text: "Es solo una maleta, Hugo. Cómete tu sándwich y déjate de bochinche.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_es-PR.mp3"
          },
          "es-CO": {
            text: "Es solo una maleta, Hugo. Tómese su café y cómase su sándwich tranquilo.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_es-CO.mp3"
          },
          "fr-FR": {
            text: "C'est juste une valise, Hugo. Mange ton sandwich.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_fr-FR.mp3"
          },
          "fr-CA": {
            text: "C'est juste une valise, Hugo. Mange ton sandwich pis relaxe.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_fr-CA.mp3"
          },
          "fr-CI": {
            text: "C'est juste une valise, Hugo. Mange ton pain et laisse les histoires.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_fr-CI.mp3"
          },
          "pt-BR": {
            text: "É só uma mala, Hugo. Come o seu sanduíche em paz.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_pt-BR.mp3"
          },
          "pt-PT": {
            text: "É apenas uma mala, Hugo. Come a tua tosta em paz.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_pt-PT.mp3"
          },
          "it-IT": {
            text: "È solo una valigia, Hugo. Mangia il tuo panino.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_it-IT.mp3"
          },
          "ca-ES": {
            text: "És només una maleta, Hugo. Menja't el sandvitx.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_ca-ES.mp3"
          },
          "ro-RO": {
            text: "E doar o valiză, Hugo. Mănâncă-ți sandvișul.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_ro-RO.mp3"
          },
          "gl-ES": {
            text: "É só unha maleta, Hugo. Come o teu bocadillo.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Es pas qu'una valisa, Uc. Manja ton entrepan en patz.",
            stageDirection: "Normal",
            audioUrl: "/audio/s1/s1_l2_gl-ES.mp3"
          },
          "de-DE": {
            text: "Es ist nur ein Koffer, Hugo. Iss dein Sandwich.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_de-DE.mp3"
          },
          "de-CH": {
            text: "Es isch nume en Choffer, Hugo. Iss dis Sandwich.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_de-CH.mp3"
          },
          "nl-NL": {
            text: "Het is gewoon een koffer, Hugo. Eet je broodje op.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Det er bare en koffert, Hugo. Spis sandwichen din.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Det är bara en resväska, Hugo. Ät din smörgås.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_sv-SE.mp3"
          },
          "da-DK": {
            text: "Det er bare en kuffert, Hugo. Spis din sandwich.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_da-DK.mp3"
          },
          "ru-RU": {
            text: "Это просто чемодан, Хьюго. Ешь свой сэндвич.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Це просто валіза, Г'юго. Їж свій сендвіч.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_uk-UA.mp3"
          },
          "pl-PL": {
            text: "To tylko walizka, Hugo. Zjedz swoją kanapkę.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Je to jenom kufr, Hugo. Sněz svůj sendvič.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "To je samo kofer, Hugo. Jedi svoj sendvič.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Se on vain laukku, Hugo. Syö voileipäsi.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Ez csak egy bőrönd, Hugo. Edd meg a szendvicsed.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Maleta bat besterik ez da, Hugo. Jan zure ogitartekoa.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_eu-ES.mp3"
          },
          "tr-TR": {
            text: "O sadece bir bavul Hugo. Sandviçini ye.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_tr-TR.mp3"
          },
          "ja-JP": {
            text: "ただのスーツケースよ、ウーゴ。おとなしくサンドイッチを食べなさい。",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "那只是个普通手提箱，雨果。快吃你的三明治吧。",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "只係一個普通行李箱咋，Hugo。快啲食你件三文治啦。",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_yue-HK.mp3"
          },
          "ko-KR": {
            text: "그냥 가방일 뿐이야, 위고. 조용히 샌드위치나 먹어.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_ko-KR.mp3"
          },
          "ar-XA": {
            text: "إنها مجرد حقيبة يا هوغو. كُل شطيرتك.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_ar-XA.mp3"
          },
          "he-IL": {
            text: "זאת סתם מזוודה, הוגו. תאכל את הכריך שלך.",
            stageDirection: "Suspirando",
            audioUrl: "/audio/s1/s1_l2_he-IL.mp3"
          },
          "es-VE": {
            text: "Tranquilo, Hugo... Seguro es de algún viejito que está esperando la camionetica.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_es-VE.mp3"
          },
          "es-CL": {
            text: "Tranquilo, Hugo... Capaz que sea de algún tatita esperando la micro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_es-CL.mp3"
          },
          "es-PE": {
            text: "Cálmate, Hugo... Seguro es de algún viejito que está esperando su combi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_es-PE.mp3"
          },
          "es-CU": {
            text: "Cálmate, Hugo... Seguro es de un viejito esperando la guagua.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_es-CU.mp3"
          },
          "es-GQ": {
            text: "Tranquilo, Hugo... Seguro es de algún anciano esperando el autobús.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_es-GQ.mp3"
          },
          "en-US": {
            text: "It's just a suitcase, Hugo. Eat your sandwich.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-US.mp3"
          },
          "en-GB": {
            text: "It's just a suitcase, Hugo. Do eat your sandwich.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "It's just a suitcase, Hugo. Hae your piece and wheesht.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "It's just an ordinary suitcase, Hugo. Go on and eat your sandwich.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-US-south.mp3"
          },
          "en-IE": {
            text: "It's only a suitcase, Hugo. Eat your sandwich and give over.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-IE.mp3"
          },
          "en-AU": {
            text: "It's just a bloody suitcase, Hugo. Eat your sandwich.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-AU.mp3"
          },
          "en-NZ": {
            text: "It's just a suitcase, Hugo. Just eat your sandwich, bro.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-NZ.mp3"
          },
          "en-ZA": {
            text: "It's just a suitcase, Hugo. Eat your sarmie, man.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-ZA.mp3"
          },
          "en-NG": {
            text: "Na normal suitcase, Hugo. Chop your bread make you calm down.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-NG.mp3"
          },
          "en-IN": {
            text: "It's just a simple suitcase, Hugo. Please eat your sandwich peacefully na.",
            stageDirection: "Sighing",
            audioUrl: "/audio/s1/s1_l2_en-IN.mp3"
          },
          "fr-CD": {
            text: "C'est juste une valise, Hugo. Mange ton sandwich en paix, papa.",
            stageDirection: "En soupirant",
            audioUrl: "/audio/s1/s1_l2_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Pardonne-moi Hugo, calme-toi... C'est juste un vieux père qui attend son transport.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Calma, Hugo... Deve ser de um kota qualquer que tá à espera do machimbombo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Tranquilo, Hugo... Deve ser de um madala à espera do chapa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Het is maar een koffer, Hugo. Eet je broodje op.",
            stageDirection: "Zuchtend",
            audioUrl: "/audio/s1/s1_l2_nl-BE.mp3"
          },
          "ar-SA": {
            text: "اهدأ يا هيوغو... على الأرجح أنها لرجل مسن ينتظر الحافلة.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ar-SA.mp3"
          },
          "ar-EG": {
            text: "اهدى يا هيوجو... تلاقيها بتاعة راجل عجوز مستني الأتوبيس وخلاص.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ar-EG.mp3"
          },
          "ar-MA": {
            text: "تهدن يا هيغو... راه غير ديال شي راجل شارف كيتسنى الطوبيس وصافي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ar-MA.mp3"
          },
          "ar-JO": {
            text: "روّق يا هيوغو... أكيد لواحد ختيار بستنى الباص.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "على كيفك هيوغو... يجوز مال فد شايب داينتظر الكوسترات.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "冷靜點，雨果……那八成是哪個等公車的老先生的吧。",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_zh-TW.mp3"
          },
          "hi-IN": {
            text: "शांत हो जाओ, ह्यूगो... शायद किसी बुज़ुर्ग की होगी जो बस का इंतज़ार कर रहे हैं।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_hi-IN.mp3"
          },
          "ur-PK": {
            text: "پرسکون ہو جاؤ، ہیوگو... غالباً کسی بزرگ کی ہو گی جو بس کا انتظار کر رہے ہیں۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ur-PK.mp3"
          },
          "bn-IN": {
            text: "শান্ত হও হিউগো... নির্ঘাত কোনো বৃদ্ধ মানুষের, যিনি বাসের জন্য অপেক্ষা করছেন।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਸ਼ਾਂਤ ਹੋ ਜਾਓ, ਹਿਊਗੋ... ਸ਼ਾਇਦ ਕਿਸੇ ਬਜ਼ੁਰਗ ਦੀ ਹੋਵੇਗੀ ਜੋ ਬੱਸ ਦੀ ਉਡੀਕ ਕਰ ਰਹੇ ਹਨ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_pa-IN.mp3"
          },
          "gu-IN": {
            text: "શાંત થા, હ્યુગો... કદાચ કોઈ વડીલની હશે જે બસની રાહ જોઈ રહ્યા છે.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_gu-IN.mp3"
          },
          "mr-IN": {
            text: "शांत हो, ह्युगो... कदाचित बसची वाट पाहणाऱ्या एखाद्या आजोबांची असेल ती बॅग.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_mr-IN.mp3"
          },
          "ta-IN": {
            text: "அமைதியாக இரு ஹ்யூகோ... பேருந்துக்காக காத்திருக்கும் ஒரு முதியவரின் பையாக இருக்கும்.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ta-IN.mp3"
          },
          "te-IN": {
            text: "ప్రశాంతంగా ఉండు హ్యూగో... బస్సు కోసం వేచి చూస్తున్న ఎవరో పెద్దాయనది కావచ్చు.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಶಾಂತರಾಗಿ ಹ್ಯೂಗೋ... ಬಹುಶಃ ಬಸ್‌ಗಾಗಿ ಕಾಯುತ್ತಿರುವ ಯಾರೋ ಹಿರಿಯ ವ್ಯಕ್ತಿಯದ್ದಾಗಿರಬಹುದು.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ശാന്തനാകൂ, ഹ്യൂഗോ... ബസ് കാത്തിരിക്കുന്ന ഏതെങ്കിലും പ്രായമായ ആളുടെതാകും അത്.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Bình tĩnh nào, Hugo... Chắc chỉ là của ông cụ nào đó đang chờ xe buýt thôi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_vi-VN.mp3"
          },
          "th-TH": {
            text: "ใจเย็นๆ ก่อน ฮิวโก้... คงเป็นของคุณตาสักคนที่กำลังรอรถเมล์อยู่ล่ะมั้ง",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_th-TH.mp3"
          },
          "id-ID": {
            text: "Itu cuma koper biasa, Hugo. Habiskan rotimu.",
            stageDirection: "Menghela napas",
            audioUrl: "/audio/s1/s1_l2_id-ID.mp3"
          },
          "ms-MY": {
            text: "Bertenanglah, Hugo... Barangkali itu kepunyaan seorang pakcik yang sedang menunggu bas.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Tulia, Hugo... Yaelekea ni ya mzee fulani anayengojea basi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Epytu'u, Hugo... Oiméne peteĩ karai tuja oha'arõva colectívo mba'e.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Hawkayay, Hugo... Chayqa ichapas combita suyashaq machulapa kanman.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Qhantiykisma, Hugo... Ukaxa inasa mä jilata awki colectívo suyt'aski ukatpachawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Tlacueh, Hugo... Hueloc yehuatl ce tlacatzintli tlen quichixtica in tepozcalli.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_nah-MX.mp3"
          },
          "nv-US": {
            text: "Tʼáá kóníghání, Hugo... Daatsʼí łaʼ hastóí chidí nitsaaí yibaʼ sidáanii biʼééʼ átʼé.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l2_nv-US.mp3"
          }
        }
      },
      {
        id: "s1_l3",
        characterId: "hugo",
        defaultStageDirection: "Con los ojos muy abiertos",
        expression: "conspiracy",
        translations: {
          "fr-CH": {
            text: "Personne ne laisse une valise verte comme ça. Il doit y avoir des documents secrets. Ou des diamants !",
            stageDirection: "Intrigué",
            audioUrl: "/audio/s1/s1_l3_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Personne ne laisse une valise verte comme ça ! Il doit y avoir des dossiers secrets. Ou des diamants !",
            stageDirection: "Intrigué",
            audioUrl: "/audio/s1/s1_l3_fr-BE.mp3"
          },
          "es-ES": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_es-ES.mp3"
          },
          "el-GR": {
            text: "Κανείς δεν αφήνει έτσι απλά μια πράσινη βαλίτσα. Πρέπει να περιέχει μυστικά έγγραφα. Ή διαμάντια!",
            stageDirection: "Με γουρλωμένα μάτια",
            audioUrl: "/audio/s1/s1_l3_el-GR.mp3"
          },
          "es-MX": {
            text: "Nadie deja una maleta verde así nomás. Debe haber documentos clasificados. ¡O diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_es-MX.mp3"
          },
          "es-AR": {
            text: "Nadie deja una valija verde así nomás. Seguro tiene documentos secretos. ¡O diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_es-AR.mp3"
          },
          "es-DO": {
            text: "Nadie deja un bulto verde botado así. Ahí tiene que haber papeles secretos. ¡O diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_es-DO.mp3"
          },
          "es-PR": {
            text: "Nadie deja una maleta verde tirada así. Ahí tiene que haber papeles confidenciales. ¡O diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_es-PR.mp3"
          },
          "es-CO": {
            text: "Nadie deja una maleta verde botada de esa manera. Fijo tiene documentos secretos. ¡O diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_es-CO.mp3"
          },
          "fr-FR": {
            text: "Personne ne laisse une valise verte comme ça. Il doit y avoir des documents secrets. Ou des diamants !",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Personne laisse une valise verte de même. Doit sûrement y avoir des dossiers secrets. Ou des diamants !",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Personne ne laisse une valise verte comme ça au hasard. Il y a des dossiers secrets dedans. Ou bien des diamants !",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Ninguém larga uma mala verde assim do nada. Tem que ter arquivos secretos. Ou diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Ninguém deixa uma mala verde assim ao abandono. Deve ter documentos confidenciais. Ou diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_pt-PT.mp3"
          },
          "it-IT": {
            text: "Nessuno lascia una valigia verde così. Devono esserci documenti segreti. O diamanti!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_it-IT.mp3"
          },
          "ca-ES": {
            text: "Ningú no deixa una maleta verda així com si res. Hi ha d'haver documents secrets. O diamants!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Nimeni nu lasă o valiză verde așa pur și simplu. Trebuie să fie documente secrete. Sau diamante!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Ninguén deixa unha maleta verde así sen máis. Ten que haber papeis secretos. Ou diamantes!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Degun daissa pas una valisa verda atau a l'abandon. I deu aver de documents secrets. O de diamants!",
            stageDirection: "Conspirador",
            audioUrl: "/audio/s1/s1_l3_gl-ES.mp3"
          },
          "de-DE": {
            text: "Niemand lässt einfach so einen grünen Koffer stehen. Da müssen Geheimdokumente drin sein. Oder Diamanten!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_de-DE.mp3"
          },
          "de-CH": {
            text: "Niemer laht eifach eso en grüene Choffer stah. Da mues es Gheimdokument dinne ha. Oder Diamante!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_de-CH.mp3"
          },
          "nl-NL": {
            text: "Niemand laat zomaar een groene koffer achter. Er moeten geheime documenten in zitten. Of diamanten!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Ingen forlater en grønn koffert sånn uten videre. Det må være hemmelige dokumenter oppi. Eller diamanter!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Ingen lämnar en grön resväska sådär bara. Det måste finnas hemliga dokument i den. Eller diamanter!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_sv-SE.mp3"
          },
          "da-DK": {
            text: "Ingen efterlader en grøn kuffert bare sådan. Der må være hemmelige dokumenter i den. Eller diamanter!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_da-DK.mp3"
          },
          "ru-RU": {
            text: "Никто не оставляет зелёный чемодан просто так. Там секретные документы. Или алмазы!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Ніхто не залишає зелену валізу просто так. Там точно секретні документи. Або діаманти!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Nikt nie zostawia zielonej walizki ot tak. Muszą tam być tajne dokumenty. Albo diamenty!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Nikdo nenechá zelený kufr jen tak ležet. Určitě v něm jsou tajné dokumenty. Nebo diamanty!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Nitko ne ostavlja zeleni kofer tek tako. Unutra moraju biti tajni dokumenti. Ili dijamanti!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Kukaan ei jätä vihreää laukkua noin vain. Siellä täytyy olla salaisia asiakirjoja. Tai timantteja!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Senki nem hagy ott csak úgy egy zöld bőröndöt. Biztosan titkos iratok vannak benne. Vagy gyémántok!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Inork ez du maleta berde bat horrela uzten. Dokumentu sekretuak egon behar dira. Edo diamanteak!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Kimse yeşil bir bavulu öylece bırakıp gitmez. İçinde gizli belgeler olmalı. Ya da elmaslar!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_tr-TR.mp3"
          },
          "ja-JP": {
            text: "あんな緑のスーツケースを放置する奴がいるか？機密文書が入ってるに違いない。それともダイヤか！",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "没人会平白无故留个绿箱子在这。里面肯定有绝密文件，或者钻石！",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "冇人會無端端擺個綠色箱喺度。入面一定有絕密文件，或者鑽石！",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_yue-HK.mp3"
          },
          "ko-KR": {
            text: "누가 저런 초록색 가방을 그냥 두고 가겠어? 기밀문서가 들어있는 게 분명해. 아니면 다이아몬드거나!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_ko-KR.mp3"
          },
          "ar-XA": {
            text: "لا أحد يترك حقيبة خضراء هكذا بدون سبب. لا بد أن بداخلها وثائق سرية. أو ألماس!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_ar-XA.mp3"
          },
          "he-IL": {
            text: "אף אחד לא משאיר מזוודה ירוקה סתם ככה. חייבים להיות שם מסמכים סודיים. או יהלומים!",
            stageDirection: "Con los ojos muy abiertos",
            audioUrl: "/audio/s1/s1_l3_he-IL.mp3"
          },
          "es-VE": {
            text: "¡Nadie espera la camionetica con un maletín verde fluorescente y dos candados dorados!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_es-VE.mp3"
          },
          "es-CL": {
            text: "¡Nadie espera la micro con una maleta verde fluorescente y dos candados dorados po!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_es-CL.mp3"
          },
          "es-PE": {
            text: "¡Nadie espera su combi con una maleta verde fosforescente y dos candados dorados!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_es-PE.mp3"
          },
          "es-CU": {
            text: "¡Nadie espera la guagua con un maletín verde fosforescente y dos candados dorados!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_es-CU.mp3"
          },
          "es-GQ": {
            text: "¡Nadie espera el autobús con un maletín verde fluorescente y dos candados dorados!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_es-GQ.mp3"
          },
          "en-US": {
            text: "Nobody leaves a green suitcase just like that. There must be secret documents. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-US.mp3"
          },
          "en-GB": {
            text: "Nobody leaves a green suitcase lying around like that. There must be secret documents. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Naebody leaves a bricht green suitcase like that. Must be secret papers. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Nobody leaves a bright green suitcase sitting out like that. Bound to have secret papers. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-US-south.mp3"
          },
          "en-IE": {
            text: "Nobody just leaves a green suitcase behind like that. There has to be top-secret papers in it. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-IE.mp3"
          },
          "en-AU": {
            text: "Nobody just chucks a green suitcase on a table like that. Gotta be secret government files. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-AU.mp3"
          },
          "en-NZ": {
            text: "Nobody leaves a green suitcase sitting there like that. Bound to be secret files. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Nobody leaves a green suitcase just so, man. Must be top-secret files. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-ZA.mp3"
          },
          "en-NG": {
            text: "Nobody go leave green suitcase like that! Secret documents must dey inside. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-NG.mp3"
          },
          "en-IN": {
            text: "Nobody leaves a green suitcase just like that only! Definitely some confidential files are inside. Or diamonds!",
            stageDirection: "Conspiratorial",
            audioUrl: "/audio/s1/s1_l3_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Niemand laat zomaar een groene koffer achter. Er moeten geheime documenten in zitten. Of diamanten!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "沒有人會就這樣丟下一個綠色手提箱。裡面肯定有秘密文件，或者鑽石！",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_zh-TW.mp3"
          },
          "hi-IN": {
            text: "कोई भी यूं ही हरा सूटकेस नहीं छोड़ जाता। इसमें पक्का खुफिया दस्तावेज़ होंगे। या फिर हीरे!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_hi-IN.mp3"
          },
          "ur-PK": {
            text: "کوئی یوں ہی سبز سوٹ کیس نہیں چھوڑ جاتا۔ اس میں ضرور خفیہ دستاویزات ہوں گی۔ یا ہیرے!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ur-PK.mp3"
          },
          "bn-IN": {
            text: "কেউ এমনি এমনি সবুজ সুটকেস ফেলে যায় না। এতে নিশ্চয়ই গোপন নথিপত্র আছে। অথবা হিরে!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਕੋਈ ਵੀ ਐਵੇਂ ਹਰਾ ਸੂਟਕੇਸ ਨਹੀਂ ਛੱਡ ਜਾਂਦਾ। ਇਹਦੇ ਵਿੱਚ ਜ਼ਰੂਰ ਗੁਪਤ ਦਸਤਾਵੇਜ਼ ਹੋਣਗੇ। ਜਾਂ ਫਿਰ ਹੀਰੇ!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_pa-IN.mp3"
          },
          "gu-IN": {
            text: "કોઈ પણ આમ જ લીલો સૂટકેસ છોડી ન જાય. એમાં ચોક્કસ ગુપ્ત દસ્તાવેજો હોવા જોઈએ. અથવા હીરા!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_gu-IN.mp3"
          },
          "mr-IN": {
            text: "कोणीही सहज हिरवी सुटकेस अशी सोडून जात नाही. त्यात नक्कीच गुप्त कागदपत्रे असतील. किंवा हिरे!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_mr-IN.mp3"
          },
          "ta-IN": {
            text: "யாரும் பச்சை நிற சூட்கேஸை சும்மா விட்டுச் செல்ல மாட்டார்கள். அதில் ரகசிய ஆவணங்கள் இருக்க வேண்டும். அல்லது வைரங்கள்!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ta-IN.mp3"
          },
          "te-IN": {
            text: "ఎవరూ పచ్చటి సూట్‌కేస్‌ను అలా వదిలేసి వెళ్లరు. అందులో ఖచ్చితంగా రహస్య పత్రాలు ఉండాలి. లేదా వజ్రాలు!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಯಾರೂ ಸುಮ್ಮನೆ ಹಸಿರು ಸೂಟ್‌ಕೇಸ್ ಬಿಟ್ಟು ಹೋಗಲ್ಲ. ಅದರಲ್ಲಿ ಖಂಡಿತ ರಹಸ್ಯ ದಾಖಲೆಗಳಿರಬೇಕು. ಅಥವಾ ವಜ್ರಗಳು!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ആരും അങ്ങനെ വെറുതെ പച്ച സ്യൂട്ട്കേസ് ഉപേക്ഷിച്ചു പോകില്ല. ഇതിൽ തീർച്ചയായും രഹസ്യരേഖകൾ ഉണ്ടാകും. അല്ലെങ്കിൽ രത്നങ്ങൾ!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Không ai lại vứt một chiếc vali màu xanh lá như thế cả. Chắc chắn bên trong có tài liệu mật. Hoặc kim cương!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_vi-VN.mp3"
          },
          "th-TH": {
            text: "ไม่มีใครทิ้งกระเป๋าเดินทางสีเขียวไว้เฉยๆ แบบนี้หรอก ต้องมีเอกสารลับอยู่ข้างในแน่ๆ หรือไม่ก็เพชร!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_th-TH.mp3"
          },
          "id-ID": {
            text: "Mana ada orang meninggalkan koper hijau begitu saja. Pasti ada dokumen rahasia di dalamnya. Atau berlian!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_id-ID.mp3"
          },
          "ms-MY": {
            text: "Tiada siapa yang tinggalkan beg pakaian hijau macam itu saja. Mesti ada dokumen rahsia. Atau berlian!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Hakuna mtu anayeacha sanduku la kijani hivi hivi tu. Lazima kuna nyaraka za siri ndani yake. Au almasi!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Avave niko ndohejareíri peteĩ vosa hovy péicha. Oiméne oguereko kuatia ñemi. Térã itavera!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Manan pipas q'omer wayaqataqa jinallachu saqenman. Chaypiqa pakasqa qelqakunachá kashan. ¡Utaq qori qollqekuna!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Janiwa khitis ch'uxña wayaqxa ukhamak jaytkaspati. Ukanxa imat qillqatanakaw utjaspacha. ¡Jan ukax q'illu qullqinaka!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Aquin hueli quicahuaz ce xoxouhqui petlacalli yuhquin. Quipiaz tlahtolli ichtaca. Nozo teocuitlapilli!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_nah-MX.mp3"
          },
          "nv-US": {
            text: "Doo łaʼ tʼáadoo leʼé tʼóó tsostsʼid dootłʼizhí yę́ę yóóʼ adoolníił da. Nanináanii naaltsoos biiʼ dahólǫ́ǫ daatsʼí. Éí doodago óola daatsʼí!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_nv-US.mp3"
          }
        }
      },
      {
        id: "s1_l4",
        characterId: "clara",
        defaultStageDirection: "Tono plano",
        expression: "tired",
        translations: {
          "fr-CH": {
            text: "Ou du linge sale.",
            stageDirection: "Sarcastique",
            audioUrl: "/audio/s1/s1_l4_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Ou du linge à laver.",
            stageDirection: "Sarcastique",
            audioUrl: "/audio/s1/s1_l4_fr-BE.mp3"
          },
          "es-ES": {
            text: "O ropa sucia.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_es-ES.mp3"
          },
          "el-GR": {
            text: "Ή άπλυτα ρούχα.",
            stageDirection: "Με ανέκφραστο τόνο",
            audioUrl: "/audio/s1/s1_l4_el-GR.mp3"
          },
          "es-MX": {
            text: "O calzones sucios.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_es-MX.mp3"
          },
          "es-AR": {
            text: "O ropa sucia para lavar.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_es-AR.mp3"
          },
          "es-DO": {
            text: "O ropa sucia de lavandería.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_es-DO.mp3"
          },
          "es-PR": {
            text: "O ropa sucia apestosa.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_es-PR.mp3"
          },
          "es-CO": {
            text: "O simplemente ropa sucia.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_es-CO.mp3"
          },
          "fr-FR": {
            text: "Ou du linge sale.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Ou du linge sale qui pue.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Ou bien du linge sale.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Ou roupa suja.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Ou roupa suja.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_pt-PT.mp3"
          },
          "it-IT": {
            text: "O biancheria sporca.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_it-IT.mp3"
          },
          "ca-ES": {
            text: "O roba bruta.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Sau haine murdare.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Ou roupa sucia.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_gl-ES.mp3"
          },
          "oc-FR": {
            text: "O de linge brut.",
            stageDirection: "Sarcástica",
            audioUrl: "/audio/s1/s1_l4_gl-ES.mp3"
          },
          "de-DE": {
            text: "Oder Schmutzwäsche.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_de-DE.mp3"
          },
          "de-CH": {
            text: "Oder Dräckswösch.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_de-CH.mp3"
          },
          "nl-NL": {
            text: "Of vuile was.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Eller skittentøy.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Eller smutstvätt.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_sv-SE.mp3"
          },
          "da-DK": {
            text: "Eller snavsetøj.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_da-DK.mp3"
          },
          "ru-RU": {
            text: "Или грязное бельё.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Або брудна білизна.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Albo brudne pranie.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Nebo špinavé prádlo.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Ili prljavo rublje.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Tai likapyykkiä.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Vagy szennyes ruha.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Edo arropa zikina.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Veya kirli çamaşır.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_tr-TR.mp3"
          },
          "ja-JP": {
            text: "あるいは、ただの洗濯物ね。",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "或者是一堆脏衣服。",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "又或者係一堆臭污糟衫。",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_yue-HK.mp3"
          },
          "ko-KR": {
            text: "아니면 빨랫감이겠지.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_ko-KR.mp3"
          },
          "ar-XA": {
            text: "أو ملابس متسخة.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_ar-XA.mp3"
          },
          "he-IL": {
            text: "או כביסה מלוכלכת.",
            stageDirection: "Tono plano",
            audioUrl: "/audio/s1/s1_l4_he-IL.mp3"
          },
          "es-VE": {
            text: "Hugo, por favor... Solo vinimos a tomarnos un café y pagar el recibo de la luz.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_es-VE.mp3"
          },
          "es-CL": {
            text: "Hugo, córtala... Vinimos a tomarnos un cafecito y pagar la cuenta de la luz nomás.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_es-CL.mp3"
          },
          "es-PE": {
            text: "Hugo, por favor... Solo vinimos a tomar un café y pagar el recibo de la luz.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_es-PE.mp3"
          },
          "es-CU": {
            text: "Hugo, no inventes... Solo vinimos a tomarnos un buchito de café y pagar la corriente.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_es-CU.mp3"
          },
          "es-GQ": {
            text: "Hugo, por favor... Solo vinimos a tomar un café y pagar la factura de la luz.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_es-GQ.mp3"
          },
          "en-US": {
            text: "Or dirty laundry.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-US.mp3"
          },
          "en-GB": {
            text: "Or dirty laundry.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Or dirty washin'.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Or a pile of dirty laundry.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-US-south.mp3"
          },
          "en-IE": {
            text: "Or a load of dirty washing.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-IE.mp3"
          },
          "en-AU": {
            text: "Or dirty washing, mate.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-AU.mp3"
          },
          "en-NZ": {
            text: "Or dirty washing.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Or dirty washing, china.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-ZA.mp3"
          },
          "en-NG": {
            text: "Or dirty clothes self.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-NG.mp3"
          },
          "en-IN": {
            text: "Or simply dirty laundry.",
            stageDirection: "Dryly",
            audioUrl: "/audio/s1/s1_l4_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Of vuile was.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "或者是臭衣服。",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_zh-TW.mp3"
          },
          "hi-IN": {
            text: "या गंदे कपड़े।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_hi-IN.mp3"
          },
          "ur-PK": {
            text: "یا میلے کپڑے۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ur-PK.mp3"
          },
          "bn-IN": {
            text: "নয়তো ময়লা জামাকাপড়।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਜਾਂ ਮੈਲੇ ਕੱਪੜੇ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_pa-IN.mp3"
          },
          "gu-IN": {
            text: "અથવા મેલાં કપડાં.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_gu-IN.mp3"
          },
          "mr-IN": {
            text: "किंवा मळलेले कपडे.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_mr-IN.mp3"
          },
          "ta-IN": {
            text: "அல்லது அழுக்குத் துணிகள்.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ta-IN.mp3"
          },
          "te-IN": {
            text: "లేదా మురికి బట్టలు.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಅಥವಾ ಕೊಳಕು ಬಟ್ಟೆಗಳು.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_kn-IN.mp3"
          },
          "ml-IN": {
            text: "അല്ലെങ്കിൽ മുഷിഞ്ഞ വസ്ത്രങ്ങൾ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Hoặc là đống quần áo bẩn.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_vi-VN.mp3"
          },
          "th-TH": {
            text: "หรือไม่ก็เสื้อผ้าใช้แล้ว",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_th-TH.mp3"
          },
          "id-ID": {
            text: "Atau pakaian kotor.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_id-ID.mp3"
          },
          "ms-MY": {
            text: "Atau baju kotor.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Au nguo chafu tu.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Térã ao ky'a.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Utaq qhilli p'achakuna.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Jan ukax qhilli isinaka.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Nozo zoquitzotzomahtli.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_nah-MX.mp3"
          },
          "nv-US": {
            text: "Éí doodago ééʼ tsiʼadzoolí.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_nv-US.mp3"
          }
        }
      },
      {
        id: "s1_l5",
        characterId: "don_ramon",
        defaultStageDirection: "Se acerca corriendo, sudando pero sonriente",
        expression: "cheerful",
        translations: {
          "fr-CH": {
            text: "Excusez-moi ! Quelqu'un aurait vu ma valise verte à paillettes ?",
            stageDirection: "Souriant",
            audioUrl: "/audio/s1/s1_l5_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Pardonnez-moi ! Est-ce que quelqu'un a vu ma valise verte à paillettes ?",
            stageDirection: "Souriant",
            audioUrl: "/audio/s1/s1_l5_fr-BE.mp3"
          },
          "es-ES": {
            text: "¡Disculpen! ¿Alguien vio mi maleta verde con brillantina?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_es-ES.mp3"
          },
          "el-GR": {
            text: "Με συγχωρείτε! Είδε κανείς την πράσινη βαλίτσα μου με τη χρυσόσκονη;",
            stageDirection: "Πλησιάζει τρέχοντας, ιδρωμένος αλλά χαμογελαστός",
            audioUrl: "/audio/s1/s1_l5_el-GR.mp3"
          },
          "es-MX": {
            text: "¡Disculpen! ¿Alguien vio mi maleta verde con brillitos?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_es-MX.mp3"
          },
          "es-AR": {
            text: "¡Disculpen! ¿Alguien vio mi valija verde con brillantina?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_es-AR.mp3"
          },
          "es-DO": {
            text: "¡Ey mi gente, disculpen! ¿Nadie ha visto mi bulto verde con escarcha?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_es-DO.mp3"
          },
          "es-PR": {
            text: "¡Disculpen, corillo! ¿Alguien ha visto mi maleta verde con brillo?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_es-PR.mp3"
          },
          "es-CO": {
            text: "¡Buenas tardes! ¿De casualidad alguien vio mi maleta verde con escarcha?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_es-CO.mp3"
          },
          "fr-FR": {
            text: "Excusez-moi ! Est-ce que quelqu'un a vu ma valise verte à paillettes ?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Excusez-moi tout le monde ! Y a-tu quelqu'un qui a vu ma valise verte avec des brillants ?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Pardonnez-moi deh ! Est-ce que quelqu'un a vu ma valise verte qui brille là ?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Com licença, pessoal! Alguém viu minha mala verde cheia de glitter?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Com licença! Alguém viu a minha mala verde com brilhantes?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_pt-PT.mp3"
          },
          "it-IT": {
            text: "Scusatemi! Qualcuno ha visto la mia valigia verde con i brillantini?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_it-IT.mp3"
          },
          "ca-ES": {
            text: "Disculpeu! Algú ha vist la meva maleta verda amb purpurina?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Mă scuzați! A văzut cineva valiza mea verde cu sclipici?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Desculpen! Alguén viu a miña maleta verde con purpurina?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Excusatz-me! Qualqu'un a vist ma valisa verda amb de belugas?",
            stageDirection: "Preocupada",
            audioUrl: "/audio/s1/s1_l5_gl-ES.mp3"
          },
          "de-DE": {
            text: "Entschuldigung! Hat jemand meinen grünen Glitzerkoffer gesehen?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_de-DE.mp3"
          },
          "de-CH": {
            text: "Entschuldigung zämme! Hät öpper min grüene Glitzerchoffer gseh?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_de-CH.mp3"
          },
          "nl-NL": {
            text: "Pardon allemaal! Heeft iemand mijn groene glitterkoffer gezien?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Unnskyld meg! Er det noen som har sett den grønne glitterkofferten min?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Ursäkta mig! Har någon sett min gröna glitterresväska?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_sv-SE.mp3"
          },
          "da-DK": {
            text: "Undskyld mig! Er der nogen, der har set min grønne glitterkuffert?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_da-DK.mp3"
          },
          "ru-RU": {
            text: "Прошу прощения! Никто не видел мой зелёный чемодан с блёстками?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Перепрошую! Хтось бачив мою зелену валізу з блискітками?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Przepraszam bardzo! Czy ktoś widział moją zieloną brokatową walizkę?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Promiňte! Neviděl někdo můj zelený třpytivý kufr?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Oprostite! Je li netko vidio moj zeleni šljokičasti kofer?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Anteeksi! Onko kukaan nähnyt vihreää kimallelaukkuani?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Elnézést! Látta valaki a zöld csillámos bőröndömet?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Barkatu! Norbaitek ikusi al du nire purpurinadun maleta berdea?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Afedersiniz! Yeşil simli bavulumu gören oldu mu?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_tr-TR.mp3"
          },
          "ja-JP": {
            text: "すまんね！ワシのラメ入りグリーンのスーツケース、見かけんかったかい？",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "打扰一下！请问有人看到我那个带闪粉的绿色手提箱了吗？",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "唔好意思！有冇人見到我個閃令令嘅綠色行李箱呀？",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_yue-HK.mp3"
          },
          "ko-KR": {
            text: "실례합니다! 혹시 제 반짝이 초록색 여행 가방 보신 분 계신가요?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_ko-KR.mp3"
          },
          "ar-XA": {
            text: "عذراً يا جماعة! هل رأى أحدكم حقيبتي الخضراء اللامعة؟",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_ar-XA.mp3"
          },
          "he-IL": {
            text: "סליחה! מישהו ראה במקרה את המזוודה הירוקה והנוצצת שלי?",
            stageDirection: "Se acerca corriendo, sudando pero sonriente",
            audioUrl: "/audio/s1/s1_l5_he-IL.mp3"
          },
          "es-VE": {
            text: "Muchachos, disculpen... ¿Saben si la camionetica de las cuatro ya pasó?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_es-VE.mp3"
          },
          "es-CL": {
            text: "Chiquillos, disculpen... ¿Saben si la micro de las cuatro ya pasó?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_es-CL.mp3"
          },
          "es-PE": {
            text: "Jóvenes, disculpen... ¿Saben si el carro de las cuatro ya pasó?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_es-PE.mp3"
          },
          "es-CU": {
            text: "Muchachones, oigan... ¿Saben si la guagua de las cuatro ya pasó?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_es-CU.mp3"
          },
          "es-GQ": {
            text: "Jóvenes, disculpen... ¿Saben si el autobús de las cuatro ya pasó?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_es-GQ.mp3"
          },
          "en-US": {
            text: "Excuse me, folks! Did anyone see my green suitcase with glitter?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-US.mp3"
          },
          "en-GB": {
            text: "Excuse me, everyone! Did anyone happen to see my green sparkly suitcase?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Excuse me, folks! Did ony o' ye see ma green sparkly suitcase?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Pardon me, y'all! Did anybody happen to see my green glittery suitcase?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-US-south.mp3"
          },
          "en-IE": {
            text: "Sorry now, folks! Did anyone see me green suitcase with the glitter on it?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-IE.mp3"
          },
          "en-AU": {
            text: "G'day guys, excuse me! Anyone spot me green suitcase with all the glitter?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-AU.mp3"
          },
          "en-NZ": {
            text: "Kia ora folks, excuse me! Did anyone spot my green sparkly suitcase?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Excuse me, guys! Did anyone spot my green glitter suitcase by any chance?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-ZA.mp3"
          },
          "en-NG": {
            text: "Abeg make una excuse me! Anybody see my green suitcase with plenty shining glitter?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-NG.mp3"
          },
          "en-IN": {
            text: "Excuse me please! Did anyone see my green glitter wala suitcase?",
            stageDirection: "Smiling",
            audioUrl: "/audio/s1/s1_l5_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Pardon! Heeft iemand mijn groene glitterkoffer gezien?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "不好意思！有人看到我那個亮晶晶的綠色手提箱嗎？",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_zh-TW.mp3"
          },
          "hi-IN": {
            text: "माफ़ कीजिएगा! क्या किसी ने चमकीली ग्लिटर वाली मेरी हरी सूटकेस देखी है?",
            stageDirection: "मुस्कुराते हुए",
            audioUrl: "/audio/s1/s1_l5_hi-IN.mp3"
          },
          "ur-PK": {
            text: "معاف کیجیے گا! کیا کسی نے چمکدار ستاروں والا میرا سبز سوٹ کیس دیکھا ہے؟",
            stageDirection: "مسکراتے ہوئے",
            audioUrl: "/audio/s1/s1_l5_ur-PK.mp3"
          },
          "bn-IN": {
            text: "মাফ করবেন! কেউ কি আমার চকচকে গ্লিটার দেওয়া সবুজ স্যুটকেসটা দেখেছেন?",
            stageDirection: "হেসে",
            audioUrl: "/audio/s1/s1_l5_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਮਾਫ਼ ਕਰਨਾ ਜੀ! ਕੀ ਕਿਸੇ ਨੇ ਚਮਕੀਲੇ ਸਿਤਾਰਿਆਂ ਵਾਲਾ ਮੇਰਾ ਹਰਾ ਸੂਟਕੇਸ ਵੇਖਿਆ ਹੈ?",
            stageDirection: "ਮੁਸਕਰਾਉਂਦੇ ਹੋਏ",
            audioUrl: "/audio/s1/s1_l5_pa-IN.mp3"
          },
          "gu-IN": {
            text: "માફ કરજો! શું કોઈએ ચમકીલી ગ્લિટરવાળી મારી લીલી સૂટકેસ જોઈ છે?",
            stageDirection: "હસતાં હસતાં",
            audioUrl: "/audio/s1/s1_l5_gu-IN.mp3"
          },
          "mr-IN": {
            text: "माफ करा! चमचमणाऱ्या ग्लिटरवाली माझी हिरवी बॅग कोणाला दिसली का?",
            stageDirection: "हसत",
            audioUrl: "/audio/s1/s1_l5_mr-IN.mp3"
          },
          "ta-IN": {
            text: "மன்னிக்கவும்! மினுக்கும் பளபளப்பு கொண்ட என் பச்சை நிற சூட்கேஸை யாராவது பார்த்தீர்களா?",
            stageDirection: "புன்னகையுடன்",
            audioUrl: "/audio/s1/s1_l5_ta-IN.mp3"
          },
          "te-IN": {
            text: "క్షమించండి! మెరిసే గ్లిట్టర్ ఉన్న నా పచ్చని సూట్‌కేస్ ఎవరైనా చూశారా?",
            stageDirection: "చిరునవ్వుతో",
            audioUrl: "/audio/s1/s1_l5_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಕ್ಷಮಿಸಿ! ಮಿನುಗುವ ಹೊಳಪಿನ ನನ್ನ ಹಸಿರು ಸೂಟ್‌ಕೇಸ್ ಯಾರಾದರೂ ನೋಡಿದ್ದೀರಾ?",
            stageDirection: "ನಗೆಮೊಗದಿಂದ",
            audioUrl: "/audio/s1/s1_l5_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ക്ഷമിക്കണം! തിളങ്ങുന്ന മിന്നലുകളുള്ള എന്റെ പച്ച സ്യൂട്ട്കേസ് ആരെങ്കിലും കണ്ടോ?",
            stageDirection: "ചിരിച്ചുകൊണ്ട്",
            audioUrl: "/audio/s1/s1_l5_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Xin lỗi mọi người! Có ai thấy chiếc vali màu xanh lấp lánh kim tuyến của tôi đâu không?",
            stageDirection: "Mỉm cười",
            audioUrl: "/audio/s1/s1_l5_vi-VN.mp3"
          },
          "th-TH": {
            text: "ขอโทษนะครับทุกคน! มีใครเห็นกระเป๋าเดินทางสีเขียวติดกลิตเตอร์วิบวับของผมบ้างไหม?",
            stageDirection: "ยิ้ม",
            audioUrl: "/audio/s1/s1_l5_th-TH.mp3"
          },
          "id-ID": {
            text: "Permisi semuanya! Ada yang melihat koper hijau saya yang penuh glitter berkilau?",
            stageDirection: "Tersenyum",
            audioUrl: "/audio/s1/s1_l5_id-ID.mp3"
          },
          "ms-MY": {
            text: "Maafkan saya semua! Ada sesiapa nampak beg pakaian hijau saya yang ada glitter berkilauan?",
            stageDirection: "Tersenyum",
            audioUrl: "/audio/s1/s1_l5_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Samahanini! Kuna mtu ameona sanduku langu la kijani lenye kung'aa?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l5_sw-KE.mp3"
          },
          "gn-PY": {
            text: "¡Che disculpa! ¿Avave piko ohecha che vosa hovy henyhẽva mimbi?",
            stageDirection: "Ovy'ávo",
            audioUrl: "/audio/s1/s1_l5_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¡Allillanchu! ¿Pipas rikurqanchu q'omer q'ipiyta chipipiyuq?",
            stageDirection: "Asirispa",
            audioUrl: "/audio/s1/s1_l5_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¡Pampachita! ¿Khitisa uñjpacha ch'uxña wayaqaja k'ajkirimpi?",
            stageDirection: "Larustasisa",
            audioUrl: "/audio/s1/s1_l5_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¡Tlen tlamantli! ¿Aca oquittac no xoxohuic maletaj ica petlantoc chipahuac?",
            stageDirection: "Pactoc",
            audioUrl: "/audio/s1/s1_l5_nah-MX.mp3"
          },
          "nv-US": {
            text: "Shoo! Háídaish shitsitsʼaaʼ dootłʼizhgo disxǫsígíí yiiłtsą́?",
            stageDirection: "Chʼééhózhǫ́ǫgo",
            audioUrl: "/audio/s1/s1_l5_nv-US.mp3"
          },
        }
      },
      {
        id: "s1_l6",
        characterId: "hugo",
        defaultStageDirection: "Ojos desorbitados",
        expression: "conspiracy",
        translations: {
          "fr-CH": {
            text: "Des paillettes ? C'est le mot de passe secret pour les diamants ?",
            stageDirection: "Intrigué",
            audioUrl: "/audio/s1/s1_l6_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Des paillettes ? C'est le nom de code pour les diamants ?",
            stageDirection: "Intrigué",
            audioUrl: "/audio/s1/s1_l6_fr-BE.mp3"
          },
          "es-ES": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_es-ES.mp3"
          },
          "el-GR": {
            text: "Χρυσόσκονη; Είναι αυτός ο μυστικός κωδικός για τα διαμάντια;",
            stageDirection: "Με γουρλωμένα μάτια",
            audioUrl: "/audio/s1/s1_l6_el-GR.mp3"
          },
          "es-MX": {
            text: "¿Brillitos? ¿Ese es el código secreto para los diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_es-MX.mp3"
          },
          "es-AR": {
            text: "¿Brillantina? ¿Ese es el nombre clave para los diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_es-AR.mp3"
          },
          "es-DO": {
            text: "¿Escarcha? ¿Ese es el código pa los diamantes, don?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_es-DO.mp3"
          },
          "es-PR": {
            text: "¿Brillos? ¿Esa es la contraseña secreta para los diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_es-PR.mp3"
          },
          "es-CO": {
            text: "¿Escarcha? ¿Acaso esa es la clave secreta para los diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_es-CO.mp3"
          },
          "fr-FR": {
            text: "Des paillettes ? C'est le nom de code pour les diamants ?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Des brillants ? C'est-tu le mot de passe secret pour les diamants ?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Des paillettes ? C'est le mot secret pour parler des diamants quoi ?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Glitter? Esse é o codinome secreto pros diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Brilhantes? É esse o código secreto para os diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_pt-PT.mp3"
          },
          "it-IT": {
            text: "Brillantini? È questa la parola d'ordine per i diamanti?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_it-IT.mp3"
          },
          "ca-ES": {
            text: "Purpurina? És aquesta la clau secreta per als diamants?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Sclipici? Acesta este codul secret pentru diamante?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Purpurina? É esa a clave secreta para os diamantes?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_gl-ES.mp3"
          },
          "oc-FR": {
            text: "De belugas? Es aquel lo mot de pass secret per los diamants?",
            stageDirection: "Emocionado",
            audioUrl: "/audio/s1/s1_l6_gl-ES.mp3"
          },
          "de-DE": {
            text: "Glitzer? Ist das etwa das Codewort für die Diamanten?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_de-DE.mp3"
          },
          "de-CH": {
            text: "Glitzer? Isch das öppe s Gheimwort für d Diamante?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_de-CH.mp3"
          },
          "nl-NL": {
            text: "Glitter? Is dat soms de geheime code voor de diamanten?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Glitter? Er det kodenavnet for diamantene?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Glitter? Är det kodordet för diamanterna?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_sv-SE.mp3"
          },
          "da-DK": {
            text: "Glitter? Er det kodenavnet for diamanterne?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_da-DK.mp3"
          },
          "ru-RU": {
            text: "С блёстками? Это кодовое слово для алмазов?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_ru-RU.mp3"
          },
          "uk-UA": {
            text: "З блискітками? Це кодове слово для діамантів?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Brokat? Czy to tajny kryptonim dla diamentów?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Třpytky? To je tajné heslo pro ty diamanty?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Šljokice? Je li to tajna šifra za dijamante?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Kimalletta? Onko se timanttien salainen koodinimi?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Csillám? Ez a gyémántok titkos kódja?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Purpurina? Hori al da diamanteentzako gako sekretua?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Simli mi? Bu elmaslar için gizli bir şifre mi?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_tr-TR.mp3"
          },
          "ja-JP": {
            text: "ラメだと！？まさかそれがダイヤモンドの暗号コードなのか！？",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "闪粉？！这是走私钻石的特工暗号吗？！",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "閃令令？！唔通用閃粉做鑽石嘅特工暗號？！",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_yue-HK.mp3"
          },
          "ko-KR": {
            text: "반짝이요? 그게 다이아몬드를 뜻하는 비밀 암호인가요?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_ko-KR.mp3"
          },
          "ar-XA": {
            text: "بريق لامع؟ هل هذه هي الشفرة السرية الخاصة بالألماس؟",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_ar-XA.mp3"
          },
          "he-IL": {
            text: "נצנצים? זו מילת הקוד הסודית ליהלומים?",
            stageDirection: "Ojos desorbitados",
            audioUrl: "/audio/s1/s1_l6_he-IL.mp3"
          },
          "es-VE": {
            text: "¡Don Ramón! ¿Y qué lleva usted en ese misterioso perol verde?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_es-VE.mp3"
          },
          "es-CL": {
            text: "¡Don Ramón! ¿Y qué lleva en esa bolsa verde tan misteriosa?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_es-CL.mp3"
          },
          "es-PE": {
            text: "¡Don Ramón! ¿Y qué lleva en ese misterioso bulto verde?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_es-PE.mp3"
          },
          "es-CU": {
            text: "¡Don Ramón! ¿Y qué tiene metido en ese misterioso bulto verde?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_es-CU.mp3"
          },
          "es-GQ": {
            text: "¡Don Ramón! ¿Y qué lleva en ese misterioso bulto verde?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_es-GQ.mp3"
          },
          "en-US": {
            text: "Glitter? Is that the secret code name for the diamonds?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-US.mp3"
          },
          "en-GB": {
            text: "Glitter? Is that the secret code name for the diamonds?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Glitter? Is that the secret code for diamonds?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Glitter? Now is that the secret code word for diamonds?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-US-south.mp3"
          },
          "en-IE": {
            text: "Glitter? Is that the undercover code name for diamonds?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-IE.mp3"
          },
          "en-AU": {
            text: "Glitter? Is that the secret code for diamonds, cobber?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-AU.mp3"
          },
          "en-NZ": {
            text: "Glitter? Is that the secret code for the diamonds, bro?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Glitter? Is that the secret code for diamonds, bru?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-ZA.mp3"
          },
          "en-NG": {
            text: "Glitter? Shey that na the secret code for diamonds be that?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-NG.mp3"
          },
          "en-IN": {
            text: "Glitter? Is that the top-secret code name for the diamonds?",
            stageDirection: "Intrigued",
            audioUrl: "/audio/s1/s1_l6_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Glitters? Is dat de geheime code voor de diamanten?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "亮晶晶？這是鑽石的秘密暗號嗎？",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_zh-TW.mp3"
          },
          "hi-IN": {
            text: "चमकीला? क्या यह हीरों का गुप्त कोडवर्ड है?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_hi-IN.mp3"
          },
          "ur-PK": {
            text: "چمکتا ہوا؟ کیا یہ ہیروں کا خفیہ کوڈ ورڈ ہے؟",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ur-PK.mp3"
          },
          "bn-IN": {
            text: "চকচকে? ওটা কি হিরের গোপন সংকেত?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਚਮਕੀਲਾ? ਕੀ ਇਹ ਹੀਰਿਆਂ ਲਈ ਗੁਪਤ ਕੋਡਵਰਡ ਹੈ?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_pa-IN.mp3"
          },
          "gu-IN": {
            text: "ચમકતો? શું આ હીરા માટેનો ગુપ્ત કોડવર્ડ છે?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_gu-IN.mp3"
          },
          "mr-IN": {
            text: "चकाकणारी? हा हिऱ्यांसाठीचा गुप्त सांकेतिक शब्द आहे का?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_mr-IN.mp3"
          },
          "ta-IN": {
            text: "மினுமினுப்பா? அது வைரங்களுக்கான ரகசிய குறியீட்டு வார்த்தையா?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ta-IN.mp3"
          },
          "te-IN": {
            text: "మెరిసేదా? వజ్రాలకు ఇది ఏమైనా రహస్య కోడ్ పదమా?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಹೊಳೆಯುವುದೇ? ಅದು ವಜ್ರಗಳ ರಹಸ್ಯ ಸಂಕೇತ ಪದವೇ?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_kn-IN.mp3"
          },
          "ml-IN": {
            text: "തിളങ്ങുന്നതോ? ഇത് രത്നങ്ങൾക്കുള്ള രഹസ്യ കോഡ് വാക്കാണോ?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Lấp lánh ư? Đó có phải là mật mã ám chỉ kim cương không?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_vi-VN.mp3"
          },
          "th-TH": {
            text: "กากเพชรเหรอ? นั่นเป็นรหัสลับสำหรับเพชรใช่ไหม?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_th-TH.mp3"
          },
          "id-ID": {
            text: "Berkilau? Apa itu kode rahasia untuk berlian?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_id-ID.mp3"
          },
          "ms-MY": {
            text: "Berkilat? Adakah itu kata laluan rahsia untuk berlian?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Kung'aa? Je, hilo ndilo neno la siri la almasi?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Mimbi? Péva piko hína pe ñe'ẽ ñemi itavera rehegua?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¿Lliphipipaq? ¿Chaychu pakay simi qori qollqepaq?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¿Khankiri? ¿Ukati wajra qullqinakatak imat arü?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¿Petlani? ¿Inon in ichtaca tlahtolli ipan teocuitlapilli?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_nah-MX.mp3"
          },
          "nv-US": {
            text: "Disxǫsígíísh? Éísh tʼáadoo bą́ą́h ílíní óola bízhiʼ átʼé?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_nv-US.mp3"
          }
        }
      },
      {
        id: "s1_l7",
        characterId: "don_ramon",
        defaultStageDirection: "Ajustándose la gorra hacia atrás",
        expression: "cheerful",
        translations: {
          "fr-CH": {
            text: "Non, jeune homme. C'est ma tenue d'entraînement pour mon cours de hip-hop.",
            stageDirection: "En riant",
            audioUrl: "/audio/s1/s1_l7_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Non, gamin ! C'est ma tenue pour mon cours de hip-hop.",
            stageDirection: "En riant",
            audioUrl: "/audio/s1/s1_l7_fr-BE.mp3"
          },
          "es-ES": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_es-ES.mp3"
          },
          "el-GR": {
            text: "Όχι, φίλε μου. Είναι τα ρούχα προπόνησής μου για το μάθημα χιπ-χοπ.",
            stageDirection: "Γυρίζοντας το καπέλο του προς τα πίσω",
            audioUrl: "/audio/s1/s1_l7_el-GR.mp3"
          },
          "es-MX": {
            text: "No, chavo. Es mi ropa deportiva para la clase de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_es-MX.mp3"
          },
          "es-AR": {
            text: "No, pibe. Es mi ropa para la clase de hip-hop de las cuatro.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_es-AR.mp3"
          },
          "es-DO": {
            text: "¡Qué diamante ni qué diamante! Es mi pinta bacana pa la clase de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_es-DO.mp3"
          },
          "es-PR": {
            text: "¡Qué diamantes ná! Es mi ajuar pa la clase de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_es-PR.mp3"
          },
          "es-CO": {
            text: "No, mijo. Es mi muda para la clase de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_es-CO.mp3"
          },
          "fr-FR": {
            text: "Mais non, mon gars ! C'est ma tenue de scène pour mon cours de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Pantoute, mon jeune ! C'est mon linge pour mon cours de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Non mon petit ! C'est ma tenue swag pour le cours de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Que nada, garoto! É meu figurino estiloso pra aula de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Não, rapaz. É o meu equipamento para a aula de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_pt-PT.mp3"
          },
          "it-IT": {
            text: "Ma no, ragazzo! È il mio completo per il corso di hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_it-IT.mp3"
          },
          "ca-ES": {
            text: "No, xaval. És la meva roba d'entrenament per a la classe de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Nu, băiete. E costumul meu pentru cursul de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Non, rapaz. É a miña roupa para a clase de hip-hop.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Non pas, gojat! Es mon vestit d'entraïnament per lo cors de hip-hop.",
            stageDirection: "Sonriendo",
            audioUrl: "/audio/s1/s1_l7_gl-ES.mp3"
          },
          "de-DE": {
            text: "Nein, Junge. Das ist mein Outfit für meinen Hip-Hop-Tanzkurs.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_de-DE.mp3"
          },
          "de-CH": {
            text: "Nei, Bueb. Das isch mis Outfit für de Hip-Hop-Tanzkurs.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_de-CH.mp3"
          },
          "nl-NL": {
            text: "Nee jochie. Dat is mijn outfit voor mijn hiphoples.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Nei, gutt. Det er antrekket mitt til hiphop-timen min.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Nej, grabben. Det är min outfit för hiphop-dansen.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_sv-SE.mp3"
          },
          "da-DK": {
            text: "Nej, knægt. Det er mit tøj til hiphop-timen.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_da-DK.mp3"
          },
          "ru-RU": {
            text: "Да брось, парень! Это мой блестящий костюм для занятий хип-хопом.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Та ні, хлопче! Це мій яскравий костюм для занять із хіп-хопу.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Nie, chłopcze. To mój strój na zajęcia z hip-hopu.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Ale kdepak, chlapče. To je můj kostým na lekci hip-hopu.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Ma ne, mladiću. To je moja oprema za tečaj hip-hopa.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Ei suinkaan, poika. Se on asuni hiphop-tunnilleni.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Dehogy, fiam. Ez a fellépőruhám a hip-hop órára.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Ez, motel. Nire hip-hop eskolako entrenamenduko arropa da.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Hayır delikanlı. O benim hip-hop dans dersi kıyafetim.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_tr-TR.mp3"
          },
          "ja-JP": {
            text: "ちがうよ坊主！ワシのヒップホップダンス教室用のキラキラ衣装だよ！",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "你想多了小伙子！那是我去上嘻哈街舞课的亮片战袍！",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "你想多咗喇後生仔！嗰套係我去上Hip-Hop街舞班嘅戰衣呀！",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_yue-HK.mp3"
          },
          "ko-KR": {
            text: "아니란다, 얘야. 이건 내 힙합 댄스 강습용 반짝이 의상이란다.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_ko-KR.mp3"
          },
          "ar-XA": {
            text: "لا يا بني. هذا طقم الرقص الخاص بي لحصة الهيب هوب.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_ar-XA.mp3"
          },
          "he-IL": {
            text: "לא, ילד. אלו הבגדים שלי לשיעור היפ-הופ.",
            stageDirection: "Ajustándose la gorra hacia atrás",
            audioUrl: "/audio/s1/s1_l7_he-IL.mp3"
          },
          "es-VE": {
            text: "Tres kilos de churros recién salidos para mis nietos. ¿Quieren uno?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_es-VE.mp3"
          },
          "es-CL": {
            text: "Tres kilos de churros recién hechos para mis nietos. ¿Quieren probar?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_es-CL.mp3"
          },
          "es-PE": {
            text: "Tres kilos de churros recién saliditos para mis nietos. ¿Se les antoja uno?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_es-PE.mp3"
          },
          "es-CU": {
            text: "Tres libras de churros calienticos para mis nietos. ¿Quieren uno?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_es-CU.mp3"
          },
          "es-GQ": {
            text: "Tres kilos de churros recién hechos para mis nietos. ¿Gustan uno?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_es-GQ.mp3"
          },
          "en-US": {
            text: "No, kiddo. That's my dance gear for my hip-hop class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-US.mp3"
          },
          "en-GB": {
            text: "No, lad. That's my workout kit for my hip-hop class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "No, laddie. That's ma trackie for ma hip-hop dance class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "No, son. That's just my workout outfit for my hip-hop dance class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-US-south.mp3"
          },
          "en-IE": {
            text: "Not at all, lad. That's me gear for the hip-hop class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-IE.mp3"
          },
          "en-AU": {
            text: "Nah, mate. That's me dance gear for hip-hop class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-AU.mp3"
          },
          "en-NZ": {
            text: "Nah, bro. That's my gear for hip-hop class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-NZ.mp3"
          },
          "en-ZA": {
            text: "No, boet. That's my gear for my hip-hop class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-ZA.mp3"
          },
          "en-NG": {
            text: "No, my boy. Na my dance wear for hip-hop class dey inside!",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-NG.mp3"
          },
          "en-IN": {
            text: "No, beta! That is simply my workout outfit for my hip-hop dance class.",
            stageDirection: "Laughing",
            audioUrl: "/audio/s1/s1_l7_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Nee, manneke. Het is mijn trainingskleren voor de hiphoples.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "才不是呢，小鬼。那是我上嘻哈舞蹈課的運動服。",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_zh-TW.mp3"
          },
          "hi-IN": {
            text: "नहीं बच्चे। यह हिप-हॉप डांस क्लास के लिए मेरी ट्रेनिंग की पोशाक है।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_hi-IN.mp3"
          },
          "ur-PK": {
            text: "نہیں میاں۔ یہ میری ہپ ہاپ کلاس کے لیے ٹریننگ کا لباس ہے۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ur-PK.mp3"
          },
          "bn-IN": {
            text: "আরে না খোকা। এটা হিপ-হপ ক্লাসের জন্য আমার নাচের পোশাক।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਨਹੀਂ ਕਾਕਾ। ਇਹ ਹਿੱਪ-ਹੌਪ ਡਾਂਸ ਕਲਾਸ ਲਈ ਮੇਰੀ ਪੁਸ਼ਾਕ ਹੈ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_pa-IN.mp3"
          },
          "gu-IN": {
            text: "ના બેટા. આ મારા હિપ-હોપ ડાન્સ ક્લાસનો ડ્રેસ છે.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_gu-IN.mp3"
          },
          "mr-IN": {
            text: "अरे नाही पोरा. हा माझ्या हिप-हॉप डान्स क्लासचा सराव पोषाख आहे.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_mr-IN.mp3"
          },
          "ta-IN": {
            text: "இல்லை தம்பி. இது என் ஹிப்-ஹாப் நடனப் பயிற்சிக்கான உடை.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ta-IN.mp3"
          },
          "te-IN": {
            text: "కాదు బాబు. ఇది నా హిప్-హాప్ డ్యాన్స్ క్లాస్ కోసం ప్రాక్టీస్ డ్రెస్.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಅಲ್ಲ ಕಂದ. ಇದು ನನ್ನ ಹಿಪ್-ಹಾಪ್ ನೃತ್ಯ ತರಗತಿಯ ತಾಲೀಮು ಉಡುಪು.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_kn-IN.mp3"
          },
          "ml-IN": {
            text: "അല്ല കുട്ടാ. ഇത് എന്റെ ഹിപ്-ഹോപ്പ് ഡാൻസ് ക്ലാസിനുള്ള പരിശീലന വസ്ത്രമാണ്.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Không đâu, nhóc. Đó là đồ tập cho lớp nhảy hip-hop của tôi thôi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_vi-VN.mp3"
          },
          "th-TH": {
            text: "ไม่ใช่หรอกไอ้หนู นั่นชุดซ้อมเต้นฮิปฮอปของพี่ต่างหาก",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_th-TH.mp3"
          },
          "id-ID": {
            text: "Bukan, bocah. Itu baju latihanku untuk kelas hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_id-ID.mp3"
          },
          "ms-MY": {
            text: "Bukanlah, adik. Itu baju latihan saya untuk kelas hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Hapana, dogo. Ni nguo zangu za mazoezi ya darasa la hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Nahániri, mitã'i. Péva hína che ao ajeroky hag̃ua hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Manan, maqt'a. Chayqa hip-hop tusuyta yachanaypaq p'achaymi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Janiwa, yuqalla. Ukaxa hip-hop thuqt'awi yatiqañataki isijawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Amo, telpochtli. Inon notlaquemitl ic nimomachtia mitotiliztli hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_nah-MX.mp3"
          },
          "nv-US": {
            text: "Dooda, ashkiichílító. Éí díí daʼałzhish biniyé shiyéʼ bił hazhóʼó yishłééh.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_nv-US.mp3"
          }
        }
      },
    ]
  },
  {
    id: "story_2",
    title: "El Pedido Literal",
    subtitle: "Don Ramón + Bea",
    characters: ["don_ramon", "bea"],
    conflictType: "Don Ramón pide algo absurdo y Bea lo ejecuta de forma literal.",
    vocabularyTheme: "Comida, bebidas, restaurantes, números y direcciones.",
    lines: [
      {
        id: "s2_l1",
        characterId: "don_ramon",
        defaultStageDirection: "Golpeando la barra con estilo",
        expression: "cheerful",
        translations: {
          "fr-CH": {
            text: "Bonjour mademoiselle ! Je veux un café si corsé qu'il me réveille en 1985, avec un soupçon de danger.",
            stageDirection: "Théâtral",
            audioUrl: "/audio/s2/s2_l1_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Bonjour mademoiselle ! Je voudrais un café si fort qu'il me réveille en 1985, avec une pointe de danger.",
            stageDirection: "Théâtral",
            audioUrl: "/audio/s2/s2_l1_fr-BE.mp3"
          },
          "es-ES": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_es-ES.mp3"
          },
          "el-GR": {
            text: "Καλησπέρα, δεσποινίς! Θέλω έναν καφέ τόσο δυνατό που να με ξυπνήσει στο 1985, και με μια δόση κινδύνου.",
            stageDirection: "Χτυπώντας τον πάγκο με στιλ",
            audioUrl: "/audio/s2/s2_l1_el-GR.mp3"
          },
          "es-MX": {
            text: "¡Qué tal, señorita! Prepárame un café bien cargado que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_es-MX.mp3"
          },
          "es-AR": {
            text: "¡Buenas tardes! Preparame un café tan fuerte que me despierte en 1985, y con una pizca de peligro.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_es-AR.mp3"
          },
          "es-DO": {
            text: "¡Dímelo mi reina! Dame un café bien prieto que me despierte en 1985, y con un chin de peligro.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_es-DO.mp3"
          },
          "es-PR": {
            text: "¡Buenas tardes, corazón! Dame un café bien negro que me transporte a 1985, y con un toque de peligro.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_es-PR.mp3"
          },
          "es-CO": {
            text: "¡Buenas tardes, señorita! Por favor un café bien cargado que me despierte en 1985, y con algo de peligro.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_es-CO.mp3"
          },
          "fr-FR": {
            text: "Bonjour mademoiselle ! Je veux un café si fort qu'il me réveille en 1985, avec une touche de danger.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Salut la grande ! Fais-moi un café assez fort pour me réveiller en 1985, pis rajoute une pointe de danger.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Bonjour ma petite dame ! Donne-moi un café bien serré qui va me réveiller en 1985, avec un peu de danger dedans.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Boa tarde, moça! Quero um café tão forte que me acorde em 1985, com uma pitada de perigo.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Boa tarde, menina! Quero um café tão forte que me faça acordar em 1985, e com um toque de perigo.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_pt-PT.mp3"
          },
          "it-IT": {
            text: "Buon pomeriggio, signorina! Vorrei un caffè così forte da svegliarmi nel 1985, e con un tocco di pericolo.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_it-IT.mp3"
          },
          "ca-ES": {
            text: "Bona tarda, senyoreta! Vull un cafè tan fort que em desperti el 1985, i amb un toc de perill.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Bună ziua, domnișoară! Vreau o cafea atât de tare încât să mă trezească în 1985, și cu un strop de pericol.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Boas tardes, señorita! Quero un café tan forte que me desperte en 1985, e cun toque de perigo.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Bonsir, domaisèla! Vòli un cafè tant fòrt que me desvelhe en 1985, e amb un briconet de dangièr.",
            stageDirection: "Dramático",
            audioUrl: "/audio/s1/s2_l1_gl-ES.mp3"
          },
          "de-DE": {
            text: "Guten Tag, junge Dame! Ich hätte gerne einen Kaffee, so stark, dass er mich 1985 aufweckt – und mit einem Hauch von Gefahr.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_de-DE.mp3"
          },
          "de-CH": {
            text: "Grüezi, jungi Dame! Ich wett en Kafi wo so starch isch, dass er mi im 1985 weckt – und mit echli Gfahr.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_de-CH.mp3"
          },
          "nl-NL": {
            text: "Goedemiddag jongedame! Ik wil een koffie die zó sterk is dat hij me wakker maakt in 1985, met een vleugje gevaar.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_nl-NL.mp3"
          },
          "nb-NO": {
            text: "God dag, frøken! Jeg vil ha en kaffe som er så sterk at jeg våkner i 1985, og med et snev av fare.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_nb-NO.mp3"
          },
          "sv-SE": {
            text: "God eftermiddag, unga dam! Jag vill ha ett kaffe som är så starkt att jag vaknar 1985, med en nypa fara.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_sv-SE.mp3"
          },
          "da-DK": {
            text: "Goddag, unge dame! Jeg vil gerne have en kaffe, der er så stærk, at den vækker mig i 1985, og med et strejf af fare.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_da-DK.mp3"
          },
          "ru-RU": {
            text: "Добрый день, барышня! Мне кофе настолько крепкий, чтобы я проснулся в 1985 году, и с ноткой опасности.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Доброго дня, панночко! Мені каву настільки міцну, щоб я прокинувся у 1985 році, і з краплею небезпеки.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Dzień dobry, panienko! Poproszę kawę tak mocną, żeby obudziła mnie w 1985 roku, i z nutką niebezpieczeństwa.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Dobrý den, slečno! Chtěl bych kávu tak silnou, aby mě probudila v roce 1985, a s trochou nebezpečí.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Dobar dan, gospođice! Želim kavu toliko jaku da me probudi u 1985. godini, i s dozom opasnosti.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Hyvää iltapäivää, neiti! Haluaisin kahvin, joka on niin vahvaa että herään vuonna 1985, ja ripauksella vaaraa.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Jó napot, kisasszony! Olyan erős kávét kérek, ami 1985-ben ébreszt fel, és legyen benne egy csipetnyi veszély.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Arratsalde on, andereño! 1985ean esnatuko nauen bezain kafe sendoa nahi dut, eta arrisku puntu batekin.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Tünaydın küçük hanım! Beni 1985'te uyandıracak kadar sert bir kahve istiyorum, yanında da biraz tehlike olsun.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_tr-TR.mp3"
          },
          "ja-JP": {
            text: "お嬢さん、こんにちは！1985年に目が覚めるくらい濃いコーヒーをくれ。危険のスパイス付きでな！",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "下午好姑娘！给我来一杯特浓咖啡，猛到能把我送回1985年，还要带一点危险的感觉。",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "下晝好呀靚女！唔該俾杯勁到可以叫醒1985年嘅我嘅特濃咖啡，仲要帶少少危險氣息。",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_yue-HK.mp3"
          },
          "ko-KR": {
            text: "아가씨, 안녕하세요! 1985년에 잠에서 깰 정도로 아주 진한 커피 한 잔 주시오. 약간의 위험을 곁들여서!",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_ko-KR.mp3"
          },
          "ar-XA": {
            text: "مساء الخير يا آنسة! أريد قهوة قوية لدرجة أن توقظني في عام 1985، مع لمسة من الخطر.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_ar-XA.mp3"
          },
          "he-IL": {
            text: "אחר הצהריים טובים, גברתי! אני רוצה קפה כל כך חזק שיעיר אותי ב-1985, ועם קורטוב של סכנה.",
            stageDirection: "Golpeando la barra con estilo",
            audioUrl: "/audio/s2/s2_l1_he-IL.mp3"
          },
          "es-VE": {
            text: "Buenos días, señorita. Me gustaría un negrito solo, pero sin apuro y bien caliente.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_es-VE.mp3"
          },
          "es-CL": {
            text: "Buen día, señorita. Me gustaría un café negro, pero bien caliente y sin apuro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_es-CL.mp3"
          },
          "es-PE": {
            text: "Buenos días, señorita. Quisiera un cafecito pasado, pero sin apuro y bien calientito.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_es-PE.mp3"
          },
          "es-CU": {
            text: "Buenos días, mi niña. Quisiera un cafecito negro, pero sin apuro y bien caliente.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_es-CU.mp3"
          },
          "es-GQ": {
            text: "Buenos días, señorita. Quisiera un café solo, pero sin prisa y bien caliente.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_es-GQ.mp3"
          },
          "en-US": {
            text: "Good afternoon, miss! I want a coffee so strong it wakes me up in 1985, and with a hint of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-US.mp3"
          },
          "en-GB": {
            text: "Good afternoon, miss! I'd like a coffee so strong it wakes me up in 1985, and with a dash of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Guid afternoon, lass! A want a coffee sae strong it wakes me in 1985, wi' a wee touch o' danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Afternoon, ma'am! I'd like a coffee so strong it wakes me up back in 1985, with a little touch of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-US-south.mp3"
          },
          "en-IE": {
            text: "Good afternoon, miss! I'd love a coffee so strong it'd wake me up in 1985, with a drop of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-IE.mp3"
          },
          "en-AU": {
            text: "G'day miss! Give us a coffee so strong it wakes me up in 1985, with a bit of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-AU.mp3"
          },
          "en-NZ": {
            text: "Good afternoon, miss! I want a flat white so strong it wakes me up in 1985, with a dash of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Afternoon, miss! Give me a coffee so strong it wakes me in 1985, with a lekker splash of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-ZA.mp3"
          },
          "en-NG": {
            text: "Good afternoon, madam! Give me strong coffee wey go wake me for 1985, with small danger join!",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-NG.mp3"
          },
          "en-IN": {
            text: "Good afternoon, miss! Give me one coffee so strong that it wakes me up in 1985, with a touch of danger.",
            stageDirection: "Theatrical",
            audioUrl: "/audio/s2/s2_l1_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Goeiemiddag, jongedame! Ik wil een koffie die zo sterk is dat hij me wakker schudt in 1985, en met een vleugje gevaar.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "下午好，小姑娘！給我來一杯濃到能讓我一覺醒在1985年的咖啡，而且要帶點危險的滋味。",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_zh-TW.mp3"
          },
          "hi-IN": {
            text: "नमस्ते बिटिया! मुझे इतनी कड़क कॉफ़ी चाहिए जो मुझे सीधे 1985 में जगा दे, और उसमें थोड़ा ख़तरे का अंदाज़ हो।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_hi-IN.mp3"
          },
          "ur-PK": {
            text: "دوپہر بخیر، محترمہ! مجھے اتنی تیز کافی چاہیے جو مجھے 1985 میں جگا دے، اور ذرا خطرے کی آمیزش کے ساتھ۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ur-PK.mp3"
          },
          "bn-IN": {
            text: "নমস্কার দিদিমণি! এমন কড়া কফি চাই যা আমাকে সোজা ১৯৮৫ সালে জাগিয়ে তুলবে, আর তাতে একটু বিপদের ছোঁয়া থাকবে।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਕੁੜੀਏ! ਮੈਨੂੰ ਏਨੀ ਕੜਕ ਕੌਫ਼ੀ ਚਾਹੀਦੀ ਹੈ ਜੋ ਮੈਨੂੰ 1985 ਵਿੱਚ ਜਗਾ ਦੇਵੇ, ਅਤੇ ਨਾਲ ਥੋੜ੍ਹਾ ਖ਼ਤਰੇ ਦਾ ਸੁਆਦ ਹੋਵੇ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_pa-IN.mp3"
          },
          "gu-IN": {
            text: "નમસ્તે દીકરી! મારે એવી કડક કૉફી જોઈએ છે જે મને 1985માં જગાડે, અને સાથે થોડો જોખમનો અહેસાસ હોય.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_gu-IN.mp3"
          },
          "mr-IN": {
            text: "शुभ दुपार, मुली! मला असा कडक कॉफी हवा आहे जो मला थेट १९८५ मध्ये जागे करेल, आणि त्यात थोडा धोक्याचा थरार असावा.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_mr-IN.mp3"
          },
          "ta-IN": {
            text: "வணக்கம் பெண்ணே! என்னை 1985-ல் விழிக்க வைக்கும் அளவுக்கு ஸ்ட்ராங்கான, கொஞ்சம் ஆபத்தான காபி வேண்டும்.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ta-IN.mp3"
          },
          "te-IN": {
            text: "నమస్కారం అమ్మాయ్! నన్ను 1985లో మేల్కొలిపేంత స్ట్రాంగ్ కాఫీ కావాలి, కాస్త ప్రమాదకరమైన రుచితో.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_te-IN.mp3"
          },
          "kn-IN": {
            text: "ನಮಸ್ಕಾರ ಹುಡುಗಿ! ನನ್ನನ್ನು 1985 ರಲ್ಲಿ ಎಬ್ಬಿಸುವಂತಹ ಕಟುವಾದ ಕಾಫಿ ಬೇಕು, ಜೊತೆಗೆ ಸ್ವಲ್ಪ ಸಾಹಸದ ಸ್ಪರ್ಶವಿರಲಿ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ഗുഡ് ആഫ്റ്റർനൂൺ പെൺകുട്ടീ! എന്നെ 1985-ൽ ഉണർത്തുന്ന അത്ര കടുപ്പമുള്ള ഒരു കോഫി വേണം, ഒപ്പം അല്പം അപകടത്തിന്റെ രസവും.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Chào buổi chiều, cô gái! Cho tôi một ly cà phê đậm đến mức có thể đánh thức tôi ở năm 1985, và thêm chút hiểm nguy nhé.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_vi-VN.mp3"
          },
          "th-TH": {
            text: "สวัสดีตอนบ่ายจ้ะแม่หนู! ขอกาแฟเข้มๆ แบบที่ดื่มแล้วตื่นไปโผล่ปี 1985 เลยนะ แล้วก็ขอรสชาติอันตรายนิดๆ ด้วย",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_th-TH.mp3"
          },
          "id-ID": {
            text: "Selamat siang, Nona! Saya mau kopi yang begitu kuat sampai bisa membangunkanku di tahun 1985, dengan sedikit sensasi bahaya.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_id-ID.mp3"
          },
          "ms-MY": {
            text: "Selamat petang, cik! Saya mahu kopi yang cukup pekat sampai boleh kejutkan saya pada tahun 1985, dengan sedikit rasa bahaya.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Habari za mchana, binti! Ninataka kahawa kali itakayoniamsha mwaka 1985, ikiwa na chembe ya hatari.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Ka'aru porã, kuñataĩ! Aipota peteĩ café imbaretéva che mombáy hag̃ua 1985-pe, ha michĩmi kyhyje reheve.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¡Allin sukha kachun, sipas! Sinchi q'oñi caféta munani 1985 watapi rijch'ariwananpaq, manchaywan kuska.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¡Aski jayp'ukipan, tawaqu! Mä ch'ama cafe muntha 1985 marana sartanitapata, jisk'a axsarkañampi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¡Cualli teotlac, ichpuchtli! Nicnequi ce café cenca chicahuac tlen nechizcaltiz ipan 1985, ihuan ica ce tlamahuizolli.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_nah-MX.mp3"
          },
          "nv-US": {
            text: "Yáʼátʼééh ałníʼíníłį́įgo, chʼikę́ę́h! Gohwééh bidziilgo nisin 1985góó chʼéénísííd dooleeł, dóó tʼóó kóníshghánígo nééldzidí bił.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_nv-US.mp3"
          }
        }
      },
      {
        id: "s2_l2",
        characterId: "bea",
        defaultStageDirection: "Sonriendo alegremente con su libreta",
        expression: "literal",
        translations: {
          "fr-CH": {
            text: "Tout de suite ! Un café brûlant posé pile au bord de la table et un réveil réglé sur il y a quarante ans.",
            stageDirection: "Ironique",
            audioUrl: "/audio/s2/s2_l2_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Ça roule ! Un café bouillant servi tout juste au bord de la table et un réveil programmé il y a quarante ans.",
            stageDirection: "Ironique",
            audioUrl: "/audio/s2/s2_l2_fr-BE.mp3"
          },
          "es-ES": {
            text: "¡Marchando! Un café hirviendo servido justo en el filo de la mesa y un despertador programado hace cuarenta años.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_es-ES.mp3"
          },
          "el-GR": {
            text: "Έφτασε αμέσως! Ένας καυτός καφές σερβιρισμένος ακριβώς στην άκρη του τραπεζιού και ένα ξυπνητήρι ρυθμισμένο πριν από σαράντα χρόνια.",
            stageDirection: "Χαμογελώντας πρόσχαρα με το σημειωματάριό της",
            audioUrl: "/audio/s2/s2_l2_el-GR.mp3"
          },
          "es-MX": {
            text: "¡Sale y vale! Un café hirviendo servido en la mera orilla de la mesa y un despertador programado hace cuarenta años.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_es-MX.mp3"
          },
          "es-AR": {
            text: "¡Al instante! Un café hirviendo puesto al borde de la mesa y un despertador programado hace cuarenta años.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_es-AR.mp3"
          },
          "es-DO": {
            text: "¡A la orden! Un café hirviendo al mismito borde de la mesa y un despertador de hace cuarenta años.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_es-DO.mp3"
          },
          "es-PR": {
            text: "¡A la orden! Un café hirviendo en la orillita de la mesa y un reloj despertador de hace cuarenta años.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_es-PR.mp3"
          },
          "es-CO": {
            text: "¡Con mucho gusto! Un café hirviendo en el borde de la mesa y un despertador programado hace cuarenta años.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_es-CO.mp3"
          },
          "fr-FR": {
            text: "C'est parti ! Un café brûlant posé au bord du précipice de la table et un réveil réglé sur 1985.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_fr-FR.mp3"
          },
          "fr-CA": {
            text: "C'est comme si c'était fait ! Un café bouillant accoté sur le bord de la table pis un cadran réglé sur 1985.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Y'a pas de problème ! Un café chaud qui brûle au bord de la table là, et un réveil d'il y a quarante ans.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_fr-CI.mp3"
          },
          "pt-BR": {
            text: "É pra já! Um café fervendo na beiradinha da mesa e um despertador programado para quarenta anos atrás.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Com certeza! Um café a ferver na beirinha da mesa e um despertador afinado para há quarenta anos.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_pt-PT.mp3"
          },
          "it-IT": {
            text: "Arriva subito! Un caffè bollente servito proprio sul ciglio del tavolo e una sveglia impostata a quarant'anni fa.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_it-IT.mp3"
          },
          "ca-ES": {
            text: "Tot seguit! Un cafè bullint servit just a la vora de la taula i un despertador programat fa quaranta anys.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_ca-ES.mp3"
          },
          "ro-RO": {
            text: "S-a făcut! O cafea clocotită servită chiar pe marginea mesei și un ceas deșteptător setat acum patruzeci de ani.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Xa mesmo! Un café fervendo servido xusto no bordo da mesa e un espertador programado hai corenta anos.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Òc plan! Un cafè bolhent servit just al caire de la taula e un revelh reglat fa quaranta ans.",
            stageDirection: "Burlona",
            audioUrl: "/audio/s1/s2_l2_gl-ES.mp3"
          },
          "de-DE": {
            text: "Kommt sofort! Kochend heißer Kaffee direkt an der Tischkante und ein Wecker, gestellt auf vor vierzig Jahren.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_de-DE.mp3"
          },
          "de-CH": {
            text: "Chunnt sofort! Chochend heisse Kafi direkt an dr Tischchante und en Wecker, gstellt uf vor vierzg Jahr.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_de-CH.mp3"
          },
          "nl-NL": {
            text: "Komt voor elkaar! Kokend hete koffie precies op het randje van de tafel en een wekker gezet op veertig jaar geleden.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Det ordner jeg! Kokende varm kaffe helt ytterst på bordkanten og en vekkerklokke stilt inn på førti år siden.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Kommer genast! Skållhett kaffe serverat precis på kanten av bordet och en väckarklocka ställd på fyrtio år sedan.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_sv-SE.mp3"
          },
          "da-DK": {
            text: "Det klarer jeg! Kogende varm kaffe serveret lige på bordkanten og et vækkeur indstillet til for fyrre år siden.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_da-DK.mp3"
          },
          "ru-RU": {
            text: "Сию минуту! Кипящий кофе прямо на самом краю стола и будильник, заведённый на сорок лет назад.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Зараз зроблю! Кипляча кава прямо на самому краєчку столу й будильник, наведений на сорок років тому.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Robi się! Wrząca kawa postawiona na samym skraju stołu i budzik nastawiony na czterdzieści lat wstecz.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Hned to bude! Vařící káva servírovaná přesně na hraně stolu a budík nastavený na dobu před čtyřiceti lety.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Stiže odmah! Kipuća kava poslužena točno na rubu stola i budilica namještena na prije četrdeset godina.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Tulee heti! Kiehuvan kuumaa kahvia aivan pöydän reunalla ja herätyskello säädettynä neljänkymmenen vuoden päähän.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Máris intézem! Tűzforró kávé pontosan az asztal legszélén, és egy negyven évvel ezelőttre beállított ébresztőóra.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Banoa! Kafe irakiten mahai ertze-ertzean zerbitzatua eta duela berrogei urte programatutako iratzargailua.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Hemen geliyor! Masanın tam kenarına konmuş kaynar bir kahve ve kırk yıl öncesine ayarlanmış bir çalar saat.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_tr-TR.mp3"
          },
          "ja-JP": {
            text: "かしこまりました！テーブルのギリギリの端に置く熱湯コーヒーと、40年前に合わせた目覚まし時計ですね！",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "好的马上来！一杯摆在桌子边缘随时会掉的滚烫咖啡，外加一个调到四十年前的闹钟！",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "收到即刻嚟！一杯擺喺枱邊隨時跌落嚟嘅滾水咖啡，加個校到去四十年前嘅鬧鐘！",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_yue-HK.mp3"
          },
          "ko-KR": {
            text: "주문 접수 완료입니다! 테이블 아슬아슬한 모서리에 놓인 펄펄 끓는 커피와 40년 전으로 맞춘 자명종입니다!",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_ko-KR.mp3"
          },
          "ar-XA": {
            text: "حاضر فوراً! قهوة تغلي موضوعة على حافة الطاولة تماماً، ومنبه مضبوط على أربعين عاماً مضت.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_ar-XA.mp3"
          },
          "he-IL": {
            text: "ההזמנה יוצאת לדרך! קפה רותח מוגש ממש על קצה השולחן, ושעון מעורר שמכוון לארבעים שנה אחורה.",
            stageDirection: "Sonriendo alegremente con su libreta",
            audioUrl: "/audio/s2/s2_l2_he-IL.mp3"
          },
          "es-VE": {
            text: "¡De una! Un negrito solo... ¿Quiere que le sirva también un poco de cháchara?",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_es-VE.mp3"
          },
          "es-CL": {
            text: "¡Al tiro! Un café negro... ¿Le tinca un poco de conversa también?",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_es-CL.mp3"
          },
          "es-PE": {
            text: "¡Al toque! Un café pasado... ¿Gusta que le añada un poco de conversación?",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_es-PE.mp3"
          },
          "es-CU": {
            text: "¡Al momento! Un cafecito... ¿Quiere que le eche también un poco de muela?",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_es-CU.mp3"
          },
          "es-GQ": {
            text: "¡Enseguida! Un café solo... ¿Quiere también un poco de conversación?",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_es-GQ.mp3"
          },
          "en-US": {
            text: "Coming right up! One scalding coffee served right on the precipice of the table, and an alarm clock set for forty years ago.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-US.mp3"
          },
          "en-GB": {
            text: "Coming right up! One piping-hot coffee balanced on the edge of the table, and an alarm clock set for forty years ago.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Right awa'! A pipin' hot coffee right on the edge o' the table, and an alarm clocked forty years syne.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Order up! One piping-hot coffee served right on the edge of the table, and an alarm clock set forty years back.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-US-south.mp3"
          },
          "en-IE": {
            text: "Right away! A scalding hot coffee teetering on the edge of the table, and an alarm clock set forty years ago.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-IE.mp3"
          },
          "en-AU": {
            text: "Too easy! One piping hot cuppa right on the edge of the table, and an alarm clock set for forty years back.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-AU.mp3"
          },
          "en-NZ": {
            text: "Sweet as! One piping hot coffee balanced right on the edge of the table, and an alarm clock set for forty years ago.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Sharp sharp! One scalding hot coffee on the edge of the table, and an alarm clock set forty years ago.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-ZA.mp3"
          },
          "en-NG": {
            text: "Sharp sharp! Hot coffee balanced for table edge, with alarm clock from forty years ago!",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-NG.mp3"
          },
          "en-IN": {
            text: "Coming right up! One piping-hot coffee balanced on table edge, and an alarm clock set for forty years back.",
            stageDirection: "Sarcastic",
            audioUrl: "/audio/s2/s2_l2_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Komt in orde! Een gloeiend hete koffie op de rand van de tafel en een wekker ingesteld op veertig jaar geleden.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "馬上來！熱騰騰的咖啡放在桌邊邊，還有一個設定在四十年前的鬧鐘。",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_zh-TW.mp3"
          },
          "hi-IN": {
            text: "अभी आया! मेज़ के किनारे रखा खौलता हुआ कॉफ़ी और चालीस साल पहले का सेट किया हुआ अलार्म।",
            stageDirection: "व्यंग्य से",
            audioUrl: "/audio/s2/s2_l2_hi-IN.mp3"
          },
          "ur-PK": {
            text: "ابھی حاضر ہوا! میز کے کونے پر رکھا ہوا گرم گرم کافی اور چالیس سال پرانا الارم کلاک۔",
            stageDirection: "طنزیہ",
            audioUrl: "/audio/s2/s2_l2_ur-PK.mp3"
          },
          "bn-IN": {
            text: "এই যে একদম তৈরি! টেবিলের কিনারায় রাখা ফুটন্ত গরম কফি আর চল্লিশ বছর আগের অ্যালার্ম ঘড়ি।",
            stageDirection: "রসিকতার ছলে",
            audioUrl: "/audio/s2/s2_l2_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਲਓ ਜੀ ਹੁਣੇ ਆਇਆ! ਮੇਜ਼ ਦੇ ਬਿਲਕੁਲ ਕੰਢੇ ਰੱਖੀ ਉਬਲਦੀ ਕਾਫ਼ੀ ਅਤੇ ਚਾਲੀ ਸਾਲ ਪਹਿਲਾਂ ਦਾ ਅਲਾਰਮ।",
            stageDirection: "ਮਜ਼ਾਕੀਆ ਅੰਦਾਜ਼ 'ਚ",
            audioUrl: "/audio/s2/s2_l2_pa-IN.mp3"
          },
          "gu-IN": {
            text: "હમણાં જ લાવું! ટેબલની કિનારી પર મુકેલી ગરમાગરમ કૉફી અને ચાલીસ વર્ષ જૂનું એલાર્મ.",
            stageDirection: "મજાકમાં",
            audioUrl: "/audio/s2/s2_l2_gu-IN.mp3"
          },
          "mr-IN": {
            text: "लगेच आणते! टेबलच्या टोकावर ठेवलेली गरम कॉफी आणि चाळीस वर्षांपूर्वीचे अलार्म घड्याळ.",
            stageDirection: "हसत खेळत",
            audioUrl: "/audio/s2/s2_l2_mr-IN.mp3"
          },
          "ta-IN": {
            text: "இதோ தயார்! மேஜையின் நுனியில் வைக்கப்பட்ட சுடச்சுட காபி மற்றும் நாற்பது வருடங்களுக்கு முந்தைய அலாரம்.",
            stageDirection: "கிண்டலாக",
            audioUrl: "/audio/s2/s2_l2_ta-IN.mp3"
          },
          "te-IN": {
            text: "ఇప్పుడే వస్తుంది! బల్ల అంచున ఉంచిన వేడివేడి కాఫీ మరియు నలభై ఏళ్ల క్రితం అమర్చిన అలారం.",
            stageDirection: "హాస్యంగా",
            audioUrl: "/audio/s2/s2_l2_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಈಗಲೇ ತರುತ್ತೇನೆ! ಮೇಜಿನ ಅಂಚಿನಲ್ಲಿ ಇಟ್ಟಿರುವ ಬಿಸಿಬಿಸಿ ಕಾಫಿ ಮತ್ತು ನಲವತ್ತು ವರ್ಷಗಳ ಹಿಂದಿನ ಅಲಾರಾಂ.",
            stageDirection: "ವ್ಯಂಗ್ಯವಾಗಿ",
            audioUrl: "/audio/s2/s2_l2_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ഇതാ വരുന്നു! മേശയുടെ അരികിൽ വെച്ച തിളച്ച കാപ്പിയും നാൽപ്പത് വർഷം മുമ്പത്തെ അലാറം ക്ലോക്കും.",
            stageDirection: "പരിഹാസത്തോടെ",
            audioUrl: "/audio/s2/s2_l2_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Có ngay đây! Một ly cà phê nóng bỏng đặt sát mép bàn và chiếc đồng hồ báo thức hẹn từ bốn mươi năm trước.",
            stageDirection: "Hóm hỉnh",
            audioUrl: "/audio/s2/s2_l2_vi-VN.mp3"
          },
          "th-TH": {
            text: "จัดไปทันทีค่ะ! กาแฟร้อนจัดวางหมิ่นตรงขอบโต๊ะและนาฬิกาปลุกที่ตั้งไว้เมื่อสี่สิบปีก่อน.",
            stageDirection: "ประชดขำๆ",
            audioUrl: "/audio/s2/s2_l2_th-TH.mp3"
          },
          "id-ID": {
            text: "Siap meluncur! Kopi panas mendidih di ujung meja dan jam weker yang disetel empat puluh tahun lalu.",
            stageDirection: "Ironis",
            audioUrl: "/audio/s2/s2_l2_id-ID.mp3"
          },
          "ms-MY": {
            text: "Siap segera! Kopi panas mendidih di hujung meja dan jam loceng yang diset empat puluh tahun lepas.",
            stageDirection: "Berseloroh",
            audioUrl: "/audio/s2/s2_l2_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Inakuja mara moja! Kahawa inayotokota kwenye ukingo wa meza na saa ya kengele iliyowekwa miaka arobaini iliyopita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l2_sw-KE.mp3"
          },
          "gn-PY": {
            text: "¡Ko'ág̃a voi! Peteĩ kafe hakuite mesa rembe'ýpe ha peteĩ mombayha ojapómava irundypa ary.",
            stageDirection: "Pukavýpe",
            audioUrl: "/audio/s2/s2_l2_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¡Chayllam! K'añay q'oñi kafi mesa patapi churasqa, tawa chunka wata ñawpaq rikch'achina wach'iwan.",
            stageDirection: "Asirispa",
            audioUrl: "/audio/s2/s2_l2_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¡Jichhakiwa! Wali phutiri kafi mesa k'uchuru uchatata, pusi tunka mara nayra sartayirimpi.",
            stageDirection: "Larustasisa",
            audioUrl: "/audio/s2/s2_l2_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¡Niman! Ce chicahuac cafe tletl itech tlamantli mesa huan ce tlahuiliztli tlen ompohual xihuitl.",
            stageDirection: "Huetzquiliztica",
            audioUrl: "/audio/s2/s2_l2_nah-MX.mp3"
          },
          "nv-US": {
            text: "Kʼadíshį́į́! Gohwééh sidogo bikááʼdahootsʼózí bąąhgi, dóó dízdiin nááhai yę́ędą́ą́ʼ chahałheeł bee chʼééhózhóonii.",
            stageDirection: "Bikʼee chʼééhózhǫ́ǫgo",
            audioUrl: "/audio/s2/s2_l2_nv-US.mp3"
          },
        }
      },
      {
        id: "s2_l3",
        characterId: "don_ramon",
        defaultStageDirection: "Riendo con sorpresa",
        expression: "laughing",
        translations: {
          "fr-CH": {
            text: "Et les serviettes ? Il m'en faut exactement sept pour mes tours de magie.",
            stageDirection: "Mystérieux",
            audioUrl: "/audio/s2/s2_l3_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Et les serviettes ? Il m'en faut exactement sept pour mes tours de magie.",
            stageDirection: "Mystérieux",
            audioUrl: "/audio/s2/s2_l3_fr-BE.mp3"
          },
          "es-ES": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_es-ES.mp3"
          },
          "el-GR": {
            text: "Και οι χαρτοπετσέτες; Χρειάζομαι ακριβώς επτά για τα μαγικά μου κόλπα.",
            stageDirection: "Γελώντας με έκπληξη",
            audioUrl: "/audio/s2/s2_l3_el-GR.mp3"
          },
          "es-MX": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_es-MX.mp3"
          },
          "es-AR": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_es-AR.mp3"
          },
          "es-DO": {
            text: "¿Y las servilletas? Pásame exactamente siete que voy a inventar un truco de magia aquí.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_es-DO.mp3"
          },
          "es-PR": {
            text: "¿Y las servilletas? Dame exactamente siete para unos trucos de magia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_es-PR.mp3"
          },
          "es-CO": {
            text: "¿Y las servilletas? Me hacen falta exactamente siete para mis trucos de magia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_es-CO.mp3"
          },
          "fr-FR": {
            text: "Et les serviettes ? Il m'en faut exactement sept pour mes tours de magie.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Pis les serviettes ? Ça m'en prend exactement sept pour mes tours de magie.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Et puis les serviettes ? Il me faut sept serviettes précises pour mes tours de magie.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_fr-CI.mp3"
          },
          "pt-BR": {
            text: "E os guardanapos? Preciso de exatamente sete para os meus truques de mágica.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_pt-BR.mp3"
          },
          "pt-PT": {
            text: "E os guardanapos? Preciso de exatamente sete para os meus truques de magia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_pt-PT.mp3"
          },
          "it-IT": {
            text: "E i tovaglioli? Me ne servono esattamente sette per i miei trucchi di magia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_it-IT.mp3"
          },
          "ca-ES": {
            text: "I els tovallons? En necessito exactament set per als meus trucs de màgia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Și șervețelele? Îmi trebuie exact șapte pentru trucurile mele de magie.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_ro-RO.mp3"
          },
          "gl-ES": {
            text: "E os panos de mesa? Preciso de exactamente sete para os meus trucos de maxia.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_gl-ES.mp3"
          },
          "oc-FR": {
            text: "E los mandils? Me'n cal exactament sèt per mos torns de magia.",
            stageDirection: "Serio",
            audioUrl: "/audio/s1/s2_l3_gl-ES.mp3"
          },
          "de-DE": {
            text: "Und die Servietten? Ich brauche exakt sieben für meine Zaubertricks.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_de-DE.mp3"
          },
          "de-CH": {
            text: "Und d Serviette? Ich bruuche exakt siebe für mini Zaubertricks.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_de-CH.mp3"
          },
          "nl-NL": {
            text: "En de servetten? Ik heb er precies zeven nodig voor mijn goocheltrucs.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Og serviettene? Jeg trenger nøyaktig sju stykker til trylletriksene mine.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Och servetterna? Jag behöver exakt sju stycken till mina trolleritrick.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_sv-SE.mp3"
          },
          "da-DK": {
            text: "Hvad med servietterne? Jeg skal bruge præcis syv til mine tryllekunster.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_da-DK.mp3"
          },
          "ru-RU": {
            text: "А салфетки? Мне нужно ровно семь штук для моих карточных фокусов.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_ru-RU.mp3"
          },
          "uk-UA": {
            text: "А серветки? Мені потрібно рівно сім штук для моїх фокусів.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_uk-UA.mp3"
          },
          "pl-PL": {
            text: "A serwetki? Potrzebuję dokładnie siedmiu do moich sztuczek magicznych.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "A ubrousky? Potřebuji jich přesně sedm na své kouzelnické triky.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "A salvete? Treba mi točno sedam za moje mađioničarske trikove.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Entä lautasliinat? Tarvitsen tasan seitsemän taikatemppujani varten.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_fi-FI.mp3"
          },
          "hu-HU": {
            text: "És a szalvéták? Pontosan hét darabra van szükségem a bűvésztrükkjeimhez.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Eta zapiak? Zazpi behar ditut zehazki nire magia trikimailuetarako.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Peki peçeteler nerede? Sihirbazlık numaralarım için tam yedi taneye ihtiyacım var.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_tr-TR.mp3"
          },
          "ja-JP": {
            text: "ナプキンはどうした？マジックの手品用に、ちょうど7枚必要なんだが。",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "餐巾纸呢？我变魔术正好需要七张，一张不多一张不少。",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "紙巾呢？我玩魔術啱啱好需要七張，唔多唔少。",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_yue-HK.mp3"
          },
          "ko-KR": {
            text: "냅킨은 어디 있나? 마술 트릭을 하려면 정확히 일곱 장이 필요한데.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_ko-KR.mp3"
          },
          "ar-XA": {
            text: "وماذا عن المناديل؟ أحتاج إلى سبعة مناديل بالضبط لأداء خدعي السحرية.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_ar-XA.mp3"
          },
          "he-IL": {
            text: "ומה עם מפיות? אני צריך בדיוק שבע בשביל קסמי הקלפים שלי.",
            stageDirection: "Riendo con sorpresa",
            audioUrl: "/audio/s2/s2_l3_he-IL.mp3"
          },
          "es-VE": {
            text: "Si la cháchara no viene con azúcar, prefiero leerme el periódico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_es-VE.mp3"
          },
          "es-CL": {
            text: "Si la conversa no viene con azúcar extra, prefiero el diario.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_es-CL.mp3"
          },
          "es-PE": {
            text: "Si la conversación no viene con azúcar extra, prefiero leer mi diario.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_es-PE.mp3"
          },
          "es-CU": {
            text: "Si la muela no viene con azúcar de más, prefiero el periódico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_es-CU.mp3"
          },
          "es-GQ": {
            text: "Si la conversación no viene con azúcar extra, prefiero el periódico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_es-GQ.mp3"
          },
          "en-US": {
            text: "And the napkins? I need exactly seven for my magic tricks.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-US.mp3"
          },
          "en-GB": {
            text: "And the napkins? I require precisely seven for my magic tricks.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "And the napkins? A need exactly seven for ma magic tricks.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "And what about the napkins? I reckon I need exactly seven for my magic tricks.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-US-south.mp3"
          },
          "en-IE": {
            text: "And what about the napkins? I need exactly seven of them for me magic tricks.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-IE.mp3"
          },
          "en-AU": {
            text: "And the napkins? Need exactly seven for me magic tricks, mate.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-AU.mp3"
          },
          "en-NZ": {
            text: "And the napkins? Need exactly seven for my magic tricks.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-NZ.mp3"
          },
          "en-ZA": {
            text: "And what about napkins? I need exactly seven for my magic tricks, hey.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-ZA.mp3"
          },
          "en-NG": {
            text: "And napkins nko? I need exactly seven for my magic tricks!",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-NG.mp3"
          },
          "en-IN": {
            text: "And the napkins? I need exactly seven napkins for my magic tricks.",
            stageDirection: "Mysterious",
            audioUrl: "/audio/s2/s2_l3_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "En de servetten? Ik heb er exact zeven nodig voor mijn goocheltrucs.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "那紙巾呢？我剛好需要整整七張來變魔術。",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_zh-TW.mp3"
          },
          "hi-IN": {
            text: "और नैपकिन कहाँ हैं? मुझे अपने जादुई करतबों के लिए ठीक सात नैपकिन चाहिए।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_hi-IN.mp3"
          },
          "ur-PK": {
            text: "اور نیپکن کہاں ہیں؟ مجھے اپنے جادوئی کرتبوں کے لیے پورے سات نیپکن درکار ہیں۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ur-PK.mp3"
          },
          "bn-IN": {
            text: "আর ন্যাপকিনগুলো কোথায়? আমার জাদুর খেলার জন্য ঠিক সাতখানা ন্যাপকিন দরকার।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਅਤੇ ਨੈਪਕਿਨ ਕਿੱਥੇ ਹਨ? ਮੈਨੂੰ ਆਪਣੇ ਜਾਦੂ ਦੇ ਕਰਤੱਬਾਂ ਲਈ ਪੂਰੇ ਸੱਤ ਨੈਪਕਿਨ ਚਾਹੀਦੇ ਹਨ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_pa-IN.mp3"
          },
          "gu-IN": {
            text: "અને નેપકિન ક્યાં છે? મારે મારા જાદુઈ પ્રયોગો માટે બરાબર સાત નેપકિન જોઈએ છે.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_gu-IN.mp3"
          },
          "mr-IN": {
            text: "आणि नॅपकिन्स कुठे आहेत? मला माझ्या जादूच्या प्रयोगांसाठी बरोबर सात नॅपकिन्स हवे आहेत.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_mr-IN.mp3"
          },
          "ta-IN": {
            text: "டிஷ்யூ பேப்பர்கள் எங்கே? என் மேஜிக் வித்தைகளுக்குச் சரியாக ஏழு தாள்கள் வேண்டும்.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ta-IN.mp3"
          },
          "te-IN": {
            text: "మరి నాప్కిన్లు ఎక్కడ? నా మ్యాజిక్ ట్రిక్స్ కోసం సరిగ్గా ఏడు నాప్కిన్లు కావాలి.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_te-IN.mp3"
          },
          "kn-IN": {
            text: "ನ್ಯಾಪ್ಕಿನ್‌ಗಳು ಎಲ್ಲಿವೆ? ನನ್ನ ಜಾದೂ ತಂತ್ರಗಳಿಗೆ ಸರಿಯಾಗಿ ಏಳು ನ್ಯಾಪ್ಕಿನ್‌ಗಳು ಬೇಕು.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_kn-IN.mp3"
          },
          "ml-IN": {
            text: "നാപ്കിനുകൾ എവിടെ? എന്റെ മാന്ത്രിക വിദ്യകൾക്കായി എനിക്ക് കൃത്യം ഏഴ് നാപ്കിനുകൾ വേണം.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Thế còn khăn ăn? Tôi cần đúng bảy tờ cho màn ảo thuật của mình.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_vi-VN.mp3"
          },
          "th-TH": {
            text: "แล้วกระดาษเช็ดปากล่ะ? ลุงต้องการเจ็ดแผ่นพอดีเป๊ะสำหรับเล่นกล",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_th-TH.mp3"
          },
          "id-ID": {
            text: "Lalu serbetnya? Aku butuh tepat tujuh lembar untuk trik sulapku.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_id-ID.mp3"
          },
          "ms-MY": {
            text: "Dan tisu servet? Saya perlukan tepat tujuh keping untuk silap mata saya.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Na leso za karatasi je? Nahitaji saba kamili kwa ajili ya michezo yangu ya maajabu.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Ha umi servilléta piko? Aikotevẽte siete che paje rembiaporã.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¿P'isqipanakunari? Qanchis k'atapuni munani magiaykunapaq.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¿Servilletanakarusti? Paqallqu chiqapa muntha yatichawi paji luratajataki.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¿Ihuan in amatlapalmeh? Nicnequi chicome ic nomahuiztli.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_nah-MX.mp3"
          },
          "nv-US": {
            text: "Naaltsoos tʼóó baa dahootʼéhígííshąʼ? Tsostsʼidígíí nisin bee naʼashchʼąąʼgo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_nv-US.mp3"
          }
        }
      },
      {
        id: "s2_l4",
        characterId: "bea",
        defaultStageDirection: "Saca una regla y cuenta solemnemente",
        expression: "literal",
        translations: {
          "fr-CH": {
            text: "Voici vos sept serviettes numérotées de un à sept et le ruban jaune d'avertissement.",
            stageDirection: "En servant",
            audioUrl: "/audio/s2/s2_l4_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Voici vos sept serviettes numérotées de un à sept, et du ruban de chantier jaune.",
            stageDirection: "En servant",
            audioUrl: "/audio/s2/s2_l4_fr-BE.mp3"
          },
          "es-ES": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_es-ES.mp3"
          },
          "el-GR": {
            text: "Ορίστε επτά χαρτοπετσέτες αριθμημένες από το ένα ως το επτά και κίτρινη προειδοποιητική ταινία.",
            stageDirection: "Βγάζει έναν χάρακα και μετρά με επισημότητα",
            audioUrl: "/audio/s2/s2_l4_el-GR.mp3"
          },
          "es-MX": {
            text: "Aquí tiene siete servilletas foliadas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_es-MX.mp3"
          },
          "es-AR": {
            text: "Acá tiene siete servilletas numeradas del uno al siete y cinta de precaución por el peligro.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_es-AR.mp3"
          },
          "es-DO": {
            text: "Aquí tiene sus siete servilletas numeraditas del uno al siete y cinta amarilla de no pase.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_es-DO.mp3"
          },
          "es-PR": {
            text: "Aquí tiene sus siete servilletas numeradas con marcador y cinta amarilla de peligro.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_es-PR.mp3"
          },
          "es-CO": {
            text: "Aquí tiene sus siete servilletas contadas y marcadas del uno al siete, más cinta de peligro.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_es-CO.mp3"
          },
          "fr-FR": {
            text: "Voici vos sept serviettes numérotées de un à sept, et un ruban jaune de sécurité pour le danger.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Voici vos sept serviettes numérotées de un à sept, avec du ruban jaune de danger.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Voici vos sept serviettes bien comptées de un jusqu'à sept, et le ruban jaune de sécurité.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Aqui estão sete guardanapos numerados de um a sete e fita zebrada de advertência.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Aqui tem os seus sete guardanapos numerados de um a sete e fita amarela de perigo.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_pt-PT.mp3"
          },
          "it-IT": {
            text: "Ecco a lei sette tovaglioli numerati da uno a sette e nastro giallo di pericolo.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_it-IT.mp3"
          },
          "ca-ES": {
            text: "Aquí té set tovallons numerats de l'un al set i cinta groga de precaució.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Poftiți cele șapte șervețele numerotate de la unu la șapte și bandă galbenă de avertizare.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Aquí ten sete panos numerados do un ao sete e cinta amarela de perigo.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Vaicí vòstres sèt mandils numerotats d'un a sèt e de riban jaune de precaucion.",
            stageDirection: "Riendo",
            audioUrl: "/audio/s1/s2_l4_gl-ES.mp3"
          },
          "de-DE": {
            text: "Hier sind sieben Servietten, durchnummeriert von eins bis sieben, plus gelbes Gefahrenband.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_de-DE.mp3"
          },
          "de-CH": {
            text: "Da sind siebe Serviette, durchnumeriert vo eins bis siebe, plus gäls Absperrband.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_de-CH.mp3"
          },
          "nl-NL": {
            text: "Alstublieft, zeven servetten genummerd van één tot zeven, plus geel gevaarlint.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Vær så god, sju servietter nummerert fra én til sju, pluss gult sperrebånd.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Här är sju servetter numrerade från ett till sju, plus gult varningsband.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_sv-SE.mp3"
          },
          "da-DK": {
            text: "Værsgo, syv servietter nummereret fra et til syv, plus gult afspærringsbånd.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_da-DK.mp3"
          },
          "ru-RU": {
            text: "Вот ваши семь салфеток, пронумерованных от одного до семи, и жёлтая лента ограждения.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Ось ваші сім серветок, пронумерованих від одного до семи, і жовта стрічка небезпеки.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Oto pana siedem serwetek ponumerowanych od jeden do siedem oraz żółta taśma ostrzegawcza.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Zde máte sedm ubrousků očíslovaných od jedné do sedmi a žlutou výstražnou pásku.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Evo vaših sedam salveta numeriranih od jedan do sedam i žuta traka opasnosti.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Olkaa hyvä, seitsemän lautasliinaa numeroituna yhdestä seitsemään ja keltainen varoitusnauha.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Íme a hét szalvéta egytől hétig megszámozva, plusz a sárga figyelmeztető szalag.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Hemen dituzu zazpi zapi batetik zazpira zenbatuak eta kontuz ibiltzeko zinta horia.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_eu-ES.mp3"
          },
          "tr-TR": {
            text: "İşte birden yediye kadar numaralandırılmış yedi adet peçeteniz ve sarı güvenlik şeridiniz.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_tr-TR.mp3"
          },
          "ja-JP": {
            text: "1から7まで番号を振ったナプキン7枚と、危険防止用の黄色い警戒テープでございます！",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "给您！从一号到七号标好顺序的餐巾纸，附带一条黄色防危险警戒线！",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "俾你！一到七號順序排好嘅紙巾，仲有一條黃色防危險嘅封條警戒線！",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_yue-HK.mp3"
          },
          "ko-KR": {
            text: "1번부터 7번까지 번호가 적힌 냅킨 7장과 위험 대비용 노란색 경고 테이프 대령했습니다!",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_ko-KR.mp3"
          },
          "ar-XA": {
            text: "تفضل هذه سبعة مناديل مرقمة من واحد إلى سبعة، وشريط تحذير أصفر لمواجهة الخطر.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_ar-XA.mp3"
          },
          "he-IL": {
            text: "הנה שבע מפיות ממוספרות מאחת עד שבע, וסרט סימון צהוב נגד סכנה.",
            stageDirection: "Saca una regla y cuenta solemnemente",
            audioUrl: "/audio/s2/s2_l4_he-IL.mp3"
          },
          "es-VE": {
            text: "¡Jaja! Entonces le traigo el cafecito y las noticias más sabrosas del día.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_es-VE.mp3"
          },
          "es-CL": {
            text: "¡Jaja! Entonces le traigo el café y las noticias más prendidas del día.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_es-CL.mp3"
          },
          "es-PE": {
            text: "¡Jaja! Entonces le traigo su café y las noticias más fresquitas del día.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_es-PE.mp3"
          },
          "es-CU": {
            text: "¡Jaja! Entonces le traigo su café y las noticias más dulces del día.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_es-CU.mp3"
          },
          "es-GQ": {
            text: "¡Jaja! Entonces le traigo el café y las noticias más dulces del día.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_es-GQ.mp3"
          },
          "en-US": {
            text: "Here are seven napkins numbered one through seven, and yellow caution tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-US.mp3"
          },
          "en-GB": {
            text: "Here you are: seven napkins numbered one to seven, and yellow caution tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Here ye go: seven napkins numbered ane tae seven, and yellow caution tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Here you go: seven napkins numbered one through seven, and a roll of yellow caution tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-US-south.mp3"
          },
          "en-IE": {
            text: "Here you go: seven napkins numbered one to seven, and yellow hazard tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-IE.mp3"
          },
          "en-AU": {
            text: "Here you go, mate: seven napkins numbered one to seven, and yellow caution tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-AU.mp3"
          },
          "en-NZ": {
            text: "Here you go: seven napkins numbered one to seven, and yellow caution tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Here you go: seven napkins numbered one to seven, and yellow danger tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-ZA.mp3"
          },
          "en-NG": {
            text: "See your seven napkins numbered one to seven, plus yellow caution tape join am!",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-NG.mp3"
          },
          "en-IN": {
            text: "Here are your seven napkins numbered one to seven, plus yellow caution tape.",
            stageDirection: "Serving",
            audioUrl: "/audio/s2/s2_l4_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Alsjeblieft, zeven servetten genummerd van één tot zeven en geel veiligheidslint.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "給您七張標號一到七的紙巾，還有黃色警戒膠帶。",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_zh-TW.mp3"
          },
          "hi-IN": {
            text: "ये लीजिए एक से सात तक नंबर डले सात नैपकिन और पीला चेतावनी टेप।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_hi-IN.mp3"
          },
          "ur-PK": {
            text: "یہ لیجیے ایک سے سات تک نمبر لگے سات نیپکن اور پیلا انتباہی فیتہ۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ur-PK.mp3"
          },
          "bn-IN": {
            text: "এই নিন এক থেকে সাত পর্যন্ত নম্বর দেওয়া সাতটা ন্যাপকিন আর হলুদ সাবধানী ফিতে।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਇਹ ਲਓ ਇੱਕ ਤੋਂ ਸੱਤ ਨੰਬਰ ਵਾਲੇ ਸੱਤ ਨੈਪਕਿਨ ਅਤੇ ਪੀਲੀ ਚੇਤਾਵਨੀ ਵਾਲੀ ਪੱਟੀ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_pa-IN.mp3"
          },
          "gu-IN": {
            text: "આ રહ્યા એકથી સાત નંબરવાળા સાત નેપકિન અને પીળી ચેતવણી પટ્ટી.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_gu-IN.mp3"
          },
          "mr-IN": {
            text: "हे घ्या एक ते सात क्रमांक असलेले सात नॅपकिन्स आणि पिवळी धोक्याची पट्टी.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_mr-IN.mp3"
          },
          "ta-IN": {
            text: "ஒன்றிலிருந்து ஏழு வரை எண்ணிடப்பட்ட ஏழு தாள்களும் மஞ்சள் எச்சரிக்கை நாடாவும் இதோ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ta-IN.mp3"
          },
          "te-IN": {
            text: "ఇదిగోండి ఒకటి నుండి ఏడు వరకు అంకెలు వేసిన ఏడు నాప్కిన్లు మరియు పసుపు హెచ్చరిక టేపు.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಇಲ್ಲಿವೆ ಒಂದರಿಂದ ಏಳರವರೆಗೆ ಸಂಖ್ಯೆ ಬರೆದ ಏಳು ನ್ಯಾಪ್ಕಿನ್‌ಗಳು ಮತ್ತು ಹಳದಿ ಎಚ್ಚರಿಕೆಯ ಪಟ್ಟಿ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ഒന്നു മുതൽ ഏഴ് വരെ അക്കമിട്ട ഏഴ് നാപ്കിനുകളും മഞ്ഞ അപായ ടേപ്പും ഇതാ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Của bác đây, đúng bảy tờ khăn ăn đánh số từ một đến bảy và cuộn băng cảnh báo màu vàng.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_vi-VN.mp3"
          },
          "th-TH": {
            text: "นี่ค่ะ กระดาษเช็ดปากเจ็ดแผ่นเรียงเลขหนึ่งถึงเจ็ด พร้อมเทปเหลืองเตือนภัย",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_th-TH.mp3"
          },
          "id-ID": {
            text: "Ini tujuh serbet bernomor satu sampai tujuh dan pita kuning tanda bahaya.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_id-ID.mp3"
          },
          "ms-MY": {
            text: "Ini tujuh keping tisu bernombor satu hingga tujuh dan pita kuning amaran.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Hizi hapa leso saba zilizohesabiwa kuanzia moja hadi saba na utepe wa manjano wa tahadhari.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Ápe reguereko siete servilléta oñemoñepyrũva peteĩgui siete peve ha ta'anga sa'yju jesarekorã.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Kaypin kashan qanchis p'isqipanakuna jujmanta qanchiskama yupachasqa q'ellu willakuy watanawan.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Akankxiwa paqallqu servilletanaka mayata paqallqkama jakht'ata q'illu yatiyawi cintampi.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Nican tiquimpiya chicome amatlapalmeh tlapohualli ce ic chicome ihuan coztic mecatl.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_nah-MX.mp3"
          },
          "nv-US": {
            text: "Díí tsostsʼid naaltsoos tʼááłáʼhí dóó tsostsʼidjįʼ bił dóó łitsohígíí bee haʼoodzííʼ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_nv-US.mp3"
          }
        }
      },
    ]
  },
  {
    id: "story_3",
    title: "La Negociación Suprema",
    subtitle: "Mateo + Don Ramón",
    characters: ["mateo", "don_ramon"],
    conflictType: "Negociaciones absurdas entre dos extremos generacionales.",
    vocabularyTheme: "Familia, tecnología, pasatiempos, contratos, tiempo.",
    lines: [
      {
        id: "s3_l1",
        characterId: "mateo",
        defaultStageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
        expression: "smug",
        translations: {
          "fr-CH": {
            text: "Monsieur Ramon, selon la clause quatre de notre accord bilatéral, vous devez me transférer votre carte holographique.",
            stageDirection: "Solennel",
            audioUrl: "/audio/s3/s3_l1_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Monsieur Ramon, d'après l'article quatre de notre accord bilatéral, vous devez me transférer votre carte holographique.",
            stageDirection: "Solennel",
            audioUrl: "/audio/s3/s3_l1_fr-BE.mp3"
          },
          "es-ES": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_es-ES.mp3"
          },
          "el-GR": {
            text: "Δον Ραμόν, σύμφωνα με τη ρήτρα τέσσερα της διμερούς συμφωνίας μας, οφείλετε να μου μεταβιβάσετε το ολογραφικό σας αυτοκόλλητο.",
            stageDirection: "Φτιάχνοντας τα γυαλιά του και δείχνοντας την οθόνη του τάμπλετ του",
            audioUrl: "/audio/s3/s3_l1_el-GR.mp3"
          },
          "es-MX": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su tarjeta holográfica.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_es-MX.mp3"
          },
          "es-AR": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su figurita holográfica.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_es-AR.mp3"
          },
          "es-DO": {
            text: "Don Ramón, según la cláusula cuatro del acuerdo, usted tiene que pasarme esa barajita brillante por ley.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_es-DO.mp3"
          },
          "es-PR": {
            text: "Don Ramón, según la cláusula cuatro de nuestro contrato, usted debe entregarme su tarjeta holográfica.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_es-PR.mp3"
          },
          "es-CO": {
            text: "Don Ramón, según la cláusula cuatro de nuestro convenio bilateral, usted debe transferirme su lámina holográfica.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_es-CO.mp3"
          },
          "fr-FR": {
            text: "Monsieur Ramon, conformément à l'article quatre de notre accord bilatéral, vous devez me céder votre carte holographique.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Monsieur Ramon, d'après la clause quatre de notre entente, vous devez me céder votre carte holographique.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Vieux père Ramon, selon l'article quatre de notre papier là, vous devez me donner votre carte qui brille.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Seu Ramón, de acordo com a cláusula quatro do nosso acordo bilateral, o senhor deve transferir sua figurinha holográfica.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Senhor Ramón, nos termos da cláusula quatro do nosso acordo bilateral, deve transferir-me o seu cromo holográfico.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_pt-PT.mp3"
          },
          "it-IT": {
            text: "Signor Ramon, in base alla clausola quattro del nostro accordo bilaterale, lei deve trasferirmi la sua figurina olografica.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_it-IT.mp3"
          },
          "ca-ES": {
            text: "Senyor Ramon, segons la clàusula quatre del nostre acord bilateral, vostè m'ha de transferir el seu cromo hologràfic.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Domnule Ramon, conform clauzei patru din acordul nostru bilateral, trebuie să-mi transferați cartonașul holografic.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Señor Ramón, segundo a cláusula catro do noso acordo bilateral, vostede debe transferirme o seu cromo holográfico.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Sénher Ramon, segon la clausa quatre de nòstre acòrd bilateral, me devètz transferir vòstre cromò olografic.",
            stageDirection: "Formal",
            audioUrl: "/audio/s1/s3_l1_gl-ES.mp3"
          },
          "de-DE": {
            text: "Herr Ramon, gemäß Klausel vier unserer bilateralen Vereinbarung müssen Sie mir Ihre holografische Sammelkarte übertragen.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_de-DE.mp3"
          },
          "de-CH": {
            text: "Herr Ramon, luut de Chlausle vier vo üsere Vereinbarig müend Sie mir Ihri holografischi Charte überträge.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_de-CH.mp3"
          },
          "nl-NL": {
            text: "Meneer Ramon, volgens clausule vier van onze bilaterale overeenkomst moet u mij uw holografische verzamelkaart overdragen.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Herr Ramon, i henhold til klausul fire i vår bilaterale avtale, må De overføre Deres holografiske samlekort til meg.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Herr Ramon, enligt klausul fyra i vårt bilaterala avtal måste ni överlåta ert holografiska samlarkort till mig.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_sv-SE.mp3"
          },
          "da-DK": {
            text: "Hr. Ramon, i henhold til klausul fire i vores bilaterale aftale skal De overdrage Deres holografiske samlekort til mig.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_da-DK.mp3"
          },
          "ru-RU": {
            text: "Дон Рамон, согласно пункту четыре нашего двустороннего соглашения, вы обязаны передать мне свою голографическую карточку.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Дон Рамон, згідно з пунктом чотири нашої двосторонньої угоди, ви зобов'язані передати мені свою голографічну картку.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Panie Ramon, zgodnie z klauzulą czwartą naszego dwustronnego porozumienia, musi pan przekazać mi swoją kartę holograficzną.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Pane Ramone, podle klauzule čtyři naší bilaterální dohody mi musíte převést svou holografickou kartičku.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Gospodine Ramon, prema stavku četiri našeg bilateralnog sporazuma, morate mi prenijeti svoju holografsku sličicu.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Herra Ramon, kahdenvälisen sopimuksemme neljännen pykälän mukaisesti teidän on siirrettävä holograafinen keräilykorttinne minulle.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Ramon úr, a kétoldalú megállapodásunk negyedik pontja értelmében át kell adnia nekem a hologramos kártyáját.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Ramon jauna, gure aldebiko akordioaren laugarren klausularen arabera, zure kromo holografikoa niri transferitu behar didazu.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Ramon Bey, ikili anlaşmamızın dördüncü maddesi uyarınca holografik kartınızı bana devretmek zorundasınız.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_tr-TR.mp3"
          },
          "ja-JP": {
            text: "ラモンさん、当事者間協定の第4条に基づき、ホログラムレアカードの所有権を私に譲渡していただきます。",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "雷蒙爷爷，根据我们双边协议第四条，您必须将那张全息闪卡的所有权让渡给我。",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "Ramon阿爺，根據我哋雙邊協議嘅第四條，你要將嗰張全息閃卡嘅擁有權轉讓俾我。",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_yue-HK.mp3"
          },
          "ko-KR": {
            text: "라몬 할아버지, 우리 양자 협약 제4조에 의거하여 할아버지의 홀로그램 카드를 저에게 양도하셔야 합니다.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_ko-KR.mp3"
          },
          "ar-XA": {
            text: "السيد رامون، وفقاً للبند الرابع من اتفاقنا الثنائي، يتعين عليك التنازل لي عن بطاقتك الهولوغرافية.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_ar-XA.mp3"
          },
          "he-IL": {
            text: "אדון רמון, על פי סעיף ארבע בהסכם הבילטרלי שלנו, עליך להעביר לי את קלף ההולוגרמה שלך.",
            stageDirection: "Ajustándose los lentes y mostrando la pantalla de su tableta",
            audioUrl: "/audio/s3/s3_l1_he-IL.mp3"
          },
          "es-VE": {
            text: "Don Ramón, según mis cuentas, si me da esa moneda de dos euros, compro tres barajitas y duplico mi inversión.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_es-VE.mp3"
          },
          "es-CL": {
            text: "Don Ramón, según mis cálculos, si me pasa esa moneda de dos euros, compro tres láminas y duplico mi inversión.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_es-CL.mp3"
          },
          "es-PE": {
            text: "Don Ramón, según mis cálculos, si me presta esa moneda de dos euros, compro tres figuritas y duplico mi inversión.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_es-PE.mp3"
          },
          "es-CU": {
            text: "Don Ramón, por mi cálculo, si me da esa moneda de dos euros, compro tres postales y duplico la inversión.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_es-CU.mp3"
          },
          "es-GQ": {
            text: "Don Ramón, según mis cálculos, si me da esa moneda de dos euros, puedo comprar tres cromos y duplicar mi inversión.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_es-GQ.mp3"
          },
          "en-US": {
            text: "Don Ramón, according to clause four of our bilateral agreement, you must transfer your holographic card to me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-US.mp3"
          },
          "en-GB": {
            text: "Don Ramón, pursuant to clause four of our bilateral agreement, you are obliged to transfer your holographic card to me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Don Ramón, accordin' tae clause fower o' oor agreement, ye maun transfer yer holographic card tae me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Don Ramón, according to clause four of our bilateral agreement, you gotta transfer that holographic card over to me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-US-south.mp3"
          },
          "en-IE": {
            text: "Don Ramón, according to clause four of our bilateral agreement, you have to hand over your holographic card to me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-IE.mp3"
          },
          "en-AU": {
            text: "Don Ramón, mate, under clause four of our agreement, you gotta hand over that holographic card to me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-AU.mp3"
          },
          "en-NZ": {
            text: "Don Ramón, according to clause four of our bilateral agreement, you've gotta transfer your holographic card to me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Don Ramón, according to clause four of our agreement, you must transfer that holographic card to me, man.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-ZA.mp3"
          },
          "en-NG": {
            text: "Don Ramón, according to clause four of our agreement, you must give me that holographic card!",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-NG.mp3"
          },
          "en-IN": {
            text: "Don Ramón, according to clause four of our bilateral agreement, you must kindly transfer your holographic card to me.",
            stageDirection: "Solemn",
            audioUrl: "/audio/s3/s3_l1_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Meneer Ramón, volgens clausule vier van ons bilateraal akkoord moet u mij uw holografische prent overdragen.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "拉蒙先生，根據我們雙邊協議的第四條，您應該把您的全息閃卡轉交給我。",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_zh-TW.mp3"
          },
          "hi-IN": {
            text: "डॉन रमोन, हमारे द्विपक्षीय समझौते की धारा चार के अनुसार, आपको अपना होलोग्राम कार्ड मुझे सौंपना होगा।",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_hi-IN.mp3"
          },
          "ur-PK": {
            text: "ڈان رمون، ہمارے دوطرفہ معاہدے کی شق چار کے تحت آپ کو اپنا ہولوگرام کارڈ میرے حوالے کرنا ہوگا۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ur-PK.mp3"
          },
          "bn-IN": {
            text: "ডন র‍্যামন, আমাদের দ্বিপাক্ষিক চুক্তির চার নম্বর ধারা অনুযায়ী আপনাকে আপনার হোলোগ্রাম কার্ডটি আমাকে দিয়ে দিতে হবে।",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਡੌਨ ਰਮੋਨ, ਸਾਡੇ ਦੁਵੱਲੇ ਸਮਝੌਤੇ ਦੀ ਧਾਰਾ ਚਾਰ ਅਨੁਸਾਰ ਤੁਹਾਨੂੰ ਆਪਣਾ ਹੋਲੋਗ੍ਰਾਮ ਕਾਰਡ ਮੈਨੂੰ ਦੇਣਾ ਪਵੇਗਾ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_pa-IN.mp3"
          },
          "gu-IN": {
            text: "ડોન રેમોન, આપણા દ્વિપક્ષીય કરારની કલમ ચાર મુજબ તમારે તમારું હોલોગ્રામ કાર્ડ મને સોંપવું પડશે.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_gu-IN.mp3"
          },
          "mr-IN": {
            text: "डॉन रमोन, आपल्या द्विपक्षीय कराराच्या कलम चारनुसार तुम्हाला तुमचे होलोग्राम कार्ड मला द्यावे लागेल.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_mr-IN.mp3"
          },
          "ta-IN": {
            text: "டான் ரமோன், நமது இருதரப்பு ஒப்பந்தத்தின் பிரிவு நான்கின்படி நீங்கள் உங்கள் ஹோலோகிராம் அட்டையை எனக்குத் தர வேண்டும்.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ta-IN.mp3"
          },
          "te-IN": {
            text: "డాన్ రామోన్, మన ద్వైపాక్షిక ఒప్పందంలోని నాల్గవ నిబంధన ప్రకారం మీ హోలోగ్రామ్ కార్డును నాకు బదిలీ చేయాలి.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಡಾನ್ ರಾಮೋನ್, ನಮ್ಮ ದ್ವಿಪಕ್ಷೀಯ ಒಪ್ಪಂದದ ನಾಲ್ಕನೇ ನಿಯಮದ ಪ್ರಕಾರ ನಿಮ್ಮ ಹೋಲೋಗ್ರಾಮ್ ಕಾರ್ಡ್ ನನಗೆ ಕೊಡಬೇಕು.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ഡോൺ റമോൺ, നമ്മുടെ ഉഭയകക്ഷി കരാറിലെ നാലാം വകുപ്പ് പ്രകാരം നിങ്ങളുടെ ഹോളോഗ്രാം കാർഡ് എനിക്ക് കൈമാറണം.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Bác Ramón, theo điều bốn trong thỏa thuận song phương của chúng ta, bác phải chuyển giao tấm thẻ hologram cho cháu.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_vi-VN.mp3"
          },
          "th-TH": {
            text: "คุณตารามอนครับ ตามข้อที่สี่ในข้อตกลงทวิภาคีของเรา คุณตาต้องโอนการ์ดโฮโลแกรมให้ผมแล้วนะ",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_th-TH.mp3"
          },
          "id-ID": {
            text: "Pak Ramón, menurut pasal empat dalam perjanjian bilateral kita, Anda harus menyerahkan kartu hologram Anda.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_id-ID.mp3"
          },
          "ms-MY": {
            text: "Pak Ramón, mengikut fasal empat perjanjian dua hala kita, pakcik mesti serahkan kad hologram itu kepada saya.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Bwana Ramón, kwa mujibu wa ibara ya nne ya makubaliano yetu, unapaswa kunipa kadi yako ya picha inayometa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Karai Ramón, ñande kuatia ñe'ẽme he'i háicha, tekotevẽ reme'ẽ chéve nde cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Don Ramón, rimanakusqanchis tawa qelqaman jina, lliphipipaq cromoykita qowanki.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Don Ramón, aruskipawisan pusi chiqaparu jamuqatax cromo holográfico churaniñamawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Don Ramón, ipan in nahui tlahtolli de totlanonotzal, monequi tinechmacaz mocromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_nah-MX.mp3"
          },
          "nv-US": {
            text: "Don Ramón, dį́į́ʼgóó ałhaʼdeetʼáanii bikʼehgo, díí naaltsoos disxǫsígíí shaa didíílcoos.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_nv-US.mp3"
          }
        }
      },
      {
        id: "s3_l2",
        characterId: "don_ramon",
        defaultStageDirection: "Haciendo equilibrio sobre su patineta",
        expression: "cheerful",
        translations: {
          "fr-CH": {
            text: "Tranquille, mini-avocat. Apprends-moi d'abord à poster des vidéos avec de la musique moderne sur ce réseau.",
            stageDirection: "En souriant",
            audioUrl: "/audio/s3/s3_l2_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Doucement, petit avocat. D'abord, tu m'apprends à poster des vidéos avec du bon son sur ce réseau social.",
            stageDirection: "En souriant",
            audioUrl: "/audio/s3/s3_l2_fr-BE.mp3"
          },
          "es-ES": {
            text: "Tranquilo, abogado diminuto. Primero enséñame a subir videos con música moderna a esa red social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_es-ES.mp3"
          },
          "el-GR": {
            text: "Χαλάρωσε, μικροσκοπικέ δικηγόρε. Πρώτα μάθε μου πώς να ανεβάζω βίντεο με μοντέρνα μουσική σε αυτό το κοινωνικό δίκτυο.",
            stageDirection: "Ισορροπώντας πάνω στο σκέιτμπορντ του",
            audioUrl: "/audio/s3/s3_l2_el-GR.mp3"
          },
          "es-MX": {
            text: "Cálmate, abogado de bolsillo. Primero enséñame a subir videos con música a esa red social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_es-MX.mp3"
          },
          "es-AR": {
            text: "Pará un poco, abogadito. Primero enseñame a subir videos con música a esa red social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_es-AR.mp3"
          },
          "es-DO": {
            text: "¡Suave ahí, licenciado de juguete! Primero enséñame a ser viral en la aplicación de los bailes.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_es-DO.mp3"
          },
          "es-PR": {
            text: "¡Tranquilo, mini abogado! Primero enséñame a subir videos con piquete a esa red social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_es-PR.mp3"
          },
          "es-CO": {
            text: "Cálmese, abogado chiquito. Primero enséñeme a subir videos virales a esa red social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_es-CO.mp3"
          },
          "fr-FR": {
            text: "Du calme, mini-avocat. D'abord, tu m'apprends à poster des vidéos de danse avec de la musique moderne.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Calme-toi, l'avocat de poche ! Apprends-moi d'abord à mettre des vidéos avec des tounes à la mode sur l'application.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Doucement le petit juge ! D'abord montre-moi comment on met les vidéos qui dansent sur internet là.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Calma aí, mini-doutor. Primeiro você me ensina a postar vídeos com música naquele aplicativo de dança.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Calma, pequeno advogado. Primeiro ensinas-me a publicar vídeos com música moderna nessa rede social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_pt-PT.mp3"
          },
          "it-IT": {
            text: "Calma, piccolo avvocato. Prima insegnami a caricare video con musica moderna su quel social network.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_it-IT.mp3"
          },
          "ca-ES": {
            text: "Tranquil, advocat diminut. Primer ensenya'm a penjar vídeos amb música moderna a aquesta xarxa social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Calm, micuțule avocat. Mai întâi învață-mă cum să postez videoclipuri cu muzică modernă pe rețeaua aia socială.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Tranquilo, avogado miúdo. Primeiro ensíname a subir vídeos con música moderna a esa rede social.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Tranquil, avocat pichonet. D'en primièr ensenha-me a publicar de vidèos amb de musica modèrna sus aquela ret sociala.",
            stageDirection: "Divertido",
            audioUrl: "/audio/s1/s3_l2_gl-ES.mp3"
          },
          "de-DE": {
            text: "Ganz ruhig, Mini-Anwalt. Bring mir erst bei, wie man Videos mit moderner Musik ins Netz stellt.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_de-DE.mp3"
          },
          "de-CH": {
            text: "Ganz ruhig, Mini-Aawalt. Bring mer zerscht bi, wie me Videos mit moderner Musig uf Social Media ladet.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_de-CH.mp3"
          },
          "nl-NL": {
            text: "Rustig maar, mini-advocaatje. Leer me eerst maar eens filmpjes met moderne muziek op dat sociale netwerk te zetten.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Ta det med ro, vesle advokat. Lær meg først hvordan jeg legger ut videoer med moderne musikk på sosiale medier.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Ta det lugnt, mini-advokat. Lär mig först hur man lägger upp videor med modern musik på sociala medier.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_sv-SE.mp3"
          },
          "da-DK": {
            text: "Tag det roligt, lille advokat. Lær mig først, hvordan man uploader videoer med moderne musik på de sociale medier.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_da-DK.mp3"
          },
          "ru-RU": {
            text: "Полегче, юный адвокат. Сначала научи меня выкладывать танцевальные видео в эту вашу модную соцсеть.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Тихіше, маленький юристе. Спочатку навчи мене викладати відео з сучасною музикою в ту соцмережу.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Spokojnie, mały mecenasie. Najpierw naucz mnie, jak wrzucać filmiki z nowoczesną muzyką na te wasze sociale.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Klídek, kapesní advokáte. Nejdřív mě nauč nahrávat videa s moderní hudbou na ty sociální sítě.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Polako, mali odvjetniče. Prvo me nauči kako stavljati videe s modernom glazbom na tu društvenu mrežu.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Rauhoitu, pikku lakimies. Opetahan minulle ensin, miten ladataan videoita nykymusiikilla sinne sosiaaliseen mediaan.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Nyugalom, mini-ügyvéd úr. Előbb tanítsd meg, hogyan kell feltölteni zenés videókat arra a modern közösségi oldalra.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Lasai, abokatu txiki hori. Lehendabizi erakutsidazu sare sozial horretara musika modernoko bideoak igotzen.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Sakin ol bakalım minik avukat. Önce bana o sosyal medyaya modern müzikli videolar nasıl yüklenir onu öğret.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_tr-TR.mp3"
          },
          "ja-JP": {
            text: "落ち着けよ、ちびっ子弁護士！まずワシにあのダンス動画アプリのバズり方を教えるのが先じゃ！",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "先别急嘛，小董事长！你先教教我怎么在那个短视频软件上配上潮曲发街舞视频！",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "冷靜啲先啦細路大狀！你教咗我點樣喺嗰個跳舞App度配潮歌上熱門先啦！",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_yue-HK.mp3"
          },
          "ko-KR": {
            text: "진정하게나, 꼬마 변호사 양반. 우선 그 소셜 미디어 앱에 최신 음악 맞춰 댄스 영상 올리는 법부터 가르쳐주게.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_ko-KR.mp3"
          },
          "ar-XA": {
            text: "تمهل قليلاً يا محامي المستقبل. علمني أولاً كيف أرفع مقاطع فيديو بالموسيقى الحديثة على ذلك التطبيق.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_ar-XA.mp3"
          },
          "he-IL": {
            text: "תרגיע, עורך דין זעיר. קודם תלמד אותי להעלות סרטונים עם מוזיקה מודרנית לרשת החברתית הזאת.",
            stageDirection: "Haciendo equilibrio sobre su patineta",
            audioUrl: "/audio/s3/s3_l2_he-IL.mp3"
          },
          "es-VE": {
            text: "Y según mis cuentas de jubilado, si te doy dos euros me quedo sin comprar la canilla de pan.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_es-VE.mp3"
          },
          "es-CL": {
            text: "Y según mis cálculos de jubilado, si te paso dos euros me quedo sin comprar el pan para la once.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_es-CL.mp3"
          },
          "es-PE": {
            text: "Y según mis cálculos de jubilado, si te doy dos euros me quedo sin comprar el pan de la tarde.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_es-PE.mp3"
          },
          "es-CU": {
            text: "Y por mi cálculo de jubilado, si te doy dos euros me quedo sin el panecillo de la tarde.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_es-CU.mp3"
          },
          "es-GQ": {
            text: "Y según mis cálculos de jubilado, si te doy dos euros me quedo sin comprar el pan de la tarde.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_es-GQ.mp3"
          },
          "en-US": {
            text: "Easy there, pint-sized lawyer. First teach me how to upload videos with modern music to that social network.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-US.mp3"
          },
          "en-GB": {
            text: "Steady on, pocket-sized lawyer. First teach me how to upload videos with modern tunes to that social app.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Haud yer horses, wee lawyer. First teach me how tae pit up videos wi' modren music on that app.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Hold your horses, little lawyer. First you teach me how to upload them dancing videos with modern tunes to that app.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-US-south.mp3"
          },
          "en-IE": {
            text: "Hold your horses now, little lawyer. First teach me how to upload videos with modern tunes to that app.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-IE.mp3"
          },
          "en-AU": {
            text: "Hold your horses, little legal eagle. First teach me how to post videos with modern bangers on that app.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-AU.mp3"
          },
          "en-NZ": {
            text: "Chill out, little lawyer. First show me how to upload videos with modern music to that app.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Relax there, little lawyer. First teach me how to post videos with modern tunes on that social network.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-ZA.mp3"
          },
          "en-NG": {
            text: "Calm down, small lawyer. First teach me how to post videos with sweet modern music on that app!",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-NG.mp3"
          },
          "en-IN": {
            text: "Easy now, little lawyer sahab! First teach me how to upload videos with modern music to that app.",
            stageDirection: "Smiling",
            audioUrl: "/audio/s3/s3_l2_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Rustig maar, kleine advocaat. Toon mij eerst hoe ik video's met hedendaagse muziek op dat sociaal netwerk post.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "別急嘛，小律師。先教我怎麼把配了流行音樂的影片發到那個社交軟體上。",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_zh-TW.mp3"
          },
          "hi-IN": {
            text: "शांत हो जाओ, नन्हे वकील साहब। पहले मुझे उस ऐप पर नए गानों के साथ वीडियो डालना सिखाओ।",
            stageDirection: "मुस्कुराते हुए",
            audioUrl: "/audio/s3/s3_l2_hi-IN.mp3"
          },
          "ur-PK": {
            text: "پرسکون رہو، ننھے وکیل صاحب۔ پہلے مجھے اس ایپ پر نئے گانوں کے ساتھ ویڈیوز اپلوڈ کرنا سکھاؤ۔",
            stageDirection: "مسکراتے ہوئے",
            audioUrl: "/audio/s3/s3_l2_ur-PK.mp3"
          },
          "bn-IN": {
            text: "শান্ত হও, খুদে উকিলবাবু। আগে আমায় ওই সোশ্যাল মিডিয়ায় নতুন গানের ভিডিও পোস্ট করা শেখাও।",
            stageDirection: "হেসে",
            audioUrl: "/audio/s3/s3_l2_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਸ਼ਾਂਤ ਹੋ ਜਾ ਛੋਟੇ ਵਕੀਲ! ਪਹਿਲਾਂ ਮੈਨੂੰ ਨਵੇਂ ਗਾਣਿਆਂ ਵਾਲੇ ਵੀਡੀਓ ਅਪਲੋਡ ਕਰਨਾ ਤਾਂ ਸਿਖਾ।",
            stageDirection: "ਮੁਸਕਰਾਉਂਦੇ ਹੋਏ",
            audioUrl: "/audio/s3/s3_l2_pa-IN.mp3"
          },
          "gu-IN": {
            text: "શાંત થાઓ, નાના વકીલ સાહેબ. પહેલાં મને આ સોશિયલ નેટવર્ક પર નવા ગીતો સાથે વિડિયો મૂકતાં શીખવો.",
            stageDirection: "હસતાં હસતાં",
            audioUrl: "/audio/s3/s3_l2_gu-IN.mp3"
          },
          "mr-IN": {
            text: "शांत हो, छोट्या वकिला. आधी मला त्या सोशल ॲपवर आधुनिक गाण्यांसोबत व्हिडिओ टाकायला शिकव.",
            stageDirection: "हसत खेळत",
            audioUrl: "/audio/s3/s3_l2_mr-IN.mp3"
          },
          "ta-IN": {
            text: "அமைதியாக இரு குட்டி வழக்கறிஞரே. முதலில் அந்த செயலியில் புதிய பாடல்களுடன் வீடியோ பதிவேற்ற எனக்குக் கற்றுக் கொடு.",
            stageDirection: "புன்னகையுடன்",
            audioUrl: "/audio/s3/s3_l2_ta-IN.mp3"
          },
          "te-IN": {
            text: "శాంతించు చిన్న లాయర్. ముందుగా ఆ యాప్‌లో సరికొత్త పాటలతో వీడియోలు ఎలా అప్‌లోడ్ చేయాలో నాకు నేర్పించు.",
            stageDirection: "చిరునవ్వుతో",
            audioUrl: "/audio/s3/s3_l2_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಶಾಂತರಾಗಿ ಪುಟ್ಟ ವಕೀಲರೇ. ಮೊದಲು ನನಗೆ ಹೊಸ ಹಾಡುಗಳೊಂದಿಗೆ ವಿಡಿಯೋ ಅಪ್ಲೋಡ್ ಮಾಡುವುದನ್ನು ಕಲಿಸಿ.",
            stageDirection: "ನಗೆಮೊಗದಿಂದ",
            audioUrl: "/audio/s3/s3_l2_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ശാന്തനാകൂ കൊച്ചു വക്കീലേ. ആദ്യം ആ സോഷ്യൽ മീഡിയയിൽ പുതിയ പാട്ടുകൾക്കൊപ്പം വീഡിയോ ഇടാൻ എന്നെ പഠിപ്പിക്കൂ.",
            stageDirection: "ചിരിച്ചുകൊണ്ട്",
            audioUrl: "/audio/s3/s3_l2_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Bình tĩnh nào luật sư nhí. Trước tiên hãy chỉ cho ta cách đăng video nhạc sôi động lên mạng xã hội đã.",
            stageDirection: "Mỉm cười",
            audioUrl: "/audio/s3/s3_l2_vi-VN.mp3"
          },
          "th-TH": {
            text: "ใจเย็นก่อนทนายตัวจิ๋ว. สอนฉันอัปโหลดคลิปเพลงฮิตลงโซเชียลมีเดียให้เป็นก่อนสิ.",
            stageDirection: "ยิ้ม",
            audioUrl: "/audio/s3/s3_l2_th-TH.mp3"
          },
          "id-ID": {
            text: "Tenang dulu, pengacara cilik. Ajari aku dulu cara mengunggah video musik modern di media sosial itu.",
            stageDirection: "Tersenyum",
            audioUrl: "/audio/s3/s3_l2_id-ID.mp3"
          },
          "ms-MY": {
            text: "Bertenang, peguam kecil. Mula-mula ajar pakcik macam mana nak muat naik video berlagu moden ke aplikasi tu.",
            stageDirection: "Tersenyum",
            audioUrl: "/audio/s3/s3_l2_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Tulia, mwanasheria mdogo. Kwanza nifundishe kupakia video zenye muziki wa kisasa kwenye mtandao huo wa kijamii.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l2_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Epytu'u, abogado'i. Ñepyrũrã chembo'e emyanyhẽ hag̃ua video purahéi pyahu reheve.",
            stageDirection: "Ovy'ávo",
            audioUrl: "/audio/s3/s3_l2_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Hawkaylla, uchuk kamayuq. Ñawpaqta yachachiway chay mosoq taki videokunata churayta.",
            stageDirection: "Asirispa",
            audioUrl: "/audio/s3/s3_l2_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Samart'am, jisk'a abogado. Nayraqata yatichita kunjamatsa machaqa jaylli videonaka apantaña.",
            stageDirection: "Larustasisa",
            audioUrl: "/audio/s3/s3_l2_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Yolsehui, tepitzin tlamatini. Achto xinechmachti quenin nitlaliz videomej ica yancuic cuicatl.",
            stageDirection: "Huetzquiliztica",
            audioUrl: "/audio/s3/s3_l2_nah-MX.mp3"
          },
          "nv-US": {
            text: "Hazhóʼógo, bee hazʼáanii yázhí. Átsé sin ániidígíí bił video bikáaʼgi dah diidishłóós.",
            stageDirection: "Bikʼee chʼééhózhǫ́ǫgo",
            audioUrl: "/audio/s3/s3_l2_nv-US.mp3"
          },
        }
      },
      {
        id: "s3_l3",
        characterId: "mateo",
        defaultStageDirection: "Masticando con gravedad absoluta",
        expression: "smug",
        translations: {
          "fr-CH": {
            text: "Cela nécessitera une prolongation de mon couvre-feu. Et sur le plan nutritionnel, la glace compte comme produit laitier.",
            stageDirection: "Négociateur",
            audioUrl: "/audio/s3/s3_l3_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Cela exigera de repousser mon heure de coucher. Et sur le plan nutritionnel, la glace compte comme produit laitier.",
            stageDirection: "Négociateur",
            audioUrl: "/audio/s3/s3_l3_fr-BE.mp3"
          },
          "es-ES": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_es-ES.mp3"
          },
          "el-GR": {
            text: "Αυτό θα απαιτήσει παράταση της ώρας επιστροφής μου. Και από διατροφική άποψη, το παγωτό θεωρείται γαλακτοκομικό.",
            stageDirection: "Μασώντας με απόλυτη σοβαρότητα",
            audioUrl: "/audio/s3/s3_l3_el-GR.mp3"
          },
          "es-MX": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_es-MX.mp3"
          },
          "es-AR": {
            text: "Eso va a requerir una extensión de mi hora de dormir. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_es-AR.mp3"
          },
          "es-DO": {
            text: "Eso me cuesta acostarme dos horas más tarde. Y nutricionalmente hablando, el helado califica como lácteo.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_es-DO.mp3"
          },
          "es-PR": {
            text: "Eso va a requerir que me extienda la hora de dormir. Y nutricionalmente, el mantecado cuenta como lácteo.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_es-PR.mp3"
          },
          "es-CO": {
            text: "Eso exigirá una ampliación de mi hora de acostarme. Y desde un punto de vista nutricional, el helado es lácteo.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_es-CO.mp3"
          },
          "fr-FR": {
            text: "Cela exigera une prolongation de mon couvre-feu. Et d'un point de vue nutritionnel, la glace est considérée comme un produit laitier.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Ça va demander de repousser mon couvre-feu. Pis d'un point de vue nutritionnel, la crème glacée compte comme un produit laitier.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Ça va demander qu'on repousse l'heure de mon sommeil. Et sur le plan de la nourriture, la glace c'est du lait pur.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Isso vai exigir estender meu horário de dormir. E do ponto de vista nutricional, sorvete se qualifica como laticínio.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Isso exigirá um prolongamento da minha hora de deitar. E do ponto de vista nutricional, o gelado qualifica-se como laticínio.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_pt-PT.mp3"
          },
          "it-IT": {
            text: "Ciò richiederà un'estensione del mio coprifuoco. E da una prospettiva nutrizionale, il gelato si qualifica come latticino.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_it-IT.mp3"
          },
          "ca-ES": {
            text: "Això requerirà una extensió del meu toc de queda. I des d'una perspectiva nutricional, el gelat compta com a làctic.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Asta va necesita o prelungire a orei mele de culcare. Iar din punct de vedere nutrițional, înghețata se califică drept produs lactat.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Iso vai requirir unha extensión da miña hora de durmir. E nutricionalmente, o xeado cualifícase como lácteo.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Aquò demandarà una extension de ma cobrafuòc. E d'un ponch de vista nutricional, lo glaçat compta coma un produch lachièr.",
            stageDirection: "Pensativo",
            audioUrl: "/audio/s1/s3_l3_gl-ES.mp3"
          },
          "de-DE": {
            text: "Das erfordert eine Verlängerung meiner Schlafenszeit. Und ernährungsphysiologisch gilt Eiscreme als vollwertiges Milchprodukt.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_de-DE.mp3"
          },
          "de-CH": {
            text: "Das bruucht en Verlengerig vo miner Schlafeziit. Und us ernährigstechnischer Sicht gilt Glacé als vollwertigs Milchprodukt.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_de-CH.mp3"
          },
          "nl-NL": {
            text: "Dat vereist een verlenging van mijn bedtijd. En vanuit nutritioneel oogpunt kwalificeert ijs als zuivelproduct.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Det vil kreve en utsettelse av leggetiden min. Og fra et ernæringsmessig synspunkt kvalifiserer iskrem som et meieriprodukt.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Det kräver en förlängning av min läggtid. Och ur ett näringsmässigt perspektiv räknas glass som en mejeriprodukt.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_sv-SE.mp3"
          },
          "da-DK": {
            text: "Det vil kræve en forlængelse af min sengetid. Og ud fra et ernæringsmæssigt synspunkt tæller is som et mejeriprodukt.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_da-DK.mp3"
          },
          "ru-RU": {
            text: "Это потребует продления времени моего отбоя ко сну. И с точки зрения диетологии, мороженое квалифицируется как молочный продукт.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Це вимагатиме відтермінування часу мого сну. А з погляду нутриціології, морозиво класифікується як молочний продукт.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Będzie to wymagało przesunięcia godziny mojego pójścia spać. A z perspektywy dietetycznej lody kwalifikują się jako nabiał.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "To bude vyžadovat posunutí mé večerky. A z výživového hlediska se zmrzlina kvalifikuje jako mléčný výrobek.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "To će zahtijevati produljenje mog vremena za spavanje. A s nutricionističkog gledišta, sladoled se kvalificira kao mliječni proizvod.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Se edellyttää nukkumaanmenoaikani pidentämistä. Ja ravitsemuksellisesta näkökulmasta jäätelö luokitellaan maitotuotteeksi.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Ez a takarodóm meghosszabbítását teszi szükségessé. Táplálkozási szempontból pedig a fagylalt tejterméknek minősül.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Horrek nire oheratzeko ordua atzeratzea eskatuko du. Eta nutrizio ikuspegitik, izozkia esnekitzat hartzen da.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Bu, yatma saatimin ertelenmesini gerektirir. Ayrıca besinsel açıdan bakıldığında dondurma bir süt ürünü sayılır.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_tr-TR.mp3"
          },
          "ja-JP": {
            text: "それには就寝時刻の延長措置が必要です。なお栄養学的にアイスクリームは乳製品に該当します。",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "这需要延长我的就寝时限。另外从纯粹营养学角度来看，冰淇淋完全属于优质乳制品。",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "咁樣需要推遲我嘅瞓覺時間。同埋從純營養學角度嚟睇，雪糕完全合乎奶類製品嘅標準。",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_yue-HK.mp3"
          },
          "ko-KR": {
            text: "그것은 제 취침 시간 연장을 필요로 합니다. 덧붙여 영양학적 관점에서 아이스크림은 유제품으로 분류됩니다.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_ko-KR.mp3"
          },
          "ar-XA": {
            text: "هذا الأمر سيتطلب تمديد موعد نومي. ومن منظور غذائي، يُصنف الآيس كريم كمنتج ألبان.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_ar-XA.mp3"
          },
          "he-IL": {
            text: "זה ידרוש הארכה של שעת השינה שלי. ומבחינה תזונתית גרידא, גלידה מוגדרת כמוצר חלב.",
            stageDirection: "Masticando con gravedad absoluta",
            audioUrl: "/audio/s3/s3_l3_he-IL.mp3"
          },
          "es-VE": {
            text: "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_es-VE.mp3"
          },
          "es-CL": {
            text: "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción po!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_es-CL.mp3"
          },
          "es-PE": {
            text: "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_es-PE.mp3"
          },
          "es-CU": {
            text: "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_es-CU.mp3"
          },
          "es-GQ": {
            text: "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_es-GQ.mp3"
          },
          "en-US": {
            text: "That will require an extension of my curfew. And from a nutritional perspective, ice cream qualifies as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-US.mp3"
          },
          "en-GB": {
            text: "That will necessitate an extension of my curfew. And from a nutritional standpoint, ice cream qualifies as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "That'll need an extension tae ma bedtime. And nutrition-wise, ice cream counts as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "That'll require pushing back my bedtime curfew. And nutrition-wise, ice cream definitely counts as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-US-south.mp3"
          },
          "en-IE": {
            text: "That will need an extension to my curfew. And from a nutritional point of view, ice cream counts as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-IE.mp3"
          },
          "en-AU": {
            text: "That's gonna need a curfew extension, mate. And nutritionally speaking, ice cream totally counts as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-AU.mp3"
          },
          "en-NZ": {
            text: "That'll need an extension to my curfew. And nutritionally speaking, ice cream totally counts as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-NZ.mp3"
          },
          "en-ZA": {
            text: "That will require an extension of my curfew, man. And nutrition-wise, ice cream counts as dairy.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-ZA.mp3"
          },
          "en-NG": {
            text: "That one mean say my sleeping time must extend. And nutritionally, ice cream na pure dairy food!",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-NG.mp3"
          },
          "en-IN": {
            text: "That will require an official extension of my curfew. And from a nutritional standpoint, ice cream counts as dairy only.",
            stageDirection: "Negotiating",
            audioUrl: "/audio/s3/s3_l3_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Dat vereist een verlenging van mijn avondklok. En nutritioneel gezien telt ijs als zuivelproduct.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "那我的門禁時間得延後。而且從營養學角度來看，冰淇淋屬於乳製品。",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_zh-TW.mp3"
          },
          "hi-IN": {
            text: "इसके लिए मेरे घर लौटने का समय बढ़ाना पड़ेगा। और पोषण के नज़रिए से, आइसक्रीम डेयरी उत्पाद में आती है।",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_hi-IN.mp3"
          },
          "ur-PK": {
            text: "اس کے لیے میرے سونے کے وقت میں توسیع درکار ہوگی۔ اور غذائی اعتبار سے، آئس کریم ڈیری مصنوعات میں شمار ہوتی ہے۔",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ur-PK.mp3"
          },
          "bn-IN": {
            text: "তাহলে আমার বাড়ি ফেরার সময় বাড়াতে হবে। আর পুষ্টিগুণের দিক থেকে আইসক্রিম তো দুগ্ধজাত খাবার।",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਇਸ ਲਈ ਮੇਰੇ ਘਰ ਆਉਣ ਦਾ ਸਮਾਂ ਵਧਾਉਣਾ ਪਵੇਗਾ। ਅਤੇ ਪੌਸ਼ਟਿਕਤਾ ਪੱਖੋਂ ਆਈਸਕ੍ਰੀਮ ਡੇਅਰੀ ਉਤਪਾਦ ਹੀ ਹੈ।",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_pa-IN.mp3"
          },
          "gu-IN": {
            text: "એ માટે મારે ઘરે આવવાનો સમય લંબાવવો પડશે. અને પોષણની દ્રષ્ટિએ આઈસ્ક્રીમ ડેરી પ્રોડક્ટ ગણાય.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_gu-IN.mp3"
          },
          "mr-IN": {
            text: "त्यासाठी माझ्या घरी परतण्याची वेळ वाढवावी लागेल. आणि पौष्टिकतेच्या दृष्टीने आईस्क्रीम हे दुग्धजन्य पदार्थ मानले जाते.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_mr-IN.mp3"
          },
          "ta-IN": {
            text: "அதற்கு என் தூங்கும் நேரத்தை நீட்டிக்க வேண்டும். ஊட்டச்சத்து பார்வையில் ஐஸ்கிரீம் பால் உணவு வகையைச் சேர்ந்தது.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ta-IN.mp3"
          },
          "te-IN": {
            text: "దానికి నా ఇంటికి వెళ్లే సమయాన్ని పొడిగించాలి. పైగా పోషకాహార పరంగా ఐస్ క్రీం పాల పదార్థాల కోవలోకి వస్తుంది.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಅದಕ್ಕೆ ನನ್ನ ಮನೆಗೆ ಹೋಗುವ ಸಮಯವನ್ನು ವಿಸ್ತರಿಸಬೇಕು. ಮತ್ತು ಪೌಷ್ಟಿಕಾಂಶದ ದೃಷ್ಟಿಯಿಂದ ಐಸ್ ಕ್ರೀಮ್ ಹಾಲಿನ ಉತ್ಪನ್ನವಾಗಿದೆ.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_kn-IN.mp3"
          },
          "ml-IN": {
            text: "അതിന് എന്റെ ഉറങ്ങാനുള്ള സമയം നീട്ടിത്തരണമെന്ന് വരും. പോഷകാഹാര വീക്ഷണത്തിൽ ഐസ്ക്രീം പാലുൽപ്പന്നമായി കണക്കാക്കാം.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Việc đó đòi hỏi cháu phải được lùi giờ giới nghiêm. Và xét theo góc độ dinh dưỡng, kem được tính là sản phẩm từ sữa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_vi-VN.mp3"
          },
          "th-TH": {
            text: "ถ้าแบบนั้นผมต้องขอขยายเวลาเคอร์ฟิวกลับบ้านครับ และตามหลักโภชนาการ ไอศกรีมนับเป็นผลิตภัณฑ์จากนมนะ",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_th-TH.mp3"
          },
          "id-ID": {
            text: "Itu berarti jam malamku harus diperpanjang. Dan dari sudut pandang gizi, es krim terhitung sebagai produk susu.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_id-ID.mp3"
          },
          "ms-MY": {
            text: "Itu memerlukan masa balik rumah saya dilanjutkan. Dan dari segi pemakanan, aiskrim dikira sebagai produk tenusu.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Hiyo itahitaji kuongezwa kwa muda wangu wa kulala. Na kulingana na lishe, aiskrimu ni sawa na maziwa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Upéva tekotevẽta apyta che rógape areve pyharekue. Ha tembi'u porã rekópe, pe helado niko kamby rehegua.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Chaypaqqa wasiman kutinay ratu mast'arikunan. Kallpa qokuq kaqpiqa, jeladoqa lechemanta ruwasqan.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Ukatakixa utaru kutt'añ urasax jilxattatañapawa. Manq'at qillqatarusti, heladox lichit lurataw jakhusiri.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Inon monequiz ocachi cahuitl ic nicochiz. Ihuan ipan qualotl tlacualiztli, in cecec tlacualli tlapohualli quemeh chichiualatl.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_nah-MX.mp3"
          },
          "nv-US": {
            text: "Éí doodago shá bił hazhóʼó gohwééh bił jidootsʼił. Dóó chʼiyáán átʼéegi abeʼ átʼé abeʼ bił ałhízhchínígíí.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_nv-US.mp3"
          }
        }
      },
      {
        id: "s3_l4",
        characterId: "don_ramon",
        defaultStageDirection: "Chocando los puños con el niño",
        expression: "cheerful",
        translations: {
          "fr-CH": {
            text: "Affaire conclue, associé ! À mon âge, pas besoin de permission : double glace et on va faire du skate !",
            stageDirection: "Victorieux",
            audioUrl: "/audio/s3/s3_l4_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Affaire conclue, associé ! À mon âge je ne demande plus la permission : double glace et on file rouler en planche !",
            stageDirection: "Victorieux",
            audioUrl: "/audio/s3/s3_l4_fr-BE.mp3"
          },
          "es-ES": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_es-ES.mp3"
          },
          "el-GR": {
            text: "Συμφωνήσαμε, συνεταίρε! Στην ηλικία μου δεν ζητάω άδεια, ζητάω διπλό παγωτό και πάμε για σκέιτ!",
            stageDirection: "Κάνοντας γροθιά με γροθιά με το παιδί",
            audioUrl: "/audio/s3/s3_l4_el-GR.mp3"
          },
          "es-MX": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a la pista en patineta!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_es-MX.mp3"
          },
          "es-AR": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a andar en skate!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_es-AR.mp3"
          },
          "es-DO": {
            text: "¡Esa e', mi socio! ¡A mi edad no pido permiso, pido helado doble y vamo' a romper la pista!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_es-DO.mp3"
          },
          "es-PR": {
            text: "¡Trato cerrado, socio! A mi edad no pido permiso, pido mantecado doble y nos vamos a patinar.",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_es-PR.mp3"
          },
          "es-CO": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, pido helado doble y nos vamos a montar tabla.",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_es-CO.mp3"
          },
          "fr-FR": {
            text: "Affaire conclue, partenaire ! À mon âge, pas besoin de permission : double dose de glace et en route pour le skatepark !",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Marché conclu, mon chum ! À mon âge, je demande pas de permission : double portion de crème glacée pis on part en planche !",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Marché conclu mon petit ! À mon âge là je ne demande pas permission : double glace et on va rouler au skatepark !",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Fechou, parceiro! Na minha idade não peço permissão, peço sorvete duplo e bora pro skate!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Negócio fechado, parceiro! Na minha idade não peço licença, peço gelado duplo e vamos andar de skate!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_pt-PT.mp3"
          },
          "it-IT": {
            text: "Affare fatto, socio! Alla mia età non chiedo il permesso, chiedo un gelato doppio e andiamo sullo skateboard!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_it-IT.mp3"
          },
          "ca-ES": {
            text: "Tracte fet, soci! A la meva edat no demano permís, demano gelat doble i anem a patinar!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_ca-ES.mp3"
          },
          "ro-RO": {
            text: "S-a făcut, parteneru'! La vârsta mea nu cer voie, cer înghețată dublă și plecăm la skatepark!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Trato feito, socio! Á miña idade non pido permiso, pido dobre xeado e imos patinar!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Afhar conclús, sòci! A mon edat demandi pas ges de permission: demandi un glaçat doble e anam patinar!",
            stageDirection: "Triunfante",
            audioUrl: "/audio/s1/s3_l4_gl-ES.mp3"
          },
          "de-DE": {
            text: "Abgemacht, Partner! In meinem Alter frage ich nicht um Erlaubnis, ich bestelle doppeltes Eis und ab auf die Piste!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_de-DE.mp3"
          },
          "de-CH": {
            text: "Abgmacht, Partner! I mim Alter frögi nid um Erlaubnis, ich bstell doppleti Glacé und ab uf s Skateboard!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_de-CH.mp3"
          },
          "nl-NL": {
            text: "Deal, maatje! Op mijn leeftijd vraag ik geen toestemming, ik bestel dubbel ijs en we gaan skaten!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Avtale, kompis! I min alder ber jeg ikke om lov, jeg bestiller dobbel is og så drar vi for å skate!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Klappat och klart, partner! I min ålder ber jag inte om lov, jag beställer dubbelglass och sen drar vi och skejtar!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_sv-SE.mp3"
          },
          "da-DK": {
            text: "Aftale, makker! I min alder beder jeg ikke om lov, jeg bestiller dobbelt is og så skal vi ud at skate!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_da-DK.mp3"
          },
          "ru-RU": {
            text: "По рукам, партнёр! В моём возрасте я не прошу разрешения, я требую двойную порцию мороженого и вперёд на скейтборд!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Домовилися, партнере! У моєму віці дозволу не питають: беремо подвійне морозиво й летимо кататися на скейті!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Zgoda, wspólniku! W moim wieku nie pytam o pozwolenie: zamawiam podwójne lody i ruszamy na deskorolkę!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Platí, parťáku! V mém věku už se neptám na dovolení: dám si dvojitou zmrzlinu a valíme na skate!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Dogovoreno, partneru! U mojim godinama ne tražim dopuštenje: naručujem dupli sladoled i idemo na skejt!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Sovittu, kaveri! Minun iässäni ei lupia kysellä: tuplajäätelö pöytään ja skeittaamaan!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Áll az alku, partner! Az én koromban már nem kérek engedélyt: dupla fagyit kérek és irány a gördeszka!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Hitzarmena eginda, laguna! Nire adinean ez dut baimenik eskatzen: izozki bikoitza eskatu eta goazen skatean ibiltzera!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Anlaştık ortak! Benim yaşımdakiler izin istemez, duble dondurma ister ve kaykay kaymaya gider!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_tr-TR.mp3"
          },
          "ja-JP": {
            text: "商談成立じゃ、相棒！ワシの年になれば許可なんぞ取らん、アイスダブル盛りでスケボー直行じゃ！",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "成交，我的小合伙人！到了我这个年纪用不着请示任何人，双份冰淇淋加滑板，即刻出发！",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "成交，小拍檔！去到我呢個年紀唔使問准任何人，雙球雪糕加滑板，即刻出發！",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_yue-HK.mp3"
          },
          "ko-KR": {
            text: "협상 타결일세, 파트너! 내 나이엔 허락 따윈 안 구해, 더블 아이스크림 먹고 바로 스케이트보드 타러 가세!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_ko-KR.mp3"
          },
          "ar-XA": {
            text: "تم الاتفاق يا شريكي! في مثل سني لا أطلب إذناً، بل أطلب مثلجات مضاعفة ولننطلق للتزلج!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_ar-XA.mp3"
          },
          "he-IL": {
            text: "העסקה סגורה, שותף! בגילי אני לא מבקש רשות: מזמין גלידה כפולה ויוצאים לסשן סקייטבורד!",
            stageDirection: "Chocando los puños con el niño",
            audioUrl: "/audio/s3/s3_l4_he-IL.mp3"
          },
          "es-VE": {
            text: "Bueno, te doy un euro si me explicas qué significa 'intergeneracional' sin enredos.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_es-VE.mp3"
          },
          "es-CL": {
            text: "Ya, te paso un euro si me explicái qué significa 'intergeneracional' sin palabras siúticas.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_es-CL.mp3"
          },
          "es-PE": {
            text: "Ya, te doy un euro si me explicas qué significa 'intergeneracional' en cristiano.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_es-PE.mp3"
          },
          "es-CU": {
            text: "Bueno, te suelto un euro si me explicas qué quiere decir 'intergeneracional' sin tanto rodeo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_es-CU.mp3"
          },
          "es-GQ": {
            text: "Bueno, te doy un euro si me explicas qué significa 'intergeneracional' sin palabras raras.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_es-GQ.mp3"
          },
          "en-US": {
            text: "Deal, partner! At my age I don't ask for permission, I ask for a double scoop and we go skateboarding!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-US.mp3"
          },
          "en-GB": {
            text: "Done deal, partner! At my age I don't ask for permission, I order a double scoop and we're off skateboarding!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Deal, partner! At ma age A dinna ask permission: A get a double scoop and we're off tae skateboard!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Done deal, partner! At my age I don't ask for no permission: I order a double scoop and we hit the skatepark!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-US-south.mp3"
          },
          "en-IE": {
            text: "It's a deal, partner! At my age I don't ask for permission: double scoop of ice cream and we're off skateboarding!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-IE.mp3"
          },
          "en-AU": {
            text: "Done deal, mate! At my age I don't ask for permission: double scoop and let's go hit the skatepark!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-AU.mp3"
          },
          "en-NZ": {
            text: "Done deal, partner! At my age I don't ask permission: double scoop and let's go skateboarding!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Deal, partner! At my age I don't ask permission: double scoop and let's go skateboarding, china!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-ZA.mp3"
          },
          "en-NG": {
            text: "Deal closed, partner! For my age I no dey ask permission: na double ice cream and skatepark straight!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-NG.mp3"
          },
          "en-IN": {
            text: "Pakka deal, partner! At my age I don't take permission: I order double scoop ice cream and we go skateboarding!",
            stageDirection: "Victorious",
            audioUrl: "/audio/s3/s3_l4_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Afgesproken, makker! Op mijn leeftijd vraag ik geen toestemming, ik vraag een dubbel ijsje en we gaan skateboarden!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "成交，夥伴！在我這個年紀可不用打報告，來份雙球冰淇淋，咱們溜滑板去！",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_zh-TW.mp3"
          },
          "hi-IN": {
            text: "सौदा पक्का, पार्टनर! मेरी उम्र में मैं इजाज़त नहीं माँगता, सीधे डबल आइसक्रीम माँगता हूँ और चलो स्केटबोर्डिंग करते हैं!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_hi-IN.mp3"
          },
          "ur-PK": {
            text: "سودا پکا، پارٹنر! میری عمر میں میں اجازت نہیں مانگتا، ڈبل آئس کریم مانگتا ہوں اور چلو اسکیٹ بورڈنگ کرتے ہیں!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ur-PK.mp3"
          },
          "bn-IN": {
            text: "চুক্তি পাকা, পার্টনার! আমার বয়সে আমি অনুমতি নিই না, ডবল আইসক্রিম চেয়ে নিয়ে স্কেটবোর্ড চালাতে যাই!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਸੌਦਾ ਪੱਕਾ, ਦੋਸਤ! ਮੇਰੀ ਉਮਰ ਵਿੱਚ ਮੈਂ ਇਜਾਜ਼ਤ ਨਹੀਂ ਮੰਗਦਾ, ਡਬਲ ਆਈਸਕ੍ਰੀਮ ਮੰਗ ਕੇ ਸਕੇਟਬੋਰਡ ਚਲਾਉਣ ਚੱਲਦੇ ਹਾਂ!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_pa-IN.mp3"
          },
          "gu-IN": {
            text: "સોદો પાકો, દોસ્ત! મારી ઉંમરે હું પરવાનગી નથી માંગતો, ડબલ આઈસ્ક્રીમ માંગું છું અને ચાલ સ્કેટબોર્ડ કરવા જઈએ!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_gu-IN.mp3"
          },
          "mr-IN": {
            text: "ठरलं तर मग, दोस्ता! माझ्या वयात मी परवानगी मागत नाही, डबल आईस्क्रीम घेतो आणि चल स्केटबोर्डिंग करूया!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_mr-IN.mp3"
          },
          "ta-IN": {
            text: "முடிவு பண்ணிட்டோம் பங்குதாரரே! என் வயதில் அனுமதி கேட்பதில்லை, டபுள் ஐஸ்கிரீம் சாப்பிட்டு ஸ்கேட்போர்டிங் போவோம்!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ta-IN.mp3"
          },
          "te-IN": {
            text: "ఒప్పందం కుదిరింది, పార్టనర్! నా వయసులో నేను అనుమతి అడగను, డబుల్ ఐస్ క్రీం తీసుకుని స్కేట్‌బోర్డింగ్‌కి వెళ్దాం!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಒಪ್ಪಂದವಾಯಿತು, ಪಾಲುದಾರ! ನನ್ನ ವಯಸ್ಸಿನಲ್ಲಿ ನಾನು ಅನುಮತಿ ಕೇಳುವುದಿಲ್ಲ, ಡಬಲ್ ಐಸ್ ಕ್ರೀಮ್ ತಿಂದು ಸ್ಕೇಟ್‌ಬೋರ್ಡಿಂಗ್ ಮಾಡೋಣ!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_kn-IN.mp3"
          },
          "ml-IN": {
            text: "തീരുമാനമായി പങ്കാളീ! എന്റെ പ്രായത്തിൽ ഞാൻ അനുവാദം ചോദിക്കാറില്ല, ഇരട്ട ഐസ്ക്രീം ഓർഡർ ചെയ്ത് സ്കേറ്റ്ബോർഡിംഗിന് പോകുന്നു!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Chốt kèo, đồng đội! Ở tuổi của bác chẳng cần xin phép ai, cứ gọi kem đôi rồi chúng ta đi trượt ván nào!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_vi-VN.mp3"
          },
          "th-TH": {
            text: "ตกลงตามนั้น คู่หู! วัยอย่างตาน่ะไม่ต้องขออนุญาตใครแล้ว ขอไอติมสองลูกแล้วไปเล่นสเก็ตบอร์ดกันเลย!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_th-TH.mp3"
          },
          "id-ID": {
            text: "Sepakat, kawan! Di usiaku sekarang aku tak butuh izin, beri aku dua sekop es krim dan ayo kita main papan seluncur!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_id-ID.mp3"
          },
          "ms-MY": {
            text: "Setuju, rakan kongsi! Pada usia pakcik tak perlu minta izin, mari pesan aiskrim dua skop dan pergi main papan luncur!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Tumekubaliana, mshirika! Katika umri wangu siombi ruhusa, naagiza aiskrimu mbili na tunaenda kuteleza kwenye ubao!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Jajapo pe trato, che irũ! Che edápe niko naporanduvéi permíso, ajerure helado doble ha jaha japatinávo!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¡Allinmi, masiy! Machuyasqaypiqa manan permisota mañakunichu, iskay heladota mañakuspa patinayta qallarinchis!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¡Iyau satäxiwa, masita! Nayana marajax janiw permiso mayjti, paya helado mayisina patinart'añani!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¡Ye omochiuh, notlatocauh! Ipan nohueyicah amo nitlatlania, nicnequi ome cecec tlacualli ihuan tihuiah tipatinaro!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_nah-MX.mp3"
          },
          "nv-US": {
            text: "Ałhaʼdeetʼaah, shikʼis! Shí doo tʼáá kóníghánígóó shaa nisin da, naaki ałhízhchínígíí dóó nidaʼiitsoh doo!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_nv-US.mp3"
          }
        }
      },
    ]
  },
  {
    id: "story_4",
    title: "La Devolución Imposible",
    subtitle: "Hugo + Clara + Bea",
    characters: ["hugo", "clara", "bea"],
    conflictType: "Hugo sospecha espionaje en un electrodoméstico; Bea sigue el manual al pie de la letra.",
    vocabularyTheme: "Compras, atención al cliente, electrodomésticos, quejas cotidianas y hogar.",
    lines: [
      {
        id: "s4_l1",
        characterId: "hugo",
        defaultStageDirection: "Sosteniendo la tostadora envuelta en papel burbuja con máxima cautela",
        expression: "conspiracy",
        translations: {
          "fr-CH": {
            text: "Clara, mets-toi derrière moi. Ce grille-pain bipe en morse chaque fois que le pain saute. Je suis certain qu'il transmet nos discussions au ministère.",
            stageDirection: "En chuchotant gravement",
            audioUrl: "/audio/s4/s4_l1_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Clara, mets-toi derrière moi. Ce grille-pain émet des bips en morse chaque fois que le pain saute. Je suis convaincu qu'il transmet nos conversations au ministère, une fois !",
            stageDirection: "En chuchotant gravement",
            audioUrl: "/audio/s4/s4_l1_fr-BE.mp3"
          },
          "es-ES": {
            text: "Clara, ponte detrás de mí. Esta tostadora emite pitidos en código morse cada vez que salta el pan. Estoy convencido de que transmite nuestras conversaciones al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-ES.mp3"
          },
          "el-GR": {
            text: "Κλάρα, έλα πίσω μου. Αυτή η φρυγανιέρα κάνει μπιπ σε κώδικα Μορς κάθε φορά που πετάγεται το ψωμί. Είμαι σίγουρος ότι μεταδίδει τις συνομιλίες μας στο υπουργείο.",
            stageDirection: "Ψιθυρίζοντας με σοβαρότητα",
            audioUrl: "/audio/s4/s4_l1_el-GR.mp3"
          },
          "es-MX": {
            text: "Clara, ponte atrás de mí. Este tostador anda pitando en clave morse cada que bota el pan. Estoy segurísimo de que le transmite nuestras pláticas a la secretaría.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-MX.mp3"
          },
          "es-AR": {
            text: "Clara, ponete atrás mío. Esta tostadora tira pitidos en código morse cada vez que salta el pan. Estoy convencido de que le manda nuestras charlas al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-AR.mp3"
          },
          "es-DO": {
            text: "Clara, ponte detrás de mí. Esta tostadora emite pitidos en código morse cada vez que salta el pan. Estoy convencido de que le pasa lo que hablamos al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-DO.mp3"
          },
          "es-PR": {
            text: "Clara, tírate detrás de mí. Esta tostadora emite pitidos en código morse cada vez que brinca el pan. Estoy seguro que le tira nuestras conversaciones al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-PR.mp3"
          },
          "es-CO": {
            text: "Clara, hágase detrás de mí. Este tostador pita en código morse cada vez que bota el pan. Estoy segurísimo de que le pasa nuestras charlas al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-CO.mp3"
          },
          "fr-FR": {
            text: "Clara, mets-toi derrière moi. Ce grille-pain émet des bips en morse chaque fois que le pain saute. Je suis convaincu qu'il transmet nos conversations au ministère.",
            stageDirection: "Chuchotant avec gravité",
            audioUrl: "/audio/s4/s4_l1_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Clara, place-toi en arrière de moi. Ce grille-pain-là fait des bips en morse à chaque fois que la toast saute. J'suis sûr qu'il envoie nos jasettes au ministère.",
            stageDirection: "Chuchotant très sérieusement",
            audioUrl: "/audio/s4/s4_l1_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Clara, viens derrière moi dêh ! Le grille-pain là bipe en morse quand le pain saute. Je suis calé qu'il envoie nos palabres au ministère !",
            stageDirection: "En chuchotant avec inquiétude",
            audioUrl: "/audio/s4/s4_l1_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Clara, fica atrás de mim. Essa torradeira tá apitando em código morse toda vez que o pão pula. Tenho certeza de que ela tá mandando nossas conversas pro ministério.",
            stageDirection: "Sussurrando com gravidade",
            audioUrl: "/audio/s4/s4_l1_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Clara, fica atrás de mim. Esta torradeira emite bipes em código morse cada vez que o pão salta. Estou convencido de que transmite as nossas conversas para o ministério.",
            stageDirection: "Sussurrando com gravidade",
            audioUrl: "/audio/s4/s4_l1_pt-PT.mp3"
          },
          "it-IT": {
            text: "Clara, mettiti dietro di me. Questo tostapane emette segnali in codice morse ogni volta che salta il pane. Sono convinto che trasmetta le nostre conversazioni al ministero.",
            stageDirection: "Sussurrando con gravità",
            audioUrl: "/audio/s4/s4_l1_it-IT.mp3"
          },
          "ca-ES": {
            text: "Clara, posa't darrere meu. Aquesta torradora pita en codi morse cada vegada que salta el pa. Estic convençut que transmet les nostres converses al ministeri.",
            stageDirection: "Murmurant amb gravetat",
            audioUrl: "/audio/s4/s4_l1_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Clara, treci în spatele meu. Acest prăjitor de pâine piuie în codul morse de fiecare dată când sare pâinea. Sunt convins că transmite conversațiile noastre la minister.",
            stageDirection: "Șoptind grav",
            audioUrl: "/audio/s4/s4_l1_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Clara, ponte detrás de min. Esta torradora emite asubíos en código morse cada vez que salta o pan. Estou convencido de que lle transmite as nosas conversas ao ministerio.",
            stageDirection: "Susurrando con gravidade",
            audioUrl: "/audio/s4/s4_l1_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Clara, te bota darrièr ieu. Aquela grasilhadeira bipa en còdi morse cada còp que lo pan sauta. Siái segur que transmet nòstras convèrsas al ministèri.",
            stageDirection: "Murmurent amb gravetat",
            audioUrl: "/audio/s4/s4_l1_oc-FR.mp3"
          },
          "de-DE": {
            text: "Clara, stell dich hinter mich. Dieser Toaster piept jedes Mal im Morsecode, wenn das Brot herausspringt. Ich bin überzeugt, dass er unsere Gespräche an das Ministerium übermittelt.",
            stageDirection: "Ernst flüsternd",
            audioUrl: "/audio/s4/s4_l1_de-DE.mp3"
          },
          "de-CH": {
            text: "Clara, gang hinder mich. Dä Toaster piepst jedes Mal im Morsecode, wenn s'Brot usespringt. Ich bi sicher, dass er üsi Gspröch as Ministerium wyterleitet.",
            stageDirection: "Ernsthaft flüschternd",
            audioUrl: "/audio/s4/s4_l1_de-CH.mp3"
          },
          "nl-NL": {
            text: "Clara, ga achter me staan. Deze broodrooster piept in morsecode telkens als het brood omhoog springt. Ik ben ervan overtuigd dat hij onze gesprekken naar het ministerie doorseint.",
            stageDirection: "Ernstig fluisterend",
            audioUrl: "/audio/s4/s4_l1_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Clara, still deg bak meg. Denne brødristeren piper i morsekode hver gang brødet spretter opp. Jeg er overbevist om at den sender samtalene våre til departementet.",
            stageDirection: "Hviskende med alvor",
            audioUrl: "/audio/s4/s4_l1_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Clara, ställ dig bakom mig. Den här brödrosten piper i morsekod varje gång brödet hoppar upp. Jag är övertygad om att den överför våra samtal till ministeriet.",
            stageDirection: "Viskande med allvar",
            audioUrl: "/audio/s4/s4_l1_sv-SE.mp3"
          },
          "da-DK": {
            text: "Clara, stil dig bag mig. Denne brødrister bipper i morsekode, hver gang brødet springer op. Jeg er overbevist om, at den sender vores samtaler videre til ministeriet.",
            stageDirection: "Hvidskende alvorligt",
            audioUrl: "/audio/s4/s4_l1_da-DK.mp3"
          },
          "ru-RU": {
            text: "Клара, встань за мной. Этот тостер пищит азбукой Морзе каждый раз, когда выскакивает хлеб. Я убеждён, что он передаёт наши разговоры в министерство.",
            stageDirection: "Зловеще шепчет",
            audioUrl: "/audio/s4/s4_l1_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Кларо, стань за мною. Цей тостер пищить азбукою Морзе щоразу, коли вискакує хліб. Я переконаний, що він передає наші розмови в міністерство.",
            stageDirection: "Тривожно шепоче",
            audioUrl: "/audio/s4/s4_l1_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Clara, stań za mną. Ten toster piszczy alfabetem Morse'a za każdym razem, gdy wyskakuje chleb. Jestem przekonany, że transmituje nasze rozmowy do ministerstwa.",
            stageDirection: "Szepcząc z powagą",
            audioUrl: "/audio/s4/s4_l1_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Kláro, stoupni si za mě. Tenhle toustovač pípá v Morseově abecedě pokaždé, když vyskočí chleba. Jsem přesvědčený, že vysílá naše rozhovory na ministerstvo.",
            stageDirection: "Vážně šeptá",
            audioUrl: "/audio/s4/s4_l1_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Clara, stani iza mene. Ovaj toster pišti u Morseovom kodu svaki put kad kruh iskoči. Uvjeren sam da prenosi naše razgovore ministarstvu.",
            stageDirection: "Ozbiljno šapće",
            audioUrl: "/audio/s4/s4_l1_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Clara, mene minun taakseni. Tämä leivänpaahdin piippaa morsekoodilla joka kerta kun leipä ponnahtaa ylös. Olen vakuuttunut, että se välittää keskustelumme ministeriöön.",
            stageDirection: "Kuiskaa vakavasti",
            audioUrl: "/audio/s4/s4_l1_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Klára, állj mögém! Ez a kenyérpirító morzekóddal csipog minden egyes alkalommal, amikor kiugrik a kenyér. Meggyőződésem, hogy továbbítja a beszélgetéseinket a minisztériumnak.",
            stageDirection: "Vészjóslóan suttogva",
            audioUrl: "/audio/s4/s4_l1_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Clara, jarri nire atzean. Txigorgailu honek morse kodean jotzen du txistua ogia jauzten den bakoitzean. Ziur nago gure elkarrizketak ministeriora bidaltzen ari dela.",
            stageDirection: "Zinez xuxurlatuz",
            audioUrl: "/audio/s4/s4_l1_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Clara, arkama geç. Bu ekmek kızartma makinesi, ekmek her fırladığında mors alfabesiyle bip sesi çıkarıyor. Konuşmalarımızı bakanlığa ilettiğine kesinlikle eminim.",
            stageDirection: "Ciddi bir şekilde fısıldayarak",
            audioUrl: "/audio/s4/s4_l1_tr-TR.mp3"
          },
          "ja-JP": {
            text: "クララ、俺の後ろに隠れるんだ。このトースター、パンが跳ね上がるたびにモールス信号でピピッて鳴ってる。俺たちの会話を省庁に送信してるに違いない。",
            stageDirection: "深刻そうに囁く",
            audioUrl: "/audio/s4/s4_l1_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "克拉拉，站在我身后。这台烤面包机每次面包弹出来时，都在发摩尔斯电码的哔哔声。我敢肯定它在把我们的谈话传给部里。",
            stageDirection: "神色凝重地低语",
            audioUrl: "/audio/s4/s4_l1_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "Clara，企喺我後面。呢部多士爐每次彈麵包嗰陣，都嗶嗶叫摩斯密碼。我肯定佢將我哋嘅說話傳緊去政府部門！",
            stageDirection: "好嚴肅咁細細聲講",
            audioUrl: "/audio/s4/s4_l1_yue-HK.mp3"
          },
          "ko-KR": {
            text: "클라라, 내 뒤로 숨어. 이 토스터는 빵이 튀어 오를 때마다 모스 부호로 삐삐 소리를 내고 있어. 우리 대화를 정부 부처로 전송하고 있는 게 분명해.",
            stageDirection: "진지하게 속삭이며",
            audioUrl: "/audio/s4/s4_l1_ko-KR.mp3"
          },
          "ar-XA": {
            text: "كلارا، قفي خلفي. هذه المحمصة تصدر إشارات بشفرة مورس في كل مرة يقفز فيها الخبز. أنا مقتنع بأنها تنقل محادثاتنا إلى الوزارة.",
            stageDirection: "يهمس بجدية بالغة",
            audioUrl: "/audio/s4/s4_l1_ar-XA.mp3"
          },
          "he-IL": {
            text: "קלרה, תעמדי מאחוריי. המצנם הזה מצפצף בקוד מורס בכל פעם שהלחם קופץ. אני משוכנע שהוא משדר את השיחות שלנו למשרד הממשלתי.",
            stageDirection: "לוחש בכובד ראש",
            audioUrl: "/audio/s4/s4_l1_he-IL.mp3"
          },
          "es-VE": {
            text: "Clara, ponte detrás de mí. Esta tostadora pita en código morse cada vez que salta el pan. Estoy segurísimo de que le pasa nuestros cuentos al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-VE.mp3"
          },
          "es-CL": {
            text: "Clara, ponte detrás mío. Este tostador tira pitidos en código morse cada vez que salta el pan. Estoy cachando que le pasa nuestras conversaciones al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-CL.mp3"
          },
          "es-PE": {
            text: "Clara, ponte detrás de mí. Esta tostadora emite pitidos en código morse cada vez que salta el pan. Estoy convencido de que le sopla nuestras conversaciones al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-PE.mp3"
          },
          "es-CU": {
            text: "Clara, ponte detrás de mí. Esta tostadora emite pitidos en código morse cada ve que salta el pan. Estoy convencido de que le chivatea nuestras conversaciones al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-CU.mp3"
          },
          "es-GQ": {
            text: "Clara, quédate detrás de mí. Esta tostadora pita en código morse cada vez que salta el pan. Estoy convencido de que transmite nuestras palabras al ministerio.",
            stageDirection: "Susurrando con gravedad",
            audioUrl: "/audio/s4/s4_l1_es-GQ.mp3"
          },
          "en-US": {
            text: "Clara, get behind me. This toaster is beeping in morse code every time the bread pops up. I'm convinced it's transmitting our conversations to the ministry.",
            stageDirection: "Gravely whispering",
            audioUrl: "/audio/s4/s4_l1_en-US.mp3"
          },
          "en-GB": {
            text: "Clara, step behind me. This toaster is bleeping in morse code each time the toast pops up. I am quite convinced it is transmitting our conversations to the ministry.",
            stageDirection: "Gravely whispering",
            audioUrl: "/audio/s4/s4_l1_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Clara, get behind me lass. This toaster is bleepin' away in morse code every time the toast jumps. I'm fair certain it's sendin' our bleedin' blether to the ministry.",
            stageDirection: "Whisperin' grimly",
            audioUrl: "/audio/s4/s4_l1_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Clara, you get on behind me. That there toaster is a-beepin' in morse code every time the bread pops. I reckon it's sendin' our talk straight to the government.",
            stageDirection: "Whispering dead serious",
            audioUrl: "/audio/s4/s4_l1_en-US-south.mp3"
          },
          "en-IE": {
            text: "Clara, get behind me there. This toaster is beeping in proper morse code every time the toast pops so it is. I'm dead certain it's sending our talk to the ministry.",
            stageDirection: "Whispering earnestly",
            audioUrl: "/audio/s4/s4_l1_en-IE.mp3"
          },
          "en-AU": {
            text: "Clara, get behind me mate. This bloody toaster is beeping in morse code every time the toast pops. Reckon it's sending our chat straight to the ministry.",
            stageDirection: "Whispering gravely",
            audioUrl: "/audio/s4/s4_l1_en-AU.mp3"
          },
          "en-NZ": {
            text: "Clara, jump behind me bro. This toaster's beeping in morse code every time the bread pops up. Pretty sure it's beaming our yarns to the ministry.",
            stageDirection: "Whispering gravely",
            audioUrl: "/audio/s4/s4_l1_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Clara, stand behind me hey. This toaster is beeping in morse code every time the bread pops. I'm lekker sure it's transmitting our chat to the ministry.",
            stageDirection: "Whispering seriously",
            audioUrl: "/audio/s4/s4_l1_en-ZA.mp3"
          },
          "en-NG": {
            text: "Clara, stay behind me o! This toaster dey beep morse code every time the bread jump up. I dey sure say e dey transmit our talk to ministry!",
            stageDirection: "Whispering with fear",
            audioUrl: "/audio/s4/s4_l1_en-NG.mp3"
          },
          "en-IN": {
            text: "Clara, please get behind me only! This toaster is beeping in morse code every single time bread pops up. I am fully convinced it is transmitting our talks to the ministry.",
            stageDirection: "Whispering solemnly",
            audioUrl: "/audio/s4/s4_l1_en-IN.mp3"
          },
          "fr-CD": {
            text: "Clara, mets-toi derrière moi mon cher. Ce grille-pain fait des bruits en morse quand le pain saute. C'est sûr qu'il envoie nos causeries au ministère.",
            stageDirection: "En chuchotant gravement",
            audioUrl: "/audio/s4/s4_l1_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Clara, viens te mettre derrière moi. Ce grille-pain émet des signaux en morse dès que le pain sort. Je sais qu'il balance nos paroles au ministère.",
            stageDirection: "Chuchotant gravement",
            audioUrl: "/audio/s4/s4_l1_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Clara, põe-te atrás de mim ya. Essa torradeira está a apitar em código morse sempre que o pão salta. Tenho certeza que está a passar as nossas conversas ao ministério.",
            stageDirection: "Sussurrando com ar sério",
            audioUrl: "/audio/s4/s4_l1_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Clara, fica atrás de mim. Essa torradeira apita em código morse cada vez que o pão pula fora. Tenho a certeza que transmite a nossa conversa para o ministério.",
            stageDirection: "Sussurrando com cautela",
            audioUrl: "/audio/s4/s4_l1_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Clara, kom achter mij staan. Die broodrooster piept in morsecode telkens als het brood opspringt. Ik ben er zeker van dat hij onze gesprekken naar het ministerie doorstuurt.",
            stageDirection: "Ernstig fluisterend",
            audioUrl: "/audio/s4/s4_l1_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلارا، خليك وراي. هالحماصة تصفر بشفرة مورس كل ما نقز الخبز. متأكد إنها تنقل كلامنا للوزارة.",
            stageDirection: "يهمس بجدية",
            audioUrl: "/audio/s4/s4_l1_ar-SA.mp3"
          },
          "ar-EG": {
            text: "كلارا، اقفي ورايا. التوستر ده بيصفر بشفرة مورس كل ما العيش ينط. متأكد إنه بينقل كلامنا للوزارة.",
            stageDirection: "بيهمس بقلق شديد",
            audioUrl: "/audio/s4/s4_l1_ar-EG.mp3"
          },
          "ar-MA": {
            text: "كلارا، وقفي مورايا. هاد الشواية ديال الخبز كاتصوني بمورس كل ما قفز الخبز. راني مأكد باللي كاتوّصل هضرتنا للوزارة.",
            stageDirection: "كايوشوش بجدية",
            audioUrl: "/audio/s4/s4_l1_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلارا، وقفي وراي. هاي المحمصة بتصفر بشفرة مورس كل ما ينط الخبز. متأكد إنها بتنقل حكينا للوزارة.",
            stageDirection: "بهمس بجدية",
            audioUrl: "/audio/s4/s4_l1_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "كلارا، وكفي وراية. هاي الحماصة تدك بشفرة مورس كل ما يطفر الصمون. متأكد تنقل حجينا للوزارة.",
            stageDirection: "يهمس بخوف وجدية",
            audioUrl: "/audio/s4/s4_l1_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "克拉拉，站在我身後。這台烤麵包機每次麵包彈出來時，都在嗶嗶叫摩斯密碼。我敢肯定它在把我們的對話發送給部裡。",
            stageDirection: "神色凝重地低語",
            audioUrl: "/audio/s4/s4_l1_zh-TW.mp3"
          },
          "hi-IN": {
            text: "क्लारा, मेरे पीछे हो जाओ। यह टोस्टर जब भी ब्रेड उछलती है, मोर्स कोड में बीप करता है। मुझे पूरा यकीन है कि यह हमारी बातचीत मंत्रालय को भेज रहा है।",
            stageDirection: "गंभीरता से फुसफुसाते हुए",
            audioUrl: "/audio/s4/s4_l1_hi-IN.mp3"
          },
          "ur-PK": {
            text: "کلارا، میرے پیچھے ہو جاؤ۔ یہ ٹوسٹر جب بھی ڈبل روٹی اچھلتی ہے، مورس کوڈ میں بیپ کرتا ہے۔ مجھے پورا یقین ہے کہ یہ ہماری گفتگو وزارت کو بھیج رہا ہے۔",
            stageDirection: "سنجیدگی سے سرگوشی کرتے ہوئے",
            audioUrl: "/audio/s4/s4_l1_ur-PK.mp3"
          },
          "bn-IN": {
            text: "ক্লারা, আমার পেছনে দাঁড়াও। এই টোস্টারটি প্রতিবার পাউরুটি লাফিয়ে ওঠার সময় মোর্স কোডে বিপ শব্দ করে। আমি নিশ্চিত এটা আমাদের কথাবার্তা মন্ত্রণালয়ে পাঠাচ্ছে।",
            stageDirection: "গভীর উদ্বেগে ফিসফিস করে",
            audioUrl: "/audio/s4/s4_l1_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਕਲਾਰਾ, ਮੇਰੇ ਪਿੱਛੇ ਹੋ ਜਾ। ਇਹ ਟੋਸਟਰ ਹਰ ਵਾਰ ਜਦੋਂ ਬਰੈੱਡ ਉਛਲਦੀ ਹੈ ਤਾਂ ਮੋਰਸ ਕੋਡ ਵਿੱਚ ਬੀਪ ਕਰਦਾ ਹੈ। ਮੈਨੂੰ ਪੂਰਾ ਯਕੀਨ ਹੈ ਕਿ ਇਹ ਸਾਡੀਆਂ ਗੱਲਾਂ ਮੰਤਰਾਲੇ ਨੂੰ ਭੇਜ ਰਿਹਾ ਹੈ।",
            stageDirection: "ਗੰਭੀਰਤਾ ਨਾਲ ਫੁਸਫੁਸਾਉਂਦੇ ਹੋਏ",
            audioUrl: "/audio/s4/s4_l1_pa-IN.mp3"
          },
          "gu-IN": {
            text: "ક્લેરા, મારી પાછળ ઊભી રહે. આ ટોસ્ટર જ્યારે પણ બ્રેડ બહાર કૂદે છે ત્યારે મોર્સ કોડમાં બીપ કરે છે. મને ખાતરી છે કે તે આપણી વાતો મંત્રાલયમાં મોકલી રહ્યું છે.",
            stageDirection: "ગંભીરતાથી ફુસફુસાવતા",
            audioUrl: "/audio/s4/s4_l1_gu-IN.mp3"
          },
          "mr-IN": {
            text: "क्लारा, माझ्या मागे हो. हा टोस्टर जेव्हा जेव्हा ब्रेड वर उडतो तेव्हा मोर्स कोडमध्ये बीप करतो. मला खात्री आहे की तो आपले संभाषण मंत्रालयाला पाठवत आहे.",
            stageDirection: "गंभीरतेने कुजबुजत",
            audioUrl: "/audio/s4/s4_l1_mr-IN.mp3"
          },
          "ta-IN": {
            text: "கிளாரா, என் பின்னால் நில். ரொட்டி மேலே எழும்பும் போதெல்லாம் இந்த டோஸ்டர் மோர்ஸ் குறியீட்டில் பீப் ஒலிக்கிறது. இது நம்முடைய உரையாடல்களை அமைச்சகத்திற்கு அனுப்புகிறது என்று நான் உறுதியாக நம்புகிறேன்.",
            stageDirection: "தீவிரமாக கிசுகிசுக்கிறார்",
            audioUrl: "/audio/s4/s4_l1_ta-IN.mp3"
          },
          "te-IN": {
            text: "క్లారా, నా వెనుక నిలబడు. రొట్టె పైకి దూకినప్పుడల్లా ఈ టోస్టర్ మోర్స్ కోడ్‌లో బీప్ చేస్తుంది. ఇది మన సంభాషణలను మంత్రిత్వ శాఖకు ప్రసారం చేస్తోందని నేను నమ్ముతున్నాను.",
            stageDirection: "తీవ్రంగా గుసగుసలాడుతూ",
            audioUrl: "/audio/s4/s4_l1_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಕ್ಲಾರಾ, ನನ್ನ ಹಿಂದೆ ನಿಲ್ಲು. ಬ್ರೆಡ್ ಮೇಲಕ್ಕೆ ಪುಟಿಯುವಾಗಲೆಲ್ಲಾ ಈ ಟೋಸ್ಟರ್ ಮೋರ್ಸ್ ಕೋಡ್‌ನಲ್ಲಿ ಬೀಪ್ ಸದ್ದು ಮಾಡುತ್ತದೆ. ಇದು ನಮ್ಮ ಸಂಭಾಷಣೆಗಳನ್ನು ಸಚಿವಾಲಯಕ್ಕೆ ಕಳುಹಿಸುತ್ತಿದೆ ಎಂದು ನನಗೆ ಖಚಿತವಾಗಿದೆ.",
            stageDirection: "ಗಂಭೀರವಾಗಿ ಪಿಸುಗುಟ್ಟುತ್ತಾ",
            audioUrl: "/audio/s4/s4_l1_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ക്ലാര, എന്റെ പിന്നിൽ നിൽക്കൂ. ബ്രെഡ് മുകളിലേക്ക് തെറിക്കുമ്പോഴെല്ലാം ഈ ടോസ്റ്റർ മോഴ്സ് കോഡിൽ ബീപ് ശബ്ദമുണ്ടാക്കുന്നു. ഇത് നമ്മുടെ സംഭാഷണങ്ങൾ മന്ത്രാലയത്തിലേക്ക് അയക്കുന്നുണ്ടെന്ന് എനിക്ക് ഉറപ്പാണ്.",
            stageDirection: "ഗൗരവത്തോടെ മന്ത്രിക്കുന്നു",
            audioUrl: "/audio/s4/s4_l1_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Clara, đứng ra sau tôi. Cái máy nướng bánh mì này phát ra tiếng bíp bằng mã Morse mỗi khi bánh mì nhảy lên. Tôi chắc chắn nó đang truyền các cuộc trò chuyện của chúng ta đến bộ ngành.",
            stageDirection: "Thì thầm nghiêm trọng",
            audioUrl: "/audio/s4/s4_l1_vi-VN.mp3"
          },
          "th-TH": {
            text: "คลารา ไปยืนข้างหลังผม เครื่องปิ้งขนมปังเครื่องนี้ส่งสัญญาณเป็นรหัสมอร์สทุกครั้งที่ขนมปังเด้งขึ้นมา ผมมั่นใจว่ามันกำลังส่งบทสนทนาของเราไปที่กระทรวงแน่ๆ",
            stageDirection: "กระซิบอย่างจริงจัง",
            audioUrl: "/audio/s4/s4_l1_th-TH.mp3"
          },
          "id-ID": {
            text: "Clara, berdiri di belakangku. Pemanggang roti ini berbunyi bip dalam kode morse setiap kali rotinya melompat. Aku yakin sekali pemanggang ini mengirim obrolan kita ke kementerian.",
            stageDirection: "Berbisik dengan sungguh-sungguh",
            audioUrl: "/audio/s4/s4_l1_id-ID.mp3"
          },
          "ms-MY": {
            text: "Clara, berdiri di belakang saya. Pembakar roti ini berbunyi bip dalam kod morse setiap kali roti melompat. Saya yakin ia menghantar perbualan kita kepada kementerian.",
            stageDirection: "Berbisik dengan cemas",
            audioUrl: "/audio/s4/s4_l1_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Clara, simama nyuma yangu. Kibaniko hiki kinalia kwa msimbo wa morse kila wakati mkate unaporuka. Nina hakika kinatuma mazungumzo yetu wizarani.",
            stageDirection: "Akinong'ona kwa umakini",
            audioUrl: "/audio/s4/s4_l1_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Clara, epyta che rapykuéri. Ko tostadora opoñemboty código morse-pe opa jey pan opóvo. Ajerovia omondo hína ñane ñe'ẽ ministeriopa.",
            stageDirection: "Oñe'ẽkirirĩ vy'a'ỹre",
            audioUrl: "/audio/s4/s4_l1_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Clara, qhepaypi sayay. Kay tanta kankanaqa morse qillqapim waqan sapa tanta phinkiptin. Yachanim rimayninchikta kamachikuq wasiman apachisqanta.",
            stageDirection: "Pakallapi llakikuywan rimay",
            audioUrl: "/audio/s4/s4_l1_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Clara, nayan qhipäxaru sayt'asim. Aka t'ant'a kankarxa morse chimpunwa axti sapa kutis t'ant'ax t'ijt'aski ukhaxa. Ukhamarakiw parlatanakasarux ministerioru apayaski.",
            stageDirection: "Jallallaña arunaka ch'usat sasa",
            audioUrl: "/audio/s4/s4_l1_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Clara, ximoquetza nocuitlapan. Inin tlaxcalchijchihualoni quiyehuatia tlaxicahualiztli código morse ihcuac tlaxcalli quiza. Neltiliztica quimonahuatilia totlatol inic ministerio.",
            stageDirection: "Ichtacatzin tlatoltica",
            audioUrl: "/audio/s4/s4_l1_nah-MX.mp3"
          },
          "nv-US": {
            text: "Clara, shikʼééʼ nízheeh. Díí bááh bibaʼ hólónígíí morse bizaad yee yáłtiʼ tʼáá áłahjįʼ bááh chʼégháahgo. Nihizaad tʼáá aaníí naatʼáanii yaa yíníłtsooz nísin.",
            stageDirection: "Tsxį́įłgo hazhóʼó yáłtiʼ",
            audioUrl: "/audio/s4/s4_l1_nv-US.mp3"
          }
        }
      },
      {
        id: "s4_l2",
        characterId: "clara",
        defaultStageDirection: "Cruzándose de brazos y agitando el ticket arrugado",
        expression: "skeptical",
        translations: {
          "fr-CH": {
            text: "Hugo, il ne transmet rien du tout. Tu as brûlé la tranche parce que tu as mis la puissance à fond. Rends-le vite et partons avant qu'on nous sorte.",
            stageDirection: "D'un ton sec et usé",
            audioUrl: "/audio/s4/s4_l2_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Hugo, ça ne transmet rien du tout. Tu as cramé la tartine parce que tu as mis la molette à fond. Rends-le et tirons-nous avant qu'on se fasse jeter dehors.",
            stageDirection: "Sec et bien lassé",
            audioUrl: "/audio/s4/s4_l2_fr-BE.mp3"
          },
          "es-ES": {
            text: "Hugo, no transmite nada. Se te quemó la rebanada porque pusiste la potencia al máximo. Devuélvela ya y vámonos antes de que nos echen.",
            stageDirection: "Con tono seco y cansado",
            audioUrl: "/audio/s4/s4_l2_es-ES.mp3"
          },
          "el-GR": {
            text: "Ούγκο, δεν μεταδίδει τίποτα. Κάηκε η φέτα σου επειδή έβαλες την ένταση στο τέρμα. Επίστρεψέ την τώρα και πάμε να φύγουμε πριν μας διώξουν.",
            stageDirection: "Με ξηρό και κουρασμένο τόνο",
            audioUrl: "/audio/s4/s4_l2_el-GR.mp3"
          },
          "es-MX": {
            text: "Hugo, no transmite nada. Se te quemó la rebanada porque le subiste a todo el power. Regrésala ya y vámonos antes de que nos corran.",
            stageDirection: "Con tono seco y harta",
            audioUrl: "/audio/s4/s4_l2_es-MX.mp3"
          },
          "es-AR": {
            text: "Hugo, no transmite nada. Se te quemó la tostada porque le mandaste la potencia al mango. Devolvila ya y rajemos antes de que nos echen.",
            stageDirection: "Con tono seco y re cansada",
            audioUrl: "/audio/s4/s4_l2_es-AR.mp3"
          },
          "es-DO": {
            text: "Hugo, eso no transmite nada. Se te quemó el pan porque le subiste toda la potencia. Devuélvela ya y vámonos antes de que nos boten de aquí.",
            stageDirection: "Seca y harta",
            audioUrl: "/audio/s4/s4_l2_es-DO.mp3"
          },
          "es-PR": {
            text: "Hugo, no transmite ná. Se te quemó el pan porque le metiste la potencia hasta arriba. Devuélvela ya y vámonos antes de que nos boten.",
            stageDirection: "Con tono seco y cansada",
            audioUrl: "/audio/s4/s4_l2_es-PR.mp3"
          },
          "es-CO": {
            text: "Hugo, no transmite nada. Se le quemó el pan porque le puso la potencia al tope. Devuélvalo ya y vámonos antes de que nos saquen.",
            stageDirection: "Con tono seco y aburrida",
            audioUrl: "/audio/s4/s4_l2_es-CO.mp3"
          },
          "fr-FR": {
            text: "Hugo, ça ne transmet rien du tout. Tu as brûlé la tranche parce que tu as mis la puissance au maximum. Rends-le tout de suite et partons avant qu'on se fasse virer.",
            stageDirection: "D'un ton sec et fatigué",
            audioUrl: "/audio/s4/s4_l2_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Hugo, ça transmet rien pantoute. T'as brûlé ta toast parce que t'as mis la chaleur dans l'tapis. Rapporte-le donc pis décampons avant d'se faire sacrer dehors.",
            stageDirection: "Découragée et blasée",
            audioUrl: "/audio/s4/s4_l2_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Hugo, ça n'envoie rien deh ! Tu as calciné le pain parce que tu as mis la chaleur au max. Rends ça vite et quittons ici avant qu'on nous chasse !",
            stageDirection: "Fatiguée de ses bêtises",
            audioUrl: "/audio/s4/s4_l2_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Hugo, não tá transmitindo nada. Você queimou a torrada porque colocou a potência no talo. Devolve logo e vamo embora antes que botem a gente pra fora.",
            stageDirection: "Com voz seca e sem paciência",
            audioUrl: "/audio/s4/s4_l2_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Hugo, não transmite nada. Queimaste a fatia porque puseste a potência no máximo. Devolve isso já e vamos embora antes que nos ponham na rua.",
            stageDirection: "Com tom seco e farto",
            audioUrl: "/audio/s4/s4_l2_pt-PT.mp3"
          },
          "it-IT": {
            text: "Hugo, non trasmette un bel niente. Hai bruciato la fetta perché hai messo la potenza al massimo. Restituiscilo subito e andiamocene prima che ci caccino.",
            stageDirection: "Con tono secco ed esausto",
            audioUrl: "/audio/s4/s4_l2_it-IT.mp3"
          },
          "ca-ES": {
            text: "Hugo, no transmet res. Se t'ha cremat la llesca perquè has posat la potència al màxim. Torna-la ja i marxem abans que ens facin fora.",
            stageDirection: "Amb to sec i cansat",
            audioUrl: "/audio/s4/s4_l2_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Hugo, nu transmite absolut nimic. Ai ars felia pentru că ai dat puterea la maxim. Returnează-l odată și hai să plecăm înainte să fim dați afară.",
            stageDirection: "Cu ton sec și epuizat",
            audioUrl: "/audio/s4/s4_l2_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Hugo, non transmite nada. Queimóuseche a rebanda porque puxeches a potencia a tope. Devólvea xa e marchamos antes de que nos boten fóra.",
            stageDirection: "Con ton seco e farta",
            audioUrl: "/audio/s4/s4_l2_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Hugo, transmet pas ren. As cremat la lesca perque as botat la poténcia a fons. Tòrna-la lèu e partèm abans que nos fòrabandisson.",
            stageDirection: "D'un ton sec e cansat",
            audioUrl: "/audio/s4/s4_l2_oc-FR.mp3"
          },
          "de-DE": {
            text: "Hugo, das Ding überträgt gar nichts. Du hast die Scheibe verbrannt, weil du die Stufe auf Anschlag gedreht hast. Gib ihn zurück und lass uns gehen, bevor man uns rauswirft.",
            stageDirection: "Trocken und sichtlich genervt",
            audioUrl: "/audio/s4/s4_l2_de-DE.mp3"
          },
          "de-CH": {
            text: "Hugo, dä Toaster überträit überhaupt nüt. Du häsch d'Schibe verbrännt, will d'd Stuefe voll ufdräit häsch. Bring en zrugg und mir gönd, bevor mir usegrüert wärded.",
            stageDirection: "Troche und gnervt",
            audioUrl: "/audio/s4/s4_l2_de-CH.mp3"
          },
          "nl-NL": {
            text: "Hugo, hij seint helemaal niets door. Je hebt de boterham verbrand omdat je hem op vol vermogen hebt gezet. Breng hem terug en laten we gaan voordat we eruit worden gegooid.",
            stageDirection: "Droog en vermoeid",
            audioUrl: "/audio/s4/s4_l2_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Hugo, den sender ingenting. Du svidde brødskiven fordi du skrudde varmen på maks. Bare lever den tilbake og la oss stikke før vi blir kastet ut.",
            stageDirection: "Tørt og oppgitt",
            audioUrl: "/audio/s4/s4_l2_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Hugo, den sänder inte ett dugg. Du brände brödet för att du vred upp värmen på max. Lämna bara tillbaka den och låt oss gå innan vi blir utslängda.",
            stageDirection: "Torrt och utmattat",
            audioUrl: "/audio/s4/s4_l2_sv-SE.mp3"
          },
          "da-DK": {
            text: "Hugo, den sender overhovedet intet. Du brændte brødet, fordi du skruede helt op på maksimum. Aflever den nu og lad os skride, før vi bliver smidt ud.",
            stageDirection: "Tørt og træt",
            audioUrl: "/audio/s4/s4_l2_da-DK.mp3"
          },
          "ru-RU": {
            text: "Гюго, ничего он не передаёт. Ты спалил кусок, потому что выкрутил мощность на максимум. Верни его уже, и пошли, пока нас не выставили.",
            stageDirection: "Сухо и устало",
            audioUrl: "/audio/s4/s4_l2_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Гюго, нічого він не передає. Ти спалив шматок, бо викрутив потужність на максимум. Поверни його вже і ходімо звідси, поки нас не вигнали.",
            stageDirection: "Сухо і знесилено",
            audioUrl: "/audio/s4/s4_l2_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Hugo, niczego nie nadaje. Przypaliłeś kromkę, bo ustawiłeś moc na maksa. Oddaj go wreszcie i zmywajmy się, zanim nas stąd wyrzucą.",
            stageDirection: "Sucho i ze znużeniem",
            audioUrl: "/audio/s4/s4_l2_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Hugo, nic nevysílá. Připálil jsi krajíc, protože jsi to otočil na maximum. Vrať ho a pojďme pryč, než nás vyhodí.",
            stageDirection: "Suchým a unaveným hlasem",
            audioUrl: "/audio/s4/s4_l2_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Hugo, ne prenosi ništa. Zagorio si šnitu jer si navio snagu do kraja. Vrati ga već jednom i idemo prije nego što nas izbace.",
            stageDirection: "Suho i umorno",
            audioUrl: "/audio/s4/s4_l2_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Hugo, se ei lähetä yhtään mitään. Poltit viipaleen vain siksi, että väänsit tehon täysille. Palauta se jo ja lähdetään ennen kuin meidät heitetään ulos.",
            stageDirection: "Kuivasti ja kyllästyneenä",
            audioUrl: "/audio/s4/s4_l2_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Hugo, az égvilágon semmit sem közvetít. Csak azért égetted oda a kenyeret, mert maximumra csavartad. Add vissza gyorsan, és menjünk, mielőtt kidobnak minket!",
            stageDirection: "Szárazon, holtfáradtan",
            audioUrl: "/audio/s4/s4_l2_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Hugo, ez du ezer transmititzen. Xerra erre egin zaizu potentzia topera jarri duzulako. Itzul ezazu behingoz eta goazen hemendik bota aurretik.",
            stageDirection: "Lehor eta nekatuta",
            audioUrl: "/audio/s4/s4_l2_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Hugo, hiçbir şey ilettiği yok. Ayarı sonuna kadar köklediğin için ekmeği yaktın. Şunu hemen iade et de bizi kovmadan önce çıkıp gidelim.",
            stageDirection: "Kuru ve bezgin bir tonla",
            audioUrl: "/audio/s4/s4_l2_tr-TR.mp3"
          },
          "ja-JP": {
            text: "ウーゴ、何も送信してないわよ。あなたがダイヤルを最大にしたからパンが焦げただけ。さっさと返品して、追い出される前に帰りましょう。",
            stageDirection: "乾いた呆れ声で",
            audioUrl: "/audio/s4/s4_l2_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "雨果，它什么也没发送。你把档位开到最大才把面包烤糊了。赶紧退了它，趁我们还没被赶出去前快走吧。",
            stageDirection: "语气干瘪而疲惫",
            audioUrl: "/audio/s4/s4_l2_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "Hugo，佢乜都冇傳送啊。係你將個火開到最大先至燒燶塊麵包咋！快啲退咗佢，趁人哋未趕我哋走好走喇。",
            stageDirection: "好乾澀兼無奈嘅語氣",
            audioUrl: "/audio/s4/s4_l2_yue-HK.mp3"
          },
          "ko-KR": {
            text: "위고, 아무것도 전송 안 해. 네가 세기를 최대로 올려서 빵이 탄 거뿐이잖아. 빨리 환불하고 쫓겨나기 전에 여기서 나가자.",
            stageDirection: "건조하고 지친 어조로",
            audioUrl: "/audio/s4/s4_l2_ko-KR.mp3"
          },
          "ar-XA": {
            text: "هوغو، إنها لا تنقل أي شيء. لقد أحرقت الشريحة لأنك ضبطت الحرارة على أقصى درجة. أعدها فوراً ولنغادر قبل أن يطردونا.",
            stageDirection: "بنبرة جافة ومجهدة",
            audioUrl: "/audio/s4/s4_l2_ar-XA.mp3"
          },
          "he-IL": {
            text: "הוגו, זה לא משדר שום דבר. שרפת את הפרוסה כי שמת את החום על המקסימום. פשוט תחזיר את זה כבר ובוא נלך מפה לפני שיעיפו אותנו.",
            stageDirection: "בטון יבש ועייף",
            audioUrl: "/audio/s4/s4_l2_he-IL.mp3"
          },
          "es-VE": {
            text: "Hugo, no transmite nada. Se te quemó el pan porque le pusiste la potencia al máximo. Devuélvela de una y vámonos antes de que nos boten.",
            stageDirection: "Con tono seco y fastidiada",
            audioUrl: "/audio/s4/s4_l2_es-VE.mp3"
          },
          "es-CL": {
            text: "Hugo, no transmite nada. Se te quemó el pan porque le pusiste la potencia al chancho. Devuélvela al tiro y vámonos antes de que nos echen.",
            stageDirection: "Con tono seco y chata",
            audioUrl: "/audio/s4/s4_l2_es-CL.mp3"
          },
          "es-PE": {
            text: "Hugo, no transmite nada. Se te quemó la tostada porque le pusiste la potencia al tope. Devuélvela ya y vámonos antes de que nos boten.",
            stageDirection: "Con tono seco y cansada",
            audioUrl: "/audio/s4/s4_l2_es-PE.mp3"
          },
          "es-CU": {
            text: "Hugo, no transmite na. Se te quemó el pan porque le metiste to' el vapor. Devuélvela ya y echemos un pie antes de que nos boten.",
            stageDirection: "Con tono seco y sofocada",
            audioUrl: "/audio/s4/s4_l2_es-CU.mp3"
          },
          "es-GQ": {
            text: "Hugo, no transmite nada. El pan se quemó porque pusiste la fuerza al máximo. Devuélvela ya y vámonos antes de que nos despidan de aquí.",
            stageDirection: "Con tono seco y cansado",
            audioUrl: "/audio/s4/s4_l2_es-GQ.mp3"
          },
          "en-US": {
            text: "Hugo, it's not transmitting anything. You burned the slice because you set it to maximum. Just return it already and let's go before we get kicked out.",
            stageDirection: "Dry and utterly tired",
            audioUrl: "/audio/s4/s4_l2_en-US.mp3"
          },
          "en-GB": {
            text: "Hugo, it isn't transmitting a thing. You burnt the toast because you cranked it up to full power. Return it right away and let us leave before we are thrown out.",
            stageDirection: "Dry and exasperated",
            audioUrl: "/audio/s4/s4_l2_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Hugo, it's no transmittin' nuthin'. Ye burnt the piece cause ye turned it richt up tae the max. Hand it back noo and let's bolt afore we get chucked oot.",
            stageDirection: "Exasperated sigh",
            audioUrl: "/audio/s4/s4_l2_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Hugo, ain't transmitting a blessed thing. You scorched that bread 'cause you had it turned all the way up. Take it on back and let's skedaddle 'fore we get run off.",
            stageDirection: "Weary drawl",
            audioUrl: "/audio/s4/s4_l2_en-US-south.mp3"
          },
          "en-IE": {
            text: "Hugo, it's transmitting nothing at all. You burned the toast because you had the heat up to ninety. Hand it back now and let's shift before we're thrown out.",
            stageDirection: "Dry and completely fed up",
            audioUrl: "/audio/s4/s4_l2_en-IE.mp3"
          },
          "en-AU": {
            text: "Hugo, it ain't transmitting jack. You burnt the bloody toast 'cause you turned it all the way up. Just take it back and let's rack off before we get booted.",
            stageDirection: "Tired and sarcastic",
            audioUrl: "/audio/s4/s4_l2_en-AU.mp3"
          },
          "en-NZ": {
            text: "Hugo, it's not transmitting anything, mate. You torched the toast 'cause you put it on max. Just return it and let's bounce before we get kicked out.",
            stageDirection: "Flat and weary",
            audioUrl: "/audio/s4/s4_l2_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Hugo, it's not transmitting anything man. You burnt the toast because you whacked it on max. Return it now and let's vaai before we get kicked out hey.",
            stageDirection: "Dry and exhausted",
            audioUrl: "/audio/s4/s4_l2_en-ZA.mp3"
          },
          "en-NG": {
            text: "Hugo, e no dey transmit anything! You burn the bread because you put the heat full ground. Return am now make we comot before dem pursue us.",
            stageDirection: "Tired sigh",
            audioUrl: "/audio/s4/s4_l2_en-NG.mp3"
          },
          "en-IN": {
            text: "Hugo, it is not transmitting any single thing. You only burned the slice because you kept it on maximum power. Return it quickly and let us leave before they kick us out na.",
            stageDirection: "Deeply irritated",
            audioUrl: "/audio/s4/s4_l2_en-IN.mp3"
          },
          "fr-CD": {
            text: "Hugo, ça ne transmet rien. Tu as brûlé le pain parce que tu as poussé la puissance à fond. Remets l'appareil et partons avant qu'on nous chasse.",
            stageDirection: "D'un ton las et direct",
            audioUrl: "/audio/s4/s4_l2_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Hugo, ça ne transmet rien. Tu as cramé ton pain parce que tu as mis le feu au maximum. Dépose ça et allons-nous-en avant d'avoir la honte.",
            stageDirection: "D'un ton sec",
            audioUrl: "/audio/s4/s4_l2_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Hugo, não está a transmitir nada. Queimaste o pão porque puseste a potência no máximo ya. Devolve isso rápido e bazamos antes que nos corram daqui.",
            stageDirection: "Cansada e despachada",
            audioUrl: "/audio/s4/s4_l2_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Hugo, isso não transmite nada. Queimaste o pão porque puseste no máximo. Devolve já e vamos embora antes que nos expulsem.",
            stageDirection: "Tom seco e impaciente",
            audioUrl: "/audio/s4/s4_l2_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Hugo, dat zendt niks door. Ge hebt die snee verbrand omdat ge die op de hoogste stand hebt gezet. Breng dat terug en laat ons vertrekken voor ze ons buitensmijten.",
            stageDirection: "Droog en beu",
            audioUrl: "/audio/s4/s4_l2_nl-BE.mp3"
          },
          "ar-SA": {
            text: "هوغو، ما تنقل شي أصلاً. حرقت التوست لأنك حطيته على أعلى شي. رجعها وخلنا نمشي قبل ما يطردونا.",
            stageDirection: "بنبرة جافة وتعبانة",
            audioUrl: "/audio/s4/s4_l2_ar-SA.mp3"
          },
          "ar-EG": {
            text: "يا هوغو، ما بيبعتش حاجة خالص. انت حرقت التوست عشان عليت الحرارة على الآخر. رجعه بقى ويلا نمشي قبل ما يطردونا.",
            stageDirection: "بزهق ونفاد صبر",
            audioUrl: "/audio/s4/s4_l2_ar-EG.mp3"
          },
          "ar-MA": {
            text: "هوغو، راه ما كايصيفط والو. حرقتي الخبز حيت درتي الحرارة فالماكسيموم. ردها دابا ويلا نمشيو قبل ما يجريو علينا.",
            stageDirection: "بنبرة ناشفة وعيانة",
            audioUrl: "/audio/s4/s4_l2_ar-MA.mp3"
          },
          "ar-JO": {
            text: "هوغو، ما بتبعت إشي بالمرة. حرقت التوست لأنك حطيت الحرارة على الآخر. رجعها وخلينا نروح قبل ما يطردونا.",
            stageDirection: "بصوت ناشف ومفلسف",
            audioUrl: "/audio/s4/s4_l2_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "هوغو، ما دز أي شي. احتركت الصمونة لأنك خليت الحرارة للأخير. رجعها عاد وخل نولي كبل ما يطردونا.",
            stageDirection: "بلهجة ناشفة وتعبانة",
            audioUrl: "/audio/s4/s4_l2_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "雨果，它什麼也沒發送。你把檔位開到最大才把麵包烤焦了。趕緊退了它，趁我們還沒被趕出去前快走吧。",
            stageDirection: "語氣乾癟而無奈",
            audioUrl: "/audio/s4/s4_l2_zh-TW.mp3"
          },
          "hi-IN": {
            text: "ह्यूगो, यह कुछ भी नहीं भेज रहा है। तुमने पावर फुल पर कर दी थी इसलिए ब्रेड जल गई। इसे तुरंत वापस करो और इससे पहले कि वे हमें बाहर निकालें, चलो यहाँ से।",
            stageDirection: "रूखे और थके हुए लहजे में",
            audioUrl: "/audio/s4/s4_l2_hi-IN.mp3"
          },
          "ur-PK": {
            text: "ہیوگو، یہ کچھ بھی نہیں بھیج رہا ہے۔ تم نے پاور فل کر دی تھی اس لیے ڈبل روٹی جل گئی۔ اسے ابھی واپس کرو اور اس سے پہلے کہ وہ ہمیں باہر نکالیں، یہاں سے چلو۔",
            stageDirection: "خشک اور بیزار لہجے میں",
            audioUrl: "/audio/s4/s4_l2_ur-PK.mp3"
          },
          "bn-IN": {
            text: "হিউগো, এটা কিছুই পাঠাচ্ছে না। তুমি তাপমাত্রা সর্বোচ্চ করে রেখেছিলে বলেই পাউরুটিটা পুড়ে গেছে। তাড়াতাড়ি এটা ফেরত দাও আর ওরা তাড়িয়ে দেওয়ার আগেই চলো যাই।",
            stageDirection: "বিরক্ত এবং ক্লান্ত সুরে",
            audioUrl: "/audio/s4/s4_l2_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਹਿਊਗੋ, ਇਹ ਕੁਝ ਨਹੀਂ ਭੇਜ ਰਿਹਾ। ਤੂੰ ਪਾਵਰ ਪੂਰੀ ਵਧਾ ਦਿੱਤੀ ਸੀ ਇਸ ਲਈ ਬਰੈੱਡ ਸੜ ਗਈ। ਇਹਨੂੰ ਹੁਣੇ ਵਾਪਸ ਕਰ ਅਤੇ ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਉਹ ਸਾਨੂੰ ਬਾਹਰ ਕੱਢਣ, ਚੱਲੀਏ।",
            stageDirection: "ਅੱਕੇ ਹੋਏ ਅਤੇ ਥੱਕੇ ਹੋਏ ਲਹਿਜੇ ਵਿੱਚ",
            audioUrl: "/audio/s4/s4_l2_pa-IN.mp3"
          },
          "gu-IN": {
            text: "હ્યુગો, એ કશુંય મોકલતું નથી. તેં પાવર પૂરો વધારી દીધો હતો એટલે બ્રેડ બળી ગઈ. એને હમણાં જ પાછું આપી દે અને એ લોકો આપણને કાઢી મૂકે તે પહેલાં નીકળીએ.",
            stageDirection: "કંટાળેલા અને થાકેલા અવાજે",
            audioUrl: "/audio/s4/s4_l2_gu-IN.mp3"
          },
          "mr-IN": {
            text: "ह्युगो, तो काहीही पाठवत नाहीये. तू पॉवर फुल केली होतीस म्हणूनच ब्रेड जळाला. तो आत्ता परत कर आणि त्यांनी आपल्याला बाहेर काढण्यापूर्वी निघूया.",
            stageDirection: "कंटाळवाण्या आणि थकलेल्या सुरात",
            audioUrl: "/audio/s4/s4_l2_mr-IN.mp3"
          },
          "ta-IN": {
            text: "ஹ்யூகோ, இது எதையும் அனுப்பவில்லை. நீ வெப்பநிலையை முழுமையாக வைத்ததால் ரொட்டி கருகிவிட்டது. இதை உடனே திருப்பி கொடுத்துவிட்டு அவர்கள் நம்மை துரத்துவதற்குள் கிளம்புவோம்.",
            stageDirection: "சலிப்படைந்த மற்றும் சோர்வான தொனியில்",
            audioUrl: "/audio/s4/s4_l2_ta-IN.mp3"
          },
          "te-IN": {
            text: "హ్యూగో, ఇది ఏమీ పంపడం లేదు. నువ్వు పవర్‌ను గరిష్టంగా ఉంచినందువల్లనే రొట్టె మాడిపోయింది. దీన్ని ఇప్పుడే తిరిగి ఇచ్చేసి వాళ్లు మనల్ని గెంటేయకముందే వెళ్దాం.",
            stageDirection: "విసుగు చెందిన స్వరంతో",
            audioUrl: "/audio/s4/s4_l2_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಹ್ಯೂಗೋ, ಇದು ಏನನ್ನೂ ಕಳುಹಿಸುತ್ತಿಲ್ಲ. ನೀನು ಉರಿಯನ್ನು ಗರಿಷ್ಠ ಮಟ್ಟದಲ್ಲಿ ಇಟ್ಟಿದ್ದರಿಂದ ಬ್ರೆಡ್ ಸುಟ್ಟುಹೋಯಿತು. ಇದನ್ನು ಈಗಲೇ ಹಿಂತಿರುಗಿಸಿ ಅವರು ನಮ್ಮನ್ನು ಹೊರಹಾಕುವ ಮುನ್ನ ಹೋಗೋಣ.",
            stageDirection: "ಬೇಸರ ಮತ್ತು ದಣಿದ ಧ್ವನಿಯಲ್ಲಿ",
            audioUrl: "/audio/s4/s4_l2_kn-IN.mp3"
          },
          "ml-IN": {
            text: "ഹ്യൂഗോ, ഇത് ഒന്നും അയക്കുന്നില്ല. നീ പവർ പരമാവധി ആക്കിവെച്ചതുകൊണ്ടാണ് ബ്രെഡ് കരിഞ്ഞുപോയത്. ഇത് ഉടൻ തിരികെ നൽകി അവർ നമ്മളെ പുറത്താക്കുന്നതിന് മുൻപ് പോകാം.",
            stageDirection: "വിരസവും തളർന്നതുമായ ശബ്ദത്തിൽ",
            audioUrl: "/audio/s4/s4_l2_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Hugo, nó chẳng truyền cái gì hết. Anh làm cháy lát bánh mì chỉ vì vặn nhiệt độ lên mức tối đa thôi. Trả nó lại mau rồi đi khỏi đây trước khi bị đuổi.",
            stageDirection: "Bằng giọng khô khốc và mệt mỏi",
            audioUrl: "/audio/s4/s4_l2_vi-VN.mp3"
          },
          "th-TH": {
            text: "ฮูโก มันไม่ได้ส่งอะไรทั้งนั้นแหละ นายทำขนมปังไหม้เพราะนายปรับความร้อนไปที่ระดับสูงสุดต่างหาก รีบคืนแล้วไปกันเถอะก่อนจะโดนไล่ออกไป",
            stageDirection: "น้ำเสียงเย็นชาและเหนื่อยหน่าย",
            audioUrl: "/audio/s4/s4_l2_th-TH.mp3"
          },
          "id-ID": {
            text: "Hugo, pemanggang itu tidak mengirim apa pun. Rotimu hangus karena kamu menyetel suhunya ke paling tinggi. Kembalikan saja sekarang dan ayo pergi sebelum kita diusir.",
            stageDirection: "Dengan nada datar dan lelah",
            audioUrl: "/audio/s4/s4_l2_id-ID.mp3"
          },
          "ms-MY": {
            text: "Hugo, ia tidak menghantar apa-apa pun. Roti itu hangus sebab awak letak kuasa pada tahap maksimum. Pulangkan sekarang dan jom keluar sebelum kita dihalau.",
            stageDirection: "Dengan nada datar dan penat",
            audioUrl: "/audio/s4/s4_l2_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Hugo, hakitumi chochote. Ulichoma mkate kwa sababu uliweka moto hadi mwisho. Kirudishe sasa hivi na tuondoke kabla hawajatufukuza.",
            stageDirection: "Kwa sauti kavu na iliyochoka",
            audioUrl: "/audio/s4/s4_l2_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Hugo, nomondoiete mba'eve. Oñembokusugue pe pan emoĩgui imbaretépe. Eme'ẽ jey ko'ág̃a ha jaha katu ani hag̃ua ñande mosẽ.",
            stageDirection: "Ikueráiva ha ikane'õva",
            audioUrl: "/audio/s4/s4_l2_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Hugo, manam imatapas apachinchu. Tantaqa kankakurusqa lliw kallpapi churasqaykiraykum. Kutiychiyña hinaspa ripukusun manaraq qarqowaptinchik.",
            stageDirection: "Sayk'usqa rimaywan",
            audioUrl: "/audio/s4/s4_l2_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Hugo, janiw kunsa apaykiti. T'ant'ax qhanaw phichantasixa nina sinti ch'amanita churatamatxa. Kutt'ayxapxam ukatx sarxapxañani janïr apsupkistu ukhaxa.",
            stageDirection: "Ch'usat qarjata arumpi",
            audioUrl: "/audio/s4/s4_l2_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Hugo, ahtle quimonahuatilia. Tlaxcalli otlatlac yehica ticmotlalili chicahualiztli cenca huel. Xiccuepa aman ihuan tiazque achto techquixtizque.",
            stageDirection: "Tlatolchiuhqui ihuan ciauhqui",
            audioUrl: "/audio/s4/s4_l2_nah-MX.mp3"
          },
          "nv-US": {
            text: "Hugo, doo haʼátʼíhída yaa yíníłtsooz da. Bááh díílidígíí éí ayóo dííłtłʼiʼ biniinaa. Tʼáá kʼad nináńtsoos dóó chʼééníildééh tʼahdoo chʼééhóshóodi.",
            stageDirection: "Chʼééh deeyáago yáłtiʼ",
            audioUrl: "/audio/s4/s4_l2_nv-US.mp3"
          }
        }
      },
      {
        id: "s4_l3",
        characterId: "bea",
        defaultStageDirection: "Apareciendo tras el mostrador con una sonrisa radiante y un sello",
        expression: "cheerful",
        translations: {
          "fr-CH": {
            text: "Bonjour ! Selon le manuel du service clientèle, pour retourner un appareil soupçonné d'espionnage, il me faut l'emballage d'origine et un témoin assermenté.",
            stageDirection: "Très polie et serviable",
            audioUrl: "/audio/s4/s4_l3_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Bonjour ! D'après le guide du service client, pour reprendre un appareil suspecté d'espionnage, il me faut l'emballage d'origine et un témoin sous serment.",
            stageDirection: "Aimable et toute serviable",
            audioUrl: "/audio/s4/s4_l3_fr-BE.mp3"
          },
          "es-ES": {
            text: "¡Buenos días! Según el manual de atención al cliente, para devolver electrodomésticos con sospechas de espionaje necesito el embalaje original y un testigo jurado.",
            stageDirection: "Amable y completamente servicial",
            audioUrl: "/audio/s4/s4_l3_es-ES.mp3"
          },
          "el-GR": {
            text: "Καλημέρα! Σύμφωνα με το εγχειρίδιο εξυπηρέτησης πελατών, για να επιστρέψετε ηλεκτρικές συσκευές με υποψίες κατασκοπείας χρειάζομαι την αρχική συσκευασία και έναν ένορκο μάρτυρα.",
            stageDirection: "Ευγενική και απόλυτα εξυπηρετική",
            audioUrl: "/audio/s4/s4_l3_el-GR.mp3"
          },
          "es-MX": {
            text: "¡Buenos días! Según el manual de atención a clientes, para devolver aparatos con sospecha de espionaje necesito la caja original y un testigo jurado.",
            stageDirection: "Súper linda y servicial",
            audioUrl: "/audio/s4/s4_l3_es-MX.mp3"
          },
          "es-AR": {
            text: "¡Buenos días! Según el manual de atención al cliente, para devolver electrodomésticos bajo sospecha de espionaje necesito la caja original y un testigo jurado.",
            stageDirection: "Súper amable y sonriente",
            audioUrl: "/audio/s4/s4_l3_es-AR.mp3"
          },
          "es-DO": {
            text: "¡Buen día! Según el manual de servicio, para devolver aparatos con sospecha de espionaje necesito la caja original y un testigo juramentado.",
            stageDirection: "Sonriente y servicial",
            audioUrl: "/audio/s4/s4_l3_es-DO.mp3"
          },
          "es-PR": {
            text: "¡Buenos días! Según el manual de servicio al cliente, para devolver enseres con sospechas de espionaje necesito la caja original y un testigo juramentado.",
            stageDirection: "Amable y complaciente",
            audioUrl: "/audio/s4/s4_l3_es-PR.mp3"
          },
          "es-CO": {
            text: "¡Buenos días! Según el manual de servicio al cliente, para devolver electrodomésticos con sospechas de espionaje necesito el empaque original y un testigo juramentado.",
            stageDirection: "Muy atenta y sonriente",
            audioUrl: "/audio/s4/s4_l3_es-CO.mp3"
          },
          "fr-FR": {
            text: "Bonjour ! D'après le manuel du service client, pour retourner un appareil suspecté d'espionnage, il me faut l'emballage d'origine et un témoin assermenté.",
            stageDirection: "Souriante et pleine de bonne volonté",
            audioUrl: "/audio/s4/s4_l3_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Bonjour ! Selon le guide du service à la clientèle, pour rapporter un appareil soupçonné d'espionnage, ça m'prend la boîte originale pis un témoin assermenté.",
            stageDirection: "Souriante et ben smouthe",
            audioUrl: "/audio/s4/s4_l3_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Bonjour ! Selon le cahier du service client, pour rendre un appareil suspecté d'espionnage là, il me faut le carton d'origine et un témoin qui a juré !",
            stageDirection: "Très accueillante et gentille",
            audioUrl: "/audio/s4/s4_l3_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Bom dia! Segundo o manual de atendimento ao cliente, pra devolver eletrodomésticos com suspeita de espionagem eu preciso da embalagem original e de uma testemunha juramentada.",
            stageDirection: "Toda simpática e solícita",
            audioUrl: "/audio/s4/s4_l3_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Bom dia! Segundo o manual de apoio ao cliente, para devolver eletrodomésticos com suspeitas de espionagem preciso da embalagem original e de uma testemunha juramentada.",
            stageDirection: "Simpática e prestável",
            audioUrl: "/audio/s4/s4_l3_pt-PT.mp3"
          },
          "it-IT": {
            text: "Buongiorno! Secondo il manuale di assistenza clienti, per effettuare il reso di elettrodomestici sospettati di spionaggio ho bisogno dell'imballaggio originale e di un testimone giurato.",
            stageDirection: "Solare e premurosa",
            audioUrl: "/audio/s4/s4_l3_it-IT.mp3"
          },
          "ca-ES": {
            text: "Bon dia! Segons el manual d'atenció al client, per tornar electrodomèstics amb sospites d'espionatge necessito l'embalatge original i un testimoni jurat.",
            stageDirection: "Amable i completament servicial",
            audioUrl: "/audio/s4/s4_l3_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Bună dimineața! Conform manualului de relații cu clienții, pentru a returna electrocasnice suspectate de spionaj am nevoie de ambalajul original și de un martor jurat.",
            stageDirection: "Zâmbitoare și amabilă",
            audioUrl: "/audio/s4/s4_l3_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Bos días! Segundo o manual de atención ao cliente, para devolver electrodomésticos con sospeitas de espionaxe preciso a embalaxe orixinal e unha testemuña xurada.",
            stageDirection: "Moi riseira e servicial",
            audioUrl: "/audio/s4/s4_l3_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Bonjorn ! Segon lo manual de servici al client, per tornar d'electrodomestics amb de suspèctas d'espionatge me cal l'embalatge d'origina e un testimòni jurat.",
            stageDirection: "Aimabla e plan serviciala",
            audioUrl: "/audio/s4/s4_l3_oc-FR.mp3"
          },
          "de-DE": {
            text: "Guten Morgen! Laut unserem Kundenservice-Handbuch benötige ich für die Rückgabe von Geräten mit Spionageverdacht die Originalverpackung und einen vereidigten Zeugen.",
            stageDirection: "Überaus freundlich und hilfsbereit",
            audioUrl: "/audio/s4/s4_l3_de-DE.mp3"
          },
          "de-CH": {
            text: "Guete Morge! Luut em Chundedienst-Handbuech bruuchi für d'Ruckgab vo Gräät mit Spionagiverdacht d'Originalverpackig und en beeidigte Züüge.",
            stageDirection: "Fründlich und hilfsbereit",
            audioUrl: "/audio/s4/s4_l3_de-CH.mp3"
          },
          "nl-NL": {
            text: "Goedemorgen! Volgens de klantenservicehandleiding heb ik voor het retourneren van apparaten die van spionage worden verdacht de originele verpakking en een beëdigde getuige nodig.",
            stageDirection: "Vrolijk en buitengewoon behulpzaam",
            audioUrl: "/audio/s4/s4_l3_nl-NL.mp3"
          },
          "nb-NO": {
            text: "God morgen! I henhold til kundeservicehåndboken trenger jeg originalemballasjen og et edsvorent vitne for å ta imot apparater mistenkt for spionasje.",
            stageDirection: "Blid og hjelpsom",
            audioUrl: "/audio/s4/s4_l3_nb-NO.mp3"
          },
          "sv-SE": {
            text: "God morgon! Enligt kundtjänstmanualen behöver jag originalförpackningen och ett edsvurit vittne för att ta emot vitvaror som misstänks för spioneri.",
            stageDirection: "Glad och hjälpsam",
            audioUrl: "/audio/s4/s4_l3_sv-SE.mp3"
          },
          "da-DK": {
            text: "Godmorgen! Ifølge kundeservicevejledningen skal jeg bruge den originale emballage og et edsvorent vidne for at returnere apparater mistænkt for spionage.",
            stageDirection: "Imødekommende og hjælpsom",
            audioUrl: "/audio/s4/s4_l3_da-DK.mp3"
          },
          "ru-RU": {
            text: "Доброе утро! Согласно инструкции по обслуживанию клиентов, для возврата техники с подозрением на шпионаж мне нужна оригинальная упаковка и свидетель под присягой.",
            stageDirection: "Любезна и лучезарна",
            audioUrl: "/audio/s4/s4_l3_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Доброго ранку! Згідно з інструкцією обслуговування клієнтів, для повернення техніки з підозрою на шпигунство мені потрібна оригінальна упаковка та свідок під присягою.",
            stageDirection: "Привітно і послужливо",
            audioUrl: "/audio/s4/s4_l3_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Dzień dobry! Zgodnie z podręcznikiem obsługi klienta, aby zwrócić sprzęt podejrzany o szpiegostwo, potrzebuję oryginalnego opakowania i zaprzysiężonego świadka.",
            stageDirection: "Uprzejma i pomocna",
            audioUrl: "/audio/s4/s4_l3_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Dobré ráno! Podle příručky péče o zákazníky potřebuji pro vrácení spotřebiče s podezřením na špionáž původní obal a místopřísežného svědka.",
            stageDirection: "Milá a nanejvýš ochotná",
            audioUrl: "/audio/s4/s4_l3_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Dobro jutro! Prema priručniku za korisnike, za povrat uređaja pod sumnjom na špijunažu trebam originalno pakiranje i prisegnutog svjedoka.",
            stageDirection: "Ljubazna i uslužna",
            audioUrl: "/audio/s4/s4_l3_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Hyvää huomenta! Asiakaspalveluoppaan mukaan vakoilusta epäiltyjen laitteiden palauttamiseen tarvitsen alkuperäispakkauksen ja valantehneen todistajan.",
            stageDirection: "Ystävällinen ja palvelualtis",
            audioUrl: "/audio/s4/s4_l3_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Jó reggelt! Az ügyfélszolgálati kézikönyv szerint a kémkedéssel gyanúsított készülékek visszavételéhez az eredeti csomagolásra és egy esküt tett tanúra van szükségem.",
            stageDirection: "Kedvesen és készségesen",
            audioUrl: "/audio/s4/s4_l3_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Egun on! Bezeroen arretarako eskuliburuaren arabera, espioitza-susmoa duten etxetresnak itzultzeko jatorrizko bilgarria eta zinpeko lekuko bat behar ditut.",
            stageDirection: "Atsegina eta erabat zerbitzari",
            audioUrl: "/audio/s4/s4_l3_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Günaydın! Müşteri hizmetleri el kitabına göre, casusluk şüphesi taşıyan cihazları iade alabilmem için orijinal ambalajı ve yeminli bir şahit gerekiyor.",
            stageDirection: "Güleryüzlü ve son derece yardımsever",
            audioUrl: "/audio/s4/s4_l3_tr-TR.mp3"
          },
          "ja-JP": {
            text: "おはようございます！お客様窓口マニュアルによりますと、スパイ容疑の家電をご返品いただくには、元の外箱と宣誓証人が必要となっております。",
            stageDirection: "愛想よく完璧な笑顔で",
            audioUrl: "/audio/s4/s4_l3_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "早上好！根据客户服务手册，退回疑似涉嫌间谍活动的家电，需要提供原包装并附带一名宣誓证人。",
            stageDirection: "面带微笑，服务周到",
            audioUrl: "/audio/s4/s4_l3_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "早晨！根據我哋客戶服務手冊，如果想退回懷疑有間諜行為嘅電器，我需要原裝包裝同埋一位宣誓證人先得㗎。",
            stageDirection: "笑得好親切又有禮貌",
            audioUrl: "/audio/s4/s4_l3_yue-HK.mp3"
          },
          "ko-KR": {
            text: "좋은 아침입니다! 고객 서비스 매뉴얼에 따르면, 간첩 활동이 의심되는 가전제품을 환불하시려면 원래 포장 상자와 선서 증인이 필요합니다.",
            stageDirection: "상냥하고 매우 친절하게",
            audioUrl: "/audio/s4/s4_l3_ko-KR.mp3"
          },
          "ar-XA": {
            text: "صباح الخير! وفقاً لدليل خدمة العملاء، لاسترجاع الأجهزة المشتبه في تورطها بالتجسس أحتاج إلى العبوة الأصلية وشاهد محلف.",
            stageDirection: "بلباقة وابتسامة خدومة",
            audioUrl: "/audio/s4/s4_l3_ar-XA.mp3"
          },
          "he-IL": {
            text: "בוקר טוב! על פי מדריך שירות הלקוחות, כדי להחזיר מכשירי חשמל החשודים בריגול אני זקוקה לאריזה המקורית ולעד בשבועה.",
            stageDirection: "חייכנית ומאירת פנים",
            audioUrl: "/audio/s4/s4_l3_he-IL.mp3"
          },
          "es-VE": {
            text: "¡Buenos días! Según el manual de atención al cliente, para devolver aparatos con sospechas de espionaje necesito la caja original y un testigo jurado.",
            stageDirection: "Muy amable y servicial",
            audioUrl: "/audio/s4/s4_l3_es-VE.mp3"
          },
          "es-CL": {
            text: "¡Buenos días! Según el manual de atención a clientes, para devolver electrodomésticos con sospecha de espionaje necesito el embalaje original y un testigo jurado.",
            stageDirection: "Súper atenta y simpática",
            audioUrl: "/audio/s4/s4_l3_es-CL.mp3"
          },
          "es-PE": {
            text: "¡Buenos días! Según el manual de atención al cliente, para devolver electrodomésticos con sospechas de espionaje necesito el empaque original y un testigo juramentado.",
            stageDirection: "Amable y solícita",
            audioUrl: "/audio/s4/s4_l3_es-PE.mp3"
          },
          "es-CU": {
            text: "¡Buenos días! Según el manual de atención a la población, para devolver equipos con sospecha de espionaje necesito el empaque original y un testigo jurado.",
            stageDirection: "Amable y tranquila",
            audioUrl: "/audio/s4/s4_l3_es-CU.mp3"
          },
          "es-GQ": {
            text: "¡Buenos días! Según las normas de atención al cliente, para devolver aparatos con sospecha de espionaje necesito el embalaje original y un testigo jurado.",
            stageDirection: "Muy educada y servicial",
            audioUrl: "/audio/s4/s4_l3_es-GQ.mp3"
          },
          "en-US": {
            text: "Good morning! According to the customer service manual, to return appliances suspected of espionage I need the original packaging and a sworn witness.",
            stageDirection: "Cheerfully helpful",
            audioUrl: "/audio/s4/s4_l3_en-US.mp3"
          },
          "en-GB": {
            text: "Good morning! According to the customer service handbook, to return appliances suspected of espionage I shall require the original packaging and a sworn witness.",
            stageDirection: "Polite and thoroughly helpful",
            audioUrl: "/audio/s4/s4_l3_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Mornin' folks! Accordin' tae the customer care handbook, tae return appliances suspected o' spyin' I'll be needin' the original box and a sworn witness.",
            stageDirection: "Bubbly and dead helpful",
            audioUrl: "/audio/s4/s4_l3_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Mornin' y'all! Accordin' to the customer service handbook, to return appliances suspected of spyin' I'm gonna need the original box and a sworn witness.",
            stageDirection: "Sweet as pie",
            audioUrl: "/audio/s4/s4_l3_en-US-south.mp3"
          },
          "en-IE": {
            text: "Morning to you! Now according to the customer handbook, to return appliances suspected of espionage I'll be needing the original packaging and a sworn witness.",
            stageDirection: "Grand and obliging",
            audioUrl: "/audio/s4/s4_l3_en-IE.mp3"
          },
          "en-AU": {
            text: "Morning! According to the store manual, to return appliances suspected of espionage I'm gonna need the original box and a sworn witness, mate.",
            stageDirection: "Bright and easygoing",
            audioUrl: "/audio/s4/s4_l3_en-AU.mp3"
          },
          "en-NZ": {
            text: "Good morning! According to our customer handbook, to return appliances suspected of espionage I'll need the original box and a sworn witness.",
            stageDirection: "Friendly and obliging",
            audioUrl: "/audio/s4/s4_l3_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Morning! According to our customer service manual, to return appliances suspected of espionage I need the original packaging and a sworn witness, hey.",
            stageDirection: "Sunny and obliging",
            audioUrl: "/audio/s4/s4_l3_en-ZA.mp3"
          },
          "en-NG": {
            text: "Good morning! According to our customer manual, to return any machine wey dey do spy work, I need the original box and one person to swear oath.",
            stageDirection: "Smiling plenty",
            audioUrl: "/audio/s4/s4_l3_en-NG.mp3"
          },
          "en-IN": {
            text: "Good morning! According to the customer service manual only, to return appliances suspected of espionage I will be requiring original packaging and one sworn witness.",
            stageDirection: "Very polite and cheerful",
            audioUrl: "/audio/s4/s4_l3_en-IN.mp3"
          },
          "fr-CD": {
            text: "Bonjour ! Selon le règlement du service client, pour retourner un appareil soupçonné d'espionnage, il me faut l'emballage original et un témoin assermenté.",
            stageDirection: "Souriante et dévouée",
            audioUrl: "/audio/s4/s4_l3_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Bonjour ! D'après notre manuel de service client, pour le retour d'un appareil suspecté d'espionnage, j'ai besoin de l'emballage d'origine et d'un témoin juré.",
            stageDirection: "Gentille et avenante",
            audioUrl: "/audio/s4/s4_l3_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Bom dia! Conforme o guia de atendimento ao cliente, para devolver aparelhos com suspeita de espionagem preciso da caixa original e de uma testemunha jurada.",
            stageDirection: "Muito atenciosa e sorridente",
            audioUrl: "/audio/s4/s4_l3_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Bom dia! De acordo com o manual de atendimento, para devolver eletrodomésticos com suspeitas de espionagem preciso da caixa original e de uma testemunha juramentada.",
            stageDirection: "Prestável e simpática",
            audioUrl: "/audio/s4/s4_l3_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Goeiemorgen! Volgens de handleiding van de klantendienst heb ik voor het terugbrengen van toestellen met spionagevermoeden de originele verpakking en een beëdigde getuige nodig.",
            stageDirection: "Vriendelijk en gedienstig",
            audioUrl: "/audio/s4/s4_l3_nl-BE.mp3"
          },
          "ar-SA": {
            text: "صباح الخير! حسب دليل خدمة العملاء، عشان نرجع أجهزة يشتبه فيها تجسس أحتاج الكرتون الأصلي وشاهد يحلف يمين.",
            stageDirection: "بشوشة ومبتسمة",
            audioUrl: "/audio/s4/s4_l3_ar-SA.mp3"
          },
          "ar-EG": {
            text: "صباح الخير! طبقاً لكتيب خدمة العملا، عشان نرجع أجهزة فيها شبهة تجسس محتاجة الكرتونة الأصلية وشاهد حالف يمين.",
            stageDirection: "مبتسمة وبمنتهى اللطافة",
            audioUrl: "/audio/s4/s4_l3_ar-EG.mp3"
          },
          "ar-MA": {
            text: "صباح الخير! على حساب كتاب خدمة الزبناء، باش نرجعو أجهزة مشكوك فيها فالتجسس، خاصني الكرتونة الأصلية وشاهد يحلف.",
            stageDirection: "ضاحكة ومؤدبة",
            audioUrl: "/audio/s4/s4_l3_ar-MA.mp3"
          },
          "ar-JO": {
            text: "صباح الخير! حسب دليل خدمة الزباين، عشان نرجع أجهزة مشكوك فيها بالتجسس بدي الكرتونة الأصلية وشاهد محلف.",
            stageDirection: "مبتسمة وبخدمة كاملة",
            audioUrl: "/audio/s4/s4_l3_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "صباح الخير! حسب دليل خدمة العملاء، حتى نرجع أجهزة بيها شبهة تجسس محتاجة الكارتون الأصلي وشاهد يحلف يمين.",
            stageDirection: "بشوشة وكلها خدمة",
            audioUrl: "/audio/s4/s4_l3_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "早安！根據客戶服務手冊，退回疑似涉嫌間諜活動的家電，需要提供原包裝並附帶一名宣誓證人。",
            stageDirection: "笑容可掬，服務親切",
            audioUrl: "/audio/s4/s4_l3_zh-TW.mp3"
          },
          "hi-IN": {
            text: "शुभ प्रभात! ग्राहक सेवा नियमावली के अनुसार, जासूसी के संदेह वाले उपकरणों को वापस करने के लिए मुझे मूल डिब्बा और एक शपथ पत्र वाला गवाह चाहिए।",
            stageDirection: "मुस्कुराते हुए पूरी विनम्रता से",
            audioUrl: "/audio/s4/s4_l3_hi-IN.mp3"
          },
          "ur-PK": {
            text: "صبح بخیر! کسٹمر سروس مینوئل کے مطابق، جاسوسی کے شبہ والے آلات واپس کرنے کے لیے مجھے اصل ڈبہ اور ایک حلفیہ گواہ درکار ہے۔",
            stageDirection: "مسکراتے ہوئے اور انتہائی شائستگی سے",
            audioUrl: "/audio/s4/s4_l3_ur-PK.mp3"
          },
          "bn-IN": {
            text: "সুপ্রভাত! গ্রাহক সেবা নিয়মাবলী অনুসারে, গুপ্তচরবৃত্তির সন্দেহযুক্ত সরঞ্জাম ফেরত দিতে হলে মূল প্যাকেজিং এবং একজন শপথকারী সাক্ষী প্রয়োজন।",
            stageDirection: "হাসিমুখে অত্যন্ত অমায়িক ভঙ্গিতে",
            audioUrl: "/audio/s4/s4_l3_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਸ਼ੁਭ ਸਵੇਰ! ਗਾਹਕ ਸੇਵਾ ਨਿਯਮਾਂ ਅਨੁਸਾਰ, ਜਾਸੂਸੀ ਦੇ ਸ਼ੱਕ ਵਾਲੇ ਉਪਕਰਣ ਵਾਪਸ ਕਰਨ ਲਈ ਮੈਨੂੰ ਅਸਲੀ ਡੱਬਾ ਅਤੇ ਇੱਕ ਸਹੁੰ ਚੁੱਕਿਆ ਗਵਾਹ ਚਾਹੀਦਾ ਹੈ।",
            stageDirection: "ਮੁਸਕਰਾਉਂਦੇ ਹੋਏ ਅਤੇ ਨਿਮਰਤਾ ਨਾਲ",
            audioUrl: "/audio/s4/s4_l3_pa-IN.mp3"
          },
          "gu-IN": {
            text: "શુભ સવાર! ગ્રાહક સેવા માર્ગદર્શિકા મુજબ, જાસૂસીની શંકાવાળા ઉપકરણો પરત કરવા માટે મને મૂળ પેકિંગ અને સોગંદ લીધેલા એક સાક્ષીની જરૂર છે.",
            stageDirection: "હસતાં મુખે અને સંપૂર્ણ મદદગાર",
            audioUrl: "/audio/s4/s4_l3_gu-IN.mp3"
          },
          "mr-IN": {
            text: "शुभ प्रभात! ग्राहक सेवा नियमावलीनुसार, हेरगिरीचा संशय असलेल्या उपकरणांचा परतावा करण्यासाठी मला मूळ बॉक्स आणि एक शपथ घेतलेला साक्षीदार आवश्यक आहे.",
            stageDirection: "हसतमुख आणि नम्रपणे",
            audioUrl: "/audio/s4/s4_l3_mr-IN.mp3"
          },
          "ta-IN": {
            text: "காலை வணக்கம்! வாடிக்கையாளர் சேவை கையேட்டின்படி, உளவு பார்த்ததாக சந்தேகிக்கப்படும் சாதனங்களைத் திருப்பித் தர அசல் பெட்டியும் உறுதிமொழி எடுத்த ஒரு சாட்சியும் தேவை.",
            stageDirection: "புன்னகையுடன் பணிவாக",
            audioUrl: "/audio/s4/s4_l3_ta-IN.mp3"
          },
          "te-IN": {
            text: "శుభోదయం! కస్టమర్ సర్వీస్ మాన్యువల్ ప్రకారం, గూఢచర్యం అనుమానం ఉన్న పరికరాలను వాపసు చేయడానికి నాకు అసలు ప్యాకింగ్ మరియు ప్రమాణం చేసిన ఒక సాక్షి కావాలి.",
            stageDirection: "చిరునవ్వుతో వినయంగా",
            audioUrl: "/audio/s4/s4_l3_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಶುಭೋದಯ! ಗ್ರಾಹಕ ಸೇವಾ ಕೈಪಿಡಿಯ ಪ್ರಕಾರ, ಗೂಢಚಾರಿಕೆಯ ಶಂಕೆಯಿರುವ ಉಪಕರಣಗಳನ್ನು ಹಿಂತಿರುಗಿಸಲು ನನಗೆ ಮೂಲ ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ಪ್ರಮಾಣ ವಚನ ಸ್ವೀಕರಿಸಿದ ಸಾಕ್ಷಿಯ ಅಗತ್ಯವಿದೆ.",
            stageDirection: "ಮುಗುಳುನಗೆಯಿಂದ ಸೌಜನ್ಯಯುತವಾಗಿ",
            audioUrl: "/audio/s4/s4_l3_kn-IN.mp3"
          },
          "ml-IN": {
            text: "സുപ്രഭാതം! കസ്റ്റമർ സർവീസ് മാനുവൽ അനുസരിച്ച്, ചാരപ്പണി സംശയിക്കുന്ന ഉപകരണങ്ങൾ തിരികെ നൽകാൻ എനിക്ക് ഒറിജിനൽ പാക്കേജിംഗും സത്യപ്രതിജ്ഞ ചെയ്ത ഒരു സാക്ഷിയും ആവശ്യമാണ്.",
            stageDirection: "ചിരിച്ചുകൊണ്ട് വിനയപൂർവ്വം",
            audioUrl: "/audio/s4/s4_l3_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Chào buổi sáng! Theo cẩm nang chăm sóc khách hàng, để trả lại thiết bị điện tử bị nghi ngờ làm gián điệp, tôi cần bao bì gốc và một nhân chứng hữu thệ.",
            stageDirection: "Tươi cười và hết sức ân cần",
            audioUrl: "/audio/s4/s4_l3_vi-VN.mp3"
          },
          "th-TH": {
            text: "สวัสดีตอนเช้าค่ะ! ตามคู่มือการบริการลูกค้า การจะคืนเครื่องใช้ไฟฟ้าที่ต้องสงสัยว่าเป็นจารกรรม ฉันต้องใช้กล่องบรรจุภัณฑ์เดิมและพยานที่สาบานตนแล้วค่ะ",
            stageDirection: "ยิ้มแย้มและพร้อมบริการอย่างยิ่ง",
            audioUrl: "/audio/s4/s4_l3_th-TH.mp3"
          },
          "id-ID": {
            text: "Selamat pagi! Menurut buku panduan layanan pelanggan, untuk mengembalikan peralatan yang dicurigai sebagai mata-mata, saya memerlukan kemasan asli dan saksi yang disumpah.",
            stageDirection: "Ramah dan sangat bersahabat",
            audioUrl: "/audio/s4/s4_l3_id-ID.mp3"
          },
          "ms-MY": {
            text: "Selamat pagi! Mengikut manual perkhidmatan pelanggan, untuk memulangkan perkakas yang disyaki menjalankan pengintipan, saya memerlukan pembungkusan asal dan saksi yang mengangkat sumpah.",
            stageDirection: "Mesra dan bersedia membantu",
            audioUrl: "/audio/s4/s4_l3_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Habari za asubuhi! Kulingana na mwongozo wa huduma kwa wateja, ili kurudisha vyombo vinavyoshukiwa kwa ujasusi ninahitaji sanduku la asili na shahidi aliyeapa.",
            stageDirection: "Mchangamfu na mwenye kusaidia",
            audioUrl: "/audio/s4/s4_l3_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Mba'éichapa ne ko'ẽ! Tembiapo ñangarekohára kuatiáre he'i: oñeme'ẽ jey hag̃ua tembiporu ojekuaáva espionaje-pe tekotevẽ ikaha ypykue ha peteĩ testígo oñe'ẽme'ẽva.",
            stageDirection: "Hory ha ipy'aporãva",
            audioUrl: "/audio/s4/s4_l3_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Allillanchu tutamanta! Rantikuqkunata yanapaq qillqam nin: wateqasqa kananpaq yuyasqa llamk'anakunata kutiychinapaqqa kikin mayt'unatam munani hinallataq huk jurasqa testigotapas.",
            stageDirection: "Kusi sonqowan yanapaypi",
            audioUrl: "/audio/s4/s4_l3_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Aski alwakipana! Alirinakar yanapaña qillqamax sasawa: espionajerjam uñtat yänaka kutt'ayañatakix qallta mayt'uw munata ukatx juramento lurir testigompi.",
            stageDirection: "Kusisitaw yanapt'iri",
            audioUrl: "/audio/s4/s4_l3_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Cualli tonalli! Inic tlacuahuatiliztli tlatequitiltiliztli, ic mocuepaz tlamantli tlaixmatiliztli espionaje monequi in yancuic tlapacholli ihuan ce tlatolixtlamatqui tlatocani.",
            stageDirection: "Cenca tlapaccaihiyocan",
            audioUrl: "/audio/s4/s4_l3_nah-MX.mp3"
          },
          "nv-US": {
            text: "Yáʼátʼééh abíní! Naaltsoos bikʼehgo naʼanishígíí binahjįʼ, tsin bee naʼanishígíí naʼneestʼą́ʼ biniinaa nináńtsoosgo, bighan áltséhígíí dóó diné tʼáá aaníí yáłtiʼii bíká adeeshwoł.",
            stageDirection: "Baʼahózhǫ́ǫgo yáłtiʼ",
            audioUrl: "/audio/s4/s4_l3_nv-US.mp3"
          }
        }
      },
      {
        id: "s4_l4",
        characterId: "hugo",
        defaultStageDirection: "Señalando a Bea con aire de triunfo absoluto",
        expression: "smug",
        translations: {
          "fr-CH": {
            text: "Tu vois, Clara ? Le protocole de sécurité nationale est déjà déclenché ! Dites-moi, agent Bea, quel est le mot de passe pour annuler l'opération ?",
            stageDirection: "Gonflé d'orgueil",
            audioUrl: "/audio/s4/s4_l4_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Tu vois, Clara ? Le protocole de sécurité nationale est déjà en route ! Dites-moi, agent Bea, quel est le mot de passe pour annuler l'opération ?",
            stageDirection: "Tout fier et victorieux",
            audioUrl: "/audio/s4/s4_l4_fr-BE.mp3"
          },
          "es-ES": {
            text: "¿Lo ves, Clara? ¡El protocolo de seguridad nacional ya está en marcha! Dígame, agente Bea, ¿cuál es la contraseña para cancelar la operación?",
            stageDirection: "Envalentonado",
            audioUrl: "/audio/s4/s4_l4_es-ES.mp3"
          },
          "el-GR": {
            text: "Το βλέπεις, Κλάρα; Το πρωτόκολλο εθνικής ασφάλειας έχει ήδη ξεκινήσει! Πείτε μου, πράκτορα Μπέα, ποιος είναι ο κωδικός πρόσβασης για να ακυρώσουμε την επιχείρηση;",
            stageDirection: "Παίρνοντας θάρρος",
            audioUrl: "/audio/s4/s4_l4_el-GR.mp3"
          },
          "es-MX": {
            text: "¿Ya ves, Clara? ¡El protocolo de seguridad nacional ya está jalando! Dígame, agente Bea, ¿cuál es la clave para cancelar el operativo?",
            stageDirection: "Bien crecido y triunfante",
            audioUrl: "/audio/s4/s4_l4_es-MX.mp3"
          },
          "es-AR": {
            text: "¿Viste, Clara? ¡El protocolo de seguridad nacional ya está en marcha! Dígame, agente Bea, ¿cuál es la contraseña para cancelar el operativo?",
            stageDirection: "Agrandidísimo",
            audioUrl: "/audio/s4/s4_l4_es-AR.mp3"
          },
          "es-DO": {
            text: "¿Ves, Clara? ¡El protocolo de seguridad nacional ya está activo! Dígame, agente Bea, ¿cuál es la clave para cancelar la operación?",
            stageDirection: "Creído de la vida",
            audioUrl: "/audio/s4/s4_l4_es-DO.mp3"
          },
          "es-PR": {
            text: "¿Viste, Clara? ¡El protocolo de seguridad nacional ya arrancó! Dígame, agente Bea, ¿cuál es la clave secreta pa' cancelar la misión?",
            stageDirection: "Bien pompeao",
            audioUrl: "/audio/s4/s4_l4_es-PR.mp3"
          },
          "es-CO": {
            text: "¿Si ve, Clara? ¡El protocolo de seguridad nacional ya está corriendo! Dígame, agente Bea, ¿cuál es la clave para cancelar el operativo?",
            stageDirection: "Crecido de orgullo",
            audioUrl: "/audio/s4/s4_l4_es-CO.mp3"
          },
          "fr-FR": {
            text: "Tu vois, Clara ? Le protocole de sécurité nationale est déjà lancé ! Dites-moi, agent Bea, quel est le mot de passe pour annuler l'opération ?",
            stageDirection: "Pavoisant d'assurance",
            audioUrl: "/audio/s4/s4_l4_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Tu vois ben, Clara ? Le protocole de sécurité nationale est déjà en marche ! Dites-moi, agent Bea, c'est quoi l'mot d'passe pour canceller l'opération ?",
            stageDirection: "Gonflé à bloc et triomphant",
            audioUrl: "/audio/s4/s4_l4_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Tu as vu ça, Clara ? Le protocole de sécurité de l'État est déjà en mouvement ! Dis-moi, agent Bea, c'est quoi le code secret pour couper l'opération ?",
            stageDirection: "Tout fier devant elle",
            audioUrl: "/audio/s4/s4_l4_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Tá vendo, Clara? O protocolo de segurança nacional já tá em andamento! Me diga, agente Bea, qual é a senha pra cancelar a operação?",
            stageDirection: "Se achando o máximo",
            audioUrl: "/audio/s4/s4_l4_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Estás a ver, Clara? O protocolo de segurança nacional já está em marcha! Diga-me, agente Bea, qual é a palavra-passe para abortar a operação?",
            stageDirection: "Envaidecido e triunfante",
            audioUrl: "/audio/s4/s4_l4_pt-PT.mp3"
          },
          "it-IT": {
            text: "Hai visto, Clara? Il protocollo di sicurezza nazionale è già attivo! Mi dica, agente Bea, qual è la parola d'ordine per annullare l'operazione?",
            stageDirection: "Rinvigorito e trionfante",
            audioUrl: "/audio/s4/s4_l4_it-IT.mp3"
          },
          "ca-ES": {
            text: "Ho veus, Clara? El protocol de seguretat nacional ja està en marxa! Digui'm, agent Bea, quina és la contrasenya per cancel·lar l'operació?",
            stageDirection: "Envalentit i triomfant",
            audioUrl: "/audio/s4/s4_l4_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Vezi, Clara? Protocolul de securitate națională este deja în desfășurare! Spuneți-mi, agent Bea, care este parola pentru a anula operațiunea?",
            stageDirection: "Înfumurat și victorios",
            audioUrl: "/audio/s4/s4_l4_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Velo, Clara? O protocolo de seguridade nacional xa está en marcha! Dígame, axente Bea, cal é o contrasinal para cancelar a operación?",
            stageDirection: "Crego e triunfante",
            audioUrl: "/audio/s4/s4_l4_gl-ES.mp3"
          },
          "oc-FR": {
            text: "O ves, Clara? Lo protocòl de seguretat nacionala es ja en marcha! Digatz-me, agenta Bea, quina es la senhal per anullar l'operacion?",
            stageDirection: "Bofi e triomfant",
            audioUrl: "/audio/s4/s4_l4_oc-FR.mp3"
          },
          "de-DE": {
            text: "Siehst du, Clara? Das nationale Sicherheitsprotokoll läuft bereits! Sagen Sie mir, Agentin Bea, wie lautet das Passwort, um die Operation abzubrechen?",
            stageDirection: "Selbstgefällig und siegessicher",
            audioUrl: "/audio/s4/s4_l4_de-DE.mp3"
          },
          "de-CH": {
            text: "Gseesch, Clara? S'nationale Sicherheitsprotokoll lauft scho! Säged Si mir, Agäntin Bea, was isch s'Passwort zum d'Aktion abblase?",
            stageDirection: "Selbstsicher und stolz",
            audioUrl: "/audio/s4/s4_l4_de-CH.mp3"
          },
          "nl-NL": {
            text: "Zie je wel, Clara? Het nationale veiligheidsprotocol is al in werking getreden! Vertel eens, agent Bea, wat is het wachtwoord om de operatie te staken?",
            stageDirection: "Zelfgenoegzaam en zegevierend",
            audioUrl: "/audio/s4/s4_l4_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Ser du, Clara? Den nasjonale sikkerhetsprotokollen er allerede i gang! Si meg, agent Bea, hva er passordet for å avbryte operasjonen?",
            stageDirection: "Hovmodig og seierssikker",
            audioUrl: "/audio/s4/s4_l4_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Ser du, Clara? Protokollet för nationell säkerhet är redan igång! Säg mig, agent Bea, vad är lösenordet för att avbryta operationen?",
            stageDirection: "Mallig och triumferande",
            audioUrl: "/audio/s4/s4_l4_sv-SE.mp3"
          },
          "da-DK": {
            text: "Kan du se, Clara? Den nationale sikkerhedsprotokol er allerede trådt i kraft! Sig mig, agent Bea, hvad er adgangskoden til at afblæse operationen?",
            stageDirection: "Selvfed og triumferende",
            audioUrl: "/audio/s4/s4_l4_da-DK.mp3"
          },
          "ru-RU": {
            text: "Видишь, Клара? Протокол национальной безопасности уже запущен! Скажите мне, агент Беа, каков пароль для отмены операции?",
            stageDirection: "Окрылённый и победоносный",
            audioUrl: "/audio/s4/s4_l4_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Бачиш, Кларо? Протокол національної безпеки вже активовано! Скажіть мені, агентко Беа, який пароль для скасування операції?",
            stageDirection: "Зарозуміло й тріумфально",
            audioUrl: "/audio/s4/s4_l4_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Widzisz, Clara? Protokół bezpieczeństwa narodowego już ruszył! Niech mi pani powie, agentko Bea, jakie jest hasło do odwołania operacji?",
            stageDirection: "Rozochocony i dumny",
            audioUrl: "/audio/s4/s4_l4_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Vidíš to, Kláro? Protokol národní bezpečnosti už běží! Řekněte mi, agentko Beo, jaké je heslo pro zrušení celé operace?",
            stageDirection: "Povýšeně a vítězoslavně",
            audioUrl: "/audio/s4/s4_l4_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Vidiš li, Clara? Protokol nacionalne sigurnosti već je pokrenut! Recite mi, agentice Bea, koja je lozinka za prekid operacije?",
            stageDirection: "Samouvjereno i pobjednički",
            audioUrl: "/audio/s4/s4_l4_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Näetkö, Clara? Kansallisen turvallisuuden protokolla on jo käynnissä! Sanokaa, agentti Bea, mikä on salasana operaation peruuttamiseksi?",
            stageDirection: "Itsetyytyväisenä ja voitokkaana",
            audioUrl: "/audio/s4/s4_l4_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Látod, Klára? A nemzetbiztonsági protokoll máris érvénybe lépett! Mondja csak, Bea ügynök, mi a jelszó a hadművelet leállításához?",
            stageDirection: "Felfuvalkodottan és diadalittasan",
            audioUrl: "/audio/s4/s4_l4_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Ikusten duzu, Clara? Segurtasun nazionaleko protokoloa martxan da dagoeneko! Esadazu, Bea agentea, zein da operazioa bertan behera uzteko pasahitza?",
            stageDirection: "Harro eta garaile",
            audioUrl: "/audio/s4/s4_l4_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Gördün mü, Clara? Ulusal güvenlik protokolü çoktan devreye girdi bile! Söyleyin bana Ajan Bea, operasyonu iptal etmek için gereken parola nedir?",
            stageDirection: "Kendinden emin ve zafer kazanmışçasına",
            audioUrl: "/audio/s4/s4_l4_tr-TR.mp3"
          },
          "ja-JP": {
            text: "見たかい、クララ？国家安全保障プロトコルは既に発動したんだ！教えてくれ、エージェント・ベア、作戦を中止するためのパスワードは何だ？",
            stageDirection: "得意満面で気取って",
            audioUrl: "/audio/s4/s4_l4_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "你看到了吧，克拉拉？国家安全协议已经启动了！告诉我，比阿特工，取消这次行动的密码是什么？",
            stageDirection: "得意洋洋，昂首挺胸",
            audioUrl: "/audio/s4/s4_l4_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "妳睇到喇咩，Clara？國家安全協議已經啟動咗喇！快啲話我知，Bea特工，取消呢次行動嘅密碼係咩？",
            stageDirection: "好得戚兼自滿",
            audioUrl: "/audio/s4/s4_l4_yue-HK.mp3"
          },
          "ko-KR": {
            text: "봤지, 클라라? 국가 안보 프로토콜이 이미 시작됐다고! 말해보세요, 베아 요원, 작전을 중단할 암호가 뭡니까?",
            stageDirection: "기세등등하게 득의양양해하며",
            audioUrl: "/audio/s4/s4_l4_ko-KR.mp3"
          },
          "ar-XA": {
            text: "أرأيتِ يا كلارا؟ بروتوكول الأمن القومي قيد التنفيذ بالفعل! أخبريني أيتها العميلة بيا، ما هي كلمة المرور لإلغاء العملية؟",
            stageDirection: "بزهو وانتصار",
            audioUrl: "/audio/s4/s4_l4_ar-XA.mp3"
          },
          "he-IL": {
            text: "את רואה, קלרה? נוהל הביטחון הלאומי כבר יצא לדרך! תגידי לי, סוכנת ביאה, מהי הסיסמה כדי לבטל את המבצע?",
            stageDirection: "זחוח ומלא ביטחון עצמי",
            audioUrl: "/audio/s4/s4_l4_he-IL.mp3"
          },
          "es-VE": {
            text: "¿Viste, Clara? ¡El protocolo de seguridad nacional ya está activo! Dígame, agente Bea, ¿cuál es la clave para cancelar el operativo?",
            stageDirection: "Bien agrandado",
            audioUrl: "/audio/s4/s4_l4_es-VE.mp3"
          },
          "es-CL": {
            text: "¿Cachai, Clara? ¡El protocolo de seguridad nacional ya está corriendo! Dígame, agente Bea, ¿cuál es la clave para cancelar la operación?",
            stageDirection: "Agrandado y con aires de victoria",
            audioUrl: "/audio/s4/s4_l4_es-CL.mp3"
          },
          "es-PE": {
            text: "¿Ves, Clara? ¡El protocolo de seguridad nacional ya está en marcha! Dígame, agente Bea, ¿cuál es la contraseña para cancelar el operativo?",
            stageDirection: "Crecido y triunfal",
            audioUrl: "/audio/s4/s4_l4_es-PE.mp3"
          },
          "es-CU": {
            text: "¿Viste, Clara? ¡El protocolo de seguridad nacional ya arrancó! Dígame, agente Bea, ¿cuál es la clave pa' parar la operación?",
            stageDirection: "Envalentonado",
            audioUrl: "/audio/s4/s4_l4_es-CU.mp3"
          },
          "es-GQ": {
            text: "¿Lo ves, Clara? ¡El protocolo de seguridad nacional ya está activado! Dígame, agente Bea, ¿cuál es la contraseña para detener la operación?",
            stageDirection: "Con aire de victoria",
            audioUrl: "/audio/s4/s4_l4_es-GQ.mp3"
          },
          "en-US": {
            text: "Do you see, Clara? The national security protocol is already underway! Tell me, Agent Bea, what is the password to abort the mission?",
            stageDirection: "Smug and emboldened",
            audioUrl: "/audio/s4/s4_l4_en-US.mp3"
          },
          "en-GB": {
            text: "Do you see that, Clara? National security protocol has already commenced! Tell me, Agent Bea, what is the passphrase to abort the operation?",
            stageDirection: "Smug and triumphant",
            audioUrl: "/audio/s4/s4_l4_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "D'ye see that, Clara? National security protocol is already rollin'! Tell me, Agent Bea, what's the secret code tae call off the job?",
            stageDirection: "Fair burstin' wi' pride",
            audioUrl: "/audio/s4/s4_l4_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "You see that, Clara? Homeland security protocol's already firin' up! Tell me, Agent Bea, what's the secret word to shut down this operation?",
            stageDirection: "Cocky as all get-out",
            audioUrl: "/audio/s4/s4_l4_en-US-south.mp3"
          },
          "en-IE": {
            text: "Do you see that now, Clara? The national security protocol is well on its way! Tell me, Agent Bea, what's the password to stand down the operation?",
            stageDirection: "Smug and full of himself",
            audioUrl: "/audio/s4/s4_l4_en-IE.mp3"
          },
          "en-AU": {
            text: "See that, Clara? National security protocol's already kicked off! Tell me, Agent Bea, what's the secret password to abort the op?",
            stageDirection: "Smug as anything",
            audioUrl: "/audio/s4/s4_l4_en-AU.mp3"
          },
          "en-NZ": {
            text: "See that, Clara? National security protocol is already underway! Tell me, Agent Bea, what's the password to cancel the op?",
            stageDirection: "Smug and buzzing",
            audioUrl: "/audio/s4/s4_l4_en-NZ.mp3"
          },
          "en-ZA": {
            text: "You see, Clara? National security protocol is already running hey! Tell me, Agent Bea, what is the password to abort the mission?",
            stageDirection: "Smug and pumped up",
            audioUrl: "/audio/s4/s4_l4_en-ZA.mp3"
          },
          "en-NG": {
            text: "You see am, Clara? National security protocol don start like this! Tell me, Agent Bea, wetin be the password to stop the mission?",
            stageDirection: "Chesting up with pride",
            audioUrl: "/audio/s4/s4_l4_en-NG.mp3"
          },
          "en-IN": {
            text: "Are you seeing that, Clara? National security protocol is already in full swing! Tell me, Agent Bea, what is the secret password to abort the operation?",
            stageDirection: "Triumphantly beaming",
            audioUrl: "/audio/s4/s4_l4_en-IN.mp3"
          },
          "fr-CD": {
            text: "Tu vois, Clara ? Le protocole de sécurité nationale est déjà activé ! Dis-moi, agent Bea, quel est le mot de passe pour arrêter l'opération ?",
            stageDirection: "Plein d'assurance et fier",
            audioUrl: "/audio/s4/s4_l4_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Tu as vu, Clara ? Le protocole de sécurité nationale est déjà lancé ! Dis-moi, agent Bea, quel est le mot de passe pour stopper l'opération ?",
            stageDirection: "Fier et conquérant",
            audioUrl: "/audio/s4/s4_l4_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Estás a ver, Clara? O protocolo de segurança do Estado já arrancou! Diz lá, agente Bea, qual é a palavra-passe para cancelar a operação?",
            stageDirection: "Todo convencido",
            audioUrl: "/audio/s4/s4_l4_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Estás a ver, Clara? O protocolo de segurança nacional já está ativo! Diga lá, agente Bea, qual é o código secreto para parar a missão?",
            stageDirection: "Orgulhoso e confiante",
            audioUrl: "/audio/s4/s4_l4_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Zie je wel, Clara? Het protocol voor nationale veiligheid is al opgestart! Zeg eens, agent Bea, wat is het paswoord om de operatie af te blazen?",
            stageDirection: "Zegezeker en trots",
            audioUrl: "/audio/s4/s4_l4_nl-BE.mp3"
          },
          "ar-SA": {
            text: "شفتي يا كلارا؟ بروتوكول الأمن القومي اشتغل خلاص! قولي لي يا عميلة بيا، وش هي كلمة السر عشان نلغي العملية؟",
            stageDirection: "مغرور ومبسوط بانتصاره",
            audioUrl: "/audio/s4/s4_l4_ar-SA.mp3"
          },
          "ar-EG": {
            text: "شايفة يا كلارا؟ بروتوكول الأمن القومي اشتغل خلاص! قوليلي يا سيادة العميلة بيا، إيه هي كلمة السر عشان نلغي العملية دي؟",
            stageDirection: "منتشي وفرحان بنفسه",
            audioUrl: "/audio/s4/s4_l4_ar-EG.mp3"
          },
          "ar-MA": {
            text: "شفتي يا كلارا؟ بروتوكول الأمن القومي راه بدا نيت! قولي ليا أ العميلة بيا، شنو هو الكود السري باش نحبسو هاد العملية؟",
            stageDirection: "ناشط وفرحان براسو",
            audioUrl: "/audio/s4/s4_l4_ar-MA.mp3"
          },
          "ar-JO": {
            text: "شفتي يا كلارا؟ بروتوكول الأمن القومي اشتغل رسمي! احكيلي يا عميلة بيا، شو هي كلمة السر مشان نلغي العملية؟",
            stageDirection: "مبسوط بحاله ومتشجع",
            audioUrl: "/audio/s4/s4_l4_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "شفتي يا كلارا؟ نظام الأمن القومي اشتغل هسة! كوليلي يا عميلة بيا، شنو الباسورد حتى نلغي العملية؟",
            stageDirection: "متفائل وفرحان بنفسه",
            audioUrl: "/audio/s4/s4_l4_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "妳看到了吧，克拉拉？國家安全協議已經啟動了！告訴我，比阿特工，取消這次行動的密碼是什麼？",
            stageDirection: "得意洋洋，信心滿滿",
            audioUrl: "/audio/s4/s4_l4_zh-TW.mp3"
          },
          "hi-IN": {
            text: "देखा तुमने, क्लारा? राष्ट्रीय सुरक्षा प्रोटोकॉल पहले ही शुरू हो चुका है! मुझे बताइए, एजेंट बी, इस ऑपरेशन को रद्द करने का पासवर्ड क्या है?",
            stageDirection: "घमंड और जीत के जोश में",
            audioUrl: "/audio/s4/s4_l4_hi-IN.mp3"
          },
          "ur-PK": {
            text: "دیکھا تم نے، کلارا؟ قومی سلامتی کا پروٹوکول تو پہلے ہی شروع ہو چکا ہے! مجھے بتائیے، ایجنٹ بیا، اس آپریشن کو منسوخ کرنے کا پاس ورڈ کیا ہے؟",
            stageDirection: "غرور اور فتح کے جوش میں",
            audioUrl: "/audio/s4/s4_l4_ur-PK.mp3"
          },
          "bn-IN": {
            text: "দেখলে তো, ক্লারা? জাতীয় নিরাপত্তা প্রোটোকল ইতিমধ্যে শুরু হয়ে গেছে! আমাকে বলুন, এজেন্ট বিয়া, অপারেশন বাতিল করার গোপন পাসওয়ার্ডটা কী?",
            stageDirection: "অহংকারে ডগমগ হয়ে",
            audioUrl: "/audio/s4/s4_l4_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਵੇਖਿਆ ਤੂੰ, ਕਲਾਰਾ? ਰਾਸ਼ਟਰੀ ਸੁਰੱਖਿਆ ਪ੍ਰੋਟੋਕੋਲ ਪਹਿਲਾਂ ਹੀ ਚਾਲੂ ਹੋ ਚੁੱਕਾ ਹੈ! ਮੈਨੂੰ ਦੱਸੋ, ਏਜੰਟ ਬੀਆ, ਇਸ ਕਾਰਵਾਈ ਨੂੰ ਰੱਦ ਕਰਨ ਦਾ ਪਾਸਵਰਡ ਕੀ ਹੈ?",
            stageDirection: "ਹੰਕਾਰ ਅਤੇ ਜਿੱਤ ਦੇ ਰੌਂਅ ਵਿੱਚ",
            audioUrl: "/audio/s4/s4_l4_pa-IN.mp3"
          },
          "gu-IN": {
            text: "જોયું તેં, ક્લેરા? રાષ્ટ્રીય સુરક્ષા પ્રોટોકોલ તો ક્યારનોય શરૂ થઈ ચૂક્યો છે! મને કહો, એજન્ટ બીયા, આ ઓપરેશન રદ કરવાનો ગુપ્ત પાસવર્ડ કયો છે?",
            stageDirection: "ગર્વથી ફુલાઈને",
            audioUrl: "/audio/s4/s4_l4_gu-IN.mp3"
          },
          "mr-IN": {
            text: "पाहिलंस, क्लारा? राष्ट्रीय सुरक्षा प्रोटोकॉल आधीच सुरू झाला आहे! मला सांगा, एजंट बीया, हे ऑपरेशन रद्द करण्यासाठी पासवर्ड काय आहे?",
            stageDirection: "अहंकाराने आणि विजयी सुरात",
            audioUrl: "/audio/s4/s4_l4_mr-IN.mp3"
          },
          "ta-IN": {
            text: "பார்த்தாயா, கிளாரா? தேசிய பாதுகாப்பு நடைமுறை ஏற்கனவே தொடங்கிவிட்டது! சொல்லுங்கள், உளவாளி பீயா, இந்த நடவடிக்கையை ரத்து செய்வதற்கான கடவுச்சொல் என்ன?",
            stageDirection: "பெருமிதத்துடனும் உற்சாகத்துடனும்",
            audioUrl: "/audio/s4/s4_l4_ta-IN.mp3"
          },
          "te-IN": {
            text: "చూశావా, క్లారా? జాతీయ భద్రతా ప్రోటోకాల్ ఇప్పటికే మొదలైపోయింది! చెప్పండి, ఏజెంట్ బియా, ఈ ఆపరేషన్‌ను రద్దు చేయడానికి పాస్‌వర్డ్ ఏమిటి?",
            stageDirection: "గర్వంగా మరియు విజయోత్సాహంతో",
            audioUrl: "/audio/s4/s4_l4_te-IN.mp3"
          },
          "kn-IN": {
            text: "ನೋಡಿದೆಯಾ, ಕ್ಲಾರಾ? ರಾಷ್ಟ್ರೀಯ ಭದ್ರತಾ ಶಿಷ್ಟಾಚಾರವು ಈಗಾಗಲೇ ಪ್ರಾರಂಭವಾಗಿದೆ! ನನಗೆ ತಿಳಿಸಿ, ಏಜೆಂಟ್ ಬಿಯಾ, ಈ ಕಾರ್ಯಾಚರಣೆಯನ್ನು ರದ್ದುಗೊಳಿಸುವ ಪಾಸ್‌ವರ್ಡ್ ಏನು?",
            stageDirection: "ಹೆಮ್ಮೆಯಿಂದ ಬೀಗುತ್ತಾ",
            audioUrl: "/audio/s4/s4_l4_kn-IN.mp3"
          },
          "ml-IN": {
            text: "കണ്ടോ നീ, ക്ലാര? ദേശീയ സുരക്ഷാ പ്രോട്ടോക്കോൾ ഇതിനകം ആരംഭിച്ചുകഴിഞ്ഞു! എന്നോട് പറയൂ, ഏജന്റ് ബിയാ, ഈ ഓപ്പറേഷൻ റദ്ദാക്കാനുള്ള പാസ്‌വേഡ് എന്താണ്?",
            stageDirection: "അഹങ്കാരത്തോടെ വിജയഭാവത്തിൽ",
            audioUrl: "/audio/s4/s4_l4_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Thấy chưa, Clara? Giao thức an ninh quốc gia đã được kích hoạt rồi! Nói cho tôi biết đi, Điệp viên Bea, mật khẩu để hủy bỏ chiến dịch là gì?",
            stageDirection: "Đắc thắng và tự đắc",
            audioUrl: "/audio/s4/s4_l4_vi-VN.mp3"
          },
          "th-TH": {
            text: "เห็นไหมล่ะ คลารา? ระเบียบการความมั่นคงแห่งชาติเริ่มทำงานแล้ว! บอกมาสิครับ สายลับเบีย รหัสผ่านในการยกเลิกปฏิบัติการนี้คืออะไร?",
            stageDirection: "ฮึกเหิมและลำพองใจ",
            audioUrl: "/audio/s4/s4_l4_th-TH.mp3"
          },
          "id-ID": {
            text: "Kamu lihat, Clara? Protokol keamanan nasional sudah berjalan! Katakan padaku, Agen Bea, apa kata sandi untuk membatalkan operasi ini?",
            stageDirection: "Puas dan berlagak sombong",
            audioUrl: "/audio/s4/s4_l4_id-ID.mp3"
          },
          "ms-MY": {
            text: "Awak nampak tak, Clara? Protokol keselamatan negara sudah bermula! Beritahu saya, Ejen Bea, apakah kata laluan untuk membatalkan operasi ini?",
            stageDirection: "Berlagak megah dan bangga",
            audioUrl: "/audio/s4/s4_l4_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Unaona, Clara? Itifaki ya usalama wa taifa tayari imeanza! Niambie, Afisa Bea, nenosiri la kufuta operesheni hii ni lipi?",
            stageDirection: "Akitamba kwa ushindi",
            audioUrl: "/audio/s4/s4_l4_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Rehechápa, Clara? Seguridad nacional rape oñepyrũma hína! Emombe'u chéve, agente Bea, mba'épa pe ñe'ẽñemi jajoko hag̃ua ko operasion?",
            stageDirection: "Iñakãguapýva ha ojeroviáva ijehe",
            audioUrl: "/audio/s4/s4_l4_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Rikunkichu, Clara? Suyupa allin kawsayninpa kamachiyninqa qallarinñam! Willaway, agente Bea, ima pakasqa rimaytaq kay rurayta sayachinapaq?",
            stageDirection: "Kusisqa atipaq hina",
            audioUrl: "/audio/s4/s4_l4_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Uñjtati, Clara? Aka markana seguridadatak kamachix qalltxapxiwa! Sitaxa, agente Bea, kunas uka p'iqi chimpu aka operacion qallt'aña sayt'ayañatakixa?",
            stageDirection: "Ch'ama k'arisiñampi arnaqasa",
            audioUrl: "/audio/s4/s4_l4_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Tiquita, Clara? In altepetl tlapacholiztli protocol omopeuhya! Xinechmolhuili, agente Bea, tlen tlaixpahuiliztli ic tlatzaccaz inin tlatequiliztli?",
            stageDirection: "Cenca mohueyimati",
            audioUrl: "/audio/s4/s4_l4_nah-MX.mp3"
          },
          "nv-US": {
            text: "Yiniłtsą́ą́sh, Clara? Kéyah baa aháyó bee hazʼáanii kʼad choolʼį́! Shil hólneʼ, Naatʼáanii Bea, haʼátʼíhída bízhiʼ yee tʼóó bee chʼééh ádoolnííł?",
            stageDirection: "Ayóo ayóí áhátʼį́įgo yáłtiʼ",
            audioUrl: "/audio/s4/s4_l4_nv-US.mp3"
          }
        }
      },
      {
        id: "s4_l5",
        characterId: "bea",
        defaultStageDirection: "Consultando una libreta de espiral con total naturalidad",
        expression: "neutral",
        translations: {
          "fr-CH": {
            text: "Le mot de passe est « croquette », mais le gérant a congé aujourd'hui. Je peux seulement vous donner un bon d'achat ou échanger l'appareil contre une machine à café qui parle.",
            stageDirection: "Douce et serviable",
            audioUrl: "/audio/s4/s4_l5_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Le mot de passe est « croquette », mais le gérant est en congé aujourd'hui. Je peux seulement vous faire un bon d'achat ou échanger le grille-pain contre une cafetière qui parle.",
            stageDirection: "Très innocente et avenante",
            audioUrl: "/audio/s4/s4_l5_fr-BE.mp3"
          },
          "es-ES": {
            text: "La contraseña es «croqueta», pero hoy el encargado libra. Solo puedo darles un vale de tienda o cambiar la tostadora por una cafetera parlante.",
            stageDirection: "Inocente y complaciente",
            audioUrl: "/audio/s4/s4_l5_es-ES.mp3"
          },
          "el-GR": {
            text: "Ο κωδικός πρόσβασης είναι «κροκέτα», αλλά σήμερα ο υπεύθυνος έχει ρεπό. Μπορώ μόνο να σας δώσω ένα κουπόνι καταστήματος ή να αλλάξω τη φρυγανιέρα με μια καφετιέρα που μιλάει.",
            stageDirection: "Αθώα και πρόθυμη",
            audioUrl: "/audio/s4/s4_l5_el-GR.mp3"
          },
          "es-MX": {
            text: "La clave es «croqueta», pero hoy el gerente descansó. Solo les puedo dar un monedero electrónico o cambiar el tostador por una cafetera que habla.",
            stageDirection: "Súper tierna y calmada",
            audioUrl: "/audio/s4/s4_l5_es-MX.mp3"
          },
          "es-AR": {
            text: "La contraseña es «croqueta», pero hoy el encargado tiene franco. Solo les puedo dar una nota de crédito o cambiar la tostadora por una cafetera que habla.",
            stageDirection: "Inocente y tranquila",
            audioUrl: "/audio/s4/s4_l5_es-AR.mp3"
          },
          "es-DO": {
            text: "La contraseña es «croqueta», pero hoy el encargado no vino a trabajar. Solo les puedo dar una nota de crédito o cambiarle la tostadora por una cafetera que habla.",
            stageDirection: "Inocente y tranquila",
            audioUrl: "/audio/s4/s4_l5_es-DO.mp3"
          },
          "es-PR": {
            text: "La clave es «croqueta», pero hoy el gerente tiene el día libre. Solo les puedo dar un crédito de la tienda o cambiar la tostadora por una cafetera parlanchina.",
            stageDirection: "Inocente y complaciente",
            audioUrl: "/audio/s4/s4_l5_es-PR.mp3"
          },
          "es-CO": {
            text: "La clave es «croqueta», pero hoy el administrador tiene descanso. Solo les puedo dar un bono de la tienda o cambiar el tostador por una cafetera que habla.",
            stageDirection: "Muy dulce y tranquila",
            audioUrl: "/audio/s4/s4_l5_es-CO.mp3"
          },
          "fr-FR": {
            text: "Le mot de passe est « croquette », mais le responsable est en jour de repos. Je peux seulement vous faire un avoir ou échanger le grille-pain contre une cafetière parlante.",
            stageDirection: "Innocente et serviable",
            audioUrl: "/audio/s4/s4_l5_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Le mot d'passe c'est « croquette », mais l'gérant est en congé aujourd'hui. J'peux juste vous donner une note de crédit ou échanger l'grille-pain pour une cafetière parlante.",
            stageDirection: "Ben naïve et gentille",
            audioUrl: "/audio/s4/s4_l5_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Le mot de passe c'est « croquette », mais le chef est en repos aujourd'hui. Je peux seulement vous donner un bon d'achat ou changer le grille-pain contre une cafetière qui parle là.",
            stageDirection: "Calme et innocente",
            audioUrl: "/audio/s4/s4_l5_fr-CI.mp3"
          },
          "pt-BR": {
            text: "A senha é «croquete», mas hoje o gerente tá de folga. Só posso dar um vale-compras ou trocar a torradeira por uma cafeteira que fala.",
            stageDirection: "Toda ingênua e prestativa",
            audioUrl: "/audio/s4/s4_l5_pt-BR.mp3"
          },
          "pt-PT": {
            text: "A palavra-passe é «croquete», mas o gerente hoje está de folga. Só posso passar um vale de loja ou trocar a torradeira por uma máquina de café falante.",
            stageDirection: "Ingénua e prestável",
            audioUrl: "/audio/s4/s4_l5_pt-PT.mp3"
          },
          "it-IT": {
            text: "La parola d'ordine è «crocchetta», ma oggi il direttore è di riposo. Posso solo farvi un buono spesa o scambiare il tostapane con una macchina del caffè parlante.",
            stageDirection: "Candida e accomodante",
            audioUrl: "/audio/s4/s4_l5_it-IT.mp3"
          },
          "ca-ES": {
            text: "La contrasenya és «croqueta», però avui l'encarregat té festa. Només us puc donar un val de la botiga o canviar la torradora per una cafetera que parla.",
            stageDirection: "Innocent i complaent",
            audioUrl: "/audio/s4/s4_l5_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Parola este «crochetă», dar șeful de magazin este în ziua lui liberă. Vă pot oferi doar un voucher de magazin sau să vă schimb prăjitorul cu un espressor vorbitor.",
            stageDirection: "Inocentă și binevoitoare",
            audioUrl: "/audio/s4/s4_l5_ro-RO.mp3"
          },
          "gl-ES": {
            text: "O contrasinal é «croqueta», pero hoxe o encargado libra. Só vos podo dar un vale da tenda ou cambiar a torradora por unha cafeteira que fala.",
            stageDirection: "Inocente e agarimosa",
            audioUrl: "/audio/s4/s4_l5_gl-ES.mp3"
          },
          "oc-FR": {
            text: "La senhal es «croqueta», mas uèi lo responsable es en repaus. Vos pòdi sonque donar un bon de crompa o escambiar la grasilhadeira per una cafetièra que parla.",
            stageDirection: "Inocenta e complasenta",
            audioUrl: "/audio/s4/s4_l5_oc-FR.mp3"
          },
          "de-DE": {
            text: "Das Passwort lautet «Krokette», aber der Filialleiter hat heute seinen freien Tag. Ich kann Ihnen nur einen Warengutschein ausstellen oder den Toaster gegen eine sprechende Kaffeemaschine tauschen.",
            stageDirection: "Treuherzig und entgegenkommend",
            audioUrl: "/audio/s4/s4_l5_de-DE.mp3"
          },
          "de-CH": {
            text: "S'Passwort isch «Krokette», aber de Filialleiter hät hüt frei. Ich cha Ihne nume en Guetschiin gäh oder de Toaster gäge e Kaffimaschine tusche, wo redt.",
            stageDirection: "Unschuldig und fründlich",
            audioUrl: "/audio/s4/s4_l5_de-CH.mp3"
          },
          "nl-NL": {
            text: "Het wachtwoord is 'kroket', maar de bedrijfsleider heeft vandaag zijn vrije dag. Ik kan u alleen een tegoedbon aanbieden of de broodrooster ruilen voor een sprekend koffiezetapparaat.",
            stageDirection: "Onschuldig en inschikkelijk",
            audioUrl: "/audio/s4/s4_l5_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Passordet er «krokett», men butikksjefen har fridag i dag. Jeg kan bare tilby dere en tilgodelapp eller bytte brødristeren mot en snakkende kaffetrakter.",
            stageDirection: "Uskyldig og imøtekommende",
            audioUrl: "/audio/s4/s4_l5_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Lösenordet är 'krokett', men chefen är ledig idag. Jag kan bara erbjuda ett tillgodokvitto eller byta brödrosten mot en talande kaffebryggare.",
            stageDirection: "Oskyldig och tillmötesgående",
            audioUrl: "/audio/s4/s4_l5_sv-SE.mp3"
          },
          "da-DK": {
            text: "Adgangskoden er 'kroket', men butikschefen har fridag i dag. Jeg kan kun give jer et tilgodebevis eller bytte brødristeren til en talende kaffemaskine.",
            stageDirection: "Uskyldig og hjælpsom",
            audioUrl: "/audio/s4/s4_l5_da-DK.mp3"
          },
          "ru-RU": {
            text: "Пароль — «крокет», но у управляющего сегодня выходной. Я могу предложить вам только подарочный сертификат или обменять тостер на говорящую кофеварку.",
            stageDirection: "Невинно и услужливо",
            audioUrl: "/audio/s4/s4_l5_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Пароль — «крокет», але в адміністратора сьогодні вихідний. Я можу лише видати вам подарунковий ваучер або обміняти тостер на кавоварку, що розмовляє.",
            stageDirection: "Невинно і лагідно",
            audioUrl: "/audio/s4/s4_l5_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Hasło to „krokiet”, ale kierownik ma dziś wolne. Mogę państwu zaoferować jedynie bon towarowy lub wymienić toster na mówiący ekspres do kawy.",
            stageDirection: "Niewinnie i spolegliwie",
            audioUrl: "/audio/s4/s4_l5_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Heslo zní „kroketa“, ale vedoucí má dnes volno. Mohu vám nabídnout pouze poukaz do obchodu, nebo vyměnit toustovač za mluvící kávovar.",
            stageDirection: "Nevinně a vstřícně",
            audioUrl: "/audio/s4/s4_l5_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Lozinka glasi «kroketi», ali voditelj trgovine danas ima slobodan dan. Mogu vam jedino izdati bon za kupnju ili zamijeniti toster za aparat za kavu koji priča.",
            stageDirection: "Nedužno i susretljivo",
            audioUrl: "/audio/s4/s4_l5_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Salasana on «kroketti», mutta myymäläpäälliköllä on tänään vapaapäivä. Voin ainoastaan antaa teille lahjakortin tai vaihtaa leivänpaahtimen puhuvaan kahvinkeittimeen.",
            stageDirection: "Viaton ja miellyttävä",
            audioUrl: "/audio/s4/s4_l5_fi-FI.mp3"
          },
          "hu-HU": {
            text: "A jelszó az, hogy «krokett», de az üzletvezetőnek ma van a szabadnapja. Csak egy vásárlási utalványt tudok adni, vagy kicserélhetem a pirítót egy beszélő kávéfőzőre.",
            stageDirection: "Ártatlanul és készségesen",
            audioUrl: "/audio/s4/s4_l5_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Pasahitza «kroqueta» da, baina gaur arduraduna jai du. Dendako txartel bat eman diezazuket soilik edo txigorgailua hitz egiten duen kafe-makina batekin aldatu.",
            stageDirection: "Inozoa eta adeitsua",
            audioUrl: "/audio/s4/s4_l5_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Parolamız «kroket», fakat müdür beyin bugün izin günü. Size yalnızca mağaza çeki verebilirim veya ekmek kızartma makinesini konuşan bir kahve makinesiyle değiştirebilirim.",
            stageDirection: "Masum ve sevecen bir tavırla",
            audioUrl: "/audio/s4/s4_l5_tr-TR.mp3"
          },
          "ja-JP": {
            text: "パスワードは「コロッケ」ですが、責任者は本日お休みをいただいております。商品券をお渡しするか、トースターをおしゃべりコーヒーメーカーと交換することしかできません。",
            stageDirection: "無邪気に申し訳なさそうに",
            audioUrl: "/audio/s4/s4_l5_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "密码是“可乐饼”，但店长今天轮休。我只能给二位一张店内代金券，或者把这台烤面包机换成一台会说话的咖啡机。",
            stageDirection: "天真而极其体贴",
            audioUrl: "/audio/s4/s4_l5_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "密碼係「炸肉餅」，但係經理今日放假喔。我最多只能夠換張購物券畀你哋，或者將部多士爐換做一部識講嘢嘅咖啡機。",
            stageDirection: "天真無邪好順從",
            audioUrl: "/audio/s4/s4_l5_yue-HK.mp3"
          },
          "ko-KR": {
            text: "암호는 '크로켓'이지만, 지점장님이 오늘 휴무이십니다. 매장 상품권을 드리거나 토스터를 말하는 커피 머신으로 교환해 드리는 방법뿐입니다.",
            stageDirection: "천진난만하고 친절하게",
            audioUrl: "/audio/s4/s4_l5_ko-KR.mp3"
          },
          "ar-XA": {
            text: "كلمة المرور هي «كروكيت»، ولكن المدير في إجازته اليوم. كل ما يمكنني تقديمه لكما هو قسيمة شراء أو استبدال المحمصة بآلة صنع قهوة متكلمة.",
            stageDirection: "ببراءة وعفوية",
            audioUrl: "/audio/s4/s4_l5_ar-XA.mp3"
          },
          "he-IL": {
            text: "הסיסמה היא «קרוקט», אבל המנהל ביום חופש היום. אני יכולה רק לתת לכם שובר זיכוי לחנות או להחליף את המצנם במכונת קפה מדברת.",
            stageDirection: "תמימה ומשתפת פעולה",
            audioUrl: "/audio/s4/s4_l5_he-IL.mp3"
          },
          "es-VE": {
            text: "La clave es «croqueta», pero hoy el encargado tiene el día libre. Solo les puedo dar una nota de crédito o cambiar la tostadora por una cafetera que habla.",
            stageDirection: "Con una sonrisa inocente",
            audioUrl: "/audio/s4/s4_l5_es-VE.mp3"
          },
          "es-CL": {
            text: "La clave es «croqueta», pero hoy el jefe de local tiene libre. Solo les puedo dar una nota de crédito o cambiar el tostador por una cafetera que habla.",
            stageDirection: "Tierna e inocente",
            audioUrl: "/audio/s4/s4_l5_es-CL.mp3"
          },
          "es-PE": {
            text: "La contraseña es «croqueta», pero hoy el administrador descansa. Solo les puedo dar una nota de crédito o cambiar la tostadora por una cafetera que habla.",
            stageDirection: "Amable y serena",
            audioUrl: "/audio/s4/s4_l5_es-PE.mp3"
          },
          "es-CU": {
            text: "La contraseña es «croqueta», pero hoy el administrador no está de guardia. Solo puedo darles un vale o cambiar la tostadora por una cafetera parlante.",
            stageDirection: "Tranquila y servicial",
            audioUrl: "/audio/s4/s4_l5_es-CU.mp3"
          },
          "es-GQ": {
            text: "La contraseña es «croqueta», pero hoy el responsable libra. Solo puedo darles un vale o cambiar la tostadora por una cafetera que habla.",
            stageDirection: "Ingenua y amable",
            audioUrl: "/audio/s4/s4_l5_es-GQ.mp3"
          },
          "en-US": {
            text: "The password is 'croquette', but the manager has the day off today. I can only offer you store credit or swap the toaster for a talking coffee maker.",
            stageDirection: "Innocent and accommodating",
            audioUrl: "/audio/s4/s4_l5_en-US.mp3"
          },
          "en-GB": {
            text: "The password is 'croquette', but the duty manager is off today. I can only offer you a store voucher or exchange the toaster for a talking coffee machine.",
            stageDirection: "Sweetly accommodating",
            audioUrl: "/audio/s4/s4_l5_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "The code word's 'croquette', but the boss is off shift the day. I can only gie ye a store voucher or swap the toaster for a coffee machine that chats away.",
            stageDirection: "Cheery and obliging",
            audioUrl: "/audio/s4/s4_l5_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "The password's 'croquette', but the manager's off fishin' today. All I can do is give y'all store credit or swap that toaster for a talkin' coffee maker.",
            stageDirection: "Sweet and plainspoken",
            audioUrl: "/audio/s4/s4_l5_en-US-south.mp3"
          },
          "en-IE": {
            text: "The password is 'croquette', but the supervisor has the day off today so he has. I can only give ye a store voucher or swap the toaster for a talking coffee maker.",
            stageDirection: "Innocent and pleasant",
            audioUrl: "/audio/s4/s4_l5_en-IE.mp3"
          },
          "en-AU": {
            text: "Password's 'croquette', mate, but the store manager's having a rostered day off. Can only give you store credit or swap the toaster for a talking coffee machine.",
            stageDirection: "Innocent and helpful",
            audioUrl: "/audio/s4/s4_l5_en-AU.mp3"
          },
          "en-NZ": {
            text: "The password's 'croquette', but the manager is on leave today. I can only give you store credit or swap the toaster for a talking coffee machine.",
            stageDirection: "Casual and accommodating",
            audioUrl: "/audio/s4/s4_l5_en-NZ.mp3"
          },
          "en-ZA": {
            text: "The password is 'croquette', but the manager is off today hey. I can only give you a store voucher or trade the toaster for a talking coffee machine.",
            stageDirection: "Friendly and obliging",
            audioUrl: "/audio/s4/s4_l5_en-ZA.mp3"
          },
          "en-NG": {
            text: "The password na 'croquette', but oga manager dey rest for house today. I fit only give una store voucher or change the toaster to coffee machine wey dey talk.",
            stageDirection: "Gentle and smiling",
            audioUrl: "/audio/s4/s4_l5_en-NG.mp3"
          },
          "en-IN": {
            text: "The password is 'croquette', but today manager sir is having weekly off. I can only give you one store credit note or exchange the toaster for a talking coffee machine.",
            stageDirection: "Innocently helpful",
            audioUrl: "/audio/s4/s4_l5_en-IN.mp3"
          },
          "fr-CD": {
            text: "Le mot de passe c'est « croquette », mais le chef est en congé aujourd'hui. Je peux seulement vous faire un bon de magasin ou échanger le grille-pain contre une cafetière parlante.",
            stageDirection: "Innocente et souriante",
            audioUrl: "/audio/s4/s4_l5_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Le mot de passe est « croquette », mais le responsable ne travaille pas aujourd'hui. Je peux seulement vous faire un bon ou vous donner une cafetière qui parle.",
            stageDirection: "Tranquille et aimable",
            audioUrl: "/audio/s4/s4_l5_fr-GA.mp3"
          },
          "pt-AO": {
            text: "A palavra-passe é «croquete», mas o chefe hoje está de folga. Só posso dar um vale da loja ou trocar a torradeira por uma cafeteira que fala.",
            stageDirection: "Calma e prestativa",
            audioUrl: "/audio/s4/s4_l5_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "A senha é «croquete», mas o gerente hoje está a descansar. Só posso dar um vale de compras ou trocar a torradeira por uma cafeteira que fala.",
            stageDirection: "Doce e ingénua",
            audioUrl: "/audio/s4/s4_l5_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Het paswoord is 'kroket', maar de chef is vandaag thuis. Ik kan u alleen een aankoopbon meegeven of die broodrooster omruilen voor een koffiezet die kan praten.",
            stageDirection: "Onschuldig en gedienstig",
            audioUrl: "/audio/s4/s4_l5_nl-BE.mp3"
          },
          "ar-SA": {
            text: "كلمة السر هي «كروكيت»، بس المدير اليوم في إجازته. أقدر أعطيكم قسيمة شراء للمحل أو أبدل الحماصة بمكينة قهوة تتكلم.",
            stageDirection: "على نياتها وبكل براءة",
            audioUrl: "/audio/s4/s4_l5_ar-SA.mp3"
          },
          "ar-EG": {
            text: "كلمة السر هي «كروكيت»، بس المدير واخد إجازة النهاردة. ممكن أديكم وصل رصيد للمحل أو أبدل التوستر بمكنة قهوة بتتكلم.",
            stageDirection: "بطيبة قلب وبريئة جداً",
            audioUrl: "/audio/s4/s4_l5_ar-EG.mp3"
          },
          "ar-MA": {
            text: "الكود السري هو «كروكيطة»، ولكن الشاف راه عندو نهار راحة اليوم. نقدر نعطيكم غير بون ديال المحل أو نبدلو الشواية بماكينة قهوة كاتدوي.",
            stageDirection: "على نيتها وضريفة",
            audioUrl: "/audio/s4/s4_l5_ar-MA.mp3"
          },
          "ar-JO": {
            text: "كلمة السر هي «كروكيت»، بس المدير اليوم معطل. بقدر أعطيكم كوبون للمحل أو أبدل المحمصة بماكينة قهوة بتحكي.",
            stageDirection: "ببراءة ولطف",
            audioUrl: "/audio/s4/s4_l5_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "الباسورد هو «كروكيت»، بس المدير اليوم مجاز. أكدر أنطيكم وصل مشتريات أو أبدل الحماصة بمكينة كهوة تحجي.",
            stageDirection: "على فطرتها وحبابة",
            audioUrl: "/audio/s4/s4_l5_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "密碼是「可樂餅」，但店長今天輪休。我只能給二位一張店內抵用券，或者把這台烤麵包機換成一台會說話的咖啡機。",
            stageDirection: "天真而極其體貼",
            audioUrl: "/audio/s4/s4_l5_zh-TW.mp3"
          },
          "hi-IN": {
            text: "पासवर्ड 'क्रोकेट' है, लेकिन आज मैनेजर साहब की छुट्टी है। मैं आपको केवल स्टोर वाउचर दे सकती हूँ या फिर इस टोस्टर के बदले बोलने वाली कॉफी मशीन दे सकती हूँ।",
            stageDirection: "मासूमियत से पूरी विनम्रता के साथ",
            audioUrl: "/audio/s4/s4_l5_hi-IN.mp3"
          },
          "ur-PK": {
            text: "پاس ورڈ 'کروکیٹ' ہے، لیکن آج منیجر صاحب چھٹی پر ہیں۔ میں آپ کو صرف اسٹور واؤچر دے سکتی ہوں یا اس ٹوسٹر کے بدلے بولنے والی کافی مشین پیش کر سکتی ہوں۔",
            stageDirection: "معصومیت اور انکساری سے",
            audioUrl: "/audio/s4/s4_l5_ur-PK.mp3"
          },
          "bn-IN": {
            text: "পাসওয়ার্ডটি হলো 'ক্রোকেট', তবে ম্যানেজারের আজ ছুটির দিন। আমি কেবল একটি স্টোর ভাউচার দিতে পারি অথবা টোস্টারটি বদলে কথা বলা কফি মেশিন দিতে পারি।",
            stageDirection: "সরল মুখে অমায়িকভাবে",
            audioUrl: "/audio/s4/s4_l5_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਪਾਸਵਰਡ 'ਕਰੋਕੇਟ' ਹੈ, ਪਰ ਅੱਜ ਮੈਨੇਜਰ ਸਾਹਿਬ ਦੀ ਛੁੱਟੀ ਹੈ। ਮੈਂ ਸਿਰਫ਼ ਸਟੋਰ ਦਾ ਵਾਊਚਰ ਦੇ ਸਕਦੀ ਹਾਂ ਜਾਂ ਇਸ ਟੋਸਟਰ ਦੇ ਬਦਲੇ ਬੋਲਣ ਵਾਲੀ ਕੌਫ਼ੀ ਮਸ਼ੀਨ ਦੇ ਸਕਦੀ ਹਾਂ।",
            stageDirection: "ਮਾਸੂਮੀਅਤ ਨਾਲ ਅਤੇ ਨਿਮਰਤਾ ਨਾਲ",
            audioUrl: "/audio/s4/s4_l5_pa-IN.mp3"
          },
          "gu-IN": {
            text: "પાસવર્ડ 'ક્રોકેટ' છે, પણ આજે મેનેજર સાહેબની રજા છે. હું તમને માત્ર સ્ટોર વાઉચર આપી શકું છું અથવા આ ટોસ્ટરના બદલામાં બોલતું કોફી મશીન આપી શકું છું.",
            stageDirection: "નિર્દોષ ભાવે અને નમ્રતાથી",
            audioUrl: "/audio/s4/s4_l5_gu-IN.mp3"
          },
          "mr-IN": {
            text: "पासवर्ड 'क्रोकेट' आहे, पण व्यवस्थाપकाची आज सुट्टी आहे. मी तुम्हाला फक्त स्टोअर व्हाउचर देऊ शकते किंवा टोस्टरच्या बदल्यात बोलणारे कॉफी मशीन देऊ शकते.",
            stageDirection: "निष्पाप आणि नम्रपणे",
            audioUrl: "/audio/s4/s4_l5_mr-IN.mp3"
          },
          "ta-IN": {
            text: "கடவுச்சொல் 'குரோக்கெட்', ஆனால் இன்று மேலாளர் விடுமுறையில் உள்ளார். என்னால் கடை வவுச்சர் மட்டுமே தர முடியும் அல்லது இந்த டோஸ்டருக்குப் பதிலாகப் பேசும் காபி இயந்திரத்தை மாற்றிக் கொடுக்க முடியும்.",
            stageDirection: "அப்பாவித்தனமாகவும் பணிவாகவும்",
            audioUrl: "/audio/s4/s4_l5_ta-IN.mp3"
          },
          "te-IN": {
            text: "పాస్‌వర్డ్ 'క్రోకెట్', కానీ మేనేజర్ గారు ఈరోజు సెలవులో ఉన్నారు. నేను మీకు స్టోర్ వోచర్ మాత్రమే ఇవ్వగలను లేదా ఈ టోస్టర్‌కు బదులుగా మాట్లాడే కాఫీ మెషీన్‌ను మార్చి ఇవ్వగలను.",
            stageDirection: "అమాయకంగా మరియు సహకరిస్తూ",
            audioUrl: "/audio/s4/s4_l5_te-IN.mp3"
          },
          "kn-IN": {
            text: "ಪಾಸ್‌ವರ್ಡ್ 'ಕ್ರೋಕೆಟ್', ಆದರೆ ವ್ಯವಸ್ಥಾಪಕರಿಗೆ ಇಂದು ರಜೆಯಿದೆ. ನಾನು ನಿಮಗೆ ಕೇವಲ ಅಂಗಡಿ ವೋಚರ್ ನೀಡಬಲ್ಲೆ ಅಥವಾ ಈ ಟೋಸ್ಟರ್ ಬದಲಿಗೆ ಮಾತನಾಡುವ ಕಾಫಿ ಯಂತ್ರವನ್ನು ನೀಡಬಲ್ಲೆ.",
            stageDirection: "ಮುಗ್ಧವಾಗಿ ಮತ್ತು ಸಹಕಾರ ಮನೋಭಾವದಿಂದ",
            audioUrl: "/audio/s4/s4_l5_kn-IN.mp3"
          },
          "ml-IN": {
            text: "പാസ്‌വേഡ് 'ക്രോക്കറ്റ്' എന്നാണ്, എന്നാൽ മാനേജർക്ക് ഇന്ന് അവധിയാണ്. എനിക്ക് നിങ്ങൾക്ക് സ്റ്റോർ വൗച്ചർ നൽകാനോ അല്ലെങ്കിൽ ടോസ്റ്ററിന് പകരം സംസാരിക്കുന്ന കോഫി മെഷീൻ നൽകാനോ മാത്രമേ കഴിയൂ.",
            stageDirection: "നിഷ്കളങ്കമായും വിനയത്തോടെയും",
            audioUrl: "/audio/s4/s4_l5_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Mật khẩu là 'bánh croquette', nhưng hôm nay người quản lý được nghỉ phép. Tôi chỉ có thể gửi tặng quý khách phiếu mua hàng hoặc đổi cái máy nướng này lấy máy pha cà phê biết nói.",
            stageDirection: "Ngây thơ và sẵn lòng giúp",
            audioUrl: "/audio/s4/s4_l5_vi-VN.mp3"
          },
          "th-TH": {
            text: "รหัสผ่านคือ 'โครเกต์' ค่ะ แต่ผู้จัดการหยุดวันนี้ ฉันทำได้แค่ให้คูปองแทนเงินสดของร้าน หรือเปลี่ยนเครื่องปิ้งขนมปังนี้เป็นเครื่องชงกาแฟที่พูดได้ค่ะ",
            stageDirection: "ไร้เดียงสาและพร้อมบริการ",
            audioUrl: "/audio/s4/s4_l5_th-TH.mp3"
          },
          "id-ID": {
            text: "Kata sandinya adalah 'kroket', tapi manajer sedang libur hari ini. Saya hanya bisa memberi Anda voucher toko atau menukar pemanggang roti ini dengan mesin kopi yang bisa berbicara.",
            stageDirection: "Polos dan ramah",
            audioUrl: "/audio/s4/s4_l5_id-ID.mp3"
          },
          "ms-MY": {
            text: "Kata laluannya ialah 'kroket', tetapi pengurus sedang bercuti hari ini. Saya hanya boleh memberi anda baucar kedai atau menukar pembakar roti ini dengan mesin kopi yang boleh bercakap.",
            stageDirection: "Lurus dan mesra",
            audioUrl: "/audio/s4/s4_l5_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Nenosiri ni 'croquette', lakini meneja ana siku ya mapumziko leo. Naweza kuwapa vocha ya duka au kubadilisha kibaniko hiki na mashine ya kahawa inayoongea.",
            stageDirection: "Mpole na mwenye unyenyekevu",
            audioUrl: "/audio/s4/s4_l5_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Pe ñe'ẽñemi ha'e «croqueta», ha katu ko árape pe mburuvicha opytu'u. Ikatúnte ame'ẽ peẽme kuatia virurã térã amoambue ko tostadora peteĩ kafe apoha oñe'ẽvare.",
            stageDirection: "Iñañag̃ua'ỹva ha opy'aporãva",
            audioUrl: "/audio/s4/s4_l5_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Pakasqa rimayqa «croqueta» nisqam, ichaqa kamachiqmi kunan p'unchaw samachkan. Qullqi rantina qillqallatam quykikichikman utaq kay tanta kankanata huk rimaq kafe ruwanawan tikraykuni.",
            stageDirection: "Llamp'u sonqo llumpay sumaq",
            audioUrl: "/audio/s4/s4_l5_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Uka p'iqi chimpuxa «croqueta» satawa, ukampis jichhürunakanx p'iqinchirix samaraskiwa. Nayax mä bono alañatakikiw chursmapxañani jan ukax aka kankarxa café lurir arst'iri maquinaruw jaqurpayta.",
            stageDirection: "Suma llamp'u chuymampi",
            audioUrl: "/audio/s4/s4_l5_ay-BO.mp3"
          },
          "nah-MX": {
            text: "In tlaixpahuiliztli ca «croqueta», tel in tlayecanqui axcan motlalia cececca. Zan hueliti nimechmaca ce tlatquicamatiliztli nozo niquipatlas inin tlaxcalchijchihualoni ic ce caféchijchihualoni tlen tlatohua.",
            stageDirection: "Cenca yecnemiliceh",
            audioUrl: "/audio/s4/s4_l5_nah-MX.mp3"
          },
          "nv-US": {
            text: "Bízhiʼ éí 'croquette' wolyé, ndi naatʼáanii díí jį́ doo naalnish da. Tʼáá azeeʼ bą́ą́h haʼníłtsóóz bee chʼiyáán nahaniihígi átʼéego bee nihiká adeeshwoł, éí doodago gah bee gohwééh álnéhígíí yáłtiʼii nihidiyootłoh.",
            stageDirection: "Doo áhátʼį́į́góó hazhóʼó yáłtiʼ",
            audioUrl: "/audio/s4/s4_l5_nv-US.mp3"
          }
        }
      },
      {
        id: "s4_l6",
        characterId: "clara",
        defaultStageDirection: "Frotándose las sienes con resignación cósmica",
        expression: "defeated",
        translations: {
          "fr-CH": {
            text: "Donnez-moi la machine à café parlante, Bea. Elle aura certainement des propos plus sensés que ce que je dois écouter à la maison.",
            stageDirection: "Soupirant de fatigue",
            audioUrl: "/audio/s4/s4_l6_fr-CH.mp3"
          },
          "fr-BE": {
            text: "Donnez-moi la cafetière qui parle, Bea. Elle aura sans doute des conversations plus sensées que les bêtises que j'entends chez moi.",
            stageDirection: "Soupirant, au bout du rouleau",
            audioUrl: "/audio/s4/s4_l6_fr-BE.mp3"
          },
          "es-ES": {
            text: "Deme la cafetera parlante, Bea. Seguro que tiene conversaciones más sensatas que las que escucho en casa.",
            stageDirection: "Suspirando rendida",
            audioUrl: "/audio/s4/s4_l6_es-ES.mp3"
          },
          "el-GR": {
            text: "Δώστε μου την καφετιέρα που μιλάει, Μπέα. Σίγουρα θα κάνει πιο λογικές συζητήσεις από αυτές που ακούω στο σπίτι.",
            stageDirection: "Αναστενάζοντας απελπισμένη",
            audioUrl: "/audio/s4/s4_l6_el-GR.mp3"
          },
          "es-MX": {
            text: "Deme la cafetera que habla, Bea. Seguro se echa pláticas más cuerdas que las que tengo que aguantar en la casa.",
            stageDirection: "Suspirando totalmente derrotada",
            audioUrl: "/audio/s4/s4_l6_es-MX.mp3"
          },
          "es-AR": {
            text: "Dame la cafetera que habla, Bea. Seguro que tiene conversaciones con más sentido que las que tengo que fumarme en casa.",
            stageDirection: "Suspirando entregada",
            audioUrl: "/audio/s4/s4_l6_es-AR.mp3"
          },
          "es-DO": {
            text: "Deme la cafetera que habla, Bea. Seguro que habla cosas con más sentido que las que yo escucho en mi casa.",
            stageDirection: "Suspirando con resignación",
            audioUrl: "/audio/s4/s4_l6_es-DO.mp3"
          },
          "es-PR": {
            text: "Dame la cafetera que habla, Bea. De seguro tiene conversaciones con más sentido que las que me toca escuchar en casa.",
            stageDirection: "Suspirando rendida",
            audioUrl: "/audio/s4/s4_l6_es-PR.mp3"
          },
          "es-CO": {
            text: "Deme la cafetera que habla, Bea. Seguro tiene charlas con más sentido que las que me toca escuchar en la casa.",
            stageDirection: "Suspirando resignada",
            audioUrl: "/audio/s4/s4_l6_es-CO.mp3"
          },
          "fr-FR": {
            text: "Donnez-moi la cafetière parlante, Bea. Elle aura sûrement des conversations plus sensées que celles que j'entends à la maison.",
            stageDirection: "Soupirant, totalement résignée",
            audioUrl: "/audio/s4/s4_l6_fr-FR.mp3"
          },
          "fr-CA": {
            text: "Donnez-moi la cafetière parlante, Bea. A' va sûrement dire des affaires plus intelligentes que l'radotage que j'entends chez nous.",
            stageDirection: "Expirant d'découragement",
            audioUrl: "/audio/s4/s4_l6_fr-CA.mp3"
          },
          "fr-CI": {
            text: "Donne-moi la cafetière qui parle là, Bea. C'est sûr qu'elle va dire des choses avec plus de tête que ce que j'entends à la maison.",
            stageDirection: "Soupirant d'un air vaincu",
            audioUrl: "/audio/s4/s4_l6_fr-CI.mp3"
          },
          "pt-BR": {
            text: "Me dá a cafeteira que fala, Bea. Tenho certeza de que ela tem conversas mais sensatas do que as loucuras que eu ouço em casa.",
            stageDirection: "Suspirando derrotada",
            audioUrl: "/audio/s4/s4_l6_pt-BR.mp3"
          },
          "pt-PT": {
            text: "Dê-me a máquina de café falante, Bea. Com certeza terá conversas mais sensatas do que as parvoíces que ouço em casa.",
            stageDirection: "Suspirando rendida",
            audioUrl: "/audio/s4/s4_l6_pt-PT.mp3"
          },
          "it-IT": {
            text: "Mi dia la macchina del caffè parlante, Bea. Di sicuro farà discorsi più sensati di quelli che sono costretta ad ascoltare a casa.",
            stageDirection: "Sospirando sconfitta",
            audioUrl: "/audio/s4/s4_l6_it-IT.mp3"
          },
          "ca-ES": {
            text: "Dóna'm la cafetera que parla, Bea. Segur que té converses amb més sentit que les que sento a casa.",
            stageDirection: "Sospirant resignada",
            audioUrl: "/audio/s4/s4_l6_ca-ES.mp3"
          },
          "ro-RO": {
            text: "Dați-mi espressorul vorbitor, Bea. Cu siguranță poartă conversații mai înțelepte decât aberațiile pe care le aud acasă.",
            stageDirection: "Oftând resemnată",
            audioUrl: "/audio/s4/s4_l6_ro-RO.mp3"
          },
          "gl-ES": {
            text: "Deme a cafeteira que fala, Bea. Seguro que ten conversas máis asisadas que as que teño que aturar na casa.",
            stageDirection: "Suspirando rendida",
            audioUrl: "/audio/s4/s4_l6_gl-ES.mp3"
          },
          "oc-FR": {
            text: "Donatz-me la cafetièra que parla, Bea. Segur qu'a de convèrsas mai sensadas que çò qu'ausissi a l'ostal.",
            stageDirection: "Sospirant d'abandon",
            audioUrl: "/audio/s4/s4_l6_oc-FR.mp3"
          },
          "de-DE": {
            text: "Geben Sie mir die sprechende Kaffeemaschine, Bea. Die führt mit Sicherheit vernünftigere Gespräche als das Zeug, das ich mir zu Hause anhören muss.",
            stageDirection: "Tief und geschlagen seufzend",
            audioUrl: "/audio/s4/s4_l6_de-DE.mp3"
          },
          "de-CH": {
            text: "Gänd Si mir die Kaffimaschine wo redt, Bea. Die hät sicher gschideri Gspröch druff als das Züg, wo ich dihei mues aalose.",
            stageDirection: "Tüüf und ergäh seufzend",
            audioUrl: "/audio/s4/s4_l6_de-CH.mp3"
          },
          "nl-NL": {
            text: "Geef me dat sprekende koffiezetapparaat maar, Bea. Die voert vast zinnigere gesprekken dan de onzin die ik thuis moet aanhoren.",
            stageDirection: "Diep en verslagen zuchtend",
            audioUrl: "/audio/s4/s4_l6_nl-NL.mp3"
          },
          "nb-NO": {
            text: "Gi meg den snakkende kaffetrakteren, Bea. Den fører helt sikkert mer fornuftige samtaler enn det sprøytet jeg hører hjemme.",
            stageDirection: "Sukker fullstendig oppgitt",
            audioUrl: "/audio/s4/s4_l6_nb-NO.mp3"
          },
          "sv-SE": {
            text: "Ge mig den talande kaffebryggaren, Bea. Den för garanterat vettigare samtal än det svammel jag måste lyssna på hemma.",
            stageDirection: "Suckar uppgivet",
            audioUrl: "/audio/s4/s4_l6_sv-SE.mp3"
          },
          "da-DK": {
            text: "Giv mig den talende kaffemaskine, Bea. Den fører med garanti mere fornuftige samtaler end det vås, jeg hører på derhjemme.",
            stageDirection: "Dybt og opgivende sukkende",
            audioUrl: "/audio/s4/s4_l6_da-DK.mp3"
          },
          "ru-RU": {
            text: "Дайте мне говорящую кофеварку, Беа. Уверена, её речи куда более здравые, чем то, что я выслушиваю дома.",
            stageDirection: "Вздыхает в полном бессилии",
            audioUrl: "/audio/s4/s4_l6_ru-RU.mp3"
          },
          "uk-UA": {
            text: "Дайте мені кавоварку, що говорить, Беа. Переконана, що в неї будуть значно розумніші розмови, ніж те, що я чую вдома.",
            stageDirection: "Зітхає з повною безнадією",
            audioUrl: "/audio/s4/s4_l6_uk-UA.mp3"
          },
          "pl-PL": {
            text: "Niech pani da ten mówiący ekspres, Bea. Na pewno prowadzi rozsądniejsze dyskusje niż te androny, których muszę słuchać w domu.",
            stageDirection: "Wzdychając z rezygnacją",
            audioUrl: "/audio/s4/s4_l6_pl-PL.mp3"
          },
          "cs-CZ": {
            text: "Dejte mi ten mluvící kávovar, Beo. Určitě vede rozumnější rozhovory než ty nesmysly, které musím poslouchat doma.",
            stageDirection: "Odevzdaně vzdychá",
            audioUrl: "/audio/s4/s4_l6_cs-CZ.mp3"
          },
          "hr-HR": {
            text: "Dajte mi aparat za kavu koji priča, Bea. Sigurna sam da vodi razumnije razgovore od budalaština koje moram slušati kod kuće.",
            stageDirection: "Uzdah potpunog poraza",
            audioUrl: "/audio/s4/s4_l6_hr-HR.mp3"
          },
          "fi-FI": {
            text: "Antakaa se puhuva kahvinkeitin, Bea. Se käy taatusti järkevämpiä keskusteluja kuin ne houreet, joita joudun kuuntelemaan kotona.",
            stageDirection: "Huokaisee alistuneena",
            audioUrl: "/audio/s4/s4_l6_fi-FI.mp3"
          },
          "hu-HU": {
            text: "Adja csak ide a beszélő kávéfőzőt, Bea! Garantáltan értelmesebb beszélgetéseket folytat majd, mint amilyen zagyvaságokat otthon kell hallgatnom.",
            stageDirection: "Mélyen, megsemmisülten sóhajtva",
            audioUrl: "/audio/s4/s4_l6_hu-HU.mp3"
          },
          "eu-ES": {
            text: "Emadazu hitz egiten duen kafe-makina, Bea. Seguru etxean entzun behar ditudanak baino elkarrizketa zentzudunagoak dituela.",
            stageDirection: "Etsita hasperen eginez",
            audioUrl: "/audio/s4/s4_l6_eu-ES.mp3"
          },
          "tr-TR": {
            text: "Siz bana konuşan kahve makinesini verin, Bea. Evde dinlemek zorunda kaldığım saçmalıklardan çok daha mantıklı sohbetler edeceğine kalıbımı basarım.",
            stageDirection: "Yenilmişlikle derin bir iç çekerek",
            audioUrl: "/audio/s4/s4_l6_tr-TR.mp3"
          },
          "ja-JP": {
            text: "そのおしゃべりコーヒーメーカーをください、ベアさん。家で聞かされる世迷言より、よっぽどまともな会話ができるはずだから。",
            stageDirection: "完全に降伏してため息をつく",
            audioUrl: "/audio/s4/s4_l6_ja-JP.mp3"
          },
          "cmn-CN": {
            text: "把那台会说话的咖啡机给我吧，比阿。我确信它能聊出比我在家里听到的更有理智的对话。",
            stageDirection: "彻底认输地长叹一声",
            audioUrl: "/audio/s4/s4_l6_cmn-CN.mp3"
          },
          "yue-HK": {
            text: "畀部識講嘢嘅咖啡機我啦，Bea。我肯定佢講嘅嘢，點都正常過我喺屋企聽緊嗰啲發神經嘅廢話。",
            stageDirection: "好灰噉深深嘆咗口氣",
            audioUrl: "/audio/s4/s4_l6_yue-HK.mp3"
          },
          "ko-KR": {
            text: "그 말하는 커피 머신으로 주세요, 베아 씨. 집에서 듣는 헛소리들보단 훨씬 더 상식적인 대화가 통할 게 분명하니까요.",
            stageDirection: "완전히 체념한 듯 한숨을 쉬며",
            audioUrl: "/audio/s4/s4_l6_ko-KR.mp3"
          },
          "ar-XA": {
            text: "أعطني آلة القهوة المتكلمة يا بيا. أنا واثقة من أن أحاديثها ستكون أكثر عقلانية بكثير من الهراء الذي أسمعه في المنزل.",
            stageDirection: "تتنهد باستسلام تام",
            audioUrl: "/audio/s4/s4_l6_ar-XA.mp3"
          },
          "he-IL": {
            text: "תני לי את מכונת הקפה המדברת, ביאה. אין לי ספק שהשיחות איתה יהיו הרבה יותר הגיוניות ממה שאני נאלצת לשמוע בבית.",
            stageDirection: "נאנחת בהשלמה גמורה",
            audioUrl: "/audio/s4/s4_l6_he-IL.mp3"
          },
          "es-VE": {
            text: "Deme la cafetera que habla, Bea. De seguro tiene conversaciones más sensatas que las que me calo en la casa.",
            stageDirection: "Suspirando rendida",
            audioUrl: "/audio/s4/s4_l6_es-VE.mp3"
          },
          "es-CL": {
            text: "Deme la cafetera que habla, Bea. De más que tiene conversaciones más cuerdas que las tonteras que escucho en mi casa.",
            stageDirection: "Suspirando con resignación total",
            audioUrl: "/audio/s4/s4_l6_es-CL.mp3"
          },
          "es-PE": {
            text: "Deme la cafetera que habla, Bea. Seguro tiene conversaciones más cuerdas que las que escucho en mi casa.",
            stageDirection: "Suspirando resignada",
            audioUrl: "/audio/s4/s4_l6_es-PE.mp3"
          },
          "es-CU": {
            text: "Dame la cafetera parlante, Bea. Seguro que tiene conversaciones con más cabeza que las que oigo en mi casa.",
            stageDirection: "Suspirando rendida",
            audioUrl: "/audio/s4/s4_l6_es-CU.mp3"
          },
          "es-GQ": {
            text: "Deme la cafetera parlante, Bea. Seguro que mantiene conversaciones más razonables que las que soporto en casa.",
            stageDirection: "Suspirando con resignación",
            audioUrl: "/audio/s4/s4_l6_es-GQ.mp3"
          },
          "en-US": {
            text: "Give me the talking coffee maker, Bea. I'm sure it has more sensible conversations than the ones I have to listen to at home.",
            stageDirection: "Sighing in complete defeat",
            audioUrl: "/audio/s4/s4_l6_en-US.mp3"
          },
          "en-GB": {
            text: "Give me the talking coffee machine, Bea. I am quite sure it engages in far more sensible conversations than what I hear at home.",
            stageDirection: "Sighing in utter resignation",
            audioUrl: "/audio/s4/s4_l6_en-GB.mp3"
          },
          "en-GB-SCT": {
            text: "Gie's the chattin' coffee machine, Bea. Bound tae hae far mair sense than the pure drivel I hae tae listen tae at hame.",
            stageDirection: "Deep defeatist sigh",
            audioUrl: "/audio/s4/s4_l6_en-GB-SCT.mp3"
          },
          "en-US-south": {
            text: "Hand over that talkin' coffee maker, Bea. Lord knows it's bound to make more sense than what I gotta listen to back home.",
            stageDirection: "Sighing, clean out of patience",
            audioUrl: "/audio/s4/s4_l6_en-US-south.mp3"
          },
          "en-IE": {
            text: "Hand over the talking coffee machine, Bea. Sure it's bound to have more sense in it than the carry-on I have to listen to at home.",
            stageDirection: "Sighing in utter exhaustion",
            audioUrl: "/audio/s4/s4_l6_en-IE.mp3"
          },
          "en-AU": {
            text: "Give me the talking coffee machine, Bea. Bet it talks way more sense than the absolute rubbish I hear at home.",
            stageDirection: "Deep resigned sigh",
            audioUrl: "/audio/s4/s4_l6_en-AU.mp3"
          },
          "en-NZ": {
            text: "Just give me the talking coffee machine, Bea. Bet it makes way more sense than the stuff I listen to at home.",
            stageDirection: "Sighing with weary acceptance",
            audioUrl: "/audio/s4/s4_l6_en-NZ.mp3"
          },
          "en-ZA": {
            text: "Just give me the talking coffee machine, Bea. Sure it talks far more sense than what I have to put up with at home.",
            stageDirection: "Sighing defeatedly",
            audioUrl: "/audio/s4/s4_l6_en-ZA.mp3"
          },
          "en-NG": {
            text: "Give me that talking coffee machine, Bea. I sure say e go talk sense pass the kind nonsense wey I dey hear for house.",
            stageDirection: "Sighing tired die",
            audioUrl: "/audio/s4/s4_l6_en-NG.mp3"
          },
          "en-IN": {
            text: "Please give me that talking coffee machine only, Bea. Surely it will make much more sense than whatever nonsense I am hearing at home.",
            stageDirection: "Sighing in total surrender",
            audioUrl: "/audio/s4/s4_l6_en-IN.mp3"
          },
          "fr-CD": {
            text: "Donnez-moi la cafetière parlante, Bea. Elle aura sûrement des paroles plus sages que ce que je subis à la maison.",
            stageDirection: "Soupirant d'abandon",
            audioUrl: "/audio/s4/s4_l6_fr-CD.mp3"
          },
          "fr-GA": {
            text: "Donnez-moi la cafetière qui parle, Bea. Elle aura sans doute plus de bon sens que les palabres que j'écoute chez moi.",
            stageDirection: "Soupirant, abattue",
            audioUrl: "/audio/s4/s4_l6_fr-GA.mp3"
          },
          "pt-AO": {
            text: "Dá-me a cafeteira que fala, Bea. Com certeza vai falar coisas com mais sentido do que as maluquices que aturo em casa.",
            stageDirection: "Suspirando sem forças",
            audioUrl: "/audio/s4/s4_l6_pt-AO.mp3"
          },
          "pt-MZ": {
            text: "Dê-me a cafeteira falante, Bea. De certeza que tem conversas com mais cabeça do que o que ouço em casa.",
            stageDirection: "Suspiro de cansaço total",
            audioUrl: "/audio/s4/s4_l6_pt-MZ.mp3"
          },
          "nl-BE": {
            text: "Geeft mij die pratende koffiezet maar, Bea. Die zal vast en zeker zinnigere praat verkopen dan wat ik thuis moet aanhoren.",
            stageDirection: "Zuchtend van pure overgave",
            audioUrl: "/audio/s4/s4_l6_nl-BE.mp3"
          },
          "ar-SA": {
            text: "عطيني مكينة القهوة اللي تتكلم يا بيا. أكيد كلامها فيه عقل أكثر من الخرابيط اللي أسمعها بالبيت.",
            stageDirection: "تتنهد بقلة حيلة",
            audioUrl: "/audio/s4/s4_l6_ar-SA.mp3"
          },
          "ar-EG": {
            text: "هاتي مكنة القهوة اللي بتتكلم دي يا بيا. أكيد حواراتها هتبقى أعقل بكتير من الكلام الفاضي اللي باسمعه في البيت.",
            stageDirection: "بتتنهد بيأس واستسلام",
            audioUrl: "/audio/s4/s4_l6_ar-EG.mp3"
          },
          "ar-MA": {
            text: "عطيني ديك ماكينة القهوة اللي كاتهضر أ بيا. متأكدة غادي تدوي حسن وبحكمة كثر من التخربيق اللي كانسمع فالدار.",
            stageDirection: "كاتنهد بقلة حيلة",
            audioUrl: "/audio/s4/s4_l6_ar-MA.mp3"
          },
          "ar-JO": {
            text: "أعطيني ماكينة القهوة اللي بتحكي يا بيا. أكيد رح يكون حكيها بعقل أكتر من الحكي الفاضي اللي بسمعه بالدار.",
            stageDirection: "بتتنهد بيأس",
            audioUrl: "/audio/s4/s4_l6_ar-JO.mp3"
          },
          "ar-IQ": {
            text: "انطيني مكينة الكهوة اللي تحجي يا بيا. متأكدة كلامها بي عقل أكثر من الدوخة اللي أسمعها بالبيت.",
            stageDirection: "تتنهد باستسلام",
            audioUrl: "/audio/s4/s4_l6_ar-IQ.mp3"
          },
          "zh-TW": {
            text: "把那台會說話的咖啡機給我吧，比阿。我確信它能聊出比我在家裡聽到的更有理智的對話。",
            stageDirection: "徹底認輸地長嘆一聲",
            audioUrl: "/audio/s4/s4_l6_zh-TW.mp3"
          },
          "hi-IN": {
            text: "मुझे वह बोलने वाली कॉफी मशीन ही दे दीजिए, बी। मुझे पक्का विश्वास है कि वह उन बातों से कहीं अधिक समझदारी भरी बातें करेगी जो मुझे घर पर सुननी पड़ती हैं।",
            stageDirection: "पूरी तरह हार मानकर गहरी सांस लेते हुए",
            audioUrl: "/audio/s4/s4_l6_hi-IN.mp3"
          },
          "ur-PK": {
            text: "مجھے وہی بولنے والی کافی مشین دے دیجیے، بیا۔ مجھے پورا یقین ہے کہ وہ ان بے تکے قصوں سے زیادہ عقل کی باتیں کرے گی جو مجھے گھر پر سننی پڑتی ہیں۔",
            stageDirection: "مکمل ہتھیار ڈالتے ہوئے گہری سانس لیتی ہے",
            audioUrl: "/audio/s4/s4_l6_ur-PK.mp3"
          },
          "bn-IN": {
            text: "কথা বলা কফি মেশিনটাই আমাকে দিন, বিয়া। আমি নিশ্চিত যে বাড়িতে আমাকে যে বকবকানি শুনতে হয়, তার চেয়ে এই মেশিন অনেক বেশি কাজের কথা বলবে।",
            stageDirection: "সম্পূর্ণ হাল ছেড়ে দীর্ঘশ্বাস ফেলে",
            audioUrl: "/audio/s4/s4_l6_bn-IN.mp3"
          },
          "pa-IN": {
            text: "ਮੈਨੂੰ ਉਹ ਬੋਲਣ ਵਾਲੀ ਕੌਫ਼ੀ ਮਸ਼ੀਨ ਹੀ ਦੇ ਦਿਓ, ਬੀਆ। ਮੈਨੂੰ ਪੂਰਾ ਯਕੀਨ ਹੈ ਕਿ ਉਹ ਘਰ ਵਿੱਚ ਸੁਣਨ ਨੂੰ ਮਿਲਦੀਆਂ ਫ਼ਜ਼ੂਲ ਗੱਲਾਂ ਨਾਲੋਂ ਕਿਤੇ ਵੱਧ ਅਕਲਮੰਦੀ ਵਾਲੀਆਂ ਗੱਲਾਂ ਕਰੇਗੀ।",
            stageDirection: "ਪੂਰੀ ਤਰ੍ਹਾਂ ਹਾਰ ਮੰਨ ਕੇ ਹਉਕਾ ਭਰਦੀ ਹੈ",
            audioUrl: "/audio/s4/s4_l6_pa-IN.mp3"
          },
          "gu-IN": {
            text: "મને એ બોલતું કોફી મશીન જ આપી દો, બીયા. મને ખાતરી છે કે ઘરમાં જે બકવાસ મારે સાંભળવી પડે છે તેના કરતાં તો આ વધુ સમજદારીભરી વાતો કરશે.",
            stageDirection: "સંપૂર્ણ હાર માનીને ઊંડો નિસાસો નાખતાં",
            audioUrl: "/audio/s4/s4_l6_gu-IN.mp3"
          },
          "mr-IN": {
            text: "मला ते बोलणारे कॉफी मशीनच द्या, बीया. मला खात्री आहे की घरात मला ज्या निरर्थक गोष्टी ऐकाव्या लागतात त्यापेक्षा ते नक्कीच शहाणपणाच्या गप्पा मारेल.",
            stageDirection: "पूर्णपणे हार मानून सुस्कारा सोडत",
            audioUrl: "/audio/s4/s4_l6_mr-IN.mp3"
          },
          "ta-IN": {
            text: "அந்தப் பேசும் காபி இயந்திரத்தையே என்னிடம் கொடுங்கள், பீயா. நான் வீட்டில் கேட்க வேண்டிய உளறல்களை விட அது மிகவும் விவேகமாகப் பேசும் என்று நான் நம்புகிறேன்.",
            stageDirection: "முழுமையாகத் தோல்வியுற்றுப் பெருமூச்சு விடுகிறார்",
            audioUrl: "/audio/s4/s4_l6_ta-IN.mp3"
          },
          "te-IN": {
            text: "నాకు ఆ మాట్లాడే కాఫీ మెషీన్‌నే ఇచ్చేయండి, బియా. ఇంట్లో నేను వినాల్సిన పిచ్చి మాటల కంటే అది చాలా వివేకవంతమైన సంభాషణలు చేస్తుందని నాకు ఖచ్చితంగా తెలుసు.",
            stageDirection: "పూర్తిగా ఓడిపోయినట్లు నిట్టూరుస్తూ",
            audioUrl: "/audio/s4/s4_l6_te-IN.mp3"
          },
          "kn-IN": {
            text: "ನನಗೆ ಆ ಮಾತನಾಡುವ ಕಾಫಿ ಯಂತ್ರವನ್ನೇ ಕೊಟ್ಟುಬಿಡಿ, ಬಿಯಾ. ಮನೆಯಲ್ಲಿ ನಾನು ಕೇಳಬೇಕಾದ ಹುಚ್ಚು ಮಾತುಗಳಿಗಿಂತ ಅದು ಹೆಚ್ಚು ಜಾಣ್ಮೆಯ ಮಾತುಗಳನ್ನಾಡುತ್ತದೆ ಎಂದು ನನಗೆ ಖಚಿತವಿದೆ.",
            stageDirection: "ಸಂಪೂರ್ಣವಾಗಿ ಸೋತು ನಿಟ್ಟುಸಿರು ಬಿಡುತ್ತಾ",
            audioUrl: "/audio/s4/s4_l6_kn-IN.mp3"
          },
          "ml-IN": {
            text: "എനിക്ക് ആ സംസാരിക്കുന്ന കോഫി മെഷീൻ തന്നെ തരൂ, ബിയാ. വീട്ടിൽ ഞാൻ കേൾക്കേണ്ടി വരുന്ന വിടുവായത്തങ്ങളേക്കാൾ കൂടുതൽ വിവേകത്തോടെ അത് സംസാരിക്കുമെന്ന് എനിക്കുറപ്പുണ്ട്.",
            stageDirection: "പൂർണ്ണമായും കീഴടങ്ങി നെടുവീർപ്പിടുന്നു",
            audioUrl: "/audio/s4/s4_l6_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Đưa cho tôi cái máy pha cà phê biết nói đó đi, Bea. Chắc chắn nó sẽ trò chuyện có lý trí hơn những lời vớ vẩn tôi phải nghe ở nhà.",
            stageDirection: "Thở dài trong sự buông xuôi hoàn toàn",
            audioUrl: "/audio/s4/s4_l6_vi-VN.mp3"
          },
          "th-TH": {
            text: "เอาเครื่องชงกาแฟที่พูดได้เครื่องนั้นมาให้ฉันเถอะค่ะ เบีย ฉันมั่นใจว่ามันคงคุยรู้เรื่องกว่าเรื่องไร้สาระที่ฉันต้องทนฟังที่บ้านแน่ๆ",
            stageDirection: "ถอนหายใจอย่างยอมจำนน",
            audioUrl: "/audio/s4/s4_l6_th-TH.mp3"
          },
          "id-ID": {
            text: "Berikan saja mesin kopi yang bisa berbicara itu, Bea. Saya yakin obrolannya jauh lebih masuk akal daripada omong kosong yang harus saya dengar di rumah.",
            stageDirection: "Menghela napas pasrah sepenuhnya",
            audioUrl: "/audio/s4/s4_l6_id-ID.mp3"
          },
          "ms-MY": {
            text: "Berikan saya mesin kopi yang boleh bercakap itu, Bea. Saya yakin perbualannya lebih waras daripada merepek yang saya kena dengar dekat rumah.",
            stageDirection: "Mengeluh pasrah sepenuhnya",
            audioUrl: "/audio/s4/s4_l6_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Nipe hiyo mashine ya kahawa inayoongea, Bea. Nina hakika inazungumza mambo ya maana zaidi kuliko upuuzi ninaosikiliza nyumbani.",
            stageDirection: "Akipumua kwa kushindwa kabisa",
            audioUrl: "/audio/s4/s4_l6_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Eme'ẽ katu chéve pe kafe apoha oñe'ẽva, Bea. Ajerovia he'itaha mba'e hekopetéva hetave umi tavyrai ahendúvagui che rógape.",
            stageDirection: "Ipy'apýva ha ikane'õmava",
            audioUrl: "/audio/s4/s4_l6_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Huk rimaq kafe ruwanata quway, Bea. Yachanim wasiypi uyarisqay rimaykunamantaqa kayqa aswan allintaraq rimayta atinanta.",
            stageDirection: "Mana kallpayoq samarispa",
            audioUrl: "/audio/s4/s4_l6_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Uka arst'iri café lurir maquin churxita, Bea. Nayax yattanwa utajan ist'ktan uka jani amuyt'añanakatx aka maquinax aski arunak parlani.",
            stageDirection: "Qarjata samana apsusisa",
            audioUrl: "/audio/s4/s4_l6_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Xinechmaca in caféchijchihualoni tlen tlatohua, Bea. Neltiliztica quipiaz tlatolli ocachi yec tlamatiliztli que in tlen nicaqui nochan.",
            stageDirection: "Cenca ciauhqui ihiyocan",
            audioUrl: "/audio/s4/s4_l6_nah-MX.mp3"
          },
          "nv-US": {
            text: "Gohwééh álnéhígíí yáłtiʼii tʼáá kʼad shaa níłtsoos, Bea. Shikéyahdi bichʼįʼ yáníłtiʼígíí biláahgo hazhóʼó yátiʼ hólǫ́ǫ doo shaʼshin.",
            stageDirection: "Tʼáá átʼéé chʼééh deeyáago yíhwiildééh",
            audioUrl: "/audio/s4/s4_l6_nv-US.mp3"
          }
        }
      }
    ]
  }
];

