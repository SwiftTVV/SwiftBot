module.exports = (client, files) => {
  console.log(`The bot is now logged in as: ${client.user.tag} and is ready to be used!`)
  client.user.setStatus(`online`)
  client.setInterval(async () => {
      await new Promise(resolve => { setTimeout(resolve, 30000) })
      client.user.setActivity(`Over all the servers! | ${client.guilds}`, {type: "WATCHING"});
      await new Promise(resolve => { setTimeout(resolve, 30000) })
      client.user.setActivity(`over ${client.guilds} servers | ${client.config.prefix}help`, {type: "WATCHING"});
    }, 30000)
};
