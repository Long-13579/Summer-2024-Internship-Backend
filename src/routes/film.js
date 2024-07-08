import * as filmController from '../controllers/film.js';
import { validateFilmId } from '../middlewares/film.js';
import { validateCinemaId } from '../middlewares/cinema.js';
import express from 'express';

var router = express.Router();

router.post('/', filmController.add);

router.get(
  '/',
  validateCinemaId,
  filmController.getByCinemaId,
  filmController.getAll
);

router.get('/upComing', filmController.getUpComing);

router.get('/onCasting', filmController.getOnCasting);

router.get('/:filmId', validateFilmId, filmController.getByIdFilmDetail);

export default router;
