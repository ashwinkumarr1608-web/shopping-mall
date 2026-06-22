import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(to right, #141E30, #243B55)"
      }}
    >
      <div
        className="text-center text-white"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0px 0px 20px rgba(255,255,255,0.2)"
        }}
      >
        <h1 className="display-4">🛒 Online Shopping Mall</h1>

        <h3 className="mt-3">
          Welcome Guys 😎
        </h3>

        <p className="mt-3">
          Buy your favourite products at the best price!
        </p>

        <Link
          to="/products"
          className="btn btn-primary btn-lg mt-4"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;