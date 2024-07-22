import * as cinemaController from '../controllers/cinema.js';
import express from 'express';

const router = express.Router();

router.get('/', cinemaController.getCinemaForUser);

export default router;