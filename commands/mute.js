exports.run = async(client, message, args) => {
  const Discord = require('discord.js')
  let ms = require('ms')

  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!tomute) return message.reply("couldn't find user");
      if(tomute.roles.has("Staff")) return message.reply("No, You can`t ban a staff member");
      let muterole = message.guild.roles.find("name", "Muted")

      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#00ff19",
            permissions: []
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              READ_MESSAGES: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      let mutetime = args[1];
      if(!mutetime) return message.reply("you didn't specify a time")

      await(tomute.addRole(muterole.id));
      message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

      let exhileEmbed = new Discord.RichEmbed()
      .setDescription("MUTED")
      .setColor("#000000")
      .addField("MUTED BY:", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("TIME:", message.createdAt)
      .addField("MUTED FOR:", `${ms(ms(mutetime))}`);
      tomute.send(exhileEmbed)
      let logs = message.guild.channels.find("name", "logs");
      if (!logs) return message.channel.send("Can`t find the logs channel");

      logs.send(exhileEmbed)
      setTimeout(function(){
        tomute.removeRole(muterole.id);
        logs.send(`<@${tomute.id}> has been unmuted`);
      }, ms(mutetime));
}
