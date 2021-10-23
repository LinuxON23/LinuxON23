const Discord = require("discord.js"); 
const cooldowns = {}
const ms = require("ms")

 

exports.run = async (client, message, args) => {



 if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 8000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']

if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle(':x: Muita Calma nessa hora amigão !!!')
  .setColor('#000001')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(aguarde).then(msg=> {
    msg.delete({ timeout: 7000 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }



    let serverembed = new Discord.MessageEmbed() 

    .setColor("#6400b6")

    .setTitle(message.guild.name + ` Server Stats`)

    .addField(":gift: Nome", message.guild.name, )

    .addField(":id:  ID", message.guild.id, )

    .addField(`:pencil:  Server Owner`, `<@${message.guild.ownerID}>`, true)

    .addField(`:pencil:  Server Owner ID`, message.guild.ownerID, true)

    .addField(':date: Server Criado em', message.guild.createdAt, true)

    .addField(`:closed_lock_with_key: Server Verification Level`, message.guild.verificationLevel, true)

    .addField(':man: Membros', `${message.guild.members.cache.filter(member => member.user.bot).size} Bots | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humanos | ${message.guild.memberCount} Total de Membros | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% Bots | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humanos`, true)

    .addField(':wrench:  Canais', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Chats de Voz | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Canais de Texto | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categorias | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Chats de Voz | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Canais de Texto | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categorias`, true)

    .addField(":inbox_tray:  Você Entrou", message.member.joinedAt)

    .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

 

    message.channel.send(serverembed);

 

   message.delete();

 }

