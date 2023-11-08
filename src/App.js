// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './redux/Components/Cart';
import Frontpage from './redux/Components/Frontpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
