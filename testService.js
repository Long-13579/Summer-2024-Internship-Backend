import * as cinemaServices from './src/services/cinema.js';

(async function test() {
  await cinemaServices.getByIdAdmin(3);
})();
