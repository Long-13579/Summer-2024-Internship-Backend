import { db } from '../models/index.js';

export async function getAdminInfor(userName, password) {
  const adminInfor = await db.user.findAll({
    where: {
      roleId: 1,
    },
  });
  return adminInfor;
}
