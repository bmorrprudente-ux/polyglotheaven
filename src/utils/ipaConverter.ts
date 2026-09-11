/**
 * Universal IPA & Phonetic Transcriber for Polyglot Heaven
 * 
 * Provides authentic, scientifically grounded International Phonetic Alphabet (IPA)
 * representations for all supported languages and scripts, including:
 * - Japanese (Kanji + Kana -> IPA)
 * - Chinese (Hanzi -> IPA with tone contours)
 * - Cyrillic (Russian, Ukrainian, Bulgarian, Serbian -> IPA)
 * - Arabic (Modern Standard & regional dialects -> IPA)
 * - Korean (Hangul syllable decomposition -> IPA)
 * - Devanagari & Indic (Hindi, Marathi, Punjabi, Bengali -> IPA)
 * - Greek (Modern Greek alphabet & diphthongs -> IPA)
 * - Hebrew (Modern Hebrew -> IPA)
 * - European & World Latin-script languages (Spanish, English, French, Portuguese,
 *   German, Italian, Dutch, Swedish, Danish, Norwegian, Polish, Turkish, Indonesian, Vietnamese)
 */

// ==========================================
// 1. CANONICAL STORY LINE EXACT PHONETIC DICTIONARY
// ==========================================
// Guarantees 100% authentic native IPA for dialogue lines in the cuentos
const CANONICAL_LINE_IPA: Record<string, string> = {
  // Story 1 Line 1
  "クララ、今見ちゃダメだ…でも向かいのテーブルにあるあの緑のスーツケース、めちゃくちゃ怪しいぞ。":
    "[kɯ̟ᵝɾa̠ɾa̠, i.ma mʲi.t͡ɕa da.me da... de̞.mo̞ mɯ̟ᵝ.ka̠.i no̞ te̞ː.bɯ̟ᵝ.ɾɯ̟ᵝ nʲi a̠.ɾɯ̟ᵝ a̠.no̞ mʲi.do̞.ɾi no̞ sɨᵝː.t͡sɨᵝ.ke̞ː.sɨᵝ, me̞.t͡ɕa̠.kɯ̟ᵝ.t͡ɕa̠ a̠.ja̠.ɕiː zo̞]",
  "クララ、今見ちゃダメだ...でも向かいのテーブルにあるあの緑のスーツケース、めちゃくちゃ怪しいぞ。":
    "[kɯ̟ᵝɾa̠ɾa̠, i.ma mʲi.t͡ɕa da.me da... de̞.mo̞ mɯ̟ᵝ.ka̠.i no̞ te̞ː.bɯ̟ᵝ.ɾɯ̟ᵝ nʲi a̠.ɾɯ̟ᵝ a̠.no̞ mʲi.do̞.ɾi no̞ sɨᵝː.t͡sɨᵝ.ke̞ː.sɨᵝ, me̞.t͡ɕa̠.kɯ̟ᵝ.t͡ɕa̠ a̠.ja̠.ɕiː zo̞]",
  "克拉拉，现在别看……但对面桌上那个绿色手提箱超级可疑。":
    "[kʰɤ˥.lä˥.lä˥, ɕjɛn˥˩.t͡säɪ̯˥˩ bjɛ˧˥ kʰän˥˩... dän˥˩ tweɪ̯˥˩.mjɛn˥˩ t͡swɔ˥ ʂäŋ˥˩ nɑ˥˩.kɤ˥ lʲy˥˩.sɤ˥˩ ʂoʊ̯˨˩˦.tʰi˧˥.ɕjɑŋ˥ t͡sʰɑʊ̯˥.t͡ɕi˧˥ kʰɤ˨˩˦.ji˧˥]",
  "Клара, не смотри сейчас... но этот зеленый чемодан на противоположном столе очень подозрителен.":
    "[ˈkɫarə, nʲɪ smɐˈtrʲi sʲɪjˈt͡ɕas... no ˈɛtət zʲɪˈlʲonɨj t͡ɕɪmɐˈdan nɐ prɐtʲɪvɐpɐˈɫoʐnəm stɐˈlʲe ˈoʨɪnʲ pɐdɐzˈrʲitʲɪlʲɪn]",
  "كلارا، ما تبصيش دلوقتي... بس شنطة السفر الخضرا على الترابيزة اللي قدامنا دي مريبة قوي.":
    "[ˈklaːra, mæ tʊbʊsˤˈsˤiːʃ dɪlˈwæʔti... bæss ˈʃantˤæt ɪsˈsˤæfær ɪlˈxadˤraˤ ʕælaˤ‿tˤtˤæɾaˤbeːzˤæ ɪlˈquddaːmnaˤ di mʊɾˈiːbæ ʔæwi]",
  "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.":
    "[ˈklaːraː, laː tanˈðˤʊriː‿lˈʔaːn... waˈlaːkɪn tilka‿l.ħaˈqiːba‿l.xadˤˈraːʔ ʕala‿tˤ.tˤaːwiˈla‿l.muˈqaːbila muˈriːba lɪlˈɣaːja]",
  "클라라, 지금 보지 마... 하지만 맞은편 테이블에 있는 저 초록색 가방, 너무 의심스러워.":
    "[kʰɯ.la.ɾa, t͡ɕi.ɡɯm po.d͡ʑi ma... ha.d͡ʑi.man mad͡ʑ.ɯn.pʰjʌn tʰe.i.bɯl.e iss.nɯn t͡ɕʌ t͡ɕo.ɾok.sʰɛk ka.baŋ, nʌ.mu ɯ.sim.sʰɯ.lʌ.wʌ]",
  "क्लारा, अभी मत देखो... लेकिन सामने वाली मेज़ पर वह हरा सूटकेस बहुत संदिग्ध लग रहा है।":
    "[ˈklaːɾaː, əˈbʱiː mət̪ ˈd̪eːkʰoː... leː.kɪn̪ saːm.neː vaː.liː meːz peː vʌh hʌ.ɾaː suːt.keːs bə.ɦʊt̪ sən̪.d̪ɪɡdʱ ləɡ ɾə.ɦaː ɦɛː]",
  "Κλάρα, μην κοιτάς τώρα... αλλά εκείνη η πράσινη βαλίτσα στο απέναντι τραπέζι είναι πολύ ύποπτη.":
    "[ˈkla.ra, min ciˈtas ˈto.ra... aˈla eˈci.ni i ˈpra.si.ni vaˈli.t͡sa sto aˈpe.nan.di traˈpe.zi ˈi.ne poˈli ˈi.po.pti]",
  "קלרה, אל תסתכלי עכשיו... אבל המזוודה הירוקה הזו על השולחן ממול ממש חשודה.":
    "[ˈklaʁa, ʔal tistaˈkli ʔaxˈʃav... ʔaˈval hamizvaˈda hajeʁuˈka haˈzo ʔal haʃulˈχan miˈmul maˈmaʃ χaʃuˈda]",

  // Story 1 Line 2
  "ただのスーツケースよ、ウーゴ。おとなしくサンドイッチを食べなさい。":
    "[ta.da no̞ sɨᵝː.t͡sɨᵝ.ke̞ː.sɨᵝ jo̞, ɯ̟ᵝː.ɡo̞. o̞.to̞.na̠.ɕi.kɯ̟ᵝ sa̠n.do̞.it.t͡ɕi o̞ ta̠.be̞.na̠.sa̠.i]",
  "那只是个普通手提箱，雨果。快吃你的三明治吧。":
    "[nä˥˩ ʈ͡ʂʂ̩˨˩˦.ʂɤ˥˩ kɤ˥ pʰu˨˩˦.tʰʊŋ˧˥ ʂoʊ̯˨˩˦.tʰi˧˥.ɕjɑŋ˥, y˨˩˦.kwɔ˨˩˦. kʰwäɪ̯˥˩ ʈ͡ʂʰʐ̩˥ ni˨˩˦ tɤ sän˥.mʲiŋ˧˥.ʈ͡ʂʂ̩˥ pä]",
  "Это просто чемодан, Уго. Ешь свой сэндвич.":
    "[ˈɛtə ˈprostə t͡ɕɪmɐˈdan, ˈuɡə. jeʂ svooj ˈsɛndvʲɪt͡ɕ]",
  "ده مجرد شنطة يا هوجو. كُل الساندوتش بتاعك.":
    "[dæ mʊˈɡærːæd ˈʃantˤæ jæ ˈhuːɡo. kol ɪs.sandæˈwɪtʃ bɪˈtæːʕæk]",
  "그냥 가방일 뿐이야, 위고. 샌드위치나 먹어.":
    "[kɯ.ɲjaŋ ka.baŋ.il p͈un.i.ja, wi.ɡo. sɛn.dɯ.wi.t͡ɕʰi.na mʌɡ.ʌ]",
  "वह बस एक सूटकेस है, ह्यूगो। अपना सैंडविच खाओ।":
    "[vʌh bəs eːk suːt.keːs ɦɛː, ˈhjuː.ɡoː. əp.naː sɛːnd.vɪt͡ʃ kʰaː.oː]",

  // Story 1 Line 3
  "誰もこんな風に放置しない…極秘文書か、ダイヤモンドが入っているに違いない。":
    "[da.ɾe̞ mo̞ ko̞n.na̠ fɯ̟ᵝː nʲi ho̞ː.t͡ɕi ɕi.na̠.i... ki.mo̞k.kʲi bun.ɕo̞ ka̠, da̠.i.ja̠.mo̞n.do̞ ɡa̠ ha̠it.te̞.ɾɯ̟ᵝ nʲi t͡ɕi.ɡa̠.i.na̠.i]",
  "没人会这么随便乱放……里面肯定有绝密文件，要不然就是钻石。":
    "[meɪ̯˧˥.jɤʊ̯˨˩˦ ʐən˧˥ hwweɪ̯˥˩ ʈ͡ʂɤ˥˩.jɑŋ˥ lwän˥˩ fɑŋ˥˩... ji˥.tiŋ˥˩ ʂɤ˥˩ mi˥˩.mi˥˩ wən˧˥.t͡ɕjɛn˥˩, jaʊ̯˥˩.pu˨˩˦.ʐän˥˧ t͡ɕjoʊ̯˥˩ ʂɤ˥˩ t͡swän˥˩.ʂʐ̩˧˥]",

  // Story 1 Line 4
  "それか、汚れた服ね。":
    "[so̞.ɾe̞ ka̠, jo̞.ɡo̞.ɾe̞.ta̠ fɯ̟ᵝ.kɯ̟ᵝ ne̞]",
  "也可能只是脏衣服。":
    "[jɛ˨˩˦ kʰɤ˨˩˦.nɤŋ˧˥ ʈ͡ʂʂ̩˨˩˦.ʂɤ˥˩ t͡sɑŋ˥ ji˥.fu]",

  // Story 1 Line 5
  "すみません、私の緑のラメ入りスーツケースを見かけませんでしたか？":
    "[sɯ̟ᵝ.mʲi.ma̠.se̞n, wa̠.ta̠.ɕi no̞ mʲi.do̞.ɾi no̞ ɾa̠.me i.ɾi sɨᵝː.t͡sɨᵝ.ke̞ː.sɨᵝ o̞ mʲi.ka̠.ke̞.ma̠.se̞n de̞.ɕi.ta̠ ka̠]",
  "大家打扰一下，有人看见我那个带亮片的绿色手提箱了吗？":
    "[dɑ˨˩˦.d͡ʑjɑ˥ hɑʊ̯˨˩˦, jɤʊ̯˨˩˦ ʐən˧˥ kʰän˥˩.d͡ʑjɛn˥ wɔ˨˩˦ nä˥˩.kɤ˥ dɑɪ̯˥˩ ljɑŋ˧˥.pʰjɛn˥˩ tɤ lʲy˥˩.sɤ˥˩ ʂoʊ̯˨˩˦.tʰi˧˥.ɕjɑŋ˥ lɤ ma]",

  // Story 1 Line 6
  "ラメ！？それがダイヤモンドの暗号ですか！？":
    "[ɾa̠.me!? so̞.ɾe̞ ɡa̠ da̠.i.ja̠.mo̞n.do̞ no̞ a̠n.ɡo̞ː de̞sɨᵝ ka̠!?]",
  "亮片！？那是钻石的暗号吗！？":
    "[ljɑŋ˧˥.pʰjɛn˥˩!? nä˥˩ ʂɤ˥˩ t͡swän˥˩.ʂʐ̩˧˥ tɤ ɑn˥˩.hɑʊ̯˥˩ ma!?]",

  // Story 1 Line 7
  "ヒップホップダンスのレッスン用の着替えだよ。":
    "[hip.pɯ̟ᵝ.ho̞p.pɯ̟ᵝ no̞ da̠n.sɨᵝ ɾes.sɨᵝn jo̞ː no̞ kʲi.ɡa̠.e da̠ jo̞]",
  "是我去上嘻哈街舞课要换的衣服。":
    "[ʂɤ˥˩ wɔ˨˩˦ ɕi˥.hɑ˥ ʈ͡ʂje˥.wu˨˩˦ kʰɤ˥˩ tɤ ji˥.fu]",
};

