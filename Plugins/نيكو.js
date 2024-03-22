import fetch from 'node-fetch'
let ne = await (await fetch('')).text()
let handler = async (m, { conn, command }) => {
let nek = ne.split('\n')
let neko = pickRandom(nek)
conn.sendFile(m.chat, neko, 'error.jpg', ` 🐾💗`, m)
//conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]],m)
handler.command = /^(نيكو)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}