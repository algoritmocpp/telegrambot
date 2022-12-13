import { Context } from "telegraf";

export function start (ctx: Context) {
  ctx.reply('Opa ' + ctx.from?.first_name + '!');
}