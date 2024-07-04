import * as screenController from '../controllers/screen.js';
import express from 'express';

const router = express.Router();

router.post('/', screenController.add);

//update screen
router.put('/', screenController.update);

export default router;
