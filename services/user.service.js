const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool')

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err))
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM users';
    const rta = await this.pool.query(query);

    return rta.rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM users WHERE id = ' + id;
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
