import * as cinemaServices from '../services/cinema.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function getCinema(req, res) {
  try {
    const cinemasInfor = await cinemaServices.getCinema(req.query);
    res.status(API_STATUS.OK);
    res.send(cinemasInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function add(req, res) {
  try {
    const { name, address, provinceCityId } = req.body;
    await cinemaServices.add({ name, address, provinceCityId });
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
    const { id, name, address, provinceCityId } = req.body;
    await cinemaServices.update({ id, name, address, provinceCityId });
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
