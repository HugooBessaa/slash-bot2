const Discord = require('discord.js');
const client = new Discord.Client();
const guildID = "546385232698408970";
var memberCount = client.guilds.get(guildID).members.size()

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+slash') {
    	message.reply('alô me chamou? ixi verdade..\n:green_heart: Servidores SlashMC :green_heart:\n:shinto_shrine: Factions Mystic MCPE:\n**IP:** jogar.redeslash.com\n**Porta:** 19132\n**Versão:** 1.1.5');
        message.channel.send({embed: {
  color: 0x4bf442,
  description: "**Site:** https://redeslash.com\n**Twitter:** @SlashNetworkOFC\n**Criador:** <@414387339629035520>"
}});
  	}
    if (message.content === '+entrada') {
        message.channel.send({embed: {
  color: 0x4bf442,
  description: ":green_heart: Servidores SlashMC :green_heart:\n\n:inbox_tray: HugoBessaPT entrou no servidor!\nAtualmente somos" + memberCount "membros no servidor!"
}});
    }
    if (message.content === 'O que fazer com um dominio?') {
    	message.channel.send('Faça igual ao Azalim, pegue nele e enfie no cu! 😆😆');
    }
});
client.on('guildMemberAdd', member => {
    member.guild.channels.get('546432785666015348').send('**' + member.user.username + '**, juntou-se ao servidor que merda mano!'); 
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('546432785666015348').send('**' + member.user.username + '**, aleluia o fdp saiu kk');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
