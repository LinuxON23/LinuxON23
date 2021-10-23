const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message, args, Util) => {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed2 = new Discord.MessageEmbed()
.setColor(`#2f3136`)
.setDescription(` **|** Mencione alguem que deseja se divorciar`)
  if (!user) return message.channel.send(embed2);

    let embed1 = new Discord.MessageEmbed()
.setColor(`#2f3136`)
.setDescription(` **|** Você não pode se auto divorciar!`)
   if (user == message.member) return message.reply(embed1);

  const embed3 = new Discord.MessageEmbed()
  .setColor(`#2f3136`)
  .setDescription(`:broken_heart: **${user} O usuário ${message.author.tag} se divorciou de você!**`)
   message.channel.send(embed3)

   db.delete(`casamento_${user.id}`, message.author.username)
   db.delete(`casamento_${message.author.id}`, user.user.username)
}
