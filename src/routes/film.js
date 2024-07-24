import * as filmController from '../controllers/film.js';
import express from 'express';

var router = express.Router();

router.post('/', filmController.add);

router.get('/', filmController.getFilmForUser);

router.get('/upComing', filmController.getUpComing);

router.get('/onCasting', filmController.getOnCasting);

export default router;
