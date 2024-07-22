import * as cinemaController from '../controllers/cinema.js';
import { validateCinemaId } from '../middlewares/cinema.js'

import express from 'express';

var router = express.Router();

router.post('/', cinemaController.add);

router.put('/', validateCinemaId, cinemaController.update)

export default router;
