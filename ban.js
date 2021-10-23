const Discord = require('discord.js');

module.exports = {
name: 'ban',
description: 'Bans Users!',
usage: 'ban <user> <reason>',
cooldown: 0 ,
cooldown: 0,
run: async (client, message, args) => {

    const target = message.mentions.members.first()
    
    if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('Você não tem permissão para isto. ')
    if(!target) return message.channel.send(` Especifique um membro para bani-lo..`)
    if(target == message.author) return message.channel.send(' Você não pode banir a si mesmo!')
    if(target == message.guild.owner) return message.channel.send(' Você não tem permissão para isso, caso insista quem irá ser banido é você! ')
    
    const reason = args.slice(1).join(' ')
    if(!reason) return message.channel.send(' Informe o motivo.')

    const targetMember = message.guild.members.cache.get(target.id)
    targetMember.ban({
        days: 0,
        reason: `O ${message.author.tag} foi banido, Motivo: ${reason}`
    }).then(() => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`Banido **${target.tag}**, Pelo motivo: **${reason}**`)
        .setTimestamp()
        .setColor(`GREEN`)
        message.channel.send({embeds: [embed]})
        target.send(`Você foi banido**${message.guild.name}**, pelo moderador ${message.author.tag}(\`${message.author.tag}\`)`)
    })
}
}
