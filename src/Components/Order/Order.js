import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const Order = () => {
    const {previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart)
    const dltHandler = (id) => {
        const remainingProduct = cart.filter(product => product.id !== id);
        setCart(remainingProduct);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div>
            <div className='shop-container'>
                <div className='orders-container'>
                    {
                        cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        dltHandler={dltHandler}></ReviewItem>)
                    }
                    {
                        cart.length === 0 && <h2>No products added, <Link to='/shop'>Shop Now</Link></h2>
                    }
                </div>
                <div className='cart-container'>
                    <Cart clearCart={clearCart} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;