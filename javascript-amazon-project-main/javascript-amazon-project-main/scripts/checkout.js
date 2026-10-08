import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";

// import '../data/cart-oop.js'

new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}).then(() => {
    console.log(`next step`)
}
)

loadProducts(() => {
renderOrderSummary();
renderPaymentSummary();
})