import { db } from '../models/index.js';
const ticket = db.ticket;

export async function getAll() {
    return await ticket.findAll();
}

export async function getById(ticketId) {
    return await ticket.findOne({
        where: {id: ticketId}
    });
}

export async function updateTicketPayment(ticketId, isPay) {
    await ticket.update({isPay: isPay}, {
        where: {id: ticketId}
    });
}

export async function create({userId, showId, seatId, seatName, voucherId, isPay, clientName, email, phone, price}) {
    await ticket.create({
        userId: userId, 
        showId: showId, 
        seatId: seatId, 
        seatName: seatName, 
        voucherId: voucherId, 
        isPay: isPay, 
        clientName: clientName, 
        email: email, 
        phone: phone, 
        price: price
    });
}

export async function drop(ticketId) {
    await ticket.destroy({
        where: {id: ticketId}
    });
}

export async function getByUserId(userId) {
    return await ticket.findAll({
        where: {userId: userId}
    });
}