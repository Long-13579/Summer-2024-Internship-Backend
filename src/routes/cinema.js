import * as cinemaController from '../controllers/cinema.js';
import { validateCinemaId } from '../middlewares/cinema.js';
import { validateProvinceCityId } from '../middlewares/provinceCity.js';
import express from 'express';

var router = express.Router();

router.get(
  '/',
  validateProvinceCityId,
  cinemaController.getByProvinceCityId,
  cinemaController.getAll
);

//get by Id
router.get('/:cinemaId', validateCinemaId, cinemaController.getById);

export default router;
