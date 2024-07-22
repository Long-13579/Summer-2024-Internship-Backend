import * as filmController from '../controllers/film.js';
import express from 'express';

const router = express.Router();

router.get('/upComing', filmController.getUpComing);

router.get('/onCasting', filmController.getOnCasting);

router.get('/', filmController.getFilmForUser);

export default router;
