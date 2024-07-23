import * as cinemaController from '../controllers/cinema.js';
import { validateCinemaInput } from '../middlewares/cinema.js'

import express from 'express';

var router = express.Router();

router.post('/', validateCinemaInput, cinemaController.add);

export default router;
