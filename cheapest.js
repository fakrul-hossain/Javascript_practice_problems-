const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'Black'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 56000, color: 'Golden'},
    {name: 'Xaomi', camera: 12, storage: '32gb', price: 32000, color: 'Pink'},
    {name: 'Oppo', camera: 12, storage: '32gb', price: 28000, color: 'silver'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 38000, color: 'silver'},
    {name: 'HTC', camera: 12, storage: '32gb', price: 42000, color: 'silver'}
]


function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
        /* else if (phone.price > cheapest.price) {
            cheapest = phone;
        } */
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones)

console.log(mySelection);
