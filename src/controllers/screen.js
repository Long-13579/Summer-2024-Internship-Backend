import * as screenServices from '../services/screen.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    await screenServices.add(req.body);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function getScreen(req, res) {
  try {
    const screensInfor = await screenServices.getScreen(req.query);
    res.status(API_STATUS.OK.status);
    res.send(screensInfor);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export async function update(req, res) {
  try {
    const { id, seatMatrix, cinemaId } = req.body;
    await screenServices.update({ id, seatMatrix, cinemaId });
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
    await screenServices.drop(req.body.id);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
    return;
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
