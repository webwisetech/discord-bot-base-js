const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),

  async execute(interaction, client) {
    try {
      await interaction.reply(`:ping_pong: Pong! \`${client.ws.ping}ms\``);
    } catch (error) {
      console.error(error);
    }
  },
};
