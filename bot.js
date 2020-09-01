const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 't!';

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    {if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

            if (message.content === 'ping') {

            message.reply('pong');

            } else if (message.content === 'test') {
                message.reply('test success')
            } else if (command === 'test2') {
                message.reply('test2 success')
            }

        
    }      

});

 


client.login(process.env.BOT_TOKEN);
