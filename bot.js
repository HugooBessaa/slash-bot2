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
	
    if(command === "setup-captcha") {
       message.channel.send(":green_heart: **Servidores SlashMC** :green_heart:\n\n:warning: | Este é o nosso sistema de verificação dos usúarios. O que ele faz? Ele verifica se você é um `BOT (robô)`\n\n:loudspeaker: | Caso não seja um `robô` por favor clique na reação e você irá poder interagir com todos os canais do nosso servidor, caso contrário permanecerá imune aos canais do servidor.\n\n:no_entry_sign: Lembrando que enquanto você  não confirmar o captcha, você não conseguirá interagir em nenhum canal. :no_entry_sign:")
       }
    if(command === "sugestão") {
	    if(!args[0]) return message.channel.send(":green_heart: <@"+ message.author.id +">, Uso correto: +sugestão <sua sugestão>\n:warning: Lembrando que o mau uso do comando resultará em punimento");
        const embed = new Discord.RichEmbed()
		.setColor(0x4bf442)
		.setAuthor('Sugestão de ' + message.author.username, message.author.displayAvatarURL)
	        .addField('A sugestão foi:', '```' + args.join(" ") + '```', false)
	        .setFooter('Vocês apoiam a opinião de ' + message.author.username + '?', client.user.avatarURL)
	        .setTimestamp();
		client.channels.get('546686267874869260').send({embed})
	    .then(function (message) {
          message.react('546684879153397779')
          message.react('546684910446968843')
    			});
	        message.channel.send(":green_heart: **" + message.author.username + "**, a sua sugestão foi enviada com sucesso!\n:inbox_tray: Verifique o canal #sugestoes.")
	}

    if(command === "aviso") {
	    if(!args[0]) return message.channel.send(":green_heart: <@"+ message.author.id +">, Uso correto: +aviso <seu aviso>\n:warning: Lembrando que o mau uso do comando resultará em demote");
        const embed = new Discord.RichEmbed()
		.setColor(0xce1e00)
		.setDescription(":loudspeaker::warning: Aviso de **" + message.author.username + "**:warning::loudspeaker:\n```" + args.join(" ") + "```\n:warning: É aconselhado a lerem @everyone!");
		client.channels.get('546052170785751051').send({embed})
	    .then(function (message) {
          message.react('546076487384825856')
    			});
	        message.channel.send(":green_heart: **" + message.author.username + "** o seu aviso foi enviado com sucesso!")
	}
	
    if(command === "ping") {
       const m = await message.channel.send("Ping?");
       var websocket = "" + m.createdTimestamp - message.createdTimestamp + "ms";
       var apiping = "" + Math.round(client.ping) + "ms";
        m.edit(`:green_heart: **| Ping do Bot da SlashMC**\n:ping_pong: **| Pong!**\n:stopwatch: **| WebSocket Ping:** ${websocket}\n:zap: **| API Ping:** ${apiping}`);
        }
     if(command === "testednv") {
	message.guild.channels.get('549169189965791232').setName("🎮 Jogando: 1");
	message.channel.send("prontoooo mano fode-te kk");
     }
	
 if(command === "clear") {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send(":green_heart: <@"+ message.author.id +">, Uso correto: **+clear <quantidade>**\n:warning: Lembrando que só é possivel limpar de `2 até 100` mensagens");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`:warning:Erro: ${error}`));
	 message.channel.send(':green_heart: O chat foi limpo por **'+ message.author.username +'**!')
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
		.setDescription(`:green_heart: Servidores SlashMC :green_heart:\n\n:no_entry_sign: **<@${member.user.id}>** foi kickado do servidor!\n:warning: Motivo: ${reason}\nAconselhamos a ler as <#546049920365232148> para não ser punido!`)
	       .setThumbnail(member.user.displayAvatarURL)
	       .setFooter(`Autor do banimento: ${message.author.tag}`, message.author.displayAvatarURL);
           client.channels.get('546049103382052866').send({embed})
  }
	
    if (command === 'slash') {
       var request = require('request');
	request('https://api.mcsrvstat.us/1/ru.redewhinter.com:25601', function (error, response, body){
  	var status = JSON.parse(body);
    	const embed = new Discord.RichEmbed()
	        .setAuthor('Status da SlashMC', client.user.avatarURL)
	        .addField('<a:minecraft_jump:549209842548604978> Qual é o link da loja?', ":shopping_cart: Loja: [Clique aqui](https://redeslash.com)", true)
	        .addField('<a:minecraft_jump:549209842548604978> Qual é o twitter do servidor?', ":bird: Twitter: [@SlashNetworkOFC](https://twitter.com/slashnetworkofc)", true)
	        .addField('<a:enchanted_book:549211330859630592> Factions Mystic **MCPE** <a:enchanted_book:549211330859630592>', ':video_game: **IP:** jogar.redeslash.com\n:video_game: **Porta:** 19132\n:video_game: **Versão:** 1.1x\n:video_game: **Jogadores:** '+ status['players']['online'] +'/'+ status['players']['max'], false)
	        .setThumbnail(client.user.avatarURL)
		.setColor(0xce1e00)
	        .setFooter('Não se esqueça de ler as regras!', client.user.avatarURL)
                .setTimestamp();
	   message.channel.send({embed});
      });
	}
});

