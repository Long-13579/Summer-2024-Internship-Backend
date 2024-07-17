import * as showController from '../controllers/show.js'

import express from 'express';

var router = express.Router();

router.get('/', showController.getShowForAdmin);

export default router;