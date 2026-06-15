import { BrowserRouter, Routes, Route } from "react-router-dom";
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

      <div
        style={{
          backgroundColor: "black",
          padding: "15px"
        }}
      >

        <a
          href="/home"
          style={{ color: "white", marginRight: "20px" }}
        >
          Home
        </a>

        <a
          href="/products"
          style={{ color: "white", marginRight: "20px" }}
        >
          Products
        </a>

        <a
          href="/cart"
          style={{ color: "white", marginRight: "20px" }}
        >
          Cart
        </a>

        <a
          href="/login"
          style={{ color: "white", marginRight: "20px" }}
        >
          Login
        </a>

        <a
          href="/register"
          style={{ color: "white" }}
        >
          Register
        </a>

      </div>

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