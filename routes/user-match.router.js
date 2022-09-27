const express = require('express');

const UserMatch = require('./../services/user-match.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { addMatchSchema, getUserMatchSchema } = require('./../schemas/user-match.schema');

const router = express.Router();
const service = new UserMatch();

router.get('/',
    async (req, res, next) => {
        try {
            const relations = await service.find();
            res.json(relations);
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

router.delete('/:id',
    validatorHandler(getUserMatchSchema, 'params'),
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

