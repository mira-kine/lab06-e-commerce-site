import { findById, getProducts } from '../utils.js';

export function renderMochiAdmin(newMochi){
    const newMochiItem = document.createElement('div');
    newMochiItem.classList.add('new-mochi-item');

    const mochiHeader = document.createElement('h3');
    mochiHeader.textContent = newMochi.name;

    const rmvProduct = document.createElement('button');
    rmvProduct.textContent = 'Remove Product';
    rmvProduct.id = newMochi.id;
    rmvProduct.classList.add('remove-product');


    newMochiItem.append(mochiHeader, rmvProduct);
    
    return newMochiItem;
}

export function rmvProduct(newItem){
    let products = getProducts();
    let product = findById(newItem, products);
    const productIndex = products.indexOf(product);
    products.splice(productIndex, 1);
    
    let productsString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productsString);
}