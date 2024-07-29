import * as showController from '../controllers/show.js';
import { validateShowId } from '../middlewares/show.js';
import { validateFilmId } from '../middlewares/film.js';
import { validateDateFilm } from '../middlewares/dateShow.js';
import express from 'express';

const router = express.Router();

router.delete('/:showId', validateShowId, showController.deactivateShow);

router.get('/', showController.getShowForAdmin);

router.post('/', validateFilmId, validateDateFilm, showController.add);

router.put('/', validateShowId, showController.update);

export default router;
