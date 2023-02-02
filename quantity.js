const shoppingCart = [
    {name: 'shoe', price: 2200, quantity: 2},
    {name: 'shirt', price: 1200, quantity: 5},
    {name: 'pant', price: 1600, quantity: 3},
    {name: 'belt', price: 600, quantity: 1},
    {name: 't-shirt', price: 800, quantity: 4}
]

function totalCost(products) {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity
        sum = sum + productTotal
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart)

console.log('total expense today:', expense);
