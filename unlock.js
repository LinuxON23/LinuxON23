const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = `ak!`

  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando.`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT DESTRANCADO')
    .setDescription(`Este chat foi desmutado.`)
    .addField('Trancar:', `${prefix}lock`, true)
    .addField('Trancado por:', `${message.author}`, true)
    .addField('Motivo:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#2f3136')
    message.channel.send(embed);
    
}
 
