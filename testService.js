import * as screenServices from './src/services/screen.js';

(async function test() {
  await screenServices.add(13, 'HEHEHE', 1000, 600);
})();
