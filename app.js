'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAKWl78suR0BAFKoMZBt96INYReW5rSoFoZAVdvUJ3tkaG3ds2OXLWeC9ChQsCM00IWXXWyeku2Xqpsh9gEuxRcKArd6ZBxzZCBNsBtSqKcUpy3wRpEFqX5alu7ZAnV99shelXcN8tzY4a4OJJvYl3mD99pMXzBQ5xLx6ZCvl4XYbANLRtZCix4pGQXvt7g2cdHW8ab7P3DswZDZD',
  verifyToken: 'drugstorebot13012001',
  appSecret: '679fa922ac1876b8c15f56d5425fb8fe'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start();