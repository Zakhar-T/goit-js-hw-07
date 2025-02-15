const formEl = document.querySelector(".login-form");
const data = {};
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = formEl.elements.email.value.trim();
    const password = formEl.elements.password.value.trim();
    if (email == "" || password == "") {
        alert("All form fields must be filled in");
    };
    data.email = email;
    data.password = password;
    formEl.reset();
};

console.log(data);