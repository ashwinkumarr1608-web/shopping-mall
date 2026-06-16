const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");

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

let generatedOTP = "";
let userData = {};

// Brevo SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
    password
  };

  generatedOTP = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  console.log("Generated OTP:", generatedOTP);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is ${generatedOTP}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
      console.log("Mail Error =", error);
      return res.send("OTP sending failed");
    }

    console.log("Email sent:", info.response);
    res.send("OTP sent successfully");

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
          res.send("Database Error");
        } else {
          res.send("OTP verified successfully");
        }

      }
    );

  } else {

    res.send("Invalid OTP");

  }

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
        res.send("Error");

      } else {

        if (result.length > 0) {

          res.send("Login Success");

        } else {

          res.send("Invalid Email or Password");

        }

      }

    }
  );

});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});