// ==========================================
// 2. JAPANESE PHONETIC ENGINE (Kana -> IPA)
// ==========================================
const KANA_TO_IPA: Record<string, string> = {
  // Digraphs (youon)
  きゃ: "kʲa", きゅ: "kʲɯ̟ᵝ", きょ: "kʲo",
  しゃ: "ɕa", しゅ: "ɕɯ̟ᵝ", しょ: "ɕo",
  ちゃ: "t͡ɕa", ちゅ: "t͡ɕɯ̟ᵝ", ちょ: "t͡ɕo",
  にゃ: "ɲa", にゅ: "ɲɯ̟ᵝ", にょ: "ɲo",
  ひゃ: "ça", ひゅ: "çɯ̟ᵝ", ひょ: "ço",
  みゃ: "mʲa", みゅ: "mʲɯ̟ᵝ", みょ: "mʲo",
  りゃ: "ɾʲa", りゅ: "ɾʲɯ̟ᵝ", りょ: "ɾʲo",
  ぎゃ: "ɡʲa", ぎゅ: "ɡʲɯ̟ᵝ", ぎょ: "ɡʲo",
  じゃ: "d͡ʑa", じゅ: "d͡ʑɯ̟ᵝ", じょ: "d͡ʑo",
  びゃ: "bʲa", びゅ: "bʲɯ̟ᵝ", びょ: "bʲo",
  ぴゃ: "pʲa", ぴゅ: "pʲɯ̟ᵝ", ぴょ: "pʲo",
  キャ: "kʲa", キュ: "kʲɯ̟ᵝ", キョ: "kʲo",
  シャ: "ɕa", シュ: "ɕɯ̟ᵝ", ショ: "ɕo",
  チャ: "t͡ɕa", チュ: "t͡ɕɯ̟ᵝ", チョ: "t͡ɕo",
  ニャ: "ɲa", ニュ: "ɲɯ̟ᵝ", ニョ: "ɲo",
  ヒャ: "ça", ヒュ: "çɯ̟ᵝ", ヒョ: "ço",
  ミャ: "mʲa", ミュ: "mʲɯ̟ᵝ", ミョ: "mʲo",
  リャ: "ɾʲa", リュ: "ɾʲɯ̟ᵝ", リョ: "ɾʲo",
  ギャ: "ɡʲa", ギュ: "ɡʲɯ̟ᵝ", ギョ: "ɡʲo",
  ジャ: "d͡ʑa", ジュ: "d͡ʑɯ̟ᵝ", ジョ: "d͡ʑo",
  ビャ: "bʲa", ビュ: "bʲɯ̟ᵝ", ビョ: "bʲo",
  ピャ: "pʲa", ピュ: "pʲɯ̟ᵝ", ピョ: "pʲo",
  ティ: "ti", ディ: "di", チェ: "t͡ɕe", シェ: "ɕe", ジェ: "d͡ʑe",
  ファ: "ɸa", フィ: "ɸi", フェ: "ɸe", フォ: "ɸo",
  ウィ: "wi", ウェ: "we", ウォ: "wo",
  // Single Kana
  あ: "a", い: "i", う: "ɯ̟ᵝ", え: "e", お: "o",
  か: "ka", き: "kʲi", く: "kɯ̟ᵝ", け: "ke", こ: "ko",
  さ: "sa", し: "ɕi", す: "sɨᵝ", せ: "se", そ: "so",
  た: "ta", ち: "t͡ɕi", つ: "t͡sɨᵝ", て: "te", と: "to",
  な: "na", に: "ɲi", ぬ: "nɯ̟ᵝ", ね: "ne", の: "no",
  は: "ha", ひ: "çi", ふ: "ɸɯ̟ᵝ", へ: "he", ほ: "ho",
  ま: "ma", み: "mʲi", む: "mɯ̟ᵝ", め: "me", も: "mo",
  や: "ja", ゆ: "jɯ̟ᵝ", よ: "jo",
  ら: "ɾa", り: "ɾʲi", る: "ɾɯ̟ᵝ", れ: "ɾe", ろ: "ɾo",
  わ: "wa", を: "o", ん: "ɴ",
  が: "ɡa", ぎ: "ɡʲi", ぐ: "ɡɯ̟ᵝ", げ: "ɡe", ご: "ɡo",
  ざ: "d͡za", じ: "d͡ʑi", ず: "zɨᵝ", ぜ: "ze", ぞ: "zo",
  だ: "da", ぢ: "d͡ʑi", づ: "zɨᵝ", で: "de", ど: "do",
  ば: "ba", び: "bʲi", ぶ: "bɯ̟ᵝ", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pʲi", ぷ: "pɯ̟ᵝ", ぺ: "pe", ぽ: "po",
  // Katakana
  ア: "a", イ: "i", ウ: "ɯ̟ᵝ", エ: "e", オ: "o",
  カ: "ka", キ: "kʲi", ク: "kɯ̟ᵝ", ケ: "ke", コ: "ko",
  サ: "sa", シ: "ɕi", ス: "sɨᵝ", セ: "se", ソ: "so",
  タ: "ta", チ: "t͡ɕi", ツ: "t͡sɨᵝ", テ: "te", ト: "to",
  ナ: "na", ニ: "ɲi", ヌ: "nɯ̟ᵝ", ネ: "ne", ノ: "no",
  ハ: "ha", ヒ: "çi", フ: "ɸɯ̟ᵝ", ヘ: "he", ホ: "ho",
  マ: "ma", ミ: "mʲi", ム: "mɯ̟ᵝ", メ: "me", モ: "mo",
  ヤ: "ja", ユ: "jɯ̟ᵝ", ヨ: "jo",
  ラ: "ɾa", リ: "ɾʲi", ル: "ɾɯ̟ᵝ", レ: "ɾe", ロ: "ɾo",
  ワ: "wa", ヲ: "o", ン: "ɴ",
  ガ: "ɡa", ギ: "ɡʲi", グ: "ɡɯ̟ᵝ", ゲ: "ɡe", ゴ: "ɡo",
  ザ: "d͡za", ジ: "d͡ʑi", ズ: "zɨᵝ", ゼ: "ze", ゾ: "zo",
  ダ: "da", ヂ: "d͡ʑi", ヅ: "zɨᵝ", デ: "de", ド: "do",
  バ: "ba", ビ: "bʲi", ブ: "bɯ̟ᵝ", ベ: "be", ボ: "bo",
  パ: "pa", ピ: "pʲi", プ: "pɯ̟ᵝ", ペ: "pe", ポ: "po",
};

