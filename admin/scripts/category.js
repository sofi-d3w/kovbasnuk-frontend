const sectionApiMessage = document.querySelector("section.api-message")
const sectionCategory = document.querySelector("section.category")

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