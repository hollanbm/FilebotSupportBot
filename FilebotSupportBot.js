const Discord = require('discord.js');
const client = new Discord.Client();

prefix = process.env.PREFIX

client.once('ready', () => {
	console.log('Ready!');
	rednoah = `<@${client.guild.members.find(m => m.user.username === 'rednoah').user.id}>`;
	console.log(rednoah);
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
});

client.login(process.env.CLIENT_TOKEN);
