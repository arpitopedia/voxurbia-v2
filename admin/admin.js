function showAddProductForm() {
    document.getElementById('addProductForm').classList.remove('hidden');
}

function hideAddProductForm() {
    document.getElementById('addProductForm').classList.add('hidden');
}

// Load products
function loadProducts() {
    fetch('get_products.php')
        .then(response => response.json())
        .then(products => {
            const productList = document.querySelector('.product-list');
            productList.innerHTML = products.map(product => `
                <div class="product-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-details">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <span class="price">$${product.price}</span>
                    </div>
                    <div class="product-actions">
                        <button onclick="editProduct(${product.id})">
                            <i class='bx bx-edit'></i>
                        </button>
                        <button onclick="deleteProduct(${product.id})">
                            <i class='bx bx-trash'></i>
                        </button>
                    </div>
                </div>
            `).join('');
        });
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.querySelector('.login-btn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginBtn.classList.add('loading');
        
        // Simulate login process
        setTimeout(() => {
            loginForm.submit();
        }, 1500);
    });

    // Input focus effects
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', loadProducts);