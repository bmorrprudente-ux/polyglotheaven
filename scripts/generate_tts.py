#!/usr/bin/env python3
"""
Telar Edge Neural TTS Generator
===============================
Generates natural, high-fidelity neural MP3 audio files for all characters
and languages in Telar.
"""

import os
import re
import sys
import asyncio
import argparse
import edge_tts

VOICE_MAP = {
    # Spanish Dialects
    "es-ES": {"male": "es-ES-AlvaroNeural", "female": "es-ES-ElviraNeural"},
    "es-MX": {"male": "es-MX-JorgeNeural", "female": "es-MX-DaliaNeural"},
    "es-AR": {"male": "es-AR-TomasNeural", "female": "es-AR-ElenaNeural"},
    "es-CO": {"male": "es-CO-GonzaloNeural", "female": "es-CO-SalomeNeural"},
    "es-VE": {"male": "es-VE-SebastianNeural", "female": "es-VE-PaolaNeural"},
    "es-CL": {"male": "es-CL-LorenzoNeural", "female": "es-CL-CatalinaNeural"},
    "es-PE": {"male": "es-PE-AlexNeural", "female": "es-PE-CamilaNeural"},
    "es-CU": {"male": "es-CU-ManuelNeural", "female": "es-CU-BelkysNeural"},
    "es-GQ": {"male": "es-GQ-JavierNeural", "female": "es-GQ-TeresaNeural"},
    "es-DO": {"male": "es-DO-EmilioNeural", "female": "es-DO-RamonaNeural"},
    "es-PR": {"male": "es-PR-VictorNeural", "female": "es-PR-KarinaNeural"},

    # English Dialects
    "en-US": {"male": "en-US-ChristopherNeural", "female": "en-US-JennyNeural"},
    "en-US-south": {"male": "en-US-ChristopherNeural", "female": "en-US-JennyNeural"},
    "en-GB": {"male": "en-GB-RyanNeural", "female": "en-GB-SoniaNeural"},
    "en-IE": {"male": "en-IE-ConnorNeural", "female": "en-IE-EmilyNeural"},
    "en-GB-SCT": {"male": "en-GB-RyanNeural", "female": "en-GB-SoniaNeural"},
    "en-AU": {"male": "en-AU-WilliamMultilingualNeural", "female": "en-AU-NatashaNeural"},
    "en-NZ": {"male": "en-NZ-MitchellNeural", "female": "en-NZ-MollyNeural"},
    "en-ZA": {"male": "en-ZA-LukeNeural", "female": "en-ZA-LeahNeural"},
    "en-NG": {"male": "en-NG-AbeoNeural", "female": "en-NG-EzinneNeural"},
    "en-IN": {"male": "en-IN-PrabhatNeural", "female": "en-IN-NeerjaNeural"},

    # French Dialects
    "fr-FR": {"male": "fr-FR-HenriNeural", "female": "fr-FR-DeniseNeural"},
    "fr-BE": {"male": "fr-BE-GerardNeural", "female": "fr-BE-CharlineNeural"},
    "fr-CH": {"male": "fr-CH-FabriceNeural", "female": "fr-CH-ArianeNeural"},
    "fr-CA": {"male": "fr-CA-AntoineNeural", "female": "fr-CA-SylvieNeural"},
    "fr-CI": {"male": "fr-FR-HenriNeural", "female": "fr-FR-DeniseNeural"},
    "fr-CD": {"male": "fr-FR-HenriNeural", "female": "fr-FR-DeniseNeural"},
    "fr-GA": {"male": "fr-FR-HenriNeural", "female": "fr-FR-DeniseNeural"},

    # Portuguese Dialects
    "pt-BR": {"male": "pt-BR-AntonioNeural", "female": "pt-BR-FranciscaNeural"},
    "pt-PT": {"male": "pt-PT-DuarteNeural", "female": "pt-PT-RaquelNeural"},
    "pt-AO": {"male": "pt-PT-DuarteNeural", "female": "pt-PT-RaquelNeural"},
    "pt-MZ": {"male": "pt-PT-DuarteNeural", "female": "pt-PT-RaquelNeural"},

    # Dutch Dialects
    "nl-NL": {"male": "nl-NL-MaartenNeural", "female": "nl-NL-FennaNeural"},
    "nl-BE": {"male": "nl-BE-ArnaudNeural", "female": "nl-BE-DenaNeural"},

    # Arabic Dialects
    "ar-SA": {"male": "ar-SA-HamedNeural", "female": "ar-SA-ZariyahNeural"},
    "ar-EG": {"male": "ar-EG-ShakirNeural", "female": "ar-EG-SalmaNeural"},
    "ar-MA": {"male": "ar-MA-JamalNeural", "female": "ar-MA-MounaNeural"},
    "ar-JO": {"male": "ar-JO-TaimNeural", "female": "ar-JO-SanaNeural"},
    "ar-IQ": {"male": "ar-IQ-BasselNeural", "female": "ar-IQ-RanaNeural"},
    "ar-XA": {"male": "ar-SA-HamedNeural", "female": "ar-SA-ZariyahNeural"},
    "he-IL": {"male": "he-IL-AvriNeural", "female": "he-IL-HilaNeural"},

    # Chinese Dialects
    "cmn-CN": {"male": "zh-CN-YunxiNeural", "female": "zh-CN-XiaoxiaoNeural"},
    "zh-TW": {"male": "zh-TW-YunJheNeural", "female": "zh-TW-HsiaoChenNeural"},
    "yue-HK": {"male": "zh-HK-WanLungNeural", "female": "zh-HK-HiuMaanNeural"},

    # Indic Languages
    "hi-IN": {"male": "hi-IN-MadhurNeural", "female": "hi-IN-SwaraNeural"},
    "ur-PK": {"male": "ur-PK-AsadNeural", "female": "ur-PK-UzmaNeural"},
    "bn-IN": {"male": "bn-IN-BashkarNeural", "female": "bn-IN-TanishaaNeural"},
    "pa-IN": {"male": "hi-IN-MadhurNeural", "female": "hi-IN-SwaraNeural"},
    "gu-IN": {"male": "gu-IN-NiranjanNeural", "female": "gu-IN-DhwaniNeural"},
    "mr-IN": {"male": "mr-IN-ManoharNeural", "female": "mr-IN-AarohiNeural"},
    "ta-IN": {"male": "ta-IN-ValluvarNeural", "female": "ta-IN-PallaviNeural"},
    "te-IN": {"male": "te-IN-MohanNeural", "female": "te-IN-ShrutiNeural"},
    "kn-IN": {"male": "kn-IN-GaganNeural", "female": "kn-IN-SapnaNeural"},
    "ml-IN": {"male": "ml-IN-MidhunNeural", "female": "ml-IN-SobhanaNeural"},

    # East Asian & Southeast Asian
    "ja-JP": {"male": "ja-JP-KeitaNeural", "female": "ja-JP-NanamiNeural"},
    "ko-KR": {"male": "ko-KR-InJoonNeural", "female": "ko-KR-SunHiNeural"},
    "vi-VN": {"male": "vi-VN-NamMinhNeural", "female": "vi-VN-HoaiMyNeural"},
    "th-TH": {"male": "th-TH-NiwatNeural", "female": "th-TH-PremwadeeNeural"},
    "id-ID": {"male": "id-ID-ArdiNeural", "female": "id-ID-GadisNeural"},
    "ms-MY": {"male": "ms-MY-OsmanNeural", "female": "ms-MY-YasminNeural"},
    "sw-KE": {"male": "sw-KE-RafikiNeural", "female": "sw-KE-ZuriNeural"},

    # European
    "de-DE": {"male": "de-DE-ConradNeural", "female": "de-DE-KatjaNeural"},
    "de-CH": {"male": "de-CH-JanNeural", "female": "de-CH-LeniNeural"},
    "it-IT": {"male": "it-IT-DiegoNeural", "female": "it-IT-ElsaNeural"},
    "ru-RU": {"male": "ru-RU-DmitryNeural", "female": "ru-RU-SvetlanaNeural"},
    "ca-ES": {"male": "ca-ES-EnricNeural", "female": "ca-ES-JoanaNeural"},
    "gl-ES": {"male": "gl-ES-RoiNeural", "female": "gl-ES-SabelaNeural"},

    # Indigenous Americas (use regional native voice)
    "gn-PY": {"male": "es-AR-TomasNeural", "female": "es-AR-ElenaNeural"},
    "qu-PE": {"male": "es-PE-AlexNeural", "female": "es-PE-CamilaNeural"},
    "ay-BO": {"male": "es-PE-AlexNeural", "female": "es-PE-CamilaNeural"},
    "nah-MX": {"male": "es-MX-JorgeNeural", "female": "es-MX-DaliaNeural"},
    "nv-US": {"male": "en-US-ChristopherNeural", "female": "en-US-JennyNeural"},
}

