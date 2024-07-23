import { checkSchema } from 'express-validator';
import { getById } from '../services/provinceCity.js'

const cinemaValidator = checkSchema({
    name: {
        isString: {
            errorMessage: 'Name must be string'
        }
    },
    address: {
        isString: {
            errorMessage: 'Address must be string'
        }
    },
    provinceCityId: {
        isInt: {
            errorMessage: 'Province city id must be integer',
            bail: true
        },
        isProvinceExists: {
            custom: async (value) => {
                const provinceCity = await getById(value);

                if (provinceCity === null) {
                    throw new Error('Province city is not exists');
                }
                else {
                    return value;
                }
            }
        }
    }
});

export default cinemaValidator;