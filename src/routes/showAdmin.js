import * as showController from '../controllers/show.js';
import { validateShowId } from '../middlewares/show.js';
import { validateScreenId } from '../middlewares/screen.js';
import express from 'express';

const router = express.Router();

router.post('/', validateScreenId, showController.add);

router.put('/', validateShowId, showController.update);
router.delete('/:showId', validateShowId, showController.deactive);

export default router;
