const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    //console.log(message.content); -> get user input log on cmd
    //if (!message.author.bot || message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}help`) {
        message.channel.send('--Welcome to  FastBuyer--');
        message.channel.send('Commands:');
        message.channel.send('!server -> server specifications');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\n` +
                              `Total Members: ${message.guild.memberCount}\n` +
                              `Created at: ${message.guild.createdAt}\n`+
                              `Based at: ${message.guild.region}`);
    }
    else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\n` +
            `Your ID: ${message.author.id}`);
    }
    else if (message.content === `${prefix}nike`) {
        message.channel.send(`Your username: ${message.author.username}\n` +
                `Your ID: ${message.author.id}`);
    }

});

client.login(token);