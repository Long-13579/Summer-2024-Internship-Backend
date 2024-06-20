import * as show from '../services/show.js';

(async function test() {
  const rs = await show.getByFilmId(12);
  console.log(JSON.stringify(rs, null, 2));
})();
