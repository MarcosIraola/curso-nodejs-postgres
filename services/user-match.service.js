const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserMatchService {

    async find() {
        const all = await models.UserMatch.findAll()
        return all;
    }

    async addMatchToUser(data) {
        const addMatch = await models.UserMatch.create(data)
        return addMatch;
    }

}

module.exports = UserMatchService;
