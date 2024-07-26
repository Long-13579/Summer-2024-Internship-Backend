import { SCREEN_SIZE } from '../constants/screenSize.js';
import { ROW_NAME } from '../constants/enumSeatRowName.js';

export function creatSeatMatrix(size) {
  const rowData = [...Array(SCREEN_SIZE[size].rows)].fill(0);

  const seatMatrixData = rowData.map((row, rowIndex) => {
    const colData = [...Array(SCREEN_SIZE[size].cols)].fill(0);
    const rowName = ROW_NAME[rowIndex];

    return colData.map((col, colIndex) => {
      return {
        price: 0,
        isSeat: true,
        name: rowName + colIndex,
        isOff: false,
        isSold: false,
        onHold: '',
        colId: 0,
        seatId: 0,
      };
    });
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
