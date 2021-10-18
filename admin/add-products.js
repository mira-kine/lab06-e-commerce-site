import { addProduct } from '../utils.js';
// GET - get our form
    // set it to a const, DOM ID the form
const form = document.getElementById('product-form');
    // form.addEventListener('submit' and preventDefault)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // set data to new FormData(form); inside the event listener so that it doesn't run while the page loads
    // MODIFY - create new object from formData
    const data = new FormData(form);
        // set const to new object, get items using data.get and whatever you named each in HTML
    const newMochi = {
        id: data.get('id'),
        name: data.get('name'),
        flavor: data.get('flavor'),
        mood: data.get('mood'),
        img: data.get('img'),
        price: data.get('price')
    };
    // SET - call adProduct using that new object
    addProduct(newMochi);
    alert('new product added');
    document.getElementById('product-form');
});

