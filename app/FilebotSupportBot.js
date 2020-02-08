const Discord = require('discord.js');
const client = new Discord.Client();

prefix = process.env.PREFIX

var fs = require('fs');
var commands = JSON.parse(fs.readFileSync('commands.json', 'utf8'));

client.once('ready', () => 
{
	console.log('Ready!');
});

client.on('message', msg => 
{
	var item = commands.find(item => prefix + item.cmd === msg.content);
	if(item)
	{
		msg.channel.send(item.output);
	}
});

client.login(process.env.CLIENT_TOKEN);
