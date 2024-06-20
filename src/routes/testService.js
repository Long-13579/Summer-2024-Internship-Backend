import * as film from '../repositories/film.js';
(async function test() {
  const objTest = await film.getByCinemaId(11);
  console.log(JSON.stringify(objTest, null, 2));
})();
