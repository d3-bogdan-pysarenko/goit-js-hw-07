function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgBody = document.body;
const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  bgBody.style.backgroundColor = randomHexColor;
  color.textContent = randomHexColor;
});