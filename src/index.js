export const orderTotal = (arrayOfOrders) => {
    const preTotal = arrayOfOrders.reduce(
      (reduced, item) => (
        item.quantity !== undefined ?
          reduced + (item.price * item.quantity)
          :
          reduced + item.price
      ),
      0
    )
  
    const shipping = arrayOfOrders.find(item => item.shipping)
  
    return (
      shipping &&
        preTotal >= (shipping.freeShipping + shipping.price) ?
          preTotal - shipping.price
          :
          preTotal
    )
  }