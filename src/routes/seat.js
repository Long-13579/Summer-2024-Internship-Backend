import * as seatMatrixController from '../controllers/seatMatrix.js';
import express from 'express';

const router = express.Router();

router.post('/holdSeat', seatMatrixController.setOnHoldStatus);

router.post('/setAvailability', seatMatrixController.setIsOffStatus);

router.post('/sellSeat', seatMatrixController.setIsSoldStatus);
