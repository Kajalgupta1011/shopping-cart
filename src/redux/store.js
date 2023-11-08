// store.js
import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducers'; // Import your cartReducer or any other reducers you have

const rootReducer = combineReducers({
  cart: cartReducer, // Add your reducer(s) here
});

const store = createStore(rootReducer);

export default store;
