import cinemaAdminRoute from './cinemaAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import express from 'express';

var router = express.Router();

router.use('/', verifyToken);

router.use('/cinema', cinemaAdminRoute);

export default router;
