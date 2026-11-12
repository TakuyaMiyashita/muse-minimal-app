const STORAGE_KEY = 'count';

function loadCount() {
  try {
    const n = parseInt(localStorage.getItem(STORAGE_KEY), 10);
    return Number.isFinite(n) ? n : 0;
  } catch (e) {
    return 0;
  }
}

function saveCount(value) {
  try {
    localStorage.setItem(STORAGE_KEY, String(value));
  } catch (e) {
    // localStorage が使えない環境では保存せずに続行する
  }
}

let count = loadCount();
const el = document.getElementById('count');
el.textContent = count;

function update(value) {
  count = value;
  el.textContent = count;
  saveCount(count);
}

document.getElementById('plus').addEventListener('click', () => update(count + 1));
document.getElementById('reset').addEventListener('click', () => update(0));
