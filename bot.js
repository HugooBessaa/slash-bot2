const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "+"

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity("jogar.redeslash.com", {type: "PLAYING"});
});

client.on('message', async (message) => {
  if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
    
    if(command === "sugestão") {
	    if(!args[0]) return message.channel.send(":green_heart: Uso correto: **+sugestão <sua sugestão>**");
        const embed = new Discord.RichEmbed()
		.setColor(0x4bf442)
		.setDescription(":green_heart: :bulb: Sugestão de **" + message.author.username + "** :bulb: :green_heart:\n```" + args.join(" ") + "```\n\nVocês apoiam a opinião de **" + message.author.username + "**?");
		client.channels.get('546686267874869260').send({embed})
	    .then(function (message) {
          message.react('546684879153397779')
          message.react('546684910446968843')
    			});
	        message.channel.send(":green_heart: **" + message.author.username + "**, a sua sugestão foi enviada com sucesso!\n:inbox_tray: Verifique o canal #sugestoes.")
	}

    if(command === "avisosla") {
	    if(!args[0]) return message.channel.send(":green_heart: Uso correto: **+aviso <seu aviso>**");
        const embed = new Discord.RichEmbed()
		.setColor(0xce1e00)
		.setDescription(":loudspeaker::warning: Aviso de **" + message.author.username + "**:warning::loudspeaker:\n```" + args.join(" ") + "```\n:warning: É aconselhado a lerem @everyone!");
		client.channels.get('546052170785751051').send({embed})
	    .then(function (message) {
          message.react('546076487384825856')
    			});
	        message.channel.send(":green_heart: **" + message.author.username + "** o seu aviso foi enviado com sucesso!")
	}
	
    if(command === "testarentrada") {
        const embed = new Discord.RichEmbed()
		.setColor(0x4bf442)
		.setDescription(':green_heart: Servidores SlashMC :green_heart: \n\n:inbox_tray: **HugoBessaPT**, entrou no servidor!\n<:slashontop:546070971501510666> Seja bem vindo ao discord oficial da SlashMC!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
	        embed.addField("Field title", "Your text here: [link](http://example.com)")
		client.channels.get('546686267874869260').send({embed})
           message.channel.send({embed});
	}
	
    if(command === "pingar") {
       const m = await message.channel.send("Ping?");
       var websocket = "" + m.createdTimestamp - message.createdTimestamp + "ms";
       var apiping = "" + Math.round(client.ping) + "ms";
        m.edit(`:green_heart: **| Ping do Bot da SlashMC**\n:ping_pong: **| Pong!**\n:stopwatch: **| WebSocket Ping:** ${websocket}\n:zap: **| API Ping:** ${apiping}`);
        }
	
    if (message.content === '+slash') {
    	message.reply('alô me chamou? ixi verdade..\n:green_heart: Servidores SlashMC :green_heart:\n:shinto_shrine: Factions Mystic MCPE:\n**IP:** jogar.redeslash.com\n**Porta:** 19132\n**Versão:** 1.1.5');
        message.channel.send({embed: {
  color: 0x4bf442,
  description: "**Site:** https://redeslash.com\n**Twitter:** @SlashNetworkOFC\n**Criador:** <@414387339629035520>"
}});
  	}
});
client.on('guildMemberAdd', member => {
        const embed = new Discord.RichEmbed()
		.setColor(0x4bf442)
		.setDescription(':green_heart: Servidores SlashMC :green_heart: \n\n:inbox_tray: **'+ member.user.username +'**, entrou no servidor!\n<:slashontop:546070971501510666> Seja bem vindo ao discord oficial da SlashMC!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
		client.channels.get('546686267874869260').send({embed})
    member.guild.channels.get('546048881033609216').send({embed}); 
});

client.on('guildMemberRemove', member => {
        const embed = new Discord.RichEmbed()
		.setColor(0xce1e00)
		.setDescription(':green_heart: Servidores SlashMC :green_heart: \n\n:outbox_tray: **'+ member.user.username +'**, saiu no servidor!\n<:slashontop:546070971501510666> Infelizmente perdemos um membro!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
    member.guild.channels.get('546048881033609216').send({embed});
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
