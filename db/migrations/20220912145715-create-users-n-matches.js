'use strict';
const { UserSchema, USER_TABLE,  } = require('../models/user.model');
const { MatchSchema, MATCH_TABLE,  } = require('../models/match.model');

module.exports = {
    async up (queryInterface) {
        await queryInterface.createTable(USER_TABLE, UserSchema);
        await queryInterface.createTable(MATCH_TABLE, MatchSchema);
    },

    async down (queryInterface) {
        await queryInterface.dropTable(USER_TABLE);
        await queryInterface.dropTable(MATCH_TABLE);
    }
};
