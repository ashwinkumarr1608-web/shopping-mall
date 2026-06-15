import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin() {

        axios.post("https://shopping-mall-backend-mc8c.onrender.com/login", {

            email: email,
            password: password

        })
        .then((response) => {

            if (response.data === "Login Success") {

                localStorage.setItem("user", email);

                alert("Login Successful");

                navigate("/products");

            }
            else {

                alert("Invalid Email or Password");

            }

        })
        .catch((error) => {

            console.log(error);

        });

    }

    return (

        <div>

            <h1>Login</h1>

            <input
            type="email"
            placeholder="Enter Email"
            onChange={(e)=>setEmail(e.target.value)}
            />

            <br /><br />

            <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );

}

export default Login;