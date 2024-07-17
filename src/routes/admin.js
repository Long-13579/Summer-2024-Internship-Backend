import express from 'express';
import showAdminRoutes from './showAdmin.js';
import screenAdminRoutes from './screenAdmin.js';
import cinemaAdminRoute from './cinemaAdmin.js';
import filmAdminRoute from './filmAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.use('/', verifyToken);

router.use('/show', showAdminRoutes);
router.use('/screen', screenAdminRoutes);
router.use('/cinema', cinemaAdminRoute);
router.use('/film', filmAdminRoute);

export default router;
