import * as cinemaServices from '../services/cinema.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateCinemaId(req, res, next) {
  try {
    const cinemaIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.cinemaId ||
      req.body.cinemaId ||
      req.query.cinemaId;
    if (cinemaIdRequest == undefined) {
      req.noCinemaId = true;
      next();
      return;
    }

    const cinemaByIdInfor = await cinemaServices.getById(cinemaIdRequest);
    if (cinemaByIdInfor == null) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage(
          'cinema',
          'cinema',
          cinemaIdRequest
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
