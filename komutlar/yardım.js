const Discord = require("discord.js");
exports.run = function(client, message) {
  const dark = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor(`${client.user.username} Yardım`, client.user.avatarURL())
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`
    )
    .setTimestamp()
    .addField("Eğlence Yardım İçin ", "<a:xbrave:784010687604981795>`.eğlence`")
    .addField("Kayıt Yardım İçin ", "<a:xbrave:784010687604981795>`.kayıt`")
    .addField(
      "Moderasyon Yardım İçin ",
      "<a:xbrave:784010687604981795>`.moderasyon`"
    )
    .addField("Yetkili Yardım İçin ", "<a:xbrave:784010687604981795>`.yetkili`")
    .addField("Koruma Yardım İçin ", "<a:xbrave:784010687604981795>`.koruma`")
    .addField(
      "Logo Yardım Yardım İçin ",
      "<a:xbrave:784010687604981795>`.logo`"
    )
    .addField(
      "Kullanıcı Yardım İçin ",
      "<a:xbrave:784010687604981795>`.kullanıcı`"
    )
    .setImage(
      `https://cdn.discordapp.com/attachments/780440828581249058/780783143270481940/standard.gif`
    )
    .setFooter(
      `${message.author.username} Tarafından İstendi`,
      message.author.avatarURL()
    )
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(dark);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "yardım", "help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
