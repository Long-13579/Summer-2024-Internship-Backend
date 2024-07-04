import * as cinemaServices from './cinema.js';

(async function test() {
  await cinemaServices.getById(99);
})();
