import express from 'express';
import * as ticketController from '../controllers/ticket.js';
import * as ticketMiddlewares from '../middlewares/ticket.js';

const router = express.Router();

router.post('/payment', ticketMiddlewares.validateTicketPayment, ticketController.payTicket);

router.put('/successPayment/:ticketId', ticketMiddlewares.validateTicketId, ticketController.successPayment);

export default router;