import gtts from 'node-gtts' 
 import { readFileSync, unlinkSync } from 'fs' 
 import { join } from 'path' 
  
 const defaultLang = 'ar' 
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
  
 let lang = args[0] 
 let text = args.slice(1).join(' ') 
 if ((args[0] || '').length !== 2) { 
 lang = defaultLang 
 text = args.join(' ') 
 } 
 if (!text && m.quoted?.text) text = m.quoted.text 
  
 let res 
 try { res = await tts(text, lang) } 
 catch (e) { 
 m.reply(e + '') 
 text = args.join(' ') 
 if (!text) throw `${lenguajeGB['smsAvisoMG']()}\nكتابة نص لتحويله إلى صوتية\nمثل\n*${usedPrefix + command} ar علاوي حبيب قلبي ابو حسين🙂*` 
 res = await tts(text, defaultLang) 
 } finally { 
 if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true) 
 }} 
 handler.help = ['tts <لغة> <نص>'] 
 handler.tags = ['tools'] 
 handler.command = /^g?tts|انطق$/i 
 export default handler 
  
 function tts(text, lang = 'es') { 
 console.log(lang, text) 
 return new Promise((resolve, reject) => { 
 try { 
 let tts = gtts(lang) 
 let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav') 
 tts.save(filePath, text, () => { 
 resolve(readFileSync(filePath)) 
 unlinkSync(filePath) 
 }) 
 } catch (e) { reject(e) } 
 })}