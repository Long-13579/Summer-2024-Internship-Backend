import * as userServices from '../services/user.js';
import jwt from 'jsonwebtoken';
import { API_STATUS } from '../models/apiStatus.js';

export async function login(req, res) {
  const userInfor = await userServices.getByUserNamePassWord(
    req.body.userName,
    req.body.password
  );
  if (userInfor === null) {
    res.status(API_STATUS.UNPROCESSABLE_ENTITY.status);
    res.send(API_STATUS.UNPROCESSABLE_ENTITY);
  }
  const token = jwt.sign({ data: userInfor }, process.env.TOKEN_SECRET, {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
  res.status(API_STATUS.OK.status);
  res.send(token);
}
