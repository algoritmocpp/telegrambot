import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';
import * as dotenv from 'dotenv';

dotenv.config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.TOKEN as string);

bot.start((ctx) => {
  ctx.reply('Hello ' + ctx.from.first_name + '!');
});
bot.help((ctx) => {
  ctx.reply('Send /start to receive a greeting');
  ctx.reply('Send /keyboard to receive a message with a keyboard');
  ctx.reply('Send /quit to stop the bot');
});
bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id);
// Context shortcut
  ctx.leaveChat();
});

bot.launch();