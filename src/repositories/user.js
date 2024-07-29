import { user } from '../models/index.js';

export async function getByUserName(userName) {
  const userInfor = await user.findOne({
    where: {
      userName,
    },
  });
  return userInfor;
}
