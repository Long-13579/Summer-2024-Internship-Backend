import * as screenController from '../controllers/screen.js';
import { validateScreenInput } from '../middlewares/screen.js';

import express from 'express';

const router = express.Router();

router.post('/', validateScreenInput, screenController.add);

export default router;
