function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", handleClick);
function handleClick() {
  document.querySelector("body").style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
};