// const { prefix, token } = require('./config.json');
// const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
// var PORT = process.env.PORT || 5000;
var prefix = "t!";


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => 
	
	{if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	var prefix = "t!";
	if (message.content.startsWith(`${prefix}test`)) {
		message.channel.send('it finally works thank god');
	
	} else if (message.content === 'ping') {
		message.reply('pong');

       }
});

client.login(process.env.BOT_TOKEN);
