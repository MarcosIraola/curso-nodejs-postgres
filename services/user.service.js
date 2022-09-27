const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')

const { models } = require('../libs/sequelize');

class UserService {
    constructor() {}

    async create(data) {
        const hash = await bcrypt.hash(data.password, 10)
        const newUser = await models.User.create({
            ...data,
            password: hash
        })
        delete newUser.dataValues.password;
        return newUser;
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
        const options = {
            include: ['matches'],
        }
        const user = await models.User.findByPk(id, options)
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
