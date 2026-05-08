function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  boxes.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = `${30 + i * 10}px`;
    const box = document.createElement('div');
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
  }

  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

btnCreate.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

btnDestroy.addEventListener('click', destroyBoxes);