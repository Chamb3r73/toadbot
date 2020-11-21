const Discord = require('discord.js');
const testVar = "hi tober";
module.exports = { testVar };

module.exports = {

    name: 'testoFUNC',
    description: 'crikey!',
    execute(message, args) {
        message.channel.send('crikey! thats a nice external command you got there toad!');
    },
    
};
