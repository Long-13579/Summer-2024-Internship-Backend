import * as provinceCityController from '../controllers/provinceCity.js';
import express from 'express';

var router = express.Router();

router.get('/', provinceCityController.getAllHaveCinema);

router.get('/:provinceCityId', provinceCityController.getById);

export default router;
