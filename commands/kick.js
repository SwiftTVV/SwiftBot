exports.run = (client, message, args) => {

  const Discord = require("discord.js");
  let nrole = message.guild.roles.find(`name`, `Staff`)
  if(!message.member.roles.has(nrole.id)) return message.reply("Sorry, You are not allowed to use this command");
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can`t find that user!");
  let kReason = args.join(" ").slice(1);
  if(!kReason) return message.channel.send("Please specify a reason");
  if(kUser.roles.has("nrole.id")) return message.channel.send("No, You can`t kick staff");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("USER KICKED")
  .setColor("#162135")
  .addField("KICKED USER:", `${kUser} with ID ${kUser.id}`)
  .addField("KICKED BY:", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("TIME:", message.createdAt)

  let logs = message.guild.channels.find("name", "logs");
  if (!logs) return message.channel.send("Can`t find the logs channel");

  logs.send(kickEmbed)
  message.guild.member(kUser).kick(kReason);

  return;


}
