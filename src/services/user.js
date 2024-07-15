import * as user from '../repositories/user.js';
import jwt from 'jsonwebtoken';

export async function getByUserNamePassWord(userName, password) {
  const userInfor = await user.getByUserNamePassWord(userName, password);
  return userInfor;
}

export async function getToken(params) {
  const userInfor = await getByUserNamePassWord(
    params.userName,
    params.password
  );
  if (userInfor === null || userInfor.roleId == 0) {
    return;
  }
  const token = jwt.sign({ data: userInfor }, process.env.TOKEN_SECRET, {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
  return token;
}
