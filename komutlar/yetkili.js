const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "<a:redstar:784010814612701184> Litrary Bot | Yetkili Menüsü <a:redstar:784010814612701184>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `





**»** **.ban** : İstediğiniz Kulanıcıyı Sunucudan Yasaklar.
**»** **.unban** : Yasaklı Kullanınının Yasağını Kaldırır.
**»** **.kick** : İstediğiniz Kulanıcıyı Sunucudan Atar.
**»** **.sohbet-aç** : Sohbeti Mesajlara Açar.
**»** **.sohbet-kapat** : Sohbeti Mesajlara Kapatır.
**»** **.jail-sistem** : Jail Sistem Menüsünü Açar.


**»** \`\`\.yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**



`
    )
    .addField(
      `»Literary Bot Bağlantıları`,
       `<a:registerbook:784010687608782849>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=781125134290649090&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/D4PcxztXA6) **|** [WebSitesi](https://panel-literary.glitch.me/)  <a:registerbook:784010687608782849>`
    ) //Literary Mod
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  message.channel.send(mhelp).then;
  const sembed = new Discord.MessageEmbed();
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetkili", "Yetkili"],
  permLevel: 0
};
exports.help = {
  name: "yetkili",
  description: "",
  usage: ""
};
