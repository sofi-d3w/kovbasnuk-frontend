//http://localhost:5000/products/get-all
//http://localhost:5000/categories/get-all

const productsCount = document.querySelector("#productsCount");
const categoriesCount = document.querySelector("#categoriesCount");

fetch("http://localhost:5000/products/get-all")
    .then(response => response.json())
    .then(products => {
        if (!Array.isArray(products)) {
            throw new Error("Помилка завантаження продуктів");
        }

        productsCount.textContent = products.length;
    })
    .catch(error => console.log(error));


fetch("http://localhost:5000/categories/get-all")
    .then(response => response.json())
    .then(categories => {
        if (!Array.isArray(categories)) {
            throw new Error("Помилка завантаження категорій");
        }

        categoriesCount.textContent = categories.length;
    })
    .catch(error => console.log(error));