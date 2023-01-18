const mongoose = require('mongoose');
const repos = require('./repos');

module.exports.schema = mongoose.Schema({
  _id: Number,
  name: String,
  htmlUrl: String,
  avatarUrl: String,
  repos: [{type: Number, ref: 'Repo'}]
});