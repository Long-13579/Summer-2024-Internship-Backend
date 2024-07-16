import * as showServices from '../services/show.js';
import { API_STATUS } from '../models/apiStatus.js';
import { getNotFoundErrorMessage } from '../utils/getErrorMessage.js';

export async function validateShowId(req, res, next) {
  try {
    const showIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.showId ||
      req.body.showId ||
      req.query.showId;

    const showByIdInfor = await showServices.getById(showIdRequest);
    if (showByIdInfor === null) {
      const errorObj = {
        model: 'show',
        modelQuery: 'show',
        modelQueryId: showIdRequest,
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
