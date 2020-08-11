const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}toad-embed`) {
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#F47FFF')
				.setTitle('Toad Embed')
				.setAuthor('toadbot')
				.setDescription('badda bing badda bong, here\'s an embed with toad pictures')
				.attachFiles(['../discordbot/assets/toadembed.jpg'])
				.setImage('attachment://toadembed.jpg')
				.setThumbnail('attachment://toadembed.jpg')
		
			message.channel.send(exampleEmbed);
		
	}
	
	

});

client.login(token);
