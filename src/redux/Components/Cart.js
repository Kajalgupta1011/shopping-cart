// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../action'; // Import the new action
import '../../App.css';
function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='cart'>
      <h1>Cart</h1>
      <ul>  
        {cart?.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}$
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
