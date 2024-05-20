export const cartList = [
  {
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    Quantity: 2,
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    Quantity: 1,
  }

];

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
        Quantity: 1
      })
       }
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
}

export function updateCartQuantity(cartValue) {
  let cartQuantity = 0; 
    cartList.forEach((item) => {
        cartQuantity += item.Quantity
        cartValue.innerHTML = cartQuantity        
    })
    
}
