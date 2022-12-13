import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';
import * as dotenv from 'dotenv';

dotenv.config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.TOKEN as string);

bot.start((ctx) => {
  ctx.reply('Opa ' + ctx.from.first_name + '!');
});

bot.launch();