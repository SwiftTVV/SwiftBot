exports.run = async(client, message, args) => {
  const Discord = require('discord.js')
  if(!message.member.roles.has("Staff")) return message.reply("Sorry, You are not allowed to use this command");
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!wUser) return message,channel.send("can't find user!");
  let user = message.mentions.users.values();
  let wReason = args.join(" ").slice(1);
  if(!message.member.role.has("Staff")) return message.channel.send("No, You can`t give a warning to a staff member");

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("*Warning*")
  .setColor("#162135")
  .addField("WARNED BY:", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("TIME:", message.createdAt)
  .addField("REASON:", wReason);


  wUser.send(warnEmbed);
  message.delete().catch(O_o=>{})

      return;
}
