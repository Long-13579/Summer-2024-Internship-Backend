import filmAdminRoute from './filmAdmin.js';
import express from 'express';

var router = express.Router();

router.use('/film', filmAdminRoute);

export default router;
