const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed", err);
  } else {
    console.log("MySQL Connected");
  }
});
// Brevo API Setup
const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.EMAIL_PASS;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
let generatedOTP = "";
let userData = {};
// Home API
app.get("/", (req, res) => {
  res.send("Server Running");
});
// Register API
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  userData = {
    name,
    email,
    password,
  };
  generatedOTP = Math.floor(
    100000 + Math.random() * 900000
  ).toString();
  console.log("Generated OTP:", generatedOTP);
  const sendSmtpEmail = {
    sender: {
      name: "Shopping Mall",
      email: "ashwinkumarr1608@gmail.com",
    },
    to: [
      {
        email: email,
      },
    ],
    subject: "OTP Verification",
    textContent: `Your OTP is ${generatedOTP}`,
  };
  apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(() => {
      console.log("Email sent successfully");
      res.send("OTP sent successfully");
    })
    .catch((error) => {
      console.log("Mail Error =", error);
      res.status(500).send("OTP sending failed");
    });
});
// Verify OTP API
app.post("/verifyotp", (req, res) => {
  const { otp } = req.body;
  if (otp === generatedOTP) {
    db.query(
      "INSERT INTO users(name,email,password) VALUES(?,?,?)",
      [userData.name, userData.email, userData.password],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Database Error");
        }
        res.send("OTP verified successfully");
      }
    );
  } else {
    res.send("Invalid OTP");
  }
});
// Products API
app.get("/products", (req, res) => {

  db.query(
    "SELECT * FROM products",
    (err, result) => {

      if (err) {
        console.log(err);
        res.status(500).send("Database Error");
      }
      else {
        res.json(result);
      }

    }
  );

});
// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error");
      }
      if (result.length > 0) {
        res.send("Login Success");
      } else {
        res.send("Invalid Email or Password");
      }
    }
  );
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});