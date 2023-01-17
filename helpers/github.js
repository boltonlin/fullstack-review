const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': `application/vnd.github+json`,
    },
    params: {
      type: 'all',
      sort: 'updated',
      per_page: 100
    }
  };
  return axios(options);
}

module.exports.getReposByUsername = getReposByUsername;