export function findById(id, items) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcOrderTotal(cart, mochis){
    let totalPrice = 0;
    for (let item of cart) {
        const mochi = findById(item.id, mochis);
        totalPrice = totalPrice + mochi.price * item.qty;
    }
    
    return totalPrice;

}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

export function clearCart(){
    localStorage.removeItem('CART');
    window.location.replace('..');
}


// 2 scenarios for function
// 1) function has never run before -- no data in localStorage
// 2) function HAS run before -- mochis.js data is now in ls

export function getProducts(){
    // get the PRODUCTS from local storage, set it to a mutable variable using let variable = localStorage.getItem('OBJECT');
    // set const products to parsed info from lsproducts
    // if there are NO products in local storage -- seed the data
    // return null || mochis --> Scenario 1 -- returns mochis
    // return products || mochis --> Scenarios 2 -- returns lsProducts
}