import { checkSchema } from 'express-validator';
import { SCREEN_SIZE_LIST } from '../constants/enumScreen.js'; 
import { getById } from '../services/cinema.js';

const screenValidator = checkSchema({
    cinemaId: {
        isInt: {
            errorMessage: 'Cinema Id must be integer',
            bail: true
        },
        isCinemaExists: {
            custom: async (value) => {
                const cinema = await getById(value);

                if (cinema === null) {
                    throw new Error('Cinema is not exists');
                }
                else {
                    return value;
                }
            }
        }
    },
    name: {
        isString: {
            errorMessage: 'Screen name must be string'
        }
    },
    size: {
        isIn: {
            options: [SCREEN_SIZE_LIST],
            errorMessage: 'Value must be in enum'
        }
    }
});

export default screenValidator;