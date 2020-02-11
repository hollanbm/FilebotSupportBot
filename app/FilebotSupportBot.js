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
	/**
	 * Allows for a single output, to have multiple commands - useful when multiple keywords are applicable
	 * 
	 * commands is an array of objects, with a cmd string and a matching output response
	 * if that cmd string contains part of the message (minus the prefix)
	 * split the string on the comma to make an item
	 * then check that item for an exact match
	 */
	var item = commands.find(obj => 
		obj.cmd.includes(message.content.replace(prefix,"")) && 
		obj.cmd.split(",").find(item => prefix + item === message.content));

	if(item)
	{
		message.channel.send(item.output);
	}
	else if(message.isMentioned(client.user))
	{
		message.channel.send("List of valid commands:\n" + commands.map(item => "`" + prefix+item.cmd).sort().join("` ") + "`");
	}
});

client.login(process.env.CLIENT_TOKEN);