import filmAdminRoute from './filmAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';

import express from 'express';

var router = express.Router();

router.use('/', verifyToken);

router.use('/film', filmAdminRoute);

export default router;
