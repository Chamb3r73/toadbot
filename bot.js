// const { prefix, token } = require('./config.json');
// const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const badWords = "test";
// var PORT = process.env.PORT || 5000;
var prefix = ("t!")
let statusChoice = ['t! | please mother', 't! | cock and ball torture', 't! | come to ends i dare you bruv', 't! | sex with nmarkov', 't! | polish toilet spin basshunter dota homosex K19191', 't! | Counter-Strike: Global Cumfensive', 't! | :toad:', 't! | Gato Tom, Estas bn? collaspso. coronavirus.'];

client.once('ready', () => {
	console.log('om bot online and ready');
	setInterval(function(){
		let displayedStatus = statusChoice[Math.floor(Math.random()*statusChoice.length)];
		client.user.setPresence({
			status: 'online',
			activity:{
				name: displayedStatus
			}
		})
	},20000)
});

client.on('message', async message => 
	
	{if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'ping') {
		message.channel.send('Pong.');
	
	} else if (command === 'server') {
		const serverEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('Server Stats')
			.setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nOwner: ${message.guild.owner}`)
		message.channel.send(serverEmbed)
	

	} else if (command === 'toad') {
		var toadRandom = Math.floor(Math.random() *5);
		console.log(toadRandom);
		if (toadRandom === 0) {
			const toadEmbed1 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['toad/toad1.jpg'])
			    .setImage('attachment://toad1.jpg')
			message.channel.send(toadEmbed1)
		} else if (toadRandom === 1) {
			const toadEmbed2 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['toad/toad2.jpg'])
			    .setImage('attachment://toad2.jpg')
			message.channel.send(toadEmbed2)
		} else if (toadRandom === 2) {
			const toadEmbed3 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['toad/toad3.jpg'])
			    .setImage('attachment://toad3.jpg')
			message.channel.send(toadEmbed2)
		} else if (toadRandom === 3) {
			const toadEmbed4 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['toad/toad4.jpg'])
			    .setImage('attachment://toad4.jpg')
			message.channel.send(toadEmbed4)
		} else if (toadRandom === 4) {
			const toadEmbed5 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['toad/toad5.jpg'])
			    .setImage('attachment://toad5.jpg')
			message.channel.send(toadEmbed5)
		} else if (toadRandom === 5) {
			const toadEmbed6 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['toad/toad6.jpg'])
			    .setImage('attachment://toad6.jpg')
			message.channel.send(toadEmbed6)
		} else if (toadRandom === 6) {
			const toadEmbed7 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['toad/toad7.jpg'])
			    .setImage('attachment://toad7.jpg')
			message.channel.send(toadEmbed7)
		}

	} else if (command === 'bot') {
		const botEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('Bot Status')
			.setDescription('Active and Online')
			.attachFiles(['linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setFooter('i was made by @toad#9999')
		message.channel.send(botEmbed);
    
	} else if (command === 'bobberto') {
		message.channel.send('bobberto? more like lamerto')

	} else if (command === 'help') {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('toadbot Commands')
			.addFields(
				{
					name: "babbabouey:",
					value: "t!bot - bot status \n t!toad - random toad pic (dm me more) \n t!server - server info \n t!bobberto - epik funny \n t!say - bot repeats what you said and deletes your message \n t!help - list of commands \n t!pog - poggers \n t!kick - kicks @ed user \n t!ban - bans @ed user \n t!invite - invite link just for you buddy",
				},
				
				{
					name: "coming soon",
					value: "t!mute - mutes @ed user \n reaction roles (exciting)",
				}
			)
		
			.attachFiles(['linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setFooter('i was made by @toad#9999') 
		message.channel.send(helpEmbed)


	} else if (command === 'cruise') {
		message.channel.send('toadbot is a fan of tom cruise confirmed!!!11!!!!!')
		
		
	} else if (command === 'say') {
		if (!args.length) {
			return message.channel.send(`say something smh ${message.author}!`);
		}
		if (message.content.includes('@everyone')) {
			if (!message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send('invalid perms get rekt')
		}
		else if (message.content.includes('@here')) {
			if (!message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send('invalid perms get rekt')
		}
		else {
			message.channel.send(`${args.join(' ')}`);
			message.delete(args)
		}
		
		
	} else if (command === 'pog') {
		const pogEmbed = new Discord.MessageEmbed()
			.attachFiles(['pog.gif'])
			.setImage('attachment://pog.gif')
			.setColor('#F47FFF')
		message.channel.send(pogEmbed)

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
		
	} else if (command === 'invite') {
		const invEmbed = new Discord.MessageEmbed()
			.attachFiles(['linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setTitle('click to invite trolololol')
			.setURL('http://discord.com/api/oauth2/authorize?client_id=723171863886299156&permissions=2146959095&scope=bot')
			.setDescription(':flushball:')
			.setFooter('i was made by @toad#9999')
		message.channel.send(invEmbed)
	} else if (message.content.includes("test")) {
		console.log('test success')
		message.channel.send('test success')
	}




});

client.login(process.env.BOT_TOKEN);
