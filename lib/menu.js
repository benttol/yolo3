exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *!sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *!ytmp3* [linkyoutube]
║│2. *!ytmp4* [linkyoutube]
║│3. *!tiktok* [linktiktok]
║│4. *!ig* [linkIg]
║│5. *!fb* [linkFb]
║│6. *!twt* [linkTweet]
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *!wiki* [query] Wikipedia.
║│2. *!nulis* [teks]
║│3. *!quran*
║│4. *!pantun*
║│5. *!nama* [nama anda]
║│6. *!pasangan* [Sendok & Garpu]
║│7. *!lirik* [nama lagu]
║│8. *!chord* [nama lagu]
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *!sholat* [daerah]
║│2. *!covid*
║│3. *!infogempa*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *!owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *#info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *#donasi*
║│2. *!tts* [teks]
║│3. *!quotes*
║│4. *!foto cewek*
║│5. *!foto cowok*
║│6. *!pokemon*
║│7. *!loli* *//error//*
║│8. *!hentai* *//error//*
║│9. *!fotoanime*
║│10. *!namaninja* *//error//*
║│11. *!alay*  [teks]
║│12. *!say*  [teks]
║│13. *!infoig* [@febby28_]
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ ${grupch1}
║│2. *YouTube <subscribe>*
║│ ${grupch2}
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY FEBB*
╚════════════════════`
}
