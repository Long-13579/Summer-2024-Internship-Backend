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

export async function deactive(req, res) {
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

export async function getShowForUser(req, res) {
  try {
    const showInfor = await showServices.getByFilmIdDateStartProvinceCityId(
      req.query
    );
    console.log(JSON.stringify(showInfor, null, 2));
    res.status(API_STATUS.OK.status);
    res.send(showInfor);
  } catch (error) {
    console.log(error);
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getShowById(req, res) {
  try {
    const show = await showServices.getById(req.params.showId);
    res.status(API_STATUS.OK.status);
    res.send(show);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}