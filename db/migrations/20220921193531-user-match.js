'use strict';
const { UserMatchSchema, USER_MATCH_TABLE } = require('../models/user-match.model');

module.exports = {
    async up (queryInterface) {
        await queryInterface.createTable(USER_MATCH_TABLE, UserMatchSchema);
    },

    async down (queryInterface) {
        await queryInterface.dropTable(USER_MATCH_TABLE);
    }
};
