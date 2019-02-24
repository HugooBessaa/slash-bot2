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
	        .setTitle(":green_heart: Servidores SlashMC :green_heart:")
		.setDescription('\n:inbox_tray: **HugoBessaPT**, entrou no servidor!\n<:slashontop:546070971501510666> Seja bem vindo ao discord oficial da SlashMC!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
	    	embed.setThumbnail(message.author.avatarURL)
	        embed.addField(":shopping_cart: Loja:", "[Clique aqui](https://redeslash.com)", true)
	        embed.addField(":bird: Twitter:", "[@SlashNetworkOFC](https://twitter.com/slashnetworkofc)", true)
	        
           message.channel.send({embed});
	}
	
    if(command === "testarsaida") {
        const embed = new Discord.RichEmbed()
		.setColor(0xce1e00)
	        .setTitle(":green_heart: Servidores SlashMC :green_heart:")
		.setDescription('\n:outbox_tray: **HugoBessaPT**, saiu do servidor!\n<:slashontop:546070971501510666> Infelizmente perdemos um membro!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
	    	embed.setThumbnail(message.author.avatarURL)
	        embed.addField(":shopping_cart: Loja:", "[Clique aqui](https://redeslash.com)", true)
	        embed.addField(":bird: Twitter:", "[@SlashNetworkOFC](https://twitter.com/slashnetworkofc)", true)
	        
           message.channel.send({embed});
	}
	
    if(command === "ping") {
       const m = await message.channel.send("Ping?");
       var websocket = "" + m.createdTimestamp - message.createdTimestamp + "ms";
       var apiping = "" + Math.round(client.ping) + "ms";
        m.edit(`:green_heart: **| Ping do Bot da SlashMC**\n:ping_pong: **| Pong!**\n:stopwatch: **| WebSocket Ping:** ${websocket}\n:zap: **| API Ping:** ${apiping}`);
        }
     if(command === "testednv") {
	message.guild.channels.get('549169189965791232').setName("🎮 Jogando: 1");
	message.channel.send("prontoooo");
     }
	
 if(command === "clear") {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Escolha a quantidade de mensagens que deseja deletar de 2 a 100\nUtilize: +clear (2 > 100)");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched) return message.channel.send('Teste');
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	 message.channel.send(':green_heart: O chat foi limpo por **'+ member.user.username +'**!')
  }
	
    if(command === "kickar"){
if(!message.member.roles.some(r=>["🚧| Master", "🚧| Gerente", "🚧| Administrador", "🚧| Moderador", "🚧| Staff"].includes(r.name)) )
      return message.reply("Desculpe, mas você não tem permissão para utilizar esse comando!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Por favor mencione um membro valido presente neste servidor!");
    if(!member.kickable) 
      return message.reply("Não é possivel kickar esse membro pois ele tem um cargo acima do meu! Ou estou sem permissão para kickar.");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Motivo indefinido.";
    
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não foi possivel kickar pelo seguinte erro: ${error}`));
        const embed = new Discord.RichEmbed()
		.setColor(0xce1e00)
		.setDescription(`:green_heart: Servidores SlashMC :green_heart:\n\n:no_entry_sign: **${member.user.tag}** foi kickado do servidor por **${message.author.tag}**!\n:warning: Motivo: ${reason}\nAconselhamos a ler as <#546049920365232148> para não ser punido!`);
	    	embed.setThumbnail(member.user.avatarURL)
           message.channels.get('546049103382052866').send({embed});
  }
	
    if (message.content === '+slash') {
       var request = require('request');
	request('https://api.mcsrvstat.us/1/ru.redewhinter.com:25601', function (error, response, body){
  	var status = JSON.parse(body);
    	message.reply('alô me chamou? ixi verdade..\n:green_heart: Servidores SlashMC :green_heart:\n:shinto_shrine: Factions Mystic MCPE:\n**IP:** jogar.redeslash.com\n**Porta:** 19132\n**Versão:** 1.1.5\n**Jogadores:** ' + status['players']['online'] + '/' + status['players']['max'] + '');
        message.channel.send({embed: {
  color: 0x4bf442,
  description: "**Site:** https://redeslash.com\n**Twitter:** @SlashNetworkOFC\n**Criador:** <@414387339629035520>"
}});
      });
	}
});
client.on('guildMemberAdd', member => {
        const embed = new Discord.RichEmbed()
		.setColor(0x4bf442)
		.setDescription(':green_heart: Servidores SlashMC :green_heart: \n\n:inbox_tray: **'+ member.user.username +'**, entrou no servidor!\n<:slashontop:546070971501510666> Seja bem vindo ao discord oficial da SlashMC!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
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
