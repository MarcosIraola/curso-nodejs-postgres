const { User, UserSchema } = require('./user.model');
const { Match, MatchSchema } = require('./match.model');


function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Match.init(MatchSchema, Match.config(sequelize));
}

module.exports = setupModels;
