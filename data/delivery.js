export const deliveryOption = [{
  id: '1',
  days: 7,
  priceCents: 0
},

{
  id: '2',
  days: 3,
  priceCents: 499 
},

{
  id: '3',
  days: 1,
  priceCents: 999 
}]


export function getDelivery(deliveryOptionid) {
  let deliveryOptions;

  deliveryOption.forEach((option)=>{
    if (option.id === deliveryOptionid )
    {
      deliveryOptions = option;
    }
  });
  return deliveryOptions

}