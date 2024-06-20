import * as filmController from '../controllers/film.js';
import express from 'express';

var router = express.Router();

router.post('/', filmController.add);

router.get('/', filmController.getByCinemaId, filmController.getAll);

router.get('/upComing', filmController.getUpComing);

router.get('/onCasting', filmController.getOnCasting);

router.get('/:filmId', filmController.getByIdFilmDetail);

export default router;
