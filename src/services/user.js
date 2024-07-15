import * as user from '../repositories/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_EXPIRE_DATE } from '../constants/token.js';

export async function hashCompareInfor(userInputObj, adminInforArr) {
  const { userNameReq, passwordReq } = userInputObj;
  for (const adminIndex of adminInforArr) {
    const checkUserNameCorrect = await bcrypt.compare(
      userNameReq,
      adminIndex.userName
    );
    const checkPasswordCorrect = await bcrypt.compare(
      passwordReq,
      adminIndex.password
    );
    if (checkUserNameCorrect && checkPasswordCorrect) {
      return { userNameReq, passwordReq };
    }
  }
  return;
}

export async function getToken(params) {
  const { userNameReq, passwordReq } = params;
  const adminInforArr = await user.getAdminInfor();
  const userInfor = await hashCompareInfor(
    {
      userNameReq,
      passwordReq,
    },
    adminInforArr
  );
  if (userInfor) {
    const token = jwt.sign({ data: userInfor }, process.env.TOKEN_SECRET, {
      expiresIn: TOKEN_EXPIRE_DATE,
    });
    return token;
  }
  return;
}
