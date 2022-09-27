const Joi = require('joi');

const user_id = Joi.number().integer();
const match_id = Joi.number().integer();
const id = Joi.number().integer();

const addMatchSchema = Joi.object({
    user_id: user_id.required(),
    match_id: match_id.required()
})

const getUserMatchSchema = Joi.object({
    id: id.required(),
});

module.exports = { addMatchSchema, getUserMatchSchema }
