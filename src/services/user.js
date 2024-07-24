import * as user from '../repositories/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_EXPIRE_DATE } from '../constants/token.js';

export async function getToken({ userName, password }) {
  const userNameReq = userName;
  const passwordReq = password;
  const dbUserInfor = await user.getByUserName(userNameReq);
  if (dbUserInfor === null || !dbUserInfor.roleId) {
    return;
  }
  const validPassword = await bcrypt.compare(passwordReq, dbUserInfor.password);

  if (validPassword) {
    const token = jwt.sign({ data: dbUserInfor }, process.env.TOKEN_SECRET, {
      expiresIn: TOKEN_EXPIRE_DATE,
    });
    return token;
  }
  return;
}
