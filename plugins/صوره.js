import { googleImage } from  '@bochilteam/scraper' 
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    Let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link,  'google.jpg' , `*𓍹—————𓍻 ღღღ 𓍹—————𓍻\n𝐵𝑌:『𝑬𝑹𝑰𝑵 𝑩𝑶𝑻┋🪽』 ღ\n𓍹—————𓍻 ღღღ 𓍹—————𓍻*
🔎 *النتيجة:* ${text}
🌎 *الصورة مأخوذة من:*جوجل
`,m)
}
handler.help = [ 'gimage' ]
handler.tags = [ 'internet' ]
handler.command = /^(صره)$/i

export default handler