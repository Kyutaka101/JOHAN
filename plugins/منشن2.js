let handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    if (isAdmin || isOwner) {
        let pesan = args.join` `;
        let oi = `*♚~الرساله:* ${pesan}`;
        let teks = `*  * \n\n ${oi}\n\n*🗡┇الجروب :⇣*\n`;
        for (let mem of participants) {
            if (!mem.isAdmin) { // التحقق مما إذا كان العضو ليس مشرفًا
                teks += `*تفاعل ↫* @${mem.id.split('@')[0]}\n`;
            }
        }
        teks += `*Nezuko-BOT*\n\n*JOHAN&kaneki*`;
        conn.sendMessage(m.chat, { text: teks, mentions: participants.filter(mem => !mem.isAdmin).map(a => a.id) });
    } else {
        global.dfail('admin', m, conn);
        throw false;
    }
}

handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(منشن2|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;

export default handler;
