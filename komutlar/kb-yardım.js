const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "<a:redstar:784010814612701184> Litrary Bot | Kullanıcı Menüsü <a:redstar:784010814612701184>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**»** **.yapımcın** : Botun Yapımcısını Gösterir.
**»** **.say** : Üye Biligilerini Yazar.
**»** **.i** : Botun İstatistiklerini Gösterir.
**»** **.afk** : Bot Sizi Afk Moduna Alır.
**»** **.sil** : Bot Sizin Yerinize Mesajları Siler.
**»** **.şikayet** : Botla İlgili Şikayetlerinizi Yazarsınız.
**»** **.kb** : Kullanıcı Biligilerini Yazar.
**»** **.davet** : Botun Davet Linkini Alırsınız.
**»** **.avatar** : Etiketlediğiniz Kişinin Avatarını Gösterir.
**»** **.emoji-bilgi** : Emoji Bilgi Alırsınız.
**»** **.id** : İstediğiniz Rolun Ya Da Kullanıcının İdsini Alırsınız.
**»** **.kurallar** : Kuralları Otamatik Yazar 
**»** **.oylama <oylamaismi>** : Oylama yapmanızı sağlamaktadır.
**»** **.site** : Site Linkini Atar.

                                                                      
**»** \`\`\.yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**

`
    )
    .addField(
      `»Literary Bot Bağlantıları`,
      `<a:registerbook:784010687608782849>  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=781125134290649090&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/D4PcxztXA6) **|** [WebSitesi](https://panel-literary.glitch.me/)  <a:registerbook:784010687608782849>`
    ) //websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
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
  aliases: ["Kullanıcı", "kullanıcı", "kullanıcı-menüsü"],
  permLevel: 0
};
exports.help = {
  name: "Kullanıcı",
  description: "",
  usage: ""
};
