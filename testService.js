// import * as seatMatrixServices from './seatMatrix.js';
// // import * as show from '../repositories/show.js';

// // const obj = {
// //   data: [
// //     {
// //       rowName: 'A',
// //       rowSeats: [
// //         {
// //           price: 65000,
// //           isSeat: true,
// //           name: 'A01',
// //           isOff: true,
// //           isSold: false,
// //           onHold: '',
// //           colId: 0,
// //           seatId: 0,
// //         },
// //         {
// //           price: 65000,
// //           isSeat: true,
// //           name: 'A02',
// //           isOff: true,
// //           isSold: false,
// //           onHold: '',
// //           colId: 1,
// //           seatId: 1,
// //         },
// //         {
// //           price: 65000,
// //           isSeat: true,
// //           name: 'A03',
// //           isOff: false,
// //           isSold: false,
// //           onHold: '',
// //           colId: 2,
// //           seatId: 2,
// //         },
// //       ],
// //     },
// //     {
// //       rowName: 'B',
// //       rowSeats: [
// //         {
// //           price: 65000,
// //           isSeat: true,
// //           name: 'B01',
// //           isOff: false,
// //           isSold: false,
// //           onHold: '',
// //           colId: 0,
// //           seatId: 0,
// //         },
// //         {
// //           price: 65000,
// //           isSeat: true,
// //           name: 'B02',
// //           isOff: true,
// //           isSold: false,
// //           onHold: '',
// //           colId: 1,
// //           seatId: 1,
// //         },
// //         {
// //           price: 65000,
// //           isSeat: true,
// //           name: 'B03',
// //           isOff: true,
// //           isSold: false,
// //           onHold: '',
// //           colId: 2,
// //           seatId: 2,
// //         },
// //       ],
// //     },
// //   ],
// // };

// // const seatBooked = {
// //   screenId: 1,
// //   seatCount: 3,
// //   showId: 12,
// //   data: [
// //     {
// //       rowName: 'A',
// //       colId: 1,
// //       status: true,
// //     },
// //     {
// //       rowName: 'B',
// //       colId: 1,
// //       status: true,
// //     },
// //     {
// //       rowName: 'B',
// //       colId: 2,
// //       status: true,
// //     },
// //   ],
// // };

// // (async function test() {
// //   await seatMatrixServices.setIsSoldStatus(15, 15, 3, seatBooked);
// // })();

// import * as screenServices from '../services/screen.js';
// import * as seatMatrixServices from '../services/seatMatrix.js'
// (async function test() {
//   await screenServices.add(5, 'HIHI', 700, 800);
// })();

// import * as showServices from './src/services/show.js';

// (async function test() {
//   await showServices.add(1, 16, '18:00:00', '2024-07-01', 50000);
// })();

// import * as screen from '../repositories/screen.js';

// (async function test() {
//   const obj = await screen.getSeatMatrixById(15);
//   console.log(JSON.parse(obj));
//   //console.log(JSON.stringify(objParsed, null, 2));
// })();

// import * as seatMatrix from '../repositories/seatMatrix.js';

// (async function test() {
//   const rs = await seatMatrix.applyShowSeatPrice(1);
//   console.log(rs.price);
// })();

import * as showServices from './src/services/show.js';
(async function test() {
  const rs = await showServices.getAll();
  console.log(JSON.stringify(rs, null, 2));
})();
