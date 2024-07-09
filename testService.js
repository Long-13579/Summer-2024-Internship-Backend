import * as seatMatrixServices from './src/services/seatMatrix.js';

// const testOnHoldObj = {
//   showId: 12,
//   data: [
//     {
//       rowName: 'A',
//       colId: 1,
//       onHold: '2024-07-04T14:50:51+07:00',
//     },
//     {
//       rowName: 'B',
//       colId: 1,
//       onHold: '2024-07-04T14:50:51+07:00',
//     },
//     {
//       rowName: 'B',
//       colId: 2,
//       onHold: '2024-07-04T14:50:51+07:00',
//     },
//   ],
// };

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
  await seatMatrixServices.setIsSoldStatus(216, testIsSoldObj);
})();

// import * as showServices from './src/services/show.js';
// (async function test() {
//   await showServices.add(12, 19, '18:00:00', '2024-12-21', 90000);
// })();
