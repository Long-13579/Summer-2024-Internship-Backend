import { db } from '../models/index.js';

export async function getByScreenId(screenId) {
  const seatMatrixByScreenId = await db.screen.findOne({
    where: {
      id: screenId,
    },
    attributes: ['seatMatrix'],
  });
  return seatMatrixByScreenId.seatMatrix;
}


