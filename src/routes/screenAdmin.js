import * as screenController from '../controllers/screen.js';
import { validateScreenId } from '../middlewares/screen.js';
import express from 'express';

const router = express.Router();

router.post('/', screenController.add);

//update screen
router.put('/', validateScreenId, screenController.update);

router.delete('/:screenId', validateScreenId, screenController.deactivateScreen);

export default router;
