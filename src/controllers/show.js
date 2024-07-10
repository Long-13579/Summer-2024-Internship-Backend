import * as showServices from '../services/show.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await showServices.add(
      req.body.filmId,
      req.body.screenId,
      req.body.timeStart,
      req.body.dateStart,
      req.body.price
    );
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function update(req, res) {
  try {
    const showId = req.body.id;
    await showServices.update(
      showId,
      req.body.filmId,
      req.body.screenId,
      req.body.timeStart,
      req.body.dateStart,
      req.body.price
    );
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getById(req, res) {
  try {
    const showId = req.params.showId;
    const showByIdInfor = await showServices.getById(showId);
    res.status(API_STATUS.OK.status);
    res.send(showByIdInfor);
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
    const showByCinemaIdInfor = await showServices.getByCinemaId(queryCinemaId);
    const invalidCinemaId = showByCinemaIdInfor?.length === 0;
    if (invalidCinemaId) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('show', 'cinema', queryCinemaId)
      );
      return;
    }
    res.status(API_STATUS.OK.status);
    res.send(showByCinemaIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByFilmIdAdmin(req, res, next) {
  try {
    const queryFilmId = req.query.filmId;
    if (req.noFilmId) {
      next();
      return;
    }

    const showByFilmIdInfor = await showServices.getByFilmIdAdmin(queryFilmId);
    const noShowByFilmId = showByFilmIdInfor?.length === 0;
    if (noShowByFilmId) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('show', 'film', queryFilmId)
      );
      return;
    }

    res.status(API_STATUS.OK.status);
    res.send(showByFilmIdInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByFilmIdFilmDetail(req, res, next) {
  try {
    const queryFilmId = req.query.filmId;
    const queryProvinceCityId = req.query.provinceCityId;
    const queryDateStart = req.query.date;
    //console.log(queryFilmId + ' ' + queryProvinceCityId + ' ' + queryDateStart);
    const showByFilmIdInfor = await showServices.getByFilmIdFilmDetail(
      queryFilmId,
      queryDateStart,
      queryProvinceCityId
    );
    const noShowByFilmId = showByFilmIdInfor?.length === 0;
    if (noShowByFilmId) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('show', 'film', queryFilmId)
      );
      return;
    }

    res.status(API_STATUS.OK.status);
    res.send(showByFilmIdInfor);
  } catch (error) {
    console.log(error);
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByScreenId(req, res, next) {
  try {
    const queryScreenId = req.query.screenId;
    if (req.noScreenId) {
      next();
      return;
    }

    const showByScreenIdInfor = await showServices.getByScreenId(queryScreenId);
    const noShowByScreenId = showByScreenIdInfor?.length === 0;
    if (noShowByScreenId) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('show', 'screen', queryScreenId)
      );
      return;
    }

    res.status(API_STATUS.OK.status);
    res.send(showByScreenIdInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getAll(req, res) {
  try {
    const allShowInfor = await showServices.getAll();
    const noShow = allShowInfor?.length === 0;
    if (noShow) {
      res.status(API_STATUS.BAD_REQUEST.status);
      res.send(API.API_STATUS.BAD_REQUEST);
      return;
    }
    res.status(API_STATUS.OK.status);
    res.send(allShowInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
