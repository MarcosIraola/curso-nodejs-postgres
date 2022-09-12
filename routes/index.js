const express = require('express');

const usersRouter = require('./users.router');
const matchesRouter = require('./matches.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/matches', matchesRouter);
}

module.exports = routerApi;
