const db = require('../database/');
const github = require('../helpers/github');
const Promise = require('bluebird');

module.exports = {
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
    db.readAllRepos()
      .then((results) => {
        let repos = [];
        for (let result of results) {
          repos.push({
            repoName: result.name,
            repoUrl: result.htmlUrl,
            score: result.forks + result.stargazers + result.watchers,
            ownerName: result.owner.name,
            ownerUrl: result.owner.htmlUrl,
            ownerAvatar: result.owner.avatarUrl,
          });
        }
        res.status(200).send(repos.sort((repoB, repoA) => {
          if (repoA.score < repoB.score) return -1;
          if (repoA.score > repoB.score) return 1;
          return 0;
        }));
      });
  },
}