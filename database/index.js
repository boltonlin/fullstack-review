const mongoose = require('mongoose');
const repo = require('./repos');
const owner = require('./owners');

mongoose.connect(process.env.DATABASE_LOC, {
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
  let newRepo = new Repo({
    _id: repo.id,
    name: repo.name,
    owner: repo.owner.id,
    description: repo.description,
    htmlUrl: repo.html_url,
    forks: repo.forks,
    stargazers: repo.stargazers_count,
    watchers: repo.watchers_count,
  });
  return Repo.findOne({_id: repo.id})
    .then((found) => {
      if (!found) {
        return newRepo.save()
          .then(() => {
            return Owner.findOne({_id: repo.owner.id});
          })
          .then((found) => {
            if (!found) {
              let newOwner = new Owner({
                _id: repo.owner.id,
                name: repo.owner.login,
                htmlUrl: repo.owner.html_url,
                avatarUrl: repo.owner.avatar_url
              });
              newOwner.repos.push(newRepo);
              return newOwner.save();
            } else {
              found.repos.push(newRepo);
              return found.save();
            }
          })
          .then(() => {
            return true;
          })
          .catch((err) => {
            throw new Error(err);
          });
      } else {
        return false;
      }
    })
}

let readAllRepos = () => {
  return Repo.find()
    .populate('owner');
}

module.exports.save = save;
module.exports.readAllRepos = readAllRepos;