CHAR_GENDERS = {
    "hugo": "male",
    "clara": "female",
    "don_ramon": "male",
    "mateo": "male",
    "bea": "female"
}

async def synthesize_one(sem, mp3_path, voice, clean_text, pitch_mod=None, rate_mod=None, force=False):
    if not force and os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 5000:
        return True, "cached"

    async with sem:
        try:
            kwargs = {}
            if pitch_mod:
                kwargs["pitch"] = pitch_mod
            if rate_mod:
                kwargs["rate"] = rate_mod
            tts = edge_tts.Communicate(clean_text, voice, **kwargs)
            await tts.save(mp3_path)
            return True, "generated"
        except Exception as e:
            try:
                tts = edge_tts.Communicate(clean_text, voice)
                await tts.save(mp3_path)
                return True, "fallback"
            except Exception as e2:
                return False, str(e2)

async def main():
    parser = argparse.ArgumentParser(description="Generate neural TTS audio for stories")
    parser.add_argument("--force", action="store_true", help="Force regenerate all audio files")
    parser.add_argument("--lang", type=str, help="Comma-separated language codes to generate")
    parser.add_argument("--stories-file", default="src/data/stories.ts", help="Path to stories.ts")
    args = parser.parse_args()

    target_langs = None
    if args.lang:
        target_langs = set(args.lang.split(","))

    with open(args.stories_file, "r", encoding="utf-8") as f:
        text = f.read()

    line_chunks = re.split(r'id:\s*"([^"]+)",', text)
    sem = asyncio.Semaphore(12)
    tasks = []

    for i in range(1, len(line_chunks), 2):
        line_id = line_chunks[i]
        block = line_chunks[i+1]

        char_match = re.search(r'characterId:\s*"([^"]+)"', block)
        if not char_match:
            continue
        char_id = char_match.group(1)
        gender = CHAR_GENDERS.get(char_id, "male")

        story_num = line_id.split("_")[0].replace("s", "")
        out_dir = f"public/audio/s{story_num}"
        os.makedirs(out_dir, exist_ok=True)

        trans_matches = re.findall(r'"([a-z]{2,4}(?:-[A-Za-z0-9_-]+)*)":\s*\{\s*text:\s*"((?:[^"\\]|\\.)*)"', block)

        for lang_code, raw_text in trans_matches:
            if target_langs and lang_code not in target_langs:
                continue

            clean_text = raw_text.replace('\\"', '"').replace("\\'", "'").replace('\\u0027', "'")
            mp3_path = f"{out_dir}/{line_id}_{lang_code}.mp3"

            voices = VOICE_MAP.get(lang_code, VOICE_MAP["es-ES"])
            voice = voices[gender]

            pitch_mod = None
            rate_mod = None
            if char_id == "don_ramon":
                pitch_mod = "-8Hz"
                rate_mod = "-4%"
            elif char_id == "mateo":
                pitch_mod = "+12Hz"
                rate_mod = "+6%"
            elif char_id == "hugo":
                rate_mod = "+3%"

            tasks.append((mp3_path, voice, clean_text, pitch_mod, rate_mod))

    print(f"Targeting {len(tasks)} audio files (force={args.force})...")
    coros = [synthesize_one(sem, p, v, t, pi, ra, force=args.force) for p, v, t, pi, ra in tasks]
    results = await asyncio.gather(*coros)

    generated_count = sum(1 for success, status in results if success and status != "cached")
    cached_count = sum(1 for success, status in results if success and status == "cached")
    failed_count = sum(1 for success, status in results if not success)

    print(f"Synthesis summary -> Generated: {generated_count}, Cached: {cached_count}, Failed: {failed_count}")

if __name__ == "__main__":
    asyncio.run(main())
