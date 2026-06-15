import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister() {

    axios.post("https://shopping-mall-backend-mc8c.onrender.com/register", {

      name: name,
      email: email,
      password: password

    })
    .then((response) => {

      alert(response.data);

      if (response.data === "OTP sent successfully") {

        navigate("/verify");

      }

    })
    .catch((error) => {

      console.log(error);

    });

  }

  return (

    <div>

      <h1>Register Page</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleRegister}>
        Register
      </button>

    </div>

  );

}

export default Register;