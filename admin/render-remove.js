import { getProducts } from '../utils.js';
import { renderMochiAdmin, rmvProduct } from './admin-utils.js';

const productListAdmin = document.getElementById('product-list-admin');
const mochis = getProducts();

for (let mochi of mochis){
    const newMochiItem = renderMochiAdmin(mochi);
    productListAdmin.append(newMochiItem);
}

const removeButtons = document.querySelectorAll('.remove-product');
for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', () => {
        rmvProduct(removeButton.id);
        alert('Item removed');
        window.location.reload();
    });
}