import * as seatMatrixRepo from '../repositories/seatMatrix.js';
import * as showServices from './show.js';

export async function setIsSoldStatus({ showId, data }) {
  const seatMatrixApplyHold = await seatMatrixRepo.setIsSoldStatus({
    showId,
    data,
  });
  const { seatMatrix, status, ...rest } = showServices.getById(showId);
  await showServices.update({
    id: showId,
    rest,
    seatMatrix: seatMatrixApplyHold,
  });
}