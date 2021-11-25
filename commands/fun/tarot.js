const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "tarot",
  aliases: ["cards"],
  category: "fun",
  description: "Get Random Card!",
  usage: "Tarot",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let result = Math.floor(Math.random() * 21);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Random Sauce Is`)
      .setDescription([result])
      .setFooter(`1 - 21`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
