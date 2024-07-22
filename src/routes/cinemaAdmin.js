import * as cinemaController from '../controllers/cinema.js';
import { validateCinemaId } from '../middlewares/cinema.js';
import express from 'express';

var router = express.Router();

//add cinema
router.post('/', cinemaController.add);

//update
router.put('/', validateCinemaId, cinemaController.update);

//delete
router.delete('/:cinemaId', validateCinemaId, cinemaController.drop);

router.get(
  '/',
  cinemaController.getCinemaForAdmin
);


export default router;
