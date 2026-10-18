const sidebar = document.querySelector(".sidebar")
const headerBtn = document.querySelector(".header__btn")

headerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
})