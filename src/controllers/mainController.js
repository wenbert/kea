const debug = require('debug')('app:mainController');

function mainController(nav) {
  function getIndex(req, res) {
    res.render(
      'index',
      {
        title: 'Kea',
        nav,
      },
    );
  }

  function getAbout(req, res) {
    res.render(
      'pages/about',
      {
        title: 'About',
        nav,
      },
    );
  }

  function getLogin(req, res) {
    res.render(
      'pages/login',
      {
        title: 'Login',
        nav,
      },
    );
  }

  return {
    getIndex,
    getAbout,
    getLogin,
  };
}

module.exports = mainController;