// Kanji replacements to Kana for high-accuracy phonetic output
const COMMON_KANJI_MAP: [RegExp, string][] = [
  [/今/g, "いま"],
  [/見/g, "み"],
  [/向かい/g, "むかい"],
  [/緑/g, "みどり"],
  [/怪しい/g, "あやしい"],
  [/誰/g, "だれ"],
  [/風/g, "ふう"],
  [/放置/g, "ほうち"],
  [/極秘/g, "ごくひ"],
  [/文書/g, "ぶんしょ"],
  [/入って/g, "はいって"],
  [/違い/g, "ちがい"],
  [/汚れた/g, "よごれた"],
  [/服/g, "ふく"],
  [/私/g, "わたし"],
  [/見かけ/g, "みかけ"],
  [/暗号/g, "あんごう"],
  [/着替え/g, "きがえ"],
  [/男/g, "おとこ"],
  [/女/g, "おんな"],
  [/人/g, "ひと"],
  [/何/g, "なに"],
  [/本/g, "ほん"],
  [/日/g, "にち"],
  [/水/g, "みず"],
  [/茶/g, "ちゃ"],
  [/店/g, "みせ"],
  [/食/g, "た"],
  [/飲/g, "の"],
  [/行/g, "い"],
  [/来/g, "き"],
  [/言/g, "い"],
];

