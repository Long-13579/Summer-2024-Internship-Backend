import * as provinceCityController from '../controllers/provinceCity.js';
import { validateProvinceCityId } from '../middlewares/provinceCity.js';
import express from 'express';

var router = express.Router();

router.get(
  '/',
  validateProvinceCityId,
  provinceCityController.getProvinceCityForAdmin
);

router.post('/', validateProvinceCityId, provinceCityController.add);

router.delete(
  '/:provinceCityId',
  validateProvinceCityId,
  provinceCityController.drop
);

router.put('/', validateProvinceCityId, provinceCityController.update);

export default router;
