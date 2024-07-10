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

router.put('/', validateScreenId, validateCinemaId, screenController.update);

export default router;
