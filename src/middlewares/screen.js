import * as screenServices from '../services/screen.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateScreenId(req, res, next) {
  try {
    const screenIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.screenId ||
      req.body.screenId ||
      req.query.screenId;

    if (screenIdRequest == undefined) {
      req.noscreenId = true;
      next();
      return;
    }

    const screenByIdInfor = await screenServices.getById(screenIdRequest);
    if (screenByIdInfor == null) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage(
          'screen',
          'screen',
          screenIdRequest
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
