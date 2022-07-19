const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const memberRouter = require('./routes/member');

const db = require('./models');

const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerSpec = YAML.load(path.join(__dirname, './swagger/out/swagger.yaml'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const baseError = require('./exception/baseError');

db.sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/members', memberRouter);

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

const errorHandler = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({error: {message}});
}

const errorHandler2 = (err, res) => {
  console.log(err);
  res.status(500).json({ error: {message: 'Server Error.'}});
}

// error handler
app.use(function(err, _req, res, _next) {
  err instanceof baseError ? errorHandler(err, res) : errorHandler2(err, res);
});

module.exports = app;
