import React from 'react';
import './Cart.css'
const Cart = ({cart, clearCart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = product.price*product.quantity + total;
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
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;