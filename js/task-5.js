function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", handleClick);
function handleClick() {
  const randomColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".color").textContent = randomColor;
};