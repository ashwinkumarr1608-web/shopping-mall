import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <div className="container">
        <h1>Online Shopping Mall</h1>
        <h2>Welcome Ashwin 😎</h2>
      </div>
    </>
  );
}

export default Home;