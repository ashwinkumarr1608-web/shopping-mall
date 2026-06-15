import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Shopping Mall
          </Link>

          <div className="navbar-nav">
            <Link className="nav-link text-white" to="/home">Home</Link>
            <Link className="nav-link text-white" to="/products">Products</Link>
            <Link className="nav-link text-white" to="/cart">Cart</Link>
            <Link className="nav-link text-white" to="/login">Login</Link>
            <Link className="nav-link text-white" to="/register">Register</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h1>Online Shopping Mall</h1>
        <h2>Welcome Ashwin 😎</h2>
      </div>
    </>
  );
}

export default Home;