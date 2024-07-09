import * as seatMatrixController from '../controllers/seatMatrix.js';
import express from 'express';
const router = express.Router();

router.post('/setOnHold', seatMatrixController.setOnHoldStatus);

router.post('/setIsSold', seatMatrixController.setIsSoldStatus);

export default router;
