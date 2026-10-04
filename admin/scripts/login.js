import { login } from "./auth.js";

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const errField = form.querySelector(".login-form__error")

    const data = new FormData(form);

    const dataToSend = {
        email: data.get("email"),
        password: data.get("password"),
    };
    console.log(dataToSend)

    login(dataToSend).then(() => {
        form.reset() // очищаємо форму
        location.pathname = "/admin/products.html"
    }).catch(() => {
        errField.style.display = "block"
    })
})