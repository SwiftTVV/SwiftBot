exports.run = (client, message, args) => {

  const Discord = require("discord.js");
  let nrole = message.guild.roles.find(`name`, `Staff`)
  if(!message.member.roles.has(nrole.id)) return message.reply("Sorry, You are not allowed to use this command");
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can`t find that user!");
  let bReason = args.join(" ").slice(1);
  if(!bReason) return message.channel.send("Please specify a reason");
  if(bUser.roles.has("nrole.id")) return message.channel.send("No, You can`t ban staff");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("USER BANNED")
  .setColor("#162135")
  .addField("BANED USER:", `${bUser} with ID ${bUser.id}`)
  .addField("BANED BY:", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("TIME:", message.createdAt)

  let logs = message.guild.channels.find("name", "logs");
  if (!logs) return message.channel.send("Can`t find the logs channel");

  logs.send(banEmbed)
  message.guild.member(bUser).ban(bReason);

  return;


}
