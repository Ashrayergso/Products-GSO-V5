```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    const productCards = document.querySelectorAll('.product-card');
    const searchBar = document.querySelector('.search-bar');
    const exportButton = document.querySelector('.export-button');

    productCards.forEach((card) => {
        const searchButton = card.querySelector('.search-button');
        const alternativeSearchButton = card.querySelector('.alternative-search-button');
        const selectCheckbox = card.querySelector('.select-checkbox');
        const quantityInput = card.querySelector('.quantity-input');

        searchButton.addEventListener('click', () => {
            const productName = card.querySelector('.product-name').innerText;
            window.location.href = `/search?product=${productName}`;
        });

        alternativeSearchButton.addEventListener('click', () => {
            const productName = card.querySelector('.product-name').innerText;
            window.location.href = `/alternative-search?product=${productName}`;
        });

        selectCheckbox.addEventListener('change', () => {
            if (selectCheckbox.checked) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });

        quantityInput.addEventListener('input', () => {
            const quantity = quantityInput.value;
            if (quantity < 0) {
                quantityInput.value = 0;
            }
        });
    });

    searchBar.addEventListener('input', () => {
        const searchValue = searchBar.value.toLowerCase();
        productCards.forEach((card) => {
            const productName = card.querySelector('.product-name').innerText.toLowerCase();
            if (!productName.includes(searchValue)) {
                card.style.display = 'none';
            } else {
                card.style.display = 'block';
            }
        });
    });

    exportButton.addEventListener('click', () => {
        const selectedProducts = Array.from(productCards).filter((card) => card.classList.contains('selected'));
        const productData = selectedProducts.map((card) => {
            const productName = card.querySelector('.product-name').innerText;
            const productNumber = card.querySelector('.product-number').innerText;
            const productCost = card.querySelector('.product-cost').innerText;
            const quantity = card.querySelector('.quantity-input').value;
            return { productName, productNumber, productCost, quantity };
        });
        const dataStr = JSON.stringify(productData);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = 'data.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    });
});
```