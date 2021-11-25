const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "Nen",
  aliases: ["nen"],
  description: "Show Member Nen Type!",
  usage: "NenType <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let sizes = [
      "Enhancement",
      "Transmutation",
      "Emission",
      "Manipulation",
      "Conjuration",
      "Specialization"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Nen Machine`)
      .setDescription(`${Member.user.username}'S Nen Type Is \n${Result}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
