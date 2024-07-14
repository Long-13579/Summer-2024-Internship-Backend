import * as filmServices from '../services/film.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function getUpComing(req, res) {
  try {
    const upComingFilm = await filmServices.getUpComing();
    res.status(API_STATUS.OK.status);
    res.send(upComingFilm);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getOnCasting(req, res) {
  try {
    const onCastingFilm = await filmServices.getOnCasting();
    res.status(API_STATUS.OK.status);
    res.send(onCastingFilm);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
