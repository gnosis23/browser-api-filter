import { words } from './app.js';

const restCnt = document.getElementById('restCnt');
const apiName = document.getElementById('apiName');

restCnt.textContent = words.length;
apiName.textContent = words.length ? words[0] : 'GaGa';

document.getElementsByClassName('myButton')[0].addEventListener('click', function () {
  window.open(`https://www.google.com/search?q=${encodeURIComponent(words[0])}+mdn`,"_blank")
});
