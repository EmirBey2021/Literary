const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "<a:redstar:784010814612701184> Litrary Bot | Moderasyon Menüsü <a:redstar:784010814612701184>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**»** **.isim** : İstediğiniz Kulanıcının İsmini Değiştirir
**»** **.çek** : İstediğiniz Kulanıcıyı Sese Çeker
**»** **.git** : İstediğiniz Kullanıcınız Yanına Gidersiniz
**»** **sa-as** : Birisi Sa Dediğinde Bot As Der.
**»** **.sa-as kapat** : Birisi Sa Dediğinde Bot As Demez.
**»** **.ever-here-engel aç** : Ever Here Engel Sistemini Açar.
**»** **.ever-here-engel kapat** : Ever Here Engel Sistemini Devre Dışı Bırakır.
**»** **.küfür-engel aç** : Küfür Engel Sistemini Açar.
**»** **.küfür-engel kapat** : Küfür Engel Sistemini Devre Dışı Bırakır.
**»** **.reklam-engel aç** : Reklam Engel Sistemini Açar.
**»** **.reklam-engel kapat** : Reklam Engel Sistemini Devre Dışı Bırakır.
**»** **.modlog** : ModLog Sistemini Açar.
**»** **.modlog kapat** : ModLog Sistemini Devre Dışı Bırakır.


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
  aliases: ["mod", "Moderasyon", "moderasyon"],
  permLevel: 0
};
exports.help = {
  name: "moderasyon",
  description: "",
  usage: ""
};
