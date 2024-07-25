import * as filmServices from '../services/film.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function add(req, res) {
  try {
    const { ...filmInfor } = req.body;
    await filmServices.add(filmInfor);
    res.status(API_STATUS.OK.status);
    res.send(API_STATUS.OK);
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
