import * as seatMatrixServices from '../services/seatMatrix.js';
import * as screenServices from '../services/screen.js';
import { StatusCodes } from 'http-status-codes';
import { ERROR, OK } from '../models/apiStatus.js';

export async function setIsOffStatus(req, res) {
  try {
    const bodyScreenId = req.body.screenId;
    const screenById = await screenServices.getById(bodyScreenId);
    if (screenById == null) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('screen', 'screen', bodyScreenId));
    }
    await seatMatrixServices.setIsOffStatus(
      bodyScreenId,
      req.body.seatCount,
      req.body.data
    );
    res.status(StatusCodes.OK);
    res.send(OK);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function setIsSoldStatus(req, res) {
  try {
    const bodyScreenId = req.body.screenId;
    const screenById = await screenServices.getById(bodyScreenId);
    if (screenById == null) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('screen', 'screen', bodyScreenId));
    }
    await seatMatrixServices.setIsSoldStatus(
      bodyScreenId,
      req.body.seatCount,
      req.body.data
    );
    res.status(StatusCodes.OK);
    res.send(OK);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}

export async function setOnHoldStatus(req, res) {
  try {
    const bodyScreenId = req.body.screenId;
    const screenById = await screenServices.getById(bodyScreenId);
    if (screenById == null) {
      res.status(StatusCodes.NOT_FOUND);
      res.send(ERROR[404]('screen', 'screen', bodyScreenId));
    }
    await seatMatrixServices.setOnHoldStatus(
      bodyScreenId,
      req.body.seatCount,
      req.body.data
    );
    res.status(StatusCodes.OK);
    res.send(OK);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ERROR[500]);
  }
}
