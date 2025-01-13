const products = [
    { id: 1, name: "Halal Chicken", category: "food", image: "images/halal-chicken.jpeg"},
    { id: 2, name: "Modest Dress", category: "clothing", image: "images/modest-dress.jpeg" },
    { id: 3, name: "Islamic Book", category: "books", image: "images/islamic-books.jpeg" },
    { id: 4, name: "Halal Snacks", category: "food", image: "images/halal-snacks.jpeg" },
    { id: 5, name: "Hijab", category: "clothing", image: "images/product 1.jpeg" }
];

const productGrid = document.querySelector(".product-grid");
const filterButtons = document.querySelectorAll(".filters button");

function loadProducts(filter = "all") {
    productGrid.innerHTML = "";
    const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `<img src="${product.image}" alt="${product.name}" class="product-image"><h3>${product.name}</h3><p>Category: ${product.category}</p>`;
        productGrid.appendChild(productCard);
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        loadProducts(category);
    });
});

loadProducts();

const checkoutForm = document.getElementById("checkout-form");
const contactForm = document.getElementById("contact-form");

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = "red";
            isValid = false;
        } else {
            input.style.borderColor = "#ccc";
        }
    });
    return isValid;
}

checkoutForm.addEventListener("submit", e => {
    e.preventDefault();
    if (validateForm(checkoutForm)) {
        alert("Order placed successfully!");
        checkoutForm.reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
});

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    if (validateForm(contactForm)) {
        alert("Query submitted successfully!");
        contactForm.reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
});

