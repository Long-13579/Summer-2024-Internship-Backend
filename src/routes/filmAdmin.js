import * as filmController from '../controllers/film.js';
import { validateFilmId } from '../middlewares/film.js';
import express from 'express';

var router = express.Router();

router.get('/', filmController.getAllAdmin);

router.get('/:filmId', validateFilmId, filmController.getByIdAdmin);

export default router;
