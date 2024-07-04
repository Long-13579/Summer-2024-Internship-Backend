const testObj = {
  seatMatrixId: 1,
  seatCount: 3,
  data: [
    {
      rowName: 'A',
      colId: 1,
      status: false,
    },
    {
      rowName: 'B',
      colId: 1,
      status: false,
    },
    {
      rowName: 'B',
      colId: 2,
      status: false,
    },
  ],
};

import * as seatMatrixServices from '../services/seatMatrix.js';

(async function test() {
  await seatMatrixServices.setIsSoldStatus(3, 3, testObj);
})();

// import { setOnHoldStatus } from './seatMatrix.js';

// setOnHoldStatus(1, 3, testObj);
