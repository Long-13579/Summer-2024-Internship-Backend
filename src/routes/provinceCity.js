import * as provinceCityController from '../controllers/provinceCity.js';

import express from 'express';

const router = express.Router();

router.get('/', provinceCityController.getProvinceCityForUser);

export default router;
