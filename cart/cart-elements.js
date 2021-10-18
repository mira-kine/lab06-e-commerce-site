import { mochis } from '../data/mochis.js';
import { findById, calcOrderTotal, getCart, clearCart } from '../utils.js';
import { renderItem } from '../render-item.js';
// import getProducts function to receive from localStorage

// import cart data
// loop through each item
// get product info from mochis array using findById
// create table <tr> element using structure <tr><td>

    // <td>Calm Mochi</td>
    //     <td>$1.5</td>
    //     <td>3</td>
    //     <td>$4.5</td> 
    //     <td>Order Total:</td>
    //     <td>$4.5</td>
const shoppingTable = document.getElementById('shopping-table');
const orderTotal = document.getElementById('order-total');
const cart = getCart();

for (let cartItem of cart) {
    const mochiData = findById(cartItem.id, mochis);
    const trItem = renderItem(cartItem, mochiData);
    orderTotal.textContent = calcOrderTotal(cart, mochis);
    shoppingTable.appendChild(trItem);
}

const orderBtn = document.getElementById('order-button');
orderBtn.addEventListener('click', ()=>{
    if (cart.length <= 0){
        orderBtn.disabled = true;
        return alert('Please add something to your cart!');
    }
    else {
        clearCart();
    }
});

