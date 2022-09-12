// const { Model, DataTypes, Sequelize } = require('sequelize');

// const { USER_TABLE } = require('./user.model');
// const { MATCH_TABLE } = require('./match.model');

// const USER_MATCH_TABLE = 'users_matches';

// const UserMatchSchema = {
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER
//     },
//     user_id: {
//         field: 'user_id',
//         allowNull: false,
//         type: DataTypes.INTEGER,
//         references: {
//             model: USER_TABLE,
//             key: 'id'
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL'
//     },
//     match_id: {
//         field: 'match_id',
//         allowNull: true,
//         type: DataTypes.INTEGER,
//         references: {
//             model: MATCH_TABLE,
//             key: 'id'
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL'
//     },
//     createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE,
//         field: 'create_at',
//         defaultValue: Sequelize.NOW
//     },
// }

// class UserMatch extends Model {
//     static associate() {
//         // models
//     }

//     static config(sequelize) {
//         return {
//             sequelize,
//             tableName: USER_MATCH_TABLE,
//             modelName: 'UserMatch',
//             timestamps: false
//         }
//     }
// }

// module.exports = { USER_MATCH_TABLE, UserMatchSchema, UserMatch }
