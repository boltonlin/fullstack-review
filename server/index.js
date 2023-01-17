const express = require('express');
const morgan = require('morgan');
let app = express();
const db = require('../database/');

/* MIDDLEWARE */
app.use(morgan('dev'));
app.use(express.json());

/* SERVE STATIC FILES */
app.use(express.static('client/dist'));

/* ROUTES */
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body);
  res.send(req.body);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

