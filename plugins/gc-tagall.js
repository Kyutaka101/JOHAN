let handler = async (m, { conn, text, participants, groupMetadata }) => {
  let users = participants.filter(p => !p.isAdmin).map(u => u.id)
  
  m.reply(`❏ مجموعة : *${groupMetadata.subject}*\n❏ أعضاء : *${participants.length}*${text ? `\n❐ رسالة : ${text}\n` : ''}\n*✦━━━━━━[ 𝑍𝑂𝑅𝑂 ]━━━━━━✦*
*⤹⚜⊰⚡⊱⚜⤸* يلا ي جدعان تعالو اي الملل دا
*✦━━─━━━⌠🐉⌡━━━─━━✦*
*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*\n` + users.map(v => '│◦❈↲ تفاعل @' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ 𝑍𝑂𝑅𝑂 ]━━━━━━✦*', null, {
      mentions: users
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.group = true

export default handler
