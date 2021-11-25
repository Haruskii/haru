const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "devilfruit",
  aliases: ["fruit"],
  description: "Show Member Devil Fruit!",
  usage: "Devilfruit <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let fruits = [
      "Soru Soru No Mi",
      "Gum gum No Mi",
      "Ope Ope No Mi",
      "Yami Yami No Mi",
      "Yomi Yomi No Mi",
      "Tori Tori No Mi",
      "Ito Ito No Mi",
      "Hie Hie No Mi",
      "Mera Mera No Mi",
      "Bari Bari No Mi",
      "Mochi Mochi No Mi",
      "Bomu Bomu No Mi",
      "Suna Suna No Mi",
      "Pika Pika No Mi",
      "Gura Gura No Mi",
      "Suke Suke No Mi",
      "Uo Uo No Mi",
      "Moku Moku No Mi"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = fruits[Math.floor(Math.random() * fruits.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Fruit v2 Machine`)
      .setDescription(`${Member.user.username} Devil Fruit Is\n${Result}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