client.on("raw", event => {
	const eventName = event.t;
     if(eventName === 'MESSAGE_REACTION_ADD'){
	   if(event.d.message_id === '550825144298373140'){
		 var reactionChannel = client.channels.get(event.d.channel_id);
		   if(reactionChannel.messages.has(event.d.message_id))
			   return;
		   else{
			 reactionChannel.fetchMessage(event.d.message_id)
			 .then(msg => {
		           var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
		           var user = client.users.get(event.d.user_id);
				 client.emit('messageReactionAdd', msgReaction, user);
	              })
			   .catch(err => console.log(err));
	        }
	   }
     }
});
	  
client.on("messageReactionAdd", (messageReaction, user) =>{
      var roleName = messageReaction.emoji.name;
      console.log(roleName);
	var role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());
	if(role){
		var member = messageReaction.message.guild.members.find(member => member.id === user.id);
	if(member){
		member.addRole('546066964569784320')
		member.removeRole('548943092481392641');
	}
	}
});
client.on('guildMemberAdd', member => {
        const embed = new Discord.RichEmbed()
		.setColor(0x4bf442)
		.setDescription(':green_heart: **Servidores SlashMC** :green_heart:\n\n:inbox_tray: **'+ member.user.username +'**, entrou no servidor!\n<:slashontop:546070971501510666> Seja bem vindo ao discord oficial da SlashMC!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
	    	embed.setThumbnail(member.user.displayAvatarURL)
	        embed.addField(":shopping_cart: Loja:", "[Clique aqui](https://redeslash.com)", true)
	        embed.addField(":bird: Twitter:", "[@SlashNetworkOFC](https://twitter.com/slashnetworkofc)", true)
	   member.guild.channels.get('546048881033609216').send({embed});
});

client.on('guildMemberRemove', member => {
        const embed = new Discord.RichEmbed()
		.setColor(0xce1e00)
		.setDescription(':green_heart: **Servidores SlashMC** :green_heart:\n\n:outbox_tray: **'+ member.user.username +'**, saiu do servidor!\n<:slashontop:546070971501510666> Infelizmente perdemos um membro!\nAconselhamos a ler as <#546049920365232148> para não ser punido!');
	    	embed.setThumbnail(member.user.avatarURL)
	        embed.addField(":shopping_cart: Loja:", "[Clique aqui](https://redeslash.com)", true)
	        embed.addField(":bird: Twitter:", "[@SlashNetworkOFC](https://twitter.com/slashnetworkofc)", true)
	   member.guild.channels.get('546048881033609216').send({embed});
});

client.login(process.env.BOT_TOKEN);
