import * as showController from '../controllers/show.js';
import express from 'express';

const router = express.Router();

router.get('/', [
  showController.getByCinemaId,
  showController.getByFilmIdAdmin,
  showController.getByScreenId,
  showController.getAll,
]);

router.get('/filmDetail', showController.getByFilmIdFilmDetail);

router.get('/:showId', showController.getById);

export default router;
