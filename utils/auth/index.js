// const passport = require('passport')

// const { LocalStragety } = require('./strageties/local.stragety')

// passport.use(LocalStragety);

const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
passport.use(LocalStrategy);
