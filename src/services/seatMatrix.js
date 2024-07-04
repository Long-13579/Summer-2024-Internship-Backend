import moment from 'moment';
import * as seatMatrix from '../repositories/seatMatrix.js';
import * as show from '../repositories/show.js';

export async function setIsOffStatus(
  screenId,
  showId,
  seatsBookedCount,
  seatsBookedData
) {
  const seatMatrixDataById = await seatMatrix.getByScreenId(screenId);
  const seatMatrixDataByIdParsed = JSON.parse(seatMatrixDataById);

  //take index of each Row Name
  const rowNameIndexArr = [];
  for (var i = 0; i < seatsBookedCount; i++) {
    rowNameIndexArr.push(
      seatMatrixDataByIdParsed.data.findIndex((obj) => {
        return obj.rowName == seatsBookedData.data[i].rowName;
      })
    );
  }

  //change status depend on seatsBookData
  for (let i = 0; i < seatsBookedCount; i++) {
    const rowNameIndex = rowNameIndexArr[i];
    const bookedSeatId = seatsBookedData.data[i].colId;
    seatMatrixDataByIdParsed.data[rowNameIndex].rowSeats[bookedSeatId].isOff =
      seatsBookedData.data[i].status;
  }

  const seatMatrixDataChanged = JSON.stringify(seatMatrixDataByIdParsed);
  await show.updateSeatMatrix(showId, seatMatrixDataChanged);
}

export async function setIsSoldStatus(
  screenId,
  showId,
  seatsBookedCount,
  seatsBookedData
) {
  const seatMatrixDataById = await seatMatrix.getByScreenId(screenId);
  const seatMatrixDataByIdParsed = JSON.parse(seatMatrixDataById);

  //take index of each Row Name
  const rowNameIndexArr = [];
  for (var i = 0; i < seatsBookedCount; i++) {
    rowNameIndexArr.push(
      seatMatrixDataByIdParsed.data.findIndex((obj) => {
        return obj.rowName == seatsBookedData.data[i].rowName;
      })
    );
  }

  //change status depend on seatsBookData
  for (let i = 0; i < seatsBookedCount; i++) {
    const rowNameIndex = rowNameIndexArr[i];
    const bookedSeatId = seatsBookedData.data[i].colId;
    seatMatrixDataByIdParsed.data[rowNameIndex].rowSeats[bookedSeatId].isSold =
      seatsBookedData.data[i].status;
  }

  const seatMatrixDataChanged = JSON.stringify(seatMatrixDataByIdParsed);
  await show.updateSeatMatrix(showId, seatMatrixDataChanged);
}

export async function setOnHoldStatus(
  screenId,
  showId,
  seatsBookedCount,
  seatsBookedData
) {
  const seatMatrixDataById = await seatMatrix.getByScreenId(screenId);
  const seatMatrixDataByIdParsed = JSON.parse(seatMatrixDataById);

  //take index of each Row Name
  const rowNameIndexArr = [];
  for (var i = 0; i < seatsBookedCount; i++) {
    rowNameIndexArr.push(
      seatMatrixDataByIdParsed.data.findIndex((obj) => {
        return obj.rowName == seatsBookedData.data[i].rowName;
      })
    );
  }

  //change status depend on seatsBookData
  for (let i = 0; i < seatsBookedCount; i++) {
    const rowNameIndex = rowNameIndexArr[i];
    const bookedSeatId = seatsBookedData.data[i].colId;
    seatMatrixDataByIdParsed.data[rowNameIndex].rowSeats[bookedSeatId].onHold =
      moment(seatsBookedData.data[i].onHold).add(5, 'm').format();
  }

  const seatMatrixDataChanged = JSON.stringify(seatMatrixDataByIdParsed);
  await show.updateSeatMatrix(showId, seatMatrixDataChanged);
}

//273
