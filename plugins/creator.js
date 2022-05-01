let handler = function (m) {
  this.sendContact(m.chat, '6282140059454', 'Nanzz', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler