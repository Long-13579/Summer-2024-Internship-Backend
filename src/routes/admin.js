import express from 'express';
import * as showAdminRoutes from './showAdmin.js';
import * as screenAdminRoutes from './screenAdmin.js';
import { verifyToken } from '../middlewares/verifyToken';

const router = express.Router();

router.use('/', verifyToken);

router.use('/show', showAdminRoutes);
router.use('/screen', screenAdminRoutes);

export default router;
