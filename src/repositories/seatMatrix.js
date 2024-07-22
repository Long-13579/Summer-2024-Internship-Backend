import { SCREEN_SIZE } from '../constants/screenSize.js';
import { ROW_NAME } from '../constants/enumSeatRowName.js';

export function creatSeatMatrix(size) {
    
  const rowData = [...Array(SCREEN_SIZE[size].rows)].fill(0);

  const data = rowData.map((row, rowIndex) => {
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
  const seatMatrixData = { data };
  const seatMatrixDataStrfed = JSON.stringify(seatMatrixData);
  return seatMatrixDataStrfed;
}
