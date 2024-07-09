import * as seatMatrixServices from './src/services/seatMatrix.js';

const objTest = {
  showId: 12,
  data: [
    {
      rowName: 'A',
      colId: 1,
      onHold: '2024-07-04T14:50:51+07:00',
    },
    {
      rowName: 'B',
      colId: 1,
      onHold: '2024-07-04T14:50:51+07:00',
    },
    {
      rowName: 'B',
      colId: 2,
      onHold: '2024-07-04T14:50:51+07:00',
    },
  ],
};
(async function test() {
  await seatMatrixServices.setOnHoldStatus(216, objTest);
})();

// import * as showServices from './src/services/show.js';
// (async function test() {
//   await showServices.add(12, 19, '18:00:00', '2024-12-21', 90000);
// })();
