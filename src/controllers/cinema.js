import * as cinemaServices from '../services/cinema.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function getAll(req, res) {
  try {
    const allCinemaInfor = await cinemaServices.getAll();
    res.status(API_STATUS.OK.status);
    res.send(allCinemaInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getById(req, res) {
  try {
    const paramsCinemaId = req.params.cinemaId;
    const cinemaByIdInfor = await cinemaServices.getById(paramsCinemaId);
    res.status(API_STATUS.OK.status);
    res.send(cinemaByIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByProvinceCityId(req, res, next) {
  try {
    if (req.noProvinceCityId) {
      next();
      return;
    }
    const cinemaByProvinceCityIdInfor =
      await cinemaServices.getByProvinceCityId(req.query.provinceCityId);
    res.status(API_STATUS.OK.status);
    res.send(cinemaByProvinceCityIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function add(req, res) {
  try {
    await cinemaServices.add(
      req.body.name,
      req.body.address,
      req.body.provinceCityId
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
    await cinemaServices.update(
      req.body.id,
      req.body.name,
      req.body.address,
      req.body.provinceCity
    );
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function drop(req, res) {
  try {
    const paramsCinemaId = req.params.cinemaId;
    await cinemaServices.drop(paramsCinemaId);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByIdAdmin(req, res){
  try {
    const cinemaByIdInfor = await cinemaServices.getByIdAdmin(req.params.cinemaId);
    res.status(API_STATUS.OK.status);
    res.send(cinemaByIdInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}