const mineflayer = require('mineflayer');
const config = {
  host: 'DragonCraftSMP1.aternos.me',
  port: 59696,
  username: 'AFK_Bot',
  auth: 'offline'
};
let bot;
function createBot() {
  bot = mineflayer.createBot(config);
  bot.on('spawn', () => { console.log('Bot connected!'); afk(); });
  bot.on('kicked', (r) => { console.log('Kicked:' + r); setTimeout(createBot, 10000); });
  bot.on('error', (e) => { console.log('Error:' + e.message); setTimeout(createBot, 10000); });
  bot.on('end', () => { setTimeout(createBot, 10000); });
}
function afk() {
  setInterval(() => {
    if (!bot || !bot.entity) return;
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000);
}
createBot();
