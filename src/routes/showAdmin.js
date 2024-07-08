import * as showController from '../controllers/show.js';
import { validateShowId } from '../middlewares/show.js';
import express from 'express';

const router = express.Router();

router.put('/', validateShowId, showController.update);

router.post('/', showController.add);

export default router;
