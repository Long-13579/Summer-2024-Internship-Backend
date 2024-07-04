import * as screenServices from '../services/screen.js';
import { StatusCodes } from 'http-status-codes';
import { ERROR, OK } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await screenServices.add(
      req.body.seatMatrix,
      req.body.cinemaId,
      req.body.name
    );
    res.status(StatusCodes.OK);
    res.send(OK);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getByCinemaId(req, res, next) {
  try {
    const queryCinemaId = req.query.cinemaId;
    if (!queryCinemaId) {
      next();
      return;
    }
    const screenByCinemaIdInfor = await screenServices.getByCinemaId(
      queryCinemaId
    );
    const invalidCinemaId = screenByCinemaIdInfor?.length === 0;
    if (invalidCinemaId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('screen', 'cinema', queryCinemaId));
      return;
    }
    res.status(StatusCodes.OK);
    res.send(screenByCinemaIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getAll(req, res) {
  try {
    const allScreenInfor = await screenServices.getAll();
    const unableToGet = allScreenInfor?.length === 0;
    if (unableToGet) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    res.status(StatusCodes.OK);
    res.send(allScreenInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function getById(req, res) {
  try {
    const paramsScreenId = req.params.screenId;
    const screenByIdInfor = await screenServices.getById(paramsScreenId);
    const invalidId = screenByIdInfor?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('screen', 'screen', paramsScreenId));
      return;
    }
    res.status(StatusCodes.OK);
    res.send(screenByIdInfor);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function update(req, res) {
  try {
    const screenId = req.body.id;
    const screenByIdInfor = await screenServices.getById(screenId);
    const invalidId = screenByIdInfor?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    await screenServices.update(
      req.body.id,
      req.body.seatMatrix,
      req.body.cinemaId,
      req.body.name
    );
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
    const paramsScreenId = req.params.screenId;
    const screenByIdInfor = await screenServices.getById(paramsScreenId);
    const invalidId = screenByIdInfor?.length === 0;
    if (invalidId) {
      res.status(StatusCodes.BAD_REQUEST);
      res.send(ERROR[400]);
      return;
    }
    await screenServices.drop(paramsScreenId);
    res.status(StatusCodes.OK);
    res.send(OK);
    return;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}
