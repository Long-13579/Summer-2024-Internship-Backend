import * as showServices from '../services/show.js';
import { StatusCodes } from 'http-status-codes';
import { ERROR, OK } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await showServices.add(
      req.body.filmId,
      req.body.screenId,
      req.body.timeStart,
      req.body.dateStart,
      req.body.price,
      req.body.seatMatrix
    );
    res.status(StatusCodes.OK);
    res.send(OK);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function update(req, res) {
  try {
    const showId = req.body.id;
    const showByIdInfor = await showServices.getById(showId);
    const invalidId = showByIdInfor?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('show', ' show', showId));
      return;
    }

    await showServices.update(
      showId,
      req.body.filmId,
      req.body.screenId,
      req.body.timeStart,
      req.body.dateStart,
      req.body.price,
      req.body.seatMatrix
    );
    res.status(StatusCodes.OK);
    res.send(OK);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getById(req, res) {
  try {
    const showId = req.params.showId;
    console.log(showId);
    const showByIdInfor = await showServices.getById(showId);
    const invalidId = showByIdInfor?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('show', ' show', showId));
      return;
    }
    res.status(StatusCodes.OK);
    res.send(showByIdInfor);
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
    const showByCinemaIdInfor = await showServices.getByCinemaId(queryCinemaId);
    const invalidCinemaId = showByCinemaIdInfor?.length === 0;
    if (invalidCinemaId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('show', 'cinema', queryCinemaId));
      return;
    }
    res.status(StatusCodes.OK);
    res.send(showByCinemaIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByFilmIdAdmin(req, res, next) {
  try {
    const queryFilmId = req.query.filmId;
    if (!queryFilmId) {
      next();
      return;
    }

    const showByFilmIdInfor = await showServices.getByFilmIdAdmin(queryFilmId);
    const invalidFilmId = showByFilmIdInfor?.length === 0;
    if (invalidFilmId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('show', 'film', queryFilmId));
      return;
    }

    res.status(StatusCodes.OK);
    res.send(showByFilmIdInfor);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByFilmIdFilmDetail(req, res, next) {
  try {
    const queryFilmId = req.query.filmId;
    const queryProvinceCityId = req.query.provinceId;
    const queryDateStart = req.query.date;
    if (!(queryFilmId && queryProvinceCityId && queryDateStart)) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }

    const showByFilmIdInfor = await showServices.getByFilmIdFilmDetail(
      queryFilmId,
      queryDateStart,
      queryProvinceCityId
    );
    const invalidFilmId = showByFilmIdInfor?.length === 0;
    if (invalidFilmId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('show', 'film', queryFilmId));
      return;
    }

    res.status(StatusCodes.OK);
    res.send(showByFilmIdInfor);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByScreenId(req, res, next) {
  try {
    const queryScreenId = req.query.screenId;
    if (!queryScreenId) {
      next();
      return;
    }

    const showByScreenIdInfor = await showServices.getByScreenId(queryScreenId);
    const invalidScreenId = showByScreenIdInfor?.length === 0;
    if (invalidScreenId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('show', 'screen', queryScreenId));
      return;
    }

    res.status(StatusCodes.OK);
    res.send(showByScreenIdInfor);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getAll(req, res) {
  try {
    const allShowInfor = await showServices.getAll();
    const unableToGet = allShowInfor?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(allShowInfor);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}
