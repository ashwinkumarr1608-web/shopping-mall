import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister() {

    axios.post(
      "https://shopping-mall-backend-mc8c.onrender.com/register",
      {
        name,
        email,
        password
      }
    )
    .then((response) => {

      alert(response.data);

      if (response.data === "OTP sent successfully") {

        navigate("/verify");

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
          Register
        </h1>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <br />

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
          className="btn btn-success w-100"
          onClick={handleRegister}
        >
          Register
        </button>

      </div>

    </div>

  );

}

export default Register;