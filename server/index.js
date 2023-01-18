require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
let app = express();
const router = require('./routes');
const port = process.env.PORT;

/* MIDDLEWARE */
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

/* SERVE STATIC FILES */
app.use(express.static('client/dist'));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

