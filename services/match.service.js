const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class MatchService {

    constructor() {

    }

    async create(data) {
        const newMatch = await models.Match.create(data)
        return newMatch;
    }

    async find() {
        const all = await models.Match.findAll()
        return all;
    }

    async findById(id) {
        const match = await models.Match.findByPk(id, {
            include: [
                'users'
            ]
        })
        if (!match) {
            throw boom.notFound('Match not found')
        }
        return match;
    }

    async update(id, changes) {
        const match = await this.findById(id);
        const rta = await match.update(changes)
        return rta;
    }

    async delete(id) {
        const match = await this.findById(id);
        await match.destroy();
        return { id };
    }
}

module.exports = MatchService;
