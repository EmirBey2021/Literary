const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  if (!args[0])
    return message.channel.send(
      " **<a:dkt:784864659458228225>  Lütfen Silinicek Mesaj Miktarını Yazın.!** "
    );
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`<a:mavimsitik:784010792084701224> **${args[0]} Adet Mesajı Sildim.** `)
      .then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["temizle", "sil", "süpür", "delete"],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "Mesajları Siler",
  usage: "sil"
};
