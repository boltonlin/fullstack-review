const mongoose = require('mongoose');

module.exports.schema = mongoose.Schema({
  _id: mongoose.ObjectId,
  name: String,
  owner: mongoose.ObjectId,
  htmlUrl: String,
  forks: Number,
  stargazers: Number,
  watchers: Number,
});