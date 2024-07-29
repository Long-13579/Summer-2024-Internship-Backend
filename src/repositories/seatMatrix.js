import * as showServices from '../services/show.js';

export async function setIsSoldStatus({ showId, data: seatsBookedReq }) {
  const seatsBookedReqParsed = seatsBookedReq;
  const showByIdInfor = await showServices.getById(showId);
  const seatMatrixByShowId = showByIdInfor.seatMatrix;
  const seatMatrixDataByShowIdParsed = JSON.parse(seatMatrixByShowId);

  //arr of rowName index in seatMatrix
  const setOnHoldRowIndexArr = seatsBookedReqParsed.map(
    ({ rowName: rowNameReq, colId, status }) => {
      const index = seatMatrixDataByShowIdParsed.data.findIndex(
        ({ rowName: rowNameData, ...rest }) => (rowNameData = rowNameReq)
      );
      return { index, colId, status };
    }
  );
  setOnHoldRowIndexArr.map(({ index, colId, status }) => {
    seatMatrixDataByShowIdParsed.data[index].rowSeats[colId].isSold = status;
  });
  return JSON.stringify(seatMatrixDataByShowIdParsed);
}
