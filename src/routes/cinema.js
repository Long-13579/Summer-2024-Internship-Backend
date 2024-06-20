import * as cinemaController from '../controllers/cinema.js';
import express from 'express';

var router = express.Router();

router.get('/', cinemaController.getByProvinceCityId, cinemaController.getAll);

//get by Id
router.get('/:cinemaId', cinemaController.getById);

//add cinema
router.post('/', cinemaController.add);

//update
router.put('/', cinemaController.update);

//delete
router.delete('/:cinemaId', cinemaController.drop);

export default router;
