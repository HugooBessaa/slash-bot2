const Discord = require('discord.js');
const client = new Discord.Client();

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
    if (message.content === 'O que fazer com um dominio?') {
    	message.channel.send('Faça igual ao Azalim, pegue nele e enfie no cu! 😆😆');
    }
});

client.on('guildMemberAdd', member => {
   client.guilds.forEach((guild) => {
    guild.fetchMembers().then(g => {
        let count = 0;
        g.members.forEach((member) => {
            count++;
        });
    member.guild.channels.get('546432785666015348').send(':green_heart: Servidores SlashMC :green_heart:\n\n:inbox_tray: **' + member.user.username + '**, entrou no servidor!\nAtualmente somos **' + ${count} +'** membros no servidor!'); 
});
});
});

client.on('guildMemberRemove', member => {
   client.guilds.forEach((guild) => {
    guild.fetchMembers().then(g => {
        let count = 0;
        g.members.forEach((member) => {
            count++;
        });
    member.guild.channels.get('546432785666015348').send(':green_heart: Servidores SlashMC :green_heart:\n\n:outbox_tray: **' + member.user.username + '**, saiu do servidor!\nAtualmente somos **' + ${count} + '** membros no servidor!');
});
});
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
