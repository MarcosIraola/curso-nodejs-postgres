const express = require('express');

const usersRouter = require('./users.router');
const matchesRouter = require('./matches.router');
const userMatchRouter = require('./user-match.router');
const authRouter = require('./auth.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/matches', matchesRouter);
  router.use('/user-match', userMatchRouter);
  router.use('/auth', authRouter);

}

module.exports = routerApi;
