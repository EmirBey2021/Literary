const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "<a:redstar:784010814612701184> Litrary Bot | Logo Menüsü <a:redstar:784010814612701184>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `



**»** **.grafiti** : Grafiti logo oluşturur.
**»** **.discord** : Discord logo oluşturur.
**»** **.gold** : Gold logo oluşturur. 
**»** **.comic** : Comic logo oluşturur.
**»** **.bubble2** : Bubble ama renkli logo oluşturur              
**»** **.bubble** : Bubble logo oluşturur       
**»** **.altın** : Altın logo oluşturur
**»** **.banner** : Banner logo oluşturur.
**»** **.elmas** : Elmas logo oluşturur
**»** **.neonmavi** : Neon mavi logo oluşturur. 
**»** **.kalın** : Kalın logo oluşturur.
**»** **.anime** : Anime yazı tipinde logo oluşturur
**»** **.habbo** : Habbo yazı tipinde logo oluşturur.
**»** **.arrow** : Ok işaretli logo oluşturur. 
**»** **.green** : Yeşil logo oluşturur.
**»** **.alev** : Alevli logo oluşturur
**»** **.red** : Kırmızı logo oluşturur.


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
  aliases: ["logo", "logo-y", "Logo"],
  permLevel: 0
};

exports.help = {
  name: "logo yardım",
  description: "logo",
  usage: ""
};
