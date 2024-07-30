import moment from 'moment';
import { formatToVND } from '../utils/currencyFormat.js';

const HTML_TEMPLATE = async ({
    clientName,
    cinemaName,
    address,
    filmName, 
    screenName, 
    day, 
    time, 
    seatName, 
    price
}) => {

    const formattedTime = moment(time, 'HH:mm:ss').format('HH:mm');
    const formattedDateTime = moment(day).add(formattedTime).format('HH:mm dddd DD/MM/YYYY');
    const formattedPrice = formatToVND(price);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #e8eced;
            font-size: large;
        }
        h2 {
            color: #e8eced;
            font-size: x-large;
        }
        p {
            color: #e8eced;
            font-size: large;
        }
        .ScreenInfo { 
            display: flex; 
            justify-content: space-between;
        }
    </style>
</head>
<body>
    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #0f172a; padding: 20px;">
        <div style="padding: 10px 0; text-align: center; margin-bottom: 20px;">
            <img src="https://res.cloudinary.com/deknjnluw/image/upload/v1721814047/CES_poster/logo.png" alt="">
        </div>
        <div style="padding: 20px;">
            <h2>Hello ${clientName},</h2>
            <p>Thanks you for using my service. </p>
            <p>We are excited to share with you the details of your upcoming film booking:</p>
            <div style="padding: 20px; margin: 20px 0; background: #3960c5; color: #e8eced;">
                <div style="padding: 10px 0; text-align: center;">
                    <h3 style="font-weight: bold; color: #f3ea28; margin: 0; font-size: xx-large;">Ticket information</h3>
                </div>
                <div style="border-top: 1px solid #e8eced; margin: 20px 0;"></div>
                <div>
                    <p><strong>Film Name:</strong> ${filmName}</p>
                    <p><strong>Cinema Name:</strong> ${cinemaName}</p>
                    <p><strong>Address:</strong> ${address}</p>
                </div>
                <div>
                    <p style="margin-bottom: 0;"><strong>Time:</strong> ${formattedDateTime}</p>
                </div>
                <div>
                    <p><strong>Screen Name:</strong> ${screenName}</p>
                </div>
                <div>
                    <p><strong>Seat Name:</strong> ${seatName}</p>
                </div>
                <div style="border-top: 1px solid #e8eced;"></div>
                <div style="margin-top: 10px;">
                    <p style="color: #f3ea28;"><strong>Price:</strong> ${formattedPrice}</p>
                </div>
            </div>
            <div style="text-align: center; padding-top: 20px;">
                <img src="cid:qrcode@ces">      
            </div>
        </div>
    </div>
    <div style="width: 100%; max-width: 600px; text-align: center; padding: 10px 20px; background: linear-gradient(to right, #3960c5, #63369c); margin: 0 auto;">
        <p>&copy; 2024 Cinestar. All rights reserved.</p>
    </div>
</body>
</html>
    `;
}

export default HTML_TEMPLATE;