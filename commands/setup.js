exports.run = async(client, message, args) => {
  const Discord = require(`discord.js`)

  let staffrole = message.guild.roles.find("name", "Staff")
  let staffmanagerrole = message.guild.roles.find("name", "Staff Manager")

  if(!staffrole){
    try{
      staffrole = await message.guild.createRole({
        name: "Staff",
        color: "#d8d8d8",
        permissions: []
      })
    }catch(e){
      console.log(e.stack);
    }
  }

if(!staffmanagerrole){
  try{
    staffmanagerrole = await message.guild.createRole({
      name: "Staff Manager",
      color: "#d8d8d8",
      permissions: []
    })
  }catch(e){
    console.log(e.stack);
  }
}
let logschannel = message.guild.channels.find("name", "logs")
if(!logschannel){
  message.guild.createChannel("logs", "text");
}
let teamchannel = message.guild.channels.find("name", "team-changes")
if(!teamchannel){
  message.guild.createChannel("team-changes", "text");
}
message.channel.send("Setup has been completed!")
}
