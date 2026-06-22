import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {

    axios.post(
      "https://shopping-mall-backend-mc8c.onrender.com/login",
      {
        email: email,
        password: password
      }
    )
    .then((response) => {

      if (response.data === "Login Success") {

        localStorage.setItem("user", email);

        alert("Login Successful ✅");

        navigate("/products");

      }
      else {

        alert("Invalid Email or Password ❌");

      }

    })
    .catch((error) => {

      console.log(error);

      alert("Server Error");

    });

  }

  return (

    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(to right, #141E30, #243B55)"
      }}
    >

      <div
        className="bg-white p-5 rounded shadow"
        style={{
          width: "400px"
        }}
      >

        <h1 className="text-center mb-4">
          Login
        </h1>

        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;