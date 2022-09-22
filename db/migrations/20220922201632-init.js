'use strict';
const { UserSchema, USER_TABLE } = require('../models/user.model');
const { MatchSchema, MATCH_TABLE  } = require('../models/match.model');
const { UserMatchSchema, USER_MATCH_TABLE } = require('../models/user-match.model');

module.exports = {
    async up (queryInterface) {
        await queryInterface.createTable(USER_TABLE, UserSchema);
        await queryInterface.createTable(MATCH_TABLE, MatchSchema);
        await queryInterface.createTable(USER_MATCH_TABLE, UserMatchSchema);
    },

    async down (queryInterface) {
        await queryInterface.dropTable(USER_TABLE);
        await queryInterface.dropTable(MATCH_TABLE);
        await queryInterface.dropTable(USER_MATCH_TABLE);
    }
};
