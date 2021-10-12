import { renderMochi } from '../render-mochi.js';
import { mochis } from '../data/mochis.js';
import { findById } from '../utils.js';

const test = QUnit.test;

test('renderMochi should return an HTML snippet', (expect) => {
    const expected = `<div class="mochi-item"><h2>calm mochi</h2><img src="./assets/calm-mochi.jpg"><button>add</button><p>Flavor: ube</p><p>Mood: calm</p><p>Price: $1.5</p></div>`;
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
        price: 1.5 };
    const actual = findById('1', mochis);
    expect.deepEqual(actual, expected);
});

// test('DOM render items in shopping cart, HTML snippet', (expect) => {
//     const expected = `<table> 
//         <thead>
//             <tr><th>Item</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//         </tr></thead>
//         <tbody id="shopping-table">
//         <tr><td>calm mochi</td><td>1.5</td><td>3</td><td>4.5</td></tr><tr><td>creative mochi</td><td>1.5</td><td>2</td><td>3</td></tr></tbody>
//         <tfoot>
//             <tr>
//                 <td></td>
//                 <td></td>
//                 <td>Order Total: </td>
//                 <td>TBD</td>
//             </tr>
//         </tfoot>
//     </table>`;
//     const actual = 
//     expect.equal(actual, expected);
// });