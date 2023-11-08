// src/App.js

import React, { useState } from 'react';
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  const [user, setUser] = useState(null);

  // Check if the user is authenticated (e.g., if a token is stored in local storage).
  const isAuthenticated = localStorage.getItem('token');

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user ? user.username : 'User'}!</h2>
          <button onClick={() => localStorage.removeItem('token')}>Logout</button>
          <ProductList/>
          <ShoppingCart/>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
