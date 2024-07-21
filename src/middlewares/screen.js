import * as screenServices from '../services/screen.js';
import { API_STATUS } from '../models/apiStatus.js';
import { getNotFoundErrorMessage } from '../utils/getErrorMessage.js';

export async function validateScreenId(req, res, next) {
  try {
    const screenIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.screenId ||
      req.body.screenId ||
      req.query.screenId;

    const screenByIdInfor = await screenServices.getById(screenIdRequest);
    if (screenByIdInfor === null) {
      const errorObj = {
        model: 'screen',
        modelQuery: 'screen',
        modelQueryId: screenIdRequest,
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
