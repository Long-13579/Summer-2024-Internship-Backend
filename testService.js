import * as seatMatrixServices from './src/services/seatMatrix.js';

const testOnHoldObj = {
  showId: 216,
  data: [
    {
      rowName: 'H',
      colId: 0,
      onHold: '2024-07-09T16:58:22+07:00',
    },
    {
      rowName: 'J',
      colId: 2,
      onHold: '2024-07-09T16:58:22+07:00',
    },
    {
      rowName: 'K',
      colId: 1,
      onHold: '2024-07-09T16:58:22+07:00',
    },
  ],
};

const testIsSoldObj = {
  showId: 12,
  data: [
    {
      rowName: 'A',
      colId: 1,
      status: true,
    },
    {
      rowName: 'B',
      colId: 1,
      status: true,
    },
    {
      rowName: 'B',
      colId: 2,
      status: true,
    },
  ],
};
(async function test() {
  await seatMatrixServices.setOnHoldStatus(216, testOnHoldObj);
})();

// import * as showServices from './src/services/show.js';
// (async function test() {
//   await showServices.add(12, 19, '18:00:00', '2024-12-21', 90000);
// })();
