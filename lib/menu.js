exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*

Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini$✨

📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*

         ───
👑 Command / Perintah :
         ───
         
╭───「 *Menu* 」
├≽ ️$sticker
├≽️ $pantun
├≽️ $quotes
├≽️ $foto cewek/cowok
├≽️ $tts
├≽️ $say
├≽️ $quran
├≽️ $twt
├≽️ $fb
├≽️ $ig
├≽️ $ytmp3
├≽️ $yt
├≽️ $wiki
├≽️ $lirik
├≽️ $nulis
├≽️ $sholat (nama daerahmu)
├≽️ $toxic (anjing)
├≽️ $fotoanime
├≽️ $covid
├≽️ $alay
├≽️ $pokemon
├≽️ $loli
├≽️ $katabijak
├≽️ $fakta
├≽️ $hentai
├≽️ $nama
├≽️ $pasangan
├≽️ $owner
├≽️ $creator
├≽️ $cek
├≽️ #info
╰─────────

[ Keterangan ]

» $sticker Contoh: kirim gambar dengan caption $sticker
» $pantun Contoh: $pantun
» $quotes Contoh: $quotes
» $foto Contoh: $foto cowo
» $tts Contoh: $tts Febb Ganteng *[${BotName} akan mengirim link download]*
» $say Contoh: $say Febb Ganteng
» $quran Contoh: $quran
» $twt Contoh: $twt [link]
» $fb Contoh: $fb [link]
» $ig Contoh: $ig [link]
» $ytmp3 Contoh: $ytmp3 [link]
» $yt Contoh: $yt [link]
» $wiki Contoh: $wiki Indonesia
» $lirik Contoh: $lirik
» $nulis Contoh: $nulis Febb Ganteng
» $fotoanime Contoh: $fotoanime
» $covid Contoh: $covid
» $nama Contoh $nama Febb
» $pasangan Contoh: $pasangan Sendok & Garpu
» #info Contoh: #info
 
 
├≽️💰 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS$
├≽️💰 MAU DONASI? SILAHKAN KETIK #donate
 
├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${instagramlu}
 
├───≽️「 *INFORMASI COVID-19 TERBARU$* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER$_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Modifikasi By Febb* ‼️
├≽️📌 *Kalo ada bug maklumin yah* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *YouTube* : ${grupch2}
├≽️💥 *Instagram* : ${grupch3}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
