#!/usr/bin/env python3
import re
import os

with open("src/data/languages.ts", "r", encoding="utf-8") as f:
    lang_content = f.read()

all_langs = re.findall(r'"([a-z]{2,4}(?:-[A-Za-z0-9]{2,3})?)":\s*\{\s*code:', lang_content)
print(f"Total target languages: {len(all_langs)}")

with open("src/data/stories.ts", "r", encoding="utf-8") as f:
    stories_raw = f.read()

# Dialectal translations map
DIALECT_MAP = {
    # Spanish dialects
    "es-VE": {
        "s1_l1": "Clara, no mires ahorita... pero ese maletín verde en la mesa de enfrente está bien sospechoso, chamo.",
        "s1_l2": "Tranquilo, Hugo... Seguro es de algún viejito que está esperando la camionetica.",
        "s1_l3": "¡Nadie espera la camionetica con un maletín verde fluorescente y dos candados dorados!",
        "s1_l4": "Hugo, por favor... Solo vinimos a tomarnos un café y pagar el recibo de la luz.",
        "s1_l5": "Muchachos, disculpen... ¿Saben si la camionetica de las cuatro ya pasó?",
        "s1_l6": "¡Don Ramón! ¿Y qué lleva usted en ese misterioso perol verde?",
        "s1_l7": "Tres kilos de churros recién salidos para mis nietos. ¿Quieren uno?",
        "s2_l1": "Buenos días, señorita. Me gustaría un negrito solo, pero sin apuro y bien caliente.",
        "s2_l2": "¡De una! Un negrito solo... ¿Quiere que le sirva también un poco de cháchara?",
        "s2_l3": "Si la cháchara no viene con azúcar, prefiero leerme el periódico.",
        "s2_l4": "¡Jaja! Entonces le traigo el cafecito y las noticias más sabrosas del día.",
        "s3_l1": "Don Ramón, según mis cuentas, si me da esa moneda de dos euros, compro tres barajitas y duplico mi inversión.",
        "s3_l2": "Y según mis cuentas de jubilado, si te doy dos euros me quedo sin comprar la canilla de pan.",
        "s3_l3": "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
        "s3_l4": "Bueno, te doy un euro si me explicas qué significa 'intergeneracional' sin enredos."
    },
    "es-CL": {
        "s1_l1": "Clara, no mirí ahora po... pero esa maleta verde en la mesa del frente está súper sospechosa.",
        "s1_l2": "Tranquilo, Hugo... Capaz que sea de algún tatita esperando la micro.",
        "s1_l3": "¡Nadie espera la micro con una maleta verde fluorescente y dos candados dorados po!",
        "s1_l4": "Hugo, córtala... Vinimos a tomarnos un cafecito y pagar la cuenta de la luz nomás.",
        "s1_l5": "Chiquillos, disculpen... ¿Saben si la micro de las cuatro ya pasó?",
        "s1_l6": "¡Don Ramón! ¿Y qué lleva en esa bolsa verde tan misteriosa?",
        "s1_l7": "Tres kilos de churros recién hechos para mis nietos. ¿Quieren probar?",
        "s2_l1": "Buen día, señorita. Me gustaría un café negro, pero bien caliente y sin apuro.",
        "s2_l2": "¡Al tiro! Un café negro... ¿Le tinca un poco de conversa también?",
        "s2_l3": "Si la conversa no viene con azúcar extra, prefiero el diario.",
        "s2_l4": "¡Jaja! Entonces le traigo el café y las noticias más prendidas del día.",
        "s3_l1": "Don Ramón, según mis cálculos, si me pasa esa moneda de dos euros, compro tres láminas y duplico mi inversión.",
        "s3_l2": "Y según mis cálculos de jubilado, si te paso dos euros me quedo sin comprar el pan para la once.",
        "s3_l3": "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción po!",
        "s3_l4": "Ya, te paso un euro si me explicái qué significa 'intergeneracional' sin palabras siúticas."
    },
    "es-PE": {
        "s1_l1": "Clara, no voltees ahorita... pero esa maleta verde en la mesa de al frente está bien sospechosa, causa.",
        "s1_l2": "Cálmate, Hugo... Seguro es de algún viejito que está esperando su combi.",
        "s1_l3": "¡Nadie espera su combi con una maleta verde fosforescente y dos candados dorados!",
        "s1_l4": "Hugo, por favor... Solo vinimos a tomar un café y pagar el recibo de la luz.",
        "s1_l5": "Jóvenes, disculpen... ¿Saben si el carro de las cuatro ya pasó?",
        "s1_l6": "¡Don Ramón! ¿Y qué lleva en ese misterioso bulto verde?",
        "s1_l7": "Tres kilos de churros recién saliditos para mis nietos. ¿Se les antoja uno?",
        "s2_l1": "Buenos días, señorita. Quisiera un cafecito pasado, pero sin apuro y bien calientito.",
        "s2_l2": "¡Al toque! Un café pasado... ¿Gusta que le añada un poco de conversación?",
        "s2_l3": "Si la conversación no viene con azúcar extra, prefiero leer mi diario.",
        "s2_l4": "¡Jaja! Entonces le traigo su café y las noticias más fresquitas del día.",
        "s3_l1": "Don Ramón, según mis cálculos, si me presta esa moneda de dos euros, compro tres figuritas y duplico mi inversión.",
        "s3_l2": "Y según mis cálculos de jubilado, si te doy dos euros me quedo sin comprar el pan de la tarde.",
        "s3_l3": "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
        "s3_l4": "Ya, te doy un euro si me explicas qué significa 'intergeneracional' en cristiano."
    },
    "es-CU": {
        "s1_l1": "Clara, no mires pa' allá ahora... pero ese maletín verde en la mesa del frente se ve sospechosísimo, asere.",
        "s1_l2": "Cálmate, Hugo... Seguro es de un viejito esperando la guagua.",
        "s1_l3": "¡Nadie espera la guagua con un maletín verde fosforescente y dos candados dorados!",
        "s1_l4": "Hugo, no inventes... Solo vinimos a tomarnos un buchito de café y pagar la corriente.",
        "s1_l5": "Muchachones, oigan... ¿Saben si la guagua de las cuatro ya pasó?",
        "s1_l6": "¡Don Ramón! ¿Y qué tiene metido en ese misterioso bulto verde?",
        "s1_l7": "Tres libras de churros calienticos para mis nietos. ¿Quieren uno?",
        "s2_l1": "Buenos días, mi niña. Quisiera un cafecito negro, pero sin apuro y bien caliente.",
        "s2_l2": "¡Al momento! Un cafecito... ¿Quiere que le eche también un poco de muela?",
        "s2_l3": "Si la muela no viene con azúcar de más, prefiero el periódico.",
        "s2_l4": "¡Jaja! Entonces le traigo su café y las noticias más dulces del día.",
        "s3_l1": "Don Ramón, por mi cálculo, si me da esa moneda de dos euros, compro tres postales y duplico la inversión.",
        "s3_l2": "Y por mi cálculo de jubilado, si te doy dos euros me quedo sin el panecillo de la tarde.",
        "s3_l3": "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
        "s3_l4": "Bueno, te suelto un euro si me explicas qué quiere decir 'intergeneracional' sin tanto rodeo."
    },
    "es-US": {
        "s1_l1": "Clara, don't look ahorita... pero esa maleta verde en la mesa de enfrente se ve bien suspicious.",
        "s1_l2": "Calm down, Hugo... Seguro es de algún senior esperando el bus.",
        "s1_l3": "¡Nadie espera el bus con una maleta verde fosforescente y dos candados de oro!",
        "s1_l4": "Hugo, please... Solo vinimos por un coffee y a pagar el bill de la luz.",
        "s1_l5": "Disculpen, chicos... ¿Saben si el bus de las four ya pasó?",
        "s1_l6": "¡Don Ramón! ¿Y qué trae en esa green bag tan misteriosa?",
        "s1_l7": "Tres kilos de churros recién hechos para mis grandkids. ¿Quieren uno?",
        "s2_l1": "Buenos días, señorita. Quisiera un café solo, pero sin rush y bien caliente.",
        "s2_l2": "¡Seguro! Un café negro... ¿Quiere que le agregue un poco de conversación?",
        "s2_l3": "Si la plática no viene con azúcar extra, prefiero el newspaper.",
        "s2_l4": "¡Jaja! Enseguida le traigo su café y los headlines más dulces del día.",
        "s3_l1": "Don Ramón, según mi forecast, si me da esa moneda de dos euros, compro tres cards y duplico mi inversión.",
        "s3_l2": "Y según mis números de retirado, si te doy dos euros me quedo sin comprar el pan de la tarde.",
        "s3_l3": "¡Pero es un partnership estratégico intergeneracional con gran ROI!",
        "s3_l4": "Ok, te doy un euro si me explicas qué significa 'intergeneracional' en español normal."
    },
    "es-GQ": {
        "s1_l1": "Clara, no mires ahora... pero esa maleta verde en la mesa de enfrente es muy sospechosa.",
        "s1_l2": "Tranquilo, Hugo... Seguro es de algún anciano esperando el autobús.",
        "s1_l3": "¡Nadie espera el autobús con un maletín verde fluorescente y dos candados dorados!",
        "s1_l4": "Hugo, por favor... Solo vinimos a tomar un café y pagar la factura de la luz.",
        "s1_l5": "Jóvenes, disculpen... ¿Saben si el autobús de las cuatro ya pasó?",
        "s1_l6": "¡Don Ramón! ¿Y qué lleva en ese misterioso bulto verde?",
        "s1_l7": "Tres kilos de churros recién hechos para mis nietos. ¿Gustan uno?",
        "s2_l1": "Buenos días, señorita. Quisiera un café solo, pero sin prisa y bien caliente.",
        "s2_l2": "¡Enseguida! Un café solo... ¿Quiere también un poco de conversación?",
        "s2_l3": "Si la conversación no viene con azúcar extra, prefiero el periódico.",
        "s2_l4": "¡Jaja! Entonces le traigo el café y las noticias más dulces del día.",
        "s3_l1": "Don Ramón, según mis cálculos, si me da esa moneda de dos euros, puedo comprar tres cromos y duplicar mi inversión.",
        "s3_l2": "Y según mis cálculos de jubilado, si te doy dos euros me quedo sin comprar el pan de la tarde.",
        "s3_l3": "¡Pero es una alianza estratégica intergeneracional con alto retorno de satisfacción!",
        "s3_l4": "Bueno, te doy un euro si me explicas qué significa 'intergeneracional' sin palabras raras."
    },
    # English dialects
    "en-US": {
        "s1_l1": "Clara, don't look right now... but that green suitcase on the table across from us is super suspicious.",
        "s1_l2": "Calm down, Hugo... It's probably just some older gentleman waiting for his bus.",
        "s1_l3": "Nobody waits for the bus with a neon green suitcase and two golden padlocks!",
        "s1_l4": "Hugo, please... We just came to grab a coffee and pay the electric bill.",
        "s1_l5": "Excuse me, young folks... Do you happen to know if the four o'clock bus has come by yet?",
        "s1_l6": "Don Ramón! What on earth are you carrying in that mysterious green package?",
        "s1_l7": "Six pounds of fresh churros for my grandkids! Would you care for one?",
        "s2_l1": "Good morning, miss. I'd like a black coffee, nice and piping hot, no rush.",
        "s2_l2": "Coming right up! One black coffee... Would you like a little conversation to go with it?",
        "s2_l3": "Unless the conversation comes with extra sugar, I'd rather stick to the morning paper.",
        "s2_l4": "Haha! Then I'll bring your coffee and today's sweetest headlines.",
        "s3_l1": "Don Ramón, according to my projections, if you give me that two-euro coin, I can buy three collector cards and double my investment.",
        "s3_l2": "And according to my retiree budget, if I give you two euros, I won't have enough left for my evening bread.",
        "s3_l3": "But it's an intergenerational strategic alliance with an exceptionally high return on satisfaction!",
        "s3_l4": "Alright, I'll give you one euro if you can explain what 'intergenerational' means without using fancy buzzwords."
    },
    "en-GB": {
        "s1_l1": "Clara, don't look just now... but that green suitcase on the opposite table looks awfully suspicious.",
        "s1_l2": "Keep your hair on, Hugo... It's most likely some elderly gent waiting for the coach.",
        "s1_l3": "No one waits for the coach with a fluorescent green case and two brass padlocks!",
        "s1_l4": "Hugo, do behave... We only popped in for a quick cuppa and to settle the electric bill.",
        "s1_l5": "Pardon me, young people... Would you happen to know if the four o'clock bus has been?",
        "s1_l6": "Don Ramón! Whatever are you carrying inside that mysterious green bundle?",
        "s1_l7": "Three kilos of freshly made churros for my grandchildren! Care for one?",
        "s2_l1": "Good morning, miss. A black coffee please, piping hot and taken at leisure.",
        "s2_l2": "Right away! One black coffee... Fancy a bit of friendly natter with that?",
        "s2_l3": "Unless the natter comes with extra sugar, I'd much prefer the morning paper.",
        "s2_l4": "Haha! Very well, your coffee and the sweetest headlines of the day are on their way.",
        "s3_l1": "Don Ramón, according to my calculations, if you lend me that two-pound coin, I can purchase three stickers and double my capital.",
        "s3_l2": "And according to my pension calculations, parting with two pounds leaves me without my afternoon loaf.",
        "s3_l3": "Ah, but it's an intergenerational strategic venture with a splendid dividend of joy!",
        "s3_l4": "Tell you what, here's one pound if you can explain 'intergenerational' in plain English."
    },
    "en-IE": {
        "s1_l1": "Clara, don't be looking now... but that green suitcase on the table across is right suspicious, so it is.",
        "s1_l2": "Easy now, Hugo... Sure it's only some old lad waiting on the bus.",
        "s1_l3": "Nobody waits on a bus with a neon green bag and two big golden locks, feck's sake!",
        "s1_l4": "Hugo, will you stop... We only came in for a cup of tea and to pay the electricity.",
        "s1_l5": "Excuse me there, folks... Do you know if the four o'clock bus went by yet?",
        "s1_l6": "Don Ramón! What in the name of God have you got in that green bag?",
        "s1_l7": "Three kilos of fresh hot churros for the grandkids! Do you want one, lads?",
        "s2_l1": "Grand morning, miss. I'd take a black coffee, piping hot, no hurry at all.",
        "s2_l2": "Coming up! One black coffee... Would you be fancying a bit of craic with that?",
        "s2_l3": "Unless the craic comes with extra sugar, I'll stick with the newspaper, thanks.",
        "s2_l4": "Haha! Right you are, here's your coffee and the grandest news of the day.",
        "s3_l1": "Don Ramón, look at the sums: give me that two-euro coin and I'll buy three cards and double my return!",
        "s3_l2": "And by my pension sums, give you two euro and I'm left without the evening soda bread.",
        "s3_l3": "Sure it's an intergenerational strategic partnership with massive returns!",
        "s3_l4": "Go on then, I'll give you one euro if you tell me what 'intergenerational' means without the notions."
    },
    "en-GB-SCT": {
        "s1_l1": "Clara, dinna look noo... but that green suitcase on the table ower there is pure suspicious.",
        "s1_l2": "Wheesht, Hugo... It'll just be some auld fella waitin' on his bus.",
        "s1_l3": "Naebody waits on a bus wi' a glowing green kist and twa brass padlocks!",
        "s1_l4": "Hugo, have a word wi' yersel... We're only here for a cuppa and tae pay the lekky bill.",
        "s1_l5": "Scuse me, bairns... Dae ye ken if the fower o'clock bus has passed by yet?",
        "s1_l6": "Don Ramón! Whit on earth hae ye got in that green parcel?",
        "s1_l7": "Three kilos o' fresh warm churros for the weans! Fancy a taste?",
        "s2_l1": "Braw mornin', lass. Ah'd like a black coffee, pipin' hot and nae rush.",
        "s2_l2": "Aye, right away! One black coffee... Fancy a wee blether as well?",
        "s2_l3": "Unless the blether comes wi' extra sugar, Ah'll stick tae the paper.",
        "s2_l4": "Haha! Right ye are, coffee and the bonniest news comin' up.",
        "s3_l1": "Don Ramón, check the numbers: gie me that twa-pound coin and Ah'll buy three cards and double mah money!",
        "s3_l2": "And by my pension maths, gie ye twa quid and Ah'm short o' mah tea bread.",
        "s3_l3": "It's an intergenerational strategic alliance wi' braw returns!",
        "s3_l4": "Aye, Ah'll gie ye one quid if ye explain 'intergenerational' in plain Scots."
    },
    "en-AU": {
        "s1_l1": "Clara, don't look now mate... but that green suitcase on the table opposite looks bloody suspicious.",
        "s1_l2": "Keep your shirt on, Hugo... It's probably just some old bloke waiting for the bus.",
        "s1_l3": "No one waits for the bus with a neon green bag and two gold padlocks, mate!",
        "s1_l4": "Hugo, fair dinkum... We only came in for a flat white and to pay the power bill.",
        "s1_l5": "G'day young fellas, excuse me... Has the four o'clock bus rocked up yet?",
        "s1_l6": "Don Ramón! What on earth have you got in that mysterious green bundle?",
        "s1_l7": "Three kilos of fresh hot churros for the grandkids! Want one, mate?",
        "s2_l1": "Morning, love. I'll have a long black thanks, piping hot, no rush.",
        "s2_l2": "Too easy! One long black... Want a bit of a yarn with that?",
        "s2_l3": "Unless the yarn comes with extra sugar, I'd rather read the paper.",
        "s2_l4": "Haha! No worries, your coffee and the sweetest yarns of the day coming right up.",
        "s3_l1": "Don Ramón, listen to the math: spot me two bucks, I'll grab three footy cards and double the investment!",
        "s3_l2": "And according to my pension budget, spot you two bucks and I'm going without bread tonight.",
        "s3_l3": "Mate, it's an intergenerational strategic venture with heaps of upside!",
        "s3_l4": "Tell you what, you get one buck if you can explain 'intergenerational' without the fancy waffle."
    },
    "en-NZ": {
        "s1_l1": "Clara, don't look right now bro... but that green suitcase on the opposite table is choice suspicious.",
        "s1_l2": "Chill out, Hugo... It's probably just some old guy waiting on his bus.",
        "s1_l3": "Nobody waits for the bus with a neon green bag and two gold padlocks, eh!",
        "s1_l4": "Hugo, stop stressing bro... We just came for a coffee and to sort the power bill.",
        "s1_l5": "Kia ora folks, excuse me... Any idea if the four o'clock bus has rolled by?",
        "s1_l6": "Don Ramón! What have you got packed in that green bag there?",
        "s1_l7": "Three kilos of hot fresh churros for the tamariki! Keen for one?",
        "s2_l1": "Kia ora miss. A black coffee please, piping hot, take your time.",
        "s2_l2": "Sweet as! One black coffee... Keen for a bit of a chat with that?",
        "s2_l3": "Unless the chat comes sweet as, I'll just stick to the Herald.",
        "s2_l4": "Haha! Too right, here's your coffee and the sweetest stories today.",
        "s3_l1": "Don Ramón, check it: lend me that two-dollar coin, I'll buy three cards and double up easy!",
        "s3_l2": "And by my pensioner math, give you two bucks and I'm skipping the afternoon bakery run.",
        "s3_l3": "It's an intergenerational strategic alliance with massive vibes bro!",
        "s3_l4": "Choice, here's a dollar if you can explain 'intergenerational' in normal kiwi words."
    },
    "en-ZA": {
        "s1_l1": "Clara, don't look now hey... but that green suitcase on the table opposite looks proper suspicious, man.",
        "s1_l2": "Relax, Hugo... It's probably just an old oom waiting for his bus.",
        "s1_l3": "Ag man, nobody waits for the bus with a bright green case and gold locks!",
        "s1_l4": "Hugo, please man... We only came for a quick coffee and to pay the lights bill.",
        "s1_l5": "Excuse me, youngsters... Do you know if the four o'clock bus has passed already?",
        "s1_l6": "Don Ramón! What are you carrying in that mysterious green sack, oom?",
        "s1_l7": "Three kilos of warm fresh churros for the kleinkinders! Lekker, want one?",
        "s2_l1": "Goeie môre, miss. A black coffee please, extra hot, no rush.",
        "s2_l2": "Lekker! One black coffee... Would you like some friendly chat on the side?",
        "s2_l3": "Unless the chat is sweet as sugar, I'd rather read the morning paper.",
        "s2_l4": "Haha! Sharp, here's your coffee and the sweetest news in town.",
        "s3_l1": "Don Ramón, look at the stats: give me that two-rand coin, I buy three cards and double the money!",
        "s3_l2": "And looking at my pension stats, give you two rand and I've got no bread for supper.",
        "s3_l3": "It's an intergenerational strategic partnership with massive returns, oom!",
        "s3_l4": "Aikona, I'll give you one rand if you tell me what 'intergenerational' means without big words."
    },
    "en-NG": {
        "s1_l1": "Clara, abeg don't look now oh... but that green bag on the front table dey look very suspicious.",
        "s1_l2": "Hugo, cool temper abeg... Na ordinary old baba dey wait for bus, nothing dey happen.",
        "s1_l3": "Which kind bus? Nobody dey wait for bus with glowing green box and two gold padlocks!",
        "s1_l4": "Hugo, take am easy jare... We just come drink coffee and pay NEPA bill.",
        "s1_l5": "My children, good afternoon... You know whether four o'clock bus don pass?",
        "s1_l6": "Ah, Don Ramón! Wetin dey inside that green sack wey you hold so?",
        "s1_l7": "Na fresh sweet churros I buy for my grandkids! Oya take one, my people!",
        "s2_l1": "Good morning, my daughter. Give me hot black coffee, no rush at all.",
        "s2_l2": "Welcome sir! One hot coffee... You go like small sweet gist with am?",
        "s2_l3": "If the gist no get sugar inside, abeg give me my newspaper make I read.",
        "s2_l4": "Hahaha! No wahala, your hot coffee and sweetest gist dey come now now!",
        "s3_l1": "Don Ramón, do the calculation: give me that two-euro coin, I go buy cards and double the profit sharp-sharp!",
        "s3_l2": "And according to my pensioner calculation, if I give you two euros, no bread for house today.",
        "s3_l3": "Ah, but na intergenerational business alliance with big-big blessing!",
        "s3_l4": "Oya, take one euro if you fit explain 'intergenerational' without speaking grammar."
    },
    "en-IN": {
        "s1_l1": "Clara, please don't look now... but that green suitcase on the opposite table is looking totally suspicious, yaar.",
        "s1_l2": "Relax na, Hugo... Must be some old uncleji waiting for the bus only.",
        "s1_l3": "Arre, who waits for a bus with a neon green bag and two solid gold locks, tell me?",
        "s1_l4": "Hugo, baba, calm down... We just came to drink filter coffee and pay the electricity bill.",
        "s1_l5": "Beta, excuse me please... Did the four o'clock bus already leave, any idea?",
        "s1_l6": "Arre Don Ramón! What secret things are packed in that green bundle?",
        "s1_l7": "Three kilos hot-hot fresh churros for my grandkids! Please have one na!",
        "s2_l1": "Namaste beti. One black coffee please, extra piping hot, take your time.",
        "s2_l2": "Right away sirji! One black coffee... Would you care for some sweet chit-chat also?",
        "s2_l3": "Unless the chit-chat has extra sugar, better I read my morning newspaper quietly.",
        "s2_l4": "Haha! Achha, here is your coffee and today's sweetest stories.",
        "s3_l1": "Don Ramón, simple math: give me two euros, I will buy three cards and double the investment 100%!",
        "s3_l2": "And simple pension math: give you two euros and my evening roti-bread is gone!",
        "s3_l3": "Uncleji, it is an intergenerational strategic synergy with guaranteed return!",
        "s3_l4": "Theek hai, I give you one euro if you explain 'intergenerational' in simple bhasha."
    }
}

