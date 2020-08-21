const { prefix, token } = require('./configbeta.json');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();



client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('beta bot 😳 (tb!help)')
});

client.on('message', async message => 
	
	{if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'ping') {
		message.channel.send('Pong.');
	
	} else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

	} else if (command === 'toad') {
		var toadRandom = Math.floor(Math.random() *5);
		console.log(toadRandom);
		if (toadRandom === 0) {
			const toadEmbed1 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad1.jpg'])
			    .setImage('attachment://toad1.jpg')
			message.channel.send(toadEmbed1)
		} else if (toadRandom === 1) {
			const toadEmbed2 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad2.jpg'])
			    .setImage('attachment://toad2.jpg')
			message.channel.send(toadEmbed2)
		} else if (toadRandom === 2) {
			const toadEmbed3 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad3.jpg'])
			    .setImage('attachment://toad3.jpg')
			message.channel.send(toadEmbed2)
		} else if (toadRandom === 3) {
			const toadEmbed4 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad4.jpg'])
			    .setImage('attachment://toad4.jpg')
			message.channel.send(toadEmbed4)
		} else if (toadRandom === 4) {
			const toadEmbed5 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad5.jpg'])
			    .setImage('attachment://toad5.jpg')
			message.channel.send(toadEmbed5)
		} else if (toadRandom === 5) {
			const toadEmbed6 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad6.jpg'])
			    .setImage('attachment://toad6.jpg')
			message.channel.send(toadEmbed6)
		} else if (toadRandom === 6) {
			const toadEmbed7 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad7.jpg'])
			    .setImage('attachment://toad7.jpg')
			message.channel.send(toadEmbed7)
		}

	} else if (command === 'bot') {
		const botEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('Bot Status')
			.setDescription('Active and Online')
			.attachFiles(['../discordbot/assets/linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setFooter('i was made by @toad#9999')
		message.channel.send(botEmbed);
    
	} else if (command === 'bobberto') {
		message.channel.send('bobberto? more like lamerto')

	} else if (command === 'help') {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('toadbot Commands')
			.setDescription('t!bot - bot status \n !toad - random toad pic (dm me more) \n t!bot - bot status \n t!server - server info \n t!bobberto - epik funny \n t!say - bot repeats what you said and deletes your message')
			.attachFiles(['../discordbot/assets/linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setFooter('i was made by @toad#9999') 
		message.channel.send(helpEmbed)

	} else if (message.content === `${prefix}fightme`) {
		message.channel.send('*try me bitch*')
 
	} else if (command === 'say') {
		if (!args.length) {
			return message.channel.send(`say something smh ${message.author}!`);
		}
	
		message.channel.send(`${args.join(' ')}`);
		message.delete(args)
	} else if (command === 'kick') {
		if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('invalid perms get rekt')
		let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
		if (!User) return message.channel.send("Invalid User")
		if (User.hasPermission("KICK_MEMBERS")) return message.reply("Invalid Permissions")
		let kickReason = args.join(" ").slice(22);
		if (!kickReason) {
			Reason = "None"
		}
		User.kick({reason: kickReason})	
	} else if (command === 'ban') {
		if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('invalid perms get rekt')
		let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
		if (!User) return message.channel.send("Invalid User")
		if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
		let banReason = args.join(" ").slice(22);
		if (!banReason) {
			Reason = "None"
		}
		User.kick({reason: banReason})
	} else if (command === 'mute') {
		if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('invalid perms get rekt')
		let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
		if (!User) return message.channel.send('invalid user lmao')
		if (User.hasPermission("MUTE_MEMBERS")) return message.reply('lmao u have no perms git gud noob')
		let muteReason = args.join(" ").slice(22);
		var role = User.guild.roles.cache.find(role => role.name === "muted");
		if(!muteReason) {
			Reason = "none"
		}
		User.role.add(role)
	}
 

	




});

client.login(token);


