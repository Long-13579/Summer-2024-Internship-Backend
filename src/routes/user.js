import * as userController from '../controllers/user.js';

import express from 'express';

var router = express.Router();

router.post('/login', userController.login);

export default router;