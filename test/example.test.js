import { renderMochi } from '../render-mochi.js'
import { mochis } from '../mochis.js'

const test = QUnit.test;

test('renderMochi should return an HTML snippet', (expect) => {
    const expected = `<div class="mochi-item"><h2>calm mochi</h2><img src="./assets/calm-mochi.jpg"><button>add</button><p>Flavor: ube</p><p>Mood: calm</p><p>Price: 1.5</p><hr></div>`;
    const calmMochi = mochis[0];
    const actual = renderMochi(calmMochi).outerHTML;
    expect.equal(actual, expected);
});
