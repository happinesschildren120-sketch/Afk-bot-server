const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('AFK Bot is Running!'));
app.listen(3000, () => console.log('Web Server Ready'));

function createBot() {
    const bot = mineflayer.createBot({
        host: 'DragonCraftSMP1.aternos.me', // Ekhane Aternos IP dao
        port: 59696,             // Bedrock-er default port eita thake
        username: 'AFK_Bot',
        version: false,          // Auto detect
        auth: 'offline'          // Aternos-er cracked server-er jonno
    });

    bot.on('spawn', () => {
        console.log('Bot joined the Bedrock server!');
        setInterval(() => {
            bot.look(bot.entity.yaw + 0.1, 0);
        }, 5000);
    });

    bot.on('end', () => {
        console.log('Disconnected. Reconnecting...');
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();
