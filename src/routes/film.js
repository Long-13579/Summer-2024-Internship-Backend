import * as filmController from '../controllers/film.js';
import express from 'express';

var router = express.Router();

router.get('/', filmController.getAll);

export default router;
