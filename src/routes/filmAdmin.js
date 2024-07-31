import * as filmController from '../controllers/film.js';
import { validateFilmId } from '../middlewares/film.js';

import express from 'express';

var router = express.Router();

router.get('/', filmController.getFilmAdmin);

router.post('/', filmController.add);

router.put('/', validateFilmId,filmController.update);

export default router;
