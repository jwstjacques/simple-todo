const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Test.'
  })
);

module.exports = app;
