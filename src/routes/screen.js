import * as screenController from '../controllers/screen.js';
import { validateScreenId } from '../middlewares/screen.js';
import { validateCinemaId } from '../middlewares/cinema.js';
import express from 'express';

const router = express.Router();

router.post('/', screenController.add);

router.get(
  '/',
  validateCinemaId,
  screenController.getByCinemaId,
  screenController.getAll
);

//get By Id
router.get('/:screenId', validateScreenId, screenController.getById);

//update screen
router.put('/', validateScreenId, screenController.update);

export default router;
