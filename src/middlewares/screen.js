import * as screenServices from '../services/screen.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateScreenId(req, res, next) {
  try {
    var screenIdRequest;
    //use in update check case
    if (req.previousId != undefined) {
      screenIdRequest =
        req.query.id ||
        req.params.screenId ||
        req.body.screenId ||
        req.query.screenId;
    } else {
      screenIdRequest =
        req.body.id ||
        req.query.id ||
        req.params.screenId ||
        req.body.screenId ||
        req.query.screenId;
    }
    if (screenIdRequest == undefined) {
      req.noScreenId = true;
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
    if (req.body.id != undefined) {
      req.previousId = true;
    }
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
