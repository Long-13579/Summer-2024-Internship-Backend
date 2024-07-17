import { checkSchema } from 'express-validator';

const minPayment = 1000;
const minPhoneNumberLength = 9;

const ticketValidator = checkSchema({
    'ticketInfo': {
        isEmpty: { negated: true }
    },
    'paymentInfo': {
        isEmpty: { negated: true }
    },
    'ticketInfo.clientName': {
        exists: {
            errorMessage: 'Client name is neccessary'
        },
        isString: {
            errorMessage: 'Client name must be string'
        }
    },
    'ticketInfo.email': {
        exists: {
            errorMessage: 'Email is neccessary'
        },
        isEmail: {
            errorMessage: 'Email is wrong format'
        }
    },
    'ticketInfo.phone': {
        exists: {
            errorMessage: 'Phone number is neccessary'
        },
        isLength: {
            options: { min: minPhoneNumberLength },
            errorMessage: 'Phone number must be at leat 9 numbers'
        }
    },
    'ticketInfo.price': {
        exists: {
            errorMessage: 'Price is neccessary'
        },
        isInt: {
            options: { min: minPayment },
            errorMessage: 'Price is must be more than 1000'
        }
    },
    'paymentInfo.amount': {
        exists: {
            errorMessage: 'Payment amount is neccessary'
        },
        isInt: {
            options: { min: minPayment },
            errorMessage: 'Payment amount must be more than 1000'
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
    'paymentInfo.returnUrl': {
        exists: {
            errorMessage: 'Return url is neccessary'
        }
    }
});

export default ticketValidator;
