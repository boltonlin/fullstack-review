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

let save = (repo) => {
  // TODO
  // save repo to repo collection
  // check if owner is in owner collection, add if not
}

module.exports.save = save;