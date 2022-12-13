const { BotTemplate } = require('./src/bot');
require('dotenv').config();

const app = new BotTemplate(process.env.TOKEN);

app.init();
