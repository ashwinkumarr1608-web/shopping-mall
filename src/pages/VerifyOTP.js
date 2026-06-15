import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {

  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  function handleVerify() {

    axios.post("https://shopping-mall-backend-mc8c.onrender.com/verifyotp", {

      otp: otp

    })

    .then((response) => {

      if (response.data === "OTP verified successfully") {

        alert("Registration Successful");

        navigate("/login");

      }

      else {

        alert("Invalid OTP");

      }

    })

    .catch((error) => {

      console.log(error);

    });

  }

  return (

    <div>

      <h1>Verify OTP</h1>

      <input
        type="text"
        placeholder="Enter OTP"
        onChange={(e) => setOtp(e.target.value)}
      />

      <br /><br />

      <button onClick={handleVerify}>
        Verify OTP
      </button>

    </div>

  );

}

export default VerifyOTP;