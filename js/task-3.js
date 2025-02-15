const outputEl = document.querySelector("#name-output");
document.querySelector("#name-input").addEventListener("input", evt => {
    if (evt.currentTarget.value.trim() != "") {
        outputEl.textContent = evt.currentTarget.value.trim();
    } else {
        outputEl.textContent = "Anonymous";
    };
});