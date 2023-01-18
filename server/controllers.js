const db = require('../database/');
const github = require('../helpers/github');
const Promise = require('bluebird');

module.exports = {
  // TODO: figure out a way to store all the results
  // of promises in an array to determine how many
  // repos were added to the db versus how many were
  // attempted to be added
  create: (req, res) => {
    const { query } = req.body;
    // ask github for repos
    github.getReposByUsername(query)
      .then((results) => {
        // tell db to save each repo (results.data)
        results.data.reduce((p, repo) => {
          return p.then(() => db.save(repo));
        }, Promise.resolve());
        return results.data.length;
      })
      // respond with success
      .then((results) => {
        res.status(201).send(`Added repos.`);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  get: (req, res) => {
    const { amount } = req.query;
    db.readAllRepos()
      .then((results) => {
        let repos = [];
        for (let result of results) {
          repos.push({
            id: result._id,
            name: result.name,
            url: result.htmlUrl,
            description: result.description,
            forks: result.forks,
            stargazers: result.stargazers,
            score: result.forks + result.stargazers,
            ownerName: result.owner.name,
            ownerUrl: result.owner.htmlUrl,
            ownerAvatar: result.owner.avatarUrl,
          });
        }
        res.status(200).send(
          repos.sort((repoB, repoA) => {
            if (repoA.score < repoB.score) return -1;
            if (repoA.score > repoB.score) return 1;
            return 0;
          }).slice(0, amount)
        );
      });
  },
}