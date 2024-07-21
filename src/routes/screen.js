import * as screenController from '../controllers/screen.js';
import express from 'express';

const router = express.Router();

router.get('/', screenController.getScreen);

export default router;
