import * as showController from '../controllers/show.js';
import express from 'express';

const router = express.Router();

router.get('/filmDetail', showController.getByFilmIdDateStartProvinceCityId);

router.get('/', showController.getShowForUser);

export default router;