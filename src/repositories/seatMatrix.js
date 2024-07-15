import moment from 'moment';
import * as showServices from '../services/show.js';
import { HOLD_SEAT_TIME } from '../constants/seatMatrix.js';

export async function setOnHoldStatus({ showId, data: seatsBookedReq }) {
  const seatsBookedReqParsed = seatsBookedReq;
  const showByIdInfor = await showServices.getById(showId);
  const seatMatrixByShowId = showByIdInfor.seatMatrix;
  const seatMatrixDataByShowIdParsed = JSON.parse(seatMatrixByShowId);

  //arr of rowName index in seatMatrix
  const setOnHoldRowIndexArr = seatsBookedReqParsed.map(
    ({ rowName: rowNameReq, colId, onHold }) => {
      const index = seatMatrixDataByShowIdParsed.data.findIndex(
        ({ rowName: rowNameData, ...rest }) => (rowNameData === rowNameReq)
      );
      return { index, colId, onHold };
    }
  );
  setOnHoldRowIndexArr.forEach(({ index, colId, onHold }) => {
    const onHoldAddFiveMin = moment(onHold).add(HOLD_SEAT_TIME, 'm').format();
    seatMatrixDataByShowIdParsed.data[index].rowSeats[colId].onHold =
      onHoldAddFiveMin;
  });
  return JSON.stringify(seatMatrixDataByShowIdParsed);
}
