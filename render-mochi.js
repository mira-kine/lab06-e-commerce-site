export function renderMochi(mochi){
    const mochiItem = document.createElement('div');
    mochiItem.classList.add('mochi-item');

    const mochiHeader = document.createElement('h2');
    mochiHeader.textContent = mochi.name;
    
    const img = document.createElement('img');
    img.src = mochi.img;

    const mochiFlavor = document.createElement('p');
    mochiFlavor.textContent = `Flavor: ${mochi.flavor}`;

    const mochiMood = document.createElement('p');
    mochiMood.textContent = `Mood: ${mochi.mood}`;

    const mochiPrice = document.createElement('p');
    mochiPrice.textContent = `Price: $${mochi.price}`;

    const addProduct = document.createElement('button');
    addProduct.textContent = 'Add to cart';
    addProduct.id = mochi.id;
    addProduct.classList.add('add-product');

    // let itemCount = 0;
    // itemCount.qty = mochi.qty;
    // const addToCart = document.createElement('span');
    // addToCart.textContent = `Items in Cart: ${itemCount}`;

    mochiItem.append(mochiHeader, img, addProduct, mochiFlavor, mochiMood, mochiPrice);
    
    return mochiItem;
}