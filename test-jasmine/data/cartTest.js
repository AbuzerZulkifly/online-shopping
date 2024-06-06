import { addtoCart, cartList, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', ()=>{
  
  it('adds/increases the quanity of an existing product', ()=> {

    spyOn(localStorage, 'setItem')  
    spyOn(localStorage, 'getItem').and.callFake(() =>{
      return JSON.stringify([{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        Quantity: 1,
        deliveryId: '1' 
      }]);
    });
    loadFromStorage();
    
    addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cartList.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(cartList[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cartList[0].Quantity).toEqual(2)
  });

  it('adds a new product', ()=> {

    spyOn(localStorage, 'setItem')
    spyOn(localStorage, 'getItem').and.callFake(() =>{
      return JSON.stringify([])
    });
    loadFromStorage();

    addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cartList.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(cartList[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cartList[0].Quantity).toEqual(1)
  })
})