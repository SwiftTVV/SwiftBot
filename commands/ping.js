exports.run = async(client, message, args) => {
  message.channel.startTyping()
  await new Promise(resolve => { setTimeout(resolve, 5000) })
  message.channel.send('🏓 Pong! ' + Math.round(client.ping) + 'ms D-API delay.');
  message.channel.stopTyping()
}

exports.help = {
  name: 'ping',
  category: 'Public',
  description: 'Sends the bots ping.',
  usage: 'ping'
}
