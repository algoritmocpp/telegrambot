import * as dotenv from 'dotenv';

import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';

import { start } from './commands';
import { hello } from './commands';

dotenv.config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.TOKEN as string)
  .start(start)
  .command('hello', hello);

bot.launch();