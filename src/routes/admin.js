import express from 'express';
import * as showAdminRoutes from './showAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.use('/', verifyToken);

router.use('/', showAdminRoutes);

export default router;