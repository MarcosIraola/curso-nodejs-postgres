const Joi = require('joi');

const id = Joi.number().integer();
const username = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const games = Joi.number().integer();
const wins = Joi.number().integer();
const loss = Joi.number().integer();

// const role = Joi.string().min(5)

const createUserSchema = Joi.object({
    username: username.required(),
    email: email.required(),
    password: password.required(),

    // role: role.required()
});

const updateUserSchema = Joi.object({
    username: username,
    email: email,
    password: password,
    games: games,
    wins: wins,
    loss: loss,
    // role: role,
});

const getUserSchema = Joi.object({
    id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
