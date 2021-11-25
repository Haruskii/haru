const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "Quirk",
  aliases: ["power", "quirk", "super"],
  category: "fun",
  description: "Give Random Quirk!",
  usage: "Quirk <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let quirks = [
      "Dupli-Arms",
      "Clones",
      "Brainwashing",
      "Cremation",
      "Bloodcurdle",
      "Black Hole",
      "Acid",
      "Electrification",
      "Dark Shadow",
      "Black Whip",
      "Hell Flame",
      "Zero Gravity",
      "Creation",
      "Engine",
      "Half-Cold Half-Hot",
      "Explosion",
      "All For One",
      "One For All"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = quirks[Math.floor(Math.random() * quirks.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Quirk Machine`)
      .setDescription(`${Member.user.username} Quirk is\n${Result}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
