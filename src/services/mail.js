import transporter from "../models/mail.js";
import * as ticketRepository from '../repositories/ticket.js';
import HTML_TEMPLATE from '../constants/emailTemplate.js';
import { changeSeatDataToSeatName } from "../utils/changeSeatDataToSeatName.js";
import QRCode from 'qrcode';

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

    const {
        clientName, 
        seatData, 
        price,
        email
    } = ticketInfo;
    const seatName = changeSeatDataToSeatName(seatData);

    const {
        dateStart: day, 
        timeStart: time
    } = showInfo;

    const { name: screenName } = screenInfo;

    const {
        name: cinemaName, 
        address
    } = cinemaInfo;
    
    const { filmName } = filmInfo;

    const qrCodeErrorCorrectionLevel = 'H';
    const qrCodeWidth = 250;
    const qrCodeMargin = 1;
    
    const emailContent = await HTML_TEMPLATE({
        clientName,
        cinemaName,
        address,
        filmName,
        screenName,
        day,
        time,
        seatName,
        price
    });
    
    const qrCode = await QRCode.toDataURL(
        ticketId.toString(),
        {
            errorCorrectionLevel: qrCodeErrorCorrectionLevel,
            width: qrCodeWidth,
            margin: qrCodeMargin,
        }
    );

    const qrCodeAttachment = {
        filename: "qrCode.png",
        cid: "qrcode@ces",
        contentType: "image/png",
        contentDesposition: "inline",
        path: qrCode,
    };

    const message = {
        from: process.env.USER_MAIL,
        to: email,
        subject: 'Booking ticket information',
        html: emailContent,
        attachments: [
            qrCodeAttachment
        ]
    };
    
    await transporter.sendMail(message);
}