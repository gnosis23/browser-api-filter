import { words } from './app.js';

const restCnt = document.getElementById('restCnt');
const apiName = document.getElementById('apiName');

restCnt.textContent = words.length;
apiName.textContent = words.length ? words[0] : 'GaGa';