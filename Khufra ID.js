let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let res = await fetch('https://raw.githubusercontent.com/MangDTech/project-resources/main/Khufra ID.json')
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  let url = json[Math.floor(Math.random() * json.length)]
  await conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'Nih Kak', '©KBOT', 'Get Again', '/Khufra ID', m)
}
handler.customPrefix = /Khufra ID/
handler.help = ['Khufra ID']
handler.tags = ['audio']
handler.limit = 10
handler.register = true
handler.command = new RegExp
module.exports = handler
