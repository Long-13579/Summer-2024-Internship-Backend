import moment from 'moment';
import * as show from '../repositories/show.js';
import * as showServices from '../services/show.js';
import * as screenServices from '../services/screen.js';
import * as seatMatrixRepo from '../repositories/seatMatrix.js';
import { seat } from '../constants/seatMetrics.js';
import { ROW_NAME } from '../constants/enumSeatRowName.js';

export async function setIsOffStatus(screenId, seatsBookedData) {
  const screenByIdInfor = await screenServices.getById(screenId);
  const seatMatrixByScreenId = screenByIdInfor.seatMatrix;
  const seatMatrixDataByIdParsed = JSON.parse(seatMatrixByScreenId);
  //take index of each Row Name
  const rowNameIndexArr = [];
  const seatsBookedCount = seatsBookedData.length;
  for (var i = 0; i < seatsBookedCount; i++) {
    rowNameIndexArr.push(
      seatMatrixDataByIdParsed.data.findIndex((obj) => {
        return obj.rowName == seatsBookedData[i].rowName;
      })
    );
  }
  //change status depend on seatsBookData
  for (let i = 0; i < seatsBookedCount; i++) {
    const rowNameIndex = rowNameIndexArr[i];
    const bookedSeatId = seatsBookedData[i].colId;
    seatMatrixDataByIdParsed.data[rowNameIndex].rowSeats[bookedSeatId].isOff =
      seatsBookedData[i].status;
  }
  const seatMatrixDataChanged = JSON.stringify(seatMatrixDataByIdParsed);
  await screenServices.updateSeatMatrix(screenId, seatMatrixDataChanged);
}

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

export async function setOnHoldStatus({ showId, data }) {
  const seatMatrixApplyHold = await seatMatrixRepo.setOnHoldStatus({
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

export function add(screenWidth, screenLength) {
  const seatCols = Math.floor(screenWidth / seat.width);
  const seatRows = Math.floor(screenLength / seat.len);
  const seatMatrix = {
    data: [],
  };
  for (let rowIndex = 0; rowIndex < seatRows; rowIndex++) {
    seatMatrix.data[rowIndex] = {
      rowName: ROW_NAME[rowIndex],
      rowSeats: [],
    };
    for (let colIndex = 0; colIndex < seatCols; colIndex++) {
      seatMatrix.data[rowIndex].rowSeats[colIndex] = {
        price: 0,
        isSeat: true,
        name: seatMatrix.data[rowIndex].rowName + (colIndex + 1),
        isOff: false,
        isSold: false,
        onHold: '',
        colId: colIndex,
        seatId: colIndex,
      };
    }
  }
  const seatMatrixStringified = JSON.stringify(seatMatrix);
  return seatMatrixStringified;
}
