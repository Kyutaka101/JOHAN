let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `💝 العلاقات
*╭•·–––––––––––––––––––·•*
│ *المجموع : ${relacion.length} مستخدمين* ${relacion ? '\n│\n' + relacion.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'أعزب' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `💟 عنده شريك ⇢ ${pareja ? `*${user} 💞 ${conn.getName(pareja)}*` : `❌ *معندهوش شريك*`}\n${wm}`, null, [ 
['الاوامر ☘️', '/menuall']], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listaparejas|علاقة|علاقه)$/i

export default handler
