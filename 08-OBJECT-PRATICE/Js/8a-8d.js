const product = {
    name: `basketball`,
    price: 2095
}

console.log(product)

product.price += 500;

product['delivery-time'] = '3 days'
console.log(product)


    const product1 = {
        name: 'Nike sock',
        price: 400
    };

     const product2 = {
    name: 'Apple Airpods',
    price: 1500
    };
    
function comparePrice(product1, product2) {


    if (product1.price < product2.price) {
        return product1;
    } else {
        return product2;
    }

     
}

console.log(comparePrice(product1, product2))