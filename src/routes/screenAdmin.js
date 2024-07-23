import * as screenController from '../controllers/screen.js';
import { validateScreenId } from '../middlewares/screen.js'

import express from 'express';

const router = express.Router();

router.post('/', screenController.add);

router.put('/', validateScreenId, screenController.update);

export default router;
