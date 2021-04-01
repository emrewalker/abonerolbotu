const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`);
    } catch (e) {
        throw e;
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  perm: 0
};

exports.help = {
  name: 'komutlar'
};
exports.play = {
  kullanım: '!komutlar',
  açıklama: 'Botun Komutlarını Görüntüleyebilirsiniz.',
  kategori: 'Genel'
}
