const mongoose = require('mongoose');

module.exports.schema = mongoose.Schema({
  _id: Number,
  name: String,
  owner: {type: Number, ref: 'Owner'},
  description: String,
  htmlUrl: String,
  forks: Number,
  stargazers: Number,
  watchers: Number,
});