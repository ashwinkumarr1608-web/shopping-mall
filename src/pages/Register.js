import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister() {

    alert("Button Clicked");

    axios.post(
      "https://shopping-mall-backend-mc8c.onrender.com/register",
      {
        name: name,
        email: email,
        password: password
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

      if (error.response) {
        alert("Server Error");
      }
      else if (error.request) {
        alert("Network Error");
      }
      else {
        alert(error.message);
      }

    });

  }

  return (

    <div>

      <h1>Register Page</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button type="button" onClick={handleRegister}>
        Register
      </button>

    </div>

  );

}

export default Register;