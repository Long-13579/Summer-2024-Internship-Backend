import * as seatMatrixServices from './seatMatrix.js';
import * as show from '../repositories/show.js';

const obj = {
  screenId: 1,
  seatCount: 3,
  showId: 12,
  data: [
    {
      rowName: 'A',
      colId: 1,
      onHold: '2024-07-04T22:00:51+07:00',
    },
    {
      rowName: 'B',
      colId: 1,
      onHold: '2024-07-04T22:00:51+07:00',
    },
    {
      rowName: 'B',
      colId: 2,
      onHold: '2024-07-04T22:00:51+07:00',
    },
  ],
};

(async function test() {
  await seatMatrixServices.setOnHoldStatus(3, 3, 3, obj);
})();
