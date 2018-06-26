require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

const User = require('./src/models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(session({ secret: process.env.SECRET }));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/materialize-css/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules//materialize-css/dist/js')));

app.set('views', './src/views');
app.set('view engine', 'ejs');


const nav = [
  { link: '/', title: 'Home' },
  { link: '/pages/about', title: 'About' },
  { link: '/blog', title: 'Blog' },
  { link: '/pages/login', title: 'Login' },
];
const mainRouter = require('./src/routes/mainRoutes.js')(nav);
const blogRouter = require('./src/routes/blogRoutes.js')(nav);
// const loginRouter = require('./src/routes/loginRoutes.js')();

app.use('/', mainRouter);
app.use('/blog', blogRouter);

/**
 * Create a sample user
 * Later we will query this to create JWT, etc.
 */
// app.get('/setup', (req, res) => {
//   const user = new User({
//     username: 'wenbert',
//     password: 'password to hash',
//     admin: true,
//   });
//   user.save((err) => {
//     if (err) throw err;
//
//     console.log('User saved successfully');
//     res.json({ success: true });
//   });
// });

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
