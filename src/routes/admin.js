import showAdminRoute from './showAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';

import express from 'express';

var router = express.Router();

router.use('/', verifyToken);

router.use('/show', showAdminRoute);

export default router;