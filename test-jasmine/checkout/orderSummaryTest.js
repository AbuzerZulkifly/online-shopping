import { renderOrder } from "../../scripts/checkout/ordersummary.js";
import { addtoCart,cartList,loadFromStorage } from "../../data/cart.js";
describe('test suite; renderOrder', ()=>{
  it('displays the cart', () =>{
    document.querySelector('.js-test-container').innerHTML = `
    
    <div class="js-checkout-details"> </div>
    <div class="js-order-summary"> </div>

    `;
   const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
   const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
    spyOn(localStorage, 'getItem').and.callFake(() =>{
      return JSON.stringify([
        {
          productId:productId1,
          Quantity: 1,
          deliveryId: '1'
        },
        {
          productId: productId2,
          Quantity: 1,
          deliveryId: '2'
        }
      
      ]);
    });
    loadFromStorage();
    renderOrder();

    expect(
      document.querySelectorAll('.js-sub-container-test').length)
      .toEqual(2)
    
      expect(
      document.querySelector(`.js-quantity-details-test-${productId1}`).innerText
       ). toContain('Quantity: 1')

       expect(
        document.querySelector(`.js-quantity-details-test-${productId2}`).innerText
         ). toContain('Quantity: 1')

       });

       it('removes a product', ()=>{
        document.querySelector('.js-test-container').innerHTML = `
    
        <div class="js-checkout-details"> </div>
        <div class="js-order-summary"> </div>
    
        `;

        const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
         spyOn(localStorage, 'getItem').and.callFake(() =>{
           return JSON.stringify([
             {
               productId:productId1,
               Quantity: 1,
               deliveryId: '1'
             },
             {
               productId: productId2,
               Quantity: 1,
               deliveryId: '2'
             }
           
           ]);
         });
         loadFromStorage();
         renderOrder();

         expect(document.querySelector(`.js-delete-link-test-${productId1}`).click())
         
    expect(
      document.querySelectorAll('.js-sub-container-test').length)
      .toEqual(1)
       })

       
})