import { API_STATUS } from '../models/apiStatus.js';
import { StatusCodes } from 'http-status-codes';
import * as showRepo from '../repositories/show.js';

export async function validateDateFilm(req, res, next) {
  try {
    const dateCheck = req.body.dateStart || req.query.dateStart;
    const filmIdCheck = req.body.filmId || req.query.filmId;
    if (dateCheck == undefined) {
      req.noDate = true;
      next();
      return;
    }
    const invalidShowByDateInfor = await showRepo.checkDateFilmIdToAddShow({
      dateStart: dateCheck,
      filmId: filmIdCheck,
    });
    if (invalidShowByDateInfor) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(
        "show's dateStart is not appropriate to Film's dateStart, dateEnd"
      );
      return;
    }
    const validPreviousShowTime = await showRepo.checkPreviousTimeStart(
      req.body
    );
    const validPostShowTime = await showRepo.checkPostTimeStart(req.body);
    if (!validPreviousShowTime || !validPostShowTime) {
      res.status(StatusCodes.NOT_FOUND);
      res.send("show's timeStart violates other show's timeStart");
      return;
    }
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
