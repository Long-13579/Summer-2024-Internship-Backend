import jwt from 'jsonwebtoken';
import { API_STATUS } from '../models/apiStatus.js';
import { BEARER_AUTH_SCHEME, BEARER_WORD_LEN } from '../constants/token.js';

export async function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith(BEARER_AUTH_SCHEME)) {
    res.status(API_STATUS.UNAUTHORIZED.status);
    res.send(API_STATUS.UNAUTHORIZED);
    return;
  }
  const tokenExtracted = authHeader.slice(BEARER_WORD_LEN);
  try {
    const verified = jwt.verify(tokenExtracted, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(API_STATUS.UNAUTHORIZED.status);
    res.send(API_STATUS.UNAUTHORIZED);
  }
}
