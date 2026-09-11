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
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
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
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_zh-TW.mp3"
          },
          "hi-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_hi-IN.mp3"
          },
          "ur-PK": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ur-PK.mp3"
          },
          "bn-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_bn-IN.mp3"
          },
          "pa-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_pa-IN.mp3"
          },
          "gu-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_gu-IN.mp3"
          },
          "mr-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_mr-IN.mp3"
          },
          "ta-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ta-IN.mp3"
          },
          "te-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_te-IN.mp3"
          },
          "kn-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_kn-IN.mp3"
          },
          "ml-IN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_vi-VN.mp3"
          },
          "th-TH": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_th-TH.mp3"
          },
          "id-ID": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_id-ID.mp3"
          },
          "ms-MY": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l3_nah-MX.mp3"
          },
          "nv-US": {
            text: "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!",
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
            text: "O ropa sucia.",
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
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_zh-TW.mp3"
          },
          "hi-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_hi-IN.mp3"
          },
          "ur-PK": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ur-PK.mp3"
          },
          "bn-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_bn-IN.mp3"
          },
          "pa-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_pa-IN.mp3"
          },
          "gu-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_gu-IN.mp3"
          },
          "mr-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_mr-IN.mp3"
          },
          "ta-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ta-IN.mp3"
          },
          "te-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_te-IN.mp3"
          },
          "kn-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_kn-IN.mp3"
          },
          "ml-IN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ml-IN.mp3"
          },
          "vi-VN": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_vi-VN.mp3"
          },
          "th-TH": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_th-TH.mp3"
          },
          "id-ID": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_id-ID.mp3"
          },
          "ms-MY": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ms-MY.mp3"
          },
          "sw-KE": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_sw-KE.mp3"
          },
          "gn-PY": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_gn-PY.mp3"
          },
          "qu-PE": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_qu-PE.mp3"
          },
          "ay-BO": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_ay-BO.mp3"
          },
          "nah-MX": {
            text: "O ropa sucia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l4_nah-MX.mp3"
          },
          "nv-US": {
            text: "O ropa sucia.",
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
            text: "¡Disculpen! ¿Alguien vio mi maleta verde con brillantina?",
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
            text: "¡Disculpen! ¿Alguien vio mi maleta verde con brillantina?",
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
            text: "¡Disculpen! ¿Alguien vio mi maleta verde con brillantina?",
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
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
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
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_zh-TW.mp3"
          },
          "hi-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_hi-IN.mp3"
          },
          "ur-PK": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ur-PK.mp3"
          },
          "bn-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_bn-IN.mp3"
          },
          "pa-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_pa-IN.mp3"
          },
          "gu-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_gu-IN.mp3"
          },
          "mr-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_mr-IN.mp3"
          },
          "ta-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ta-IN.mp3"
          },
          "te-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_te-IN.mp3"
          },
          "kn-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_kn-IN.mp3"
          },
          "ml-IN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ml-IN.mp3"
          },
          "vi-VN": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_vi-VN.mp3"
          },
          "th-TH": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_th-TH.mp3"
          },
          "id-ID": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_id-ID.mp3"
          },
          "ms-MY": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ms-MY.mp3"
          },
          "sw-KE": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_sw-KE.mp3"
          },
          "gn-PY": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l6_nah-MX.mp3"
          },
          "nv-US": {
            text: "¿Brillantina? ¿Es esa la clave secreta para los diamantes?",
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
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
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
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_zh-TW.mp3"
          },
          "hi-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_hi-IN.mp3"
          },
          "ur-PK": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ur-PK.mp3"
          },
          "bn-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_bn-IN.mp3"
          },
          "pa-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_pa-IN.mp3"
          },
          "gu-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_gu-IN.mp3"
          },
          "mr-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_mr-IN.mp3"
          },
          "ta-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ta-IN.mp3"
          },
          "te-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_te-IN.mp3"
          },
          "kn-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_kn-IN.mp3"
          },
          "ml-IN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ml-IN.mp3"
          },
          "vi-VN": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_vi-VN.mp3"
          },
          "th-TH": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_th-TH.mp3"
          },
          "id-ID": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_id-ID.mp3"
          },
          "ms-MY": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ms-MY.mp3"
          },
          "sw-KE": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_sw-KE.mp3"
          },
          "gn-PY": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_gn-PY.mp3"
          },
          "qu-PE": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_qu-PE.mp3"
          },
          "ay-BO": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_ay-BO.mp3"
          },
          "nah-MX": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
            stageDirection: "Natural",
            audioUrl: "/audio/s1/s1_l7_nah-MX.mp3"
          },
          "nv-US": {
            text: "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.",
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
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
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
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_zh-TW.mp3"
          },
          "hi-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_hi-IN.mp3"
          },
          "ur-PK": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ur-PK.mp3"
          },
          "bn-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_bn-IN.mp3"
          },
          "pa-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_pa-IN.mp3"
          },
          "gu-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_gu-IN.mp3"
          },
          "mr-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_mr-IN.mp3"
          },
          "ta-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ta-IN.mp3"
          },
          "te-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_te-IN.mp3"
          },
          "kn-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_kn-IN.mp3"
          },
          "ml-IN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ml-IN.mp3"
          },
          "vi-VN": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_vi-VN.mp3"
          },
          "th-TH": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_th-TH.mp3"
          },
          "id-ID": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_id-ID.mp3"
          },
          "ms-MY": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ms-MY.mp3"
          },
          "sw-KE": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_sw-KE.mp3"
          },
          "gn-PY": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l1_nah-MX.mp3"
          },
          "nv-US": {
            text: "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.",
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
            text: "¡Marchando! Un café hirviendo servido justo en el filo de la mesa y un despertador programado hace cuarenta años.",
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
            text: "¡Marchando! Un café hirviendo servido justo en el filo de la mesa y un despertador programado hace cuarenta años.",
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
            text: "¡Marchando! Un café hirviendo servido justo en el filo de la mesa y un despertador programado hace cuarenta años.",
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
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
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
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_zh-TW.mp3"
          },
          "hi-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_hi-IN.mp3"
          },
          "ur-PK": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ur-PK.mp3"
          },
          "bn-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_bn-IN.mp3"
          },
          "pa-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_pa-IN.mp3"
          },
          "gu-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_gu-IN.mp3"
          },
          "mr-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_mr-IN.mp3"
          },
          "ta-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ta-IN.mp3"
          },
          "te-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_te-IN.mp3"
          },
          "kn-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_kn-IN.mp3"
          },
          "ml-IN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ml-IN.mp3"
          },
          "vi-VN": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_vi-VN.mp3"
          },
          "th-TH": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_th-TH.mp3"
          },
          "id-ID": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_id-ID.mp3"
          },
          "ms-MY": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ms-MY.mp3"
          },
          "sw-KE": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_sw-KE.mp3"
          },
          "gn-PY": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l3_nah-MX.mp3"
          },
          "nv-US": {
            text: "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.",
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
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
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
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_zh-TW.mp3"
          },
          "hi-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_hi-IN.mp3"
          },
          "ur-PK": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ur-PK.mp3"
          },
          "bn-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_bn-IN.mp3"
          },
          "pa-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_pa-IN.mp3"
          },
          "gu-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_gu-IN.mp3"
          },
          "mr-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_mr-IN.mp3"
          },
          "ta-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ta-IN.mp3"
          },
          "te-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_te-IN.mp3"
          },
          "kn-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_kn-IN.mp3"
          },
          "ml-IN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_vi-VN.mp3"
          },
          "th-TH": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_th-TH.mp3"
          },
          "id-ID": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_id-ID.mp3"
          },
          "ms-MY": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
            stageDirection: "Natural",
            audioUrl: "/audio/s2/s2_l4_nah-MX.mp3"
          },
          "nv-US": {
            text: "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.",
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
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
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
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_zh-TW.mp3"
          },
          "hi-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_hi-IN.mp3"
          },
          "ur-PK": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ur-PK.mp3"
          },
          "bn-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_bn-IN.mp3"
          },
          "pa-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_pa-IN.mp3"
          },
          "gu-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_gu-IN.mp3"
          },
          "mr-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_mr-IN.mp3"
          },
          "ta-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ta-IN.mp3"
          },
          "te-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_te-IN.mp3"
          },
          "kn-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_kn-IN.mp3"
          },
          "ml-IN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_vi-VN.mp3"
          },
          "th-TH": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_th-TH.mp3"
          },
          "id-ID": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_id-ID.mp3"
          },
          "ms-MY": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l1_nah-MX.mp3"
          },
          "nv-US": {
            text: "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.",
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
            text: "Tranquilo, abogado diminuto. Primero enséñame a subir videos con música moderna a esa red social.",
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
            text: "Tranquilo, abogado diminuto. Primero enséñame a subir videos con música moderna a esa red social.",
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
            text: "Tranquilo, abogado diminuto. Primero enséñame a subir videos con música moderna a esa red social.",
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
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
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
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_zh-TW.mp3"
          },
          "hi-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_hi-IN.mp3"
          },
          "ur-PK": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ur-PK.mp3"
          },
          "bn-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_bn-IN.mp3"
          },
          "pa-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_pa-IN.mp3"
          },
          "gu-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_gu-IN.mp3"
          },
          "mr-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_mr-IN.mp3"
          },
          "ta-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ta-IN.mp3"
          },
          "te-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_te-IN.mp3"
          },
          "kn-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_kn-IN.mp3"
          },
          "ml-IN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ml-IN.mp3"
          },
          "vi-VN": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_vi-VN.mp3"
          },
          "th-TH": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_th-TH.mp3"
          },
          "id-ID": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_id-ID.mp3"
          },
          "ms-MY": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ms-MY.mp3"
          },
          "sw-KE": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_sw-KE.mp3"
          },
          "gn-PY": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_gn-PY.mp3"
          },
          "qu-PE": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_qu-PE.mp3"
          },
          "ay-BO": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_ay-BO.mp3"
          },
          "nah-MX": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l3_nah-MX.mp3"
          },
          "nv-US": {
            text: "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.",
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
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
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
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_zh-TW.mp3"
          },
          "hi-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_hi-IN.mp3"
          },
          "ur-PK": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ur-PK.mp3"
          },
          "bn-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_bn-IN.mp3"
          },
          "pa-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_pa-IN.mp3"
          },
          "gu-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_gu-IN.mp3"
          },
          "mr-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_mr-IN.mp3"
          },
          "ta-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ta-IN.mp3"
          },
          "te-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_te-IN.mp3"
          },
          "kn-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_kn-IN.mp3"
          },
          "ml-IN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ml-IN.mp3"
          },
          "vi-VN": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_vi-VN.mp3"
          },
          "th-TH": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_th-TH.mp3"
          },
          "id-ID": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_id-ID.mp3"
          },
          "ms-MY": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ms-MY.mp3"
          },
          "sw-KE": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_sw-KE.mp3"
          },
          "gn-PY": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_gn-PY.mp3"
          },
          "qu-PE": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_qu-PE.mp3"
          },
          "ay-BO": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_ay-BO.mp3"
          },
          "nah-MX": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_nah-MX.mp3"
          },
          "nv-US": {
            text: "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!",
            stageDirection: "Natural",
            audioUrl: "/audio/s3/s3_l4_nv-US.mp3"
          }
        }
      },
    ]
  },
];
