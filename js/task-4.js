const data = {};
document.querySelector(".login-form").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    if (email == "" || password == "") {
        alert("All form fields must be filled in");
    };
    data.email = email;
    data.password = password;
    formEl.reset();
    console.log(data);
};