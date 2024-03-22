let handler = async (m, { conn, command, text }) => {
let love =`
*نسبة حب ${text} لك/ي هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*اطلب منه/ا ان تصبح صديقتك*
*✦━━━━━━[ 𝑬𝑹𝑰𝑵 ]━━━━━━✦*`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(نسبه|نسبة)$/i
export default handler