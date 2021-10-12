import { mochis } from '../data/mochis.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

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

for (let cartItem of cart) {
    const mochiData = findById(cartItem.id, mochis);

    const trItem = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = mochiData.name;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = mochiData.price;
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * mochiData.price;

    trItem.append(tdName, tdPrice, tdQty, tdTotal);
    shoppingTable.appendChild(trItem);
}
