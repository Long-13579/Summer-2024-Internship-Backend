import * as provinceCityController from '../controllers/provinceCity.js';
import { validateProvinceCityId } from '../middlewares/provinceCity.js';

import express from 'express';

var router = express.Router();

router.post('/', provinceCityController.add);

router.put('/', validateProvinceCityId, provinceCityController.update)

export default router;