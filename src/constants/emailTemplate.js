const HTML_TEMPLATE = ({
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
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>NodeMailer Email Template</title>
            <style>
            .container {
                width: 100%;
                height: 100%;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .email {
                width: 80%;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
            }
            .email-header {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }
            .email-body {
                padding: 20px;
            }
            .email-footer {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }
            </style>
        </head>
        <body>
            <div class="container">
            <div class="email">
                <div class="email-header">
                <h1>Your ticket</h1>
                </div>
                <div class="email-body">
                <p>Name: ${clientName}</p>
                <p>Cinema: ${cinemaName}</p>
                <p>Address: ${address}</p>
                <p>Film name: ${filmName}</p>
                <p>Screen: ${screenName}</p>
                <p>Day: ${day}</p>
                <p>Time: ${time}</p>
                <p>Seats: ${seatName}</p>
                <p>Price: ${price}</p>
                </div>
                <div class="email-footer">
                <p>Thank you for booking</p>
                </div>
            </div>
            </div>
        </body>
        </html>
    `;
}

export default HTML_TEMPLATE;