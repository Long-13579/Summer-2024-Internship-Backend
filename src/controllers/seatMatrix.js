import * as seatMatrixServices from '../services/seatMatrix.js';
//import * as screenServices from '../services/screen.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function setIsOffStatus(req, res) {
  try {
    await seatMatrixServices.setIsOffStatus(req.body.screenId, req.body.data);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function setIsSoldStatus(req, res) {
  try {
    await seatMatrixServices.setIsSoldStatus(req.body);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    console.log(error);
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function setOnHoldStatus(req, res) {
  try {
    await seatMatrixServices.setOnHoldStatus(req.body);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    console.log(error);
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
