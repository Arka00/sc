let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?`
    let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${text}&apikey=r6ZWzOvy`)
   
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.data[1].url, json.data[1].url, 'f', m)
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(facebook2|fb2)$/i

handler.limit = 1

module.exports = handler