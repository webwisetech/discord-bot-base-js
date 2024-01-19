require("dotenv").config();
const { globSync } = require("glob");
const { REST } = require("discord.js");
const { Routes } = require("discord-api-types/v10");

module.exports = async (client, discord) => {
    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
    const jsfiles = globSync('commands/**/*.js', { absolute: true })

    for (const fileName of jsfiles) {
        if (!fileName.endsWith(".js")) return;
        const command = require(fileName);
        console.log(`[CMD] Loaded command: ${command.data.name}`);
        await client.commands.set(command.data.name, command);
    }

    console.log('[BOT] Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
        body: client.commands.map((command) => {
            return command.data.toJSON();
        }),
    });
    console.log('[BOT] Successfully refreshed application (/) commands.');
};