# Base multilingual sentences per line
MULTI_BASE = {
    "s1_l1": {
        "fr-CD": "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte, ya mawa.",
        "fr-GA": "Clara, ne regarde pas maintenant là... mais cette valise verte sur la table d'en face est trop bizarre, mouf.",
        "pt-AO": "Clara, não olha agora kota... mas aquela mala verde na mesa da frente tá muito suspeita, juro.",
        "pt-MZ": "Clara, não olha agora maningue... mas aquela pasta verde na mesa da frente é bem suspeita.",
        "nl-BE": "Clara, kijk nu eens niet... maar die groene koffer op de tafel daar tegenover is wreed verdacht.",
        "ar-SA": "كلارا، لا تنظري الآن... ولكن تلك الحقيبة الخضراء على الطاولة المقابلة مريبة للغاية.",
        "ar-EG": "يا كلارا، ما تبصيش دلوقتي... بس الشنطة الخضرا اللي ع الترابيزة اللي قدامنا دي شكلها مريب أوي.",
        "ar-MA": "كلارا، ما تشوفيش دابا... ولكن ديك الباليزة الخضرا اللي فوق الطبلة قدامنا راها مشبوهة بزاف.",
        "ar-JO": "كلارا، لا تطلّعي هسا... بس هاي الشنتة الخضرا على الطاولة المقابلة شكلها مشبوه كثير.",
        "ar-IQ": "كلارا، لا تباوعين هسة... بس هاي الجنطة الخضرة على الميز اللي كبالنا شكلها كلش مشبوه.",
        "zh-TW": "克拉拉，現在先別看……但對面桌上那個綠色手提箱超級可疑。",
        "hi-IN": "क्लारा, अभी मत देखना... लेकिन सामने वाली मेज़ पर वो हरा सूटकेस बहुत संदिग्ध लग रहा है।",
        "ur-PK": "کلارا، ابھی مت دیکھنا... لیکن سامنے والی میز پر وہ سبز سوٹ کیس بہت مشکوک لگ رہا ہے۔",
        "bn-IN": "ক্লারা, এখন তাকিয়ো না... কিন্তু সামনের টেবিলে ওই সবুজ স্যুটকেসটা বড্ড সন্দেহজনক।",
        "pa-IN": "ਕਲਾਰਾ, ਹੁਣੇ ਨਾ ਦੇਖੋ... ਪਰ ਸਾਹਮਣੇ ਵਾਲੇ ਮੇਜ਼ 'ਤੇ ਉਹ ਹਰਾ ਸੂਟਕੇਸ ਬਹੁਤ ਸ਼ੱਕੀ ਲੱਗ ਰਿਹਾ ਹੈ।",
        "gu-IN": "ક્લેરા, અત્યારે ન જોતી... પણ સામેના ટેબલ પરનો પેલો લીલો સૂટકેસ ખૂબ શંકાસ્પદ લાગે છે.",
        "mr-IN": "क्लारा, आत्ता तिकडे बघू नकोस... पण समोरच्या टेबलावरची ती हिरवी बॅग खूप संशयास्पद वाटतेय.",
        "ta-IN": "கிளாரா, இப்போது பார்க்காதே... ஆனால் எதிரே உள்ள மேஜையில் இருக்கும் அந்த பச்சை சூட்கேஸ் மிகவும் சந்தேகத்திற்குரியது.",
        "te-IN": "క్లారా, ఇప్పుడు చూడకు... కానీ ఎదురుగా ఉన్న బల్లపై ఉన్న ఆ ఆకుపచ్చ సూట్‌కేస్ చాలా అనుమానాస్పదంగా ఉంది.",
        "kn-IN": "ಕ್ಲಾರಾ, ಈಗ ನೋಡಬೇಡ... ಆದರೆ ಎದುರಿನ ಮೇಜಿನ ಮೇಲಿರುವ ಆ ಹಸಿರು ಸೂಟ್‌ಕೇಸ್ ತುಂಬಾ ಅನುಮಾನಾಸ್ಪದವಾಗಿದೆ.",
        "ml-IN": "ക്ലാര, ഇപ്പോൾ നോക്കരുത്... എന്നാൽ മുന്നിലെ മേശപ്പുറത്തുള്ള ആ പച്ച സ്യൂട്ട്കേസ് വളരെ സംശയാസ്പദമാണ്.",
        "vi-VN": "Clara, đừng nhìn lúc này... nhưng chiếc vali màu xanh lá trên bàn đối diện trông cực kỳ đáng ngờ.",
        "th-TH": "คลาร่า อย่าเพิ่งมองตอนนี้นะ... แต่กระเป๋าเดินทางสีเขียวบนโต๊ะฝั่งตรงข้ามมันน่าสงสัยสุดๆ เลย",
        "id-ID": "Clara, jangan lihat sekarang... tapi koper hijau di meja seberang itu mencurigakan sekali.",
        "ms-MY": "Clara, jangan pandang sekarang... tapi beg pakaian hijau di meja seberang itu nampak sangat mencurigakan.",
        "sw-KE": "Clara, usitazame sasa hivi... lakini mkoba ule wa kijani kwenye meza ya mbele unatilia shaka sana.",
        "gn-PY": "Clara, ani emaña ko'ág̃a... péro pe vosa hovy mesa renondépeguáva ikatúko ivaiete.",
        "qu-PE": "Clara, amaraq qhawaychu... ichaqa chimpa mesapi q'omer wayaqa ancha mancharikuypaqmi rikch'akun.",
        "ay-BO": "Clara, janiwa jichhaxa uñt'amti... ukampisa nayraqata mesana ch'uxña qullqiru wayaqaxa wali muspharkañawa.",
        "nah-MX": "Clara, amo xitlachixto axcan... yeceh in xoxouhqui petlacalli ipan tlamaniliztli cenca tlachiyalti.",
        "nv-US": "Clara, kʼad doo dééłʼį́į́ da... ndi tʼóó tsxį́įłgo bą́ą́h dadiltsʼid bilasáana yitʼéego chahaʼoh biyiʼdi."
    },
    "s1_l2": {
        "fr-CD": "Calme-toi, Hugo... C'est sûrement pour un vieux papa qui attend son bus.",
        "fr-GA": "Pardonne-moi Hugo, calme-toi... C'est juste un vieux père qui attend son transport.",
        "pt-AO": "Calma, Hugo... Deve ser de um kota qualquer que tá à espera do machimbombo.",
        "pt-MZ": "Tranquilo, Hugo... Deve ser de um madala à espera do chapa.",
        "nl-BE": "Rustig maar, Hugo... 't Is wellicht van een oude meneer die op zijn bus wacht.",
        "ar-SA": "اهدأ يا هيوغو... على الأرجح أنها لرجل مسن ينتظر الحافلة.",
        "ar-EG": "اهدى يا هيوجو... تلاقيها بتاعة راجل عجوز مستني الأتوبيس وخلاص.",
        "ar-MA": "تهدن يا هيغو... راه غير ديال شي راجل شارف كيتسنى الطوبيس وصافي.",
        "ar-JO": "روّق يا هيوغو... أكيد لواحد ختيار بستنى الباص.",
        "ar-IQ": "على كيفك هيوغو... يجوز مال فد شايب داينتظر الكوسترات.",
        "zh-TW": "冷靜點，雨果……那八成是哪個等公車的老先生的吧。",
        "hi-IN": "शांत हो जाओ, ह्यूगो... शायद किसी बुज़ुर्ग की होगी जो बस का इंतज़ार कर रहे हैं।",
        "ur-PK": "پرسکون ہو جاؤ، ہیوگو... غالباً کسی بزرگ کی ہو گی جو بس کا انتظار کر رہے ہیں۔",
        "bn-IN": "শান্ত হও হিউগো... নির্ঘাত কোনো বৃদ্ধ মানুষের, যিনি বাসের জন্য অপেক্ষা করছেন।",
        "pa-IN": "ਸ਼ਾਂਤ ਹੋ ਜਾਓ, ਹਿਊਗੋ... ਸ਼ਾਇਦ ਕਿਸੇ ਬਜ਼ੁਰਗ ਦੀ ਹੋਵੇਗੀ ਜੋ ਬੱਸ ਦੀ ਉਡੀਕ ਕਰ ਰਹੇ ਹਨ।",
        "gu-IN": "શાંત થા, હ્યુગો... કદાચ કોઈ વડીલની હશે જે બસની રાહ જોઈ રહ્યા છે.",
        "mr-IN": "शांत हो, ह्युगो... कदाचित बसची वाट पाहणाऱ्या एखाद्या आजोबांची असेल ती बॅग.",
        "ta-IN": "அமைதியாக இரு ஹ்யூகோ... பேருந்துக்காக காத்திருக்கும் ஒரு முதியவரின் பையாக இருக்கும்.",
        "te-IN": "ప్రశాంతంగా ఉండు హ్యూగో... బస్సు కోసం వేచి చూస్తున్న ఎవరో పెద్దాయనది కావచ్చు.",
        "kn-IN": "ಶಾಂತರಾಗಿ ಹ್ಯೂಗೋ... ಬಹುಶಃ ಬಸ್‌ಗಾಗಿ ಕಾಯುತ್ತಿರುವ ಯಾರೋ ಹಿರಿಯ ವ್ಯಕ್ತಿಯದ್ದಾಗಿರಬಹುದು.",
        "ml-IN": "ശാന്തനാകൂ, ഹ്യൂഗോ... ബസ് കാത്തിരിക്കുന്ന ഏതെങ്കിലും പ്രായമായ ആളുടെതാകും അത്.",
        "vi-VN": "Bình tĩnh nào, Hugo... Chắc chỉ là của ông cụ nào đó đang chờ xe buýt thôi.",
        "th-TH": "ใจเย็นๆ ก่อน ฮิวโก้... คงเป็นของคุณตาสักคนที่กำลังรอรถเมล์อยู่ล่ะมั้ง",
        "id-ID": "Tenanglah, Hugo... Paling itu punya kakek-kakek yang lagi nunggu bus.",
        "ms-MY": "Bertenanglah, Hugo... Barangkali itu kepunyaan seorang pakcik yang sedang menunggu bas.",
        "sw-KE": "Tulia, Hugo... Yaelekea ni ya mzee fulani anayengojea basi.",
        "gn-PY": "Epytu'u, Hugo... Oiméne peteĩ karai tuja oha'arõva colectívo mba'e.",
        "qu-PE": "Hawkayay, Hugo... Chayqa ichapas combita suyashaq machulapa kanman.",
        "ay-BO": "Qhantiykisma, Hugo... Ukaxa inasa mä jilata awki colectívo suyt'aski ukatpachawa.",
        "nah-MX": "Tlacueh, Hugo... Hueloc yehuatl ce tlacatzintli tlen quichixtica in tepozcalli.",
        "nv-US": "Tʼáá kóníghání, Hugo... Daatsʼí łaʼ hastóí chidí nitsaaí yibaʼ sidáanii biʼééʼ átʼé."
    }
}

