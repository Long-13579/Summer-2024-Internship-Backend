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

export async function getFilmForUser(req, res) {
  try {
    const allFilmInfor = await filmServices.getFilmForUser(req.query);
    res.status(API_STATUS.OK.status);
    res.send(allFilmInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getFilmAdmin(req, res) {
  try {
    const filmsInfor = await filmServices.getFilmAdmin(req.query);
    res.status(API_STATUS.OK.status);
    res.send(filmsInfor);
  } catch (error) {
    res.status(API.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function add(req, res) {
  try {
    const {
      filmName,
      duration,
      description,
      dateStart,
      dateEnd,
      director,
      actor,
      subtitle,
      dubbing,
      language,
      poster,
      trailer,
      format,
      ageRate,
      category,
    } = req.body;
    await filmServices.add({
      filmName,
      duration,
      description,
      dateStart,
      dateEnd,
      director,
      actor,
      subtitle,
      dubbing,
      language,
      poster,
      trailer,
      format,
      ageRate,
      category,
    });
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function update(req, res) {
  try {
    const {
      id,
      filmName,
      duration,
      description,
      dateStart,
      dateEnd,
      director,
      actor,
      subtitle,
      dubbing,
      language,
      poster,
      trailer,
      format,
      ageRate,
      category,
    } = req.body;
    await filmServices.update({
      id,
      filmName,
      duration,
      description,
      dateStart,
      dateEnd,
      director,
      actor,
      subtitle,
      dubbing,
      language,
      poster,
      trailer,
      format,
      ageRate,
      category,
    });
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function deactivateFilm(req, res) {
  try {
    await filmServices.deactivate(req.params.filmId);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
