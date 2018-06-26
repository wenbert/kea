const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB_HOST + path.sep + process.env.MONGODB_DB);

const { Schema } = mongoose;

module.exports = mongoose.model('Post', new Schema({
  title: { type: String, required: true },
  content: String,
  created_at: Date,
  updated_at: Date,
}));