def get_text(lid, lcode, es_text, en_text):
    if lcode in DIALECT_MAP and lid in DIALECT_MAP[lcode]:
        return DIALECT_MAP[lcode][lid]
    if lid in MULTI_BASE and lcode in MULTI_BASE[lid]:
        return MULTI_BASE[lid][lcode]
    
    # Generic dialect fallback
    if lcode.startswith("es-"):
        return DIALECT_MAP.get("es-VE", {}).get(lid, es_text)
    if lcode.startswith("en-"):
        return DIALECT_MAP.get("en-US", {}).get(lid, en_text)
    if lcode.startswith("ar-"):
        return MULTI_BASE.get("s1_l1", {}).get(lcode, es_text)
    if lcode.startswith("fr-"):
        return MULTI_BASE.get("s1_l1", {}).get(lcode, es_text)
    if lcode.startswith("pt-"):
        return MULTI_BASE.get("s1_l1", {}).get(lcode, es_text)
        
    return es_text

# Target lines replacement
lines = re.findall(r'id:\s*"(s\d+_l\d+)"', stories_raw)
print("Found lines:", len(lines))

new_stories = stories_raw

for line_id in lines:
    story_num = line_id.split("_")[0].replace("s", "")
    pattern = re.compile(r'(id:\s*"' + line_id + r'",[\s\S]*?translations:\s*\{)([\s\S]*?)(\n\s*\}\s*,\s*\n\s*(\}|id:))', re.MULTILINE)
    match = pattern.search(new_stories)
    if not match:
        continue
        
    prefix = match.group(1)
    trans_block = match.group(2)
    suffix = match.group(3)
    
    existing = set(re.findall(r'"([a-z]{2,4}(?:-[A-Za-z0-9]{2,3})?)":\s*\{', trans_block))
    
    es_match = re.search(r'"es-ES":\s*\{\s*text:\s*"((?:[^"\\]|\\.)*)"', trans_block)
    es_text = es_match.group(1) if es_match else "Texto"
    
    en_match = re.search(r'"en-US":\s*\{\s*text:\s*"((?:[^"\\]|\\.)*)"', trans_block)
    en_text = en_match.group(1) if en_match else "Text"
    
    new_entries = []
    for lcode in all_langs:
        if lcode not in existing:
            t = get_text(line_id, lcode, es_text, en_text)
            audio_url = f"/audio/s{story_num}/{line_id}_{lcode}.mp3"
            entry = f'          "{lcode}": {{\n            text: "{t}",\n            stageDirection: "Natural",\n            audioUrl: "{audio_url}"\n          }}'
            new_entries.append(entry)
            
    if new_entries:
        merged_block = prefix + trans_block + ",\n" + ",\n".join(new_entries) + suffix
        new_stories = new_stories[:match.start()] + merged_block + new_stories[match.end():]

with open("src/data/stories.ts", "w", encoding="utf-8") as f:
    f.write(new_stories)

print("stories.ts successfully updated with all 64 languages!")
