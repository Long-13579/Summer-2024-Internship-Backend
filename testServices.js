import * as screenServices from './src/services/screen.js'

(async function test(){
    await screenServices.inactive(11);
})();