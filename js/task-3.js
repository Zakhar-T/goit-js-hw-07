const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", evt => {
    outputEl.textContent = inputEl.value.trim();
});

//Not completed yet !