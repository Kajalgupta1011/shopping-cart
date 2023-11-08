// reducers.js
const initialState = {
    cart: [],
  };
  // reducers.js
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.product],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== action.productId),
        };
      default:
        return state;
    };
}