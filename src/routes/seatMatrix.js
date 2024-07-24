import * as seatMatrixController from '../controllers/seatMatrix.js';
import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = express.Router();

router.post('/setOnHold', seatMatrixController.setOnHoldStatus);

router.post('/setIsSold', verifyToken, seatMatrixController.setIsSoldStatus);

router.post(
  '/setAvailability',
  verifyToken,
  seatMatrixController.setIsOffStatus
);

export default router;
