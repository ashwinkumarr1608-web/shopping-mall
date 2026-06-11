import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    axios.post("https://shopping-mall-backend-mc8c.onrender.com/login", {
  email,
  password
}).then((response) => {

  if (response.data.message === "Login Success") {
    alert("Login Success");
    navigate("/products");
  } else {
    alert("Invalid Email or Password");
  }

})
.catch((error) => {
  console.log(error);
});
  };

  return (
    <div>
      <h1>Login Page</h1>

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

      <button onClick={loginUser}>
        Login
      </button>
    </div>
  );
}

export default Login;