const Discord = require('discord.js');
const client = new Discord.Client();
const stringSimilarity = require('string-similarity');

var prefix = process.env.PREFIX
var fuzzyMatchCutoff = process.env.FUZZY_MATCH_CUTOFF


var fs = require('fs');
//this is synchronous, if list gets too large, switch to async
var commands = JSON.parse(fs.readFileSync('app/commands.json', 'utf8'));
var validCommandsText = `List of valid commands:\n${commands.map(item => "`" + prefix+item.cmd).sort().join("` ") + "`"}`


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
		message.channel.send(validCommandsText);
	}
	else if(message.content.charAt(0) === prefix)
	{
		var similarity = stringSimilarity.findBestMatch(message.content.substring(1), commands.map(item => item.cmd));
		if(similarity.bestMatch.rating >= fuzzyMatchCutoff)
		{
			message.channel.send(`ERROR: Command not found.\n\nPossible match: \`${prefix}${similarity.bestMatch.target}\``);
		}
		else
		{
			message.channel.send(`ERROR: Command not found.\n\n${validCommandsText}`);
		}
	}
});

client.login(process.env.CLIENT_TOKEN);
