import { db } from '../models/index.js';

export async function getByUserName(userName) {
  const userInfor = await db.user.findOne({
    where: {
      userName,
    },
  });
  return userInfor;
}
