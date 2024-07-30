import { checkSchema } from 'express-validator';
import { getById } from '../services/show.js';

const minPayment = 1000;
const minPhoneNumberLength = 9;

const ticketValidator = checkSchema({
    'ticketInfo': {
        isEmpty: { 
            negated: true,
            errorMessage: "Ticket information must be not empty"
        }
    },
    'paymentInfo': {
        isEmpty: { 
            negated: true,
            errorMessage: "Payment information must be not empty"
        }
    },
    'ticketInfo.showId': {
        isInt: {
            errorMessage: 'Show id must be interger',
            bail: true
        },
        isShowExists: {
            custom: async (value) => {
                const showById = await getById(value);
                if (showById === null) {
                    throw new Error('Show does not exists');
                }
                else {
                    return value;
                }
            }
        }
    },
    "ticketInfo.seatData": {
        isString: {
            errorMessage: 'Seat Name must be string'
        }
    },
    'ticketInfo.clientName': {
        isString: {
            errorMessage: 'Client name must be string'
        }
    },
    'ticketInfo.email': {
        isEmail: {
            errorMessage: 'Email is wrong format'
        }
    },
    'ticketInfo.phone': {
        isString: {
            errorMessage: 'Phone number must be string',
            bail: true
        },
        isLength: {
            options: { min: minPhoneNumberLength },
            errorMessage: 'Phone number must be at leat 9 numbers'
        }
    },
    'ticketInfo.price': {
        isInt: {
            options: { min: minPayment },
            errorMessage: 'Price is must be more than 1000'
        }
    },
    'paymentInfo.amount': {
        isInt: {
            options: { min: minPayment },
            errorMessage: 'Payment amount must be more than 1000',
            bail: true
        },
        isEqualTicketPrice: {
            custom: (value, { req }) => {
                const { price } = req.body.ticketInfo;
                if (value !== price) {
                    throw new Error('Amount and Price must be equal');
                }
                else {
                    return value;
                }
            }
        }
    },
    'paymentInfo.description': {
        isString: {
            errorMessage: "Description must be string"
        }
    },
    'paymentInfo.remainTime': {
        isInt: {
            errorMessage: 'Remain time must be interger',
            bail: true
        },
        isGreaterThanZero: {
            custom: (value) => {
                if(value > 0) {
                    return value;
                }
                else {
                    throw new Error('Remain time must be more than 0');
                }
            }
        }
    },
    'paymentInfo.returnUrl': {
        isString: {
            errorMessage: 'Return url must be string'
        }
    }
});

export default ticketValidator;
