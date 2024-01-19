const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),

  async execute(interaction) {
    console.log(interaction)
    try {
      await interaction.reply('Pong!');
    } catch (error) {
      console.error(error);
    }
  },
};