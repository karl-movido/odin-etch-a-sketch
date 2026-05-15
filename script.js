const container = document.getElementById('container');

let size;

const createBtn = document.getElementById('new-canvas');
createBtn.addEventListener('click', () => {
  size = prompt('Enter canvas size');
  createCanvas(size);
});

function createCanvas(size) {
  container.innerHTML = '';

  const cellSize = 920 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    container.appendChild(cell);
  }
}

container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = 'black';
  }
});
