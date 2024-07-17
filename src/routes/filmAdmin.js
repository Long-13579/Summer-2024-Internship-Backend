import * as filmController from '../controllers/film.js';

import express from 'express';

var router = express.Router();

router.post('/', filmController.add);

export default router;
