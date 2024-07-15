import * as user from '../repositories/user.js';

export async function getByUserNamePassWord(userName, password) {
  const userInfor = await user.getByUserNamePassWord(userName, password);
  return userInfor;
}
