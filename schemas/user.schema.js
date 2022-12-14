const Joi = require('joi');

const id = Joi.number().integer();
const username = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(6);
const games = Joi.number().integer();
const wins = Joi.number().integer();
const loss = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createUserSchema = Joi.object({
    username: username.required(),
    email: email.required(),
    password: password.required(),
});


const getUserSchema = Joi.object({
    id: id.required(),
});

const updateUserSchema = Joi.object({
    username: username,
    email: email,
    password: password,
    games: games,
    wins: wins,
    loss: loss,
});



const queryMatchSchema = Joi.object({
    limit,
    offset
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema, queryMatchSchema }
