const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    const args = message.content.slice(prefix.lenght).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (message.content === `${prefix}help`) {
        message.channel.send('--Welcome to  FastBuyer--');
        message.channel.send('Commands:');
        message.channel.send('!server -> server specifications');
        message.channel.send('!userinfo -> uesr information');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\n` +
                              `Total Members: ${message.guild.memberCount}\n` +
                              `Created at: ${message.guild.createdAt}\n`+
                              `Based at: ${message.guild.region}`);
    }
    else if (message.content === `${prefix}userinfo`) {
        message.channel.send(`Your username: ${message.author.username}\n` +
            `Your ID: ${message.author.id}`);
    }
    else if (message.content === `${prefix}test`) {
        message.channel.send(`args: ${args}\n` +
            `command: ${command}`);
    }

});

client.login(token);


//console.log(message.content); -> get user input log on cmd