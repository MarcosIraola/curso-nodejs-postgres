const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    games: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    wins: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    loss: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
}

class User extends Model {

    static associate(models) {
        this.belongsToMany(models.Match, {
            as: 'matches',
            through: models.UserMatch,
            foreignKey: 'user_id',
            otherKey: 'match_id',
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User }
