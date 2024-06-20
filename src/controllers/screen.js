import * as screenServices from '../services/screen.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await screenServices.add(req.body.seatMatrix, req.body.cinemaId);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getByCinemaId(req, res, next) {
  try {
    if (req.noCinemaId) {
      next();
      return;
    }
    const screenByCinemaIdInfor = await screenServices.getByCinemaId(
      queryCinemaId
    );
    if (screenByCinemaIdInfor == null) {
      res.status(API_STATUS.NOT_FOUND.status);
      res.send(
        API_STATUS.NOT_FOUND.getErrorMessage('screen', 'cinema', queryCinemaId)
      );
      return;
    }
    res.status(API_STATUS.OK.status);
    res.send(screenByCinemaIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getAll(req, res) {
  try {
    const allScreenInfor = await screenServices.getAll();
    const unableToGet = allScreenInfor?.length === 0;
    if (unableToGet) {
      res.status(API_STATUS.BAD_REQUEST.status);
      res.send(API_STATUS.BAD_REQUEST);
      return;
    }
    res.status(API_STATUS.OK.status);
    res.send(allScreenInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getById(req, res) {
  try {
    const paramsScreenId = req.params.screenId;
    const screenByIdInfor = await screenServices.getById(paramsScreenId);
    res.status(API_STATUS.OK.status);
    res.send(screenByIdInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function update(req, res) {
  try {
    const screenId = req.body.id;
    await screenServices.update(
      screenId,
      req.body.seatMatrix,
      req.body.cinemaId
    );
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
    const paramsScreenId = req.params.screenId;
    await screenServices.drop(paramsScreenId);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
