const { User, UserSchema } = require('./user.model');
const { Match, MatchSchema } = require('./match.model');
const { UserMatch, UserMatchSchema } = require('./user-match.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Match.init(MatchSchema, Match.config(sequelize));
    UserMatch.init(UserMatchSchema, Match.config(sequelize));

    User.associate(sequelize.models)
}

module.exports = setupModels;
