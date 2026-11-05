import { liveLoadListeners } from './count-load-listeners.js';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

const host = document.getElementById('host');
const img = document.getElementById('img-a');
const log = document.getElementById('log');

OverlayScrollbars(host, {});

const report = (label) => {
  log.textContent += `${label}: ${liveLoadListeners(img)} load listener(s) on the image of row a\n`;
};

const moveRow = () => {
  const content = img.closest('.row').parentElement;
  content.insertBefore(content.lastElementChild, content.firstElementChild);
  return new Promise((resolve) => setTimeout(resolve, 100));
};

report('after initialization');

for (let move = 1; move <= 10; move++) {
  await moveRow();
  report(`after move ${move}`);
}

document.getElementById('move').addEventListener('click', async () => {
  await moveRow();
  report('after manual move');
});
