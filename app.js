import { renderMochi } from './render-mochi.js';
import { mochis } from './mochis.js';

const productList = document.getElementById('product-list');

for (let mochi of mochis){
  const mochiItem = renderMochi(mochi);
  productList.append(mochiItem);
}