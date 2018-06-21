const express = require('express');

const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
  { link: '/', title: 'Home' },
];
const mainRouter = require('./src/routes/mainRoutes.js')(nav);

app.use('/', mainRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Kea',
    },
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
