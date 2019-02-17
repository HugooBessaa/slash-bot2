const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.author.client || message.content.startWith("+")) return;
    const args = message.content.slice("+".lenght).split(" ");
    const command = args.shift().loLowerCase();
   if(command == "say"){
       if(!args[0]) return message.channel.send("Viado usa +say <texto>");
       const saytxt = args.join(" ");
       message.channel.send(saytxt);
   }
  if (message.channel.id === "546679416068243456") {
      message.react('546686138316750859')
          .then(() => { 
              message.react('546686205224419348')
          });
  }
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
    member.guild.channels.get('546432785666015348').send(':green_heart: Servidores SlashMC :green_heart: \n\n:inbox_tray: **'+ member.user.username +'**, entrou no servidor!\n:slashontop: Seja bem vindo ao discord oficial da SlashMC!\nAconselhamos a ler as #regras para não ser punido!'); 
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('546432785666015348').send(':green_heart: Servidores SlashMC :green_heart: \n\n:outbox_tray: **'+ member.user.username +'**, saiu no servidor!\n:slashontop: Infelizmente perdemos um membro!\nAconselhamos a ler as #regras para não ser punido!');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
