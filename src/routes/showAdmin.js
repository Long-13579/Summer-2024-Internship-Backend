import * as showController from '../controllers/show.js';
import { validateShowId } from '../middlewares/show.js';
import express from 'express';

const router = express.Router();

router.delete('/:showId', validateShowId, showController.deactivateShow);

router.get('/', showController.getShowForAdmin);

export default router;
