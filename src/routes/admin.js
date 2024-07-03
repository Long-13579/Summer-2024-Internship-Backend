import * as filmController from '../controllers/film.js';
import express from 'express';

var router = express.Router();

router.get('/film/:filmId', filmController.getByIdAdmin);

export default router;
