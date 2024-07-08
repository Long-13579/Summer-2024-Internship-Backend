import * as filmServices from '../services/film.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await filmServices.add(
      req.body.filmName,
      req.body.duration,
      req.body.description,
      req.body.dateStart,
      req.body.dateEnd,
      req.body.director,
      req.body.actor,
      req.body.subtitle,
      req.body.dubbing,
      req.body.language,
      req.body.poster,
      req.body.trailer,
      req.body.format,
      req.body.ageRate,
      req.body.category
    );
    res.status(API_STATUS.OK.status);
    res.send(OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getAll(req, res) {
  try {
    const allFilmInfor = await filmServices.getAll();
    res.status(API_STATUS.OK.status);
    res.send(allFilmInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByIdFilmDetail(req, res) {
  try {
    const paramsFilmId = req.params.filmId;
    const filmByIdInfor = await filmServices.getByIdFilmDetail(paramsFilmId);
    res.status(API_STATUS.OK.status);
    res.send(filmByIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByIdAdmin(req, res) {
  try {
    const paramsFilmId = req.params.filmId;
    const filmByIdInfor = await filmServices.getByIdAdmin(paramsFilmId);
    if (filmByIdInfor == null) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('film', 'film', paramsFilmId)
      );
      return;
    }

    res.status(API_STATUS.OK.status);
    res.send(filmByIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getAllAdmin(req, res) {
  try {
    const allFilmInfor = await filmServices.getAllAdmin();
    res.status(API_STATUS.OK.status);
    res.send(allFilmInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

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

export async function getByCinemaId(req, res, next) {
  try {
    const queryCinemaId = req.query.cinemaId;
    if (req.noCinemaId) {
      next();
      return;
    }
    const filmByCinemaIdInfor = await filmServices.getByCinemaId(queryCinemaId);
    const noFilmByCinemaId = filmByCinemaIdInfor?.length === 0;
    if (noFilmByCinemaId) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('film', 'cinema', queryCinemaId)
      );
    }
    res.status(API_STATUS.OK.status);
    res.send(filmByCinemaIdInfor);
  } catch {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
