//http://127.0.1:500/products/get-all
//http://localhost:5000/products/get-all

const sectionApiMessage = document.querySelector("section.api-message")
const sectionProducts = document.querySelector("section.products")

fetch("http://localhost:5000/products/get-all")
    .then(response => response.json())
    .then(products => {
        console.log(products)
        if (!Array.isArray(products) || products.length === 0) throw new Error("Продукти не знайдено")
        sectionApiMessage.style.display = "none"
        sectionProducts.classList.remove("hidden")
        console.log(products)
        products.forEach(products => {
            sectionProducts.innerHTML += `
         <div class="products__item">
                        <img src="/admin/image.png" alt="photo">
                        <h2>${products.name}</h2>
                        <span class="products__item-info">${products.description}</span>
                        <div class="products__item-bottom">
                            <span class="products__item-price">${products.price}</span>
                        </div>
                        <a href="">Детальніше &rarr;</a>
                    </div>
        `
        });

    })
    .catch(err => sectionApiMessage.textContent = err.message)