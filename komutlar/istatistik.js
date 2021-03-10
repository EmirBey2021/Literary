const Discord = require("discord.js");

exports.run = (client, message) => {
  let motion = new Discord.MessageEmbed()

    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Veriler <a:xbrave:784010687604981795> ",
      `> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam kullanıcı: **${client.guilds.cache.reduce(
        (a, b) => a + b.memberCount,
        0
      )}**`
    )
    .addField(
      "Bot Geliştiricisi <a:developer:786823412983136256> ",
      `> Bot geliştiricisi <a:hpt2:784010687588335646> <@740881356413861898> | **Oğuzhan**`
    )
    .addField(
      "Sürümler <a:dcworker:784010673625235507>",
      `> Discord.js sürümü: **v${Discord.version}** \n> Node.js sürümü: **${process.version}**`
    )
    .addField(
      "Gecikmeler <a:loading:784869551288090645>",
      `> Bot pingi: **${
        client.ws.ping
      }** \n> Mesaj gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`
    )

    .setTimestamp()
    .setColor("#4cb8e0");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};
