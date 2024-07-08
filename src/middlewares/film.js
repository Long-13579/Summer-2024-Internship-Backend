import * as filmServices from '../services/film.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateFilmId(req, res, next) {
  try {
    const filmIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.filmId ||
      req.body.filmId ||
      req.query.filmId;
    if (filmIdRequest == undefined) {
      req.noFilmId = true;
      next();
      return;
    }

    const filmByIdInfor = await filmServices.getByIdAdmin(filmIdRequest);
    if (filmByIdInfor == null) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('film', 'film', filmIdRequest)
      );
      return;
    }
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
