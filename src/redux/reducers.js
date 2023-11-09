// reducers.js
const initialState = {
    cart: [],
  };
  // reducers.js
export const cartReducer = (state = initialState, action) => {
  console.log('Action:', action);
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('Adding to cart:', action.product);
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case 'REMOVE_FROM_CART':
      console.log('Removing from cart:', action.productId);
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.productId),
      };
    default:
      return state;
  }
};
