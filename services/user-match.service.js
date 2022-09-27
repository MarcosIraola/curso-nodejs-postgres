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

    async findById(id) {
        const user_match = await models.UserMatch.findByPk(id)
        if (!user_match) {
            throw boom.notFound('user_match not found')
        }
        return user_match;
    }

    async delete(id) {
        const user_match = await this.findById(id);
        await user_match.destroy();
        return { id };
    }
}

module.exports = UserMatchService;
