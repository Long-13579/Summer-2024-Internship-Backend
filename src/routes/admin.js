import express from 'express';
import screenAdminRoutes from './screenAdmin.js';
import showAdminRoutes from './showAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.use('/', verifyToken);

router.use('/screen', screenAdminRoutes);

router.use('/show', showAdminRoutes);

export default router;
