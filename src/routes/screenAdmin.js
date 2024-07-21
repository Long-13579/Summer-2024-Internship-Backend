import * as screenController from '../controllers/screen.js';
import { validateScreenId } from '../middlewares/screen.js';
import express from 'express';

const router = express.Router();

router.post('/', validateScreenId,screenController.add);

//update screen
router.put('/', validateScreenId, screenController.update);

router.delete('/:screenId', validateScreenId, screenController.inactive);

export default router;
