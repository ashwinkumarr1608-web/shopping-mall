import "./App.css";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

function App() {
  const [page, setPage] = useState("home");
const [cart, setCart] = useState([]);
  return (
  <div>
    <div className="navbar">

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("login")}>
        Login
      </button>

      <button onClick={() => setPage("register")}>
        Register
      </button>

      <button onClick={() => setPage("products")}>
        Products
      </button>

      <button onClick={() => setPage("cart")}>
        Cart
      </button>

      <button onClick={() => setPage("admin")}>
        Admin
      </button>

</div>

<div className="content">

<hr />

      {page === "home" && <Home />}
{page === "login" && <Login />}
{page === "register" && <Register />}

{page === "products" && (
  <Products cart={cart} setCart={setCart} />
)}

{page === "cart" && (
  <Cart cart={cart} />
)}

{page === "admin" && <Admin />}
    </div>
    </div>
  );
}

export default App;