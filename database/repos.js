const mongoose = require('mongoose');

module.exports.schema = mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
  htmlUrl: String
});