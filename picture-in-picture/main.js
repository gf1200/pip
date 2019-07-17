const btn = document.querySelector('#togglePipButton');
const ifr = document.getElementById('ifr');
btn.addEventListener('click', function() {
  ifr.contentWindow.postMessage('hej', '*');
});
