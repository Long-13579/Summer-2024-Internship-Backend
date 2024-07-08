import * as showController from '../controllers/show.js';
import { validateCinemaId } from '../middlewares/cinema.js';
import { validateFilmId } from '../middlewares/film.js';
import { validateScreenId } from '../middlewares/screen.js';
import { validateProvinceCityId } from '../middlewares/provinceCity.js';
import { validateDateFilm } from '../middlewares/dateShow.js';
import express from 'express';

const router = express.Router();

router.get(
  '/',
  validateCinemaId,
  showController.getByCinemaId,
  validateFilmId,
  showController.getByFilmIdAdmin,
  validateScreenId,
  showController.getByScreenId,
  showController.getAll
);

router.get(
  '/filmDetail',
  validateFilmId,
  validateProvinceCityId,
  validateDateFilm,
  showController.getByFilmIdFilmDetail
);

router.get('/:showId', showController.getById);

export default router;
