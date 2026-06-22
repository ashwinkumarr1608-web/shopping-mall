import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#212529",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2 style={{ color: "white" }}>
          🛒 Shopping Mall
        </h2>

        <div>

          <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px"
            }}
          >
            Home
          </Link>

          <Link
            to="/products"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px"
            }}
          >
            Products
          </Link>

          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px"
            }}
          >
            Cart ({cart.length})
          </Link>

          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px"
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Register
          </Link>

        </div>
      </nav>

      {/* Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/verify" element={<VerifyOTP />} />

        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
            />
          }
        />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;