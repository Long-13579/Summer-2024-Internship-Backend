import * as showServices from '../services/show.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function deactivateShow(req, res) {
  try {
    await showServices.deactivate(req.params.showId);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getShowForAdmin(req, res) {
  try {
    const showInfor = await showServices.getShowForAdmin(req.query);
    res.status(API_STATUS.OK.status);
    res.send(showInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByFilmIdDateStartProvinceCityId(req, res) {
  try {
    const showInfor = await showServices.getByFilmIdDateStartProvinceCityId(
      req.query
    );
    res.status(API_STATUS.OK.status);
    res.send(showInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getShowForUser(req, res) {
  try {
    const showInfor = await showServices.getShowForUser(req.query);
    res.status(API_STATUS.OK.status);
    res.send(showInfor);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function add(req, res) {
  try {
    const { filmId, screenId, timeStart, dateStart, price } = req.body;
    await showServices.add({ filmId, screenId, timeStart, dateStart, price });
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
    const { id, filmId, screenId, timeStart, dateStart, price } = req.body;
    await showServices.update({
      id,
      filmId,
      screenId,
      timeStart,
      dateStart,
      price,
    });
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
