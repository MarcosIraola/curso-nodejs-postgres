const { Model, DataTypes, Sequelize } = require('sequelize');

const MATCH_TABLE = 'matches';

const MatchSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    team_1: {
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    team_2: {
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    score_team_1: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    score_team_2: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    location: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: 0
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
}

class Match extends Model {

    static associate(models) {
        this.belongsToMany(models.User, {
            as: 'users',
            through: models.UserMatch,
            foreignKey: 'match_id',
            otherKey: 'user_id',
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: MATCH_TABLE,
            modelName: 'Match',
            timestamps: false
        }
    }
}

module.exports = { MATCH_TABLE, MatchSchema, Match }
