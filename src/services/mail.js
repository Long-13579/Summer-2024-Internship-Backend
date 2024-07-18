import transporter from "../models/mail.js";
import * as ticketRepository from '../repositories/ticket.js';
import HTML_TEMPLATE from '../constants/emailTemplate.js'

export async function SendEmail(ticketId) {
    const ticketInfo = await ticketRepository.getById(ticketId);
    const showInfo = await ticketInfo.getShow({
        attributes: {
            exclude: ['seatMatrix']
        }
    });
    const screenInfo = await showInfo.getScreen();
    const cinemaInfo = await screenInfo.getCinema();
    const filmInfo = await showInfo.getFilm();
    
    const emailContent = HTML_TEMPLATE({
        clientName: ticketInfo.clientName,
        cinemaName: cinemaInfo.name,
        address: cinemaInfo.address,
        filmName: filmInfo.filmName,
        screenName: screenInfo.name,
        day: showInfo.dateStart,
        time: showInfo.timeStart,
        seatName: ticketInfo.seatName,
        price: ticketInfo.price
    });

    const message = {
        from: 'cesinternship2024@gmail.com',
        to: ticketInfo.email,
        subject: 'Booking ticket information',
        html: emailContent
    };
    
    await transporter.sendMail(message);
}