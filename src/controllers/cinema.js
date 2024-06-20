import * as cinemaServices from '../services/cinema.js';
import { StatusCodes } from 'http-status-codes';
import { ERROR } from '../models/apiStatus.js';

export async function getAll(req, res) {
  try {
    const allCinemaInfor = await cinemaServices.getAll();
    const unableToGet = allCinemaInfor?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(allCinemaInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getById(req, res) {
  try {
    const paramsCinemaId = req.params.cinemaId;
    const cinemaByIdInfor = await cinemaServices.getById(paramsCinemaId);
    const invalidCinemaId = cinemaByIdInfor?.length === 0;

    if (invalidCinemaId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('cinema', 'cinema', paramsCinemaId));
      return;
    }

    res.status(StatusCodes.OK);
    res.send(cinemaByIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByProvinceCityId(req, res, next) {
  try {
    const provinceCityId = req.query.provinceCityId;
    if (!provinceCityId) {
      next();
      return;
    }
    const cinemaByProvinceCityIdInfor =
      await cinemaServices.getByProvinceCityId(provinceCityId);
    const invalidProvinceCityId = cinemaByProvinceCityIdInfor?.length === 0;
    if (invalidProvinceCityId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('cinema', 'provinceCity', provinceCityId));
      return;
    }
    res.status(StatusCodes.OK);
    res.send(cinemaByProvinceCityIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function add(req, res) {
  try {
    await cinemaServices.add(
      req.body.name,
      req.body.address,
      req.body.provinceCityId
    );
    res.status(StatusCodes.OK);
    res.send();
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function update(req, res) {
  try {
    const cinemaId = req.body.id;
    const cinemaByIdInfor = await cinemaServices.getById(cinemaId);
    const invalidId = cinemaByIdInfor?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('cinema', 'cinema', cinemaId));
      return;
    }
    await cinemaServices.update(
      req.body.id,
      req.body.name,
      req.body.address,
      req.body.provinceCity
    );
    res.status(StatusCodes.OK);
    res.send();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function drop(req, res) {
  try {
    const paramsCinemaId = req.params.cinemaId;
    const cinemaById = await cinemaServices.getById(paramsCinemaId);
    const invalidId = cinemaById?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    await cinemaServices.drop(paramsCinemaId);
    res.status(StatusCodes.OK);
    res.send();
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}
