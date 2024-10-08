import * as cinemaServices from '../services/cinema.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function getCinemaForAdmin(req, res) {
  try {
    const cinemasInfor = await cinemaServices.getCinemaForAdmin(req.query);
    res.status(API_STATUS.OK.status);
    res.send(cinemasInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getCinemaForUser(req, res) {
  try {
    const cinemaByIdInfor = await cinemaServices.getCinemaForUser(req.query);
    res.status(API_STATUS.OK.status);
    res.send(cinemaByIdInfor);
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

export async function deactivateCinema(req, res) {
  try {
    const paramsCinemaId = req.params.cinemaId;
    await cinemaServices.deactivate(paramsCinemaId);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
