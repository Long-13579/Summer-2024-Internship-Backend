import * as screenController from '../controllers/screen.js';
import { validateScreenId } from '../middlewares/screen.js';
import express from 'express';

const router = express.Router();

router.post('/', validateScreenId,screenController.add);

//update screen
router.put('/', validateScreenId, screenController.update);

export default router;
