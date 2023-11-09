
// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../action';
import '../../App.css';

function Cart() {
  const cart = useSelector((state) => state.cart) || []; // Initialize as an empty array if undefined
  console.log(cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='cart'>
    <h1>Cart</h1>
    <ul>
      {Array.isArray(cart) && cart.length > 0 ? (
        cart.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}$
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove
            </button>
          </li>
        ))
      ) : (
        <li>No items in the cart</li>
      )}
    </ul>
  </div>
  );
}

export default Cart;

