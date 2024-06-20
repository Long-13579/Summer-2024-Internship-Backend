import * as provinceCityServices from '../services/provinceCity.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await provinceCityServices.add(req.body.name);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function drop(req, res) {
  try {
    await provinceCityServices.drop(req.params.provinceCityId);
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
    const provinceCityId = req.query.id;
    await provinceCityServices.update(provinceCityId, req.body.name);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

//get all province
export async function getAll(req, res) {
  try {
    const allProvinceCityInfor = await provinceCityServices.getAll();
    const unableToGet = allProvinceCityInfor?.length === 0;
    if (unableToGet) {
      res.status(API_STATUS.BAD_REQUEST.status);
      res.senf(API_STATUS.BAD_REQUEST);
      return;
    }
    res.status(API_STATUS.OK.status);
    res.send(allProvinceCityInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

//get all province have cinema
export async function getAllHaveCinema(req, res) {
  try {
    const provinceCityHaveCinemaInfor =
      await provinceCityServices.getAllHaveCinema();
    const unableToGet = provinceCityHaveCinemaInfor?.length === 0;
    if (unableToGet) {
      res.status(API_STATUS.BAD_REQUEST.status);
      res.senf(API_STATUS.BAD_REQUEST);
      return;
    }
    res.status(API_STATUS.OK.status);
    res.send(provinceCityHaveCinemaInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getById(req, res) {
  try {
    const paramsProvinceCityId = req.params.provinceCityId;
    const provinceCityByIdInfor = await provinceCityServices.getById(
      paramsProvinceCityId
    );
    res.status(API_STATUS.OK.status);
    res.send(provinceCityByIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
