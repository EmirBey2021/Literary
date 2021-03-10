const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setAuthor(`Literary Bot`, client.user.avatarURL)
    .addField(
      `> Neden Biz ?`,
      `**Çünkü işimizi en iyi şekilde yaptığımızı düşünüyoruz.**`
    )
    .addField(
      `> Botumuzu Davet Etmek isterseniz`,
      `[Botu Davet Et!](https://discord.com/oauth2/authorize?client_id=781125134290649090&scope=bot&permissions=805314622)`
    )
    .addField(
      `> Destek Sunucusuna Katılmak İsterseniz`,
      `[Destek Sunusu](https://discord.gg/fR6gpwfXV5)`
    )

    .setThumbnail(
      "https://cdn.discordapp.com/emojis/670167074584395816.gif?v=1"
    );
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};
