const container = document.getElementById('container');

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  cell.style.width = '20px';
  cell.style.height = '20px';

  container.appendChild(cell);
}
