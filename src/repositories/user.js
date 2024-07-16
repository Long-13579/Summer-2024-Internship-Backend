import { db } from '../models/index.js';

export async function getByUserNamePassWord(userName, password) {
  const userInfor = await db.user.findOne({
    where: {
      userName: userName,
      password: password,
    },
  });
  return userInfor;
}
