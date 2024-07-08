import * as showServices from '../services/show.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateShowId(req, res, next) {
  try {
    const showIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.showId ||
      req.body.showId ||
      req.query.showId;
    if (showIdRequest == undefined) {
      req.noshowId = true;
      next();
      return;
    }

    const showByIdInfor = await showServices.getById(showIdRequest);
    if (showByIdInfor == null) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('show', 'show', showIdRequest)
      );
      return;
    }
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
