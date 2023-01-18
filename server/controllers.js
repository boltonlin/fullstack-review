const db = require('../database/');
const _ = require('lodash');
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
        res.status(201).send(`Added ${results} repos.`);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  get: (req, res) => {

  },
}