import * as seatMatrixRepo from './src/services/seatMatrix.js';
const testobj = {
  data: [
    {
      rowName: 'F',
      colId: 10,
      onHold: '2024-07-25T11:22:52+07:00',
    },
    {
      rowName: 'F',
      colId: 11,
      onHold: '2024-07-25T11:22:52+07:00',
    },
  ],
};
(async function test() {
  await seatMatrixRepo.setOnHoldStatus({
    showId: 1,
    data: JSON.stringify(testobj),
  });
})();
