import { cartList } from "../../data/cart.js";
import { findProduct } from "../../data/products.js";
import { getDelivery } from "../../data/delivery.js";
import { formatCurrency } from "../utils/money.js";



export function renderPayment() {

let productPriceCents = 0;
let shippingPriceCents = 0;
cartList.forEach((cartItem) => {

const product =  findProduct(cartItem.productId)
productPriceCents += product.priceCents * cartItem.Quantity

const deliveryOptions = getDelivery(cartItem.deliveryId)
shippingPriceCents += deliveryOptions.priceCents; 

})

const totalBeforeTax = productPriceCents + shippingPriceCents;
const totalTax = totalBeforeTax * 0.1;
const totalAmount = totalBeforeTax + totalTax;

const totalProduct = Number(cartList.productId)
const paymentsummaryhtml = `


        <div class="order-summary-title">
        <h3>Order Summary</h3>
        </div>

        <div class="order-summary-details">
          <div>
            Items(${totalProduct}):
          </div>
          <div class="order-summary-payment">
            $${formatCurrency(productPriceCents)}
          </div>
        </div>
            
        <div class="order-summary-details">
          <div>
            Shipping &amp; Handling:
          </div>
          <div class="order-summary-payment">
            $${formatCurrency(shippingPriceCents)}
          </div>
        </div>


        <div class="order-summary-details subtotal">
        <div>
          Total before tax:
        </div>
        <div class="order-summary-payment">
          $${formatCurrency(totalBeforeTax)}
        </div>
        </div>


        <div class="order-summary-details">
        <div>
        Estimated Tax (10%):
        </div>
        <div class="order-summary-payment">
        $${formatCurrency(totalTax)}
        </div>
        </div>

        <div class="order-summary-details total-row">
        <div class="order-total">
        Order Total:
        </div>
        <div class="order-summary-payment">
        $${formatCurrency(totalAmount)}
        </div>
        </div>

        <div class="place-order">
        <button class="place-order-button js-place-order-button">
        Place Your Order
        </button>
        </div>


`;
document.querySelector('.js-order-summary').innerHTML = paymentsummaryhtml
}