import * as filmServices from '../services/film.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function getFilmForUser(req, res) {
  try {
    const filmsInfor = await filmServices.getFilmForUser(req.query);
    res.status(API_STATUS.OK.status);
    res.send(filmsInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
