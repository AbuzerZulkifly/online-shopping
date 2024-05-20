import {cartList, addtoCart, minustoCart, updateCartQuantity} from "../data/cart.js";
import {productDetails} from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productHtml = '';

productDetails.forEach((products) =>
{
   productHtml += `
  
  <div class="product-container">
      
      <div class="product-image-container">
        <img src="images/main-page/products/${products.image}" class="product-image" >
      </div>

      <div class="product-details">
        <p>${products.name}</p>
      </div>

      <div class="product-rating">

        <img class="rating-star" src="images/main-page/ratings/rating-${products.rating.stars * 10}.png">

        <div class="rating-count">
          
          ${products.rating.count}
          
        </div>

      </div>
      
      <div class="product-price">
        $${formatCurrency(products.priceCents)}
      </div>

      <div class="product-quantity">
        <select class="select-quantity" data-select-quantity="${products.id}">
          <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
        </select>
        
        <div class="product-cart product-cart-${products.id}" style="background-color: black;">
        <img src="images/header/cart-icon.png" alt="" class="product-cart-logo">
        <div class="product-cart-quantity js-product-cart-quantity-${products.id}">0</div>  
      </div> 

      </div>
  
      <div class="">


          <div class="added removed added-to-cart js-added-to-cart-${products.id}">
              <img src="images/icons/checkmark.png">
              <div class="">
              
              </div>
              
            </div>

      </div>


      <div class="add-tocart">
        
      <button class="button-minus-tocart js-button-minus-tocart" data-product-id = "${products.id}" data-product-name = "${products.name}">-</button>
      <button class="button-add-tocart js-button-add-tocart" data-product-id = "${products.id}">+</button>
         
      </div>
  </div>


  `

}
);

document.querySelector('.main-product-container').innerHTML = productHtml;
/* <div class="product-cart product-cart-${products.id}" style="background-color: black;">
        <img src="images/header/cart-icon.png" alt="" class="product-cart-logo">
        <div class="product-cart-quantity js-product-cart-quantity-${products.id}">0</div>  
      </div>  
 */

 

document.querySelectorAll('.js-button-add-tocart').forEach((button) => {

  button.addEventListener ('click', () =>{
  const productId = button.dataset.productId;
  let cartValue = document.querySelector('.js-cart-quantity')
  let productcartValue = document.querySelector(`.js-product-cart-quantity-${productId}`)
  let productQuantity = document.querySelector(`.product-cart-${productId}`)
  
     

     addtoCart(productId, productcartValue);
     updateCartQuantity(cartValue);
    
  })
})


document.querySelectorAll('.js-button-minus-tocart').forEach((button) => {

  button.addEventListener ('click', () =>{
    const productId = button.dataset.productId;
    let cartValue = document.querySelector('.js-cart-quantity')
    let productcartValue = document.querySelector(`.js-product-cart-quantity-${productId}`)
    let quantitySelector = document.querySelector('.product-quantity').value
    let productQuantity = document.querySelector(`.product-cart-${productId}`)
  
    minustoCart(productId, productcartValue, productQuantity)
    updateCartQuantity(cartValue);      
    } 
)})

