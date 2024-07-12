import * as cinemaController from '../controllers/cinema.js';
import express from 'express';

var router = express.Router();

router.get(
  '/',
  cinemaController.getCinema
);


export default router;
