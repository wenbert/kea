/**
 * This file contains some old code connecting and querying MongoDB
 * without using models from Mongoose
 */

const debug = require('debug')('app:mainController');
const { MongoClient, ObjectID } = require('mongodb');

function blogController(nav) {
  function getPosts(req, res) {
    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(process.env.MONGODB_HOST);
        const db = client.db(process.env.MONGODB_DB);
        const collection = await db.collection('posts');
        const posts = await collection.find().toArray();

        res.render(
          'blog/index',
          {
            title: 'Blog Posts',
            nav,
            posts,
          },
        );
      } catch (err) {
        debug(err.stack);
      }

      client.close();
    }());
  }

  function getPost(req, res) {
    const { id } = req.params;
    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(process.env.MONGODB_HOST);
        const db = client.db(process.env.MONGODB_DB);
        const collection = await db.collection('posts');
        const post = await collection.findOne({ _id: new ObjectID(id) });

        res.render(
          'blog/post',
          {
            title: 'Blog Posts',
            nav,
            post,
          },
        );
      } catch (err) {
        debug(err.stack);
      }
      client.close();
    }());
  }

  return {
    getPosts,
    getPost,
  };
}

module.exports = blogController;
