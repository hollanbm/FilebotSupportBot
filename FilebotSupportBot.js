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
		msg.channel.send('How to request help: https://www.filebot.net/forums/viewtopic.php?f=5&t=1868');
	}
	else if(msg.content === prefix + 'noemail')
	{
		msg.channel.send(
			'After purchasing FileBot via Paddle, you will receive 2 emails. \
The first email from help@paddle.com will contain your license as plain text. \
The second email from license@filebot.net will contain your license as file attachment.\
\n\n \
If you did not receive 2 emails, please check your Spam folder. \
\n\n \
If you have received no email at all then you have likely mistyped your email address or your mail server is rejecting emails. \
In this case, please PM @rednoah your name and @gmail.com address, and ideally your order number \
(e.g. P1234567) if possible, so @rednoah can manually resend your license.\
')
	}
	else if(msg.content === prefix + 'refund')
	{
		msg.channel.send('How to request a refund: https://www.filebot.net/forums/viewtopic.php?f=8&t=6118');
	}
	else if(msg.content === prefix + 'plex' || msg.content === prefix + 'kodi')
	{
		msg.channel.send('Plex/Kodi Naming Schemes: https://www.filebot.net/forums/viewtopic.php?f=8&t=6118');
	}
	else if(msg.content === prefix + 'amc')
	{
		msg.channel.send('FileBot Automated Media Center: https://www.filebot.net/amc.html');
	}
	else if(msg.content === prefix + 'tvdb')
	{
		msg.channel.send('TheTVDB v3 (everything is temporarily broken): https://www.filebot.net/forums/viewtopic.php?f=8&t=11254');
	}
	else if(msg.content === prefix + 'faq')
	{
		msg.channel.send('FileBot FAQ: https://www.filebot.net/forums/viewtopic.php?f=3&t=7');
	}
});

client.login(process.env.CLIENT_TOKEN);
