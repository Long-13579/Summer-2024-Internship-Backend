import express from 'express';
import showAdminRoutes from './showAdmin.js';
import ticketAdminRoutes from './ticketAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.use('/', verifyToken);

router.use('/show', showAdminRoutes);

router.use('/ticket', ticketAdminRoutes)

export default router;
