import * as provinceCityController from '../controllers/provinceCity.js';
import express from 'express';

var router = express.Router();

router.use('/:provinceId', provinceCityController.getById);

router.use('/', provinceCityController.getAll);

router.post('/', provinceCityController.add);

router.delete('/', provinceCityController.drop);

router.put('/', provinceCityController.update);

export default router;
