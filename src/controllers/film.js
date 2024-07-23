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
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

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

export async function getUpComing(req, res) {
  try {
    const upComingFilm = await filmServices.getUpComing();
    res.status(API_STATUS.OK.status);
    res.send(upComingFilm);
  } catch (error) {
    console.log(error);
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

export async function getFilmUser(req, res) {
  try {
    const filmsInfor = await filmServices.getFilmForUser(req.query);
    res.status(API_STATUS.OK.status);
    res.send(filmsInfor);
  } catch (error) {
    console.log(error);
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
