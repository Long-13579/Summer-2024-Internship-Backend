import { API_STATUS } from '../models/apiStatus.js';
import * as ticketService from '../services/ticket.js'
import { getNotFoundErrorMessage } from '../utils/getErrorMessage.js';
import { validationResult } from 'express-validator'
import ticketValidator from '../validators/ticket.js'

export async function validateTicketPayment(req, res, next) {
    try {
        await ticketValidator.run(req);
        const result = validationResult(req);

        if (result.isEmpty()) {
            next();
            return;
        }

        res.status(API_STATUS.BAD_REQUEST.status);
        res.send(result)
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}

export async function validateTicketId(req, res, next) {
    try {
        const ticketId = req.params.ticketId;

        const ticket = await ticketService.getById(ticketId);

        if (ticket === null) {
            const errorMessage = getNotFoundErrorMessage({
                model: 'ticket', 
                modelQuery: 'ticket', 
                modelQueryId: ticketId
            });

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