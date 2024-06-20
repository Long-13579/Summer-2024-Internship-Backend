import * as provinceCityController from '../controllers/provinceCity.js';
import express from 'express';

var router = express.Router();

router.get('/', provinceCityController.getAllHaveCinema);

router.get('/:provinceCityId', provinceCityController.getById);

router.post('/', provinceCityController.add);

router.delete('/', provinceCityController.drop);

router.put('/', provinceCityController.update);

export default router;
