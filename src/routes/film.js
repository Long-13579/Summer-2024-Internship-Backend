import * as filmController from '../controllers/film.js';
import express from 'express';

var router = express.Router();

router.get('/', filmController.getAll);

router.get('/upComing', filmController.getUpComing);

router.get('/onCasting', filmController.getOnCasting);

export default router;
