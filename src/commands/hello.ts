import { Context } from "telegraf";

export function hello (ctx: Context) {
  ctx.reply('Eai, tudo bem ' + ctx.from?.first_name + '? Agora posso ser atualizado via script!');
}
