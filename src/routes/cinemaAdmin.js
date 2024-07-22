import * as cinemaController from '../controllers/cinema.js';

import express from 'express';

var router = express.Router();

router.post('/', cinemaController.add);

export default router;
