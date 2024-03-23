let handler = async (m, { conn, command, text }) => {
let love = `
*🧧نسبة حظك🧧 من 100* ${text}  هي *${Math.floor(Math.random() * 100)}%* *من 100%*
*متزعلشي🥲💔ع حظك تتعود/ي*

*╝•══━━━•〘•🎊•〙•━━━══•╚*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(حظي|حظ)$/i
export default handler