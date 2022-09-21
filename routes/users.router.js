const express = require('express');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema, addMatchSchema, queryMatchSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/',
    validatorHandler(queryMatchSchema, 'query'),
    async (req, res, next) => {
        try {
            const users = await service.find(req.query);
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(queryMatchSchema, 'query'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.findById(id, req.query);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUser = await service.create(body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/add-match',
    validatorHandler(addMatchSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const addMatch = await service.addMatchToUser(body);
            res.status(201).json(addMatch);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const user = await service.update(id, body);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({id});
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;

