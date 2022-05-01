let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `┌〔 List Berlangganan 〕
├ Permanen
├ 2 Bulan
├ 1 Bulan
├ Trial 1 jam
└────
`.trim(), watermark, 'Gopay', '#viagopay', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler