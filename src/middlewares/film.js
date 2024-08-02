import * as filmServices from '../services/film.js';
import { getNotFoundErrorMessage } from '../utils/getErrorMessage.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function validateFilmId(req, res, next) {
  try {
    const filmIdRequest =
      req.body.id ||
      req.query.id ||
      req.params.filmId ||
      req.body.filmId ||
      req.query.filmId;

    const validFilm = await filmServices.getByIdForAdmin(filmIdRequest);
    if (!validFilm) {
      const errorObj = {
        model: 'film',
        modelQuery: 'film',
        modelQueryId: filmIdRequest,
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
