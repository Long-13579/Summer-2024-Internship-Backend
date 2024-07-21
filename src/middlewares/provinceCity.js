import * as provinceCityServices from '../services/provinceCity.js';
import { getNotFoundErrorMessage } from '../utils/getErrorMessage.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateProvinceCityId(req, res, next) {
  try {
    const provinceCityIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.provinceCityId ||
      req.body.provinceCityId ||
      req.query.provinceCityId;

    const provinceCityByIdInfor = await provinceCityServices.getById(
      provinceCityIdRequest
    );
    if (provinceCityByIdInfor === null) {
      const errorObj = {
        model: 'provinceCity',
        modelQuery: 'provinceCity',
        modelQueryId: provinceCityIdRequest,
      };
      const errorNotFound = getNotFoundErrorMessage(errorObj);
      res.status(errorNotFound.status);
      res.send(errorNotFound);
      return;
    }
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
