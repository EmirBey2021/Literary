const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "<a:redstar:784010814612701184> Litrary Bot | Kayıt Menüsü <a:redstar:784010814612701184>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**» .alınacak-rol**: Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
**» .alınacak-rol sıfırla **: Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
**» .kayıt-kanal**: Kayıtın Yapılacağı Kanalı Belirlersiniz.
**» .kayıt-kanal sıfırla**: Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
**» .kayıt-hg **: Gelen Kullanıcılara Kayıt Bilgisi Verir.
**» .kayıt-hg sıfırla **: Kayıt Hg sistemini sıfırlar.
**» .kayıt-yetkili**: Kayıt Edebilecek Yetkiyi Ayarlar.
**» .kayıt-yetkili sıfırla**: Kayıt Edebilecek Yetkiyi Sıfırlar.
**» .erkek-rol **: Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
**» .erkek-rol sıfırla **: Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
**» .kız-rol**: Kayıt Edilince Verilecek Kız Rolü Ayarlar.
**» .kız-rol sıfırla**: Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
**» .erkek **: Erkekleri Kayıt Etmeye Yarar.
**» .kız **: Kızları Kayıt Etmeye Yarar.
 **».otorol**: Oto Rol Verir

 
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
  aliases: ["kayıt", "kayıt-sistem"],
  permLevel: 0
};
exports.help = {
  name: "kayıt",
  description: "",
  usage: ""
};
