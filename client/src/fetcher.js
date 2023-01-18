const $ = require('jquery');

const EXAMPLE_USERNAME = 'lichess-org';

module.exports = {

  addReposByUser: (username, successCB, errorCB) => {
    $.ajax({
      method: "POST",
      url: "http://localhost:1128/api/repos",
      data: JSON.stringify({query: username}),
      contentType: "application/json; charset=utf-8",
      success: successCB || function (data) {
        console.log(`Success: ${data}`);
      },
      error: errorCB || function (err) {
        console.log(`Error ${err.status}, ${err.statusText}`);
      }
    });
  },

  getTopRepos: (amount = 25, successCB, errorCB) => {
    $.ajax({
      method: "GET",
      url: "http://localhost:1128/api/repos",
      data: {amount: amount},
      contentType: "application/json; charset=utf-8",
      success: successCB || function (data) {
        console.log(`Success: ${data}`);
      },
      error: errorCB || function (err) {
        console.log(`Error ${err.status}, ${err.statusText}`);
      }
    });
  },

};