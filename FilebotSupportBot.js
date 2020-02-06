const Discord = require('discord.js');
const client = new Discord.Client();

prefix = process.env.PREFIX

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', msg => 
{
	if (msg.content === prefix + 'license') {
		msg.channel.send('For help activating, recovering, or installing your license: https://www.filebot.net/forums/viewtopic.php?f=8&t=6121');
	}
	else if(msg.content === prefix + 'help')
	{
		msg.channel.send('How to request help: https://www.filebot.net/forums/viewtopic.php?f=5&t=1868')
	}
});

client.login(process.env.CLIENT_TOKEN);
