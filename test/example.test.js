import { renderMochi } from '../render-mochi.js';
import { mochis } from '../data/mochis.js';
import { findById } from '../utils.js';
import { renderItem } from '../render-item.js';
import { cart } from '../data/cart-data.js';
import { getCart, addItem } from '../utils.js';

const test = QUnit.test;


test('renderMochi should return an HTML snippet', (expect) => {
    const expected = `<div class="mochi-item"><h2>calm mochi</h2><img src="./assets/calm-mochi.jpg"><button>add</button><p>Flavor: ube</p><p>Mood: calm</p><p>Price: $2</p></div>`;
    const calmMochi = mochis[0];
    const actual = renderMochi(calmMochi).outerHTML;
    expect.equal(actual, expected);
});


test('findById function returns matching ID', (expect) => {
    const expected = { id: '1',
        name: 'calm mochi',
        flavor: 'ube',
        mood: 'calm',
        img: './assets/calm-mochi.jpg',
        price: 2 };
    const actual = findById('1', mochis);
    expect.deepEqual(actual, expected);
});


test('DOM render items in shopping cart, HTML snippet', (expect) => {
    const expected = `<tr><td>calm mochi</td><td>2</td><td>3</td><td>6</td></tr>`;
    const cartItem = cart[0];
    const mochiData = mochis[0];
    const actual = renderItem(cartItem, mochiData).outerHTML;
    expect.equal(actual, expected);
});


test('getCart function will return correct cart if it exists', (expect) => {
    const testCart = [
        { id:'1', qty: '2' },
        { id:'2', qty: '3' }
    ];
    localStorage.setItem('CART', JSON.stringify(testCart));
    const cart = getCart();
    expect.deepEqual(cart, testCart);
});


test('getCart will return empty array if item does not exist yet', (expect) => {
    localStorage.removeItem('CART');
    const cart = getCart();
    expect.deepEqual(cart, []);
});


test('addItem will increase quantity of correct item by one', (expect) => {
    const testCart = [
        { id:'1', qty: 2 },
        { id:'2', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(testCart));
    addItem('1');
    const cart = getCart();
    const expected = [
        { id:'1', qty: 3 },
        { id:'2', qty: 3 }
    ];
    expect.deepEqual(cart, expected);
});


test('addItem will make new item in shoppingcart if does not exist yet', (expect) => {
    localStorage.removeItem('CART');
    const expected = [{ id : '1', qty: 1 }];
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);
});