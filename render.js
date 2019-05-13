const restCnt = document.getElementById('restCnt');
const apiName = document.getElementById('apiName');

restCnt.textContent = names.length;
apiName.textContent = names.length ? names[0] : 'GaGa';