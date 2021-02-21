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
    const commandWithPrefix = args.shift().toLowerCase();
    command = commandWithPrefix.substring(1);


    if (command === 'help') {
        message.channel.send('--Welcome to  FastBuyer--');
        message.channel.send('Commands:');
        message.channel.send('!server -> server specifications');
        message.channel.send('!userinfo -> uesr information');
    }
    else if (command === 'server') {
        message.channel.send(`This server's name is: ${message.guild.name}\n` +
                              `Total Members: ${message.guild.memberCount}\n` +
                              `Created at: ${message.guild.createdAt}\n`+
                              `Based at: ${message.guild.region}`);
    }
    else if (command === 'userinfo') {
        message.channel.send(`Your username: ${message.author.username}\n` +
            `Your ID: ${message.author.id}`);
    }
    else if (command === 'test') {
        message.channel.send(`args: ${args}\n` +
            `command: ${command}`);
    }

});

client.login(token);


//console.log(message.content); -> get user input log on cmd