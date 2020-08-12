const { prefix, token } = require('./config.json');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => 
	{if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}toad`) {
		var toadRandom = Math.floor(Math.random() *5);
		console.log(toadRandom);
		if (toadRandom === 0) {
			const toad1 = new Discord.MessageAttachment('../discordbot/assets/toad1.jpg')
			message.channel.send(toad1)
		} else if (toadRandom === 1) {
			const toad2 = new Discord.MessageAttachment('../discordbot/assets/toad2.jpg')
			message.channel.send(toad2)
		} else if (toadRandom === 2) {
			const toad3 = new Discord.MessageAttachment('../discordbot/assets/toad3.jpg')
			message.channel.send(toad3)
		} else if (toadRandom === 3) {
			const toad4 = new Discord.MessageAttachment('../discordbot/assets/toad4.jpg')
			message.channel.send(toad4)
		} else if (toadRandom === 4) {
			const toad5 = new Discord.MessageAttachment('../discordbot/assets/toad5.jpg')
			message.channel.send(toad5)
		} else if (toadRandom === 5) {
			const toad6 = new Discord.MessageAttachment('../discordbot/assets/toad6.jpg')
			message.channel.send(toad6)
		}

	} else if (message.content === `${prefix}react`) {
		message.react('742684152176050227');
	} else if (message.content === `${prefix}bot`) {
		const botEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('Bot Status')
			.setDescription('Active and Online')
			.attachFiles(['../discordbot/assets/linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
		message.channel.send(botEmbed);
    
	} else if (message.content === `${prefix}bobberto`) {
		message.channel.send('bobberto? more like lamerto')
	}
	
	

});

client.login(token);


