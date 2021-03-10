const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("**Sitemiz** https://panel-literary.glitch.me/")
    .setFooter("Literary ");
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["site"],
  permLevel: 0
};

exports.help = {
  name: "site",
  description: "",
  usage: ""
};
