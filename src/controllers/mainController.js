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
  return {
    getIndex,
  };
}

module.exports = mainController;
