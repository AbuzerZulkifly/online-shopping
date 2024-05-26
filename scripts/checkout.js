import {cartList, removeCartQuantity, updateQuantity, localStorageSave} from "../data/cart.js";
import {productDetails } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOption } from "../data/delivery.js";



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

  <div class="sub-container js-sub-container-${matchingProduct.id}">
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
          <span class="quantity-label">
            Quantity: <span class="js-quantity-value-${matchingProduct.id}">  ${cartItem.Quantity} </span>
          </span>
          <span class="update-link link-primary js-update-link" data-product-id="${matchingProduct.id}" >
            Update
          </span>
          <input type="number" class="quantity-input js-quantity-input-${matchingProduct.id}"> 
          <span class="save-quantity-link link-primary" data-product-id="${matchingProduct.id}">Save</span>
          
          <span class="delete-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
          
        </div>
      </div>

      <div class="delivery-details-container">

        <div class="options">
          Choose a Delivery Option:
        </div>

        ${deliveryDateOption(matchingProduct)}

      </div>

    </div>
  </div>  


`;
});

function deliveryDateOption(matchingProduct) {

  let Deliveryhtml = ''
  deliveryOption.forEach((deliveryOptions) => {

    const today = dayjs();
    const deliveryDate = today.add(deliveryOptions.days, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D')

    const priceString = deliveryOptions.priceCents === 0
    ? 'Free' : `$${formatCurrency(deliveryOptions.priceCents)}`

    Deliveryhtml +=
    `

    <div class="delivery-options">
    <input type="radio" class="delivery-options-input" name="delivery-options-${matchingProduct.id}">
    <div class="delivery-date">
      ${dateString}
      <br>
      <span class="shipping"> Shipping: </span>
      <span class="shipping-price"> ${priceString}</span>
    </div>
  </div>
    
    
    `

  })
  return Deliveryhtml;
}

document.querySelector('.js-checkout-details').innerHTML = checkoutHtml

document.querySelectorAll('.js-delete-link')
.forEach((deleteLink) => {

  deleteLink.addEventListener('click', ()=>{
    const productId = deleteLink.dataset.productId;
    removeCartQuantity(productId);

    const productContainer = document.querySelector(`.js-sub-container-${productId}`)
    productContainer.remove();
  })
     
})

document.querySelectorAll('.js-update-link')
.forEach((updateLink) => {

  const productId = updateLink.dataset.productId;
  let container = document.querySelector(`.js-sub-container-${productId}`);
  updateLink.addEventListener('click', ()=> {
    
    container.classList.add('is-editing-quantity')

  })
})


document.querySelectorAll('.save-quantity-link')
.forEach((saveLink) => {
  const productId = saveLink.dataset.productId;
  let container = document.querySelector(`.js-sub-container-${productId}`)
  let quantity = (document.querySelector(`.js-quantity-input-${productId}`));
  let newQuantityValue = document.querySelector(`.js-quantity-value-${productId}`);
  
  saveLink.addEventListener('click', ()=> {
    container.classList.remove('is-editing-quantity')
    let newQuantity = Number(quantity.value);

    if (newQuantity < 0 || newQuantity > 999) {
      alert('You cannot enter this amount');
    }
    else {
      updateQuantity(productId, newQuantity);
      newQuantityValue.innerHTML = newQuantity;
      cartList.Quantity = cartList.Quantity + newQuantity    
      localStorageSave();
      
    }
  })  
})