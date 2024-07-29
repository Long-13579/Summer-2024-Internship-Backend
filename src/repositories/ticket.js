import { db } from '../models/index.js';
const ticket = db.ticket;

export async function getAll() {
    return await ticket.findAll({
        where: {
            isPaid: true
        }
    });
}

export async function getById(ticketId) {
    return await ticket.findOne({
        where: {
            id: ticketId
        }
    });
}

export async function updateTicketPayment(ticketId, isPaid) {
    await ticket.update(
        {
            isPaid: isPaid
        },
        {
            where: {
                id: ticketId
            }
        }
    );
}

export async function create(ticketInfo) {
    return await ticket.create(ticketInfo);
}

export async function drop(ticketId) {
    await ticket.destroy({
        where: {
            id: ticketId
        }
    });
}

export async function getByUserId(userId) {
    return await ticket.findAll({
        where: {
            userId: userId,
            isPaid: true
        }
    });
}