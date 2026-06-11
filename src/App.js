import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route
    path="/products"
    element={<Products cart={cart} setCart={setCart} />}
  />

  <Route
    path="/cart"
    element={<Cart cart={cart} />}
  />

  <Route path="/admin" element={<Admin />} />
</Routes>
    </div>
  );
}

export default App;