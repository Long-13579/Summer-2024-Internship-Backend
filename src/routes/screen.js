import * as screenController from '../controllers/screen.js';
import express from 'express';

const router = express.Router();

router.post('/', screenController.add);

router.get('/', screenController.getByCinemaId, screenController.getAll);

//get By Id
router.get('/:screenId', screenController.getById);

//update screen
router.put('/', screenController.update);

export default router;
