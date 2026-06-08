import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    console.log("Button Clicked");

    axios.post("http://localhost:5000/register", {
        name,
        email,
        password
    })
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

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

      <button onClick={registerUser}>
        Register
      </button>
    </div>
  );
}

export default Register;