import { formatCurrency } from "../scripts/utils/money.js"; 
 
 
 export function getProduct(productId) {
  
let matchingProduct;

products.forEach((product) => {
    if(product.id === productId) {
        matchingProduct = product
    }
});

return matchingProduct
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsURL() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`
  }  

  getPrice() {
return `$${formatCurrency(this.priceCents )}`
  }
}

