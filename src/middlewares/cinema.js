import * as cinemaServices from '../services/cinema.js';
import { API_STATUS } from '../models/apiStatus.js';
import { getNotFoundErrorMessage } from '../utils/getErrorMessage.js';

export async function validateCinemaId(req, res, next) {
  try {
    const cinemaIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.cinemaId ||
      req.body.cinemaId ||
      req.query.cinemaId;
    

    const cinemaByIdInfor = await cinemaServices.getById(cinemaIdRequest);
    if (cinemaByIdInfor === null) {
      const errorObj = {
        model: 'cinema',
        modelQuery: 'cinema',
        modelQueryId: cinemaIdRequest,
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
