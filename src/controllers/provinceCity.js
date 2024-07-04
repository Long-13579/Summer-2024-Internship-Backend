import * as provinceCityServices from '../services/provinceCity.js';
import { StatusCodes } from 'http-status-codes';
import { ERROR, OK } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await provinceCityServices.add(req.body.name);
    res.status(StatusCodes.OK);
    res.send(OK);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function drop(req, res) {
  try {
    await provinceCityServices.drop(req.params.provinceCityId);
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
    const provinceCityId = req.query.id;
    const provinceCityByIdInfor = await provinceCityServices.getById(
      provinceCityId
    );
    const invalidId = provinceCityByIdInfor?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('provinceCity', 'provinceCity', provinceCityId));
      return;
    }
    res.status(StatusCodes.OK);
    res.send(provinceCityByIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

//get all province
export async function getAll(req, res) {
  try {
    const allProvinceCityInfor = await provinceCityServices.getAll();
    const unableToGet = allProvinceCityInfor?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.senf(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(allProvinceCityInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(OK);
  }
}

//get all province have cinema
export async function getAllHaveCinema(req, res) {
  try {
    const provinceCityHaveCinemaInfor =
      await provinceCityServices.getAllHaveCinema();
    const unableToGet = provinceCityHaveCinemaInfor?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.senf(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(provinceCityHaveCinemaInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(OK);
  }
}

export async function getById(req, res) {
  try {
    const paramsProvinceCityId = req.params.provinceId;
    const provinceCityByIdInfor = await provinceCityServices.getById(
      paramsProvinceCityId
    );
    if (provinceCityByIdInfor == null) {
      res.status(404);
      res.send(
        ERROR[404]('provinceCity', 'provinceCity', paramsProvinceCityId)
      );
      return;
    }
    res.status(StatusCodes.OK);
    res.send(provinceCityByIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}
