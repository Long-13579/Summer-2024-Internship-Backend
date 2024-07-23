import * as filmController from '../controllers/film.js';
import express from 'express';

var router = express.Router();

<<<<<<< HEAD
router.post('/', filmController.add);

router.get('/', filmController.getFilmUser);

router.get('/upComing', filmController.getUpComing);

router.get('/onCasting', filmController.getOnCasting);
=======
router.get('/', filmController.getFilmForUser);
>>>>>>> c3f7a673867cef84f7bd361c1e54e19384fee9b7

export default router;
