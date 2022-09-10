const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserService {
    constructor() {}

    async create(data) {

        return data;
    }

    async find() {
        const rta = await models.User.findAll()
        return rta;
    }

    async findOne(id) {
        const query = 'SELECT * FROM users WHERE id = ' + id;
        const [data] = await sequelize.query(query);

        return data;
    }

    async update(id, changes) {

        return {id,changes,};
    }

    async delete(id) {

        return { id };
    }
}

module.exports = UserService;
