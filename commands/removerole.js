exports.run = async(client, message, args) => {
   const Discord = require('discord.js')
   let nrole = message.guild.roles.find(`name`, `Staff Manager`)
   if(!message.member.roles.has(nrole.id)) return message.reply("Sorry you cant do that. (Or the server owner has not used s!setup)");
   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!rMember) return message.reply("Couldn`t find that user");
   let prole = args[1]
   if(!prole) return message.reply("Please specify previous role");
   let role = args[2];
   if(!role) return message.reply("Please specify a role");
   let gRole = message.guild.roles.find(`name`, role);
   if(!gRole) return message.reply("Couldn`t find that user");
   let gTeam = message.guild.channels.find(`name`, `team-changes`);
   message.delete().catch();

   if(rMember.roles.has(gRole.id));
   await(rMember.removeRole(gRole.id));

   try{
     await rMember.send(`Hey! You have been given ${gRole.name} in ${message.guild.name} Enjoy!`)
     let teamc = new Discord.RichEmbed()
     .setTitle(`USER DEMOTION`)
     .addField(`USER: `,`${rMember}`)
     .addField(`Previous Role: `,`${prole}`)
     .addField(`New Role: `,`${role}`)
     .addField(`Time: `, message.createdAt)
     .addField(`Demoted by `,`${message.author}`)
     .setFooter(`Bot devleoped by Swift#8108`, `https://cdn.discordapp.com/attachments/553904178607685633/693758844706226236/Swift_Logo_V2.png`)
     gTeam.send(teamc)
   }catch(e){
     await rMember.send(`Hey! You have lost ${gRole.name} in ${message.guild.name}`)
     let teamc = new Discord.RichEmbed()
     .setTitle(`USER DEMOTION`)
     .addField(`USER: `,`${rMember}`)
     .addField(`Previous Role: `,`${prole}`)
     .addField(`New Role: `,`${role}`)
     .addField(`Time: `, message.createdAt)
     .addField(`Demoted by `,`${message.author}`)
     .setFooter(`Bot devleoped by Swift#8108`, `https://cdn.discordapp.com/attachments/553904178607685633/693758844706226236/Swift_Logo_V2.png`)
     gTeam.send(teamc)
  }
}
