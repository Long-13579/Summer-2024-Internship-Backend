import moment from 'moment';
import * as showServices from '../services/show.js';
import { HOLD_SEAT_TIME } from '../constants/seatMatrix.js';

export async function setOnHoldStatus({ showId, data: seatsBookedReq }) {
  const seatsBookedReqParsed = JSON.parse(seatsBookedReq);
  const showByIdInfor = await showServices.getById(showId);
  const seatMatrixByShowId = showByIdInfor.seatMatrix;
  const seatMatrixDataByShowIdParsed = JSON.parse(seatMatrixByShowId);

  const indexObj = seatsBookedReqParsed


  //add 5' for onHold prop for seats depend on seatsBookReq
  // const seatMatrixDataChanged = seatMatrixDataByShowIdParsed.data.map(
  //   ({ rowName: rowNameData, rowSeats }) => {
  //     const onHoldTime = seatsBookedReqParsed.forEach(
  //       ({ rowName: rowNameReq, colId: colIdReq, onHold }) => {
  //         if (rowNameData == rowNameReq) {
  //           return rowSeats.forEach(({ colId, ...rest }) => {
  //             if (colId == colIdReq) {
  //               return moment(onHold).add(HOLD_SEAT_TIME, 'm').format();
  //             }
  //           });
  //         }
  //       }
  //     );
  //     return {
  //       rowName: rowNameData,
  //       colId: colIdData,
  //       onHold: onHoldTime,
  //       ...rest,
  //     };
  //   }
  // );
  return JSON.stringify(seatMatrixDataChanged);
}
