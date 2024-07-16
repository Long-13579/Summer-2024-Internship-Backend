import * as showController from '../controllers/show.js';
import { validateShowId } from '../middlewares/showId.js';
import express from 'express';

const router = express.Router();

router.delete('/:showId', validateShowId, showController.inactive);

export default router;
