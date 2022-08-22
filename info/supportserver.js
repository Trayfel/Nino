const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Nino\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setDescription('Click [here](https://discord.gg/uKYmSDG9yS) to join the Nino Support Server!')
      .addField('Other Links', 
        '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=1009002446913286266&permissions=8&scope=bot)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
