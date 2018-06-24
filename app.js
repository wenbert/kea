const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/materialize-css/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules//materialize-css/dist/js')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
  { link: '/', title: 'Home' },
  { link: '/pages/about', title: 'About' },
  { link: '/blog', title: 'Blog' },
];
const mainRouter = require('./src/routes/mainRoutes.js')(nav);

app.use('/', mainRouter);

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
