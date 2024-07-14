import { API_STATUS } from '../models/apiStatus.js';
import * as ticketService from '../services/ticket.js'
import { getNotFoundErrorMessage } from '../utils/getErrorMessage.js';

export async function validateTicketPayment(req, res, next) {
    try {
        const ticketInfo = req.body.ticketInfo;
        const paymentInfo = req.body.paymentInfo;

        if (ticketInfo && paymentInfo) {
            next();
            return;
        }

        res.status(API_STATUS.BAD_REQUEST.status);
        res.send(API_STATUS.BAD_REQUEST)
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}

export async function validateTicketId(req, res, next) {
    try {
        const ticketId = 
            req.body.ticketId ||
            req.params.ticketId || 
            req.query.ticketId;

        const ticket = await ticketService.getById(ticketId);

        if (ticket === null) {
            const errorMessage = getNotFoundErrorMessage({
                model: 'ticket', 
                modelQuery: 'ticket', 
                modelQueryId: ticketId});

            res.status(errorMessage.status);
            res.send(errorMessage);
            return;
        }

        next();
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}