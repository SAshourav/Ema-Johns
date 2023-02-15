import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = product.price + total;
        shipping = shipping + product.shipping;
    }
    const tax = (total*0.1).toFixed(2);
    const GrandTotal = total+shipping+JSON.parse(tax);
    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Price: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${GrandTotal}</h3>
        </div>
    );
};

export default Cart;