require("dotenv").config();
const { globSync } = require('glob');
const path = require('path');

module.exports = (client) => {
    const jsfiles = globSync("events/**/*.js", { absolute: true });
    for (const fileName of jsfiles) {
        if (!fileName.endsWith(".js")) continue;
        const event = require(fileName);
        const eventName = path.basename(fileName, '.js');
        console.log(`[EVT] Loaded event: ${eventName}`);

        if (event.once) {
            client.once(eventName, (...args) => event.execute(...args, client));
        } else {
            client.on(eventName, (...args) => event.execute(...args, client));
        }
    }
};