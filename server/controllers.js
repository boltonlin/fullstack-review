const db = require('../database/');
const _ = require('lodash');
const github = require('../helpers/github');

module.exports = {
  create: (req, res) => {
    const { query } = req.body;
    // ask github for repos
    github.getReposByUsername(query)
    .then((results) => {
        // tell db to save each repo (results.data)
        // respond with success
        res.send(results.data.map((result) => `${result.name}, ${result.owner.login}`));
      });
  },

  get: (req, res) => {

  },
}