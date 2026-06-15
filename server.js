const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

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

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ashwinkumarr1608@gmail.com",
    pass: "chmbqlvsvsgxqmio"
  }
});

// Home
app.get("/", (req, res) => {
  res.send("ashwin test");
});

// Products
app.get("/products", (req, res) => {

  db.query("SELECT * FROM products", (err, result) => {

    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }

  });

});

// Register API (Send OTP)
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
    from: "ashwinkumarr1608@gmail.com",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is ${generatedOTP}`
  };

  transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
      console.log(error);
      res.send("OTP sending failed");
    }
    else {
      console.log("Email sent:", info.response);
      res.send("OTP sent successfully");
    }

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
        }
        else {
          res.send("OTP verified successfully");
        }

      }
    );

  }
  else {

    res.send("Invalid OTP");

  }

});

// Login API
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log(email, password);

    const sql =
    "SELECT * FROM users WHERE email=? AND password=?";

    db.query(sql, [email, password], (err, result) => {

        console.log(result);

        if (err) {
            console.log(err);
            res.send("Error");
        }
        else {
            if (result.length > 0) {
                res.send("Login Success");
            }
            else {
                res.send("Invalid Email or Password");
            }
        }
    });

});
// Server start
app.listen(5000, () => {

  console.log("Server running on port 5000");

});