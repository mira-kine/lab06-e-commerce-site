import { mochis } from '../data/mochis.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';
import { renderItem } from '../render-item.js';
import { calcOrderTotal } from '../utils.js';

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

for (let cartItem of cart) {
    const mochiData = findById(cartItem.id, mochis);
    const trItem = renderItem(cartItem, mochiData);
    orderTotal.textContent = calcOrderTotal(cart, mochis);
    shoppingTable.appendChild(trItem);
}

