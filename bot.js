// const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const { testVar } = require('./commands.js');
// import { testVar } from './commands.js';
const badWords = "test";
// var PORT = process.env.PORT || 5000;
var prefix = ("t!")
let statusChoice = ['t! | please mother', 't! | cock and ball torture', 't! | come to ends i dare you bruv', 't! | sex with nmarkov', 't! | polish toilet spin basshunter dota homosex K19191', 't! | Counter-Strike: Global Cumfensive', 't! | :toad:', 't! | Gato Tom, Estas bn? collaspso. coronavirus.', 't! | (better than hyperbot)', 't! | LET ME BE A GAY FURRY IN PECE!!!!!!!1!!!'];

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
			message.channel.send(toadEmbed3)
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
					value: "t!bot - bot status \nt!toad - random toad pic (dm me more) \nt!server - server info \nt!say - bot repeats what you said and deletes your message \nt!help - list of commands \nt!pog - poggers \nt!kick - kicks @ed user \nt!ban - bans @ed user \nt!invite - invite link just for you buddy \nt!sus - when the pretender is disingenuous \n",
				},
				
				{
					name: "convTypes",
					value: "currencies - rmb, eur, usd, gbp \nmeasurement: coming soon"
				}
			)
		
			.attachFiles(['linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setFooter('i was made by @toad#7051 \nDISCLAIMER: currency conversions are accurate as of 26/01/21 - use casually')
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
			.setDescription('https://cdn.discordapp.com/attachments/793543648284246030/803982195634077746/pog.gif')
			.setColor('#F47FFF')
		message.channel.send(pogEmbed)

	} else if (command === 'kick') {
		if (message.author.id === '583681050136281118') {
			let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
			if (!User) return message.channel.send("Invalid User")
			let kickReason = args.join(" ").slice(22);
			if (!kickReason) {
				Reason = "None"
			}
			User.kick({reason: kickReason})
		}
		
		else {
		if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('error: user does not have kick permissions')
		let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
		if (!User) return message.channel.send("Invalid User")
		if (User.hasPermission("KICK_MEMBERS")) return message.reply("error: subject has kick permissions")
		let kickReason = args.join(" ").slice(22);
		if (!kickReason) {
			Reason = "None"
		}
		User.kick({reason: kickReason})	
		}

	} else if (command === 'ban') {
		if (message.author.id === '583681050136281118') {
			let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // new var "User" (the person being banned or kicked)
			if (!User) return message.channel.send("Invalid User")
			let banReason = args.join(" ").slice(22);
			if (!banReason) {
			Reason = "None"
			}
			User.ban({reason: banReason})
		}
		
		else {
		if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('error: user does not have ban permissions')
		let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // new var "User" (the person being banned or kicked)
		if (!User) return message.channel.send("Invalid User")
		if (User.hasPermission("BAN_MEMBERS")) return message.reply("error: subject has ban permissions")
		let banReason = args.join(" ").slice(22);
		if (!banReason) {
			Reason = "None"
		}
		User.ban({reason: banReason})
		}
		
	} else if (command === 'invite') {
		const invEmbed = new Discord.MessageEmbed()
			.attachFiles(['linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setTitle('click to invite trolololol')
			.setURL('http://discord.com/api/oauth2/authorize?client_id=723171863886299156&permissions=2146959095&scope=bot')
			.setDescription(':flushball:')
			.setFooter('i was made by @toad#7051')
			.setColor('#F47FFF')
        message.channel.send(invEmbed)
        
	/* } else if (command === 'ginge') {
		var i = 0
		for (; i < 51; i++) {
			message.channel.send('<@671021121847558145>')
        }
        */
	} else if (command === 'sus') {
        message.channel.send(':bangbang:HOLY FUCKING SHIT:bangbang::bangbang::bangbang::bangbang: IS THAT A MOTHERFUCKING AMONG US REFERENCE??????!!!!!!!!! :scream::scream: AMONG US IS THE BEST FUCKING GAME :fire::fire::fire::fire::100::100::100::100: RED IS SO SUSSSSS :detective::detective::detective::detective::detective::detective::detective::red_square::red_square::red_square::red_square::red_square: COME TO MEDBAY AND WATCH ME SCAN :hospital::hospital::hospital::hospital::hospital::hospital::hospital::hospital: :hospital::hospital::hospital::hospital: WHY IS NO ONE FIXING O2 :face_with_symbols_over_mouth::rage::face_with_symbols_over_mouth::rage::face_with_symbols_over_mouth::rage::face_with_symbols_over_mouth::face_with_symbols_over_mouth::rage::face_with_symbols_over_mouth::face_with_symbols_over_mouth::rage: OH YOUR CREWMATE? NAME EVERY TASK :gun::angry::gun::angry::gun::angry::gun::angry::gun::angry: Where Any sus!:question: :question: Where!:question: :question: Where! Any sus!:question: Where! :question: Any sus!:question: :question: Any sus! :question: :question: :question: :question: Where!Where!Where! Any sus!Where!Any sus Where!:question: Where! :question: Where!Any sus:question: :question: Any sus!  Where! :question: Where! :question: Any sus!:question: :question: :question: :question: Any sus! :question: :question: Where!:question: Any sus! :question: :question: Where!:question: :question: Where! :question: Where!Where! :question: :question: :question: :question: :question: :question: :question: Any sus!:question: :question: :question: Any sus!:question: :question: :question: :question: Where! :question: Where! Where!Any sus!Where! Where! :question: :question: :question: :question: :question: :question: I think it was purple!:eyes::eyes::eyes::eyes::eyes::eyes::eyes::eyes::eyes::eyes:It wasnt me I was in vents!!!!!!!!!!!!!!:joy::rofl::joy::rofl::joy::rofl::joy::joy::joy::rofl::rofl::rofl::joy::joy::joy:')
        
	} else if (command === 'permcheck') {
		if (message.guild.me.hasPermission("KICK_MEMBERS")) {
			message.channel.send('i have kick permissions')
		}
		else {
			message.channel.send('i do not have kick permissions')
		}
		
		if (message.guild.me.hasPermission("BAN_MEMBERS")) {
			message.channel.send('i have ban permissions')
		}
		else {
			message.channel.send('i do not have ban permissions')
        }
        
	} else if (command === 'convert' || command === 'conv') {
		const convType = (args[0]);
			switch(convType) {
				case "rmb-usd":
				    var answer = (args[1] * 0.154676)
				    break;
				case "rmb-eur":
				    var answer = (args[1] * 0.127156)
				    break;
				case "rmb-gbp":
				    var answer = (args[1] * 0.112608)
				    break;
				case "eur-rmb":
				    var answer = (args[1] * 7.86487)
				    break;
				case "eur-usd":
				    var answer = (args[1] * 1.21646)
				    break;
				case "eur-gbp":
				    var answer = (args[1] * 0.885537)
				    break;
				case "usd-rmb":
				    var answer = (args[1] *  6.46561)
				    break;
				case "usd-eur":
				    var answer = (args[1] *  0.822105)
				    break;
				case "usd-gbp":
				    var answer = (args[1] *  0.727969)
				    break;
				case "gbp-rmb":
				    var answer = (args[1] *  8.88066)
				    break;
				case "gbp-eur":
				    var answer = (args[1] *  1.12929)
				    break;
				case "gbp-usd":
				    var answer = (args[1] *  1.37359)
				    break;
				default:
				    message.channel.send('that is not a supported conversion, or you cant spell');
				    break;

		}
		const convEmbed = new Discord.MessageEmbed()
		    .setTitle('Converter')
		    .setDescription(('You are converting: ', convType, '\n', (args[0].slice(0, 3)), 'into ', (args[0].slice(4, 8)), '\nAnswer: ', answer))
            	    .setColor('#F47FFF')
		message.channel.send(convEmbed)

    } else if (command === 'allah') {
    	message.channel.send('https://media.discordapp.net/attachments/296056831514509312/739892457239740526/20200803_120740.gif')
    } else if (command === 'bals') {
    	message.channel.send('real life catboy toadbot')
    } else if (client.author.id === '575051919395913728') {
        message.channel.send('https://tenor.com/view/ok-weeb-weeb-anime-hentai-republican-gif-19404829')
    }

	 
});


client.login(process.env.BOT_TOKEN);
