// ShoppingCart.js
import React from 'react';
import { useCart } from './CartContext';

const ShoppingCart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const updateCart = (cart) => {
    dispatch({ type: 'UPDATE_CART', payload: { cart } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={() => updateCart([])}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
