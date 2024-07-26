import * as seatMatrix from './src/repositories/seatMatrix.js';
const testObj = {
  showId: 1,
  data: [
    {
      rowName: 'A',
      colId: 1,
      onHold: '2024-07-04T14:50:51+07:00',
    },
  ],
};

(async function test() {
  await seatMatrix.setOnHoldStatus(testObj);
})();
