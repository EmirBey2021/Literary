const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "<a:redstar:784010814612701184> Litrary Bot | Koruma Menüsü <a:redstar:784010814612701184>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**»** **.ban-koruma #kanal** :Sunucudan Birini Banlayan Kişiyi Sunucudan Atar Ve Banlananın Banını Açar
**»** **.ban-koruma-sıfırla** :Ayarlanan Ban Koruma Sistemini Sıfırlar.
**»** **.kanal-koruma #kanal** :Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.
**»** **.kanal-koruma-sıfırla** :Ayarlanan Kanal Koruma Sistemini Sıfırlar.
**»** **.rol-koruma #kanal** :Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.
**»** **.rol-koruma-sıfırla** :Ayarlanan Rol Koruma Sistemini Sıfırlar.
**»** **.emoji-koruma #kanal** :Emoji Koruma Sistemini Açar. Not:Yönetici Yetkisi Olmayan Kişilerde Çalışmaktadır
**»** **.emoji-koruma kapat** :Emoji Koruma Sistemini Kapatır.
          
                  
                                                                                                 
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
  aliases: ["koruma", "koruma-yardım", "Koruma"],
  permLevel: 0
};
exports.help = {
  name: "Koruma",
  description: "",
  usage: ""
};
