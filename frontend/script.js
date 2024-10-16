document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');

    // Fetch products from the local JSON server via NGINX proxy
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">$${product.price}</div>
                `;

                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            productsContainer.innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
});
