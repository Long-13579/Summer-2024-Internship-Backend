import * as showServices from './src/services/show.js';

(async function test() {
  const rs = await showServices.getByFilmIdFilmDetail(11, '2025-05-01', 2);
  console.log(JSON.stringify(rs, null, 2));
})();
