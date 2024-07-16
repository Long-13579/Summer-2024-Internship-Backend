import express from 'express';
import showAdminRoutes from './showAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.use('/', verifyToken);

router.use('/show', showAdminRoutes);

export default router;
