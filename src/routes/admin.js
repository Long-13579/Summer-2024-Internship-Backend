import filmAdminRoute from './filmAdmin.js';
import provinceCityAdminRoute from './provinceCityAdmin.js';
import cinemaAdminRoute from './cinemaAdmin.js';
import showAdminRoute from './showAdmin.js';
import screenAdminRoute from './screenAdmin.js';
import express from 'express';

var router = express.Router();

router.use('/film', filmAdminRoute);
router.use('/cinema', cinemaAdminRoute);
router.use('/provinceCity', provinceCityAdminRoute);
router.use('/show', showAdminRoute);
router.use('/screen', screenAdminRoute);

export default router;
