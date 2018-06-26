const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB_HOST + path.sep + process.env.MONGODB_DB);

const { Schema } = mongoose;

module.exports = mongoose.model('User', new Schema({
  username: {
    type: String,
    unique: true,
    index: true,
  },
  password: String,
  admin: Boolean,
}));
