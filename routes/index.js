const express = require('express');

const usersRouter = require('./users.router');
const matchsRouter = require('./matchs.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/matchs', matchsRouter);
}

module.exports = routerApi;
