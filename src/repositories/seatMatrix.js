import * as showServices from '../services/show.js';
import { SCREEN_SIZE } from '../constants/screenSize.js';
import { ROW_NAME } from '../constants/enumSeatRowName.js';

export function creatSeatMatrix(size) {
  const rowData = [...Array(SCREEN_SIZE[size].rows)].fill(0);

  const seatMatrixData = rowData.map((row, rowIndex) => {
    const colData = [...Array(SCREEN_SIZE[size].cols)].fill(0);
    const rowName = ROW_NAME[rowIndex];

    const rowSeats = colData.map((col, colIndex) => {
      return {
        price: 0,
        isSeat: true,
        name: rowName + colIndex,
        isOff: false,
        isSold: false,
        onHold: '',
        colId: colIndex,
        seatId: 0,
      };
    });
    return { rowName: ROW_NAME[rowIndex], rowSeats };
  });
  return JSON.stringify({ data: seatMatrixData });
}

export function applyPriceToSeatMatrix(seatMatrix, showPrice) {
  const seatMatrixParsed = JSON.parse(seatMatrix);
  const seatMatrixPriceAppliedData = seatMatrixParsed.data.map(
    ({ rowName, rowSeats }) => {
      const rowSeatsPriceApplied = rowSeats.map(
        ({ price, ...restSeatInfor }) => {
          return { price: showPrice, ...restSeatInfor };
        }
      );
      return { rowName, rowSeats: rowSeatsPriceApplied };
    }
  );
  return JSON.stringify({ data: seatMatrixPriceAppliedData });
}

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
