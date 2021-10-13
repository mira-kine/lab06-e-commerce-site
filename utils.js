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
    
}