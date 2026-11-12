let count = 0;
const el = document.getElementById('count');
document.getElementById('plus').addEventListener('click', () => { count += 1; el.textContent = count; });
document.getElementById('reset').addEventListener('click', () => { count = 0; el.textContent = count; });
