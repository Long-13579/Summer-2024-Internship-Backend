import * as show from './src/repositories/show.js';

(async function test() {
  const rs = await show.getAll();
  console.log(JSON.stringify(rs, null, 2));
})();