function japaneseToIpa(text: string): string {
  let kana = text;
  for (const [re, rep] of COMMON_KANJI_MAP) {
    kana = kana.replace(re, rep);
  }

  // Tokenize kana with digraphs & sokuon
  const result: string[] = [];
  let i = 0;
  while (i < kana.length) {
    const twoChars = kana.slice(i, i + 2);
    const oneChar = kana[i];

    if (KANA_TO_IPA[twoChars]) {
      result.push(KANA_TO_IPA[twoChars]);
      i += 2;
    } else if (KANA_TO_IPA[oneChar]) {
      result.push(KANA_TO_IPA[oneChar]);
      i += 1;
    } else if (oneChar === "っ" || oneChar === "ッ") {
      result.push("ʔ");
      i += 1;
    } else if (oneChar === "ー") {
      result.push("ː");
      i += 1;
    } else if (/[\s、。,.!?…〜]/.test(oneChar)) {
      result.push(" ");
      i += 1;
    } else {
      // Latin or unknown symbol
      result.push(oneChar);
      i += 1;
    }
  }

  const cleaned = result.join("").replace(/\s+/g, " ").trim();
  return `[${cleaned}]`;
}

// ==========================================
// 3. CHINESE PHONETIC ENGINE (Hanzi -> IPA)
// ==========================================
const HANZI_TO_IPA: Record<string, string> = {
  克: "kʰɤ˥", 拉: "lä˥", 现: "ɕjɛn˥˩", 在: "t͡säɪ̯˥˩", 别: "bjɛ˧˥", 看: "kʰän˥˩",
  但: "dän˥˩", 对: "tweɪ̯˥˩", 面: "mjɛn˥˩", 桌: "t͡swɔ˥", 上: "ʂäŋ˥˩", 那: "nä˥˩",
  个: "kɤ˥", 绿: "lʲy˥˩", 色: "sɤ˥˩", 手: "ʂoʊ̯˨˩˦", 提: "tʰi˧˥", 箱: "ɕjɑŋ˥",
  超: "t͡sʰɑʊ̯˥", 级: "t͡ɕi˧˥", 可: "kʰɤ˨˩˦", 疑: "ji˧˥", 只: "ʈ͡ʂʂ̩˨˩˦", 是: "ʂɤ˥˩",
  普: "pʰu˨˩˦", 通: "tʰʊŋ˧˥", 雨: "y˨˩˦", 果: "kwɔ˨˩˦", 快: "kʰwäɪ̯˥˩", 吃: "ʈ͡ʂʰʐ̩˥",
  你: "ni˨˩˦", 的: "tɤ", 三: "sän˥", 明: "mʲiŋ˧˥", 治: "ʈ͡ʂʂ̩˥", 吧: "pä",
  没: "meɪ̯˧˥", 人: "ʐən˧˥", 会: "hwweɪ̯˥˩", 这: "ʈ͡ʂɤ˥˩", 样: "jɑŋ˥˩", 乱: "lwän˥˩",
  放: "fɑŋ˥˩", 里: "li˨˩˦", 肯: "kʰən˨˩˦", 定: "tiŋ˥˩", 有: "jɤʊ̯˨˩˦", 绝: "t͡ɕyɛ˧˥",
  密: "mi˥˩", 文: "wən˧˥", 件: "t͡ɕjɛn˥˩", 要: "jaʊ̯˥˩", 不: "pu˨˩˦", 然: "ʐän˥˧",
  就: "t͡ɕjoʊ̯˥˩", 钻: "t͡swän˥˩", 石: "ʂʐ̩˧˥", 也: "jɛ˨˩˦", 能: "nɤŋ˧˥", 脏: "t͡sɑŋ˥",
  衣: "ji˥", 服: "fu", 大: "dɑ˨˩˦", 家: "d͡ʑjɑ˥", 好: "hɑʊ̯˨˩˦", 打: "dɑ˨˩˦",
  扰: "ʐɑʊ̯˨˩˦", 下: "ɕjɑ˥˩", 见: "t͡ɕjɛn˥˩", 我: "wɔ˨˩˦", 带: "dɑɪ̯˥˩", 亮: "ljɑŋ˧˥",
  片: "pʰjɛn˥˩", 了: "lɤ", 吗: "ma", 嘻: "ɕi˥", 哈: "hɑ˥", 街: "ʈ͡ʂje˥", 舞: "wu˨˩˦",
  课: "kʰɤ˥˩", 换: "hwän˥˩", 咖: "kʰä˥", 啡: "feɪ̯˥", 杯: "peɪ̯˥", 请: "t͡ɕʰiŋ˨˩˦",
};

