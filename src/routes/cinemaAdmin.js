import * as cinemaController from '../controllers/cinema.js';
import { validateCinemaId } from '../middlewares/cinema.js';
import express from 'express';

const router = express.Router();

router.delete('/:cinemaId', validateCinemaId, cinemaController.deactivateCinema);

router.get(
  '/',
  cinemaController.getCinemaForAdmin
);

export default router;
