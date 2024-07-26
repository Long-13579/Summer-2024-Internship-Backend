import * as ticketService from '../services/ticket.js';
import { SendEmail } from '../services/mail.js'
import { API_STATUS } from '../models/apiStatus.js';

export async function getTicket(req, res) {
    try {
        const tickets = await ticketService.getTicket(req.query);
        res.status(API_STATUS.OK.status);
        res.send(tickets);
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}

export async function payTicket(req, res) {
    try {
        const {
            userId, 
            showId, 
            seatId, 
            seatName, 
            voucherId, 
            clientName, 
            email, 
            phone, 
            price
        } = req.body.ticketInfo;

        const ipAddr = req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress;

        const {
            amount, 
            description, 
            remainTime, 
            returnUrl
        } = req.body.paymentInfo;

        const newTicket = await ticketService.create({
            userId, 
            showId, 
            seatId, 
            seatName, 
            voucherId, 
            isPaid: false, 
            clientName, 
            email, 
            phone, 
            price
        });

        const newReturnUrl = returnUrl + '/' + newTicket.id.toString();

        const paymentUrl = await ticketService.getPaymentUrl({
            ipAddr,
            amount,
            description,
            remainTime,
            returnUrl: newReturnUrl
        });

        res.status(API_STATUS.OK.status);
        res.send({ url: paymentUrl });
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}

export async function create(req, res) {
    try {
        const {
            userId, 
            showId, 
            seatId, 
            seatName, 
            voucherId, 
            isPaid, 
            clientName, 
            email,
            phone, 
            price
        } = req.body;

        await ticketService.create({
            userId,
            showId,
            seatId,
            seatName,
            voucherId,
            isPaid,
            clientName,
            email,
            phone,
            price
        });

        res.status(API_STATUS.OK.status);
        res.send(API_STATUS.OK);
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}

export async function updatePaymentStatus(req, res) {
    try {
        const ticketId = req.params.ticketId;
        const paymentStatus = req.query.paymentStatus;

        await ticketService.updatePaymentStatus(ticketId, paymentStatus);

        res.status(API_STATUS.OK.status);
        res.send(API_STATUS.OK);
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}

export async function successPayment(req, res) {
    try {
        const ticketId = req.params.ticketId;

        await ticketService.updatePaymentStatus(ticketId, true);
        const ticketInfo = await ticketService.getById(ticketId);

        await SendEmail(ticketId);

        res.status(API_STATUS.OK.status);
        res.send(ticketInfo);
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}

export async function drop(req, res) {
    try {
        const ticketId = req.params.ticketId;
        await ticketService.drop(ticketId);

        res.status(API_STATUS.OK.status);
        res.send(API_STATUS.OK);
    } catch (error) {
        res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
        res.send(API_STATUS.INTERNAL_SERVER_ERROR);
    }
}