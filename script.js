const container = document.getElementById('container');

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  cell.style.width = `${720 / 16}px`;
  cell.style.height = `${720 / 16}px`;

  container.appendChild(cell);
}

let size;

const createBtn = document.getElementById('new-canvas');
createBtn.addEventListener('click', () => {
  const input = Number(prompt('Enter canvas size. Only up to 100.'));
  if (size > 100) {
    alert('Invalid canvas size');
    return;
  }
  size = input;
  createCanvas(size);
});

function createCanvas(size) {
  container.innerHTML = '';

  const cellSize = 720 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    container.appendChild(cell);
  }
}

const clearCanvas = document.getElementById('clear-canvas');
clearCanvas.addEventListener('click', () => {
  createCanvas(size);
});

let color = null;
let activeBtn = null;

const tools = document.getElementById('tools');
tools.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  const button = e.target;

  if (activeBtn) {
    activeBtn.classList.remove('toggled');
  }

  button.classList.add('toggled');
  activeBtn = button;

  color = button.dataset.value;
});

container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = color;
  }
});
