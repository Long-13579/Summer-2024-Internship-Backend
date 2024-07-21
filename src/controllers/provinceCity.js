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
    await provinceCityServices.update(req.query.id, req.body.name);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

//get all province admin
export async function getProvinceCityForAdmin(req, res) {
  try {
    const provinceCityForAdmin =
      await provinceCityServices.getProvinceCityForAdmin(req.query);
    res.status(API_STATUS.OK.status);
    res.send(provinceCityForAdmin);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

//get all province have cinema user
export async function getProvinceCityForUser(req, res) {
  try {
    const provinceCityForUser =
      await provinceCityServices.getProvinceCityForUser(req.query);
    res.status(API_STATUS.OK.status);
    res.send(provinceCityForUser);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
