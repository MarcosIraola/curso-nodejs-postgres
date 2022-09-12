const express = require('express');

const MatchService = require('../services/match.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createMatchSchema, updateMatchSchema, getMatchSchema } = require('../schemas/match.schema');

const router = express.Router();
const service = new MatchService();

router.get('/', async (req, res, next) => {
    try {
        const match = await service.find();
        res.json(match);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getMatchSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const match = await service.findById(id);
            res.json(match);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(createMatchSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newMatch = await service.create(body);
            res.status(201).json(newMatch);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getMatchSchema, 'params'),
    validatorHandler(updateMatchSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const match = await service.update(id, body);
            res.json(match);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(getMatchSchema, 'params'),
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

