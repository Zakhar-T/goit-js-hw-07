function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input[type='number']");
let amount = 0;

inputEl.addEventListener("change", setAmount);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function setAmount(event) {
  amount =+ Number(event.currentTarget.value);
  return amount;
}

function createBoxes() {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  document.querySelector("#boxes").append(...boxes);
}

function destroyBoxes() {
  return document.querySelector("#boxes").innerHTML = "";
}