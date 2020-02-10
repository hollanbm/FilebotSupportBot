const Discord = require('discord.js');
const client = new Discord.Client();

prefix = process.env.PREFIX

var fs = require('fs');
//this is synchronous, if list gets too large, switch to async
var commands = JSON.parse(fs.readFileSync('commands.json', 'utf8'));

client.once('ready', () => 
{
	console.log('Ready!');
});

client.on('message', message => 
{
	var item = commands.find(item => prefix + item.cmd === message.content);
	if(item)
	{
		message.channel.send(item.output);
	}
	else if(message.isMentioned(client.user))
	{
		message.channel.send("List of valid commands:\n" + commands.map(item => "`" + prefix+item.cmd).sort().join("`, ") + "`");
	}
});

client.login(process.env.CLIENT_TOKEN);