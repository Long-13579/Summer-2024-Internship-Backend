import * as provinceCityController from '../controllers/provinceCity.js';
import { validateProvinceCityId } from '../middlewares/provinceCity.js';
import express from 'express';

var router = express.Router();

router.get('/', provinceCityController.getAllHaveCinema);

router.get(
  '/:provinceCityId',
  validateProvinceCityId,
  provinceCityController.getById
);


export default router;
