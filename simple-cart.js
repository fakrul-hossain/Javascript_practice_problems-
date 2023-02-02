const shoppingCart = [
    {name: 'shoe', price: 2200},
    {name: 'shirt', price: 1200},
    {name: 'pant', price: 1600},
    {name: 'belt', price: 600},
    {name: 't-shirt', price: 800}
]

function totalCost(products) {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart)

console.log('total expense today:', expense);
