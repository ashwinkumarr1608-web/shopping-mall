import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
   axios.post("http://localhost:5000/login", {
      email,
      password
   }).then((response) => {
    console.log(response.data);
   alert(response.data.message);

   localStorage.setItem("role", response.data.role);
})
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