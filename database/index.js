const mongoose = require('mongoose');
const repo = require('./repos');
const owner = require('./owners');

mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'Connection error'));
db.once('connected', () => {
  console.log(`Connected to mongodb ${db.name}@${db.host}:${db.port}`);
});

let Repo = mongoose.model('Repo', repo.schema);
let Owner = mongoose.model('Owner', owner.schema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;