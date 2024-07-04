import { db } from '../models/index.js';

export async function getSeatMatrixByScreenId(screenId) {
  const seatMatrixByScreenId = await db.screen.findOne({
    where: {
      id: screenId,
    },
    attributes: ['seatMatrix'],
  });
  return seatMatrixByScreenId.seatMatrix;
}

export async function updateSeatMatrix(screenId, seatMatrix) {
  await db.screen.update(
    { seatMatrix: seatMatrix },
    {
      where: {
        id: screenId,
      },
    }
  );
}
