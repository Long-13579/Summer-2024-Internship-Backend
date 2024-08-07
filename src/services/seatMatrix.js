import * as seatMatrixRepo from '../repositories/seatMatrix.js';
import * as showServices from './show.js';

export async function setOnHoldStatus({ showId, data }) {
  const seatMatrixApplyHold = await seatMatrixRepo.setOnHoldStatus({
    showId,
    data,
  });
  const { seatMatrix, status, ...rest } = await showServices.getById(showId);
  await showServices.update({
    id: showId,
    ...rest,
    seatMatrix: seatMatrixApplyHold,
  });
}
