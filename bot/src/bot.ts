const { Telegraf } = require('telegraf');

export class BotTemplate extends Telegraf {
  constructor (botToken) {
    super(botToken);
  }
}