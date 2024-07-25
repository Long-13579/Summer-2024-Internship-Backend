import * as userServices from '../services/user.js';
import { API_STATUS } from '../models/apiStatus.js';

export async function login(req, res) {
  try {
    const token = await userServices.getToken(req.body);
    if (token == undefined) {
      res.status(API_STATUS.UNPROCESSABLE_ENTITY.status);
      res.send(API_STATUS.UNPROCESSABLE_ENTITY);
      return;
    }
    res.status(API_STATUS.OK.status);
    res.send(JSON.stringify(token));
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
