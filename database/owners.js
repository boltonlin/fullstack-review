const mongoose = require('mongoose');
const repos = require('./repos');

module.exports.schema = mongoose.Schema({
  id: Number,
  name: String,
  repos: [repos.schema]
});