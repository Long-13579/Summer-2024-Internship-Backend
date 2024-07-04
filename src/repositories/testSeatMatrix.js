import * as cinemaServices from '../services/cinema.js';

(async function test() {
  const obj = await cinemaServices.getById(99);
  console.log(JSON.stringify(obj, null, 2));
})();
