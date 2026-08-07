const product1 = {
    name: 'Fc 25',
    price: 20000
}

const product2 = {
    name: 'Nba 2k25',
    price: 20000
}

function isSameProduct(product1,product2) {
    if (product1.name === product2.name && product1.price === product2.price ) {
        return true;
    } else {
         return false
    }


}
console.log(isSameProduct(product1, product2));