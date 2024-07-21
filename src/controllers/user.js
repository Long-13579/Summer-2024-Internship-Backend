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
<<<<<<< HEAD
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
=======
    res.status(API_STATUS.UNAUTHORIZED.status);
    res.send(API_STATUS.UNAUTHORIZED);
>>>>>>> 2239d698d699510c3176bba35ebcd323560e54b5
  }
}
