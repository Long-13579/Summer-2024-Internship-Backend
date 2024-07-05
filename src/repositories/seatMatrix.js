import { db } from '../models/index.js';
import * as show from './show.js';
export async function getByScreenId(screenId) {
  const seatMatrixByScreenId = await db.screen.findOne({
    where: {
      id: screenId,
    },
    attributes: ['seatMatrix'],
  });
  return seatMatrixByScreenId.seatMatrix;
}


