function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", handleClick);
function handleClick(event) {
  event.target.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
}