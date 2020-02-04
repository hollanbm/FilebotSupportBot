const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong2!');
  }
});

client.login(process.env.CLIENT_TOKEN);
