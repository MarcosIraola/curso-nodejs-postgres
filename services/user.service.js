const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize')

class UserService {
    constructor() {}

    async create(data) {

        return data;
    }

    async find() {
        const query = 'SELECT * FROM users';
        const [data] = await sequelize.query(query);

        return data;
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
