require('dotenv').config();
require('@babel/register');

const express = require('express');
const config = require('./config/config');
const PORT = process.env.PORT ?? 3000;

// импортировать роутеры

const app = express();

config(app);

// подключить роутеры

app.listen(PORT, () => {
  console.log('Веб-сервер слушает порт', PORT);
});
