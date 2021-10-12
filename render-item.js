export function renderItem(cartItem, mochiData) {
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

    return trItem;
}