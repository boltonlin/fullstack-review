const express = require('express');
const morgan = require('morgan');
let app = express();
const router = require('./routes');

/* MIDDLEWARE */
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

/* SERVE STATIC FILES */
app.use(express.static('client/dist'));

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

