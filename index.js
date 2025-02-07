console.log("Hrusikesh ...");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/logout", (req, res) => {
  res.send("<h1>Logout Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
