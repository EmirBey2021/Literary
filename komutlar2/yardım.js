const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle(
      "<a:redstar:784010814612701184> Litrary Bot | Eğlence Menüsü <a:redstar:784010814612701184>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1"
    )
    .setDescription(
      `




 **»** **.aduketçek** Etiketlediğiniz kişiye aduket çekersiniz.
 **»** **.balık-tut** Denizde balık tutarsınız.
 **»** **.beşlik** Etiketlediğiniz kişiyle beşlik çakarsınız.
 **»** **.ara155** Polisi aramanıza yarar.
 **»** **.efkarım** Şu anda olan efkarınızı ölçersiniz.
 **»** **.espri** Bot sizin için espri yapar.
 **»** **.hesapla** Belirttiğiniz matematik işlemini bot yapar.
 **»** **.kartopu** Etiketlediğiniz kişiye kartopu atarsınız.
 **»** **.kaç-cm** Bot malafat uzunluğunuzu söyler.
 **»** **.kralol** Kral olmanıza yarar.
 **»** **.tokat** Etiketlediğiniz kişiyi tokatlarsınız.
 **»** **.yazıtura** Bot ile yazı-tura oyununu oynarsınız.
 **»** **.yılbaşı** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
 **»** **.öp** Etiketlediğiniz kişiyi öpmenize yarar.

                  
                                                                                                 
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
  aliases: ["eğlence", "Eğlence"],
  permLevel: 0
};
exports.help = {
  name: "eğlence",
  description: "",
  usage: ""
};
