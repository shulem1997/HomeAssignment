const express = require('express');
const http = require('http');

const app = express();

app.use(express.json());
// refer any api requests to relevent route
const accountRoutes = require("./routes/Accounts");

// mount the routes under /accounts
app.use("/accounts", accountRoutes);

// a message to a direct get request to server
app.get("/", (req, res) => {
  res.send("Hire Me!");
});

//server listens on port 5000
const PORT = 12345;
app.listen(PORT, () => {
  console.log(`Server is running`);
});