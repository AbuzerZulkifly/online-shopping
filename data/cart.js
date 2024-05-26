export let cartList = JSON.parse(localStorage.getItem('cartList'));

if (!cartList) {
  cartList = [
    {
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      Quantity: 2,
      deliveryId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      Quantity: 1,
      deliveryId: '1'
    }
  
  ];
  
} 


export function localStorageSave() {
  localStorage.setItem('cartList', JSON.stringify(cartList))
}

export function addtoCart(productId, productcartValue) {
  let isMatchingItem
  cartList.forEach((item) =>{
  
    if(productId === item.productId)
    {
      isMatchingItem = item
    }

  });


    if(isMatchingItem) 
    {
      isMatchingItem.Quantity += 1
      
      productcartValue.innerHTML = isMatchingItem.Quantity  
      
    }

    else
      { 
       cartList.push({
        productId: productId,
        Quantity: 1,
        deliveryId: '1'
      })
       }
       localStorageSave();
}

export function minustoCart(productId, productcartValue, productQuantity){
 
  let isMatchingItem;
  cartList.forEach((item) =>{
    
    if(productId === item.productId)
    {
      isMatchingItem = item
    }

  });
  
  if (isMatchingItem.Quantity < 1 ) {
    productQuantity.classList.remove('product-quantity-visible')
   
  }

  else {
    if(isMatchingItem) 
    {
      
      isMatchingItem.Quantity -= 1
      
      productcartValue.innerHTML = isMatchingItem.Quantity  
      
    }

    else
      { 
       cartList.splice({
        productId: productId,
        Quantity: 1
      })
       }

}
localStorageSave();
}

export function updateCartQuantity(cartValue) {
  let cartQuantity = 0; 
    cartList.forEach((item) => {
        cartQuantity += item.Quantity
        cartValue.innerHTML = cartQuantity        
    })
    
}


export function removeCartQuantity(productId) {
// When we press the link of a particular product, except for that product every other product will be inserted into the new cart. 
// if the product id does not match with clicked link of an product, then those products will be entered into the cart
// oru product de link eh press pannal, ande product id ode match aahade ella product um cart ulluku save avum
  const newCart = [];
  cartList.forEach((cartItem) => {
  if (cartItem.productId !== productId)
    newCart.push(cartItem);

  })
  cartList = newCart
  localStorageSave();
}


export function updateQuantity(productId, newQuantity) {

 let matchingItem;
 cartList.forEach((cartItem)=>{
  if (productId === cartItem.productId)
  {
    matchingItem = cartItem
  }
 });
 matchingItem.Quantity = newQuantity;
 localStorageSave();
}