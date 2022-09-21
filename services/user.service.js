const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserService {
    constructor() {}

    async create(data) {
        const newUser = await models.User.create(data)
        return newUser;
    }

    async addMatchToUser(data) {
        const addMatch = await models.UserMatch.create(data)
        return addMatch;
    }

    async find(query) {
        const options = {
            include: ['matches'],
        }
        const {limit, offset} = query;
        if(limit && offset) {
            options.limit = limit
            options.offset = offset
        }
        const all = await models.User.findAll(options)
        return all;
    }

    async findById(id) {
        const user = await models.User.findByPk(id)
        if (!user) {
            throw boom.notFound('User not found')
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findById(id);
        const rta = await user.update(changes)
        return rta;
    }

    async delete(id) {
        const user = await this.findById(id);
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;
