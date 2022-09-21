const Joi = require('joi');

const id = Joi.number().integer();
const team_1 = Joi.array().items(Joi.string());
const team_2 = Joi.array().items(Joi.string());
const score_team_1 = Joi.number().integer();
const score_team_2 = Joi.number().integer();
const location = Joi.string();

// const team_1 = Joi.array().items(Joi.object({
//     Object schema
// }))

// const role = Joi.string().min(5)

const createMatchSchema = Joi.object({
    team_1: team_1.required(),
    team_2: team_2.required(),
    score_team_1: score_team_1.required(),
    score_team_2: score_team_2.required(),
    location: location,
});

const getMatchSchema = Joi.object({
    id: id.required(),
});

const updateMatchSchema = Joi.object({
    team_1: team_1,
    team_2: team_2,
    score_team_1: score_team_1,
    score_team_2: score_team_2,
    location: location,
});



module.exports = { createMatchSchema, updateMatchSchema, getMatchSchema }
