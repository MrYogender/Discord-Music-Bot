const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: 'get my invite link',
    useage: 'invite',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        let invite = new MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle(client.user.username)
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(message.author.username)
            .setDescription(`\`Click Below On Invite Link\``)
            .addField("**__BOT BY:__**", `
 539499759745105921 <@708176028442296420> \`YOGENDERhttps://discord.com/api/oauth2/authorize?client_id=880826631185387531&permissions=8&scope=bot%20applications.commandsns=37219648&scope=bot)
                `)
            .setFooter("Made By Yogenderツ#9138")

        message.channel.send(invite)
    }
}