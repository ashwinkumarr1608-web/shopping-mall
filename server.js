const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed", err);
  } else {
    console.log("MySQL Connected");
  }
});

app.get("/", (req, res) => {
  res.send("ashwin test");
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
        (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send("User Registered Successfully");
            }
        }
    );
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send(err);
            } else {
                if (result.length > 0) {
   res.json({
      message: "Login Success",
      role: result[0].role
   });
                } else {
                    res.send("Invalid Email or Password");
                }
            }
        }
    );
});
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});