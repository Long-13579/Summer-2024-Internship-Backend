import express from 'express';
import * as ticketController from '../controllers/ticket.js';

const router = express.Router();

router.get('/', ticketController.getTicket);

export default router;