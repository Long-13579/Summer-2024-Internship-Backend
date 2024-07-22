import * as user from '../repositories/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_EXPIRE_DATE } from '../constants/token.js';

export async function getToken({
  userName: userNameReq,
  password: passwordReq,
}) {
  const dbUserInfor = await user.getByUserName(userNameReq);
  const { userName, password, roleId, ...rest } = dbUserInfor;
  if (dbUserInfor === null || !roleId) {
    return;
  }
  const validPassword = await bcrypt.compare(passwordReq, password);

  if (validPassword) {
    const token = jwt.sign({ data: dbUserInfor }, process.env.TOKEN_SECRET, {
      expiresIn: TOKEN_EXPIRE_DATE,
    });
    return token;
  }
  return;
}
