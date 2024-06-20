import * as filmServices from '../services/film.js';
import * as cinemaService from '../services/cinema.js';
import { StatusCodes } from 'http-status-codes';
import { ERROR } from '../models/apiStatus.js';

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
    res.status(StatusCodes.OK);
    res.send();
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getAll(req, res) {
  try {
    const allFilmInfor = await filmServices.getAll();
    const unableToGet = allFilmInfor?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(allFilmInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByIdFilmDetail(req, res) {
  try {
    const paramsFilmId = req.params.filmId;
    const filmByIdInfor = await filmServices.getByIdFilmDetail(paramsFilmId);
    const invalidFilmId = filmByIdInfor?.length === 0;

    if (invalidFilmId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('film', 'film', paramsFilmId));
      return;
    }

    res.status(StatusCodes.OK);
    res.send(filmByIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByIdAdmin(req, res) {
  try {
    const paramsFilmId = req.params.filmId;
    const filmByIdInfor = await filmServices.getByIdAdmin(paramsFilmId);
    const invalidFilmId = filmByIdInfor?.length === 0;

    if (invalidFilmId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('film', 'film', paramsFilmId));
      return;
    }

    res.status(StatusCodes.OK);
    res.send(filmByIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getUpComing(req, res) {
  try {
    const upComingFilm = await filmServices.getUpComing();
    const unableToGet = upComingFilm?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(upComingFilm);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getOnCasting(req, res) {
  try {
    const onCastingFilm = await filmServices.getOnCasting();
    const unableToGet = onCastingFilm?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(onCastingFilm);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByCinemaId(req, res, next) {
  try {
    const queryCinemaId = req.query.cinemaId;
    if (!queryCinemaId) {
      next();
      return;
    }
    const cinemaInfor = await cinemaService.getById(queryCinemaId);
    const invalidCinemaId = cinemaInfor?.length === 0;
    if (invalidCinemaId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('cinema', 'cinema', queryCinemaId));
      return;
    }
    const filmByCinemaIdInfor = await filmServices.getByCinemaId(queryCinemaId);
    const noFilmByCinemaId = filmByCinemaIdInfor?.length === 0;
    if (noFilmByCinemaId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('film', 'cinema', queryCinemaId));
    }
    res.status(StatusCodes.OK);
    res.send(filmByCinemaIdInfor);
  } catch {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}