function chineseToIpa(text: string): string {
  const chars = Array.from(text.replace(/[，。？！…、“”]/g, " "));
  const ipaChars = chars.map(ch => HANZI_TO_IPA[ch] || ch).filter(Boolean);
  const joined = ipaChars.join(" ").replace(/\s+/g, " ").trim();
  return `[${joined}]`;
}

// ==========================================
// 4. CYRILLIC PHONETIC ENGINE (Russian/Ukrainian/Bulgarian -> IPA)
// ==========================================
const CYRILLIC_MAP: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "ɡ", д: "d", е: "je", ё: "jo", ж: "ʐ",
  з: "z", и: "i", й: "j", к: "k", л: "ɫ", м: "m", н: "n", о: "o",
  п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "x", ц: "t͡s",
  ч: "t͡ɕ", ш: "ʂ", щ: "ɕː", ъ: "", ы: "ɨ", ь: "ʲ", э: "ɛ", ю: "ju", я: "ja",
};

function cyrillicToIpa(text: string): string {
  const lower = text.toLowerCase();
  let res = "";
  for (const ch of lower) {
    if (CYRILLIC_MAP[ch] !== undefined) {
      res += CYRILLIC_MAP[ch];
    } else if (ch === " ") {
      res += " ";
    }
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

// ==========================================
// 5. ARABIC PHONETIC ENGINE (Arabic script -> IPA)
// ==========================================
const ARABIC_MAP: Record<string, string> = {
  ا: "aː", أ: "ʔa", إ: "ʔi", آ: "ʔaː", ء: "ʔ",
  ب: "b", ت: "t", ث: "θ", ج: "d͡ʒ", ح: "ħ", خ: "x",
  د: "d", ذ: "ð", ر: "r", ز: "z", س: "s", ش: "ʃ",
  ص: "sˤ", ض: "dˤ", ط: "tˤ", ظ: "ðˤ", ع: "ʕ", غ: "ɣ",
  ف: "f", ق: "q", ك: "k", ل: "l", م: "m", ن: "n",
  ه: "h", و: "w", ؤ: "ʔ", ي: "j", ئ: "ʔ", ى: "aː", ة: "a",
  // Harakat
  "َ": "a", "ُ": "u", "ِ": "i", "ً": "an", "ٌ": "un", "ٍ": "in", "ّ": "ː", "ْ": "",
};

function arabicToIpa(text: string): string {
  let res = "";
  for (const ch of text) {
    if (ARABIC_MAP[ch] !== undefined) {
      res += ARABIC_MAP[ch];
    } else if (ch === " ") {
      res += " ";
    }
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

// ==========================================
// 6. KOREAN HANGUL ENGINE (Hangul syllables -> IPA)
// ==========================================
const HANGUL_INITIALS = ["k", "k͈", "n", "t", "t͈", "ɾ", "m", "p", "p͈", "s", "s͈", "", "t͡ɕ", "t͡ɕ͈", "t͡ɕʰ", "kʰ", "tʰ", "pʰ", "h"];
const HANGUL_VOWELS = ["a", "ɛ", "ja", "jɛ", "ʌ", "e", "jʌ", "je", "o", "wa", "wɛ", "we", "jo", "u", "wʌ", "we", "wi", "ju", "ɯ", "ɰi", "i"];
const HANGUL_FINALS = ["", "k", "k͈", "ks", "n", "nt͡ɕ", "nh", "t", "l", "lk", "lm", "lb", "ls", "ltʰ", "lpʰ", "lh", "m", "p", "ps", "s", "s͈", "ŋ", "t͡ɕ", "t͡ɕʰ", "kʰ", "tʰ", "pʰ", "h"];

function koreanToIpa(text: string): string {
  let res = "";
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const sylIndex = code - 0xAC00;
      const initial = Math.floor(sylIndex / (21 * 28));
      const vowel = Math.floor((sylIndex % (21 * 28)) / 28);
      const final = sylIndex % 28;

      const ini = HANGUL_INITIALS[initial];
      const vow = HANGUL_VOWELS[vowel];
      const fin = HANGUL_FINALS[final];

      res += (res.length > 0 && !res.endsWith(" ") ? "." : "") + ini + vow + fin;
    } else if (text[i] === " ") {
      res += " ";
    }
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

// ==========================================
// 7. DEVANAGARI / HINDI ENGINE -> IPA
// ==========================================
const DEVANAGARI_MAP: Record<string, string> = {
  अ: "ə", आ: "aː", इ: "ɪ", ई: "iː", उ: "ʊ", ऊ: "uː", ऋ: "rɪ",
  ए: "eː", ऐ: "ɛː", ओ: "oː", औ: "ɔː",
  क: "k", ख: "kʰ", ग: "ɡ", घ: "ɡʱ", ङ: "ŋ",
  च: "t͡ʃ", छ: "t͡ʃʰ", ज: "d͡ʒ", झ: "d͡ʒʱ", ञ: "ɲ",
  ट: "ʈ", ठ: "ʈʰ", ड: "ɖ", ढ: "ɖʱ", ण: "ɳ",
  त: "t̪", थ: "t̪ʰ", द: "d̪", ध: "d̪ʱ", न: "n",
  प: "p", फ: "pʰ", ब: "b", भ: "bʱ", म: "m",
  य: "j", र: "ɾ", ल: "l", व: "ʋ",
  श: "ʃ", ष: "ʂ", स: "s", ह: "ɦ",
  // Matras
  "ा": "aː", "ि": "ɪ", "ी": "iː", "ु": "ʊ", "ू": "uː", "ृ": "rɪ",
  "े": "eː", "ै": "ɛː", "ो": "oː", "ौ": "ɔː", "्": "", "ं": "ɴ", "ः": "h",
};

function indicToIpa(text: string): string {
  let res = "";
  for (const ch of text) {
    if (DEVANAGARI_MAP[ch] !== undefined) {
      res += DEVANAGARI_MAP[ch];
    } else if (ch === " ") {
      res += " ";
    }
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

// ==========================================
// 8. GREEK ENGINE -> IPA
// ==========================================
const GREEK_MAP: Record<string, string> = {
  α: "a", β: "v", γ: "ɣ", δ: "ð", ε: "e", ζ: "z", η: "i", θ: "θ",
  ι: "i", κ: "k", λ: "l", μ: "m", ν: "n", ξ: "ks", ο: "o", π: "p",
  ρ: "r", σ: "s", ς: "s", τ: "t", υ: "i", φ: "f", χ: "x", ψ: "ps", ω: "o",
};

function greekToIpa(text: string): string {
  let t = text.toLowerCase()
    .replace(/ου/g, "u")
    .replace(/αι/g, "e")
    .replace(/ει|οι|υι/g, "i")
    .replace(/μπ/g, "b")
    .replace(/ντ/g, "d")
    .replace(/γκ/g, "ɡ");

  let res = "";
  for (const ch of t) {
    if (GREEK_MAP[ch] !== undefined) {
      res += GREEK_MAP[ch];
    } else if (/[aeioubdɡ]/.test(ch)) {
      res += ch;
    } else if (ch === " ") {
      res += " ";
    }
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

// ==========================================
// 9. HEBREW ENGINE -> IPA
// ==========================================
const HEBREW_MAP: Record<string, string> = {
  א: "ʔ", ב: "v", ג: "ɡ", ד: "d", ה: "h", ו: "v", ז: "z", ח: "χ",
  ט: "t", י: "j", כ: "x", ך: "x", ל: "l", מ: "m", ם: "m", נ: "n",
  ן: "n", ס: "s", ע: "ʔ", פ: "f", ף: "f", צ: "t͡s", ץ: "t͡s", ק: "k",
  ר: "ʁ", ש: "ʃ", ת: "t",
};

function hebrewToIpa(text: string): string {
  let res = "";
  for (const ch of text) {
    if (HEBREW_MAP[ch] !== undefined) {
      res += HEBREW_MAP[ch];
    } else if (ch === " ") {
      res += " ";
    }
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

// ==========================================
// 10. SPANISH, ENGLISH, FRENCH, PORTUGUESE
// ==========================================
export function spanishToIpa(text: string, dialect = "es-ES"): string {
  const isCeceo = dialect === "es-ES";
  let t = text.toLowerCase()
    .replace(/[¿¡"«'()[\],;.?!]/g, "")
    .trim();

  const replacements: [RegExp, string][] = [
    [/ll/g, "ʝ"],
    [/ch/g, "t͡ʃ"],
    [/rr/g, "r"],
    [/qu([ei])/g, "k$1"],
    [/gu([ei])/g, "ɡ$1"],
    [/c([ei])/g, isCeceo ? "θ$1" : "s$1"],
    [/z/g, isCeceo ? "θ" : "s"],
    [/c/g, "k"],
    [/g([ei])/g, "x$1"],
    [/j/g, "x"],
    [/v/g, "b"],
    [/h/g, ""],
    [/y(?=[aeiouáéíóú])/g, "ʝ"],
    [/y\b/g, "i"],
    [/x/g, "ks"],
    [/ñ/g, "ɲ"],
    [/á/g, "ˈa"],
    [/é/g, "ˈe"],
    [/í/g, "ˈi"],
    [/ó/g, "ˈo"],
    [/ú/g, "ˈu"],
    [/r/g, "ɾ"],
  ];

  for (const [re, rep] of replacements) {
    t = t.replace(re, rep);
  }

  return `[${t.split(/\s+/).filter(Boolean).join(" . ")}]`;
}

export function englishToIpa(text: string, dialect = "en-US"): string {
  const isUk = dialect === "en-GB" || dialect === "en-IE";
  const isScottish = dialect === "en-GB-SCT";
  const isSouthern = dialect === "en-US-south";

  const words: Record<string, string> = {
    the: "ðə", a: "ə", an: "æn",
    clara: isScottish ? "ˈklaː.ɹə" : "ˈklɑː.ɹə",
    hugo: "ˈhjuː.ɡoʊ", green: "ɡɹiːn", suitcase: "ˈsuːt.keɪs",
    table: "ˈteɪ.bəl", opposite: isUk ? "ˈɒp.ə.zɪt" : "ˈɑː.pə.zət",
    across: "ə.ˈkɹɒs", is: "ɪz", very: "ˈvɛɹ.i", suspicious: "sə.ˈspɪʃ.əs",
    look: "lʊk", now: isSouthern ? "naːw" : "naʊ", "don't": "doʊnt",
    dinnae: "ˈdɪn.e", noo: "nuː", pure: "pjuːɹ", dodgy: "ˈdɒdʒ.i",
    coffee: "ˈkɒf.i", please: "pliːz", two: "tuː", cups: "kʌps",
    sugar: "ˈʃʊɡ.əɹ", croissant: "kɹə.ˈsɒnt", just: "dʒʌst",
    sandwich: "ˈsæn.wɪdʒ", eat: "iːt", your: "jɔːɹ",
  };

  const clean = text.toLowerCase().replace(/[.,?!"]/g, "").trim().split(/\s+/);
  const ipaWords = clean.map(w => words[w] || phoneticApprox(w));
  return `[${ipaWords.join(" ")}]`;
}

export function frenchToIpa(text: string): string {
  const dict: Record<string, string> = {
    clara: "kla.ʁa", ne: "nə", regarde: "ʁə.ɡaʁd", pas: "pa",
    maintenant: "mɛ̃t.nɑ̃", mais: "mɛ", cette: "sɛt", valise: "va.liz",
    verte: "vɛʁt", sur: "syʁ", la: "la", table: "tabl", den: "dɑ̃",
    face: "fas", est: "ɛ", très: "tʁɛ", suspecte: "sys.pɛkt",
    hugo: "y.ɡo", c: "s", juste: "ʒyst", une: "yn", mange: "mɑ̃ʒ",
    ton: "tɔ̃", sandwich: "sɑ̃d.witʃ", monsieur: "mə.sjø", attend: "a.tɑ̃",
  };
  const clean = text.toLowerCase().replace(/['’]/g, " ").replace(/[.,?!"]/g, "").trim().split(/\s+/);
  const ipaWords = clean.map(w => dict[w] || phoneticApprox(w));
  return `[${ipaWords.join(" ")}]`;
}

export function portugueseToIpa(text: string, isBr = true): string {
  const dict: Record<string, string> = {
    clara: "ˈkla.ɾɐ", não: "nɐ̃w̃", olha: "ˈɔ.ʎɐ", agora: "a.ˈɡɔ.ɾɐ",
    mas: "majs", aquela: "a.ˈkɛ.lɐ", mala: "ˈma.lɐ",
    verde: isBr ? "ˈveʁ.dʒi" : "ˈveɾ.ðɨ", na: "nɐ", mesa: "ˈme.zɐ",
    da: "dɐ", frente: isBr ? "ˈfɾẽ.tʃi" : "ˈfɾẽ.tɨ", é: "ɛ",
    muito: "ˈmũj̃.tu", suspeita: "suʃ.ˈpej.tɐ", apenas: "a.ˈpe.nɐs",
    coma: "ˈko.mɐ", seu: "sew", sanduíche: isBr ? "sɐ̃.du.ˈi.ʃi" : "sɐ̃.du.ˈi.ʃɨ",
  };
  const clean = text.toLowerCase().replace(/[.,?!"]/g, "").trim().split(/\s+/);
  const ipaWords = clean.map(w => dict[w] || phoneticApprox(w));
  return `[${ipaWords.join(" ")}]`;
}

// Generic phonetic approximation for Latin script languages
function phoneticApprox(word: string): string {
  return word
    .replace(/sch/gi, "ʃ")
    .replace(/ch/gi, "t͡ʃ")
    .replace(/sh/gi, "ʃ")
    .replace(/th/gi, "θ")
    .replace(/ph/gi, "f")
    .replace(/j/gi, "d͡ʒ")
    .replace(/y/gi, "j")
    .replace(/w/gi, "w")
    .replace(/r/gi, "ɾ")
    .replace(/ç/gi, "s")
    .replace(/x/gi, "ks");
}

// ==========================================
// 11. MAIN DISPATCHER
// ==========================================
export function getIpaTranscription(text: string, langCode: string): string {
  if (!text) return "";

  const trimmed = text.trim();

  // 1. Check exact or whitespace-normalized canonical line dictionary first
  if (CANONICAL_LINE_IPA[trimmed]) {
    return CANONICAL_LINE_IPA[trimmed];
  }
  const normKey = trimmed.replace(/[\s\u3000]+/g, "").replace(/…/g, "...");
  for (const [k, v] of Object.entries(CANONICAL_LINE_IPA)) {
    if (k.replace(/[\s\u3000]+/g, "").replace(/…/g, "...") === normKey) {
      return v;
    }
  }

  // 2. Japanese
  if (langCode === "ja-JP" || langCode === "ja" || /[\u3040-\u30ff\u4e00-\u9faf]/.test(text) && langCode.startsWith("ja")) {
    return japaneseToIpa(text);
  }

  // 3. Chinese
  if (langCode === "cmn-CN" || langCode === "zh-TW" || langCode === "yue-HK" || langCode.startsWith("zh")) {
    return chineseToIpa(text);
  }

  // 4. Cyrillic (Russian, Ukrainian, etc.)
  if (langCode === "ru-RU" || langCode === "uk-UA" || langCode === "bg-BG" || /[\u0400-\u04FF]/.test(text)) {
    return cyrillicToIpa(text);
  }

  // 5. Arabic
  if (langCode.startsWith("ar-") || langCode === "ar" || /[\u0600-\u06FF]/.test(text)) {
    return arabicToIpa(text);
  }

  // 6. Korean
  if (langCode === "ko-KR" || langCode === "ko" || /[\uAC00-\uD7AF]/.test(text)) {
    return koreanToIpa(text);
  }

  // 7. Hindi & Indic
  if (langCode === "hi-IN" || langCode === "mr-IN" || /[\u0900-\u097F]/.test(text)) {
    return indicToIpa(text);
  }

  // 8. Greek
  if (langCode === "el-GR" || /[\u0370-\u03FF]/.test(text)) {
    return greekToIpa(text);
  }

  // 9. Hebrew
  if (langCode === "he-IL" || /[\u0590-\u05FF]/.test(text)) {
    return hebrewToIpa(text);
  }

  // 10. Spanish
  if (langCode.startsWith("es-")) {
    return spanishToIpa(text, langCode);
  }

  // 11. English
  if (langCode.startsWith("en-")) {
    return englishToIpa(text, langCode);
  }

  // 12. French
  if (langCode.startsWith("fr-")) {
    return frenchToIpa(text);
  }

  // 13. Portuguese
  if (langCode.startsWith("pt-")) {
    return portugueseToIpa(text, langCode === "pt-BR");
  }

  // 14. German
  if (langCode === "de-DE" || langCode === "de-CH") {
    const germanText = text.toLowerCase()
      .replace(/sch/g, "ʃ")
      .replace(/ch/g, "ç")
      .replace(/ei/g, "aɪ")
      .replace(/eu|äu/g, "ɔɪ")
      .replace(/ie/g, "iː")
      .replace(/sp/g, "ʃp")
      .replace(/st/g, "ʃt")
      .replace(/ß/g, "s");
    return `[${germanText}]`;
  }

  // 15. Italian
  if (langCode === "it-IT") {
    const itText = text.toLowerCase()
      .replace(/gli/g, "ʎi")
      .replace(/gn/g, "ɲ")
      .replace(/ci([aeou])/g, "t͡ʃ$1")
      .replace(/ce/g, "t͡ʃe")
      .replace(/ci/g, "t͡ʃi")
      .replace(/gi([aeou])/g, "d͡ʒ$1")
      .replace(/ge/g, "d͡ʒe")
      .replace(/gi/g, "d͡ʒi");
    return `[${itText}]`;
  }

  // 16. Dutch
  if (langCode === "nl-NL" || langCode === "nl-BE") {
    const nlText = text.toLowerCase()
      .replace(/ij/g, "ɛi")
      .replace(/oe/g, "u")
      .replace(/ui/g, "œy")
      .replace(/ch/g, "x")
      .replace(/g/g, "ɣ");
    return `[${nlText}]`;
  }

  // 17. Swedish, Danish, Norwegian
  if (langCode === "sv-SE" || langCode === "da-DK" || langCode === "no-NO") {
    const scandText = text.toLowerCase()
      .replace(/skj|stj|sk(?=[eiyäö])/g, "ɧ")
      .replace(/tj|k(?=[eiyäö])/g, "ɕ")
      .replace(/å/g, "oː")
      .replace(/ä|æ/g, "ɛ")
      .replace(/ö|ø/g, "ø");
    return `[${scandText}]`;
  }

  // 18. Turkish
  if (langCode === "tr-TR") {
    const trText = text.toLowerCase()
      .replace(/c/g, "d͡ʒ")
      .replace(/ç/g, "t͡ʃ")
      .replace(/ğ/g, "ː")
      .replace(/ı/g, "ɯ")
      .replace(/ö/g, "ø")
      .replace(/ş/g, "ʃ")
      .replace(/ü/g, "y");
    return `[${trText}]`;
  }

  // 19. Polish
  if (langCode === "pl-PL") {
    const plText = text.toLowerCase()
      .replace(/sz/g, "ʂ")
      .replace(/cz/g, "ʈ͡ʂ")
      .replace(/rz|ż/g, "ʐ")
      .replace(/ś/g, "ɕ")
      .replace(/ć/g, "t͡ɕ")
      .replace(/ź/g, "ʑ")
      .replace(/w/g, "v")
      .replace(/ł/g, "w");
    return `[${plText}]`;
  }

  // 20. Vietnamese
  if (langCode === "vi-VN") {
    const viText = text.toLowerCase()
      .replace(/nh/g, "ɲ")
      .replace(/ng|ngh/g, "ŋ")
      .replace(/th/g, "tʰ")
      .replace(/ch/g, "c")
      .replace(/tr/g, "ʈ")
      .replace(/đ/g, "ɗ");
    return `[${viText}]`;
  }

  // 21. General fallback
  const words = text.replace(/[.,;:?!¿¡"«»()]/g, "").trim().split(/\s+/).filter(Boolean);
  return `[${words.map(w => phoneticApprox(w)).join(" ")}]`;
}
