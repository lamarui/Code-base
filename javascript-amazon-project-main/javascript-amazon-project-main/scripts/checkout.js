import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/cart-oop.js'

async function loadPage() {
  console.log('load page');

  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();


}
loadPage().then((value) => {
  console.log('next step');
  console.log(value)
}

)
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => resolve());
  })
]).then(() => {
  // renderOrderSummary();
  // renderPaymentSummary();
});

// loadProducts(() => {
// renderOrderSummary();
// renderPaymentSummary();
// })