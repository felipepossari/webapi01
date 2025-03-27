const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const authenticationMiddleware = require('./middleware/authenticationMiddleware');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', authenticationMiddleware, usersRouter);

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  // render the error page
  res.sendStatus(err.status || 500);
});

module.exports = app;
