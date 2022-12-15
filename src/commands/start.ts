import { Context } from "telegraf";

export function start (ctx: Context) {
  ctx.reply('Seja bem vindo Mestre ' + ctx.from?.first_name + '!');
}