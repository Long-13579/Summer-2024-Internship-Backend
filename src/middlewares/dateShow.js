import { API_STATUS } from '../models/apiStatus.js';
import * as showServices from '../repositories/show.js';

export async function validateDateFilm(req, res, next) {
  try {
    const dateCheck = req.body.date || req.query.date;
    if (dateCheck == undefined) {
      req.noDate = true;
      next();
      return;
    }

    const showByDateInfor = await showServices.getByDate(dateCheck);
    const noShowByDate = showByDateInfor?.length === 0;
    if (noShowByDate) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(API_STATUS.NOT_FOUND.getErrorMessage('film', 'date', dateCheck));
      return;
    }
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
