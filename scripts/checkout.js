import {cartList} from "../data/cart.js";
import {productDetails } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";


let checkoutHtml = ``;
cartList.forEach((cartItem)=>{

  const productId = cartItem.productId;

  let matchingProduct;

  productDetails.forEach((product) => {

    if (product.id === productId) {
      matchingProduct = product;
    }

  })

  checkoutHtml +=
`

  <div class="sub-container">
    <div class="delivery-details"> Delivery Date: Tuesday, June 22</div>  
    <div class="checkout-details-container">
      <div class="checkout-details-img-container">
        <img src="images/main-page/products/${matchingProduct.image}" class="checkout-details-img">
      </div>
      
      <div class="checkout-details">
        <div class="product-name">
          <p>${matchingProduct.name}</p>
        </div>
        <div class="product-price">
        ${formatCurrency(matchingProduct.priceCents)}
        </div>
        <div class="quantity-details">
          <span>
            Quantity: <span>  ${cartItem.Quantity} </span>
          </span>
          <span class="update-link link-primary">
            Update
          </span>
          <span class="delete-link link-primary">Delete</span>
        </div>
      </div>

      <div class="delivery-details-container">

        <div class="options">
          Choose a Delivery Option:
        </div>

        <div class="delivery-options">
          <input type="radio" checked class="delivery-options-input" name="delivery-options-${matchingProduct.id}">
          <div class="delivery-date">
            Tuesday June 22
            <br>
            <span class="shipping"> Shipping: </span>
            <span class="shipping-price"> Free </span>
          </div>
        </div>


        <div class="delivery-options">
          <input type="radio" class="delivery-options-input" name="delivery-options-${matchingProduct.id}">
          <div class="delivery-date">
            Sunday June 12
            <br>
            <span class="shipping"> Shipping: </span>
            <span class="shipping-price"> $5.00</span>
          </div>
        </div>


        <div class="delivery-options">
          <input type="radio" class="delivery-options-input" name="delivery-options-${matchingProduct.id}">
          <div class="delivery-date">
            Sunday June 5
            <br>
            <span class="shipping"> Shipping: </span>
            <span class="shipping-price"> $7.99</span>
          </div>
        </div>

      </div>

    </div>
  </div>  


`;
});
document.querySelector('.js-checkout-details').innerHTML = checkoutHtml
