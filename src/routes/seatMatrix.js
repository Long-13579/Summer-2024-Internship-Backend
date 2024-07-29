import * as seatMatrixController from '../controllers/seatMatrix.js';
import express from 'express';

const router = express.Router();

router.post('/setIsSold', seatMatrixController.setIsSoldStatus);

export default router;
