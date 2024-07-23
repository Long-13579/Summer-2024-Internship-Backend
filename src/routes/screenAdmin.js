import * as screenController from '../controllers/screen.js';
import express from 'express';

const router = express.Router();

router.post('/', screenController.add);

export default router;
