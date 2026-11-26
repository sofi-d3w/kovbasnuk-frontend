import { openModal } from "./modal"

const sectionApiMessage = document.querySelector("section.api-message")
const sectionCategory = document.querySelector("section.category")

const newCategoryBtn = document.querySelector(".content__header-create")

fetch("http://localhost:5000/categories/get-all")
    .then(response => response.json())
    .then(category => {
        if (!Array.isArray(category) || category.length === 0) throw new Error("Продукти не знайдено")
        sectionApiMessage.style.display = "none"
        sectionCategory.classList.remove("hidden")
        console.log(category)
        category.forEach(category => {
            sectionCategory.innerHTML += `
         <div class="category__item">
                        <img src="/admin/image.png" alt="photo">

                        <div class="category__item-content">
                            <h2>${category.name}</h2>
                            <span class="category__item-info">${category.description}</span>
                            <a href="">Детальніше &rarr;</a>
                        </div>
                       
                    </div>
                
        `
        });

    })
    .catch(err => sectionApiMessage.textContent = err.message)

newCategoryBtn.addEventListener("click", () => {
    openModal(`<form class="category-create">
        <h2>Створити нову категорію</h2>
        <input type="text" name="name" placeholder="Назва категорії">
        <input type="number" min="1" name="order" placeholder="Порядок відображення">
        <input type="text" name="link" placeholder="Посилання">
        <textarea type="text" name="description" placeholder="Опис категорії"></textarea>
        <button>Create</button>
        </form>`)
})