/**
 * Universal IPA & Phonetic Transcriber for Polyglot Heaven
 * 
 * Provides authentic, scientifically grounded International Phonetic Alphabet (IPA)
 * representations for all supported languages and dialects, including:
 * - European Portuguese (pt-PT) & Brazilian Portuguese (pt-BR) with rigorous vowel reduction,
 *   sibilant palatalization, dental lenition, and proper grapheme-to-phoneme rules.
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
// 1. CANONICAL STORY DIALOGUE EXACT IPA BY LANGUAGE
// ==========================================
export const CANONICAL_BY_LANG: Record<string, Record<string, string>> = {
  "pt-PT": {
    "Clara, não olhes agora... mas aquela mala verde na mesa da frente é muito suspeita.":
      "[ˈkla.ɾɐ, nɐ̃w̃ ˈɔ.ʎɨʃ ɐˈɣɔ.ɾɐ... mɐʃ ɐˈkɛ.lɐ ˈma.lɐ ˈveɾ.ðɨ nɐ ˈme.zɐ ðɐ ˈfɾẽ.tɨ ɛ ˈmũj̃.tu suʃˈpɐj.tɐ]",
    "É apenas uma mala, Hugo. Come a tua tosta em paz.":
      "[ɛ ɐˈpe.nɐʃ ˈu.mɐ ˈma.lɐ, ˈu.ɣu. ˈko.mɨ ɐ ˈtu.ɐ ˈtɔʃ.tɐ ɐ̃j̃ ˈpaʃ]",
    "Ninguém deixa uma mala verde assim ao abandono. Deve ter documentos confidenciais. Ou diamantes!":
      "[nĩˈɡɐ̃j̃ ˈdɐj.ʃɐ ˈu.mɐ ˈma.lɐ ˈveɾ.ðɨ ɐˈsĩ aw ɐ.βɐ̃ˈdo.nu. ˈdɛ.vɨ ˈteɾ du.kuˈmẽ.tuʃ kõ.fi.ðẽ.siˈajʃ. ow djɐˈmɐ̃.tɨʃ!]",
    "Ou roupa suja.":
      "[ow ˈʁo.pɐ ˈsu.ʒɐ]",
    "Com licença! Alguém viu a minha mala verde com brilhantes?":
      "[kõ liˈsẽ.sɐ! aɫˈɡɐ̃j̃ ˈviw ɐ ˈmi.ɲɐ ˈma.lɐ ˈveɾ.ðɨ kõ bɾiˈʎɐ̃.tɨʃ?]",
    "Brilhantes? É esse o código secreto para os diamantes?":
      "[bɾiˈʎɐ̃.tɨʃ? ɛ ˈe.sɨ u ˈkɔ.ði.ɣu sɨˈkɾe.tu ˈpa.ɾɐ uʒ djɐˈmɐ̃.tɨʃ?]",
    "Não, rapaz. É o meu equipamento para a aula de hip-hop.":
      "[nɐ̃w̃, ʁɐˈpaʃ. ɛ u ˈmew i.ki.pɐˈmẽ.tu ˈpa.ɾɐ ɐ ˈaw.lɐ ðɨ hip.hɔp]",
    "Boa tarde, menina! Quero um café tão forte que me faça acordar em 1985, e com um toque de perigo.":
      "[ˈbo.ɐ ˈtaɾ.ðɨ, mɨˈni.nɐ! ˈkɛ.ɾu ũ kɐˈfɛ ˈtɐ̃w̃ ˈfɔɾ.tɨ kɨ mɨ ˈfa.sɐ ɐ.kuɾˈdaɾ ɐ̃j̃ ˈmiɫ nɔ.vɨˈsẽ.tuʃ i ojˈtẽ.tɐ i ˈsĩ.ku, i kõ ũ ˈtɔ.kɨ ðɨ pɨˈɾi.ɣu]",
    "Com certeza! Um café a ferver na beirinha da mesa e um despertador afinado para há quarenta anos.":
      "[kõ sɨɾˈte.zɐ! ũ kɐˈfɛ ɐ fɨɾˈveɾ nɐ bɐjˈɾi.ɲɐ ðɐ ˈme.zɐ i ũ dɨʃ.pɨɾ.tɐˈðoɾ ɐ.fiˈna.ðu ˈpa.ɾɐ a kwɐˈɾẽ.tɐ ˈɐ.nuʃ]",
    "E os guardanapos? Preciso de exatamente sete para os meus truques de magia.":
      "[i uʒ ɡwaɾ.ðɐˈna.puʃ? pɾɨˈsi.zu ðɨ i.za.tɐˈmẽ.tɨ ˈsɛ.tɨ ˈpa.ɾɐ uʒ ˈmewʃ ˈtɾu.kɨʃ ðɨ mɐˈʒi.ɐ]",
    "Aqui tem os seus sete guardanapos numerados de um a sete e fita amarela de perigo.":
      "[ɐˈki ˈtɐ̃j̃ uʃ ˈsewʃ ˈsɛ.tɨ ɡwaɾ.ðɐˈna.puʃ nu.mɨˈɾa.ðuʃ ðɨ ũ ɐ ˈsɛ.tɨ i ˈfi.tɐ ɐ.mɐˈɾɛ.lɐ ðɨ pɨˈɾi.ɣu]",
    "Senhor Ramón, nos termos da cláusula quatro do nosso acordo bilateral, deve transferir-me o seu cromo holográfico.":
      "[sɨˈɲoɾ ʁɐˈmõ, nuʃ ˈtɛɾ.muʃ ðɐ ˈklaw.zu.lɐ ˈkwa.tɾu du ˈnɔ.su ɐˈkoɾ.ðu bi.lɐ.tɛˈɾaɫ, ˈdɛ.vɨ tɾɐ̃ʃ.fɨˈɾiɾ.mɨ u ˈsew ˈkɾɔ.mu u.luˈɣɾa.fi.ku]",
    "Calma, pequeno advogado. Primeiro ensinas-me a publicar vídeos com música moderna nessa rede social.":
      "[ˈkaɫ.mɐ, pɨˈke.nu ɐð.vuˈɣa.ðu. pɾiˈmɐj.ɾu ẽˈsi.nɐʒ.mɨ ɐ pu.βliˈkaɾ ˈvi.ðjuʃ kõ ˈmu.zi.kɐ muˈðɛɾ.nɐ ˈnɛ.sɐ ˈʁe.ðɨ su.siˈaɫ]",
    "Isso exigirá um prolongamento da minha hora de deitar. E do ponto de vista nutricional, o gelado qualifica-se como laticínio.":
      "[ˈi.su i.zi.ʒiˈɾa ũ pɾu.lõ.ɡɐˈmẽ.tu ðɐ ˈmi.ɲɐ ˈɔ.ɾɐ ðɨ dɐjˈtaɾ. i du ˈpõ.tu ðɨ ˈviʃ.tɐ nu.tɾi.sjuˈnaɫ, u ʒɨˈla.ðu kwɐ.liˈfi.kɐ.sɨ ˈko.mu lɐ.tiˈsi.nju]",
    "Negócio fechado, parceiro! Na minha idade não peço licença, peço gelado duplo e vamos andar de skate!":
      "[nɨˈɣɔ.sju fɨˈʃa.ðu, pɐɾˈsɐj.ɾu! nɐ ˈmi.ɲɐ iˈða.ðɨ nɐ̃w̃ ˈpɛ.su liˈsẽ.sɐ, ˈpɛ.su ʒɨˈla.ðu ˈdu.plu i ˈvɐ.muʃ ɐ̃ˈdaɾ ðɨ ˈskejt!]",
    "Clara, fica atrás de mim. Esta torradeira emite bipes em código morse cada vez que o pão salta. Estou convencido de que transmite as nossas conversas para o ministério.":
      "[ˈkla.ɾɐ, ˈfi.kɐ ɐˈtɾaʒ ðɨ ˈmĩ. ˈeʃ.tɐ tu.rɐˈðej.ɾɐ eˈmi.tɨ ˈbi.pɨz ẽj ˈkɔ.ði.ɣu ˈmɔɾ.sɨ ˈka.ðɐ ˈveʃ kɨ u ˈpɐ̃w ˈsaɫ.tɐ. ʃtoi kõ.vẽˈsi.ðu ðɨ kɨ tɾɐ̃ʒˈmi.tɨ ɐʒ ˈnɔ.sɐʃ kõˈvɛɾ.sɐʃ pɐ.ɾɐ u mi.niʃˈtɛ.ɾju]",
    "Hugo, não transmite nada. Queimaste a fatia porque puseste a potência no máximo. Devolve isso já e vamos embora antes que nos ponham na rua.":
      "[ˈu.ɣu, nɐ̃w tɾɐ̃ʒˈmi.tɨ ˈna.ðɐ. kejˈmaʃ.tɨ ɐ fɐˈti.ɐ peɾˈkɨ puˈzeʃ.tɨ ɐ puˈtẽ.sjɐ nu ˈma.ksi.mu. dɨˈvɔɫ.vɨ ˈi.su ˈʒa i ˈvɐ.muz ẽjˈbɔ.ɾɐ ˈɐ̃.tɨʃ kɨ nuʃ ˈpõ.ɲɐ̃w̃ nɐ ˈʁu.ɐ]",
    "Bom dia! Segundo o manual de apoio ao cliente, para devolver eletrodomésticos com suspeitas de espionagem preciso da embalagem original e de uma testemunha juramentada.":
      "[bõ ˈdi.ɐ! sɨˈɣũ.du u mɐˈnwaɫ dɨ ɐˈpoj.w aɫ kliˈẽ.tɨ, pɐ.ɾɐ dɨ.voɫˈveɾ e.lɛ.tɾu.ðuˈmɛʃ.ti.kuʃ kõ suʃˈpej.tɐʒ ðeʃ.pjuˈna.ʒɐ̃j pɾɨˈsi.zu dɐ ẽ.bɐˈla.ʒɐ̃j̃ o.ɾi.ʒiˈnaɫ i dɨ ˈu.mɐ tɨʃ.tɨˈmu.ɲɐ ʒu.ɾɐ.mẽˈta.ðɐ]",
    "Estás a ver, Clara? O protocolo de segurança nacional já está em marcha! Diga-me, agente Bea, qual é a palavra-passe para abortar a operação?":
      "[ʃtaʒ ɐ ˈveɾ, ˈkla.ɾɐ? u pɾu.tuˈkɔ.lu dɨ sɨ.ɣuˈɾɐ̃.sɐ nɐ.sjuˈnaɫ ʒa ʃta ẽj̃ ˈmaɾ.ʃɐ! ˈdi.ɡɐ.mɨ, ɐˈʒẽ.tɨ ˈbe.ɐ, ˈkwaɫ ˈɛ ɐ pɐˈla.vɾɐ ˈpa.sɨ pɐ.ɾɐ ɐ.βuɾˈtaɾ ɐ o.pɨ.ɾɐˈsɐ̃w̃?]",
    "A palavra-passe é «croquete», mas o gerente hoje está de folga. Só posso passar um vale de loja ou trocar a torradeira por uma máquina de café falante.":
      "[ɐ pɐˈla.vɾɐ ˈpa.sɨ ˈɛ kɾuˈkɛ.tɨ, mɐʒ u ʒɨˈɾẽ.tɨ ˈo.ʒɨ ʃta dɨ ˈfɔɫ.ɡɐ. ˈsɔ ˈpɔ.su pɐˈsaɾ ũ ˈva.lɨ dɨ ˈlo.ʒɐ ow tɾuˈkaɾ ɐ tu.rɐˈðej.ɾɐ poɾ ˈu.mɐ ˈma.ki.nɐ ðɨ kɐˈfɛ fɐˈlɐ̃.tɨ]",
    "Dê-me a máquina de café falante, Bea. Com certeza terá conversas mais sensatas do que as parvoíces que ouço em casa.":
      "[ˈde.mɨ ɐ ˈma.ki.nɐ ðɨ kɐˈfɛ fɐˈlɐ̃.tɨ, ˈbe.ɐ. kõ sɨɾˈte.zɐ tɨˈɾa kõˈvɛɾ.sɐʒ ˈmajʃ sẽˈsa.tɐʒ du kɨ ɐʒ pɐɾ.vuˈi.sɨʃ kɨ ˈo.sw ẽj̃ ˈka.zɐ]"
  },

  "pt-BR": {
    "Clara, não olha agora... mas aquela mala verde na mesa da frente é muito suspeita.":
      "[ˈkla.ɾɐ, nɐ̃w̃ ˈɔ.ʎɐ aˈɡɔ.ɾɐ... mas aˈkɛ.lɐ ˈma.lɐ ˈveʁ.dʒi na ˈme.za da ˈfɾẽ.tʃi ɛ ˈmũj̃.tu suʃˈpej.tɐ]",
    "É só uma mala, Hugo. Come o seu sanduíche em paz.":
      "[ɛ ˈsɔ ˈu.mɐ ˈma.lɐ, ˈu.ɡu. ˈko.mi u sew sɐ̃.duˈi.ʃi ẽj̃ ˈpas]",
    "Ninguém larga uma mala verde assim do nada. Tem que ter arquivos secretos. Ou diamantes!":
      "[nĩˈɡẽj̃ ˈlaʁ.ɡɐ ˈu.mɐ ˈma.lɐ ˈveʁ.dʒi aˈsĩ du ˈna.dɐ. ˈtẽj̃ ki ˈteʁ aʁˈki.vus seˈkɾɛ.tus. ow dʒi.aˈmɐ̃.tʃis!]",
    "Ou roupa suja.":
      "[ow ˈʁo.pɐ ˈsu.ʒɐ]",
    "Com licença, pessoal! Alguém viu minha mala verde cheia de glitter?":
      "[kõ liˈsẽ.sɐ, pe.soˈaw! awˈɡẽj̃ ˈviw ˈmi.ɲɐ ˈma.lɐ ˈveʁ.dʒi ˈʃej.ɐ dʒi ˈɡli.teʁ?]",
    "Glitter? Esse é o codinome secreto pros diamantes?":
      "[ˈɡli.teʁ? ˈe.si ɛ u ko.dʒiˈno.mi seˈkɾɛ.tu pɾus dʒi.aˈmɐ̃.tʃis?]",
    "Que nada, garoto! É meu figurino estiloso pra aula de hip-hop.":
      "[ki ˈna.dɐ, ɡaˈɾo.tu! ɛ mew fi.ɡuˈɾi.nu es.tʃiˈlo.zu pɾa ˈaw.lɐ dʒi ˈhip.hɔp]",
    "Boa tarde, moça! Quero um café tão forte que me acorde em 1985, com uma pitada de perigo.":
      "[ˈbo.ɐ ˈtaʁ.dʒi, ˈmo.sɐ! ˈkɛ.ɾu ũ kaˈfɛ ˈtɐ̃w̃ ˈfɔʁ.tʃi ki mi aˈkɔʁ.dʒi ẽj̃ ˈmiw nɔ.veˈsẽ.tus i ojˈtẽ.ta i ˈsĩ.ku, kõ ˈu.mɐ piˈta.dɐ dʒi peˈɾi.ɡu]",
    "É pra já! Um café fervendo na beiradinha da mesa e um despertador programado para quarenta anos atrás.":
      "[ɛ pɾa ˈʒa! ũ kaˈfɛ feʁˈvẽ.du na bej.ɾaˈdʒĩ.ɲɐ da ˈme.za i ũ des.peʁ.taˈdoʁ pɾo.ɡɾaˈma.du ˈpa.ɾa kwaˈɾẽ.ta ˈɐ̃.nus aˈtɾas]",
    "E os guardanapos? Preciso de exatamente sete para os meus truques de mágica.":
      "[i uz ɡwaʁ.daˈna.pus? pɾeˈsi.zu dʒi e.za.taˈmẽ.tʃi ˈsɛ.tʃi ˈpa.ɾa uz mewz ˈtɾu.kis dʒi ˈma.ʒi.kɐ]",
    "Aqui estão sete guardanapos numerados de um a sete e fita zebrada de advertência.":
      "[aˈki esˈtɐ̃w̃ ˈsɛ.tʃi ɡwaʁ.daˈna.pus nu.meˈɾa.dus dʒi ũ a ˈsɛ.tʃi i ˈfi.tɐ zeˈbɾa.dɐ dʒi ad.veʁˈtẽ.sjɐ]",
    "Seu Ramón, de acordo com a cláusula quatro do nosso acordo bilateral, o senhor deve transferir sua figurinha holográfica.":
      "[sew ʁaˈmõ, dʒi aˈkoʁ.du kõ a ˈklaw.zu.lɐ ˈkwa.tɾu du ˈnɔ.su aˈkoɾ.du bi.la.teˈɾaw, u seˈɲoʁ ˈdɛ.vi tɾɐ̃s.feˈɾiʁ ˈsu.ɐ fi.ɡuˈɾĩ.ɲɐ o.loˈɡɾa.fi.kɐ]",
    "Calma aí, mini-doutor. Primeiro você me ensina a postar vídeos com música naquele aplicativo de dança.":
      "[ˈkaw.mɐ aˈi, ˈmi.ni dowˈtoʁ. pɾiˈmej.ɾu voˈse mi ẽˈsi.nɐ a posˈtaʁ ˈvi.dʒi.us kõ ˈmu.zi.kɐ naˈkɛ.li a.pli.kaˈtʃi.vu dʒi ˈdɐ̃.sɐ]",
    "Isso vai exigir estender meu horário de dormir. E do ponto de vista nutricional, sorvete se qualifica como laticínio.":
      "[ˈi.su vaj e.ziˈʒiʁ es.tẽˈdeʁ mew oˈɾa.ɾju dʒi doʁˈmiʁ. i du ˈpõ.tu dʒi ˈvis.tɐ nu.tɾi.sjoˈnaw, soʁˈve.tʃi si kwa.liˈfi.kɐ ˈko.mu la.tʃiˈsi.nju]",
    "Fechou, parceiro! Na minha idade não peço permissão, peço sorvete duplo e bora pro skate!":
      "[feˈʃow, paʁˈsej.ɾu! na ˈmi.ɲɐ iˈda.dʒi nɐ̃w̃ ˈpɛ.su peʁ.miˈsɐ̃w̃, ˈpɛ.su soʁˈve.tʃi ˈdu.plu i ˈbɔ.ɾa pɾu ˈskejt!]",
    "Clara, fica atrás de mim. Essa torradeira tá apitando em código morse toda vez que o pão pula. Tenho certeza de que ela tá mandando nossas conversas pro ministério.":
      "[ˈkla.ɾɐ, ˈfi.kɐ ɐˈtɾaz dʒi ˈmĩ. ˈe.sɐ to.haˈdej.ɾɐ ta ɐ.piˈtɐ̃.du ẽj ˈkɔ.dʒi.ɡu ˈmɔɾ.si ˈto.dɐ ˈveʃ ki u ˈpɐ̃w̃ ˈpu.lɐ. ˈtẽj.ɲu seɾˈte.zɐ dʒi ki ˈe.lɐ ta mɐ̃ˈdɐ̃.dw ˈnɔ.sɐs kõˈvɛɾ.sɐs pɾu mi.nisˈtɛ.ɾju]",
    "Hugo, não tá transmitindo nada. Você queimou a torrada porque colocou a potência no talo. Devolve logo e vamo embora antes que botem a gente pra fora.":
      "[ˈu.ɡu, nɐ̃w̃ ta tɾɐ̃z.miˈtʃĩ.du ˈna.dɐ. voˈse kejˈmow a toˈha.dɐ poɾˈki ko.loˈkow a poˈtẽ.sjɐ nu ˈta.lu. dʒeˈvɔw.vi ˈlo.ɡw i ˈvɐ̃.mw ẽj̃ˈbɔ.ɾɐ ˈɐ̃.tʃis ki ˈbɔ.tẽj̃ a ˈʒẽ.tʃi pɾa ˈfo.ɾɐ]",
    "Bom dia! Segundo o manual de atendimento ao cliente, pra devolver eletrodomésticos com suspeita de espionagem eu preciso da embalagem original e de uma testemunha juramentada.":
      "[bõ ˈdʒi.ɐ! seˈɡũ.du u mɐ.nuˈaw dʒi a.tẽ.dʒiˈmẽ.tw aw kliˈẽ.tʃi, pɾa de.vowˈveɾ e.lɛ.tɾo.doˈmɛs.tʃi.kws kõ susˈpej.tɐ dʒi es.pjoˈna.ʒẽj̃ ew pɾeˈsi.zu da ẽ.baˈla.ʒẽj̃ o.ɾi.ʒiˈnaw i dʒi ˈu.mɐ tes.teˈmu.ɲɐ ʒu.ɾa.mẽˈta.dɐ]",
    "Tá vendo, Clara? O protocolo de segurança nacional já tá em andamento! Me diga, agente Bea, qual é a senha pra cancelar a operação?":
      "[ta ˈvẽ.du, ˈkla.ɾɐ? u pɾo.toˈkɔ.lu dʒi se.ɡuˈɾɐ̃.sɐ nɐ.sjoˈnaw ʒa ta ẽj̃ ɐ̃.dɐˈmẽ.tu! mi ˈdʒi.ɡɐ, aˈʒẽ.tʃi ˈbe.ɐ, ˈkwaɫ ˈɛ a ˈsẽ.ɲɐ pɾa kɐ̃.seˈlaɾ a o.pe.ɾaˈsɐ̃w̃?]",
    "A senha é «croquete», mas hoje o gerente tá de folga. Só posso dar um vale-compras ou trocar a torradeira por uma cafeteira que fala.":
      "[a ˈsẽ.ɲɐ ˈɛ kɾoˈkɛ.tʃi, mas ˈo.ʒi u ʒeˈɾẽ.tʃi ta dʒi ˈfɔw.ɡɐ. ˈsɔ ˈpɔ.su da ũ ˈva.li ˈkõ.pɾɐz ow tɾoˈkaɾ a to.haˈdej.ɾɐ poɾ ˈu.mɐ kɐ.feˈtej.ɾɐ ki ˈfa.lɐ]",
    "Me dá a cafeteira que fala, Bea. Tenho certeza de que ela tem conversas mais sensatas do que as loucuras que eu ouço em casa.":
      "[mi ˈda a kɐ.feˈtej.ɾɐ ki ˈfa.lɐ, ˈbe.ɐ. ˈtẽj̃.ɲu seɾˈte.zɐ dʒi ki ˈe.lɐ ˈtẽj̃ kõˈvɛɾ.sɐz ˈmajz sẽˈsa.tɐz du ki az lowˈku.ɾɐs ki ew ˈo.sw ẽj̃ ˈka.zɐ]"
  },

  "fr-FR": {
    "Clara, ne regarde pas maintenant... mais cette valise verte sur la table d'en face est très suspecte.":
      "[kla.ʁa, nə ʁə.ɡaʁd pa mɛ̃t.nɑ̃... mɛ sɛt va.liz vɛʁt syʁ la tabl dɑ̃ fas ɛ tʁɛ sys.pɛkt]",
    "C'est juste une valise, Hugo. Mange ton sandwich.":
      "[sɛ ʒyst yn va.liz, y.ɡo. mɑ̃ʒ tɔ̃ sɑ̃d.witʃ]",
    "Personne ne laisse une valise verte comme ça. Il doit y avoir des documents secrets. Ou des diamants !":
      "[pɛʁ.sɔn nə lɛs yn va.liz vɛʁt kɔm sa. il dwa i a.vwaʁ de dɔ.ky.mɑ̃ sə.kʁɛ. u de dja.mɑ̃]",
    "Ou du linge sale.":
      "[u dy lɛ̃ʒ sal]",
    "Excusez-moi ! Est-ce que quelqu'un a vu ma valise verte à paillettes ?":
      "[ɛk.sky.ze.mwa! ɛs kə kɛl.kœ̃ a vy ma va.liz vɛʁt a pa.jɛt?]",
    "Des paillettes ? C'est le nom de code pour les diamants ?":
      "[de pa.jɛt? sɛ lə nɔ̃ də kɔd puʁ le dja.mɑ̃?]",
    "Mais non, mon gars ! C'est ma tenue de scène pour mon cours de hip-hop.":
      "[mɛ nɔ̃, mɔ̃ ɡa! sɛ ma tə.ny də sɛn puʁ mɔ̃ kuʁ də hip.hɔp]",
    "Bonjour mademoiselle ! Je veux un café si fort qu'il me réveille en 1985, avec une touche de danger.":
      "[bɔ̃.ʒuʁ mad.mwa.zɛl! ʒə vø œ̃ ka.fe si fɔʁ kil mə ʁe.vɛj ɑ̃ mil nœf sɑ̃ katʁ.vɛ̃.sɛ̃k, a.vɛk yn tuʃ də dɑ̃.ʒe]",
    "C'est parti ! Un café brûlant posé au bord du précipice de la table et un réveil réglé sur 1985.":
      "[sɛ paʁ.ti! œ̃ ka.fe bʁy.lɑ̃ po.ze o bɔʁ dy pʁe.si.pis də la tabl e œ̃ ʁe.vɛj ʁe.ɡle syʁ mil nœf sɑ̃ katʁ.vɛ̃.sɛ̃k]",
    "Et les serviettes ? Il m'en faut exactement sept pour mes tours de magie.":
      "[e le sɛʁ.vjɛt? il mɑ̃ fo ɛɡ.zak.tə.mɑ̃ sɛt puʁ me tuʁ də ma.ʒi]",
    "Voici vos sept serviettes numérotées de un à sept, et un ruban jaune de sécurité pour le danger.":
      "[vwa.si vo sɛt sɛʁ.vjɛt ny.me.ʁɔ.te də œ̃ a sɛt, e œ̃ ʁy.bɑ̃ ʒon də se.ky.ʁi.te puʁ lə dɑ̃.ʒe]",
    "Monsieur Ramon, conformément à l'article quatre de notre accord bilatéral, vous devez me céder votre carte holographique.":
      "[mə.sjø ʁa.mɔ̃, kɔ̃.fɔʁ.me.mɑ̃ a laʁ.tikl katʁ də nɔtʁ a.kɔʁ bi.la.te.ʁal, vu də.ve mə se.de vɔtʁ kaʁt ɔ.lɔ.ɡʁa.fik]",
    "Du calme, mini-avocat. D'abord, tu m'apprends à poster des vidéos de danse avec de la musique moderne.":
      "[dy kalm, mi.ni.a.vɔ.ka. da.bɔʁ, ty ma.pʁɑ̃ a pɔs.te de vi.de.o də dɑ̃s a.vɛk də la my.zik mɔ.dɛʁn]",
    "Cela exigera une prolongation de mon couvre-feu. Et d'un point de vue nutritionnel, la glace est considérée comme un produit laitier.":
      "[sə.la ɛɡ.ziʒ.ʁa yn pʁɔ.lɔ̃.ɡa.sjɔ̃ də mɔ̃ kuvʁ.fø. e dœ̃ pwɛ̃ də vy ny.tʁi.sjɔ.nɛl, la ɡlas ɛ kɔ̃.si.de.ʁe kɔm œ̃ pʁɔ.dɥi lɛ.tje]",
    "Affaire conclue, partenaire ! À mon âge, pas besoin de permission : double dose de glace et en route pour le skatepark !":
      "[a.fɛʁ kɔ̃.kly, paʁ.tə.nɛʁ! a mɔ̃ nɑʒ, pa bə.zwɛ̃ də pɛʁ.mi.sjɔ̃ : dubl doz də ɡlas e ɑ̃ ʁut puʁ lə skɛjt.paʁk!]",
    "Clara, mets-toi derrière moi. Ce grille-pain émet des bips en morse chaque fois que le pain saute. Je suis convaincu qu'il transmet nos conversations au ministère.":
      "[kla.ʁa, mɛ twa dɛ.ʁjɛʁ mwa. sə ɡʁij.pɛ̃ e.mɛ de bip ɑ̃ mɔʁs ʃak fwa kə lə pɛ̃ sot. ʒə sɥi kɔ̃.vɛ̃.ky k‿il tʁɑ̃s.mɛ no kɔ̃.vɛʁ.sa.sjɔ̃ o mi.nis.tɛʁ]",
    "Hugo, ça ne transmet rien du tout. Tu as brûlé la tranche parce que tu as mis la puissance au maximum. Rends-le tout de suite et partons avant qu'on se fasse virer.":
      "[y.ɡo, sa nə tʁɑ̃s.mɛ ʁjɛ̃ dy tu. ty a bʁy.le la tʁɑ̃ʃ paʁs kə ty a mi la pɥi.sɑ̃s o mak.si.mɔm. ʁɑ̃ lə tut sɥit e paʁ.tɔ̃ a.vɑ̃ k‿ɔ̃ sə fas vi.ʁe]",
    "Bonjour ! D'après le manuel du service client, pour retourner un appareil suspecté d'espionnage, il me faut l'emballage d'origine et un témoin assermenté.":
      "[bɔ̃.ʒuʁ! dap.ʁɛ lə ma.nɥɛl dy sɛʁ.vis klijɑ̃, puʁ ʁə.tuʁ.ne œ̃ n‿a.pa.ʁɛj sys.pɛk.te d‿ɛs.pjɔ.naʒ, il mə fo l‿ɑ̃.ba.laʒ d‿ɔ.ʁi.ʒin e œ̃ te.mwɛ̃ a.sɛʁ.mɑ̃.te]",
    "Tu vois, Clara ? Le protocole de sécurité nationale est déjà lancé ! Dites-moi, agent Bea, quel est le mot de passe pour annuler l'opération ?":
      "[ty vwa, kla.ʁa? lə pʁɔ.tɔ.kɔl də se.ky.ʁi.te na.sjɔ.nal ɛ de.ʒa lɑ̃.se! dit mwa, a.ʒɑ̃ be.a, kɛl ɛ lə mo d‿pas puʁ a.ny.le l‿ɔ.pe.ʁa.sjɔ̃?]",
    "Le mot de passe est « croquette », mais le responsable est en jour de repos. Je peux seulement vous faire un avoir ou échanger le grille-pain contre une cafetière parlante.":
      "[lə mo d‿pas ɛ kʁɔ.kɛt, mɛ lə ʁɛs.pɔ̃.sabl ɛ t‿ɑ̃ ʒuʁ də ʁə.po. ʒə pø søl.mɑ̃ vu fɛʁ œ̃ n‿a.vwaʁ u e.ʃɑ̃.ʒe lə ɡʁij.pɛ̃ kɔ̃tʁ yn ka.fə.tjɛʁ paʁ.lɑ̃t]",
    "Donnez-moi la cafetière parlante, Bea. Elle aura sûrement des conversations plus sensées que celles que j'entends à la maison.":
      "[dɔ.ne mwa la ka.fə.tjɛʁ paʁ.lɑ̃t, be.a. ɛl o.ʁa syʁ.mɑ̃ de kɔ̃.vɛʁ.sa.sjɔ̃ ply sɑ̃.se kə sɛl kə ʒ‿ɑ̃.tɑ̃ a la mɛ.zɔ̃]"
  },

  "es-ES": {
    "Clara, no mires ahora... pero esa maleta verde en la mesa de enfrente es muy sospechosa.":
      "[ˈkla.ɾa, no ˈmi.ɾes aˈo.ɾa... ˈpe.ɾo ˈe.sa maˈle.ta ˈbeɾ.ðe en la ˈme.sa ðe emˈfɾen̪.te ez ˈmwi sos.peˈt͡ʃo.sa]",
    "Es solo una maleta, Hugo. Come tu sándwich.":
      "[es ˈso.lo ˈu.na maˈle.ta, ˈu.ɣo. ˈko.me tu ˈsan̪.dwit͡ʃ]",
    "Nadie deja una maleta verde así como así. Tiene que haber documentos secretos. ¡O diamantes!":
      "[ˈna.ðje ˈðe.xa ˈu.na maˈle.ta ˈbeɾ.ðe aˈsi ˈko.mo aˈsi. ˈtje.ne ke aˈβeɾ ðo.kuˈmen̪.tos seˈkɾe.tos. o ðjaˈman̪.tes!]",
    "O ropa sucia.":
      "[o ˈro.pa ˈsu.θja]",
    "¡Disculpen! ¿Alguien vio mi maleta verde con brillantina?":
      "[disˈkul.pen! ˈal.ɣjen ˈbjo mi maˈle.ta ˈbeɾ.ðe kom bɾi.ʎan̪ˈti.na?]",
    "¿Brillantina? ¿Es esa la clave secreta para los diamantes?":
      "[bɾi.ʎan̪ˈti.na? ˈes ˈe.sa la ˈkla.βe seˈkɾe.ta ˈpa.ɾa loz ðjaˈman̪.tes?]",
    "No, chaval. Es mi ropa de entrenamiento para la clase de hip-hop.":
      "[no, t͡ʃaˈβal. ez mi ˈro.pa ðe en̪.tɾe.naˈmjen̪.to ˈpa.ɾa la ˈkla.se ðe hip.hɔp]",
    "¡Buenas tardes, señorita! Quiero un café tan fuerte que me despierte en 1985, y con un toque de peligro.":
      "[ˈbwe.nas ˈtaɾ.ðes, se.ɲoˈɾi.ta! ˈkje.ɾo uŋ kaˈfe tam ˈfweɾ.te ke me ðesˈpjeɾ.te en ˈmil no.βeˈθjen̪.tos oˈt͡ʃen̪.ta i ˈθiŋ.ko, i kon un ˈto.ke ðe peˈli.ɣɾo]",
    "¡Marchando! Un café hirviendo servido justo en el filo de la mesa y un despertador programado hace cuarenta años.":
      "[maɾˈt͡ʃan̪.do! uŋ kaˈfe iɾˈβjen̪.do seɾˈβi.ðo ˈxus.to en el ˈfi.lo ðe la ˈme.sa i un des.peɾ.taˈðoɾ pɾo.ɣɾaˈma.ðo ˈa.θe kwaˈɾen̪.ta ˈa.ɲos]",
    "¿Y las servilletas? Necesito exactamente siete para mis trucos de magia.":
      "[i las seɾ.βiˈʎe.tas? ne.θeˈsi.to eɡ.sak.taˈmen̪.te ˈsje.te ˈpa.ɾa mis ˈtɾu.koz ðe ˈma.xja]",
    "Aquí tiene siete servilletas numeradas del uno al siete y cinta amarilla de precaución.":
      "[aˈki ˈtje.ne ˈsje.te seɾ.βiˈʎe.tas nu.meˈɾa.ðaz ðel ˈu.no al ˈsje.te i ˈθin̪.ta a.maˈɾi.ʎa ðe pɾe.kawˈθjõn]",
    "Don Ramón, según la cláusula cuatro de nuestro acuerdo bilateral, usted debe transferirme su cromo holográfico.":
      "[don raˈmõn, seˈɣun la ˈklaw.su.la ˈkwa.tɾo ðe ˈnwes.tɾo aˈkweɾ.ðo bi.la.teˈɾal, usˈteð ˈde.βe tɾans.feˈɾiɾ.me su ˈkɾo.mo o.loˈɣɾa.fi.ko]",
    "Tranquilo, abogado diminuto. Primero enséñame a subir videos con música moderna a esa red social.":
      "[tɾaŋˈki.lo, a.βoˈɣa.ðo ði.miˈnu.to. pɾiˈme.ɾo enˈse.ɲa.me a suˈβiɾ ˈbi.ðjos kom ˈmu.si.ka moˈðeɾ.na a ˈe.sa reð soˈθjal]",
    "Eso requerirá una extensión de mi toque de queda. Y desde una perspectiva nutricional, el helado califica como lácteo.":
      "[ˈe.so re.ke.ɾiˈɾa ˈu.na eɡs.tenˈsjõn de mi ˈto.ke ðe ˈke.ða. i ˈðez.ðe ˈu.na peɾs.peɡˈti.βa nu.tɾi.θjoˈnal, el eˈla.ðo kaˈli.fi.ka ˈko.mo ˈlak.te.o]",
    "¡Trato hecho, socio! A mi edad no pido permiso, ¡pido helado doble y nos vamos a patinar!":
      "[ˈtɾa.to ˈe.t͡ʃo, ˈso.θjo! a mj eˈðað no ˈpi.ðo peɾˈmi.so, ˈpi.ðo eˈla.ðo ˈðo.βle i noz ˈβa.mos a pa.tiˈnaɾ!]",
    "Clara, ponte detrás de mí. Esta tostadora emite pitidos en código morse cada vez que salta el pan. Estoy convencido de que transmite nuestras conversaciones al ministerio.":
      "[ˈkla.ɾa, ˈpon̪.te ðeˈtɾaz ðe ˈmi. ˈes.ta tos.taˈðo.ɾa eˈmi.te piˈti.ðos eŋ ˈko.ði.ɣo ˈmoɾ.se ˈka.ða ˈβeθ ke ˈsal.ta el ˈpan. esˈtoj kom.benˈθi.ðo ðe ke tɾanzˈmi.te ˈnwes.tɾas kom.beɾ.saˈθjo.nes al mi.nisˈte.ɾjo]",
    "Hugo, no transmite nada. Se te quemó la rebanada porque pusiste la potencia al máximo. Devuélvela ya y vámonos antes de que nos echen.":
      "[ˈu.ɣo, no tɾanzˈmi.te ˈna.ða. se te keˈmo la re.βaˈna.ða poɾˈke puˈsis.te la poˈten̪.θja al ˈmak.si.mo. deˈbwel.βe.la ˈʝa i ˈba.mo.nos ˈan̪.tes ðe ke nos ˈe.t͡ʃen]",
    "¡Buenos días! Según el manual de atención al cliente, para devolver electrodomésticos con sospechas de espionaje necesito el embalaje original y un testigo jurado.":
      "[bwe.noz ˈði.as! seˈɣun el maˈnwal de a.tenˈθjon al ˈkljen̪.te, ˈpa.ɾa de.βolˈβeɾ e.lek.tɾo.ðoˈmes.ti.kos kon sosˈpe.t͡ʃaz ðe es.pjoˈna.xe ne.θeˈsi.to el em.baˈla.xe o.ɾi.xiˈnal i un tesˈti.ɣo xuˈɾa.ðo]",
    "¿Lo ves, Clara? ¡El protocolo de seguridad nacional ya está en marcha! Dígame, agente Bea, ¿cuál es la contraseña para cancelar la operación?":
      "[lo ˈβes, ˈkla.ɾa? el pɾo.toˈko.lo ðe se.ɣu.ɾiˈðað na.θjoˈnal ʝa esˈta em ˈmaɾ.t͡ʃa! ˈdi.ɣa.me, aˈxen̪.te ˈbe.a, ˈkwal ˈez la kon̪.tɾaˈse.ɲa ˈpa.ɾa kan.θeˈlaɾ la o.pe.ɾaˈθjon?]",
    "La contraseña es «croqueta», pero hoy el encargado libra. Solo puedo darles un vale de tienda o cambiar la tostadora por una cafetera parlante.":
      "[la kon̪.tɾaˈse.ɲa ˈes kɾoˈke.ta, ˈpe.ɾo ˈoj el eŋ.kaɾˈɣa.ðo ˈli.βɾa. ˈso.lo ˈpwe.ðo ˈðaɾ.les um ˈba.le ðe ˈtjen̪.da o kamˈbjaɾ la tos.taˈðo.ɾa poɾ ˈu.na ka.feˈte.ɾa paɾˈlan̪.te]",
    "Deme la cafetera parlante, Bea. Seguro que tiene conversaciones más sensatas que las que escucho en casa.":
      "[ˈde.me la ka.feˈte.ɾa paɾˈlan̪.te, ˈbe.a. seˈɣu.ɾo ke ˈtje.ne kom.beɾ.saˈθjo.nez ˈmas senˈsa.tas ke las ke esˈku.t͡ʃo eŋ ˈka.sa]"
  },

  "ca-ES": {
    "Clara, no miris ara... però aquella maleta verda a la taula del davant és molt sospitosa.":
      "[ˈkla.ɾə, no ˈmi.ɾis ˈa.ɾə... pəˈɾɔ əˈke.ʎə məˈle.tə ˈβɛɾ.ðə ə lə ˈtaw.lə dəl dəˈβan ez ˈmɔl sus.piˈto.zə]",
    "És només una maleta, Hugo. Menja't l'entrepà.":
      "[ez nuˈmez ˈu.nə məˈle.tə, ˈu.ɣu. ˈmɛɲ.ʒət lən.tɾəˈpa]",
    "Ningú no deixa una maleta verda així com així. Hi deu haver documents secrets. O diamants!":
      "[niŋˈɡu no ˈdeʃ.ʃə ˈu.nə məˈle.tə ˈβɛɾ.ðə əjˈʃi kum əjˈʃi. i ˈdew əˈβe ðu.kuˈmenz səˈkɾɛts. u ðjəˈmants!]",
    "O roba bruta.":
      "[u ˈrɔ.βə ˈβɾu.tə]",
    "Perdó! Algú ha vist la meva maleta verda amb purpurina?":
      "[pəɾˈðo! əɫˈɡu a ˈβiz lə ˈme.βə məˈle.tə ˈβɛɾ.ðə əm puɾ.puˈɾi.nə?]",
    "Purpurina? És aquesta la clau secreta per als diamants?":
      "[puɾ.puˈɾi.nə? ez əˈkɛs.tə lə ˈklaw səˈkɾe.tə pəɾ əlz ðjəˈmants?]",
    "No, noi. És la meva roba d'entrenament per a la classe de hip-hop.":
      "[no, ˈnɔj. ez lə ˈme.βə ˈrɔ.βə dən.tɾə.nəˈmen pəɾ ə lə ˈkla.sə ðə hip.hɔp]",
    "Bona tarda, senyoreta! Vull un cafè tan fort que em desperti el 1985, i amb un toc de perill.":
      "[ˈbɔ.nə ˈtaɾ.ðə, sə.ɲuˈɾe.tə! ˈbuʎ uŋ kəˈfɛ tam ˈfɔɾ kəm dəsˈpɛɾ.ti əl mil nɔw.sənz ujˈtɛn.tə i ˈsiŋ, i əm un ˈtɔɡ ðə pəˈɾiʎ]",
    "I tant! Un cafè bullint servit just a la vora de la taula i un despertador programat fa quaranta anys.":
      "[i ˈtan! uŋ kəˈfɛ βuˈʎin səɾˈβid ˈʒust ə lə ˈβɔ.ɾə ðə lə ˈtaw.lə i un dəs.pəɾ.təˈðo pɾu.ɣɾəˈmat fa kwəˈɾan.tə ˈaɲs]",
    "I els torbavallons? Me'n calen exactament set per als meus trucs de màgia.":
      "[i əlz tuɾ.βə.βəˈʎonz? mən ˈka.lən əɡ.zak.təˈmen ˈsɛt pəɾ əlz ˈmɛws ˈtɾugz ðə ˈma.ʒi.ə]",
    "Aquí té set torbavallons numerats de l'un al set i cinta groga de precaució.":
      "[əˈki ˈte ˈsɛt tuɾ.βə.βəˈʎonz nu.məˈɾadz də ˈlun əl ˈsɛt i ˈsin.tə ˈɡɾɔ.ɣə ðə pɾə.kəw.siˈo]",
    "Don Ramón, segons la clàusula quatre del nostre acord bilateral, vostè m'ha de transferir el seu cromo hologràfic.":
      "[don rəˈmon, səˈɣonz lə ˈklaw.zu.lə ˈkwa.tɾə ðəl ˈnɔs.tɾə əˈkɔɾ bi.lə.təˈɾaɫ, busˈte ma ðə tɾəns.fəˈɾiɾ əl ˈsɛw ˈkɾɔ.mu u.luˈɣɾa.fik]",
    "Tranquil, advocadet. Primer ensenya'm a penjar vídeos amb música moderna en aquesta xarxa social.":
      "[tɾəŋˈkiɫ, əð.βu.kəˈðɛt. pɾiˈme ənˈsɛ.ɲəm ə pəɲˈʒa ˈbi.ðjuz əm ˈmu.zi.kə muˈðɛɾ.nə ən əˈkɛs.tə ˈʃaɾ.ʃə su.siˈaɫ]",
    "Això requerirà una extensió del meu toc de queda. I des d'una perspectiva nutricional, el gelat compta com a làctic.":
      "[əˈʃɔ rə.kə.ɾiˈɾa ˈu.nə əks.tən.siˈo ðəl ˈmɛw ˈtɔɡ ðə ˈkɛ.ðə. i dez ˈdu.nə pəɾs.pəkˈti.βə nu.tɾi.si.uˈnaɫ, əl ʒəˈlat ˈkom.tə ˈkɔm ə ˈlak.tik]",
    "Tracte fet, soci! A la meva edat no demano permís: demano gelat doble i anem a patinar!":
      "[ˈtɾak.tə ˈfɛt, ˈsɔ.si! ə lə ˈme.βə əˈðat no ðəˈma.nu pəɾˈmis: dəˈma.nu ʒəˈlad ˈdɔ.βblə i əˈnɛm ə pə.tiˈna!]",
    "Clara, posa't darrere meu. Aquesta torradora pita en codi morse cada vegada que salta el pa. Estic convençut que transmet les nostres converses al ministeri.":
      "[ˈkla.ɾə, ˈpɔ.zəd dəˈreɾ ˈmɛw. əˈkɛs.tə tu.rəˈðo.ɾə ˈpi.tə ɛŋ ˈkɔ.ði ˈmɔɾ.sə ˈka.ðə βəˈɣa.ðə kə ˈsal.tə l ˈpa. əsˈtik kum.bəɲˈsud kə tɾənzˈmɛd ləz ˈnɔs.tɾəz kum.bəɾˈsa.zəz əl mi.nisˈtɛ.ɾi]",
    "Hugo, no transmet res. Se t'ha cremat la llesca perquè has posat la potència al màxim. Torna-la ja i marxem abans que ens facin fora.":
      "[ˈu.ɣu, no tɾənzˈmɛd ˈrɛs. sə ˈta kɾəˈmad lə ˈʎes.kə pəɾˈkɛ əs puˈzat lə puˈtɛn.si.ə əl ˈmak.sim. ˈtoɾ.nə.lə ˈʒa i məɾˈʃɛm əˈβanz kə əns ˈfa.sin ˈfɔ.ɾə]",
    "Bon dia! Segons el manual d'atenció al client, per tornar electrodomèstics amb sospites d'espionatge necessito l'embalatge original i un testimoni jurat.":
      "[ˈbɔn ˈdi.ə! səˈɣonz əl məˈnwal də.tən.siˈo əl kliˈen, pəɾ tuɾˈna ə.lɛk.tɾu.ðuˈmɛs.tiks əm susˈpi.təz ðəs.pjuˈna.dʒə nə.səˈsi.tu ləm.bəˈla.dʒə u.ɾi.ʒiˈnal i un təs.tiˈmɔ.ni ʒuˈɾat]",
    "Ho veus, Clara? El protocol de seguretat nacional ja està en marxa! Digui'm, agent Bea, quina és la contrasenya per cancel·lar l'operació?":
      "[u ˈβɛws, ˈkla.ɾə? əl pɾu.tuˈkɔl də sə.ɣu.ɾəˈtad nə.si.uˈnal ʒə sˈta əm ˈmaɾ.ʃə! ˈdi.ɣim, əˈʒen ˈbe.ə, ˈki.nə ˈez lə kun.tɾəˈsə.ɲə pəɾ kən.səˈla l u.pə.ɾə.siˈo?]",
    "La contrasenya és «croqueta», però avui l'encarregat té festa. Només us puc donar un val de la botiga o canviar la torradora per una cafetera que parla.":
      "[lə kun.tɾəˈsə.ɲə ˈez kɾuˈkɛ.tə, pəˈɾɔ əˈβuj ləŋ.kə.rəˈɣad ˈte ˈfɛs.tə. nuˈmez uz puk duˈna um ˈbal də lə ˈbɔ.ti.ɣə u kəɲˈbja lə tu.rəˈðo.ɾə pəɾ ˈu.nə kə.fəˈte.ɾə kə ˈpaɾ.lə]",
    "Dóna'm la cafetera que parla, Bea. Segur que té converses amb més sentit que les que sento a casa.":
      "[ˈdɔ.nəm lə kə.fəˈte.ɾə kə ˈpaɾ.lə, ˈbe.ə. səˈɣu kə ˈte kum.bɛɾˈsəz əm ˈmez sənˈtid kə ləz kə ˈsɛn.tu ə ˈka.zə]"
  },
  "gl-ES": {
    "Clara, non mires agora... pero esa maleta verde na mesa de fronte é moi sospeitosa.":
      "[ˈkla.ɾɐ, noŋ ˈmi.ɾɪs ɐˈɣɔ.ɾɐ... ˈpɛ.ɾʊ ˈe.sɐ mɐˈle.tɐ ˈbɛɾ.ðɪ nɐ ˈme.sɐ ðɪ ˈfɾɔn.tɪ ɛ ˈmɔj sɔs.pejˈto.sɐ]",
    "É só unha maleta, Hugo. Come o teu bocadillo en paz.":
      "[ɛ ˈsɔ ˈu.ɲɐ mɐˈle.tɐ, ˈu.ɣʊ. ˈkɔ.mɪ ʊ ˈtew βo.kɐˈði.ʎʊ em ˈpas]",
    "Ninguén deixa unha maleta verde así coma así. Ten que haber documentos secretos. Ou diamantes!":
      "[niŋˈɡɛŋ ˈdej.ʃɐ ˈu.ɲɐ mɐˈle.tɐ ˈbɛɾ.ðɪ ɐˈsi ˈkɔ.mɐ ɐˈsi. ˈtɛŋ kɪ ɐˈβeɾ do.kuˈmɛn.tʊs seˈkɾe.tʊs. ow djɐˈman.tɪs!]",
    "Ou roupa sucia.":
      "[ow ˈrow.pɐ ˈsu.sjɐ]",
    "Desculpen! Alguén viu a miña maleta verde con purpurina?":
      "[desˈkul.pɛn! ɐlˈɡɛŋ ˈbiw ɐ ˈmi.ɲɐ mɐˈle.tɐ ˈbɛɾ.ðɪ kom puɾ.puˈɾi.nɐ?]",
    "Purpurina? É esa a clave secreta para os diamantes?":
      "[puɾ.puˈɾi.nɐ? ˈɛ ˈe.sɐ ɐ ˈkla.βɪ seˈkɾe.tɐ ˈpa.ɾɐ ʊz djɐˈman.tɪs?]",
    "Non, rapaz. É a miña roupa de adestramento para a clase de hip-hop.":
      "[noŋ, rɐˈpas. ɛ ɐ ˈmi.ɲɐ ˈrow.pɐ ðɪ ɐ.ðɛs.tɾɐˈmen.tʊ ˈpa.ɾɐ ɐ ˈkla.sɪ ðɪ hip.hɔp]",
    "Boas tardes, señorita! Quero un café tan forte que me esperte en 1985, e cun toque de perigo.":
      "[ˈbo.ɐs ˈtaɾ.ðɪs, se.ɲoˈɾi.tɐ! ˈkɛ.ɾʊ uŋ kɐˈfɛ tam ˈfɔɾ.tɪ kɪ mɪ esˈpɛɾ.tɪ en ˈmil nɔ.βɪˈsɛn.tʊs ojˈten.tɐ e ˈsiŋ.kʊ, e kun ˈto.kɪ ðɪ peˈɾi.ɣʊ]",
    "Coma queira! Un café a ferver servido xusto no bordo da mesa e un espertador programado hai corenta anos.":
      "[ˈkɔ.mɐ ˈkej.ɾɐ! uŋ kɐˈfɛ ɐ feɾˈβeɾ seɾˈβi.ðʊ ˈʃus.tʊ nʊ ˈbɔɾ.ðʊ ðɐ ˈme.sɐ e uŋ es.peɾ.tɐˈðoɾ pɾo.ɣɾɐˈma.ðʊ aj koˈɾɛn.tɐ ˈa.nʊs]",
    "E os panos de mesa? Preciso de exactamente sete para os meus trucos de maxia.":
      "[e ʊs ˈpa.nʊs ðɪ ˈme.sɐ? pɾeˈsi.sʊ ðɪ eɡ.sɐk.tɐˈmɛn.tɪ ˈsɛ.tɪ ˈpa.ɾɐ ʊz ˈmews ˈtɾu.kʊs ðɪ ˈma.ʃjɐ]",
    "Aquí ten sete panos de mesa numerados do un ao sete e cinta amarela de precaución.":
      "[ɐˈki ˈtɛŋ ˈsɛ.tɪ ˈpa.nʊs ðɪ ˈme.sɐ nu.meˈɾa.ðʊs dʊ ˈuŋ aw ˈsɛ.tɪ e ˈsin.tɐ ɐ.mɐˈɾɛ.lɐ ðɪ pɾe.kawˈsjoŋ]",
    "Don Ramón, segundo a cláusula catro do noso acordo bilateral, vostede debe transferirme o seu cromo holográfico.":
      "[dom rɐˈmoŋ, seˈɣun.dʊ ɐ ˈklaw.su.lɐ ˈka.tɾʊ dʊ ˈnɔ.sʊ ɐˈkɔɾ.ðʊ bi.lɐ.teˈɾal, bosˈte.ðɪ ˈde.βɪ tɾɐns.feˈɾiɾ.mɪ ʊ ˈsew ˈkɾɔ.mʊ o.loˈɣɾa.fi.kʊ]",
    "Tranquilo, avogadiño. Primeiro enséñame a subir vídeos con música moderna a esa rede social.":
      "[tɾɐŋˈki.lʊ, ɐ.βo.ɣɐˈði.ɲʊ. pɾiˈmej.ɾʊ enˈsɛ.ɲɐ.mɪ ɐ suˈβiɾ ˈbi.ðjʊs kom ˈmu.si.kɐ moˈðɛɾ.nɐ ɐ ˈe.sɐ ˈrɛ.ðɪ soˈsjal]",
    "Iso requirirá unha extensión do meu toque de queda. E desde unha perspectiva nutricional, o xeado cualifícase como lácteo.":
      "[ˈi.sʊ re.ki.ɾiˈɾa ˈu.ɲɐ es.tenˈsjoŋ dʊ ˈmew ˈto.kɪ ðɪ ˈke.ðɐ. e ˈdɛz.ðɪ ˈu.ɲɐ peɾs.pekˈti.βɐ nu.tɾi.sjoˈnal, ʊ ʃeˈa.ðʊ kwɐ.liˈfi.kɐ.sɪ ˈkɔ.mʊ ˈlak.te.ʊ]",
    "Trato feito, compañeiro! Á miña idade non pido permiso: pido xeado dobre e imos patinar!":
      "[ˈtɾa.tʊ ˈfej.tʊ, kom.pɐˈɲej.ɾʊ! a ˈmi.ɲɐ iˈða.ðɪ noŋ ˈpi.ðʊ peɾˈmi.sʊ: ˈpi.ðʊ ʃeˈa.ðʊ ˈdɔ.βɾɪ e ˈi.mʊs pɐ.tiˈnaɾ!]",
    "Clara, ponte detrás de min. Esta torradora emite asubíos en código morse cada vez que salta o pan. Estou convencido de que lle transmite as nosas conversas ao ministerio.":
      "[ˈkla.ɾa, ˈpon̪.te deˈtɾaz ðe ˈmiŋ. ˈɛs.ta to.raˈðo.ɾa eˈmi.te a.suˈβi.os eŋ ˈkɔ.ði.ɣo ˈmɔɾ.se ˈka.ða ˈbeθ ke ˈsal.ta o ˈpaŋ. esˈtow kom.benˈθi.ðo ðe ke ʎe tɾanzˈmi.te az ˈnɔ.sas kom.beɾˈsa.sjos al mi.nisˈtɛ.ɾjo]",
    "Hugo, non transmite nada. Queimóuseche a rebanda porque puxeches a potencia a tope. Devólvea xa e marchamos antes de que nos boten fóra.":
      "[ˈu.ɣo, noŋ tɾanzˈmi.te ˈna.ða. kejˈmɔw.se.t͡ʃe a reˈβan̪.da poɾˈke puˈʃe.t͡ʃes a poˈtɛn̪.sja a ˈto.pe. deˈβɔl.βe.a ˈʃa i maɾˈt͡ʃa.mos ˈan̪.tes ðe ke noz ˈbɔ.teŋ ˈfɔ.ɾa]",
    "Bos días! Segundo o manual de atención ao cliente, para devolver electrodomésticos con sospeitas de espionaxe preciso a embalaxe orixinal e unha testemuña xurada.":
      "[ˈbɔz ˈdi.as! seˈɣun.do o maˈnwal de a.tenˈsjoŋ al kliˈen̪.te, ˈpa.ɾa de.βolˈβeɾ e.lɛk.tɾo.ðoˈmɛs.ti.kos kon sosˈpej.taz ðe es.pjoˈna.ʃe pɾeˈθi.so a em.baˈla.ʃe o.ɾi.ʃiˈnal i ˈu.ɲa tes.teˈmu.ɲa ʃuˈɾa.ða]",
    "Velo, Clara? O protocolo de seguridade nacional xa está en marcha! Dígame, axente Bea, cal é o contrasinal para cancelar a operación?":
      "[ˈbe.lo, ˈkla.ɾa? o pɾo.toˈkɔ.lo ðe se.ɣu.ɾiˈða.ðe na.sjoˈnal ʃa esˈta em ˈmaɾ.t͡ʃa! ˈdi.ɣa.me, aˈʃɛn̪.te ˈbe.a, ˈkal ˈɛ o kon.tɾa.siˈnal ˈpa.ɾa kan.θeˈlaɾ a o.pe.ɾaˈsjoŋ?]",
    "O contrasinal é «croqueta», pero hoxe o encargado libra. Só vos podo dar un vale da tenda ou cambiar a torradora por unha cafeteira que fala.":
      "[o kon.tɾa.siˈnal ˈɛ kɾoˈkɛ.ta, ˈpɛ.ɾo ˈo.ʃe o eŋ.kaɾˈɣa.ðo ˈli.βɾa. ˈsɔ βoz ˈpɔ.ðo ˈdaɾ um ˈba.le da ˈtɛn̪.da o kamˈbjaɾ a to.raˈðo.ɾa poɾ ˈu.ɲa ka.feˈtej.ɾa ke ˈfa.la]",
    "Deme a cafeteira que fala, Bea. Seguro que ten conversas máis asisadas que as que teño que aturar na casa.":
      "[ˈde.me a ka.feˈtej.ɾa ke ˈfa.la, ˈbe.a. seˈɣu.ɾo ke ˈtɛŋ kom.beɾˈsa.sjos ˈmajz a.siˈsa.ðas ke az ke ˈtɛ.ɲo ke a.tuˈɾaɾ na ˈka.sa]"
  },
  "oc-FR": {
    "Clara, agaches pas ara... mas aquela valisa verda sus la taula d'en fàcia es plan suspècta.":
      "[ˈkla.ɾɔ, aˈɡa.tʃes pas ˈa.ɾɔ... mas aˈke.lɔ baˈli.zɔ ˈβɛɾ.ðɔ sys lɔ ˈtaw.lɔ dɛm ˈfa.sjɔ es plan sysˈpɛk.tɔ]",
    "Es pas qu'una valisa, Uc. Manja ton entrepan en patz.":
      "[es pas ˈky.nɔ baˈli.zɔ, yk. ˈman.d͡ʒɔ tun en.tɾeˈpan em pats]",
    "Degun daissa pas una valisa verda atau a l'abandon. I deu aver de documents secrets. O de diamants!":
      "[deˈɣyn ˈdaj.sɔ pas ˈy.nɔ baˈli.zɔ ˈβɛɾ.ðɔ aˈtaw a lam.banˈdun. i dew aˈβe ðe du.kyˈmens seˈkɾɛts. u ðe djaˈmans!]",
    "O de linge brut.":
      "[u ðe ˈlin.d͡ʒe bɾyt]",
    "Excusatz-me! Qualqu'un a vist ma valisa verda amb de belugas?":
      "[eks.kyˈzas.me! kalˈkyn a bis ma baˈli.zɔ ˈβɛɾ.ðɔ am de beˈly.ɣɔs?]",
    "De belugas? Es aquel lo mot de pass secret per los diamants?":
      "[de beˈly.ɣɔs? ez aˈkɛl lu mud ðe pas seˈkɾɛt peɾ luz djaˈmans?]",
    "Non pas, gojat! Es mon vestit d'entraïnament per lo cors de hip-hop.":
      "[num pas, ɡuˈd͡ʒat! es mum besˈtit dɛn.tɾaj.naˈmen peɾ lu kuɾs ðe hip.hɔp]",
    "Bonsir, domaisèla! Vòli un cafè tant fòrt que me desvelhe en 1985, e amb un briconet de dangièr.":
      "[bunˈsi, du.majˈzɛ.lɔ! ˈbɔ.li yŋ kaˈfɛ tam fɔɾ ke me dezˈβe.ʎe en mil nɔw.sents ujˈten.tɔ e siŋk, e am ym bɾi.kuˈnet fe danˈd͡ʒɛ]",
    "Òc plan! Un cafè bolhent servit just al caire de la taula e un revelh reglat fa quaranta ans.":
      "[ɔk plan! yŋ kaˈfɛ buˈʎen seɾˈbit d͡ʒyst al ˈkaj.ɾe ðe lɔ ˈtaw.lɔ e yɲ reˈβeʎ reˈɡlat fa kwaˈɾan.tɔ ans]",
    "E los mandils? Me'n cal exactament sèt per mos torns de magia.":
      "[e luz manˈdils? men kal eɡ.zak.taˈmen sɛt peɾ muz tuɾnz ðe maˈd͡ʒi.ɔ]",
    "Vaicí vòstres sèt mandils numerotats d'un a sèt e de riban jaune de precaucion.":
      "[bajˈsi ˈβɔs.tɾes sɛt manˈdils ny.me.ɾuˈtats dyn a sɛt e ðe riˈβan ˈd͡ʒaw.ne ðe pɾe.kawˈsju]",
    "Sénher Ramon, segon la clausa quatre de nòstre acòrd bilateral, me devètz transferir vòstre cromò olografic.":
      "[ˈse.ɲe raˈmun, seˈɣun lɔ ˈklaw.zɔ ˈkwa.tɾe ðe ˈnɔs.tɾe aˈkɔɾt bi.la.teˈɾal, me deˈβɛts tɾans.feˈɾi ˈβɔs.tɾe kɾuˈmɔ u.lu.ɣɾaˈfik]",
    "Tranquil, avocat pichonet. D'en primièr ensenha-me a publicar de vidèos amb de musica modèrna sus aquela ret sociala.":
      "[tɾaŋˈkil, a.βuˈkat pi.t͡ʃuˈnet. dɛm pɾiˈmje enˈse.ɲɔ.me a py.βliˈka ðe biˈdɛ.uz am de myˈzi.kɔ muˈðɛɾ.nɔ syz aˈke.lɔ ret suˈsja.lɔ]",
    "Aquò demandarà una extension de ma cobrafuòc. E d'un ponch de vista nutricional, lo glaçat compta coma un produch lachièr.":
      "[aˈkɔ de.man.daˈɾa ˈy.nɔ eks.tenˈsju ðe ma ku.βɾaˈfwɔk. e dym punt͡ʃ ðe ˈbis.tɔ ny.tɾi.sjuˈnal, lu ɡlaˈsat ˈkun.tɔ ˈkɔ.mɔ ym pɾuˈdyt͡ʃ laˈt͡ʃje]",
    "Afhar conclús, sòci! A mon edat demandi pas ges de permission: demandi un glaçat doble e anam patinar!":
      "[aˈfaɾ kuŋˈklys, ˈsɔ.si! a mun eˈdat deˈman.di pas d͡ʒez ðe peɾ.miˈsju: deˈman.di yŋ ɡlaˈsat ˈdu.βle e aˈnam pa.tiˈna!]",
    "Clara, te bota darrièr ieu. Aquela grasilhadeira bipa en còdi morse cada còp que lo pan sauta. Siái segur que transmet nòstras convèrsas al ministèri.":
      "[ˈkla.ɾɔ, te ˈbu.to daˈrjeɾ ˈjew. aˈke.lo ɡɾa.zi.ʎaˈðej.ɾɔ ˈbi.po eŋ ˈkɔ.ði ˈmɔɾ.se ˈka.ðo kɔp ke lu pam ˈsaw.to. sjaj seˈɣyɾ ke tɾanzˈmet ˈnɔs.tɾoz kum.bɛɾˈsas al mi.nisˈtɛ.ɾi]",
    "Hugo, transmet pas ren. As cremat la lesca perque as botat la poténcia a fons. Tòrna-la lèu e partèm abans que nos fòrabandisson.":
      "[ˈy.ɣu, tɾanzˈmet pas reŋ. as kɾeˈmat la ˈles.ko peɾˈke as buˈtat la puˈten.sjo a funs. ˈtɔɾ.no.lo ˈlɛw e paɾˈtɛm aˈbans ke nuz fɔ.ɾa.βanˈdi.sun]",
    "Bonjorn ! Segon lo manual de servici al client, per tornar d'electrodomestics amb de suspèctas d'espionatge me cal l'embalatge d'origina e un testimòni jurat.":
      "[bunˈʒuɾ! seˈɣum lu maˈnwal de seɾˈbi.si al kliˈen, peɾ tuɾˈna de.lɛk.tɾu.ðuˈmɛs.tiks am de sysˈpɛk.toz des.pjuˈna.dʒe me kal ləm.baˈla.dʒe du.ɾiˈdʒi.no e ym tes.tiˈmɔ.ni dʒyˈɾat]",
    "O ves, Clara? Lo protocòl de seguretat nacionala es ja en marcha! Digatz-me, agenta Bea, quina es la senhal per anullar l'operacion?":
      "[u βes, ˈkla.ɾɔ? lu pɾu.tuˈkɔl de se.ɣy.ɾeˈtat na.sjuˈna.lo ez dʒa em ˈmaɾ.t͡ʃo! diˈɣaz.me, aˈdʒen.to ˈbe.o, ˈki.no ez la seˈɲal peɾ a.nyˈla lu.pe.ɾaˈsjum?]",
    "La senhal es «croqueta», mas uèi lo responsable es en repaus. Vos pòdi sonque donar un bon de crompa o escambiar la grasilhadeira per una cafetièra que parla.":
      "[la seˈɲal ez kɾuˈke.to, maz ˈwɛj lu res.punˈsa.ble ez em reˈpaws. buz ˈpɔ.ði suŋ.ke duˈna ym bum de ˈkɾum.po u es.kamˈbja la ɡɾa.zi.ʎaˈðej.ɾo peɾ ˈy.no ka.feˈtje.ɾo ke ˈpaɾ.lo]",
    "Donatz-me la cafetièra que parla, Bea. Segur qu'a de convèrsas mai sensadas que çò qu'ausissi a l'ostal.":
      "[duˈna.me la ka.feˈtje.ɾo ke ˈpaɾ.lo, ˈbe.o. seˈɣyɾ ka de kum.bɛɾˈsas maj senˈsa.ðoz ke sɔ kawˈsi.si a lusˈtal]"
  },
"de-DE": {
    "Clara, schau jetzt nicht hin... aber dieser grüne Koffer auf dem Tisch da drüben ist extrem verdächtig.":
      "[ˈklaːʁa, ʃaʊ̯ jɛtst nɪçt hɪn... ˈaːbɐ ˈdiːzɐ ˈɡʁyːnə ˈkɔfɐ aʊ̯f deːm tɪʃ daː ˈdʁyːbn̩ ɪst ɛksˈtʁeːm fɛɐ̯ˈdɛçtɪç]",
    "Es ist nur ein Koffer, Hugo. Iss dein Sandwich.":
      "[ɛs ɪst nuːɐ̯ aɪ̯n ˈkɔfɐ, ˈhuːɡo. ɪs daɪ̯n ˈsɛntvɪtʃ]",
    "Niemand lässt einfach so einen grünen Koffer stehen. Da müssen Geheimdokumente drin sein. Oder Diamanten!":
      "[ˈniːmant lɛst ˈaɪ̯nfax zoː ˈaɪ̯nən ˈɡʁyːnən ˈkɔfɐ ˈʃteːən. daː ˈmʏsn̩ ɡəˈhaɪ̯mdokuˌmɛntə dʁɪn zaɪ̯n. ˈoːdɐ diaˈmantn̩!]",
    "Oder Schmutzwäsche.":
      "[ˈoːdɐ ˈʃmʊtsˌvɛʃə]",
    "Entschuldigung! Hat jemand meinen grünen Glitzerkoffer gesehen?":
      "[ɛntˈʃʊldɪɡʊŋ! hat ˈjeːmant ˈmaɪ̯nən ˈɡʁyːnən ˈɡlɪtsɐˌkɔfɐ ɡəˈzeːən?]",
    "Glitzer? Ist das etwa das Codewort für die Diamanten?":
      "[ˈɡlɪtsɐ? ɪst das ˈɛtvaː das ˈkoːtˌvɔʁt fyːɐ̯ diː diaˈmantn̩?]",
    "Nein, Junge. Das ist mein Outfit für meinen Hip-Hop-Tanzkurs.":
      "[naɪ̯n, ˈjʊŋə. das ɪst maɪ̯n ˈaʊ̯tfɪt fyːɐ̯ ˈmaɪ̯nən ˈhɪphɔpˌtantskʊʁs]",
    "Guten Tag, junge Dame! Ich hätte gerne einen Kaffee, so stark, dass er mich 1985 aufweckt – und mit einem Hauch von Gefahr.":
      "[ˈɡuːtn̩ taːk, ˈjʊŋə ˈdaːmə! ɪç ˈhɛtə ˈɡɛʁnə ˈaɪ̯nən kaˈfeː, zoː ʃtaʁk, das eːɐ̯ mɪç ˈnaʊ̯ntseːnˌhʊndɐtfʏnfʊntˈʔaxtsɪç ˈaʊ̯fvɛkt – ʊnt mɪt ˈaɪ̯nəm haʊ̯x fɔn ɡəˈfaːɐ̯]"
  },

  "it-IT": {
    "Clara, non guardare adesso... ma quella valigia verde sul tavolo di fronte è molto sospetta.":
      "[ˈklaːra, non ɡwarˈdaːre aˈdɛsso... ma ˈkwella vaˈliːdʒa ˈverde sul ˈtaːvolo di ˈfronte ɛ ˈmolto soˈspetta]",
    "È solo una valigia, Hugo. Mangia il tuo panino.":
      "[ɛ ˈsoːlo ˈuːna vaˈliːdʒa, ˈuːɡo. ˈmandʒa il ˈtuːo paˈniːno]",
    "Nessuno lascia una valigia verde così. Devono esserci documenti segreti. O diamanti!":
      "[nesˈsuːno ˈlaʃʃa ˈuːna vaˈliːdʒa ˈverde koˈzi. ˈdeːvono ˈɛʃʃertʃi dokuˈmenti seˈɡreːti. o djaˈmanti!]",
    "O biancheria sporca.":
      "[o bjaŋkeˈriːa ˈspɔrka]",
    "Scusatemi! Qualcuno ha visto la mia valigia verde con i brillantini?":
      "[skuˈzaːtemi! kwalˈkuːno a ˈvisto la ˈmiːa vaˈliːdʒa ˈverde kon i brillanˈtiːni?]",
    "Brillantini? È questa la parola d'ordine per i diamanti?":
      "[brillanˈtiːni? ɛ ˈkwesta la paˈrɔːla ˈdordine per i djaˈmanti?]",
    "Ma no, ragazzo! È il mio completo per il corso di hip-hop.":
      "[ma ˈnɔ, raˈɡattso! ɛ il ˈmiːo komˈplɛːto per il ˈkorso di hip.hɔp]",
    "Buon pomeriggio, signorina! Vorrei un caffè così forte da svegliarmi nel 1985, e con un tocco di pericolo.":
      "[bwon pomerˈiddʒo, siɲɲoˈriːna! vorˈrɛi uŋ kafˈfɛ koˈzi ˈfɔrte da zveʎˈʎarmi nel ˈmille noːvetʃɛnˈtotˌtantatˈtʃiŋkwe, e kon un ˈtɔkko di peˈriːkolo]"
  },

  "nb-NO": {
    "Clara, ikke se nå... men den grønne kofferten på bordet overfor er veldig mistenkelig.":
      "[ˈklɑːɾɑ, ˈɪkːə seː noː... men den ˈɡɾønːə ˈkʊfɛʈn̩ poː ˈbuːɾə ˈoːvɛɾfuːɾ æɾ ˈvɛldɪ ˈmɪstɛŋklɪ]",
    "Det er bare en koffert, Hugo. Spis sandwichen din.":
      "[deː æɾ ˈbɑːɾə eːn ˈkʊfɛʈ, ˈhʉːɡu. spiːs ˈsænvɪtʃn̩ diːn]",
    "Ingen forlater en grønn koffert sånn uten videre. Det må være hemmelige dokumenter oppi. Eller diamanter!":
      "[ˈɪŋːn̩ fɔˈlɑːtɛɾ eːn ɡɾøn ˈkʊfɛʈ sɔn ˈʉːtn̩ ˈviːdəɾə. deː moː ˈvæːɾə ˈhɛməlɪə dʊkʉˈmɛntəɾ ˈɔpːi. ˈɛlːəɾ djɑˈmɑntəɾ!]",
    "Eller skittentøy.":
      "[ˈɛlːəɾ ˈʃɪtːn̩tœʏ]",
    "Unnskyld meg! Er det noen som har sett den grønne glitterkofferten min?":
      "[ˈʉnːʃʏl mæɪ! æɾ deː ˈnuːn sʊm hɑːɾ sɛt den ˈɡɾønːə ˈɡlɪtːəɾˌkʊfɛʈn̩ miːn?]",
    "Glitter? Er det kodenavnet for diamantene?":
      "[ˈɡlɪtːəɾ? æɾ deː ˈkuːdəˌnɑvnə fɔɾ djɑˈmɑntn̩ə?]",
    "Nei, gutt. Det er antrekket mitt til hiphop-timen min.":
      "[næɪ, ɡʉt. deː æɾ ˈɑntɾɛkːə mɪt tɪl ˈhɪphɔpˌtiːmən miːn]",
    "God dag, frøken! Jeg vil ha en kaffe som er så sterk at jeg våkner i 1985, og med et snev av fare.":
      "[ɡuː dɑːɡ, ˈfɾøːkn̩! jæɪ vɪl hɑː eːn ˈkɑfːə sʊm æɾ soː stæɾk ɑt jæɪ ˈvɔknəɾ i ˈnɪtːn̩ ˈɔtːi fɛm, ɔ meːd eːt sneːv ɑːv ˈfɑːɾə]"
  },

  "tr-TR": {
    "Clara, şimdi bakma... ama karşı masadaki o yeşil bavul son derece şüpheli.":
      "[klaˈɾa, ʃimˈdi bakˈma... aˈma kaɾˈʃɯ masaˈdaki o jeˈʃil baˈvul son deɾeˈdʒe ʃypheˈli]",
    "O sadece bir bavul Hugo. Sandviçini ye.":
      "[o saːdeˈdʒe biɾ baˈvul ˈhuɡo. sandviˈtʃini je]",
    "Kimse yeşil bir bavulu öylece bırakıp gitmez. İçinde gizli belgeler olmalı. Ya da elmaslar!":
      "[cimˈse jeˈʃil biɾ bavuˈlu œjleˈdʒe bɯɾaˈkɯp ɟitˈmez. iˈtʃinde ɟizˈli belɟeˈleɾ olmaˈlɯ. ja da elmasˈlaɾ!]",
    "Veya kirli çamaşır.":
      "[veˈja ciɾˈli tʃamaˈʃɯɾ]",
    "Afedersiniz! Yeşil simli bavulumu gören oldu mu?":
      "[afeˈdeɾsiniz! jeˈʃil simˈli bavuluˈmu ɟœˈɾen olˈdu mu?]",
    "Simli mi? Bu elmaslar için gizli bir şifre mi?":
      "[simˈli mi? bu elmasˈlaɾ iˈtʃin ɟizˈli biɾ ʃifˈɾe mi?]",
    "Hayır delikanlı. O benim hip-hop dans dersi kıyafetim.":
      "[haˈjɯɾ deliˈkanlɯ. o beˈnim hip.hɔp dans deɾˈsi kɯjafeˈtim]",
    "Tünaydın küçük hanım! Beni 1985'te uyandıracak kadar sert bir kahve istiyorum, yanında da biraz tehlike olsun.":
      "[tynajˈdɯn cyˈtʃyc haˈnɯm! beˈni bin doˈkuz jyːz sekˈsen beʃˈte ujanˈdɯɾadʒak kaˈdaɾ seɾt biɾ kahˈve istiˈjoɾum, janɯnˈda da biˈɾaz tehliˈce olˈsun]"
  },

  "ro-RO": {
    "Clara, nu te uita acum... dar valiza aia verde de pe masa din față e foarte suspectă.":
      "[ˈkla.ra, nu te ˈuj.ta aˈkum... dar vaˈli.za ˈa.ja ˈver.de de pe ˈma.sa din ˈfa.t͡sə e ˈfoar.te susˈpek.tə]",
    "E doar o valiză, Hugo. Mănâncă-ți sandvișul.":
      "[e d͡war o vaˈli.zə, ˈhu.ɡo. məˈnɨŋ.kə.t͡sʲ ˈsand.vi.ʃul]",
    "Nimeni nu lasă o valiză verde așa pur și simplu. Trebuie să fie documente secrete. Sau diamante!":
      "[ˈni.me.ni nu ˈla.sə o vaˈli.zə ˈver.de aˈʃa pur ʃi ˈsim.plu. ˈtre.bu.je sə ˈfi.e dokuˈmen.te seˈkre.te. saw djaˈman.te!]",
    "Sau haine murdare.":
      "[saw ˈhaj.ne murˈda.re]",
    "Mă scuzați! A văzut cineva valiza mea verde cu sclipici?":
      "[mə skuˈzat͡sʲ! a vəˈzut t͡ʃi.neˈva vaˈli.za ˈme̯a ˈver.de ku skliˈpit͡ʃ?]",
    "Sclipici? Acesta este codul secret pentru diamante?":
      "[skliˈpit͡ʃ? aˈt͡ʃes.ta ˈjes.te ˈko.dul seˈkret ˈpen.tru djaˈman.te?]",
    "Nu, băiete. E costumul meu pentru cursul de hip-hop.":
      "[nu, bəˈje.te. e kosˈtu.mul mew ˈpen.tru ˈkur.sul de hip.hɔp]",
    "Bună ziua, domnișoară! Vreau o cafea atât de tare încât să mă trezească în 1985, și cu un strop de pericol.":
      "[ˈbu.nə ˈziw̯.a, dom.niˈʃwa.rə! vraw o kaˈfe̯a əˈtɨt de ˈta.re ɨŋˈkɨt sə mə treˈze̯as.kə ɨn ˈo.mie ˈno.wə ˈsute optˈzet͡ʃʲ ʃi t͡ʃint͡ʃʲ, ʃi ku un strop de peˈri.kol]"
  },

  "pl-PL": {
    "Clara, nie patrz teraz... ale ta zielona walizka na stole naprzeciwko jest bardzo podejrzana.":
      "[ˈklara, ɲɛ patʂ ˈtɛras... ˈalɛ ta ʑɛˈlɔna vaˈlʲiska na ˈstɔlɛ napʂɛˈt͡ɕifkɔ jɛst ˈbard͡zɔ pɔdɛjˈʐana]",
    "To tylko walizka, Hugo. Zjedz swoją kanapkę.":
      "[tɔ ˈtɨlkɔ vaˈlʲiska, ˈxuɡɔ. zjɛt͡s ˈsfɔjɔ̃ kaˈnapkɛ̃]",
    "Nikt nie zostawia zielonej walizki ot tak. Muszą tam być tajne dokumenty. Albo diamenty!":
      "[ɲikt ɲɛ zɔsˈtavja ʑɛˈlɔnɛj vaˈlʲiski ɔt tak. ˈmuʂɔ̃ tam bɨt͡ɕ ˈtajnɛ dɔkuˈmɛntɨ. ˈalbɔ djaˈmɛntɨ!]",
    "Albo brudne pranie.":
      "[ˈalbɔ ˈbrudnɛ ˈpraɲɛ]",
    "Przepraszam bardzo! Czy ktoś widział moją zieloną brokatową walizkę?":
      "[pʂɛˈpraʂam ˈbard͡zɔ! t͡ʂɨ ktɔɕ ˈvʲid͡ʑaw ˈmɔjɔ̃ ʑɛˈlɔnɔ̃ brɔkaˈtɔvɔ̃ vaˈlʲiskɛ̃?]",
    "Brokat? Czy to tajny kryptonim dla diamentów?":
      "[ˈbrɔkat? t͡ʂɨ tɔ ˈtajnɨ krɨpˈtɔɲim dla djaˈmɛntuf?]",
    "Nie, chłopcze. To mój strój na zajęcia z hip-hopu.":
      "[ɲɛ, ˈxwɔpt͡ʂɛ. tɔ muj struj na zaˈjɛɲt͡ɕa z ˈxiphɔpu]",
    "Dzień dobry, panienko! Poproszę kawę tak mocną, żeby obudziła mnie w 1985 roku, i z nutką niebezpieczeństwa.":
      "[d͡ʑɛɲ ˈdɔbrɨ, paˈɲɛŋkɔ! pɔˈprɔʂɛ̃ ˈkavɛ̃ tak ˈmɔt͡snɔ̃, ˈʐɛbɨ ɔbuˈd͡ʑiwa mɲɛ v‿ˈtɨɕɔnt͡s ˈd͡ʑɛvjɛɲt͡sɛt ˈɔɕɛmd͡ʑɛɕɔnt ˈpʲɔntɨm ˈrɔku, i z‿ˈnutkɔ̃ ɲɛbɛzpjɛˈt͡ʂɛj̃stfa]"
  },

  "da-DK": {
    "Clara, kig ikke nu... men den grønne kuffert på bordet overfor er meget mistænkelig.":
      "[ˈklɑːʁɑ, kʰiː ˈekə nuː... mɛn dɛn ˈɡʁœnə ˈkʰufɐt pʰɔ ˈboːðð̩ ˈɒwɐˌfɒː æ ˈmɑːð̩ mɪsˈtɛŋkʰli]",
    "Det er bare en kuffert, Hugo. Spis din sandwich.":
      "[de æ ˈbɑːɑ eːn ˈkʰufɐt, ˈhuːɡo. sbiːs din ˈsɛnvɪtʃ]",
    "Ingen efterlader en grøn kuffert bare sådan. Der må være hemmelige dokumenter i den. Eller diamanter!":
      "[ˈeŋn̩ ˈɛftɐˌlæːðɐ eːn ɡʁœn ˈkʰufɐt ˈbɑːɑ ˈsɔdn̩. dɑ mɔ vɛːɐ ˈhɛməlɪə dokuˈmɛntɐ i dɛn. ˈɛlɐ djaˈmantɐ!]",
    "Eller snavsetøj.":
      "[ˈɛlɐ ˈsnɑwsəˌtʰʌj]",
    "Undskyld mig! Er der nogen, der har set min grønne glitterkuffert?":
      "[ˈonˌsɡyl mɑj! æ dɑ ˈnoːn, dɑ hɑ seːt min ˈɡʁœnə ˈɡlɪtɐˌkʰufɐt?]",
    "Glitter? Er det kodenavnet for diamanterne?":
      "[ˈɡlɪtɐ? æ de ˈkʰoːðəˌnɑwnð̩ fɒ djaˈmantɐnə?]",
    "Nej, knægt. Det er mit tøj til hiphop-timen.":
      "[nɑj, kʰnɛkt. de æ mit tʰʌj tˢel ˈhɪphɔpˌtˢiːmən]",
    "Goddag, unge dame! Jeg vil have en kaffe, der er så stærk, at den vækker mig i 1985, og med et strejf af fare.":
      "[ɡoˈdæː, ˈɔŋə ˈdæːmə! jɑ vɪl hæ eːn ˈkʰɑfə, dɑ æ sɔ stæɐ̯k, ɑt dɛn ˈvɛkɐ mɑj i ˈnɪtn̩ ˈfʏmfɔwɐˌfʏɐ̯s, ɔ mɛð eːt sdʁɑjf ɑw ˈfɑːɑ]"
  },

  "cs-CZ": {
    "Kláro, nedívej se teď... ale ten zelený kufr na stole naproti je hodně podezřelý.":
      "[ˈklaːro, ˈnɛdiːvɛj sɛ tɛt͡s... ˈalɛ tɛn ˈzɛlɛniː ˈkufr̩ na ˈstɔlɛ ˈnaprɔcɪ jɛ ˈɦɔdɲɛ ˈpɔdɛzr̝ɛliː]",
    "Je to jenom kufr, Hugo. Sněz svůj sendvič.":
      "[jɛ tɔ ˈjɛnɔm ˈkufr̩, ˈɦuːɡo. sɲɛs svuːj ˈsɛndvɪt͡ʃ]",
    "Nikdo nenechá zelený kufr jen tak ležet. Určitě v něm jsou tajné dokumenty. Nebo diamanty!":
      "[ˈnɪɡdɔ ˈnɛnɛxaː ˈzɛlɛniː ˈkufr̩ jɛn tak ˈlɛʒɛt. ˈurt͡ʃɪcɛ v‿ɲɛm jsɔu̯ ˈtajnɛː dɔkuˈmɛntɪ. ˈnɛbɔ djaˈmantɪ!]",
    "Nebo špinavé prádlo.":
      "[ˈnɛbɔ ˈʃpɪnavɛː ˈpraːdlɔ]",
    "Promiňte! Neviděl někdo můj zelený třpytivý kufr?":
      "[ˈprɔmɪɲtɛ! ˈnɛvɪɟɛl ˈɲɛɡdɔ muːj ˈzɛlɛniː ˈtr̝̊pɪcɪviː ˈkufr̩?]",
    "Třpytky? To je tajné heslo pro ty diamanty?":
      "[ˈtr̝̊pɪtkɪ? tɔ jɛ ˈtajnɛː ˈɦɛslɔ prɔ tɪ djaˈmantɪ?]",
    "Ale kdepak, chlapče. To je můj kostým na lekci hip-hopu.":
      "[ˈalɛ ˈɡdɛpak, ˈxlapt͡ʃɛ. tɔ jɛ muːj kɔsˈtiːm na ˈlɛkt͡sɪ ˈhɪphɔpu]",
    "Dobrý den, slečno! Chtěl bych kávu tak silnou, aby mě probudila v roce 1985, a s trochou nebezpečí.":
      "[ˈdɔbriː dɛn, ˈslɛt͡ʃnɔ! xcɛl bɪx ˈkaːvu tak ˈsɪlnɔu̯, ˈabɪ mɲɛ ˈprɔbuɟɪla v‿ˈrɔt͡sɛ ˈtɪsiːt͡s ˈdɛvjɛt sɛt ˈɔsmdɛsaːt ˈpʲɛt, a s‿ˈtrɔxɔu̯ ˈnɛbɛspɛt͡ʃiː]"
  },

  "ml-IN": {
    "ക്ലാര, ഇപ്പോൾ നോക്കരുത്... എന്നാൽ മുന്നിലെ മേശപ്പുറത്തുള്ള ആ പച്ച സ്യൂട്ട്കേസ് വളരെ സംശയാസ്പദമാണ്.":
      "[klaːɾa, ipːoːɭ noːkːaɾut̪ɨ... en̪ːaːl mun̪ːile meːʃapːuṟat̪ːuɭɭa aː pat͡ʃːa sjuːʈkeːs vaɭaɾe samʃajaːspadamaːɳɨ]",
    "ശാന്തനാകൂ, ഹ്യൂഗോ... ബസ് കാത്തിരിക്കുന്ന ഏതെങ്കിലും പ്രായമായ ആളുടെതാകും അത്.":
      "[ʃaːn̪t̪anaːɡuː, hjuːɡoː... bas kaːt̪ːiɾikːun̪ːa eːt̪eŋɡilum pɾaːjamaːja aːɭuɖet̪aːɡum at̪ɨ]",
    "ആരും അങ്ങനെ വെറുതെ പച്ച സ്യൂട്ട്കേസ് ഉപേക്ഷിച്ചു പോകില്ല. ഇതിൽ തീർച്ചയായും രഹസ്യരേഖകൾ ഉണ്ടാകും. അല്ലെങ്കിൽ രത്നങ്ങൾ!":
      "[aːɾum aŋŋane veṟut̪e pat͡ʃːa sjuːʈkeːs upeːkʂit͡ʃːu poːɡilːa. it̪il t̪iːɾt͡ʃːajaːjum ɾahasjaɾeːkʰaɡaɭ uɳɖaːɡum. alːeŋɡil ɾat̪naŋŋaɭ!]",
    "അല്ലെങ്കിൽ മുഷിഞ്ഞ വസ്ത്രങ്ങൾ.":
      "[alːeŋɡil muʂiɲɲa vast̪ɾaŋŋaɭ]",
    "ക്ഷമിക്കണം! തിളങ്ങുന്ന മിന്നലുകളുള്ള എന്റെ പച്ച സ്യൂട്ട്കേസ് ആരെങ്കിലും കണ്ടോ?":
      "[kʂamikːaɳam! t̪iɭaŋŋun̪ːa min̪ːaluɡaɭuɭɭa ente pat͡ʃːa sjuːʈkeːs aːɾeŋɡilum kaɳɖoː?]",
    "തിളങ്ങുന്നതോ? ഇത് രത്നങ്ങൾക്കുള്ള രഹസ്യ കോഡ് വാക്കാണോ?":
      "[t̪iɭaŋŋun̪ːat̪oː? it̪ɨ ɾat̪naŋŋaɭkːuɭɭa ɾahasja koːɖ vaːkːaːɳoː?]",
    "അല്ല കുട്ടാ. ഇത് എന്റെ ഹിപ്-ഹോപ്പ് ഡാൻസ് ക്ലാസിനുള്ള പരിശീലന വസ്ത്രമാണ്.":
      "[alːa kutːaː. it̪ɨ ente hip.hɔp ɖaːns klaːsinuɭɭa paɾiʃiːlana vast̪ɾamaːɳɨ]",
    "ഗുഡ് ആഫ്റ്റർനൂൺ പെൺകുട്ടീ! എന്നെ 1985-ൽ ഉണർത്തുന്ന അത്ര കടുപ്പമുള്ള ഒരു കോഫി വേണം, ഒപ്പം അല്പം അപകടത്തിന്റെ രസവും.":
      "[ɡuɖ aːftːaɾnuːɳ peɳkutːiː! en̪ːe aːjiɾat̪ːi t̪oɭːaːjiɾat̪ːi eɳpat̪ːi ant͡ʃil uɳaɾt̪ːun̪ːa at̪ɾa kaɖupːamuɭɭa oɾu koːfi veːɳam, opːam alpam apathat̪ːinte ɾasavum]"
  },
};

// ==========================================
// 2. CANONICAL LINE DICTIONARY (Universal Multi-script)
// ==========================================
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
  "クララ、俺の後ろに隠れるんだ。このトースター、パンが跳ね上がるたびにモールス信号でピピッて鳴ってる。俺たちの会話を省庁に送信してるに違いない。":
    "[kɯ̟ᵝɾa̠ɾa̠, o̞.ɾe̞ no̞ ɯ̟ᵝ.ɕi.ɾo̞ nʲi ka̠.kɯ̟ᵝ.ɾe̞.ɾɯ̟ᵝn da̠. ko̞.no̞ to̞ː.sɨᵝ.ta̠ː, pa̠ŋ ɡa̠ ha̠.ne̞.a̠.ɡa̠.ɾɯ̟ᵝ ta̠.bʲi nʲi mo̞ː.ɾɯ̟ᵝ.sɨᵝ ɕiŋ.ɡo̞ː de̞ pʲi.pʲit te̞ na̠t.te̞.ɾɯ̟ᵝ. o̞.ɾe̞.ta̠.t͡ɕi no̞ ka̠.i.wa̠ o̞ ɕo̞ː.t͡ɕo̞ː nʲi so̞ː.ɕiŋ ɕi.te̞.ɾɯ̟ᵝ nʲi t͡ɕi.ɡa̠.i na̠.i]",
  "ウーゴ、何も送信してないわよ。あなたがダイヤルを最大にしたからパンが焦げただけ。さっさと返品して、追い出される前に帰りましょう。":
    "[ɯ̟ᵝː.ɡo̞, na̠.nʲi mo̞ so̞ː.ɕiŋ ɕi.te̞ na̠.i wa̠ jo̞. a̠.na̠.ta̠ ɡa̠ da̠.i.ja̠.ɾɯ̟ᵝ o̞ sa̠.i.da̠.i nʲi ɕi.ta̠ ka̠.ɾa̠ pa̠ŋ ɡa̠ ko̞.ɡe̞.ta̠ da̠.ke̞. sa̠s.sa̠.to̞ he̞m.pʲiŋ ɕi.te̞, o̞.i.da̠.sa̠.ɾe̞.ɾɯ̟ᵝ ma̠.e̞ nʲi ka̠.e̞.ɾʲi.ma̠.ɕo̞ː]",
  "おはようございます！お客様窓口マニュアルによりますと、スパイ容疑の家電をご返品いただくには、元の外箱と宣誓証人が必要となっております。":
    "[o̞.ha̠.jo̞ː ɡo̞.za̠.i.ma̠.sɨᵝ! o̞.kʲa̠.kɯ̟ᵝ.sa̠.ma̠ ma̠.do̞.ɡɯ̟ᵝ.t͡ɕi ma̠.nʲɯ̟ᵝ.a̠.ɾɯ̟ᵝ nʲi jo̞.ɾʲi.ma̠.sɨᵝ to̞, sɨᵝ.pa̠.i jo̞ː.ɡʲi no̞ ka̠.de̞ŋ o̞ ɡo̞.hem.pʲiŋ i.ta̠.da̠.kɯ̟ᵝ nʲi wa̠, mo̞.to̞ no̞ so̞.to̞.ba̠.ko̞ to̞ se̞n.seː ɕo̞ː.nʲiŋ ɡa̠ hʲi.t͡sɨᵝ.jo̞ː to̞ na̠t.te̞ o̞.ɾʲi.ma̠.sɨᵝ]",
  "見たかい、クララ？国家安全保障プロトコルは既に発動したんだ！教えてくれ、エージェント・ベア、作戦を中止するためのパスワードは何だ？":
    "[mʲi.ta̠ ka̠.i, kɯ̟ᵝɾa̠ɾa̠? ko̞k.ka̠ a̠n.ze̞m ho̞.ɕo̞ː pɯ̟ᵝ.ɾo̞.to̞.ko̞.ɾɯ̟ᵝ wa̠ sɨᵝ.de̞ nʲi ha̠t͡sɨᵝ.do̞ː ɕi.ta̠n da̠! o̞.ɕi.e̞.te̞ kɯ̟ᵝ.ɾe̞, eː.d͡ʑe̞n.to̞ be̞.a̠, sa̠.kɯ̟ᵝ.se̞ŋ o̞ t͡ɕɯ̟ᵝː.ɕi sɨᵝ.ɾɯ̟ᵝ ta̠.me̞ no̞ pa̠.sɨᵝ.wa̠ː.do̞ wa̠ na̠n da̠?]",
  "パスワードは「コロッケ」ですが、責任者は本日お休みをいただいております。商品券をお渡しするか、トースターをおしゃべりコーヒーメーカーと交換することしかできません。":
    "[pa̠.sɨᵝ.wa̠ː.do̞ wa̠ ko̞.ɾo̞k.ke̞ de̞.sɨᵝ ɡa̠, se̞.kʲi.nʲiŋ.ɕa̠ wa̠ ho̞n.d͡ʑi.t͡sɨᵝ o̞.ja̠.sɨᵝ.mʲi o̞ i.ta̠.da̠.i.te̞ o̞.ɾʲi.ma̠.sɨᵝ. ɕo̞ː.hʲiŋ.ke̞ŋ o̞ o̞.wa̠.ta̠.ɕi sɨᵝ.ɾɯ̟ᵝ ka̠, to̞ː.sɨᵝ.ta̠ː o̞ o̞.ɕa̠.be̞.ɾʲi ko̞ː.çiː meː.ka̠ː to̞ ko̞ː.ka̠ŋ sɨᵝ.ɾɯ̟ᵝ ko̞.to̞ ɕi.ka̠ de̞.kʲi.ma̠.se̞ŋ]",
  "そのおしゃべりコーヒーメーカーをください、ベアさん。家で聞かされる世迷言より、よっぽどまともな会話ができるはずだから。":
    "[so̞.no̞ o̞.ɕa̠.be̞.ɾʲi ko̞ː.çiː meː.ka̠ː o̞ kɯ̟ᵝ.da̠.sa̠.i, be̞.a̠ sa̠n. i.e̞ de̞ kʲi.ka̠.sa̠.ɾe̞.ɾɯ̟ᵝ jo̞.ma̠.i.ɡo̞.to̞ jo̞.ɾʲi, jo̞p.po̞.do̞ ma̠.to̞.mo̞ na̠ ka̠.i.wa̠ ɡa̠ de̞.kʲi.ɾɯ̟ᵝ ha̠.zɨᵝ da̠ ka̠.ɾa̠]",
  "克拉拉，站在我身后。这台烤面包机每次面包弹出来时，都在发摩尔斯电码的哔哔声。我敢肯定它在把我们的谈话传给部里。":
    "[kʰɤ˥.lä˥.lä˥, ʈ͡ʂän˥˩ t͡säɪ̯˥˩ wɔ˨˩˦ ʂən˥.xoʊ̯˥˩. ʈ͡ʂɤ˥˩ tʰaɪ̯˧˥ kʰɑʊ̯˨˩˦ mjɛn˥˩.pɑʊ̯˥ t͡ɕi˥ meɪ̯˨˩˦.t͡sʰʐ̩˥˩ mjɛn˥˩.pɑʊ̯˥ tʰän˧˥ t͡sʰu˥.laɪ̯˧˥ ʂʐ̩˧˥, toʊ̯˥ t͡säɪ̯˥˩ fä˥ mwo˧˥.ɤ˨˩˦.sʐ̩˥ tjɛn˥˩.mä˨˩˦ tɤ pi˥.pi˥ ʂɤŋ˥. wɔ˨˩˦ kän˨˩˦ kʰən˨˩˦.tiŋ˥˩ tʰä˥ t͡säɪ̯˥˩ pä˨˩˦ wɔ˨˩˦.mən tɤ tʰän˧˥.xwä˥˩ t͡sʰwän˧˥ keɪ̯˨˩˦ pu˥˩.li]",
  "雨果，它什么也没发送。你把档位开到最大才把面包烤糊了。赶紧退了它，趁我们还没被赶出去前快走吧。":
    "[y˨˩˦.kwɔ˨˩˦, tʰä˥ ʂɤn˧˥.mɤ jɛ˨˩˦ meɪ̯˧˥ fä˥.sʊŋ˥˩. ni˨˩˦ pä˨˩˦ täŋ˨˩˦.weɪ̯˥˩ kʰaɪ̯˥ tɑʊ̯˥˩ t͡swweɪ̯˥˩.tä˥˩ t͡sʰaɪ̯˧˥ pä˨˩˦ mjɛn˥˩.pɑʊ̯˥ kʰɑʊ̯˨˩˦.xu˧˥ lɤ. kän˨˩˦.t͡ɕin˨˩˦ tʰweɪ̯˥˩ lɤ tʰä˥, t͡ʂʰən˥˩ wɔ˨˩˦.mən xaɪ̯˧˥ meɪ̯˧˥ peɪ̯˥˩ kän˨˩˦ t͡sʰu˥.t͡ɕʰy˥˩ t͡ɕʰjɛn˧˥ kʰwaɪ̯˥˩ t͡soʊ̯˨˩˦ pä]",
  "早上好！根据客户服务手册，退回疑似涉嫌间谍活动的家电，需要提供原包装并附带一名宣誓证人。":
    "[t͡sɑʊ̯˨˩˦.ʂäŋ xɑʊ̯˨˩˦! kən˥.t͡ɕy˥˩ kʰɤ˥˩.xu˥˩ fu˧˥.wu˥˩ ʂoʊ̯˨˩˦.t͡sʰɤ˨˩˦, tʰweɪ̯˥˩.xweɪ̯˧˥ ji˧˥.sʐ̩˥˩ ʂɤ˥˩.ɕjɛn˧˥ t͡ɕjɛn˥.tjɛ˧˥ xwɔ˧˥.tʊŋ˥˩ tɤ t͡ɕjä˥.tjɛn˥˩, ɕy˥.jɑʊ̯˥ tʰi˧˥.kʊŋ˥ jɥɛn˧˥ pɑʊ̯˥.ʈ͡ʂwɑŋ˥ piŋ˥˩ fu˥˩.täɪ̯˥˩ ji˥ miŋ˧˥ ɕɥɛn˥.ʂʐ̩˥˩ ʈ͡ʂɤŋ˥˩.ʐən˧˥]",
  "你看到了吧，克拉拉？国家安全协议已经启动了！告诉我，比阿特工，取消这次行动的密码是什么？":
    "[ni˨˩˦ kʰän˥˩.tɑʊ̯˥˩ lɤ pä, kʰɤ˥.lä˥.lä˥? kwo˧˥.t͡ɕjä˥ än˥.t͡ɕʰɥɛn˧˥ ɕje˧˥.ji˥˩ ji˨˩˦.t͡ɕiŋ˥ t͡ɕʰi˨˩˦.tʊŋ˥˩ lɤ! kɑʊ̯˨˩˦.su wɔ˨˩˦, pi˨˩˦.ä˥ tʰɤ˥˩.kʊŋ˥, t͡ɕy˥.ɕjɑʊ̯˥ ʈ͡ʂɤ˥˩ t͡sʰʐ̩˥˩ ɕiŋ˧˥.tʊŋ˥˩ tɤ mi˥˩.mä˨˩˦ ʂɤ˥˩ ʂɤn˧˥.mɤ?]",
  "密码是“可乐饼”，但店长今天轮休。我只能给二位一张店内代金券，或者把这台烤面包机换成一台会说话的咖啡机。":
    "[mi˥˩.mä˨˩˦ ʂɤ˥˩ kʰɤ˨˩˦.lɤ˥˩.piŋ˨˩˦, dän˥˩ tjɛn˥˩.ʈ͡ʂɑŋ˨˩˦ t͡ɕin˥.tʰjɛn˥ lwən˧˥.ɕjoʊ̯˥. wɔ˨˩˦ ʈ͡ʂʐ̩˨˩˦.nəŋ˧˥ keɪ̯˨˩˦ ɤ˥˩.weɪ̯˥˩ ji˥ ʈ͡ʂwɑŋ˥ tjɛn˥˩.neɪ̯˥˩ täɪ̯˥˩.t͡ɕin˥.t͡ɕʰɥɛn˥˩, xwo˥˩.ʈ͡ʂɤ˨˩˦ pä˨˩˦ ʈ͡ʂɤ˥˩ tʰaɪ̯˧˥ kʰɑʊ̯˨˩˦ mjɛn˥˩.pɑʊ̯˥ t͡ɕi˥ xwän˥˩ t͡sʰɤŋ˧˥ ji˥ tʰaɪ̯˧˥ hweɪ̯˥˩ ʂwɔ˥.xwä˥˩ tɤ kʰä˥.feɪ̯˥ t͡ɕi˥]",
  "把那台会说话的咖啡机给我吧，比阿。我确信它能聊出比我在家里听到的更有理智的对话。":
    "[pä˨˩˦ nä˥˩ tʰaɪ̯˧˥ hweɪ̯˥˩ ʂwɔ˥.xwä˥˩ tɤ kʰä˥.feɪ̯˥ t͡ɕi˥ keɪ̯˨˩˦ wɔ˨˩˦ pä, pi˨˩˦.ä˥. wɔ˨˩˦ t͡ɕʰɥɛ˥˩.ɕin˥˩ tʰä˥ nəŋ˧˥ ljaʊ̯˧˥ t͡sʰu˥ pi˨˩˦ wɔ˨˩˦ t͡säɪ̯˥˩ t͡ɕjä˥.li tʰiŋ˥.tɑʊ̯˥˩ tɤ kɤŋ˥˩ joʊ̯˨˩˦ li˨˩˦.ʈ͡ʂʐ̩˥˩ tɤ tweɪ̯˥˩.xwä˥˩]",
  "克拉拉，站在我身後。這台烤麵包機每次麵包彈出來時，都在嗶嗶叫摩斯密碼。我敢肯定它在把我們的對話發送給部裡。":
    "[kʰɤ˥.lä˥.lä˥, ʈ͡ʂän˥˩ t͡säɪ̯˥˩ wɔ˨˩˦ ʂən˥.xoʊ̯˥˩. ʈ͡ʂɤ˥˩ tʰaɪ̯˧˥ kʰɑʊ̯˨˩˦ mjɛn˥˩.pɑʊ̯˥ t͡ɕi˥ meɪ̯˨˩˦.t͡sʰʐ̩˥˩ mjɛn˥˩.pɑʊ̯˥ tʰän˧˥ t͡sʰu˥.laɪ̯˧˥ ʂʐ̩˧˥, toʊ̯˥ t͡säɪ̯˥˩ fä˥ mwo˧˥.ɤ˨˩˦.sʐ̩˥ tjɛn˥˩.mä˨˩˦ tɤ pi˥.pi˥ ʂɤŋ˥. wɔ˨˩˦ kän˨˩˦ kʰən˨˩˦.tiŋ˥˩ tʰä˥ t͡säɪ̯˥˩ pä˨˩˦ wɔ˨˩˦.mən tɤ tʰän˧˥.xwä˥˩ t͡sʰwän˧˥ keɪ̯˨˩˦ pu˥˩.li]",
  "雨果，它什麼也沒發送。你把檔位開到最大才把麵包烤焦了。趕緊退了它，趁我們還沒被趕出去前快走吧。":
    "[y˨˩˦.kwɔ˨˩˦, tʰä˥ ʂɤn˧˥.mɤ jɛ˨˩˦ meɪ̯˧˥ fä˥.sʊŋ˥˩. ni˨˩˦ pä˨˩˦ täŋ˨˩˦.weɪ̯˥˩ kʰaɪ̯˥ tɑʊ̯˥˩ t͡swweɪ̯˥˩.tä˥˩ t͡sʰaɪ̯˧˥ pä˨˩˦ mjɛn˥˩.pɑʊ̯˥ kʰɑʊ̯˨˩˦.t͡ɕjaʊ̯˥ lɤ. kän˨˩˦.t͡ɕin˨˩˦ tʰweɪ̯˥˩ lɤ tʰä˥, t͡ʂʰən˥˩ wɔ˨˩˦.mən xaɪ̯˧˥ meɪ̯˧˥ peɪ̯˥˩ kän˨˩˦ t͡sʰu˥.t͡ɕʰy˥˩ t͡ɕʰjɛn˧˥ kʰwaɪ̯˥˩ t͡soʊ̯˨˩˦ pä]",
  "早安！根據客戶服務手冊，退回疑似涉嫌間諜活動的家電，需要提供原包裝並附帶一名宣誓證人。":
    "[t͡sɑʊ̯˨˩˦.än˥! kən˥.t͡ɕy˥˩ kʰɤ˥˩.xu˥˩ fu˧˥.wu˥˩ ʂoʊ̯˨˩˦.t͡sʰɤ˨˩˦, tʰweɪ̯˥˩.xweɪ̯˧˥ ji˧˥.sʐ̩˥˩ ʂɤ˥˩.ɕjɛn˧˥ t͡ɕjɛn˥.tjɛ˧˥ xwɔ˧˥.tʊŋ˥˩ tɤ t͡ɕjä˥.tjɛn˥˩, ɕy˥.jɑʊ̯˥ tʰi˧˥.kʊŋ˥ jɥɛn˧˥ pɑʊ̯˥.ʈ͡ʂwɑŋ˥ piŋ˥˩ fu˥˩.täɪ̯˥˩ ji˥ miŋ˧˥ ɕɥɛn˥.ʂʐ̩˥˩ ʈ͡ʂɤŋ˥˩.ʐən˧˥]",
  "妳看到了吧，克拉拉？國家安全協議已經啟動了！告訴我，比阿特工，取消這次行動的密碼是什麼？":
    "[ni˨˩˦ kʰän˥˩.tɑʊ̯˥˩ lɤ pä, kʰɤ˥.lä˥.lä˥? kwo˧˥.t͡ɕjä˥ än˥.t͡ɕʰɥɛn˧˥ ɕje˧˥.ji˥˩ ji˨˩˦.t͡ɕiŋ˥ t͡ɕʰi˨˩˦.tʊŋ˥˩ lɤ! kɑʊ̯˨˩˦.su wɔ˨˩˦, pi˨˩˦.ä˥ tʰɤ˥˩.kʊŋ˥, t͡ɕy˥.ɕjɑʊ̯˥ ʈ͡ʂɤ˥˩ t͡sʰʐ̩˥˩ ɕiŋ˧˥.tʊŋ˥˩ tɤ mi˥˩.mä˨˩˦ ʂɤ˥˩ ʂɤn˧˥.mɤ?]",
  "密碼是「可樂餅」，但店長今天輪休。我只能給二位一張店內抵用券，或者把這台烤麵包機換成一台會說話的咖啡機。":
    "[mi˥˩.mä˨˩˦ ʂɤ˥˩ kʰɤ˨˩˦.lɤ˥˩.piŋ˨˩˦, dän˥˩ tjɛn˥˩.ʈ͡ʂɑŋ˨˩˦ t͡ɕin˥.tʰjɛn˥ lwən˧˥.ɕjoʊ̯˥. wɔ˨˩˦ ʈ͡ʂʐ̩˨˩˦.nəŋ˧˥ keɪ̯˨˩˦ ɤ˥˩.weɪ̯˥˩ ji˥ ʈ͡ʂwɑŋ˥ tjɛn˥˩.neɪ̯˥˩ täɪ̯˥˩.t͡ɕin˥.t͡ɕʰɥɛn˥˩, xwo˥˩.ʈ͡ʂɤ˨˩˦ pä˨˩˦ ʈ͡ʂɤ˥˩ tʰaɪ̯˧˥ kʰɑʊ̯˨˩˦ mjɛn˥˩.pɑʊ̯˥ t͡ɕi˥ xwän˥˩ t͡sʰɤŋ˧˥ ji˥ tʰaɪ̯˧˥ hweɪ̯˥˩ ʂwɔ˥.xwä˥˩ tɤ kʰä˥.feɪ̯˥ t͡ɕi˥]",
  "把那台會說話的咖啡機給我吧，比阿。我確信它能聊出比我在家裡聽到的更有理智的對話。":
    "[pä˨˩˦ nä˥˩ tʰaɪ̯˧˥ hweɪ̯˥˩ ʂwɔ˥.xwä˥˩ tɤ kʰä˥.feɪ̯˥ t͡ɕi˥ keɪ̯˨˩˦ wɔ˨˩˦ pä, pi˨˩˦.ä˥. wɔ˨˩˦ t͡ɕʰɥɛ˥˩.ɕin˥˩ tʰä˥ nəŋ˧˥ ljaʊ̯˧˥ t͡sʰu˥ pi˨˩˦ wɔ˨˩˦ t͡säɪ̯˥˩ t͡ɕjä˥.li tʰiŋ˥.tɑʊ̯˥˩ tɤ kɤŋ˥˩ joʊ̯˨˩˦ li˨˩˦.ʈ͡ʂʐ̩˥˩ tɤ tweɪ̯˥˩.xwä˥˩]"
};

// ==========================================
// 3. JAPANESE PHONETIC ENGINE (Kana -> IPA)
// ==========================================
const KANA_TO_IPA: Record<string, string> = {
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
  ぱ: "pa", ピ: "pʲi", ぷ: "pɯ̟ᵝ", ぺ: "pe", ぽ: "po",
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
  パ: "pa", ぴ: "pʲi", プ: "pɯ̟ᵝ", ペ: "pe", ポ: "po",
};

const COMMON_KANJI_MAP: [RegExp, string][] = [
  [/今/g, "いま"], [/見/g, "み"], [/向かい/g, "むかい"], [/緑/g, "みどり"],
  [/怪しい/g, "あやしい"], [/誰/g, "だれ"], [/風/g, "ふう"], [/放置/g, "ほうち"],
  [/極秘/g, "ごくひ"], [/文書/g, "ぶんしょ"], [/入って/g, "はいって"],
  [/違い/g, "ちがい"], [/汚れた/g, "よごれた"], [/服/g, "ふく"],
  [/私/g, "わたし"], [/見かけ/g, "みかけ"], [/暗号/g, "あんごう"],
  [/着替え/g, "きがえ"], [/男/g, "おとこ"], [/女/g, "おんな"],
  [/人/g, "ひと"], [/何/g, "なに"], [/本/g, "ほん"], [/日/g, "にち"],
  [/水/g, "みず"], [/茶/g, "ちゃ"], [/店/g, "みせ"], [/食/g, "た"],
  [/飲/g, "の"], [/行/g, "い"], [/来/g, "き"], [/言/g, "い"],
];

function japaneseToIpa(text: string): string {
  let kana = text;
  for (const [re, rep] of COMMON_KANJI_MAP) {
    kana = kana.replace(re, rep);
  }
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
      result.push(oneChar);
      i += 1;
    }
  }
  const cleaned = result.join("").replace(/\s+/g, " ").trim();
  return `[${cleaned}]`;
}

// ==========================================
// 4. CHINESE PHONETIC ENGINE (Hanzi -> IPA)
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
// 5. CYRILLIC, ARABIC, KOREAN, INDIC, GREEK, HEBREW
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
    if (CYRILLIC_MAP[ch] !== undefined) res += CYRILLIC_MAP[ch];
    else if (ch === " ") res += " ";
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

const ARABIC_MAP: Record<string, string> = {
  ا: "aː", أ: "ʔa", إ: "ʔi", آ: "ʔaː", ء: "ʔ",
  ب: "b", ت: "t", ث: "θ", ج: "d͡ʒ", ح: "ħ", خ: "x",
  د: "d", ذ: "ð", ر: "r", ز: "z", س: "s", ش: "ʃ",
  ص: "sˤ", ض: "dˤ", ط: "tˤ", ظ: "ðˤ", ع: "ʕ", غ: "ɣ",
  ف: "f", ق: "q", ك: "k", ل: "l", م: "m", ن: "n",
  ه: "h", و: "w", ؤ: "ʔ", ي: "j", ئ: "ʔ", ى: "aː", ة: "a",
  "َ": "a", "ُ": "u", "ِ": "i", "ً": "an", "ٌ": "un", "ٍ": "in", "ّ": "ː", "ْ": "",
};

function arabicToIpa(text: string): string {
  let res = "";
  for (const ch of text) {
    if (ARABIC_MAP[ch] !== undefined) res += ARABIC_MAP[ch];
    else if (ch === " ") res += " ";
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

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
  "ा": "aː", "ि": "ɪ", "ी": "iː", "ु": "ʊ", "ू": "uː", "ृ": "rɪ",
  "े": "eː", "ै": "ɛː", "ो": "oː", "ौ": "ɔː", "्": "", "ं": "ɴ", "ः": "h",
};


const MALAYALAM_MAP: Record<string, string> = {
  അ: "a", ആ: "aː", ഇ: "i", ഈ: "iː", ഉ: "u", ഊ: "uː", ഋ: "rɨ",
  എ: "e", ഏ: "eː", ഐ: "ai", ഒ: "o", ഓ: "oː", ഔ: "au",
  ക: "k", ഖ: "kʰ", ഗ: "ɡ", ഘ: "ɡʱ", ങ: "ŋ",
  ച: "t͡ʃ", ഛ: "t͡ʃʰ", ജ: "d͡ʒ", ഝ: "d͡ʒʱ", ഞ: "ɲ",
  ട: "ʈ", ഠ: "ʈʰ", ഡ: "ɖ", ഢ: "ɖʱ", ണ: "ɳ",
  ത: "t̪", ഥ: "t̪ʰ", ദ: "d̪", ധ: "d̪ʱ", ന: "n̪",
  പ: "p", ഫ: "pʰ", ബ: "b", ഭ: "bʱ", മ: "m",
  യ: "j", ര: "ɾ", ല: "l", വ: "ʋ",
  ശ: "ɕ", ഷ: "ʂ", സ: "s", ഹ: "ɦ",
  ള: "ɭ", ഴ: "ɻ", റ: "r",
  "ാ": "aː", "ി": "i", "ീ": "iː", "ു": "u", "ൂ": "uː", "ൃ": "rɨ",
  "െ": "e", "േ": "eː", "ൈ": "ai", "ൊ": "o", "ോ": "oː", "ൌ": "au",
  "്": "", "ം": "m", "ഃ": "h",
  ൺ: "ɳ", ൻ: "n", ർ: "r", ൽ: "l", ൾ: "ɭ", ൿ: "k",
};

export function malayalamToIpa(text: string): string {
  let res = "";
  for (const ch of text) {
    if (MALAYALAM_MAP[ch] !== undefined) res += MALAYALAM_MAP[ch];
    else if (ch === " ") res += " ";
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}


function indicToIpa(text: string): string {
  let res = "";
  for (const ch of text) {
    if (DEVANAGARI_MAP[ch] !== undefined) res += DEVANAGARI_MAP[ch];
    else if (ch === " ") res += " ";
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

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
    if (GREEK_MAP[ch] !== undefined) res += GREEK_MAP[ch];
    else if (/[aeioubdɡ]/.test(ch)) res += ch;
    else if (ch === " ") res += " ";
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

const HEBREW_MAP: Record<string, string> = {
  א: "ʔ", ב: "v", ג: "ɡ", ד: "d", ה: "h", ו: "v", ז: "z", ח: "χ",
  ט: "t", י: "j", כ: "x", ך: "x", ל: "l", מ: "m", ם: "m", נ: "n",
  ן: "n", ס: "s", ע: "ʔ", פ: "f", ף: "f", צ: "t͡s", ץ: "t͡s", ק: "k",
  ר: "ʁ", ש: "ʃ", ת: "t",
};

function hebrewToIpa(text: string): string {
  let res = "";
  for (const ch of text) {
    if (HEBREW_MAP[ch] !== undefined) res += HEBREW_MAP[ch];
    else if (ch === " ") res += " ";
  }
  return `[${res.replace(/\s+/g, " ").trim()}]`;
}

// ==========================================
// 6. PORTUGUESE PHONETIC ENGINE (pt-PT & pt-BR)
// ==========================================
// Full dictionary with exact native European Portuguese (pt-PT) & Brazilian Portuguese (pt-BR) IPA
const PORTUGUESE_IPA_LEXICON: Record<string, [string, string]> = {
  "1985": ["ˈmiɫ nɔ.vɨˈsẽ.tuʃ i ojˈtẽ.tɐ i ˈsĩ.ku", "ˈmiw nɔ.veˈsẽ.tus i ojˈtẽ.ta i ˈsĩ.ku"],
  "a": ["ɐ", "a"],
  "abandono": ["ɐ.βɐ̃ˈdo.nu", "a.bɐ̃ˈdo.nu"],
  "acordar": ["ɐ.kuɾˈdaɾ", "a.koʁˈdaʁ"],
  "acorde": ["ɐˈkɔɾ.ðɨ", "aˈkɔʁ.dʒi"],
  "acordo": ["ɐˈkoɾ.ðu", "aˈkoʁ.du"],
  "advogado": ["ɐð.vuˈɣa.ðu", "ad.voˈɡa.du"],
  "advertência": ["ɐð.vɨɾˈtẽ.sjɐ", "ad.veʁˈtẽ.sjɐ"],
  "afinado": ["ɐ.fiˈna.ðu", "a.fiˈna.du"],
  "agora": ["ɐˈɣɔ.ɾɐ", "aˈɡɔ.ɾɐ"],
  "alguém": ["aɫˈɡɐ̃j̃", "awˈɡẽj̃"],
  "amarela": ["ɐ.mɐˈɾɛ.lɐ", "a.maˈɾɛ.lɐ"],
  "andar": ["ɐ̃ˈdaɾ", "ɐ̃ˈdaʁ"],
  "anos": ["ˈɐ.nuʃ", "ˈɐ̃.nus"],
  "ao": ["aw", "aw"],
  "apenas": ["ɐˈpe.nɐʃ", "aˈpe.nɐs"],
  "aplicativo": ["ɐ.pli.kɐˈti.vu", "a.pli.kaˈtʃi.vu"],
  "aquela": ["ɐˈkɛ.lɐ", "aˈkɛ.lɐ"],
  "aqui": ["ɐˈki", "aˈki"],
  "arquivos": ["ɐɾˈki.vuʃ", "aʁˈki.vus"],
  "assim": ["ɐˈsĩ", "aˈsĩ"],
  "atrás": ["ɐˈtɾaʃ", "aˈtɾas"],
  "aula": ["ˈaw.lɐ", "ˈaw.lɐ"],
  "aí": ["ɐˈi", "aˈi"],
  "beiradinha": ["bɐj.ɾɐˈði.ɲɐ", "bej.ɾaˈdʒĩ.ɲɐ"],
  "beirinha": ["bɐjˈɾi.ɲɐ", "bejˈɾĩ.ɲɐ"],
  "bilateral": ["bi.lɐ.tɛˈɾaɫ", "bi.la.teˈɾaw"],
  "boa": ["ˈbo.ɐ", "ˈbo.ɐ"],
  "bora": ["ˈbɔ.ɾɐ", "ˈbɔ.ɾa"],
  "brilhantes": ["bɾiˈʎɐ̃.tɨʃ", "bɾiˈʎɐ̃.tʃis"],
  "café": ["kɐˈfɛ", "kaˈfɛ"],
  "calma": ["ˈkaɫ.mɐ", "ˈkaw.mɐ"],
  "certeza": ["sɨɾˈte.zɐ", "seʁˈte.za"],
  "cheia": ["ˈʃɐj.ɐ", "ˈʃej.ɐ"],
  "clara": ["ˈkla.ɾɐ", "ˈkla.ɾɐ"],
  "cláusula": ["ˈklaw.zu.lɐ", "ˈklaw.zu.lɐ"],
  "codinome": ["kɔ.ðiˈno.mɨ", "ko.dʒiˈno.mi"],
  "com": ["kõ", "kõ"],
  "come": ["ˈko.mɨ", "ˈko.mi"],
  "como": ["ˈko.mu", "ˈko.mu"],
  "confidenciais": ["kõ.fi.ðẽ.siˈajʃ", "kõ.fi.dẽ.siˈajs"],
  "cromo": ["ˈkɾɔ.mu", "ˈkɾo.mu"],
  "código": ["ˈkɔ.ði.ɣu", "ˈkɔ.dʒi.ɡu"],
  "da": ["ðɐ", "da"],
  "dança": ["ˈdɐ̃.sɐ", "ˈdɐ̃.sɐ"],
  "de": ["ðɨ", "dʒi"],
  "deitar": ["dɐjˈtaɾ", "dejˈtaʁ"],
  "deixa": ["ˈdɐj.ʃɐ", "ˈdej.ʃɐ"],
  "despertador": ["dɨʃ.pɨɾ.tɐˈðoɾ", "des.peʁ.taˈdoʁ"],
  "deve": ["ˈdɛ.vɨ", "ˈdɛ.vi"],
  "diamantes": ["djɐˈmɐ̃.tɨʃ", "dʒi.aˈmɐ̃.tʃis"],
  "do": ["du", "du"],
  "documentos": ["du.kuˈmẽ.tuʃ", "do.kuˈmẽ.tus"],
  "dormir": ["duɾˈmiɾ", "doʁˈmiʁ"],
  "duplo": ["ˈdu.plu", "ˈdu.plu"],
  "e": ["i", "i"],
  "em": ["ɐ̃j̃", "ẽj̃"],
  "ensina": ["ẽˈsi.nɐ", "ẽˈsi.nɐ"],
  "ensinas-me": ["ẽˈsi.nɐʒ.mɨ", "ẽˈsi.naʒ.mi"],
  "ensinas": ["ẽˈsi.nɐʃ", "ẽˈsi.nas"],
  "equipamento": ["i.ki.pɐˈmẽ.tu", "e.ki.paˈmẽ.tu"],
  "esse": ["ˈe.sɨ", "ˈe.si"],
  "estender": ["ɨʃ.tẽˈdeɾ", "es.tẽˈdeʁ"],
  "estiloso": ["ɨʃ.tiˈlo.zu", "es.tʃiˈlo.zu"],
  "estão": ["ɨʃˈtɐ̃w̃", "esˈtɐ̃w̃"],
  "exatamente": ["i.za.tɐˈmẽ.tɨ", "e.za.taˈmẽ.tʃi"],
  "exigir": ["i.ziˈʒiɾ", "e.ziˈʒiʁ"],
  "exigirá": ["i.zi.ʒiˈɾa", "e.zi.ʒiˈɾa"],
  "faça": ["ˈfa.sɐ", "ˈfa.sɐ"],
  "fechado": ["fɨˈʃa.ðu", "feˈʃa.du"],
  "fechou": ["fɨˈʃow", "feˈʃow"],
  "fervendo": ["fɨɾˈvẽ.du", "feʁˈvẽ.du"],
  "ferver": ["fɨɾˈveɾ", "feʁˈveʁ"],
  "figurinha": ["fi.ɣuˈɾi.ɲɐ", "fi.ɡuˈɾĩ.ɲɐ"],
  "figurino": ["fi.ɣuˈɾi.nu", "fi.ɡuˈɾi.nu"],
  "fita": ["ˈfi.tɐ", "ˈfi.tɐ"],
  "forte": ["ˈfɔɾ.tɨ", "ˈfɔʁ.tʃi"],
  "frente": ["ˈfɾẽ.tɨ", "ˈfɾẽ.tʃi"],
  "garoto": ["ɡɐˈɾo.tu", "ɡaˈɾo.tu"],
  "gelado": ["ʒɨˈla.ðu", "ʒeˈla.du"],
  "glitter": ["ˈɡli.tɨɾ", "ˈɡli.teʁ"],
  "guardanapos": ["ɡwaɾ.ðɐˈna.puʃ", "ɡwaʁ.daˈna.pus"],
  "hip-hop": ["hip.hɔp", "hip.hɔp"],
  "holográfica": ["u.luˈɣɾa.fi.kɐ", "o.loˈɡɾa.fi.kɐ"],
  "holográfico": ["u.luˈɣɾa.fi.ku", "o.loˈɡɾa.fi.ku"],
  "hora": ["ˈɔ.ɾɐ", "ˈɔ.ɾɐ"],
  "horário": ["uˈɾa.ɾju", "oˈɾa.ɾju"],
  "hugo": ["ˈu.ɣu", "ˈu.ɡu"],
  "há": ["a", "a"],
  "idade": ["iˈða.ðɨ", "iˈda.dʒi"],
  "isso": ["ˈi.su", "ˈi.su"],
  "já": ["ʒa", "ʒa"],
  "larga": ["ˈlaɾ.ɣɐ", "ˈlaʁ.ɡɐ"],
  "laticínio": ["lɐ.tiˈsi.nju", "la.tʃiˈsi.nju"],
  "licença": ["liˈsẽ.sɐ", "liˈsẽ.sɐ"],
  "magia": ["mɐˈʒi.ɐ", "maˈʒi.ɐ"],
  "mala": ["ˈma.lɐ", "ˈma.lɐ"],
  "mas": ["mɐʃ", "mas"],
  "me": ["mɨ", "mi"],
  "menina": ["mɨˈni.nɐ", "meˈni.nɐ"],
  "mesa": ["ˈme.zɐ", "ˈme.za"],
  "meu": ["ˈmew", "ˈmew"],
  "meus": ["ˈmewʃ", "ˈmewz"],
  "minha": ["ˈmi.ɲɐ", "ˈmĩ.ɲɐ"],
  "mini-doutor": ["ˈmi.ni dowˈtoɾ", "ˈmi.ni dowˈtoʁ"],
  "moderna": ["muˈðɛɾ.nɐ", "mɔˈdɛʁ.nɐ"],
  "moça": ["ˈmo.sɐ", "ˈmo.sɐ"],
  "muito": ["ˈmũj̃.tu", "ˈmũj̃.tu"],
  "mágica": ["ˈma.ʒi.kɐ", "ˈma.ʒi.kɐ"],
  "música": ["ˈmu.zi.kɐ", "ˈmu.zi.kɐ"],
  "na": ["nɐ", "na"],
  "nada": ["ˈna.dɐ", "ˈna.dɐ"],
  "naquele": ["nɐˈkɛ.lɨ", "naˈkɛ.li"],
  "negócio": ["nɨˈɣɔ.sju", "neˈɡɔ.sju"],
  "nessa": ["ˈnɛ.sɐ", "ˈnɛ.sɐ"],
  "ninguém": ["nĩˈɡɐ̃j̃", "nĩˈɡẽj̃"],
  "nos": ["nuʃ", "nus"],
  "nosso": ["ˈnɔ.su", "ˈnɔ.su"],
  "numerados": ["nu.mɨˈɾa.ðuʃ", "nu.meˈɾa.dus"],
  "nutricional": ["nu.tɾi.sjuˈnaɫ", "nu.tɾi.sjoˈnaw"],
  "não": ["nɐ̃w̃", "nɐ̃w̃"],
  "o": ["u", "u"],
  "olha": ["ˈɔ.ʎɐ", "ˈɔ.ʎɐ"],
  "olhes": ["ˈɔ.ʎɨʃ", "ˈɔ.ʎis"],
  "os": ["uʃ", "uz"],
  "ou": ["ow", "ow"],
  "para": ["ˈpa.ɾɐ", "ˈpa.ɾa"],
  "parceiro": ["pɐɾˈsɐj.ɾu", "paʁˈsej.ɾu"],
  "paz": ["ˈpaʃ", "ˈpas"],
  "pequeno": ["pɨˈke.nu", "peˈke.nu"],
  "perigo": ["pɨˈɾi.ɣu", "peˈɾi.ɡu"],
  "permissão": ["pɨɾ.miˈsɐ̃w̃", "peʁ.miˈsɐ̃w̃"],
  "pessoal": ["pɨ.suˈaɫ", "pe.soˈaw"],
  "peço": ["ˈpɛ.su", "ˈpɛ.su"],
  "pitada": ["piˈta.dɐ", "piˈta.dɐ"],
  "ponto": ["ˈpõ.tu", "ˈpõ.tu"],
  "postar": ["puʃˈtaɾ", "posˈtaʁ"],
  "pra": ["pɾɐ", "pɾa"],
  "preciso": ["pɾɨˈsi.zu", "pɾeˈsi.zu"],
  "primeiro": ["pɾiˈmɐj.ɾu", "pɾiˈmej.ɾu"],
  "pro": ["pɾu", "pɾu"],
  "programado": ["pɾu.ɣɾɐˈma.ðu", "pɾo.ɡɾaˈma.du"],
  "prolongamento": ["pɾu.lõ.ɡɐˈmẽ.tu", "pɾo.lõ.ɡaˈmẽ.tu"],
  "pros": ["pɾuʃ", "pɾus"],
  "publicar": ["pu.βliˈkaɾ", "pu.bliˈkaʁ"],
  "qualifica-se": ["kwɐ.liˈfi.kɐ.sɨ", "kwa.liˈfi.ka.si"],
  "qualifica": ["kwɐ.liˈfi.kɐ", "kwa.liˈfi.kɐ"],
  "quarenta": ["kwɐˈɾẽ.tɐ", "kwaˈɾẽ.ta"],
  "quatro": ["ˈkwa.tɾu", "ˈkwa.tɾu"],
  "que": ["kɨ", "ki"],
  "quero": ["ˈkɛ.ɾu", "ˈkɛ.ɾu"],
  "ramón": ["ʁɐˈmõ", "ʁaˈmõ"],
  "rapaz": ["ʁɐˈpaʃ", "ʁaˈpas"],
  "rede": ["ˈʁe.ðɨ", "ˈʁe.dʒi"],
  "roupa": ["ˈʁo.pɐ", "ˈʁo.pɐ"],
  "sanduíche": ["sɐ̃.dwˈi.ʃɨ", "sɐ̃.duˈi.ʃi"],
  "se": ["sɨ", "si"],
  "secreto": ["sɨˈkɾe.tu", "seˈkɾɛ.tu"],
  "secretos": ["sɨˈkɾe.tuʃ", "seˈkɾɛ.tus"],
  "senhor": ["sɨˈɲoɾ", "seˈɲoʁ"],
  "sete": ["ˈsɛ.tɨ", "ˈsɛ.tʃi"],
  "seu": ["ˈsew", "ˈsew"],
  "seus": ["ˈsewʃ", "ˈsews"],
  "skate": ["ˈskejt", "ˈskejt"],
  "social": ["su.siˈaɫ", "so.siˈaw"],
  "sorvete": ["suɾˈve.tɨ", "soʁˈve.tʃi"],
  "sua": ["ˈsu.ɐ", "ˈsu.ɐ"],
  "suja": ["ˈsu.ʒɐ", "ˈsu.ʒɐ"],
  "suspeita": ["suʃˈpɐj.tɐ", "suʃˈpej.tɐ"],
  "só": ["ˈsɔ", "ˈsɔ"],
  "tarde": ["ˈtaɾ.ðɨ", "ˈtaʁ.dʒi"],
  "tem": ["ˈtɐ̃j̃", "ˈtẽj̃"],
  "ter": ["ˈteɾ", "ˈteʁ"],
  "termos": ["ˈtɛɾ.muʃ", "ˈtɛʁ.mus"],
  "toque": ["ˈtɔ.kɨ", "ˈtɔ.ki"],
  "tosta": ["ˈtɔʃ.tɐ", "ˈtɔs.tɐ"],
  "transferir-me": ["tɾɐ̃ʃ.fɨˈɾiɾ.mɨ", "tɾɐ̃s.feˈɾiʁ.mi"],
  "transferir": ["tɾɐ̃ʃ.fɨˈɾiɾ", "tɾɐ̃s.feˈɾiʁ"],
  "truques": ["ˈtɾu.kɨʃ", "ˈtɾu.kis"],
  "tua": ["ˈtu.ɐ", "ˈtu.ɐ"],
  "tão": ["ˈtɐ̃w̃", "ˈtɐ̃w̃"],
  "um": ["ũ", "ũ"],
  "uma": ["ˈu.mɐ", "ˈu.mɐ"],
  "vai": ["ˈvaj", "ˈvaj"],
  "vamos": ["ˈvɐ.muʃ", "ˈvɐ̃.mus"],
  "verde": ["ˈveɾ.ðɨ", "ˈveʁ.dʒi"],
  "vista": ["ˈviʃ.tɐ", "ˈvis.tɐ"],
  "viu": ["ˈviw", "ˈviw"],
  "você": ["vuˈse", "voˈse"],
  "vídeos": ["ˈvi.ðjuʃ", "ˈvi.dʒi.us"],
  "zebrada": ["zɨˈβɾa.ðɐ", "zeˈbɾa.dɐ"],
  "é": ["ɛ", "ɛ"]
};

// Algorithmic Grapheme-to-Phoneme converter for Portuguese
function portugueseG2P(word: string, isBr: boolean): string {
  let w = word.toLowerCase();
  
  // Learned exceptions where 'x' is pronounced [ks]
  const ksWords = new Set(["táxi", "taxi", "fixo", "anexo", "complexo", "nexo", "reflexo", "óxido", "oxido", "tóxico", "toxico", "clímax", "climax", "tórax", "torax", "sintaxe"]);
  if (ksWords.has(w)) {
    w = w.replace(/x/g, "ks");
  }

  // Prefix ex- before vowel -> [iz] / [ez]
  if (/^ex[aeiouáéíóúâêô]/i.test(w)) {
    w = (isBr ? "ez" : "iz") + w.slice(2);
  }

  // Standard Portuguese digraphs
  w = w.replace(/ch/g, "ʃ");
  w = w.replace(/lh/g, "ʎ");
  w = w.replace(/nh/g, "ɲ");
  w = w.replace(/rr/g, "ʁ");
  w = w.replace(/qu(?=[eiéíê])/g, "k");
  w = w.replace(/qu(?=[aouáóú])/g, "kw");
  w = w.replace(/gu(?=[eiéíê])/g, "ɡ");
  w = w.replace(/gu(?=[aouáóú])/g, "ɡw");
  w = w.replace(/ç/g, "s");
  w = w.replace(/ss/g, "s");

  // In Portuguese, 'x' in ordinary words (like deixa, caixa, peixe, lixo, roxo) is [ʃ]
  w = w.replace(/x/g, "ʃ");

  // 'c' and 'g' before front vowels
  w = w.replace(/c(?=[eiéíê])/g, "s");
  w = w.replace(/g(?=[eiéíê])/g, "ʒ");
  w = w.replace(/j/g, "ʒ");
  w = w.replace(/c/g, "k");

  // Nasal diphthongs and vowels
  w = w.replace(/ão/g, "ɐ̃w̃");
  w = w.replace(/ãe/g, "ɐ̃j̃");
  w = w.replace(/õe/g, "õj̃");
  w = w.replace(/em\b|ém\b/g, isBr ? "ẽj̃" : "ɐ̃j̃");
  w = w.replace(/am\b/g, "ɐ̃w̃");
  w = w.replace(/e(?=[mn][bcdfɡhjklmnpqrstvwxz])/g, "ẽ");
  w = w.replace(/a(?=[mn][bcdfɡhjklmnpqrstvwxz])/g, "ɐ̃");
  w = w.replace(/i(?=[mn][bcdfɡhjklmnpqrstvwxz])/g, "ĩ");
  w = w.replace(/o(?=[mn][bcdfɡhjklmnpqrstvwxz])/g, "õ");
  w = w.replace(/u(?=[mn][bcdfɡhjklmnpqrstvwxz])/g, "ũ");
  w = w.replace(/im\b|in\b/g, "ĩ");
  w = w.replace(/om\b|on\b/g, "õ");
  w = w.replace(/um\b|un\b/g, "ũ");

  // Diphthong 'ei' -> [ɐj] in Portugal, [ej] in Brazil
  if (!isBr) {
    w = w.replace(/ei/g, "ɐj");
  } else {
    w = w.replace(/ei/g, "ej");
  }

  // Intervocalic 's' -> [z]
  w = w.replace(/([aeiouɐ̃ẽĩõũáéíóú])s([aeiouɐ̃ẽĩõũáéíóú])/g, "$1z$2");

  // Syllable coda s/z
  if (!isBr) {
    w = w.replace(/[sz]\b/g, "ʃ");
    w = w.replace(/[sz](?=[ptkfsʃ])/g, "ʃ");
    w = w.replace(/[sz](?=[bdɡvzmɲʎ])/g, "ʒ");
    // Final vowel reductions in European Portuguese
    w = w.replace(/e\b/g, "ɨ");
    w = w.replace(/o\b/g, "u");
    w = w.replace(/a\b/g, "ɐ");
    w = w.replace(/l\b/g, "ɫ");
  } else {
    w = w.replace(/te\b/g, "tʃi");
    w = w.replace(/de\b/g, "dʒi");
    w = w.replace(/ti/g, "tʃi");
    w = w.replace(/di/g, "dʒi");
    w = w.replace(/[sz]\b/g, "s");
    w = w.replace(/e\b/g, "i");
    w = w.replace(/o\b/g, "u");
    w = w.replace(/a\b/g, "ɐ");
    w = w.replace(/l\b/g, "w");
  }

  w = w.replace(/r/g, "ɾ");
  return w;
}

export function portugueseToIpa(text: string, isBr = true): string {
  const words = text.toLowerCase().replace(/['’]/g, " ").replace(/[.,?!;:¿¡"«»()]/g, "").trim().split(/\s+/).filter(Boolean);
  const ipaWords = words.map(w => {
    const lex = PORTUGUESE_IPA_LEXICON[w];
    if (lex) {
      return isBr ? lex[1] : lex[0];
    }
    return portugueseG2P(w, isBr);
  });
  return `[${ipaWords.join(" ")}]`;
}

// ==========================================
// 7. SPANISH, ENGLISH, FRENCH
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

  return `[${t.split(/\s+/).filter(Boolean).join(" ")}]`;
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
    nobody: "ˈnoʊ.bə.di", leaves: "liːvz", secret: "ˈsiː.kɹɪt",
    documents: "ˈdɑː.kjə.mənts", or: "ɔːɹ", diamonds: "ˈdaɪ.məndz",
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
    personne: "pɛʁ.sɔn", laisse: "lɛs", comme: "kɔm", ça: "sa",
    doit: "dwa", avoir: "a.vwaʁ", des: "de", documents: "dɔ.ky.mɑ̃",
    secrets: "sə.kʁɛ", ou: "u", diamants: "dja.mɑ̃",
  };
  const clean = text.toLowerCase().replace(/['’]/g, " ").replace(/[.,?!"]/g, "").trim().split(/\s+/);
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
    .replace(/ç/gi, "s");
}

// ==========================================
// 8. MAIN DISPATCHER
// ==========================================

export function germanToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/^sp/g, "ʃp").replace(/^st/g, "ʃt");
    word = word.replace(/tsch/g, "t͡ʃ").replace(/sch/g, "ʃ");
    word = word.replace(/(?<=[aou]|au)ch/g, "x").replace(/ch/g, "ç");
    word = word.replace(/ei|ey|ai|ay/g, "aɪ");
    word = word.replace(/eu|äu/g, "ɔʏ");
    word = word.replace(/ie/g, "iː");
    word = word.replace(/ä/g, "ɛː").replace(/ö/g, "øː").replace(/ü/g, "yː");
    word = word.replace(/ß/g, "s");
    word = word.replace(/qu/g, "kv");
    word = word.replace(/z/g, "t͡s");
    word = word.replace(/ng/g, "ŋ");
    word = word.replace(/w/g, "v");
    word = word.replace(/j/g, "j");
    word = word.replace(/v/g, "f");
    word = word.replace(/ig$/g, "ɪç");
    word = word.replace(/r/g, "ʁ");
    word = word.replace(/b$/g, "p").replace(/d$/g, "t").replace(/g$/g, "k");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function italianToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/gli([aeou])/g, "ʎ$1").replace(/gli/g, "ʎi");
    word = word.replace(/gn/g, "ɲ");
    word = word.replace(/sci([aeou])/g, "ʃ$1").replace(/sci/g, "ʃi").replace(/sce/g, "ʃe");
    word = word.replace(/chi/g, "ki").replace(/che/g, "ke");
    word = word.replace(/ghi/g, "ɡi").replace(/ghe/g, "ɡe");
    word = word.replace(/ci([aeou])/g, "t͡ʃ$1").replace(/ci/g, "t͡ʃi").replace(/ce/g, "t͡ʃe");
    word = word.replace(/gi([aeou])/g, "d͡ʒ$1").replace(/gi/g, "d͡ʒi").replace(/ge/g, "d͡ʒe");
    word = word.replace(/qu/g, "kw");
    word = word.replace(/zz/g, "t͡ts").replace(/z/g, "t͡s");
    word = word.replace(/r/g, "r");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function norwegianToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/skj|stj|sk(?=[eiyæøy])/g, "ʃ");
    word = word.replace(/kj|tj|k(?=[eiyæøy])/g, "ç");
    word = word.replace(/gj|g(?=[eiyæøy])/g, "j");
    word = word.replace(/^hj/g, "j").replace(/^hv/g, "v");
    word = word.replace(/ng/g, "ŋ");
    word = word.replace(/rt/g, "ʈ").replace(/rd/g, "ɖ").replace(/rn/g, "ɳ").replace(/rl/g, "ɭ").replace(/rs/g, "ʂ");
    word = word.replace(/å/g, "oː");
    word = word.replace(/æ/g, "æ");
    word = word.replace(/ø/g, "ø");
    word = word.replace(/r/g, "ɾ");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function danishToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/(?<=[aeiouyæøå])d(?=[aeiouyæøå]|$)/g, "ð");
    word = word.replace(/sj|skj/g, "ɕ");
    word = word.replace(/tj/g, "t͡s");
    word = word.replace(/ng/g, "ŋ");
    word = word.replace(/å/g, "ɔ");
    word = word.replace(/æ/g, "ɛ");
    word = word.replace(/ø/g, "œ");
    word = word.replace(/r/g, "ʁ");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function turkishToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/c/g, "d͡ʒ");
    word = word.replace(/ç/g, "t͡ʃ");
    word = word.replace(/([aeıioöuü])ğ/g, "$1ː");
    word = word.replace(/ı/g, "ɯ");
    word = word.replace(/ö/g, "ø");
    word = word.replace(/ü/g, "y");
    word = word.replace(/ş/g, "ʃ");
    word = word.replace(/y/g, "j");
    word = word.replace(/r/g, "ɾ");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function romanianToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/chi([aeou])/g, "kʲ$1").replace(/che/g, "ke").replace(/chi/g, "ki");
    word = word.replace(/ghi([aeou])/g, "ɡʲ$1").replace(/ghe/g, "ɡe").replace(/ghi/g, "ɡi");
    word = word.replace(/ci([aeou])/g, "t͡ʃ$1").replace(/ce/g, "t͡ʃe").replace(/ci/g, "t͡ʃi");
    word = word.replace(/gi([aeou])/g, "d͡ʒ$1").replace(/ge/g, "d͡ʒe").replace(/gi/g, "d͡ʒi");
    word = word.replace(/ș/g, "ʃ");
    word = word.replace(/ț/g, "t͡s");
    word = word.replace(/ă/g, "ə");
    word = word.replace(/â|î/g, "ɨ");
    word = word.replace(/j/g, "ʒ");
    word = word.replace(/x/g, "ks");
    word = word.replace(/r/g, "r");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function polishToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/sz/g, "ʂ");
    word = word.replace(/cz/g, "ʈ͡ʂ");
    word = word.replace(/rz|ż/g, "ʐ");
    word = word.replace(/dż/g, "ɖ͡ʐ");
    word = word.replace(/dzi([aeou])/g, "d͡ʑ$1").replace(/dzi/g, "d͡ʑi").replace(/dź/g, "d͡ʑ");
    word = word.replace(/ci([aeou])/g, "t͡ɕ$1").replace(/ci/g, "t͡ɕi").replace(/ć/g, "t͡ɕ");
    word = word.replace(/si([aeou])/g, "ɕ$1").replace(/si/g, "ɕi").replace(/ś/g, "ɕ");
    word = word.replace(/zi([aeou])/g, "ʑ$1").replace(/zi/g, "ʑi").replace(/ź/g, "ʑ");
    word = word.replace(/ch|h/g, "x");
    word = word.replace(/w/g, "v");
    word = word.replace(/ł/g, "w");
    word = word.replace(/ą/g, "ɔ̃");
    word = word.replace(/ę/g, "ɛ̃");
    word = word.replace(/y/g, "ɨ");
    word = word.replace(/r/g, "r");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function czechToIpa(text: string): string {
  const words = text.toLowerCase().replace(/[.,;:?!¿¡"«»()–—]/g, "").trim().split(/\s+/).filter(Boolean);
  const phon = words.map(w => {
    let word = w;
    word = word.replace(/ch/g, "x");
    word = word.replace(/dě/g, "ɟɛ").replace(/tě/g, "cɛ").replace(/ně/g, "ɲɛ").replace(/mě/g, "mɲɛ").replace(/ě/g, "jɛ");
    word = word.replace(/ď/g, "ɟ").replace(/ť/g, "c").replace(/ň/g, "ɲ");
    word = word.replace(/ř/g, "r̝");
    word = word.replace(/š/g, "ʃ");
    word = word.replace(/č/g, "t͡ʃ");
    word = word.replace(/ž/g, "ʒ");
    word = word.replace(/c/g, "t͡s");
    word = word.replace(/h/g, "ɦ");
    word = word.replace(/á/g, "aː").replace(/é/g, "ɛː").replace(/í|ý/g, "iː").replace(/ó/g, "oː").replace(/ú|ů/g, "uː");
    word = word.replace(/r/g, "r");
    return word;
  });
  return `[${phon.join(" ")}]`;
}

export function getIpaTranscription(text: string, langCode: string): string {
  if (!text) return "";

  const trimmed = text.trim();
  const normKey = trimmed.replace(/[\s\u3000]+/g, " ").replace(/…/g, "...").toLowerCase();

  // 1. Check language-specific canonical dictionary first
  const langCanon = CANONICAL_BY_LANG[langCode];
  if (langCanon) {
    if (langCanon[trimmed]) return langCanon[trimmed];
    for (const [k, v] of Object.entries(langCanon)) {
      if (k.replace(/[\s\u3000]+/g, " ").replace(/…/g, "...").toLowerCase() === normKey) {
        return v;
      }
    }
  }

  // 2. Check dialect fallbacks (e.g. pt-AO -> pt-PT, es-MX -> es-ES)
  if (langCode.startsWith("pt-") && langCode !== "pt-BR") {
    const ptCanon = CANONICAL_BY_LANG["pt-PT"];
    if (ptCanon) {
      if (ptCanon[trimmed]) return ptCanon[trimmed];
      for (const [k, v] of Object.entries(ptCanon)) {
        if (k.replace(/[\s\u3000]+/g, " ").replace(/…/g, "...").toLowerCase() === normKey) {
          return v;
        }
      }
    }
  }

  // 3. Check universal canonical line dictionary
  if (CANONICAL_LINE_IPA[trimmed]) {
    return CANONICAL_LINE_IPA[trimmed];
  }
  const normKeyUniversal = trimmed.replace(/[\s\u3000]+/g, "").replace(/…/g, "...");
  for (const [k, v] of Object.entries(CANONICAL_LINE_IPA)) {
    if (k.replace(/[\s\u3000]+/g, "").replace(/…/g, "...") === normKeyUniversal) {
      return v;
    }
  }

  // 4. Japanese
  if (langCode === "ja-JP" || langCode === "ja" || /[぀-ヿ一-龯]/.test(text) && langCode.startsWith("ja")) {
    return japaneseToIpa(text);
  }

  // 5. Chinese
  if (langCode === "cmn-CN" || langCode === "zh-TW" || langCode === "yue-HK" || langCode.startsWith("zh")) {
    return chineseToIpa(text);
  }

  // 6. Cyrillic (Russian, Ukrainian, etc.)
  if (langCode === "ru-RU" || langCode === "uk-UA" || langCode === "bg-BG" || /[Ѐ-ӿ]/.test(text)) {
    return cyrillicToIpa(text);
  }

  // 7. Arabic
  if (langCode.startsWith("ar-") || langCode === "ar" || /[؀-ۿ]/.test(text)) {
    return arabicToIpa(text);
  }

  // 8. Korean
  if (langCode === "ko-KR" || langCode === "ko" || /[가-힯]/.test(text)) {
    return koreanToIpa(text);
  }

  // 9. Malayalam
  if (langCode === "ml-IN" || /[\u0D00-\u0D7F]/.test(text)) {
    return malayalamToIpa(text);
  }

  // 10. Hindi & Indic
  if (langCode === "hi-IN" || langCode === "mr-IN" || /[\u0900-\u097F]/.test(text)) {
    return indicToIpa(text);
  }

  // 11. Greek
  if (langCode === "el-GR" || /[Ͱ-Ͽ]/.test(text)) {
    return greekToIpa(text);
  }

  // 12. Hebrew
  if (langCode === "he-IL" || /[֐-׿]/.test(text)) {
    return hebrewToIpa(text);
  }

  // 13. Portuguese (European & Brazilian)
  if (langCode.startsWith("pt-")) {
    return portugueseToIpa(text, langCode === "pt-BR");
  }

  // 14. Spanish
  if (langCode.startsWith("es-")) {
    return spanishToIpa(text, langCode);
  }

  // 15. English
  if (langCode.startsWith("en-")) {
    return englishToIpa(text, langCode);
  }

  // 16. French
  if (langCode.startsWith("fr-")) {
    return frenchToIpa(text);
  }

  // 17. German
  if (langCode.startsWith("de-")) {
    return germanToIpa(text);
  }

  // 18. Italian
  if (langCode.startsWith("it-")) {
    return italianToIpa(text);
  }

  // 19. Dutch
  if (langCode === "nl-NL" || langCode === "nl-BE" || langCode.startsWith("nl-")) {
    const nlText = text.toLowerCase()
      .replace(/ij/g, "ɛi")
      .replace(/oe/g, "u")
      .replace(/ui/g, "œy")
      .replace(/ch/g, "x")
      .replace(/g/g, "ɣ");
    return `[${nlText}]`;
  }

  // 20. Norwegian
  if (langCode === "nb-NO" || langCode === "nn-NO" || langCode === "no-NO" || langCode.startsWith("nb") || langCode.startsWith("nn")) {
    return norwegianToIpa(text);
  }

  // 21. Danish
  if (langCode === "da-DK" || langCode.startsWith("da")) {
    return danishToIpa(text);
  }

  // 22. Swedish
  if (langCode === "sv-SE" || langCode.startsWith("sv")) {
    const scandText = text.toLowerCase()
      .replace(/skj|stj|sk(?=[eiyäö])/g, "ɧ")
      .replace(/tj|k(?=[eiyäö])/g, "ɕ")
      .replace(/å/g, "oː")
      .replace(/ä/g, "ɛ")
      .replace(/ö/g, "ø");
    return `[${scandText}]`;
  }

  // 23. Turkish
  if (langCode === "tr-TR" || langCode.startsWith("tr")) {
    return turkishToIpa(text);
  }

  // 24. Polish
  if (langCode === "pl-PL" || langCode.startsWith("pl")) {
    return polishToIpa(text);
  }

  // 25. Romanian
  if (langCode === "ro-RO" || langCode === "ro-MD" || langCode.startsWith("ro")) {
    return romanianToIpa(text);
  }

  // 26. Czech
  if (langCode === "cs-CZ" || langCode.startsWith("cs")) {
    return czechToIpa(text);
  }

  // 27. Vietnamese
  if (langCode === "vi-VN" || langCode.startsWith("vi")) {
    const viText = text.toLowerCase()
      .replace(/nh/g, "ɲ")
      .replace(/ng|ngh/g, "ŋ")
      .replace(/th/g, "tʰ")
      .replace(/ch/g, "c")
      .replace(/tr/g, "ʈ")
      .replace(/đ/g, "ɗ");
    return `[${viText}]`;
  }

  // 28. General fallback
  const words = text.replace(/[.,;:?!¿¡"«»()]/g, "").trim().split(/\s+/).filter(Boolean);
  return `[${words.map(w => phoneticApprox(w)).join(" ")}]`;
}
