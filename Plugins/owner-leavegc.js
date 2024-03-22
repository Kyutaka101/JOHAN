let handler = async (m, { conn, args, command }) => {
await m.reply('*لن اشتاق لكم معه السلامه الي باعنا خسر دلعنا ⁦^⁠_⁠^⁩*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|اخرج|برا)$/i
handler.group = true
handler.rowner = true
export default handler
