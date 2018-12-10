export const orderTotal = (arrayofOrders) => (
    arrayofOrders.reduce(
        (reduced, item) =>
            reduced + (item.price * (item.quantity === undefined? 1 :  item.quantity )),
        0)
)
