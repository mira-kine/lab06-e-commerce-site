import { renderMochi } from './render-mochi.js';
import { mochis } from './data/mochis.js';
import { addItem } from './utils.js';

const productList = document.getElementById('product-list');

for (let mochi of mochis){
    const mochiItem = renderMochi(mochi);
    productList.append(mochiItem);
}

// loop through all the add buttons
// add an event listener to each one of them
// on click, call addItem with the button's id

const addButtons = document.querySelectorAll('.add-product');
for (let addButton of addButtons) {
    addButton.addEventListener('click', () => {
        addItem(addButton.id);
        alert('Thank you! Item Added');
    });
}


