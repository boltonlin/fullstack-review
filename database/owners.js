const mongoose = require('mongoose');
const repos = require('./repos');

module.exports.schema = mongoose.Schema({
  _id: mongoose.ObjectId,
  name: String,
  avatarUrl: String,
  repos: [mongoose.ObjectId]
});