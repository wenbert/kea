const debug = require('debug')('app:mainController');

// TODO This will need to come from MongoDB
const posts = [
  { id: '1', title: 'Hello World!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque ipsum, egestas nec dui sodales, placerat malesuada dui. Mauris sollicitudin porttitor odio et sollicitudin. Donec sed sem molestie, suscipit diam quis, placerat nisl. Donec tincidunt justo augue, ac egestas neque maximus ac' },
  { id: '2', title: 'Foobar', content: 'Aenean malesuada enim at accumsan consequat. Cras at elit at mi sodales pellentesque. Orci varius natoque penatibus et magnis dis parturient montes.' },
  { id: '3', title: 'Hi Node!', content: 'Suspendisse at sollicitudin velit. Donec hendrerit malesuada urna, eget condimentum dui rhoncus at. Maecenas id erat in mauris tincidunt varius sed a massa.' },
];

function blogController(nav) {
  function getPosts(req, res) {
    res.render(
      'blog/index',
      {
        title: 'Blog Posts',
        nav,
        posts,
      },
    );
  }

  function getPost(req, res) {
    const { id } = req.params;
    const post = posts.find(obj => obj.id === id);
    res.render(
      'blog/post',
      {
        title: 'Blog Posts',
        nav,
        post,
      },
    );
  }

  return {
    getPosts,
    getPost,
  };
}

module.exports = blogController;
