import * as seatMatrixController from '../controllers/seatMatrix.js';
import { validateShowId } from '../middlewares/show.js';
import express from 'express';

const router = express.Router();

router.post('/holdSeat', validateShowId, seatMatrixController.setOnHoldStatus);

// router.post('/setAvailability', seatMatrixController.setIsOffStatus);

// router.post('/sellSeat', seatMatrixController.setIsSoldStatus);
