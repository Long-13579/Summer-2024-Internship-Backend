import * as provinceCityServices from '../services/provinceCity.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateProvinceCityId(req, res, next) {
  try {
    const provinceCityIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.provinceCityId ||
      req.body.provinceCityId ||
      req.query.provinceCityId;
    if (provinceCityIdRequest == undefined) {
      req.noProvinceCityId = true;
      next();
      return;
    }

    const provinceCityByIdInfor = await provinceCityServices.getById(
      provinceCityIdRequest
    );
    if (provinceCityByIdInfor == null) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage(
          'provinceCity',
          'provinceCity',
          provinceCityIdRequest
        )
      );
      return;
    }
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
