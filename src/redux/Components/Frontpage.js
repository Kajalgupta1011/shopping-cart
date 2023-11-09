import React, { useState } from "react";
import ProductFeed from "./ProductFeed";
import { Link } from 'react-router-dom';
import '../../App.css';
function Frontpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedToken = localStorage.getItem("token");
  const handleLogout = () => {
    // setIsLoggedIn(false);
    if (storedToken) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUsername("");
      setPassword("");
    }
  };
  const handleLogin = () => {
    // Send a POST request to the API for user authentication
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.token);
        if (data.token) {
          localStorage.setItem("token", data.token);
          // window.location.reload()
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        alert("bad cred");
        console.error("Login failed", error);
      });
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <div className="product_feed">
          <div className="heading">
            <h1>Welcome, {username}!</h1>

              <div className="right-heading">
              <Link to="/cart">Go to Cart</Link>
<button className="logout-btn" onClick={handleLogout}>Logout </button>
              </div>
            
          </div>
          <ProductFeed />
        </div>
      ) : (
        <div className="login-container">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Frontpage;
