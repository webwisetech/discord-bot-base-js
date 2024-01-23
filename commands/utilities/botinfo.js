const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Shows the bot info'),

  async execute(interaction) {
    try {
      await interaction.reply('This bot is made in Node.js! Its source code can be found at [https://github.com/CodeSpiral/discord-bot-base-js](https://github.com/CodeSpiral/discord-bot-base-js). It was made by [CodeSpiral](https://github.com/CodeSpiral).');
    } catch (error) {
      console.error(error);
    }
  },
};
