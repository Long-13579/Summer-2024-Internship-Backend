import * as seatMatrixController from '../controllers/seatMatrix.js';
import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = express.Router();

router.post('/setOnHold', seatMatrixController.setOnHoldStatus);

router.post('/setIsSold', seatMatrixController.setIsSoldStatus);

router.post(
  '/setAvailability',
  verifyToken,
  seatMatrixController.setIsOffStatus
);

router.post('/setOnHold', seatMatrixController.setOnHoldStatus);

export default router;
