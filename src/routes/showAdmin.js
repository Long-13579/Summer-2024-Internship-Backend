import * as showController from '../controllers/show.js';
import express from 'express';

const router = express.Router();

router.post('/', showController.add);

export default router;