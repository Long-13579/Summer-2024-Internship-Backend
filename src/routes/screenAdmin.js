import * as screenController from '../controllers/screen.js';
import { validateScreenId } from '../middlewares/screen.js';
import express from 'express';

const router = express.Router();

router.delete('/:screenId', validateScreenId, screenController.deactivateScreen);

router.post('/', screenController.add);

export default router;
