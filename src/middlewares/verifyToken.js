import jwt from 'jsonwebtoken';
import { API_STATUS } from '../models/apiStatus.js';

export async function verifyToken(req, res) {
  const token = req.header('authen-token');
  if (!token) {
    res.status(API_STATUS.UNAUTHORIZED.status);
    res.send(API_STATUS.UNAUTHORIZED);
    return;
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(API_STATUS.INTERNAL_SERVER_ERROR.status);
    res.send(API_STATUS.INTERNAL_SERVER_ERROR);
  }
}
