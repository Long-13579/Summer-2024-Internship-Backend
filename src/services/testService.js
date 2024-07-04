// import * as seatMatrixServices from './seatMatrix.js';
// import * as show from '../repositories/show.js';

// const obj = {
//   data: [
//     {
//       rowName: 'A',
//       rowSeats: [
//         {
//           price: 65000,
//           isSeat: true,
//           name: 'A01',
//           isOff: true,
//           isSold: false,
//           onHold: '',
//           colId: 0,
//           seatId: 0,
//         },
//         {
//           price: 65000,
//           isSeat: true,
//           name: 'A02',
//           isOff: true,
//           isSold: false,
//           onHold: '',
//           colId: 1,
//           seatId: 1,
//         },
//         {
//           price: 65000,
//           isSeat: true,
//           name: 'A03',
//           isOff: false,
//           isSold: false,
//           onHold: '',
//           colId: 2,
//           seatId: 2,
//         },
//       ],
//     },
//     {
//       rowName: 'B',
//       rowSeats: [
//         {
//           price: 65000,
//           isSeat: true,
//           name: 'B01',
//           isOff: false,
//           isSold: false,
//           onHold: '',
//           colId: 0,
//           seatId: 0,
//         },
//         {
//           price: 65000,
//           isSeat: true,
//           name: 'B02',
//           isOff: true,
//           isSold: false,
//           onHold: '',
//           colId: 1,
//           seatId: 1,
//         },
//         {
//           price: 65000,
//           isSeat: true,
//           name: 'B03',
//           isOff: true,
//           isSold: false,
//           onHold: '',
//           colId: 2,
//           seatId: 2,
//         },
//       ],
//     },
//   ],
// };

// const seatBooked = {
//   screenId: 1,
//   seatCount: 3,
//   showId: 12,
//   data: [
//     {
//       rowName: 'A',
//       colId: 1,
//       status: true,
//     },
//     {
//       rowName: 'B',
//       colId: 1,
//       status: true,
//     },
//     {
//       rowName: 'B',
//       colId: 2,
//       status: true,
//     },
//   ],
// };

// (async function test() {
//   await seatMatrixServices.setIsSoldStatus(3, 3, 3, seatBooked);
// })();

import * as seatMatrixServices from './seatMatrix.js';

(async function test() {
  await seatMatrixServices.add(2, 'Tiger', 600, 600);
})();
